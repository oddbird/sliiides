'use strict';

const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const yaml = require('js-yaml');
const _ = require('lodash');

const birds = require('./src/filters/birds');
const events = require('./src/filters/events');
const pages = require('./src/filters/pages');
const tags = require('./src/filters/tags');
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
  eleventyConfig.addCollection('birds', (collection) =>
    collection
      .getAll()
      .filter((item) => item.data.bird)
      .sort((a, b) => b.data.title - a.data.title),
  );
  eleventyConfig.addCollection('oss', (collection) =>
    collection
      .getAll()
      .filter((item) => item.data.oss)
      .sort((a, b) => b.date - a.date),
  );
  eleventyConfig.addCollection('sample', (collection) =>
    collection.getAll().filter((item) => item.data.sample),
  );

  // filters
  eleventyConfig.addFilter('concat', _.concat);
  eleventyConfig.addFilter('merge', _.merge);

  eleventyConfig.addFilter('typeCheck', utils.typeCheck);
  eleventyConfig.addFilter('styles', utils.styles);

  eleventyConfig.addFilter('getDate', time.getDate);
  eleventyConfig.addFilter('rssDate', time.rssDate);
  eleventyConfig.addFilter('rssLatest', time.rssLatest);

  eleventyConfig.addFilter('tagIsPublic', tags.isPublic);
  eleventyConfig.addFilter('publicTags', tags.publicTags);
  eleventyConfig.addFilter('getTags', tags.getTags);
  eleventyConfig.addFilter('tagData', tags.tagData);
  eleventyConfig.addFilter('displayName', tags.displayName);
  eleventyConfig.addFilter('tagLink', tags.tagLink);

  eleventyConfig.addFilter('isPublic', pages.isPublic);
  eleventyConfig.addFilter('getPublic', pages.getPublic);
  eleventyConfig.addFilter('isCurrent', pages.isCurrent);
  eleventyConfig.addFilter('getPage', pages.getPage);
  eleventyConfig.addFilter('findPage', pages.findPage);
  eleventyConfig.addFilter('hasData', pages.hasData);
  eleventyConfig.addFilter('getData', pages.getData);
  eleventyConfig.addFilter('findData', pages.findData);
  eleventyConfig.addFilter('withData', pages.withData);
  eleventyConfig.addFilter('render', pages.render);
  eleventyConfig.addFilter('pageType', pages.pageType);
  eleventyConfig.addFilter('pageYears', pages.pageYears);
  eleventyConfig.addFilter('byYear', pages.byYear);

  eleventyConfig.addFilter('buildEvent', events.buildEvent);
  eleventyConfig.addFilter('getEvents', events.getEvents);
  eleventyConfig.addFilter('isFuture', events.isFuture);
  eleventyConfig.addFilter('getFuture', events.getFuture);

  eleventyConfig.addFilter('byBird', birds.getPages);
  eleventyConfig.addFilter('active', birds.active);
  eleventyConfig.addFilter('authorPage', birds.authorPage);

  eleventyConfig.addFilter('typogr', type.typogr);
  eleventyConfig.addFilter('md', type.md);
  eleventyConfig.addFilter('mdInline', type.mdInline);
  eleventyConfig.addFilter('removeMd', type.removeMd);

  // shortcodes
  eleventyConfig.addPairedShortcode('md', type.md);
  eleventyConfig.addPairedShortcode('mdInline', type.mdInline);
  eleventyConfig.addPairedShortcode('h', type.heading);
  eleventyConfig.addShortcode(
    'getDate',
    (format) => `${time.getDate(time.now, format)}`,
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
