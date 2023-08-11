---
draft: true
venue: SmashingConf Freiburg
date: 2023-09-05
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
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
- pen: media-v-container
  print: media-v-container-break
- img: csswg/cq-nested.jpg
  alt: |
    Nested grid-item containers
    inside the main container,
    also use small card layout
  fit: contain
  background: white
  caption: |
    Containers can be nested
- img: css-next/rwd.jpg
  alt: |
    A List Apart:
    Responsive Web Design
    by Ethan Marcotte (May 25, 2010)
  caption: |
    [Responsive Web Design](https://alistapart.com/article/responsive-web-design/)
    by **Ethan Marcotte**, 2010
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

- pre: 2011-_2022_
  title: |
    ~~**Selector** Queries~~ \
    ~~**Element** Queries~~ \
    **Container** Queries
  caption: A decade of **media** questions

- demo: https://philipwalton.github.io/responsive-components/#calendar
  caption: Responsive Components by **Philip Walton**, 2018

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
    Containers **don't know anything**.
  cite: Browsers
- quote: >
    It's **not gonna happen**!
  cite: Browsers
- quote: >
    **Stop asking**!
  cite: Browsers
- quote: >
    Container queries
    **will never be possible on the web**.
    They would cause **infinite layout loops**.
  cite: Browsers, A Paraphrase (circa 2020)

- img: cqs/please-dont.jpg
  alt: |
    Please don't feed the animals
    hand-painted sign,
    scribbled over to say:
    please don't query the containers
  fit: contain

- quote: >
    Would you like
    some **very flexible boxes**
    instead?
  cite: Browsers

- pen: flexbox
  id: LYgqwyp
  caption: 2012, **Flexbox**
- pen: Grid auto-fit
  id: xxyMvdx
  caption: 2017, **Grid**

- title: |
    **Intrinsic** Web Design
  sub: |
    The _responsive web_ keeps evolving…
  caption: |
    [Jen Simmons](https://twitter.com/jensimmons/status/980980521848127488)

- face: jensimmons.jpg
  pre: |
    @jensimmons
  title: |
    **Jen** Simmons
  md: |
    [Everything You Know About Web Design Just Changed](https://youtu.be/jBwBACbRuGY)

- pre: >
    _Responsive_ Web Design
  title: Forces Everything **Fluid**
  sub: Using `%` for everything
- pre: >
    _Intrinsic_ Web Design
  title: Combines **Fluid** & **Fixed**
  sub: Using _intrinsic_ size of elements

- md: |
    1. Truly **Two-Dimensional** Layouts
    2. Combine **Fluid** & **Fixed**
    3. Stages of **Squishiness**
    4. **Nested** Contexts
    5. **Expand** & **Contract** Content
    6. Media Queries, **As Needed**
  caption: |
    [Jen Simmons](https://twitter.com/jensimmons/status/980980521848127488)

- title: >
    Media Queries are **Obsolete**!\*
  sub: >
    (\* in some situations)

- pen: flexbox
  id: LYgqwyp
- pen: Grid auto-fit
  id: xxyMvdx

- md: |
    1. ## **Nested** Contexts _???_
    2. ## **Expand** & **Contract** Content _???_
- img: queries-units/cq-nested-containers.jpg
  alt: |
    An outline of nested containers,
    each with a big red question mark.
    Sidebar next to larger main area,
    which has smaller nested grid-items.
  fit: contain
  background: white

# cqs are here!
- title: We're Not In **2020** Any More
- img: cqs/flying-jetsons.jpg
  alt: >
    The Jetsons in their cartoon flying car
- img: cqs/flying-bttf.png
  alt: >
    The Delorean hovering
    in Back to the Future
- img: cqs/flying-5th.jpg
  alt: >
    Fifth Element flying taxi
    next to a flying police cruiser
- img: cqs/cars.jpg
  alt: |
    Traffic on a hazy highway at dusk
  caption: Photo by [Aleksandr Popov](https://unsplash.com/@5tep5?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
- img: css-next/mammon.jpg
  alt: |
    Mammon,
    the android from Metropolis,
    in a chair
    with wires feeding into her head
- img: cqs/smashing/tng-data.jpg
  alt: |
    Data,
    the android from Star Trek TNG,
    sitting at the console
    and looking back at the camera
    with golden eyes
- img: cqs/ai-news.jpg
  fit: contain
  alt: |
    CBC News headline:
    A Google engineer says AI has become sentient.
    What does that actually mean?
    by Laura McQuillan
- img: cqs/autocomplete.jpg
  position: top
  alt: |
    Phone keyboard
    suggesting the current half-written autoc,
    autocorrect, and autocomplete
- img: cqs/container-hello.jpg
  alt: |
    Yellow shipping container
    with a red hand-written speech bubble:
    actually, I know stuff
  position: top

- caniuse: css-container-queries

- pen: media-v-container-live

# limitations
- img: cqs/thinker-how.jpg
  alt: |
    The thinker
    with a red scribbled thought bubble:
    how?!
- pre: >
    CQ _Fact Check_:
  title: ✅ **Possible** on The Web
- pre: >
    CQ _Fact Check_:
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
- img: css-next/spider-man-web.jpg
  alt: |
    Spider man crawling towards you
    with webs everywhere

- demo: normal-flow
- pre: Every _box_ has
  title: An **Intrinsic Size**
  sub: defined by **content**
- pre: Some _boxes_ have
  title: An **Extrinsic Size**
  sub: defined by **containers**/attributes/etc

- title: 😎 **F**ing Cool Feature
  sub: (enables **flexbox** and **grid** layouts)

- title: 🤯 Makes Queries **Recursive**
  sub: >
    💥 Size » Query Change » Resize 💥

- title: For **Queries** to Work…

- pre: We can't _change_
  title: |
    What We **Want To Measure**

- pre: We can't _style_
  title: The Container **Being Queried**

- pre: Or _anything about_
  title: The Container's **Context**

- pre: For
  title: >
    **Size**-Related Queries…

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

- pen: css-rad

- title: >
    `contain:` _`inline-size`_
  caption: |
    [Thoughts on an implementable path forward for Container Queries](https://github.com/dbaron/container-queries-implementability),
    by **David Baron**

- pen: >
    💥 Inline Containment Error, Auto-sized BFCs effected by floats
  id: mdmJRxW
  caption: >
    [Ancestor Layout Loops with Single-Axis Containment](https://github.com/w3c/csswg-drafts/issues/6426)

- title: >
    ~~`contain: block-size`~~

- pre: We can _only_
  title: Measure The **Axis We Contain**

- sub: To query _height_...
  title: >
    `contain:` _`size`_

- pre: Use _`size`_ containment
  title: With **Overflowing Containers**
  sub: (like the `html` element)

- pen: Containing Size
  id: OJBqJmy

- pre: Also need to
  title: Contain **Layout** & **Style**

- pen: Understanding containment
  id: oNaVvad

# creating containers
- pre: Since…
  title: Containment is **Invasive**

- pre: We create _containers_
  title: >
    **Explicitly** and **Carefully**

- md: |
    ~~**`contain`**`: inline-size layout style;`~~

- css: |
    .element-to-query {
      container-type: inline-size; /* or size */
    }
  caption: Applies size, layout, and style containment

- pre: For legacy reasons...
  title: No **Default Containers**
  caption:
    (we shouldn't rely on
    [body style propagation](https://blog.jim-nielsen.com/2021/propagating-up-in-css/))

- caption: >
    HTML **Overflows** (safe for `size` containment)
  css: |
    html {
      container-type: size;
      height: 100%; /* viewport height */
    }

- css: |
    @media (min-width: 40em) {
      .card { /* … */ }
      h2 { /* ... */ }
    }

- css: |
    @container (min-width: 40em) {
      .card { /* … */ }
      h2 { /* ... */ }
    }

- css: |
    @container (width > 40em) {
      .card { /* … */ }
      h2 { /* ... */ }
    }

- css: |
    @container (inline-size > 40em) {
      .card { /* ... */ }
      h2 { /* ... */ }
    }
  caption: Logical dimensions

- css: |
    @container (20em > inline-size > 40em) {
      .card { /* ... */ }
      h2 { /* ... */ }
    }
  caption: >
    [Range queries](https://caniuse.com/css-media-range-syntax)
    (also in `@media` now!)

- title: Why **Bother** on **Root**?

- pre: >
    _Container_ Queries
  title:
    Measure **Actual Styles**
- pre: >
    _Computed_ Values
  title:
    On the **Container Element**

- pen: Size queries, relative/var units
  id: QWZYOrM

- title: Progressive **Enhancement**...

- css: |
    @container (min-width: 30em) { /* CQ support */ }

    @supports not (container: name) {
      /* no CQ support */
    }

- title: There's a **Polyfill**
  sub: |
    [GoogleChromeLabs/container-query-polyfill](https://github.com/GoogleChromeLabs/container-query-polyfill)

- pre: Also Recommended…
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

- pre: Names can be
  title: >
    Like **Classes** or **IDs**
  sub: (shared or unique -- establish conventions!)

- css: |
    @container layout (min-width: 40em) {
      .conditional { /* … */ }
    }

    @container root (min-width: 40em) {
      .conditional { /* … */ }
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

- pre: Containers can
  title: Query **Other Containers**

- pen: Enter the 36 Chambers
  id: poamBMw

- pre: Always
  title: Measuring an **Ancestor**
  sub: (can't change what you measure!)

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

- pre: also…
  title: Container Query **Units**
  sub: |
    `cqw` | `cqh` | `cqi` | `cqb` | `cqmin` | `cqmax`

- pen: Container Queries, multiple articles
  id: mdRdXJR
  caption: we don't have to do it by hand

- pen: cq-units-basic
- pen: cq-units-nike

- pre: Default _unit container_
  title: The **Small Viewport**

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

- pen: Space Facts - CQ Demo with :has() (in grid)
  id: abqPdQv
  user: una

- pen: cq-icons
  caption: >
    Useful at every level, with nested containers!

- demo: https://spontaneous-crepe-7edffa.netlify.app/
  caption: >
    [Weather Widget](https://github.com/vanhoofmaarten/weather-widget/blob/main/src/weather-widget.style.ts#L47-L71)
    by **Maarten Van Hoof**
    (see dev tools)

- pen: cq-blinds
- pen: cq-water

- img: cqs/container-more.jpg
  alt: |
    Yellow shipping container
    with a red hand-written speech bubble:
    I know other stuff too
  position: top

- title: |
    **Style** Queries
  css: |
    @container style(--colors: invert) { … }

- pen: Style queries test
  id: ExOabRz

- pen: Style query button themes
  id: abGBNNx

- pre: Style Queries...
  title: Only **Custom Properties**
- pre: Style Queries...
  title: Only **Custom Properties**_\*_
  md: >
    \* for now
- pre: Style Queries...
  title: Only **Custom Properties**_\*_
  md: |
    \* for now _\*\*_ \
    \*\* but maybe forever?

- title: >
    _¯\\\_(ツ)\_/¯_

- title: No **Containment** Required
- pre: All _Elements_
  title: Are **Style Containers**

- pre: Always
  title: Queries **Direct Parent**
  sub: Unless you query a specific `container-name`

- pen: Light/Dark Style Queries
  id: wvXvxmv

- pen: Web component style query parameters
  id: abKVaoo

- pen: Queries on pseudo-classes
  id: vYjMjGd

- pen: Style Queries & Computed Values
  id: WNamboz
  caption: >
    [Computed values in container style queries](https://www.matuzo.at/blog/2023/100daysof-day83/)
    by **Manuel Matuzovic**
- caniuse: css-container-queries-style

- pen: Font-style queries
  id: YzJBobX
- pen: List outdent with style queries
  id: LYrOgwM

- pre: Other _Questions_
  title: |
    For CSS **Containers**?
  caption: |
    [CSSWG issue for other query ideas](https://github.com/w3c/csswg-drafts/issues/5989)

- title: |
    **State** Queries (**???**)
  caption: |
    [CSSWG issue for state queries](https://github.com/w3c/csswg-drafts/issues/6402)

- title: >
    **???**
  css: |
    @container state(stuck) { … }
    @container state(snapped) { … }
    @container state(overflowing) { … }

- img: cqs/thinker.jpg
  alt: |
    Statue of The Thinker
    with a scribbled thought bubble asking:
    do containers know stuff?
  caption: Photo by [Avery Evans](https://unsplash.com/@averye457?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash

- title: |
    **Yes**.

- title: |
    Things **Containers Know**:
  md: |
    1. Their **Size** (if contained)
    2. **Custom Property** Values
    3. **Relative** Values (like `em`)
    4. Maybe **Some States**?? (tbd)

- img: cqs/thinker-wtf.jpg
  alt: |
    The thinker
    with a red scribbled thought bubble:
    WTF?!

- img: cqs/container-yeah.jpg
  position: top
  alt: |
    Yellow shipping container
    with a red hand-written speech bubble:
    I'm contained, AMA
