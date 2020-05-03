'use strict';

const { images } = require('#/data');

const responsiveConfig = images.srcset.map((size) => ({
  width: size,
  rename: {
    suffix: `-${size}`,
  },
}));

/* @docs
label: imgSuffix
category: responsive images
note: Add img suffix for responsiveness
example: |
  <img srcset="{{ src | imgSuffix('320') }} 320w" />
params:
  imgSrc:
    type: string
  suffix:
    type: string | number
*/
const imgSuffix = (imgSrc, suffix) => {
  const idx = imgSrc.lastIndexOf('.');
  const imgPath = imgSrc.substring(0, idx);
  const ext = imgSrc.substring(idx + 1);
  return `${imgPath}-${suffix}.${ext}`;
};

/* @docs
label: imgSize
category: responsive images
note: Resize image height/width attributes to match output
example: |
  {% set size = img.width | imgSize(img.height) %}
  <img src="..." width="{{ size.width }}" height="{{ size.height }}" />
params:
  width:
    type: number
    default: null
  height:
    type: number
    default: null
*/
const imgSize = (width = null, height = null, size) => {
  const img = { width, height };
  const explicitSize = images.sizes[size] ? images.sizes[size].fallback : size;

  const fallback =
    typeof explicitSize === 'number' ? explicitSize : images.fallback;

  if (width && width > fallback) {
    img.width = fallback;
    img.height = height ? Math.round((fallback / width) * height) : height;
  }

  return img;
};

module.exports = {
  imgSize,
  imgSuffix,
  responsiveConfig,
};
