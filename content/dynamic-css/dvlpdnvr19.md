---
venue: Develop Denver
date: 2019-08-15
slides:
- from: intro
  use: oddbird
- from: shared
  use: susy
- from: shared
  use: no-susy
- title: |
    *1989…* HTML
  sub: Markup Language
- quote: |
    It is required that HTML be a common language
    between all platforms.
    This implies no device-specific markup,
    **or anything which requires control over fonts or colors**.
  cite: Sir Tim
- img: process/www-cern.jpg
  alt: Screenshot of first world wide website
- title: |
    *~~1996~~ 2000…* \
    **Cascading** Style Sheets
- md: |
    ![CSS is Awesome](/images/dynamic-css/css-is-awesome.jpg)
    (The **End**)
- img: dynamic-css/devices.jpg
  alt: A zillion different devices of all sizes (original)
- img: process/smartwatch.jpg
  alt: Lineup of smart watches
- img: unfriendly/braille.jpg
  alt: Braille computer attachment and headphones
- title: |
    **Declarative** Syntax \
    `!=` **Static** Results
- title: Design for an *Unknown Canvas*
  sub: CSS is **Dynamic** & **Resilient** by Design
- title: |
    *2011…* `calc()`
  sub: Firefox 4 -- **`function`**
- title: |
    `calc(` *`16px`* `+` *`20%`* `)`
  sub: Combine **Relative** & **Fixed** Widths!
- title: |
    *2014…* CSS **Variables**
  sub: Firefox 31 (unless you count **`currentColor`**)
- title: |
    *`--aka`*`:` *`'custom properties'`*`;`
- title: |
    `-<empty>-`*`browser-prefix`*
- title: |
    `var(`*`--name`*`, fallback)`
  sub: |
    `var(`*`--one`*`, var(`*`--two`*`, var(`*`--three`*`, fallback)))`
- pen: Custom Props (live code)
  id: 4139af81286aa69d17850cea2ad4d6bc
- pen: Variables » Functions » Mixins (live code)
  id: 7356fcf8374ae1bd73906fd7afece1f9
- img: dynamic-css/smashing-vars.jpg
  alt: CSS Custom Properties in the Cascade by Miriam Suzanne
  caption: |
    Article on
    [Smashing Magazine](https://www.smashingmagazine.com/2019/07/css-custom-properties-cascade/)
---
