'use strict';

const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const yaml = require('js-yaml');
const _ = require('lodash');

const data = require('./src/filters/data');
const pages = require('./src/filters/pages');
const time = require('./src/filters/time');
const type = require('./src/filters/type');
const utils = require('./src/filters/utils');

module.exports = (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addWatchTarget('./src/images/');
  eleventyConfig.addWatchTarget('./src/media/');

  // pass-through
  eleventyConfig.addPassthroughCopy({ _built: 'assets' });
  eleventyConfig.addPassthroughCopy({ 'src/fonts': 'assets/fonts' });
  eleventyConfig.addPassthroughCopy({ 'src/images': 'assets/images' });
  // eleventyConfig.addPassthroughCopy({ 'src/media': 'assets/media' });

  eleventyConfig.addPassthroughCopy('content/robots.txt');
  eleventyConfig.addPassthroughCopy('content/favicon.ico');

  // collections
  eleventyConfig.addCollection('events', (collection) =>
    collection
      .getAll()
      .filter((item) => item.data.venue)
      .sort((a, b) => b.date - a.date),
  );

  // filters
  eleventyConfig.addFilter('merge', _.merge);
  eleventyConfig.addFilter('group', _.groupBy);

  eleventyConfig.addFilter('typeCheck', utils.typeCheck);
  eleventyConfig.addFilter('styles', utils.styles);
  eleventyConfig.addFilter('concat', utils.concat);

  eleventyConfig.addFilter('meta', data.meta);

  eleventyConfig.addFilter('getDate', time.getDate);

  eleventyConfig.addFilter('isPublic', pages.isPublic);
  eleventyConfig.addFilter('getPublic', pages.getPublic);
  eleventyConfig.addFilter('isCurrent', pages.isCurrent);
  eleventyConfig.addFilter('getPage', pages.getPage);
  eleventyConfig.addFilter('findPage', pages.findPage);
  eleventyConfig.addFilter('hasData', pages.hasData);
  eleventyConfig.addFilter('getData', pages.getData);
  eleventyConfig.addFilter('findData', pages.findData);
  eleventyConfig.addFilter('withData', pages.withData);

  eleventyConfig.addFilter('typogr', type.typogr);
  eleventyConfig.addFilter('md', type.md);
  eleventyConfig.addFilter('mdInline', type.mdInline);
  eleventyConfig.addFilter('removeMd', type.removeMd);
  eleventyConfig.addFilter('elide', type.elide);

  eleventyConfig.addFilter('yaml', yaml.safeLoad);
  eleventyConfig.addFilter('slideData', (slide, index, page) => {
    slide.index = index;
    slide.page = page;
    return slide;
  });

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
