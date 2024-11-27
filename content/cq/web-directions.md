---
venue: Web Directions Dev Summit
date: 2024-11-28
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)

slides:

- background: >
    linear-gradient(
      to bottom right,
      red, orange, yellow, green, blue, indigo
    )
  md: |
    <button onclick="this.closest('article').style.setProperty('filter', 'grayscale(100%)')" data-btn>✨ match my outfit</button>

- img: cqs/containers.jpg
  alt: |
    A shipping yard from above,
    with rows of colorful stacked shipping containers
  caption: >
    Photo by [CHUTTERSNAP](https://unsplash.com/fr/@chuttersnap?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  script: |
    Containers…

- img: cqs/box.jpg
  alt: |
    A handmade wooden box with a missing latch
  caption: >
    Photo by [OWN FILTERS](https://unsplash.com/@ownfilters?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
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

- img: cqs/wd24/cat-box-split.jpg
  alt: |
    The cat image is split and duplicated
    so that it will line up across two screens,
    a scribbled note asks you to ignore the gap
    between the images

# <!--
# .########..##.......########....###.....######..########
# .##.....##.##.......##.........##.##...##....##.##......
# .##.....##.##.......##........##...##..##.......##......
# .########..##.......######...##.....##..######..######..
# .##........##.......##.......#########.......##.##......
# .##........##.......##.......##.....##.##....##.##......
# .##........########.########.##.....##..######..########
# -->

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

- img: css-next/rwd.jpg
  alt: |
    A List Apart:
    Responsive Web Design
    by Ethan Marcotte (May 25, 2010)
  position: bottom
  caption: |
    **Media Queries** &
    [RWD](https://alistapart.com/article/responsive-web-design/), 2010
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
  position: center
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

# <!--
# .##....##..#######.
# .###...##.##.....##
# .####..##.##.....##
# .##.##.##.##.....##
# .##..####.##.....##
# .##...###.##.....##
# .##....##..#######.
# -->

- img: cqs/thinker-browsers.jpg
  alt: |
    same statue of The Thinker
    with a scribbled thought bubble,
    but there's browser logos listening in
    from behind the shrubbery
  caption: Photo by [Avery Evans](https://unsplash.com/@averye457?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash
  script: |
    The browsers heard us asking,
    and all responded in unison!

- quote: >
    **NO**.
  cite: >
    The Browsers
- quote: >
    Not **Ever**.
  cite: >
    The Browsers
- quote: >
    **Stop** Asking.
  cite: >
    The Browsers

- img: cqs/please-dont.jpg
  alt: |
    Please don't feed the animals
    hand-painted sign,
    scribbled over to say:
    please don't query the containers
  fit: contain
  position: center

- quote: >
    Container queries will
    **never be possible** on the web.
    They would cause _infinite layout loops_.
  cite: The Browsers

- img: cqs/2001-past.jpg
  alt: |
    Ape from the opening of 2001
    standing over an animal skeleton,
    and waving a bone
  script: |
    But that was the past!

- img: cqs/smashing/enterprise-d.jpg
  alt: |
    Spaceship in space -
    USS Enterprise, NCC 1701-D -
    from Star Trek, The Next Generation
  script: |
    And we live in the future!
    Sorry, not this future.

- img: cqs/authoritarian.jpg
  alt: |
    Screenshot of Stanford SFI article
  caption: >
    [Understanding the Global Rise of Authoritarianism](https://fsi.stanford.edu/news/understanding-global-rise-authoritarianism)
  script: |
    We get a global rise in authoritarianism.
    Sorry, I used to have a joke there
    about flying cars and spicy auto complete,
    but... I don't know.

- img: cqs/smashing/tng-data.jpg
  alt: |
    Data,
    the android from Star Trek TNG,
    sitting at the console
    and looking back at the camera
    with golden eyes
  script: |
    I'm feeling sad about our industry obsession
    with fancy new technology,
    without seriously considering
    how our algorithms will be used
    by corporations or governments
    to do large-scale harm.

- img: cqs/wd24/web-directions.jpg
  alt: The Web Directions logo
  script: |
    What direction are we taking the web?
    Is it a direction that helps real people,
    or only the bottom line?

- demo: wd24-talking

- img: cqs/john-snow.jpg
  alt: >
    Image of John Snow
    from Game of Throwns
    labeled 'Large Language Models know nothing'
  script: |
    Large language models don't know anything,

- img: cqs/container-hello.jpg
  alt: |
    Yellow shipping container
    with a red hand-written speech bubble:
    actually, I know stuff
  position: top
  script: |
    But containers do!

- img: cqs/john-snow.jpg
  alt: >
    Image of John Snow
    from Game of Throwns
    labeled 'Large Language Models know nothing'
  script: |
    Large language models don't know anything,

- img: cqs/wd24/phil.jpg
  alt: >
    Phil Nash in front of a slide
    showing the 'thought process' of an AI
  caption: Phil Nash

- img: cqs/wd24/phil-edit.jpg
  alt: >
    Phil's slide is badly edited to say
    LLM's don't know anything
  caption: Phil Nash*

- img: cqs/wd24/phil-shivay.jpg
  alt: >
    Shivay Lamba added on top
    with his slide of John Snow
    added into Phils edited slide
  caption: Shivay Lamba & Phil Nash*

- img: cqs/wd24/phil-shivay-mia.jpg
  alt: >
    Mia's disgusted face from an earlier demo
    duplicated and split so it hopefully
    forms a single image across two screens.
  caption: WTF?

- caniuse: container-queries
  title: Container Queries
  script: |
    Container Queries!
    They've been supported
    in all major browsers
    for almost 2 years now!

- pen: media-v-container-live

- css: |
    /* create some containers */
    header, nav, main, aside, footer, section {
      container-type: inline-size;
    }

- css: |
    /* query those containers */
    @container (width > 30em) {
      .card { /* style things inside them */ }
    }

- pre: Thanks.
  title: Any **Questions**?

# <!--
# .##.....##.####..######..########..#######..########..##....##
# .##.....##..##..##....##....##....##.....##.##.....##..##..##.
# .##.....##..##..##..........##....##.....##.##.....##...####..
# .#########..##...######.....##....##.....##.########.....##...
# .##.....##..##........##....##....##.....##.##...##......##...
# .##.....##..##..##....##....##....##.....##.##....##.....##...
# .##.....##.####..######.....##.....#######..##.....##....##...
# -->

- img: cqs/thinker-how.jpg
  alt: |
    The thinker
    with a red scribbled thought bubble:
    how?!
  script: |
    So how did we get here?

- pre: What about those
  title: Infinite **Layout Loops**??!

- pre: In order to understand…
  title: >
    **Why** Container Queries Work

- pre: We need to understand…
  title: Why They **Shouldn't** Work

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

- known: img-everything-devices
- known: img-everything-speakers
- img: unfriendly/braille.jpg
  alt: Braille interface and headphones

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

# <!--
# ..######...#######..##.......##..........###....########.
# .##....##.##.....##.##.......##.........##.##...##.....##
# .##.......##.....##.##.......##........##...##..##.....##
# .##.......##.....##.##.......##.......##.....##.########.
# .##.......##.....##.##.......##.......#########.##.....##
# .##....##.##.....##.##.......##.......##.....##.##.....##
# ..######...#######..########.########.##.....##.########.
# -->

- img: no-harm/not-alone.jpg
  alt: >
    We're Not Alone
    (in big block letters, in space)
  script: |
    - We're not alone here
    - We're part of an ecosystem
    - Our decisions impact other people
    - And on the web, we don't get final say

- img: no-harm/not-alone-browsers.jpg
  alt: >
    Same We're Not Alone,
    with browser logos on top
  script: |
    - We're collaborating with browsers

- img: no-harm/not-alone-users.jpg
  alt: >
    Same We're Not Alone,
    with browser logos
    and a guy in construction clothes
    carrying a laptop
  script: |
    - Also the people who interact with our sites
    - (super cute in their handy tool belts)
    - On their chosen devices
    - (with varying capabilities)
    - _And we're also collaborating with…_

- known: img-not-alone-et
  script: |
    - aliens 👽
    - Maybe, who knows?

# <!--
# ....###....########.....###....########..########
# ...##.##...##.....##...##.##...##.....##....##...
# ..##...##..##.....##..##...##..##.....##....##...
# .##.....##.##.....##.##.....##.########.....##...
# .#########.##.....##.#########.##...........##...
# .##.....##.##.....##.##.....##.##...........##...
# .##.....##.########..##.....##.##...........##...
# -->

- pre: Web _Designs_
  title: Need to **Adapt**…

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

- quote: >
    Graphic design of **unknown content**
    with **unknown collaborators**,
    on an **infinite and unknowable canvas**,
    across **operating systems, interfaces, languages,
    and writing modes**...
  cite: me
  script: |
    - (slide)
    - It's absurd

- quote: |
    Web **for all**. Web **on everything**.
  cite: W3C [Mission Statement](https://w3.org/Consortium/mission.html#principles)
  script: |
    So, if this is what we want,
    a web for all - on everything

- title: Technology is Political
  mode: light
  background:
    linear-gradient(
      to bottom,
      powderblue 20%,
      pink 20% 40%,
      white 40% 60%,
      pink 60% 80%,
      powderblue 80%
    )
  script: |
    This is a political vision
    for the future of the web!
    A vision that's built into HTML and CSS
    from the start!
    Because tech is always political!

- svg: svg/content/more-more
  alt: Animation of twitter-like posts appearing
  script: |
    So now,
    Somehow we have to fit all this
    content --
    more and more content all the time --

- img: dynamic-css/devices.jpg
  alt: A zillion different devices of all sizes (original)
  script: |
    Onto any screen (or lack of screen) that shows up.

- img: cqs/in-out.png
  alt: |
    A box with context pushing in,
    and content pushing out
  fit: contain
  position: center
  background: white
  script: |
    And everything is CSS is based on this tension,
    content pushing out,
    and context pushing in

- img: cqs/intrinsic-extrinsic.png
  alt: |
    An outer box is labeled
    extrinsic size (imposed from outside),
    and the overflowing text inside says
    intrinsic size (from the content)
  fit: contain
  position: center
  background: white
  script: |
    A negotiation between
    Intrinsic and extrinsic sizes --
    the content and the container

- title: >
    **Extrinsic** Sizing
  md: |
    - Context sizes (available space)
    - `width` or `height`
      set in `px`, `%`, `em`, etc

- title: >
    **Intrinsic** Sizing
  md: |
    - `auto`
    - `min-content`
    - `max-content`
    - `fit-content`

- demo: normal-flow
  caption: AKA "Block Layout"

- pre: Flow is
  title: Very Cool, **Actually**
  sub: Makes **The Web _Responsive_**

- known: css-rad

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

# <!--
# .##.......####.##.....##.####.########..######.
# .##........##..###...###..##.....##....##....##
# .##........##..####.####..##.....##....##......
# .##........##..##.###.##..##.....##.....######.
# .##........##..##.....##..##.....##..........##
# .##........##..##.....##..##.....##....##....##
# .########.####.##.....##.####....##.....######.
# -->

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

- img: cqs/in-out.png
  alt: |
    A box with context pushing in,
    and content pushing out
  fit: contain
  position: center
  background: white

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

- pre: Well there's your
  title: Infinite **Layout Loop**

- pre: Our queries can't _change_
  title: The Container **Being Queried**

- title: |
    Directly or **Indirectly**

- pre: For
  title: >
    **Size**-Related Queries…

- img: cqs/in-out-no-content.png
  alt: |
    Original content/context diagram,
    with 'content' scribbled out.
  fit: contain
  position: center
  background: white

# <!--
# ..######...#######..##....##.########....###....####.##....##
# .##....##.##.....##.###...##....##......##.##....##..###...##
# .##.......##.....##.####..##....##.....##...##...##..####..##
# .##.......##.....##.##.##.##....##....##.....##..##..##.##.##
# .##.......##.....##.##..####....##....#########..##..##..####
# .##....##.##.....##.##...###....##....##.....##..##..##...###
# ..######...#######..##....##....##....##.....##.####.##....##
# -->

- title: CSS **Containment**
  sub: |
    contain: **size** | _layout_ | _style_ | _paint_
  caption: |
    (people have been working on it for years)

- pen: css-rad

- pen: Inline/Block Intrinsic Sizing
  id: WbeepzN
  script: |
    Let's take a closer look
    at intrinsic sizing…

- pre: For _Block Boxes_…
  title: >
    Only The `block-size` is **Intrinsic**
  sub: (_from content_)

- pre: For _Block Boxes_…
  title: >
    The `inline-size` is **Already Extrinsic**
  sub: (_from context_)

- title: >
    ⁉️ **Inline-Size** Containment ⁉️

- pen: Intrinsic Sizes & Containment
  id: Rwmgwmb

- img: css-next/dragons.jpg
  position: bottom
  title: ⚠️ Dragons
  caption: |
    See the
    [Issues with Single-Axis Containment](https://github.com/w3c/csswg-drafts/issues/6426)

- title: >
    👍🏼 **Inline-Size** Containment 🥳

- title: >
    👎🏼 ~~**Block-Size** Containment~~
  sub: (too many side effects)

- title: |
    👍🏼 **Inline-Size** Containment \
    👍🏼 **Size** Containment
  sub: (both axis)

- pre: Also need to
  title: Contain ~~**Layout**\* &~~ **Style**
  caption: >
    *This is [being relaxed](https://github.com/w3c/csswg-drafts/issues/10544#issuecomment-2248438355)!

- pen: Understanding containment
  id: oNaVvad

- md: |
    ~~**`contain`**`: inline-size layout style;`~~

    ```css
    container-type: inline-size;
    ```

- pre: We can _only_
  title: Measure The **Axis We Contain**

- pre: We _usually only_
  title: Measure The **Inline Axis**
  sub: >
    (anyway. so there.
    we don't even care about your silly block axis,
    you nerd-faced nerd.
    leave us alone.)

- pre: Use _`inline-size`_
  title: For **Most Containers**

- pre: But _`size`_
  title: For **Scrolling Containers**

- pen: Containing Size
  id: OJBqJmy

# <!--
# ..######..##....##.##....##.########....###....##.....##
# .##....##..##..##..###...##....##......##.##....##...##.
# .##.........####...####..##....##.....##...##....##.##..
# ..######.....##....##.##.##....##....##.....##....###...
# .......##....##....##..####....##....#########...##.##..
# .##....##....##....##...###....##....##.....##..##...##.
# ..######.....##....##....##....##....##.....##.##.....##
# -->

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
    body > :is(header, nav, main, aside, footer) {
      container-type: inline-size;
    }

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

- css: |
    @container layout {
      .conditional { /* … */ }
    }

    @container main {
      .conditional { /* … */ }
    }
  caption: Coming _soon_!

- title: Finding **Containers**
  md: |
    1. For _each matched element_…
    2. Find the _nearest ancestor element_ with…
       - Required _container name_
       - Required _container type(s)_

- pre: No _self-query_
  title: Measuring an **Ancestor**
  sub: (can't change what you measure!)

- pre: Containers can
  title: Query **Other Containers**

- pen: Enter the 36 Chambers
  id: poamBMw
  caption: >
    Eric Portis
    (failed to crash the browser)

- pen: cq-icons
  user: una
  caption: Una Kravets

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

- img: cqs/grid-tracks.jpg
  alt: >
    A thick pink boarder around the element
    and then various smaller lines on both axis
    creating a grid of columns and rows
  fit: contain
  background: >
    #121212

- img: queries-units/mudturtles.jpg
  alt: |
    Three mud turtles
    on a small log
    surrounded by water.

- pen: cq-flex
- pen: cq-books

- demo: https://spontaneous-crepe-7edffa.netlify.app/
  caption: >
    [Weather Widget](https://github.com/vanhoofmaarten/weather-widget/blob/main/src/weather-widget.style.ts#L47-L71)
    by **Maarten Van Hoof**
    (see dev tools)

# <!--
# .##.....##.##....##.####.########..######.
# .##.....##.###...##..##.....##....##....##
# .##.....##.####..##..##.....##....##......
# .##.....##.##.##.##..##.....##.....######.
# .##.....##.##..####..##.....##..........##
# .##.....##.##...###..##.....##....##....##
# ..#######..##....##.####....##.....######.
# -->

- pre: also…
  title: Container Query **Units**
  sub: |
    `cqw` | `cqh` | `cqi` | `cqb` | `cqmin` | `cqmax`

- pen: cq-units-nike
  caption: Scott Kellum

- img: cqs/translate-x.png
  alt: >
    off-left (0cqi - 100%)
    to off-right (100cqi)
    and left-edge (0cqi)
    to right-edge (100cqi - 100%)
  caption: Using the `translate` transform…

- css: |
    @keyframes slide {
      0% {translate: calc(0cqi - 100%);}
      100% {translate: calc(100cqi);}
    }
  caption: Val Head

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
    `5cqem`, `5cqch`, etc…

- title: Eventually…
  sub: >
    `5cqi(container-name)`

- img: cqs/wd24/cat-box-query-split.jpg
  position: top
  alt: |
    cat and speach bubble
    are again split and duplicated
    to center the image across two screens

- img: cqs/container-more-split.jpg
  alt: |
    Yellow shipping container
    with a red hand-written speech bubble:
    I know other stuff too
    (split and duplicated for two screens)
  position: top

# <!--
# ..######..########.##....##.##.......########
# .##....##....##.....##..##..##.......##......
# .##..........##......####...##.......##......
# ..######.....##.......##....##.......######..
# .......##....##.......##....##.......##......
# .##....##....##.......##....##.......##......
# ..######.....##.......##....########.########
# -->

- title: |
    **Style** Queries
  css: |
    @container style(--colors: invert) { … }

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

- caniuse: container-style-queries
  title: Container Style Queries

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

- pen: List outdent with style queries
  id: LYrOgwM

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

# <!--
# ..######..########....###....########.########
# .##....##....##......##.##......##....##......
# .##..........##.....##...##.....##....##......
# ..######.....##....##.....##....##....######..
# .......##....##....#########....##....##......
# .##....##....##....##.....##....##....##......
# ..######.....##....##.....##....##....########
# -->

- title: |
    **State** Queries (**???**)
  caption: |
    [CSSWG issue for state queries](https://github.com/w3c/csswg-drafts/issues/6402)

- title: >
    **???**
  css: |
    @container scroll-state(stuck) { … }
    @container scroll-state(snapped) { … }
    @container scroll-state(overflowing) { … }

- pen: Sticky Header State Query!
  id: GRPZeKV
  caption: >
    [Chrome Explainer](https://lilles.github.io/explainers/state_container_queries.html)

# <!--
# .####.##.....##....###.....######...########..######....
# ..##..###...###...##.##...##....##..##.......##....##...
# ..##..####.####..##...##..##........##.......##.........
# ..##..##.###.##.##.....##.##...####.######....######....
# ..##..##.....##.#########.##....##..##.............##...
# ..##..##.....##.##.....##.##....##..##.......##....##...
# .####.##.....##.##.....##..######...########..######....
# -->

- img: cqs/wd24/sizes.jpg
  alt: >
    Mandy Michael in front of a slide
    about responsive images
    and the 'sizes' attribute
- title: Sizes `auto`
  caption: >
    Chromium only [for now](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/sizes#browser_compatibility)
- img: cqs/wd24/image.jpg
  alt: >
    Mandy Michael in front of a slide
    about lazy loading images

# <!--
# ..#######..##.....##.########
# .##.....##.##.....##....##...
# .##.....##.##.....##....##...
# .##.....##.##.....##....##...
# .##.....##.##.....##....##...
# .##.....##.##.....##....##...
# ..#######...#######.....##...
# -->

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
---
