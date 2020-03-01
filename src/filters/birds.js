'use strict';

const { hasData, withData, isCurrent } = require('./pages');

/* @docs
label: Bird Filters
category: File
note: Filtering data related to individual Odd Birds
*/

/* @docs
label: byBird
category: Pages
note: Get all the pages where a given bird is one of the authors
example: |
  {{ collections.all | byBird('miriam') }}
params:
  collection:
    type: array
    note: containing 11ty page objects
  bird:
    type: string
    note: The name of the bird (as used in `author` settings)
  solo:
    type: boolean
    default: false
    note: Optionally remove `oddbird`-authored pages from the collection
*/
const getPages = (collection, bird, solo = false) =>
  collection.filter(
    (page) =>
      hasData(page, 'data.author', bird) ||
      (solo ? false : hasData(page, 'data.author', 'oddbird')),
  );

/* @docs
label: active
category: pages
note: |
  Return all active bird pages in a collection,
  sorted by active date.
example: |
  {{ collections.birds | active }}
params:
  collection:
    type: array
    note: containing 11ty page objects
  current:
    type: boolean
    default: 'true'
    note: Flip result to show inactive birds
*/
const active = (collection, current = true) =>
  collection
    .filter((page) => page.data.bird !== 'oddbird')
    .filter((page) => (current ? isCurrent(page) : !isCurrent(page)));

/* @docs
label: authorPage
category: Pages
note: Return the home page of a given author
example: |
  {{ collections.all | authorPage('miriam') }}
params:
  collection:
    type: array
    note: containing 11ty page objects
  bird:
    type: string
    note: The name of the bird (as used in `author` settings)
*/
const authorPage = (collection, bird) =>
  withData(collection, 'data.bird', bird)[0];

module.exports = { getPages, active, authorPage };
