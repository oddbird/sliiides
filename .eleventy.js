const hljs = require('@11ty/eleventy-plugin-syntaxhighlight');
const md = require('markdown-it')({
  html: true,
  breaks: false,
  linkify: true,
  typographer: true,
});

module.exports = eleventyConfig => {
  eleventyConfig.addPlugin(hljs);

  // layouts
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('demo', 'demo.njk');

  // pass-through
  eleventyConfig.addPassthroughCopy('assets');

  // filters
  eleventyConfig.addFilter('md', (content) => md.render(content));
  eleventyConfig.addFilter('mdInline', (content) => md.renderInline(content));
  eleventyConfig.addFilter('getPage', (collection, page) => {
    const pageURL = (typeof page === 'string') ? page : page.url;
    const list = collection.filter(page => page.url === pageURL);
    return list ? list[0] : null;
  });

  // shortcodes
  eleventyConfig.addPairedShortcode('md', (content) => md.render(content));
  eleventyConfig.addPairedShortcode('mdInline', (content) => md.renderInline(content));

  // markdown
  eleventyConfig.setLibrary('md', md);

  // settings
  return {
    markdownTemplateEngine: 'njk',
    templateFormats: ['njk', 'md', 'css'],
    dir: {
      data: '_data',
      includes: '_includes',
      layouts: '_layouts',
    },
  };
};
