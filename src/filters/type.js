'use strict';

const removeMd = require('remove-markdown');
const type = require('typogr');
const markdown = require('markdown-it');
const mdMark = require('markdown-it-mark');
const mdFootnote = require('markdown-it-footnote');

const mdown = markdown({
  html: true,
  breaks: false,
  typographer: true,
})
  .use(mdMark)
  .use(mdFootnote);

/* @docs
label: Typography Filters
category: File
*/

/* @docs
label: typogr
category: typesetting
links:
  - '[Typogr.js](https://github.com/ekalinin/typogr.js/)'
params:
  content:
    type: string
  inline:
    type: boolean
    default: false
    note: |
      Inline typesetting removes the "widont" filter
      if the text has fewer than 5 words
*/
const typogr = (content, inline = false) => {
  if (content) {
    // if this is inline text with less than 5 words
    // avoid the "widont" feature
    return inline && content.split(' ').length < 5
      ? type(content)
          .chain()
          .amp()
          .smartypants()
          .initQuotes()
          .caps()
          .ord()
          .value()
      : type.typogrify(content);
  }

  return content;
};

/* @docs
label: md
category: typesetting
note: Block markdown with typesetting
params:
  content:
    type: string
*/
const md = (content) => (content ? typogr(mdown.render(content)) : content);

/* @docs
label: mdInline
category: typesetting
note: Inline markdown with inline typesetting
params:
  content:
    type: string
*/
const mdInline = (content) =>
  content ? typogr(mdown.renderInline(content), true) : content;

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
  const attr_html = Object.keys(attrs)
    .map((attr) => {
      const val = attrs[attr];
      if (val) {
        return typeof val === 'boolean' || val === ''
          ? `${attr}`
          : `${attr}="${val}"`;
      }

      return undefined;
    })
    .filter((attr) => attr)
    .join(' ');

  return `<h${level} ${attr_html}>${content}</h${level}>`;
};

module.exports = { mdown, typogr, md, mdInline, removeMd, heading };
