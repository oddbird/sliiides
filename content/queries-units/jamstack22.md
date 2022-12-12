---
venue: Jamstack Conf
date: 2022-11-08
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
slides:
- pen: css-rad

- img: layers/back-to-the-future.jpg
  alt: |
    Back to the future
    flaming tire tracks between
    Doc and Marty's legs,
    as they look back in surprise.
  caption: '1989'

- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top right
  caption: |
    [WWW HyperMedia Browser](https://worldwideweb.cern.ch/browser/)
    & *Editor*
- img: layers/www-browser-zoom-next.jpg
  alt: Zoom in on NEXT logo in top right corner of the browser
  position: top right
  caption: |
    Built for the NEXT machine

- img: process/ibm-pc.jpg
  alt: Old IBM desktop
  position: top
- img: no-harm/line-mode.jpg
  alt: The second browser, a text-only terminal
  position: top
  caption: |
    [Line Mode Browser](http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html),
    developed by **Nicola Pellow**

- quote: |
    Web **for all**. Web **on everything**.
  cite: W3C [Mission Statement](https://w3.org/Consortium/mission.html#principles)

- img: process/ibm-pc.jpg
  alt: Old IBM desktop
  position: top
- img: no-harm/4k.jpg
  alt: Modern desktops
- img: dynamic-css/devices.jpg
  alt: A zillion different devices of all sizes (original)
- img: unfriendly/braille.jpg
  alt: Braille interface and headphones
- img: process/smartwatch.jpg
  alt: Lineup of smart watches
- img: unfriendly/agnesscott/smart-home.png
  alt: Google Home, Amazon Echo, and Apple HomePod
- img: queries-units/web-everything.jpg
  alt: |
    A gray office covered in cobwebs,
    and a Getty Images watermark.
- img: layers/ford-cobweb.jpg
  alt: |
    Indiana Jones
    covered in cobwebs,
    looking frustrated.

- quote: |
    We're designing _unknown content_
    with _unknown collaborators_
    on an **infinite and unknowable canvas**,
    across _operating systems_, _interfaces_,
    _writing-modes_, & _languages_...
  cite: me

- demo: normal-flow

# Responsive Web Design
- pre: 2008/2009
  title: |
    **@media** Queries
  caption: |
    Partial support in [Safari 3](https://caniuse.com/css-mediaqueries), 2008

- pre: Explicitly
  title: |
    **Measure** & **Adapt**

- pre: Ethan Marcotte...
  title: |
    **Responsive** Web Design™️
  md: |
    - Fluid (%-based) Grids
    - Flexible (%-based) Images
    - Media Queries
  caption: |
    An evolution of the
    already-responsive web…

- title: |
    **Container** Queries?
  sub: please? if we promise to be good?

- pen: media-v-container
  print: media-v-container-break

- quote: |
    ## **Never Gonna Happen**
  cite: All The Browsers

- demo: normal-flow
  caption: |
    CSS _Context_ vs _Content_

# Intrinsic Web Design
- pre: Fast-forward
  title: |
    2010s **»»»** 2020s

- title: |
    **Flexbox** & **Grid**
  md: |
    - Box Alignment
    - Viewport Units
    - Intrinsic Sizing
    - Aspect Ratios
    - Min/Max/Clamp
    - _&c._

- face: jensimmons.jpg
  pre: |
    @jensimmons
  title: |
    **Jen** Simmons
  md: |
    [Everything You Know About Web Design Just Changed](https://youtu.be/jBwBACbRuGY)

- md: |
    1. Truly **Two-Dimensional** Layouts
    2. Combine **Fluid** & **Fixed**
    3. Stages of **Squishiness**
    4. **Nested** Contexts
    5. **Expand** & **Contract** Content
    6. Media Queries, **As Needed**
  caption: |
    [Jen Simmons](https://twitter.com/jensimmons/status/980980521848127488)

- title: |
    **Intrinsic** Web Design
  sub: |
    The _responsive web_ keeps evolving…
  caption: |
    [Jen Simmons](https://twitter.com/jensimmons/status/980980521848127488)

- md: |
    4. ## **Nested** Contexts _???_
    5. ## **Expand** & **Contract** Content _???_

# Container Queries
- img: queries-units/cq-nested-containers.jpg
  alt: |
    An outline of nested containers,
    each with a big red question mark.
    Sidebar next to larger main area,
    which has smaller nested grid-items.
  fit: contain
  background: white

- pre: 2010-2020
  title: 🚧 Laying **Foundations** 🚧

- title: 2020 **Proposals**
  md: |
    - David Baron:
      [`@container`](https://github.com/dbaron/container-queries-implementability) \
      _limited by containment_
    - Brian Kardell:
      [`switch()`](https://bkardell.com/blog/AllThemSwitches.html) \
      _limited to paint_
  caption: |
    Different tradeoffs, worth pursuing both

- title: |
    @**Container**

- title: CSS **Containment**
  sub: |
    Size, Layout, Style, Paint, &c
  caption: |
    Avoid internal impacts
    on external elements...

- pre: Size _containment_
  title: Removes **Intrinsic Sizing**

- pen: css-rad

- img: css-next/dragons.jpg
  position: bottom
  title: ⚠️ Dragons
  caption: |
    See the
    [Issues with Single-Axis Containment](https://github.com/w3c/csswg-drafts/issues/6426)

- title: |
    `contain: `**`inline-size`**`;`
  caption: |
    Thanks to **Ian Kilpatrick**

- title: |
    ~~`contain: `**`block-size`**`;`~~ \
  caption: |
    See the
    [Issues with Single-Axis Containment](https://github.com/w3c/csswg-drafts/issues/6426)

- quote: |
    **Ship it.** 🐿
  cite: All the browsers

# Containers
- pre: Step 1...
  title: Define **Containers**

- pre: Too _complicated_
  css: |
    .container {
      contain: inline-size layout style;
    }

- pre: More _declarative_
  css: |
    .container {
      container-type: inline-size;
    }
  caption: |
    Other options: `size` | `normal`

- title: Some **Caveats**
  md: |
    - Inline size not intrinsic
    - Subgrids can't contribute track sizing
    - Counters contained

- pre: Step 2...
  title: |
    **Query** The Containers

- pre: There's _no default container_...
  css: |
    html {
      container-type: inline-size;
    }

- css: |
    @media (min-width: 40em) {
      .card { /* ... */ }
      h2 { /* ... */ }
    }
- css: |
    @container (min-width: 40em) {
      .card { /* ... */ }
      h2 { /* ... */ }
    }

- pre: Each _matched element_
  title: Queries **Nearest Ancestor**
  sub: with the appropriate _`container-type`_

- pre: Relative units
  title: |
    Resolved **By Container**
  sub: |
    _Computed_ font size

- pre: No _self-query_,
  title: |
    **Nesting** Containers

- pen: Enter the 36 Chambers
  id: poamBMw

- title: |
    **Name** Containers
  caption: |
    Recommended!

- css: |
    .sidebar {
      container-name: sidebar layout;
    }
  caption: |
    Any number of names

- title: Query **Named Containers**
  css: |
    @container layout (min-width: 30em) {
      .card { padding: 2em; }
    }

- title: Finding **Containers**
  md: |
    1. For _each matched element_…
    2. Find the _nearest ancestor_ that has…
       - Any required _container name_
       - Any required _container types_

- title: Shorthand (**Names First**)
  css: |
    .sidebar {
      container: sidebar layout / inline-size;
    }

# Demos
- pen: media-v-container
- pen: cq-quotes
- pen: cq-blinds
- pen: cq-icons

- title: Grid **Tracks** & **Flex** Sizing?
  sub: No element to measure...

- img: queries-units/mudturtles.jpg
  alt: |
    Three mud turtles
    on a small log
    surrounded by water.
  caption: |
    Vancouver **Mud Turtles**, FTW!

- pen: cq-flex
- pen: cq-books

# container units
- title: Container Query **Units**
  sub: |
    `cqw` | `cqh` | `cqi` | `cqb` | `cqmin` | `cqmax`

- pre: Default _container_
  title: The **Small Viewport**

- pen: cq-units-basic
- pen: cq-units-nike

# browser support
- title: 😭 It's ~~**Impossible**~~
- title: 🥳 It's **Shipping**

- img: queries-units/2-weeks-2-browsers.jpg
  alt: |
    2 weeks 2 browser engines
    scribbled in red
    over a 2 fast 2 furious poster
    with three cars trailing neon streaks
  caption: |
    **August/September 2022** -- Chrome/Edge 105 & Safari 16

- title: There's a **Polyfill**
  sub: |
    [GoogleChromeLabs/container-query-polyfill](https://github.com/GoogleChromeLabs/container-query-polyfill)

- css: |
    @container (min-width: 30em) { /* CQ support */ }

    @supports not (container: name) {
      /* no CQ support */
    }

# more
- title: |
    **Style** Queries
  css: |
    @container style(--colors: invert) { … }
  caption: |
    Already specified, but not shipped

- css: |
    blockquote, em { font-style: italic; }

    @container style(font-style: italic) {
      em { background-color: pink; }
    }

- title: Chrome **Prototype**
  sub: Currently only _custom properties_

- pen: Style query button themes
  id: abGBNNx

- pre: Other
  title: |
    **Questions** for Containers?
  caption: |
    [CSSWG issue for other query ideas](https://github.com/w3c/csswg-drafts/issues/5989)

- title: |
    **State** Queries (**???**)
  css: |
    @container state(is-stuck) { … }
  caption: |
    [CSSWG issue for state queries](https://github.com/w3c/csswg-drafts/issues/6402)

- quote: |
    Our medium is not done.
    Our medium is still
    **going through radical changes**.
  cite: Jen Simmons, *Designing with Grid*
---
