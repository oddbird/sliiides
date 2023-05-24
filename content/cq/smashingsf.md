---
draft: true
venue: SmashingConf SF
date: 2023-05-24
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
resources:
  - url: https://www.zachleat.com/web/origin-container-queries/
    title: The Origin Story of Container Queries
    cite: Zach Leatherman
    media: article
  - url: https://www.css.cafe/history-of-container-queries/
    title: History of Container Queries
    cite: Mike RiethmullerMike Riethmuller
    venue: CSS Cafe
    media: video
use-cases:
  - combine style queries with has? quantity queries etc?
  - https://front-end.social/@mia/110390916601370776
slides:

# cold open
- img: cqs/containers.jpg
  alt: |
    A shipping yard from above,
    with rows of colorful stacked shipping containers
  caption: Photo by [CHUTTERSNAP](https://unsplash.com/fr/@chuttersnap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
- img: cqs/container-open.jpg
  alt: |
    A single yellow shipping container up close,
    with the door open,
    but we can't see in
  position: bottom
  caption: Photo by [Lucas Hoang](https://unsplash.com/@zuizuii?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
- img: cqs/box.jpg
  alt: |
    A handmade wooden box with a missing latch
  caption: Photo by [OWN FILTERS](https://unsplash.com/@ownfilters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
- img: cqs/cat-box.jpg
  alt: |
    A grey and white cat
    in a cardboard box,
    looking directly at us,
    kinda grumpy
  caption: Photo by [Sahand Babali](https://unsplash.com/@sahandbabali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash

# highly requested but impossible
- img: cqs/thinker.jpg
  alt: |
    Statue of The Thinker
    with a scribbled thought bubble asking:
    do containers know stuff?
  caption: Photo by [Avery Evans](https://unsplash.com/@averye457?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
- pre: 2009
  title: |
    **`@media`** Queries
  caption: |
    Partial support in [Safari 3](https://caniuse.com/css-mediaqueries), 2008
- img: css-next/rwd.jpg
  alt: |
    A List Apart:
    Responsive Web Design
    by Ethan Marcotte (May 25, 2010)
  caption: |
    [Responsive Web Design](https://alistapart.com/article/responsive-web-design/)
    by **Ethan Marcotte**, 2010
- pen: media-v-container
  print: media-v-container-break
- demo: https://philipwalton.github.io/responsive-components/#calendar
  caption: Responsive Components by **Philip Walton**, 2018
- img: csswg/cq-nested.jpg
  alt: |
    Nested grid-item containers
    inside the main container,
    also use small card layout
  fit: contain
  background: white
  caption: |
    Containers can be nested
- img: cqs/selector-queries.jpg
  alt: |
    Github page for an Initial demo commit
    to the ahume/selector-queries repo
    on July 14, 2011 -
    showing html for a
    Responsive Containers Test Page
  fit: contain
  background: '#010409'
  caption: |
    [Selector Queries](https://github.com/ahume/selector-queries)
    by **Andy Hume**, 2011

- title: 2010-**2020**
  caption: A decade of media questions
- title: |
    ~~**Selector** Queries~~ \
    ~~**Element** Queries~~ \
    **Container** Queries

- img: cqs/state-of-css-2019.jpg
  alt: |
    State of CSS 2019 survey results
    for missing features,
    with container queries at the top (3%),
    then parent selector, nesting, etc.
  position: top
  caption: |
    [State of CSS](https://2019.stateofcss.com/opinions/#missing-features)
    'missing features', 2019
- img: cqs/thinker-browsers.jpg
  alt: |
    same statue of The Thinker
    with a scribbled thought bubble,
    but there's browser logos listening in
    from behind the shrubbery
  caption: Photo by [Avery Evans](https://unsplash.com/@averye457?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
- quote: >
    ## **No**!
  cite: Browsers
- quote: >
    It's **not gonna happen**!
  cite: Browsers
- quote: >
    **Stop asking**!
  cite: Browsers
- quote: >
    **Seriously**!
  cite: Browsers
- img: cqs/please-dont.jpg
  alt: |
    Please don't feed the animals
    hand-painted sign,
    scribbled over to say:
    please don't query the containers
  fit: contain
- quote: >
    Container queries
    **will never be possible on the web**.
    They would cause **infinite layout loops**.
  cite: Browsers, A Paraphrase (circa 2020)
- todo: flexbox
- todo: grid auto-fit/fill

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
- img: queries-units/cq-nested-containers.jpg
  alt: |
    An outline of nested containers,
    each with a big red question mark.
    Sidebar next to larger main area,
    which has smaller nested grid-items.
  fit: contain
  background: white

- todo: flexbox
- todo: grid auto-fit/fill

# cqs are here!
- title: We're Not In **2020** Any More
- img: cqs/future.jpg
  alt: |
    four people sitting in a room
    wearing virtual reality headsets
    wired to posts next to them,
    and all facing different directions
  caption: Photo by [Lucrezia Carnelos](https://unsplash.com/@ciabattespugnose?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
- img: cqs/smashing/enterprise-d.jpg
  alt: |
    Spaceship in space -
    USS Enterprise, NCC 1701-D -
    from Star Trek, The Next Generation
- img: cqs/cars.jpg
  alt: |
    Traffic on a hazy highway at dusk
  caption: Photo by [Aleksandr Popov](https://unsplash.com/@5tep5?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
- img: cqs/smashing/tng-data.jpg
  alt: |
    Data -
    the android from Star Trek TNG
    sitting at the console,
    and looking back at the camera
    with golden eyes
- img: cqs/autocomplete.jpg
  position: top
  alt: |
    Phone keyboard
    suggesting the current half-written autoc,
    autocorrect, and autocomplete
- caniuse: css-container-queries

- css: |
    @media (min-width: 40em) {
      .card { /* ... */ }
      h2 { /* ... */ }
    }
  caption: Take a media query

- css: |
    @container (min-width: 40em) {
      .card { /* ... */ }
      h2 { /* ... */ }
    }
  caption: Query a container instead

- css: |
    @container named-container (min-width: 40em) {
      .card { /* ... */ }
      h2 { /* ... */ }
    }
  caption: Query named containers
- pen: media-v-container
  print: media-v-container-break

# limitations
- title: What **Happened**?
- pre: >
    _Fact Check_:
  title: ✅ **Possible** on The Web
- pre: >
    _Fact Check_:
  title: 🧐 **Infinite** layout Loops?
- pre: In order to understand…
  title: >
    **How** Container Queries Work
- pre: We need to understand…
  title: Why They **Shouldn't** Work
- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top
  caption: |
    1990 [WWW HyperMedia Browser](https://worldwideweb.cern.ch/browser/)
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
- quote: |
    Web **for all**. Web **on everything**.
  cite: W3C [Mission Statement](https://w3.org/Consortium/mission.html#principles)
- img: dynamic-css/devices.jpg
  alt: A zillion different devices of all sizes (original)
- quote: |
    There are **too many variables to consider.**
  cite: Keith J Grant
  caption: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)

- demo: normal-flow
- pre: Each _box_ has
  title: An **Intrinsic Size**
- pre: >
    _Intrinsic_ sizes
  title: Defined by **Content**
- title: 😎 **F**ing Cool Feature
  sub: (enables **flexbox** and **grid** layouts)
- todo: recursion demo?

- title: For **Queries** to Work…

- pre: We can't _change_
  title: |
    What We **Want To Measure**

- pre: We can't _style_
  title: The Container **Being Queried**

- pre: Or _any of__
  title: The Container's **Context**

- pre: For
  title: >
    **Size**/**Layout** Queries…

- pre: We Need to
  title: |
    **Turn Off** Intrinsic Sizing
  sub: (at least partially)

- title: CSS **Containment**
  sub: |
    Size, Layout, Style, Paint, &c
  caption: |
    Avoid internal impacts
    on external elements...

- pre: Size _containment_
  title: Removes **Intrinsic Sizing**

- pre: Size _containment_
  title: Is **Too Restrictive**
  caption: |
    Need a flexible dimension ("Be afraid of heights")

- pen: css-rad

- title: >
    `contain: inline-size`
  caption: |
    [Thoughts on an implementable path forward for Container Queries](https://github.com/dbaron/container-queries-implementability),
    by **David Baron**

- pre: Provide an
  title: >
    **Extrinsic** Inline-Size

- pre: Only
  title: Measure the **Inline-Size**

- pre: Maintain the
  title: >
    **Intrinsic** Block-Size
  sub: so content has somewhere to _flow_

- todo: size containment demo
  caption: block els default 100% width

- title: >
    ~~`contain: block-size`~~

- pre: Also need to
  title: Contain **`Layout`** & **`Style`**

- todo: contain style
  caption: List counters
- todo: contain layout
  caption: Stacking context & containing block (fixed position)

# creating containers
- pre: Since…
  title: Containment is **Invasive**

- pre: Only some
  title: Elements Are **Containers**

- pre: We create them
  title: >
    **Explicitly** and **Carefully**
  sub: >
    ~~**`contain`**`: inline-size layout style;`~~

- css: |
    .element-to-query {
      /* size or inline-size */
      container-type: inline-size;
    }
  caption: Applies size, layout, and style containment

- css: |
    @container (min-width: 40em) {
      .conditional-styles { /* … */ }
    }

- pre: Recommended…
  title: >
    **Name** Your Containers

- css: |
    html {
      container-type: size;
      container-name: layout root;
    }

- css: |
    html {
      container: layout root / size;
    }
  caption: shorthand - `names / types`

- css: |
    @container (min-width: 40em) {
      .conditional-styles { /* … */ }
    }

- css: |
    @container layout (min-width: 40em) {
      .conditional-styles { /* … */ }
    }

    @container root (min-width: 40em) {
      .conditional-styles { /* … */ }
    }

- title: Finding **Containers**
  md: |
    1. For _each matched element_…
    2. Find the _nearest ancestor_ that has…
       - Any required _container name_
       - Any required _container types_

- pen: Two container cards, resize
  id: yLRZjWm

- pre: Containers
  title: Can't **Self-Query**
  sub: (That would introduce loops!)

- pre: Containers
  title: Can **Query Other Containers**

- pen: Enter the 36 Chambers
  id: poamBMw

- pre: Always
  title: Measuring an **Ancestor**
- pre: Always
  title: Measuring an **Element**

- title: Grid **Tracks** & **Flex** Sizing?
  sub: No element to measure...

- img: queries-units/mudturtles.jpg
  alt: |
    Three mud turtles
    on a small log
    surrounded by water.

- pen: cq-flex
- pen: cq-books

- pre: There are
  title: No **Default Containers**

- pre: CSS _Reset_
  title: >
    **Document Root** Container
  caption:
    (we shouldn't rely on
    [body style propagation](https://blog.jim-nielsen.com/2021/propagating-up-in-css/))

- css: |
    html {
      container: layout root / size;
      height: 100%; /* extrinsic size */
    }

- pre: Use _size_
  title: With **Overflowing Containers**
  sub: (like the `html` element)

- css: |
    @media (min-width: 40em) {
      .card { /* … */ }
    }

- css: |
    @container (min-width: 40em) {
      .card { /* … */ }
    }

- css: |
    @container (width > 40em) {
      .card { /* … */ }
    }

- css: |
    @container layout (min-width: 40em) {
      .card { /* … */ }
    }

- pen: Root Size Container
  id: wvYNjyj

- title: Why **Bother** on Root?
  sub: Just use `@media`?

- pre: >
    _Media_ Queries
  title:
    Can't Access **Actual Styles**

- pen: Size queries, relative/var units
  id: QWZYOrM
