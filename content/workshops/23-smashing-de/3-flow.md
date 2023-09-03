---
talk: Context & Flow
date: 2023-09-06
slides:

# change --------------

- pre: |
    *Design*
  title: |
    **Unknown Content** \
    On An **Unknown Canvas**
- img: space/tng.jpg
  alt: |
    USS Enterprise,
    from Star Trek The Next Generation
    opening credits
- title: CSS is **Contextual**
- title: CSS is **Content-ual**

- pre: CSS has
  title: Real **Layout Tools**
  sub: Not just *Grid* or *Flexbox*, but an entire system...

- pre: Starts with…
  title: >
    **Normal** Flow
  sub: |
    aka "_Block Formatting Context_" \
    aka "_Block Layout_"

- demo: normal-flow
  caption: AKA "Block Layout"

- img: cqs/nested.png
  alt: >
    A series of nested boxes -
    one is solid-lined and labeled 'box'

- img: cqs/intrinsic.png
  alt: >
    Boxes inside labeled 'content',
    provide 'implicit' sizing
    to the box

- title: >
    **Intrinsic** Sizing
  md: |
    - Content sizes
    - `width` or `height` of
      `min-content`, `max-content`, etc

- img: cqs/extrinsic.png
  alt: >
    Parent box labeled 'context',
    and styles from the box itself
    provide 'explicit' sizing
    to the box

- title: >
    **Extrinsic** Sizing
  md: |
    - Context sizes (available space)
    - `width` or `height`
      set in `px`, `%`, `em`, etc

- demo: normal-flow
  caption: AKA "Block Layout"

- title: 😎 **F**ing Cool Feature

- pre: The _reason_
  title: Container Queries Are **Difficult**
  sub: >
    💥 Size » Query » Change » Resize 💥

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
- pre: The _`%` hack_
  title: Not **Actually Fluid**
  sub: (relative to parent, but ignores siblings)

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

# intrinsic sizes --------------

