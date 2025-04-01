import markdownIt from 'markdown-it';
import mdMark from 'markdown-it-mark';

const mdIt = markdownIt({
  html: true,
  breaks: false,
  typographer: true,
})
  .disable('code')
  .use(mdMark);

const md = (content) => (content ? mdIt.render(content.trim()) : '');
const mdInline = (content) => (content ? mdIt.renderInline(content.trim()) : '');

/* @docs
label: h
category: headings
note: Generate a heading at any given level
params:
content:
  type: string
level:
  type: Number (1-6)
attrs:
  type: object
*/
const heading = (content, level, attrs = {}) => {
  const attr_html = _(attrs)
    .map((val, attr) => {
      if (!val) {
        return undefined;
      }
      return typeof val === 'boolean' || val === ''
        ? `${attr}`
        : `${attr}="${val}"`;
    })
    .filter((attr) => attr)
    .join(' ');

  return `<h${level} ${attr_html}>${content}</h${level}>`;
};

export default async function(eleventyConfig) {
  eleventyConfig.addFilter('md', md);
  eleventyConfig.addFilter('mdInline', mdInline);

  eleventyConfig.addPairedShortcode('md', md);
  eleventyConfig.addPairedShortcode('mdInline', mdInline);
  eleventyConfig.addPairedShortcode('h', heading);

  eleventyConfig.setLibrary('md', mdIt);
};
