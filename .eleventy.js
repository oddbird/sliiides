'use strict';

const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const yaml = require('js-yaml');
const _ = require('lodash');
const pluginLocalRespimg = require('eleventy-plugin-local-respimg');

const config = require('./config');
const data = require('./src/filters/data');
const pages = require('./src/filters/pages');
const time = require('./src/filters/time');
const type = require('./src/filters/type');
const utils = require('./src/filters/utils');

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addWatchTarget('./src/media/');

  // pass-through
  eleventyConfig.addPassthroughCopy({ _built: 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/fonts': 'assets/fonts' });
  eleventyConfig.addPassthroughCopy({ 'src/remedy': 'assets/css' });
  eleventyConfig.addPassthroughCopy({ 'src/rad': 'assets/css' });

  if (config.env === 'dev') {
    eleventyConfig.addPassthroughCopy({
      'content/assets/images': 'assets/images',
    });
  }

  eleventyConfig.addCollection('talks', (collectionApi) => {
    const groups = collectionApi
      .getFilteredByTag('talk')
      .filter((item) => item.data.index)
      .map((home) => {
        const decks = collectionApi
          .getFilteredByTags('talk', home.data.index)
          .filter((page) => page.data.slides);

        const aka = _.uniq(decks.map((page) => page.data.title)).filter(
          (title) => title !== home.data.title,
        );

        const dates = decks.map((page) => page.date).sort((a, b) => a - b);

        return {
          home,
          decks,
          aka: aka.length > 0 ? aka : null,
          title: home.data.title,
          start: dates[0],
          end: dates[dates.length - 1],
        };
      });

    return _.sortBy(groups, ['end']).reverse();
  });

  // filters
  eleventyConfig.addFilter('merge', _.merge);
  eleventyConfig.addFilter('group', _.groupBy);
  eleventyConfig.addFilter('compact', _.compact);
  eleventyConfig.addFilter('set', _.set);

  eleventyConfig.addFilter('min', (array) => Math.min(...array));
  eleventyConfig.addFilter('max', (array) => Math.max(...array));

  eleventyConfig.addFilter('typeCheck', utils.typeCheck);
  eleventyConfig.addFilter('styles', utils.styles);
  eleventyConfig.addFilter('concat', utils.concat);
  eleventyConfig.addFilter('joinPaths', utils.joinPaths);

  eleventyConfig.addFilter('meta', data.meta);

  eleventyConfig.addFilter('getDate', time.getDate);

  eleventyConfig.addFilter('isPublic', pages.isPublic);
  eleventyConfig.addFilter('getPublic', pages.getPublic);
  eleventyConfig.addFilter('isVisible', pages.isVisible);
  eleventyConfig.addFilter('getVisible', pages.getVisible);
  eleventyConfig.addFilter('isCurrent', pages.isCurrent);
  eleventyConfig.addFilter('getCurrent', pages.isCurrent);
  eleventyConfig.addFilter('getPage', pages.getPage);
  eleventyConfig.addFilter('findPage', pages.findPage);
  eleventyConfig.addFilter('hasData', pages.hasData);
  eleventyConfig.addFilter('getData', pages.getData);
  eleventyConfig.addFilter('findData', pages.findData);
  eleventyConfig.addFilter('withData', pages.withData);
  eleventyConfig.addFilter('sortPages', pages.sortPages);

  eleventyConfig.addFilter('typogr', type.typogr);
  eleventyConfig.addFilter('md', type.md);
  eleventyConfig.addFilter('mdInline', type.mdInline);
  eleventyConfig.addFilter('removeMd', type.removeMd);
  eleventyConfig.addFilter('elide', type.elide);

  eleventyConfig.addFilter('yaml', yaml.safeLoad);

  // shortcodes
  eleventyConfig.addPairedShortcode('md', type.md);
  eleventyConfig.addPairedShortcode('mdInline', type.mdInline);
  eleventyConfig.addPairedShortcode('h', type.heading);
  eleventyConfig.addShortcode(
    'getDate',
    (format) => `${time.getDate(time.now(), format)}`,
  );

  // config
  eleventyConfig.setLibrary('md', type.mdown);
  eleventyConfig.addDataExtension('yaml', yaml.safeLoad);
  eleventyConfig.setQuietMode(true);
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.setTemplateFormats([
    'md',
    'njk',
    'html',
    'txt',
    'ico',
    'css',
    '11ty.js',
  ]);

  eleventyConfig.setBrowserSyncConfig({
    ghostMode: false,
  });

  if (config.env !== 'dev') {
    eleventyConfig.addPlugin(pluginLocalRespimg, {
      folders: {
        source: 'content', // Folder images are stored in
        output: '_site', // Folder images should be output to
      },
      images: {
        resize: {
          min: 300, // Minimum width to resize an image to
          max: 1500, // Maximum width to resize an image to
          step: 300, // Width difference between each resized image
        },
        gifToVideo: false, // Convert GIFs to MP4 videos
        sizes: '100vw', // Default image `sizes` attribute
        lazy: false, // Include `loading="lazy"` attribute for images
        additional: ['assets/images/**/**/*'],
      },
    });
  }

  // settings
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'content',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
