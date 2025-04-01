/* @docs
label: Date & Time Filters
category: File
note: |
  In addition to the date/time filters,
  we have a `getDate` shortcode
  that outputs the current date in a given format.
example: |
  Copyright &copy; {% getDate 'year' %}
*/

const now = () => new Date();

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const formatDate = (date, format) => {
  const theDate = date || new Date();

  const m0 = theDate.getUTCMonth();
  const mm = `${m0 + 1}`.padStart(2, '0');
  const MM = months[m0];
  const M = MM.slice(0, 3);
  const d = theDate.getUTCDate();
  const dd = `${d}`.padStart(2, '0');
  const D = days[theDate.getUTCDay()];
  const yyyy = theDate.getUTCFullYear();
  const md = `${M} ${d}`;
  const iso = `${yyyy}-${mm}-${dd}`;
  const range = `${MM} ${yyyy}`;

  const formats = {
    dd,
    d,
    D,
    mm,
    MM,
    M,
    yyyy,
    md,
    iso,
    range,
    day: D,
    date: d,
    month: MM,
    year: yyyy,
    mmd: `${MM} ${d}`,
    dy: `${d}, ${yyyy}`,
    slash: `${mm}/${dd}/${yyyy}`,
    url: `${yyyy}/${mm}/${dd}`,
    short: `${M} ${d}, ${yyyy}`,
    long: `${MM} ${d}, ${yyyy}`,
  };

  return formats[format] || theDate.toUTCString();
};

/* @docs
label: getDate
category: Formatting
note: |
  Returns a date in any format.
example: |
  {{ pubdate | getDate('iso') }}
params:
  date:
    type: date | string
    note: If no date is given, returns the current date
  format:
    type: string
    note: See js file for a list of available date formats
*/
const getDate = (date, format) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return format ? formatDate(dateObj, format) : dateObj.toUTCString();
};

export default async function(eleventyConfig) {
  eleventyConfig.addFilter('getDate', getDate);

  eleventyConfig.addShortcode(
    'getDate',
    (format) => `${getDate(now(), format)}`,
  );
};
