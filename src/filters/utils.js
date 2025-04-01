import _, { concat as _concat } from 'lodash-es';

/* @docs
label: Utility Filters
category: File
*/

const concat = (array, ...args) =>
  _concat(
    array,
    args.filter((arg) => arg),
  );

/* @docs
label: typeCheck
category: Inspect
note: Return either the type, or the result of a type-check.
example: |
  {{ my_data | typeCheck('array') }}
params:
  val:
    type: any
    note: The data to check
  is:
    type: string
    default: undefined
    note: Optionally check for a particular type
*/
const typeCheck = (val, is) => {
  let type = typeof val;
  if (type === 'object') {
    type = Array.isArray(val) ? 'array' : type;
  }
  return is ? type === is : type;
};

/* @docs
label: styles
category: Formatting
note: |
  Convert an object of property-value pairs
  into valid CSS for an inline-style.
example: |
  <div style="{{ style_dict | styles }}">
params:
  dict:
    type: object
    note: CSS property-value pairs
*/
const styles = (dict) =>
  _(dict)
    .map((val, prop) => (val ? `${prop}:${val};` : ''))
    .reduce((all, one) => `${all}${one}`, '');

const joinPath = (base, append) => {
  const baseSlash = base.endsWith('/');
  const appendSlash = append.startsWith('/');

  if (baseSlash && appendSlash) {
    return base + append.slice(1);
  }

  if (!baseSlash && !appendSlash) {
    return `${base}/${append}`;
  }

  return base + append;
};

const joinPaths = (paths) => paths.reduce(joinPath);

export default async function(eleventyConfig) {
  eleventyConfig.addFilter('typeCheck', typeCheck);
  eleventyConfig.addFilter('styles', styles);
  eleventyConfig.addFilter('concat', concat);
  eleventyConfig.addFilter('joinPaths', joinPaths);
};
