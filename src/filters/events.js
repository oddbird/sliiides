'use strict';

const { now, getDate } = require('./time');

/* @docs
label: Event Filters
category: File
*/

/* @docs
label: buildEvent
category: List
note: |
  Build an event-page out of combined event and page data,
  so that events can be treated as a page of their own
params:
  page:
    type: 11ty page object
  event:
    type: object
*/
const buildEvent = (page, event) => ({
  date: event.date ? getDate(event.date) : page.date,
  url: page.url,
  inputPath: page.inputPath,
  fileSlug: page.fileSlug,
  outputPath: page.outputPath,
  data: page.data,
  event,
});

/* @docs
label: getEvents
category: List
note: |
  Turn collection-events into top-level pages,
  either in-addition-to or replacing their source pages
links:
  - '[Event-list samples](/sample/events/)'
params:
  collection:
    type: 11ty collection
  pages:
    type: boolean | mixed
    default: 'mixed'
    note: |
      Set `true` to leave event-source pages in the list,
      or `false` to remove all pages from the list
      and show events only
*/
const getEvents = (collection, pages = 'mixed') => {
  const results = [];

  collection.forEach((page) => {
    if (page.data.events) {
      page.data.events.forEach((event) => {
        results.push(buildEvent(page, event));
      });

      if (Boolean(pages) && pages !== 'mixed') {
        results.push(page);
      }
    } else if (pages) {
      results.push(page);
    }
  });

  return results.sort((a, b) => b.date - a.date);
};

/* @docs
label: isFuture
category: Upcoming
note: Check that the page/event has a start date in the future (or today)
params:
  page:
    type: event object
*/
const isFuture = (event) =>
  event.end ? getDate(event.end) >= now : getDate(event.date) >= now;

/* @docs
label: getFuture
category: Upcoming
note: Return only the pages/events in the future
params:
  events:
    type: array of events
*/
const getFuture = (events) => events.filter((event) => isFuture(event));

/* @docs
label: withFuture
category: Upcoming
note: Return only the pages/events in the future
params:
  collection:
    type: array
    note: containing 11ty page objects
*/
const withFuture = (collection) =>
  collection.filter((page) => page.data.events && getFuture(page.data.events));

module.exports = {
  buildEvent,
  getEvents,
  isFuture,
  getFuture,
  withFuture,
};
