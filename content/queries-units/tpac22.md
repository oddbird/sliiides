---
draft: true
venue: TPAC Developer Meetup
date: 2022-09-13
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
slides:
- pre: CSS exists
  title: For **Two Reasons**

# Reusable Web
- pre: 1. _CSS_ styles
  title: Reusable **Objects**

- html: |
    <P><FONT SIZE="4" COLOR="BLUE">…</FONT></P>
    <P><FONT SIZE="4" COLOR="BLUE">…</FONT></P>
    <P><FONT SIZE="4" COLOR="BLUE">…</FONT></P>
    <P><FONT SIZE="4" COLOR="BLUE">…</FONT></P>
    <P><FONT SIZE="4" COLOR="BLUE">…</FONT></P>

- img: css-next/mia-bw.jpg
  alt: |
    Miriam looking surprised and offended,
    in black and white,
    with the word OLD and an arrow
    pointing at her face

- title: CSS **Selectors**
  css: |
    p {
      color: blue;
    }

- pre: Combine them
  title: To **Compose Objects**

- title: |
    Design **Systems** & \
    **Component** Libraries

# Responsive Web
- pre: 2. _CSS_ styles
  title: |
    **Respond** to Context

- title: |
    `@media` _`min-width`_

- title: |
    `@media` _`hover`_

- pre: |
    `@media`
  title: |
    _`prefers-reduced-motion`_

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
  pre: |
    1989
  title: Young Miriam
  md: |
    *Not paying attention*
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
    on an _infinite and unknowable canvas_,
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

- title: |
    **Container** Queries?
  sub: please, please, please

- quote: |
    ## **Never Gonna Happen**
  cite: All The Browsers

- demo: normal-flow
  caption: |
    CSS _Context_ vs _Content_

- img: css-next/rwd.jpg
  alt: |
    A List Apart:
    Responsive Web Design
    by Ethan Marcotte (May 25, 2010)
  caption: |
    [Responsive Web Design](https://alistapart.com/article/responsive-web-design/)
    by **Ethan Marcotte**, 2010

- title: |
    **Responsive** Web Design™️
  md: |
    - Fluid (%-based) Grids
    - Flexible (%-based) Images
    - Media Queries
  caption: |
    An evolution of the
    already-responsive web…

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
    1. **Fluid** & **Fixed**
    2. Stages of **Squishiness**
    3. Truly **Two-Dimensional** Layouts
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
    1. ## **Nested** Contexts
    2. ## **Expand** & **Contract** Content

# Container Queries
- pen: media-v-container
  print: media-v-container-break

- img: csswg/cq-nested.jpg
  alt: |
    Nested grid-item containers
    inside the main container,
    also use small card layout
  fit: contain
  background: white

- pre: 2010s-2020s
  title: 🚧 Laying **Foundations** 🚧
  sub: browser features, polyfills, etc

- pre: CSS Containment
  title: |
    Size, Style, Paint, Etc
  caption: |
    Avoid internal impacts
    on external elements...

- img: queries-units/cq-nested-containers.jpg
  alt: |
    An outline of nested containers,
    each with a big red question mark.
    Sidebar next to larger main area,
    which has smaller nested grid-items.
  fit: contain
  background: white

- css: |
    .container {
      contain: size layout style;
    }

- pre: 2D size containment
  title: Is **Too Restrictive**
  caption: |
    Need a flexible dimension ("Be afraid of heights")

- pen: css-rad

- pre: We need
  title: |
    **Single Axis** Containment
  caption: |
    See the
    [Issues with Single-Axis Containment](https://github.com/w3c/csswg-drafts/issues/6426)

- pen: |
    💥 Inline Containment Error - Auto-sized BFCs effected by floats
  id: mdmJRxW

- img: css-next/zeno.jpg
  alt: |
    Zeno half way between a Greek temple and a tree,
    the remainder of his path is marked with
    increasingly small half-way measures,
    each with a sundial below it.

- title: Saved By **Floats**
  sub: Solved by [Ian Kilpatrick](https://github.com/w3c/csswg-drafts/issues/6426#issuecomment-941205671)

- title: |
    `contain: `**`inline-size`**`;`
  caption: |
    See the
    [Issues with Single-Axis Containment](https://github.com/w3c/csswg-drafts/issues/6426)
- title: |
    ~~`contain: `**`block-size`**`;`~~ \
  caption: |
    See the
    [Issues with Single-Axis Containment](https://github.com/w3c/csswg-drafts/issues/6426)

- quote: |
    ## **Let's Do This**
  cite: All The Browsers

- img: queries-units/2-weeks-2-browsers.jpg
  alt: |
    2 weeks 2 browser engines
    scribbled in red
    over a 2 fast 2 furious poster
    with three cars trailing neon streaks
  caption: |
    Chrome 105 & Safari 16

- title: Defining **Containers**

- title: Too **Complicated**
  css: |
    .sidebar, main, .grid-item {
      contain: inline-size layout style;
    }

- title: More **Declarative**
  css: |
    .sidebar, main, .grid-item {
      container-type: inline-size;
    }

- title: |
    **Querying** Containers

- css: |
    @container (min-width: 40em) {
      .card { /* ... */ }
      h2 { /* ... */ }
    }
  caption: |
    Each element queries the
    _nearest appropriate ancestor_

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

- css: |
    .sidebar {
      container-type: inline-size;
      container-name: sidebar;
    }

- css: |
    .sidebar {
      container-type: inline-size;
      container-name: sidebar layout;
    }

- pre: Container names
  title: Like **Classes** Not **ID**s

- title: Shorthand (**Names First**)
  css: |
    .sidebar {
      container: sidebar layout / inline-size;
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

- caniuse: css-container-queries
  caption: |
    [Codepen Demos](https://codepen.io/collection/XQrgJo)

- title: Container Query **Polyfill**
  sub: https://github.com/GoogleChromeLabs/container-query-polyfill

- css: |
    @container (width > 30em) { /* CQ support */ }

    @supports not (container-type: inline-size) {
      @media (width > 40em) { /* no CQ support */ }
    }

- title: Container Query **Units**
  sub: |
    `cqw` | `cqh` | `cqi` | `cqb` | `cqmin` | `cqmax`

- pre: Why `cq*`?
  title: Because _`ch`_ **Already Exists**

- pen: cq-units-basic
- pen: cq-units-nike

- caniuse: css-container-query-units

- title: More **To Come**

- title: Non-size **Queries**
  caption: |
    [CSSWG issue for other query ideas](https://github.com/w3c/csswg-drafts/issues/5989)

- title: |
    **Style** Queries
  css: |
    @container style(--colors: invert) { … }
  caption: |
    In the spec, but not implemented yet

- pen: cq-style

- title: |
    **State** Queries (**???**)
  css: |
    @container state(is-stuck) { … }
  caption: |
    [CSSWG issue for state queries](https://github.com/w3c/csswg-drafts/issues/6402)

---
