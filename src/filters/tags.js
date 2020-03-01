'use strict';

const slugify = require('slugify');
const { uniq } = require('lodash');

const { withData, getData } = require('./pages');

/* @docs
label: Tag Filters
category: File
*/

/* @docs
label: isPublic
category: Visibility
note: Return false if a tag name starts with `_`
params:
  tag:
    type: string
*/
const isPublic = (tag) => !tag.startsWith('_');

/* @docs
label: publicTags
category: Visibility
note: Remove private `_<name>` tags from a list
params:
  tags:
    type: array
*/
const publicTags = (tags) =>
  tags ? tags.filter((tag) => isPublic(tag)) : tags;

/* @docs
label: displayName
category: Visibility
note: |
  Returns a tag name with private `_` removed,
  for those rare cases where we want to display private tags.
params:
  tag:
    type: string
*/
const displayName = (tag) => {
  const capitalize = ([first, ...rest]) =>
    first ? first.toUpperCase() + rest.join('') : '';

  return tag.startsWith('_') ? capitalize(tag.slice(1)) : tag;
};

/* @docs
label: tagLink
category: Links
note: |
  Returns the link for a given tag --
  either the auto-generated tag page,
  or page marked as `index` for that tag
params:
  all:
    type: array
    note: containing all 11ty page objects (`collections.all`)
  tag:
    type: string
*/
const tagLink = (all, tag) => {
  const index =
    withData(all, 'data.index', tag)[0] ||
    withData(all, 'data.index.slug', tag)[0];
  return index ? index.url : `/tags/${slugify(tag)}/`;
};

/* @docs
label: getTags
category: List
note: Returns all tags in a collection
params:
  collection:
    type: array
    note: containing 11ty page objects
*/
const getTags = (collection) => getData(collection, 'data.tags');

/* @docs
label: tagData
category: List
note: |
  Returns an array tag-data objects for each tag,
  including name, url, and page count
params:
  collections:
    type: 11ty collections object
  tags:
    type: array | 'all'
    default: undefined
    note: Will return data for all tags when set to `all`
  sort:
    type: "'pageCount' | 'tag'"
    default: 'pageCount'
*/
const tagData = (collections, tags, sort = 'pageCount') => {
  const taglist = tags === 'all' ? getTags(collections.all) : tags;
  return uniq(publicTags(taglist))
    .map((tag) => ({
      tag,
      url: tagLink(collections.all, tag),
      pageCount: collections[tag].length,
    }))
    .sort((a, b) => b[sort] - a[sort]);
};

module.exports = {
  isPublic,
  publicTags,
  getTags,
  tagData,
  displayName,
  tagLink,
};