- title: |
    **Intrinsic** Sizes
  sub: |
    **`max-content`** | **`min-content`** | **`fit-content`**
  caption: |
    [See MDN Support](https://developer.mozilla.org/en-US/docs/Web/CSS/width#Browser_compatibility)

- pen: Intrinsic Sizing
  id: JVagQW

- pre: Grid only
  title: |
    **fit-content(**`<max>`**)**
  sub: (we'll come back to it)

- pre: Intrinsic *Aspect Ratios*
  title: Using Image **Width**/**Height**
  sub: to avoid layout **jank**


# box model --------------

- pre: But First...
  title: Control the **Box Model**

- pre: Default...
  title: |
    **Content**-Box

- img: layouts/content-box.jpg
  caption: |
    **Content**-Box: `total = width/height` **`+`** `borders` **`+`** `padding`
  fit: contain

- pre: Often...
  title: |
    **Border**-Box

- img: layouts/border-box.jpg
  caption: |
    **Border**-Box: `total = width/height`
  fit: contain

- pre: Reset
  title: Global **Box-Sizing**
  css: |
    *, *::before, *::after { box-sizing: border-box; }

- pre: Box Properties
  title: 👎 Shouldn't **Inherit**
  css: |
    html { box-sizing: border-box; }
    * { box-sizing: inherit; }

# multi-value display --------------

- pre: Re-Introducing
  title: The **Display** Property

- pre: Turn off
  title: Box **Generation**
  sub: >
    `content` | `none`

- title: |
    Display: **Contents**
  sub: |
    Remove those pesky extra divs...

- caniuse: css-display-contents
  caption: |
    Careful
    [not to remove **semantics**](https://developer.mozilla.org/en-US/docs/Web/CSS/display#display_contents)

- pre: New...
  title: |
    Display: **Flow-Root**
  sub: |
    "A mini layout in your layout"...

- pre: Flow-Root
  title: |
    **Block Formatting Context**
  sub: |
    Clear floats, prevent margin-collapse...
  caption: |
    [Understanding CSS Layout And The Block Formatting Context](https://www.smashingmagazine.com/2017/12/understanding-css-layout-block-formatting-context/)

- pen: Floats and the BFC
  id: XzYWZj
  user: rachelandrew
  caption: |
    [Understanding CSS Layout And The Block Formatting Context](https://www.smashingmagazine.com/2017/12/understanding-css-layout-block-formatting-context/)
- pen: BFC Margin Collapsing
  id: YEvzRv
  user: rachelandrew
  caption: |
    [Understanding CSS Layout And The Block Formatting Context](https://www.smashingmagazine.com/2017/12/understanding-css-layout-block-formatting-context/)
- pen: A BFC preventing wrapping of floats.
  id: qVKEpJ
  user: rachelandrew
  caption: |
    [Understanding CSS Layout And The Block Formatting Context](https://www.smashingmagazine.com/2017/12/understanding-css-layout-block-formatting-context/)

- caniuse: flow-root

- pre: Also...
  title: Multiple-Value **Display**
  sub: |
    _outside_ and _inside_

- title: Decomposing **Inline-Block**…

- pre: Display-*Outside*
  title: |
    **Inline** Flow-Root...
  sub: Behavior in **parent layout**

- pre: Display-*Inside*
  title: Inline **Flow-Root**
  sub: Context for **child layout**

- caniuse: mdn-css_properties_display_multi-keyword_values

- pre: Get *Explicit*
  title: |
    **Block** Flow, **Block** Flex...
  sub: |
    The default **outer** value, when only inner is set

- pre: Get *Explicit*
  title: Block **Flow**
  sub: |
    The default **inner** value, when only outer is set

- md: |
    - `block` » **`block flow`**
    - `flow-root` » **`block flow-root`**
    - `inline` » **`inline flow`**
    - `inline-block` » **`inline flow-root`**
    - `flex` » **`block flex`**
    - `inline-flex` » **`inline flex`**
    - `grid` » **`block grid`**
    - `inline-grid` » **`inline grid`**

- pre: Fine to
  title: Keep Using **Single-Values**

# writing-modes --------------

- title: Writing **Modes**
  sub: |
    **`horizontal-tb`** | **`vertical-`**`rl`/`lr` | **`sideways-`**`rl`/`lr`

- caniuse: css-writing-mode
- caniuse: mdn-css_properties_writing-mode_sideways_values

- title: Text-**Orientation**
  sub: |
    **`mixed`** | **`upright`** | **`sideways`**
  caption: (when writing-mode is vertical)

- caniuse: css-text-orientation

- pen: Writing Modes & Orientation
  id: YMOoYz

# logical properties --------------

- pre: Understand
  title: |
    **Logical** Dimensions
  sub: |
    Writing-Mode **Relative**

- pre: |
    *Inline* ↔ Axis
  title: Text **Flow** & Box **Stretching**
- pre: |
    *Block* ↕ Axis
  title: Text **Wrap** & Box **Stacking**

- demo: normal-flow

- pre: Relative to...
  title: |
    **Physical** Space
  sub: |
    `*-top`/`*-bottom`/`*-right`/`*-left`

- pre: Relative to...
  title: |
    **Writing** Mode
  sub: |
    `*-inline`/`*-block` & `*-start`/`*-end`

- demo: logical-props

- pen: |
    Logical properties demo: inline form
  id: abbpKzK
  user: hus_hmd

# flex --------------

- pre: Flex *Container*...
  title: |
    display: **flex**

- pre: Content-Out
  title: Sharing **Space**
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
    The spec is written so that
    [four flex shorthand values](https://www.w3.org/TR/css-flexbox-1/#flex-common)
    are meant to handle the majority of use-cases.

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
  caption: |
    **\***[Best browser support](https://developer.mozilla.org/en-US/docs/Web/CSS/gap#Browser_compatibility)
    in grid layouts with `grid-*` prefix

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

- title: |
    **Viewport** Relative Units
  sub: |
    `vw` | `vh` | `vmin` | `vmax`

- title: |
    **Full**-Height…
  sub: |
    `height:` **`100vh`**

- title: |
    **Sticky**-Footer…
  sub: |
    `min-height:` **`100vh`**

- title: |
    Responsive **Type**
  sub: |
    `font-size:` **`calc(1em + 2vw)`**

- title: |
    **Breaking** Out
  sub: |
    `margin-inline:` **`calc(50% - 50vw)`**

- demo: viewport-units

- pre: Watch out for...
  title: 100vh **Phone Jank**

# object-* --------------

- pre: |
    *Replaced* Elements...
  title: |
    **object-fit** & **object-position**
  caption: |
    [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) |
    [caniuse](https://caniuse.com/#feat=object-fit)

- pre: |
    *object*-position
  title: |
    ~= **background**-position
  sub: Same values, but for placing an object

- title: |
    **object-fit**: fill
  sub: |
    **`contain`** | **`cover`** | **`scale-down`**

- demo: object-fit
- demo: box-align

# multicol --------------

- pre: Multicolumn
  title: |
    **columns**: 5 10em;
  sub: |
    **`column-count`** | **`column-width`**

- pen: Multicolumn
  id: vMWKRq
  user: stacy

# out ---------------------

- pre: |
    @TerribleMia
  title: |
    **#ResilientWebSystems**
---
