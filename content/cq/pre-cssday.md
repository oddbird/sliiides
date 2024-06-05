---
venue: Pre-CSS-Day, CMD Amsterdam
date: 2024-06-05
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
  script: |
    Containers…

- img: cqs/box.jpg
  alt: |
    A handmade wooden box with a missing latch
  caption: Photo by [OWN FILTERS](https://unsplash.com/@ownfilters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
  script: |
    Do they know things?
- img: cqs/cat-box.jpg
  alt: |
    A grey and white cat
    in a cardboard box,
    looking directly at us,
    kinda grumpy
  caption: Photo by [Sahand Babali](https://unsplash.com/@sahandbabali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
  script: |
    What are they hiding in there?

- img: cqs/thinker.jpg
  alt: |
    Statue of The Thinker
    with a scribbled thought bubble asking:
    do containers know stuff?
  caption: Photo by [Avery Evans](https://unsplash.com/@averye457?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
  script: |
    As long as I can remember,
    developers have had questions for containers.
    What do they know?
    Do they know stuff?

- caniuse: css-container-queries
  script: |
    And the answer is yes. They do.
    Container queries have had broad support
    in all modern browsers
    for over a year now.

- pre: Thanks.
  title: Any **Questions**?

- title: It's **Complicated**
  script: |
    Ok, it's more complicated than that.
    Mostly developers had a single question,
    going back years:
    how big is the box?

- img: css-next/rwd.jpg
  alt: |
    A List Apart:
    Responsive Web Design
    by Ethan Marcotte (May 25, 2010)
  position: bottom
  caption: |
    [Responsive Web Design](https://alistapart.com/article/responsive-web-design/)
    by **Ethan Marcotte**, 2010
  script: |
    In 2010 we got Media Queries,
    the heart of
    Responsive Web Design

- pen: media-v-container
  print: media-v-container-break
  script: |
    Letting us measure the 'viewport'
    that our page is rendered in –
    and them adjust our designs based on that.
    That's pretty great,
    until we start adjusting our designs
    in more complex ways.

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
  script: |
    So right away developers were asking
    to measure (or query)
    not just the viewport,
    but other elements on the page.

- pre: 2011-_2022_
  title: |
    ~~**Selector** Queries~~ \
    ~~**Element** Queries~~ \
    **Container** Queries
  caption: A decade of **media** questions
  script: |
    There have been multiple approaches to this
    over the years,
    using a variety of names…

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
  script: |
    And it became one of the
    most requested features in CSS.

- img: cqs/thinker-browsers.jpg
  alt: |
    same statue of The Thinker
    with a scribbled thought bubble,
    but there's browser logos listening in
    from behind the shrubbery
  caption: Photo by [Avery Evans](https://unsplash.com/@averye457?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
  script: |
    Browsers knew we were asking,
    they knew we wanted this feature,
    and they all gave us the same answer…

- img: cqs/please-dont.jpg
  alt: |
    Please don't feed the animals
    hand-painted sign,
    scribbled over to say:
    please don't query the containers
  fit: contain
  position: center

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

- img: no-harm/indesign-gotl.jpg
  alt: InDesign book-cover layout

- img: no-harm/book-gotl.jpg
  alt: Published book

- img: no-harm/click-gotl.jpg
  alt: >
    Published book
    with badly super-imposed
    hand-pointer cursor
    and scribbled word click!

- img: no-harm/book-gotl.jpg
  alt: Published book

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
    in a "_Block Formatting Context_"

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

- img: cqs/in-out.png
  alt: |
    A box with context pushing in,
    and content pushing out
  fit: contain
  position: center
  background: white

- pen: flexbox
  id: LYgqwyp
  caption: 2012, **Flexbox**

- pen: Grid auto-fit
  id: xxyMvdx
  caption: 2017, **Grid**

- face: jensimmons.jpg
  pre: |
    Jen Simmons
  title: |
    **Intrinsic** Web Design
  md: |
    [Everything You Know About Web Design Just Changed](https://youtu.be/jBwBACbRuGY)

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

- title: 😎 **F**ing Cool Features
  sub: Making **The Web _Responsive_**

- known: css-rad

- img: cqs/in-out-issue.png
  alt: |
    Same content/context diagram,
    with scribbled circles and arrows
    representing the loop of information
    back and forth,
    as each one queries the other
  fit: contain
  position: center
  background: white

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

# limitations
- img: cqs/thinker-how.jpg
  alt: |
    The thinker
    with a red scribbled thought bubble:
    how?!

- pre: For _Container Queries_…
  title: Some **Restrictions Apply**

- pre: We can't _change_
  title: The Container **Being Queried**

- title: |
    Directly or **Indirectly**

- pre: For
  title: >
    **Size**-Related Queries…

- img: cqs/contained.png
  alt: >
    Nested boxes diagram
    with the intrinsic arrows from content
    scribbled out

- img: cqs/in-out-no-content.png
  alt: |
    Original content/context diagram,
    with 'content' scribbled out.
  fit: contain
  position: center
  background: white

- title: CSS **Containment**
  sub: |
    contain: **size** | _layout_ | _style_ | _paint_;

- pen: css-rad

- pre: By default, _block boxes_…
  title: >
    Get `block-size` from **Content**
  sub: (_intrinsic_)

- pre: By default, _block boxes_…
  title: >
    Get `inline-size` from **Context**
  sub: (_extrinsic_)

- title: >
    👍🏼 **Inline-Size** Containment 🥳

- pen: Intrinsic Sizes & Containment
  id: Rwmgwmb

- title: >
    👎🏼 ~~**Block-Size** Containment~~
  sub: (too many side effects)

- pre: Queries _only_
  title: Measure The **Axis We Contain**

- pre: Use _`inline-size`_
  title: For **Most Containers**

- pre: Use _`size`_
  title: For **Scroll Containers**

- pen: Containing Size
  id: OJBqJmy

- pre: Also need to
  title: Contain **Layout** & **Style**

- pen: Understanding containment
  id: oNaVvad

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

# creating containers

- css: |
    .element-to-query {
      container-type: inline-size; /* or size */
    }
  caption: Applies size, layout, and style containment

- css: |
    @container (inline-size > 40em) {
      .card { /* ... */ }
      h2 { /* ... */ }
    }
  caption: Logical dimensions

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

- pre: No _self-query_
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

- pen: Calc in container queries
  id: VwRGBeV

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

- pre: For reasons...
  title: No **Default Containers**
  caption:
    (we shouldn't rely on
    [body style propagation](https://blog.jim-nielsen.com/2021/propagating-up-in-css/))

- pen: Root container tests
  id: xxmOzLd
  caption: >
    [Can We Query the Root Element?](https://www.oddbird.net/2023/07/05/contain-root/)

- html: |
    body {
      > * { container: layout / inline-size; }
    }

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

- title: Eventually…
  sub: >
    `cqem`, `cqrem`, `cqch`, etc…

- title: Eventually…
  sub: >
    `cqi(container-name)`

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

- quote: |
    `.ಠ_ಠ { ` \
    **&nbsp;&nbsp;`--（╯°□°）╯`**`: `**`︵┻━┻`**`;` \
    `}`
    is valid CSS.
  cite: Tab Atkins
  source: |
    [@tabatkins](https://twitter.com/tabatkins/status/1099050056760487936)

- pen: Table Flip Style Query
  id: XWGvLzZ

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
