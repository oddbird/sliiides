import { eleventyImageTransformPlugin } from '@11ty/eleventy-img';
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import yaml from "js-yaml";
import { uniq, sortBy, merge, groupBy, compact, set } from 'lodash-es';

import pluginData from './src/filters/data.js';
import pluginPages from './src/filters/pages.js';
import pluginTime from './src/filters/time.js';
import pluginType from './src/filters/type.js';
import pluginUtils from './src/filters/utils.js';

export default (eleventyConfig) => {
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget('./src/media/');

  // eleventyConfig.addPlugin(eleventyImageTransformPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPlugin(pluginData);
  eleventyConfig.addPlugin(pluginPages);
  eleventyConfig.addPlugin(pluginTime);
  eleventyConfig.addPlugin(pluginType);
  eleventyConfig.addPlugin(pluginUtils);

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    formats: ['avif', 'jpeg'],
    widths: [640, 960, 1600],

    defaultAttributes: {
      loading: 'lazy',
      decoding: 'async',
      sizes: '100vw'
    },
  });

  // pass-through
  eleventyConfig.addPassthroughCopy({
    _built: 'assets',
    'content/favicon.ico': 'favicon.ico',
    'src/fonts': 'assets/fonts',
    'src/remedy': 'assets/css',
    'src/rad': 'assets/css',
    'src/js/browser-support.js': 'assets/js/browser-support.js',
  });

  eleventyConfig.addCollection('talks', (collectionApi) => {
    const groups = collectionApi
      .getFilteredByTag('talk')
      .filter((item) => item.data.index)
      .map((home) => {
        const decks = collectionApi
          .getFilteredByTags('talk', home.data.index)
          .filter((page) => page.data.slides);

        const aka = uniq(decks.map((page) => page.data.title)).filter(
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

    return sortBy(groups, ['end']).reverse();
  });

  // filters
  eleventyConfig.addFilter('merge', merge);
  eleventyConfig.addFilter('group', groupBy);
  eleventyConfig.addFilter('compact', compact);
  eleventyConfig.addFilter('set', set);

  eleventyConfig.addFilter('min', (array) => Math.min(...array));
  eleventyConfig.addFilter('max', (array) => Math.max(...array));
  eleventyConfig.addFilter('split', (str, sub) => str.split(sub));

  eleventyConfig.addFilter('yaml', yaml.load);
  eleventyConfig.addDataExtension('yaml', yaml.load);

  // config
  eleventyConfig.setQuietMode(true);
  eleventyConfig.setDataDeepMerge(true);

  // settings
  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'content',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
