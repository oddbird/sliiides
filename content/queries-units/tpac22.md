---
draft: true
venue: TPAC Developer Meetup
date: 2022-09-13
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
slides:
- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top
  caption: |
    [WWW HyperMedia Browser](https://worldwideweb.cern.ch/browser/)
    & *Editor*

- img: process/ibm-pc.jpg
  alt: Old IBM desktop
  position: top
- img: no-harm/line-mode.jpg
  alt: The second browser, a text-only terminal
  position: top
  caption: |
    [Line Mode Browser](http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html),
    developed by **Nicola Pellow**

- face: mia-89.jpg
  alt: 7 year old Miriam with her hands on her knees
  title: Blissful **Ignorance**

- quote: |
    Web **for all**. Web **on everything**.
  cite: W3C [Mission Statement](w3.org/Consortium/mission.html#principles)

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
    and a gettyImages watermark.

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

- title: Too **Complicated**
  css: |
    .container {
      contain: inline-size layout style;
    }

- title: More **Declarative**
  css: |
    .container {
      container-type: inline-size;
    }

- title: No **Default Container**

- css: |
    html {
      container-type: inline-size;
    }

- title: Some **Caveats**
  md: |
    - Inline size not intrinsic
    - Nested subgrids can't contribute
    - Nested counters contained

- pre: Step 2...
  title: |
    **Query** The Containers

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

- pre: Respond to
  title: |
    Actual **Font Size**
  caption: |
    Computed `em` on container, not default browser `em`

- css: |
    .container { container-type: inline-size; }

    @container (width > 30em) {
      .container { padding: 2em; }
    }
  caption: |
    Each element queries the
    _nearest appropriate ancestor_

- pen: Enter the 36 Chambers
  id: poamBMw

- title: |
    **Naming** Containers

- title: |
    **Classes** of Containers
  css: |
    .sidebar {
      container-name: sidebar layout;
    }

- title: Query **Named Containers**
  css: |
    @container layout (width > 30em) {
      .container { padding: 2em; }
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
- pen: cq-blinds
- pen: cq-quotes
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
- img: queries-units/2-weeks-2-browsers.jpg
  alt: |
    2 weeks 2 browser engines
    scribbled in red
    over a 2 fast 2 furious poster
    with three cars trailing neon streaks
  caption: |
    Chrome 105 & Safari 16

- title: Container Query **Polyfill**
  sub: https://github.com/GoogleChromeLabs/container-query-polyfill

- css: |
    @container (min-width: 30em) { /* CQ support */ }

    @supports not (container: name) {
      /* no CQ support */
    }

# more
- title: Non-size **Queries**
  caption: |
    [CSSWG issue for other query ideas](https://github.com/w3c/csswg-drafts/issues/5989)

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

- title: |
    **State** Queries (**???**)
  css: |
    @container state(is-stuck) { … }
  caption: |
    [CSSWG issue for state queries](https://github.com/w3c/csswg-drafts/issues/6402)

---
