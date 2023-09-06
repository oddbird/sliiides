---
talk: Defining Layout
date: 2023-09-06
slides:

# intro ---------------------

- pre: 90s...
  title: HTML **`<table>`**

- title: |
    (╯`'□'`)╯︵ **┻━┻** \
    TABLES ARE FOR **DATA**

- title: |
    **┬──┬** ノ( ゜-゜ノ)

- pre: 00s...
  title: |
    **Float**: Everything
  sub: watch out for the *double-margin bug*!

- pre: 2007-2010...
  title: Major **Grid Frameworks**
  sub: Blueprint, OOCSS, 960gs, Susy, etc…

- img: layouts/12.jpg
  alt: 12 equal columns, with gutters
  caption: 12 column grid, single axis
  fit: contain

- img: layouts/spread-narrow.jpg
  alt: an item that spans 6 columns
  caption: Span some of those columns!
  fit: contain

- img: layouts/12-after.jpg
  alt: grid item with margin on the right side to form a gutter
  caption: Add a gutter on the right margin…
  fit: contain

- img: layouts/12-after-last.jpg
  alt: far-right grid item has no space for a right gutter
  caption: Remove the last margin in a row…
  fit: contain

- pre: 2010...
  title: |
    **Responsive** Web Design**™**
  caption: |
    Original List Apart
    [Responsive Web Design](https://alistapart.com/article/responsive-web-design/)
    article by **Ethan Marcotte**

- md: |
    ```scss
    .grid-span {
      width: percentage( /* 23.7288136% */
        ((3 * 4em) + (2 * 1em)) / ((12 * 4em) + (11 * 1em))
      );
      margin-right: percentage( /* 01.6949153% */
        1em / ((12 * 4em) + (11 * 1em))
      );
      padding-left: percentage( /* 08.4745763% */
        ((1 * 4em) + (1 * 1em)) / ((12 * 4em) + (11 * 1em))
      );
    }
    ```
  caption: Watch out for *sub-pixel rounding*

- title: |
    (╯`'□'`)╯︵ **┻━┻** \
    FLOATS ARE FOR **---**

- img: layouts/float.jpg
  caption: Great for elements that should... float...

- pre: 2012...
  title: |
    **Flex**ible **Box**es

- pre: Great for
  title: |
    **Auto-Distributing** space

- pre: |
    *Not* great for
  title: |
    **Explicit** Layout

- title: Avoid **Explicit** Widths
  sub: Flexbox is an **implicit** system

- pre: Designed to
  title: Pair With **CSS Grid**
  sub: oops, five years later...

- pre: 2017...
  title: CSS **Grid**
  sub: |
    **March 6-9**: Firefox 52 **&** Chrome 57

- pre: Modern
  title: Web Is **Evergreen**
  sub: new features **over the weekend**

- pre: |
    *Explicit* (2D) Layouts!
  title: With **Rows** & **Columns**

- pre: |
    *Explicit* Layouts!
  title: Defined by the **Container**

- pre: |
    *Explicit* Layouts!
  title: With **Intrinsic** Options

- title: |
    display: **grid**

- img: grids/12-no.jpg
  alt: 12 equal columns, scribbled out
  fit: contain

- caption: |
    **Intrinsic Web Design** by
    [Jen Simmons](https://twitter.com/jensimmons/status/980980521848127488)
  md: |
    1. **Fluid** & **Fixed**
    2. Stages of **Squishiness**
    3. Truly **Two-Dimensional** Layouts
    4. **Nested** Contexts
    5. **Expand** & **Contract** Content
    6. Media Queries, **As Needed**

# quickstart --------------------------

- title: |
    **Implicit** grids
  sub: generate **auto**-columns/rows **as needed**

- title: |
    **Explicit** grids
  sub: generate columns/rows from a **template**

- title: |
    **grid-auto-flow**: row
  sub: |
    **`column`** | [+ **`dense`**]

- pre: Item *Placement*...
  title: |
    grid-**column-start**: `auto` \
    grid-**column-end**: `auto`

- pre: Item *Placement*...
  title: |
    grid-**column**: `<start>` **/** `<end>` \
    grid-**row**: `<start>` **/** `<end>`

- pre: Item *Span*...
  title: |
    grid-column: **span `<count>`**
  sub: either **start** or **end** can be a span

- demo: grid-quickstart

# terms -------------------------------

- title: Grid **Terminology**
  sub: lines, row & column tracks, cells, and areas

- pen: Grid Terminology
  id: ObmjeZ
  user: stacy

# defaults -------------------------

- pre: |
    Sizing *Implicit* Tracks
  title: |
    grid-**auto**-columns \
    grid-**auto**-rows \

# templates -------------------------

- pre: Defining *Templates*
  title: |
     grid-**template**-columns \
     grid-**template**-rows

- pre: Fluid *&* Fixed
  title: 20**em** 25<strong>%</strong> 200**px**

- pre: Fluid *Until* Fixed
  title: |
    **minmax**(`20em`, `20%`)

- pre: Fluid *Until* Fixed
  title: |
    **minmax**(`20%`, `200px`)

- pre: Minmax is
  title: >
    Not a **Math** Function

- title: |
    **minmax**(min-content, 20%)

- pre: Fluid *Until* Fixed
  title: |
    **minmax**(`20%`, `200px`)

- pre: |
    & *Intrinsic*
  title: |
    **min-content** 20% **max-content**

- pre: |
    & *Fitted*
  title: |
    **fit-content(**`<limit>`**)**
  sub: clamp(auto, max-content, `<limit>`)

- pre: |
    & *Flexible*
  title: 20ch **1fr** 200px

- title: >
    **Flexible** **`>`** Fluid

- md: |
    - **`%`** ➡ relative to **parent width**
    - **`vw`** ➡ relative to **viewport width**
    - **`fr`** ➡ relative to **leftover space**

- pre: |
    *`25%`* of `1000px`
  title: Always `==` **250px**

- pre: |
    *`1fr`* of `1000px`
  title: Depends on **Leftover Space**

- md: |
    - `px` ➡ **Fixed**
    - `em` ➡ **Relative**
    - `vw` ➡ **Relative**
    - `%` ➡ **Fluid**
    - ==`fr` ➡ **Flexible**==

- md: |
    - `px` ➡ **`<length>`**
    - `em` ➡ **`<length>`**
    - `vw` ➡ **`<length>`**
    - `%` ➡ **`<length>`**
    - ==`fr` ➡ **`<flex>`**==

- title: |
    1**fr** `~=` **flex**: 1

- pre: But *fr*...
  title: Use a **basis** of **0**

- pre: So all *1fr* tracks
  title: Will Be **Equal**

- pre: Except all *fr* tracks
  title: Have A **Minimum** As Well

- pre: |
    Default *`1fr`* is...
  title: |
    **minmax(**`auto`, `1fr`**)**

- pre: Flexible *Until* Fixed
  title: |
    **minmax(**`20em, 1fr`**)**
  sub: (only use **`fr`** for max value)

- pre: For *shrinking*
  title: |
    **minmax(**`0`, `1fr`**)**

- pre: 🤯 What is *Leftover*
  title: On an **infinite Axis**?

- pre: |
    🤷‍♀️ Enough,
  title: And **No More**
  sub: |
    Based on a
    “[hypothetical 1fr size](https://drafts.csswg.org/css-grid/#fr-unit)”

- pre: |
    *Stages* of Squishiness
  title:
    Auto ➡ **Minmax** ➡ Flex

- img: grids/layout.jpg
  alt: grid page layout
  caption: |
    [on dropbox](https://www.dropbox.com/s/2f5uifofg54rflv/Screenshot%202020-05-13%2022.17.35.jpg?dl=0)

- demo: grid-stages

# grid areas ------------------------------

- pre: Defining *Areas*
  title: |
     grid-template-**areas**

- title: |
    grid-template-**areas**
  md: |
    ```css
    'header header header'
    'nav    main   aside'
    'nav    footer aside';
    ```

- title: |
    grid-**template**:
  sub: |
      `<areas-rows> / <columns>`

- title: grid-**template**
  md: |
    ```css
      'header          header         header' auto
      'nav             main           aside' 1fr
      'nav             footer         aside' auto
    / fit-content(20%) minmax(0, 1fr) 20em
    ```

- pre: Area *Placement*...
  title: |
    grid-**column**: `header`

- pre: Area *Start & End*...
  title: |
    grid-**row**: `header` / `footer`

- pre: |
    `<area>`
  title: |
    **header**

- pre: |
    `<rows> / <columns>`
  title: |
    **header** / **main**

- pre: |
    `<r-start> / <c-start> /` \
    `<r-end> / <c-end>`
  title: |
    **header** / **main** / \
    **main** / **aside**

- pre: |
    Generated *Line Names*
  title: |
    **header-start** / **main-end**

- demo: grid-quickstart

# named lines ------------------------------

- title: |
    **Named** Grid Lines
  sub: |
    **`[before]`** `1fr` **`[center]`** `1fr` **`[after]`**

- title: |
    **Align** to Names
  sub: |
    `grid-column:` **`before`** `/` **`after`** `;`

- title: Names **➡** Areas
  sub: with matching **`*-start`** & **`*-end`** names

- pre: |
    **`[nav-start]`** `15em` **`[nav-end]`**
  title: |
    grid-area: **nav**

- title: |
    **Overlapping** Areas
  sub: |
    **`[full-start nav-start]`** `20em` **`[nav-end]`** `1fr` **`[full-end]`**

- title: grid-**template**
  css: |
    'header          header         header' auto
    'nav             main           aside' 1fr
    'nav             footer         aside' auto
    / [full-start] fit-content(20%) minmax(0, 1fr) 20em [full-end]

- pen: Overlapping Named Lines
  id: XQxpPx

# repeating  grids ------------------------

- title: Media Queries, **As Needed**

- title: |
    **Repeating** Grids
  sub: |
    **`repeat(`** `<count>, <tracks>` **`)`**

- title: |
    `repeat(` **`12, 1fr`** `)`

- title: |
    `repeat( 6,` **`1fr [name] 2fr`** `)`

- title: |
    `grid-column:` **`name 3`**

- title: |
    **Fit** Available **Items**
  sub: |
    `repeat(` **`auto-fit`** `,` **`minmax(`** `15em, 1fr`  **`)`**`);`
  caption: Great for **image galleries**

- title: |
    **Fill** Available **Space**
  sub: |
    `repeat(` **`auto-fill`** `, 200px);`

- pen: Auto-Fit Grid
  id: xjRyda
  user: stacy

- pre: Matches
  title: |
    **MultiColumn** Math

- pen: grid and multicol alignment
  id: XwjBxG

# subgrid --------------------------------

- title: |
    **Subgrid**
  sub: as *column* or *row* template
  caption: in Firefox...

- pen: Subgrid Cards
  id: xxKRpmq

- pen: Subgrid Forms
  id: dybOjLG

- pre: More Demos
  title: by **Rachel Andrew**
  md: |
    1. [Columns & Rows](https://codepen.io/rachelandrew/pen/axLzYv)
    2. [Columns, Implicit Rows](https://codepen.io/rachelandrew/pen/YMYEVO)
    3. [Rows, Explicit Columns](https://codepen.io/rachelandrew/pen/mgpqBv)

# masonry ? --------------------------------

- title: |
    **Masonry** ???
  sub: as *column* or *row* template
  caption: |
    Firefox Nightly,
    `layout.css.grid-template-masonry-value.enabled`...

- pen: Masonry Layout Compare
  user: jensimmons
  id: QWjqbJj

- pen: Masonry Layout Options
  user: jensimmons
  id: vYNeRZw

# resources --------------------------------

- face: stacy.jpeg
  pre: |
    @stacykvernmo
  title: |
    **Stacy** Kvernmo
  md: |
    [CodePen Grid Demos](https://codepen.io/collection/XRRJGq/)

- face: rachelandrew.jpg
  pre: |
    @rachelandrew
  title: |
    **Rachel** Andrew
  md: |
    gridbyexample.com

- face: jensimmons.jpg
  pre: |
    @jensimmons
  title: |
    **Jen** Simmons
  md: |
    youtube.com/layoutland & labs.jensimmons.com

- pre: Let's revisit…
  title: >
    [Container Queries](/cq/smashingde/)
---
