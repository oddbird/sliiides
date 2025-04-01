import { readFileSync } from 'fs';
import yaml from "js-yaml";

const site = yaml.load(
  // eslint-disable-next-line no-sync
  readFileSync('./content/_data/site.yaml', 'utf8'),
);

const assets = yaml.load(
  // eslint-disable-next-line no-sync
  readFileSync('./content/_data/assets.yaml', 'utf8'),
);

const data = { assets, site };

const meta = (type) => data[type];

export default async function(eleventyConfig) {
  eleventyConfig.addFilter('meta', meta);
};
