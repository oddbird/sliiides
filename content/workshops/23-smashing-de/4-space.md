---
talk: Distributing Space
date: 2023-09-06
slides:

# responsive design --------------

- pre: Since *2010*
  title: |
    **Responsive** Web Design**™**
  caption: |
    Original List Apart
    [Responsive Web Design](https://alistapart.com/article/responsive-web-design/)
    article by **Ethan Marcotte**
- md: |
    1. Fluid **`%`** Images
    2. Fluid **`%`** Columns
    3. **`@media`** Queries
- img: advanced-css/wire-narrow.jpg
  alt: A small-screen wireframe
  fit: contain
  caption: >
    mobile first?
- img: advanced-css/wire-content.jpg
  alt: A wide-screen wireframe with different sizes
  fit: contain
  caption: >
    `@media (min-width: 45em) { /* … */ }`
- img: advanced-css/wire-wide.jpg
  alt: A wide-screen wireframe
  fit: contain
  caption: >
    `@media (min-width: 60em) { /* … */ }`

- pre: A _holdover_
  title: From Print **Page Description**

- demo: viewport-sizes
  caption: Data from viewports.fyi

- pre: The _`%`_ unit
  title: Not **Actually Fluid**
  sub: Relative to parent, ignores siblings

# intrinsic --------------

- face: jensimmons.jpg
  pre: |
    @jensimmons
  title: |
    **Jen** Simmons
  md: |
    [Everything You Know About Web Design Just Changed](https://youtu.be/jBwBACbRuGY)

- title: |
    **Intrinsic** Web Design
  sub: |
    The _responsive web_ keeps evolving…
  caption: |
    [Jen Simmons](https://twitter.com/jensimmons/status/980980521848127488)

- md: |
    1. **Fluid** & **Fixed**
    2. Stages of **Squishiness**
    3. Truly **Two-Dimensional** Layouts
    4. **Nested** Contexts
    5. **Expand** & **Contract** Content
    6. Media Queries, **As Needed**

- pre: Can involve…
  title: Defined **Layouts**

- pre: But first…
  title: Distributing **Space**

- pre: And…
  title: Managing **Alignment**

# flex --------------

- section: >
    **Flexbox** & **Alignment**

- pre: Flex *Container*...
  title: |
    display: **flex**

- pre: Content-Out
  title: Elements **Sharing Space**
  sub: use grid for **layout-in**

- css: |
    .default-values {
      flex-direction: row; /* column[-reverse] */
      flex-wrap: nowrap; /* wrap | wrap-reverse */
    }

- pen: Flex-flow
  id: dLZpqX
  user: stacy

- pre: Flex *Items*...
  title: |
    **flex-grow**: 1
  sub: Distribution of **Available** Space

- pre: Flex *Items*...
  title: |
    **flex-shrink**: 1
  sub: Distribution of **Unavailable** Space

- pre: Flex *Items*...
  title: |
    **flex-basis**: auto
  sub: The ideal **starting width**, before flexing

- pre: Four Flex
  title: |
    **Shorthand** Values
  sub: |
     **`initial`** | **`auto`** | **`none`** | **`<grow>`**
  caption: |
    [shorthand values](https://www.w3.org/TR/css-flexbox-1/#flex-common)
    designed to handle the majority of use-cases

- pre: Initial
  title: |
    **Shrink**, If Necessary
  sub: Same as **`0 1 auto`**
- pre: Auto
  title: |
    **Shrink** or **Grow**
  sub: Same as **`1 1 auto`**
- pre: None
  title: |
    **Don't Flex**
  sub: Same as **`0 0 auto`**
- pre: |
    <grow>
  title: |
    Share Space **Equally**
  sub: Same as **`<grow> 1 0`**

- demo: box-align

# box alignment --------------

- title: Box **Alignment**
  sub: |
    currently in flexbox & grid...
  caption: |
    [Box Alignment Cheatsheet](https://rachelandrew.co.uk/css/cheatsheets/box-alignment)
    by **Rachel Andrew**

- title: 🤯 On **Both Axis**

- demo: box-align

- pre: Inline Axis
  title: |
    **justify-***
  sub: |
    `justify`**`-content`** | `justify-`**`items`** | `justify-`**`self`**

- pre: Block Axis
  title: |
    **align-***
  sub: |
    `align`**`-content`** | `align-`**`items`** | `align-`**`self`**

- pre: Shorthand
  title: |
    **place-*** <align> <justify>
  sub: |
     `place`**`-content`** | `place-`**`items`** | `place-`**`self`**

- title: |
    **Positional** Values
  sub: |
    **`start`** | **`end`** | **`center`** ...

- title: |
    **Baseline** Values
  sub: |
    **`baseline`** | **`first`** `baseline` | **`last`** `baseline`

- title: |
    **Distributed** Values
  sub: |
    **`stretch`** | **`space-between`** | **`space-around`**  | **`space-evenly`**

- title: |
    **Overflow** Keywords
  sub: |
    **`safe`** | **`unsafe`**

- title: Real **Gutters**\*
  sub: |
    **`row-gap`** | **`column-gap`** | **`gap`**

# order -------------------

- title: |
    **order**: 3
  sub: In flex or grid layout...

- pen: Flex-Order
  id: YMJKbg

- pre: |
    !important
  title: |
    **Accessibility** Issues
  sub: |
    **`*-reverse`** | **`order`**
  caption: |
    [Read the MDN article »](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)

- quote: |
    Authors must use order and the grid-placement properties
    **only for visual, not logical, reordering** of content.
  cite: |
    [Grid Specification](https://drafts.csswg.org/css-grid/#order-accessibility)

- pre: Use ordering
  title: To **Improve Readability**
  sub: Always check your tab-order...

- md: |
   1. Start with **structured** & **accessible** HTML
   2. Create a responsive & **responsible layout**
   3. If you re-order, **consider updating the DOM**

# viewport units --------------

- section: >
    **Viewport** Units

- title: |
    **Viewport** Relative Units
  sub: |
    `vw`/`vi` | `vh`/`vb` | `vmin` | `vmax`

- title: |
    Responsive **Type**
  sub: |
    `font-size:` **`calc(1em + 2vw)`**

- pre: Be sure to test…
  title: >
    **Zoom** In/Out

- pre: Get fancy…
  title: >
    [utopia.fyi](https://utopia.fyi/)

- title: |
    **Breaking** Out
  sub: |
    `margin-inline:` **`calc(50% - 50vw)`**

- demo: viewport-units

- pre: Watch out for...
  title: 100vh **Phone Jank**

- img: cqs/bramus-viewports.png
  alt: |
    On an example phone,
    the large viewport fills the full screen
    with all browser chrome hidden -
    the small viewport fills the remaining space
    when top and bottom browser chrome are visible
  fit: contain
  caption: |
    [The Large, Small, and Dynamic Viewports](https://www.bram.us/2021/07/08/the-large-small-and-dynamic-viewports/)
    by **Bramus Van Damme**

- title: |
    **Small Viewport** Units
  sub: |
    `svw`/`svi` | `svh`/`svb` | `svmin` | `svmax`

- pre: Great for…
  title: >
    **Full(ish)-height** sections

- title: |
    **Large Viewport** Units
  sub: |
    `lvw`/`lvi` | `lvh`/`lvb` | `lvmin` | `lvmax`

- title: |
    **Dynamic Viewport** Units
  sub: |
    `dvw`/`dvi` | `dvh`/`dvb` | `dvmin` | `dvmax`

# comparisons -----------

- section: >
    **Comparison** Functions

- title: >
    **Comparison** Functions
  sub: >
    `min()`, `max()`, and `clamp()`

- pre: >
    _Min_ and _Max_
  title: >
    Multiple **Calculations**
  css: |
    min(1em + 1vw, 2em, 15%) /* use smallest */
    max(10 * (1vw + 1vh) / 2, 1em) /* use largest */

- title: >
    **Nested** Calculations
  css: |
    max(1.5em, min(1em + 1vw, 3em))

- pre: Clamp()
  title: >
    Dynamic **Between** Min & Max

- title: >
    `clamp(`_`<min>`_`, `_`<dynamic>`_`, `_`<max>`_`)`
  caption: >
    `max(`_`<min>`_`, min(`_`<dynamic>`_`, `_`<max>`_`))`
  css: |
    clamp(1em, 1em + 2vw, 5em)

- pre: These are
  title: >
    **Math** Functions

- title: 🙅🏻‍♀️ Not Allowed
  caption: >
    `min-content` and `auto` are not _numbers_
  css: |
    min(min-content, auto)

# multicol --------------

- section: >
    **Multi**Column

- pre: Multicolumn
  title: |
    **columns**: 5 10em;
  sub: |
    **`column-count`** | **`column-width`**

- pen: Multicolumn
  id: vMWKRq
  user: stacy

---
