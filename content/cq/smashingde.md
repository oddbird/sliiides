---
venue: SmashingConf Freiburg
date: 2023-09-05
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
slides:

# cold open
- img: cqs/smashde/topple.jpg
  alt: >
    Smashing Conf banner
    for Freiburg, The Web -
    with Topple cat replaced by badly photoshopped
    medieval cat drawing.

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

- img: cqs/smashde/mqs.jpg
  alt: >
    Timeline with media queries around 2010
  caption: |
    **`@media`** Queries, 2009
    (Slide by Christine Vallaure)

- pen: media-v-container
  print: media-v-container-break

- img: css-next/rwd.jpg
  alt: |
    A List Apart:
    Responsive Web Design
    by Ethan Marcotte (May 25, 2010)
  position: bottom
  caption: |
    [Responsive Web Design](https://alistapart.com/article/responsive-web-design/)
    by **Ethan Marcotte**, 2010
- img: csswg/cq-nested.jpg
  alt: |
    Nested grid-item containers
    inside the main container,
    also use small card layout
  fit: contain
  background: white
  caption: |
    Containers can be nested

- img: cqs/smashde/what.jpg
  alt: >
    What about container queries?
  caption: |
    (Original slide by Christine Vallaure)

- pen: media-v-container
  print: media-v-container-break

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

- title: They're **Not Wrong**

- img: layers/back-to-the-future.jpg
  alt: |
    Back to the future
    flaming tire tracks between
    Doc and Marty's legs,
    as they look back in surprise.
  caption: >
    Back to 1990, early web

- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top
  caption: |
    1990 [WWW HyperMedia Browser](https://worldwideweb.cern.ch/browser/)
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
- img: dynamic-css/devices.jpg
  alt: A zillion different devices of all sizes (original)
- img: css-next/spider-man-web.jpg
  alt: |
    Spider man crawling towards you
    with webs everywhere

- img: css-next/smashsf/sidesaddle-indd.jpg
  alt: |
    InDesign book-cover layout
    for Riding SideSaddle,
    my novel in a box

- img: css-next/smashsf/sidesaddle-box.jpg
  alt: |
    Final novel-in-a-box,
    Riding SideSaddle

- img: css-next/smashsf/sidesaddle-box-click.jpg
  alt: |
    Same photo,
    but with a badly overlaid cursor pointer
    and three big scribbled red question marks

- img: css-next/smashsf/sidesaddle-box.jpg
  alt: |
    Final novel-in-a-box,
    Riding SideSaddle

- quote: |
    The fact we can **control** a paper page
    is really **a limitation of that medium**.
  cite: John Allsopp, 2000
  caption: |
    [A Dao of Web Design](http://alistapart.com/article/dao)

- pre: Web _Design_
  title: Needs to **Adapt**…

- pre: |
    `@media`
  title: |
    _`min-width`_
  caption: Viewport dimensions

- pre: |
    `@media`
  title: |
    _`prefers-reduced-motion`_
  caption: User needs & preferences

- pre: |
    `@media`
  title: |
    _`hover`_
  caption: Device interfaces

- pre: |
    `@supports`
  title: |
    _`container-type: inline-size`_
  caption: Browser capabilities over time

- svg: svg/content/more-more
  alt: Animation of twitter-like posts appearing

- title: >
    **Normal** Flow
  sub: |
    aka "_Block Formatting Context_" \
    aka "_Block Layout_"

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

- title: 🤯 Makes Queries **Recursive**
  sub: >
    💥 Size » Query » Change » Resize 💥

- pen: flexbox
  id: LYgqwyp
  caption: 2012, **Flexbox**
- pen: Grid auto-fit
  id: xxyMvdx
  caption: 2017, **Grid**

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

- pre: >
    _Responsive_ Web Design
  title: Force Everything **Fluid**
  sub: 2010s -- only _extrinsic_ sizing
- pre: >
    _Intrinsic_ Web Design
  title: Combines **Fluid** & **Fixed**
  sub: 2020s -- Use _intrinsic_ size as well!

- md: |
    1. Truly **Two-Dimensional** Layouts
    2. Combine **Fluid** & **Fixed**
    3. Stages of **Squishiness**
    4. **Nested** Contexts
    5. **Expand** & **Contract** Content
    6. Media Queries, **As Needed**
  caption: |
    [Jen Simmons](https://twitter.com/jensimmons/status/980980521848127488)

- md: |
    5. ## **Nested** Contexts _???_
    6. ## **Expand** & **Contract** Content _???_
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
  sub: We live in _the future_!
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

- img: cqs/smashde/cqs.jpg
  alt: >
    Timeline with container queries around 2022
  caption: |
    (Slide by Christine Vallaure)

- img: cqs/john-snow.jpg
  alt: >
    Image of John Snow
    from Game of Throwns
    labeled 'Large Language Models know nothing'

- img: cqs/container-hello.jpg
  alt: |
    Yellow shipping container
    with a red hand-written speech bubble:
    actually, I know stuff
  position: top

- caniuse: css-container-queries

- pen: media-v-container-live

- title: Progressive **Enhancement**...
  css: |
    /* explicit fallbacks, rarely needed */
    @supports not (container: name) { /* … */ }

- title: There's a **Polyfill**
  sub: |
    [GoogleChromeLabs/container-query-polyfill](https://github.com/GoogleChromeLabs/container-query-polyfill)

# limitations
- img: cqs/thinker-how.jpg
  alt: |
    The thinker
    with a red scribbled thought bubble:
    how?!

- pre: What about the
  title: 🧐 **infinite** layout loops?

- title: Well… **yeah**
  sub: (*some restrictions apply)

- title: For **Queries** to Work…

- pre: We can't _change_
  title: The Container **Being Queried**

- title: |
    Directly or **Indirectly**

- pre: For
  title: >
    **Size**-Related Queries…

- pre: We Need to
  title: |
    **Turn Off** Intrinsic Sizing

- img: cqs/contained.png
  alt: >
    Nested boxes diagram
    with the intrinsic arrows from content
    scribbled out

- title: CSS **Containment**
  sub: |
    contain: **size** | _layout_ | _style_ | _paint_;
  caption: |
    Avoid internal impacts
    on external elements...

- pen: css-rad

- img: cqs/flowing.png
  alt: >
    Two circles labeled context and content,
    with arrows going both ways

- img: cqs/one-way.png
  alt: >
    Context and content circles,
    with content scribbled over

- img: cqs/all-context.png
  alt: >
    Glitchy context circles and arrows
    covering the whole page

- img: cqs/smashde/no.jpg
  fit: contain
  background: black
  alt: >
    No
  caption: Slide from Amy Hupe

- title: >
    **Inline-Only** Containment **?!?**
  caption: |
    [Thoughts on an implementable path forward for Container Queries](https://github.com/dbaron/container-queries-implementability),
    by **David Baron**

- pre: Most _web layouts_…
  title: Define **Explicit Inline Size**
  sub: e.g. grid systems

- pre: Most _web layouts_…
  title: Keep **Implicit Block Size**
  sub: somewhere for the content to go

- pre: >
    Inline-axis containment
  title: |
    Technically Still **A Loop**
  caption: >
    [Ancestor Layout Loops with Single-Axis Containment](https://github.com/w3c/csswg-drafts/issues/6426)

- pen: >
    💥 Inline Containment Error, Auto-sized BFCs effected by floats
  id: mdmJRxW

- title: >
    👍🏼 **Inline-Only** Containment 🥳
  sub: (what loop? If you don't tell anyone, I won't)

- title: >
    👎🏼 ~~**Block-Only** Containment~~
  sub: (ok, that's too many loops)

- pre: We can _only_
  title: Measure The **Axis We Contain**

- pre: Use _`inline-size`_
  title: For **Most Containers**

- pre: Use _`size`_
  title: For **Scroll Containers**

- pen: Containing Size
  id: OJBqJmy

- pre: Also need to
  title: Contain **Layout** & **Style**

- pre: Since…
  title: Containment is **Invasive**

- pre: We create
  title: >
    **Explicit** Containers

- md: |
    ~~**`contain`**`: inline-size layout style;`~~

    ```css
    container-type: inline-size;
    ```

- pen: Understanding containment
  id: oNaVvad

# creating containers

- css: |
    .element-to-query {
      container-type: inline-size; /* or size */
    }
  caption: Applies size, layout, and style containment

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

- pre: Also Recommended…
  title: >
    **Name** Your Containers

- css: |
    main {
      container-type: inline-size;
      container-name: layout main;
    }
  title: Any number of **names**…
  caption: >
    Can be useful to have both _unique_ and _shared_ names

- css: |
    main {
      container: layout main / inline-size;
    }
  caption: >
    `names` [`/ types`]?

- css: |
    @container layout (min-width: 40em) {
      .conditional { /* … */ }
    }

    @container main (min-width: 40em) {
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

- pre: Always
  title: Measuring an **Ancestor**
  sub: (can't change what you measure!)

- pre: Containers can
  title: Query **Other Containers**

- pen: Enter the 36 Chambers
  id: poamBMw

- pre: Always
  title: Measuring an **Element**

- pre: >
    Bonus! _Container_ Queries
  title:
    Measure **Actual Styles**
  caption: >
    **Computed values**
    on the _container element_

- pen: Size queries, relative/var units
  id: QWZYOrM

- title: Grid **Tracks** & **Flex** Sizing?
  sub: No _element_ to measure...

- img: queries-units/mudturtles.jpg
  alt: |
    Three mud turtles
    on a small log
    surrounded by water.

- pen: cq-flex
- pen: Space Facts - CQ Demo with :has() (in grid)
  id: abqPdQv
  user: una
  caption: Una Kravets

- img: cqs/smashde/web-components.jpg
  alt: >
    Web Components
  caption: |
    (Slide by Zach Leatherman)

- pen: cq-books

- demo: https://spontaneous-crepe-7edffa.netlify.app/
  caption: >
    [Weather Widget](https://github.com/vanhoofmaarten/weather-widget/blob/main/src/weather-widget.style.ts#L47-L71)
    by **Maarten Van Hoof**
    (see dev tools)

- pen: cq-icons
  user: una
  caption: Una Kravets

- pen: cq-blinds
  caption: Jhey Tompkins

- pre: For legacy reasons...
  title: No **Default Containers**
  caption:
    (we shouldn't rely on
    [body style propagation](https://blog.jim-nielsen.com/2021/propagating-up-in-css/))

- pen: Root container tests
  id: xxmOzLd
  caption: >
    [Can We Query the Root Element?](https://www.oddbird.net/2023/07/05/contain-root/)

- css: |
    /* extrinsic size, from the viewport */
    html, body { block-size: 100%; }
    /* root container */
    html { container: root / size; }
    /* body as scroller */
    body { overflow: auto; }

- title: >
    **Simpler** Solution…
  sub: (without height queries)
  css: |
    body > :is(header, main, footer, aside), {
      container: layout / inline-size;
    }

- pre: Root Containers, not great…
  title: We're **Working On It**
  caption: https://github.com/w3c/csswg-drafts/issues/9003

- pre: also…
  title: Container Query **Units**
  sub: |
    `cqw` | `cqh` | `cqi` | `cqb` | `cqmin` | `cqmax`

- pen: cq-units-nike
  caption: Scott Kellum

- pen: Container Query Units - illo
  id: ExLvGLx/149e26f641af0039256518d6723d12a0
  user: valhead

- css: |
    @keyframes slide {
      0% {translate: calc(0cqi - 100%);}
      100% {translate: calc(100cqi);}
    }

- img: cqs/translate-x.png
  alt: >
    off-left (0cqi - 100%)
    to off-right (100cqi)
    and left-edge (0cqi)
    to right-edge (100cqi - 100%)
  caption: Using the `translate` transform…

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

- img: cqs/cat-box-query.jpg
  position: top
  alt: |
    cat in a box, thinking
    'OMG I have so many questions for this damn box'
  caption: Photo by [Sahand Babali](https://unsplash.com/@sahandbabali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash

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

- title: No **Containment** Required
- pre: All _Elements_
  title: Are **Style Containers**

- pre: Always
  title: Queries **Direct Parent**
  sub: Unless you query a specific `container-name`

- pen: Style query button themes
  id: abGBNNx

- pen: Light/Dark Style Queries
  id: wvXvxmv

- pen: Web component style query parameters
  id: abKVaoo

- pen: Queries on pseudo-classes
  id: vYjMjGd

- pen: Style queries test
  id: ExOabRz

- pen: Style Queries & Computed Values
  id: WNamboz
  caption: >
    [Computed values in container style queries](https://www.matuzo.at/blog/2023/100daysof-day83/)
    by **Manuel Matuzovic**

- caniuse: css-container-queries-style

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

- pen: Sticky Header State Query!
  id: GRPZeKV
  caption: >
    [Chrome Explainer](https://lilles.github.io/explainers/state_container_queries.html)

- img: cqs/thinker.jpg
  alt: |
    Statue of The Thinker
    with a scribbled thought bubble asking:
    do containers know stuff?
  caption: Photo by [Avery Evans](https://unsplash.com/@averye457?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash

- title: |
    **Yes**.

- img: cqs/container-yeah.jpg
  position: top
  alt: |
    Yellow shipping container
    with a red hand-written speech bubble:
    I'm contained, AMA

- title: |
    Things **Containers Know**:
  md: |
    1. Their **Size** (if contained)
    2. **Custom Property** Values
    3. **Relative** Values (like `em`)
    4. Maybe **Some States**?? (tbd)

- img: cqs/please-do.jpg
  fit: contain
  alt: |
    Please do query the containers
    now actually, thanks!
