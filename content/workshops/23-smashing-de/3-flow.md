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
- title: CSS is **Contextual**
- title: CSS is **Content-ual**

- pre: CSS has
  title: Real **Layout Tools**
  sub: Not just *Grid* or *Flexbox*, but an entire system...

# box model --------------

- section: (Fixing) The **Box Model**

- img: cqs/nested.png
  alt: >
    A series of nested boxes -
    one is solid-lined and labeled 'box'

- demo: box-model

- pre: Default _Sizing_…
  title: |
    **Content**-Box

- img: layouts/content-box.jpg
  caption: |
    **Content**-Box: `value + padding + borders == box`
  fit: contain

- pre: Useful for…
  title: Defining **Content Size**
  sub: Like a page wrapper with a max width, plus padding

- pre: More _Often_…
  title: |
    **Border**-Box Sizing

- img: layouts/border-box.jpg
  caption: |
    **Border**-Box: `value == box`
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

# intrinsic/extrinsic flow --------------

- section: >
    **Normal** Flow

- demo: normal-flow
  caption: >
    aka "_Block Formatting Context_"
    or "_Block Layout_"

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

- img: cqs/flowing.png
  alt: >
    Two circles labeled context and content,
    with arrows going both ways

- title: >
    Trust **The Flow**
  sub: >
    Use `absolute`/`fixed` position with caution

- pen: Positioning & Flow
  id: rNoMdvp
  caption: Positioning _non-flow_ elements

- title: 😎 **F**ing Cool Feature

- pre: The _reason_
  title: Container Queries Are **Difficult**
  sub: >
    💥 Size » Query » Change » Resize 💥

# intrinsic sizes --------------

- section: >
    **Intrinsic** Sizing

- title: |
    Intrinsic Size **Keywords**
  sub: |
    **`max-content`** | **`min-content`** | **`fit-content`**
  caption: |
    [See MDN Support](https://developer.mozilla.org/en-US/docs/Web/CSS/width#Browser_compatibility)

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
    - `auto`
    - `min-content`
    - `max-content`
    - `fit-content`

- pre: Grid only _function_
  title: |
    **fit-content(**`<max>`**)**
  sub: >
    `min(max-content, max(min-content, `_`<max>`_`))`

- title: >
    `fit-content` **Keyword**
  sub: >
    `fit-content(`_`stretch`_`)`

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

- pen: Intrinsic Sizing
  id: JVagQW

# aspect ratios --------------

- section: >
    **Aspect** Ratios

- title: Use Image **Width**/**Height**
  sub: >
    to avoid _jumpy layout_ while loading

- title: >
    **Extrinsic** Aspect-Ratio
  sub: |
    _`aspect-ratio`_`: `_`<ratio>`_`;`
- title: >
    **Mixed** Aspect-Ratio
  sub: |
    _`aspect-ratio`_`: <ratio>` _`auto`_`;`

- pen: Image ratio css, html hints, and natural sizes
  id: ZEVprwW

# multi-value display --------------

- section: >
    **Display** Complexities

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
  title: Multi-Value Display

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

# overflow --------------

- section: >
    **Overflow** & **Scroll**

- pen: css-rad

- pre: First…
  title: Do **No Harm**

- title: >
    **Text**-Overflow
  sub: >
    `clip` | `ellipsis`
  caption: >
    What to do with extra text

- title: Not a **Content Strategy**
  sub: Makes dangerous ass… (umptions)

- title: >
    Overflow-**Wrap**
  sub: >
    `break-word` | `anywhere`

- pen: Overflow-Wrap
  id: GRKoxXY

- title: Box **Overflow**
  sub: >
    `overflow-x`/`-y` | `overflow-inline`/`-block`

- title: Default **Visible**
  sub: Acts like `auto` when single-axis

- title: >
    Overflow **Hidden**
  md: |
    - no scroll bar
    - clipped at `padding-box` edge
    - programmatic scrolling _is allowed_

- title: >
    Overflow **Clip**
  md: |
    - no scroll bar
    - clipped at `padding-box` _`+ overflow-clip-margin`_ edge
    - programmatic scrolling _not allowed_

- img: deep-dive/polypane-clip.png
  alt: |
    Polypane website hero area,
    with a 3d browser window
    popping out of the content area,
    but clipped at the page edge
  caption: >
    From [Polypane](https://polypane.app/)

- caniuse: mdn-css_types_overflow_clip
  title: Overflow Clip

- title: >
    Overflow **Scroll** / **Auto**
  sub: (usually _auto_…)

- pen: css-rad

- title: Scroll **Snapping**

- pen: Scroll Snap Gallery
  id: bXRebo

- pen: Scroll Snap Demo & Notes
  id: vomNBg

# writing-modes --------------

- section: >
    Writing **Modes** & **Orientation**

- title: Writing **Modes**
  sub: |
    **`horizontal-tb`** | **`vertical-`**`rl`/`lr` | **`sideways-`**`rl`/`lr`

- caniuse: css-writing-mode
- caniuse: mdn-css_properties_writing-mode_sideways_values
  title: Sideways Writing Modes

- title: Text-**Orientation**
  sub: |
    **`mixed`** | **`upright`** | **`sideways`**
  caption: (when writing-mode is vertical)

- caniuse: css-text-orientation

- pen: Writing Modes & Orientation
  id: YMOoYz

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

- pen: >
    Logical properties demo: inline form
  id: abbpKzK
  user: hus_hmd

- pre: MDN has
  title: >
    Complete [Logical Listing](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)

---
