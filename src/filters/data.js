'use strict';

const fs = require('fs');

const yaml = require('js-yaml');

const site = yaml.safeLoad(
  // eslint-disable-next-line no-sync
  fs.readFileSync('./content/_data/site.yaml', 'utf8'),
);

const assets = yaml.safeLoad(
  // eslint-disable-next-line no-sync
  fs.readFileSync('./content/_data/assets.yaml', 'utf8'),
);

const images = yaml.safeLoad(
  // eslint-disable-next-line no-sync
  fs.readFileSync('./content/_data/images.yaml', 'utf8'),
);

const data = { assets, site, images };

const meta = (type) => data[type];

module.exports = {
  assets,
  site,
  images,
  meta,
};
