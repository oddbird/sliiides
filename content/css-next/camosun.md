---
venue: Camosun College
date: 2023-03-14
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
slides:
- from: intro
  use: logo
  caption: Web consulting agency
- from: intro
  use: oss

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
    It is required that HTML be
    **a common language between all platforms**...
  cite: WWW Project

- quote: |
    ...This implies no device-specific markup,
    or anything which requires
    **control over fonts or colors**.
  cite: WWW Project

- quote: |
    ## **Never Gonna Happen**
  cite: Sir Tim

- from: auto
  use: end

- pre: Not a
  title: Lack of **Design**

- img: no-harm/line-mode.jpg
  alt: The second browser, a text-only terminal
  position: top
  caption: |
    [Line Mode Browser](http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html)

- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top right
  caption: |
    [WWW HyperMedia Browser](https://worldwideweb.cern.ch/browser/)
    & *Editor*

- pre: A lack of
  title: |
    Design **Control**

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

- pre: The _Web_
  title: Should **Adapt**…

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
  caption: more more more

- quote: |
    We're designing _unknown content_
    with _unknown collaborators_
    on an **infinite and unknowable canvas**,
    across _operating systems_, _interfaces_,
    _writing-modes_, & _languages_...
  cite: me

- demo: normal-flow

# CSS
- pre: 1993-1994
  title: |
    [w3.org/Style/History/](https://w3.org/Style/History/)

- img: layers/cascade-proposal.jpg
  alt: |
    Cascading HTML style sheets -- a proposal,
    Håkon W Lie, 10 Oct 1994
  position: top
  background: white
  <<: *proposal

- quote: |
    The **user/browser** specifies _initial preferences_
    and **hands the remaining influence over** to the document [authors].
  <<: *proposal

- quote:
    Provide **hints** that _the browser may or may not use_.
  <<: *proposal

- title: CSS **Declarations**
  css: |
    property: value;

- title: |
    _`color`_`:` **blue**`;`

- md: |
    ```html
    <button style='color: blue'>…</button>
    <button style='color: blue'>…</button>
    <button style='color: blue'>…</button>
    <button style='color: blue'>…</button>
    <button style='color: blue'>…</button>
    ```
- md: |
    ```html
    <button>…</button>
    <button>…</button>
    <button>…</button>
    ```
    ```css
    button { color: violet; }
    ```

- html: |
    <link rel="stylesheet" href="so-many-hints.css">
    <style>...</style>

- quote: |
    An ordered list (**cascade**) of _style sheets_.
    Referenced from _the same document_.
  <<: *proposal

- title: |
    💥🙈⁉️💥
  md: |
    ```html
    <button style='color: blue'>…</button>
    ```
    ```css
    button { color: violet; }
    ```

- title: |
    **Multiple** or **Unknown** ⁉️
  css: |
    color: teal;
    color: violet;
    color: oklch(79.269% 0.171 70.67);

- title: |
    On every _html element_ \
    For every _css property_ \
    We need **exactly one value**

- pre: Rules for…
  title: |
    **Cascading** filters out \
    **Inheritance** fills in

- img: css-next/coins.jpg
  alt: |
    Mechanical coin sorter on a table,
    with a ramp at the top
    and a small-to-large series of slots
  fit: contain
- img: css-next/coins-exclusive.jpg
  alt: |
    Same coin sorter,
    with all slots crossed off
    except for the largest one with coins in it,
    and an arrow pointing at those coins
    that says 'move on'
  fit: contain
- img: css-next/coins.jpg
  alt: |
    Mechanical coin sorter on a table,
    with a ramp at the top
    and a small-to-large series of slots
  fit: contain
  caption: |
    (but this time using _different metrics_)

- demo: cascade-funnel

# origin & importance
- section: Origin & **Importance**

- pre: Origin…
  title: |
    **Who Requested** The Style?

- quote: |
    The **user/browser** specifies _initial preferences_…
  <<: *proposal

- title: |
    🖥 **User Agent** Styles
  sub: aka '_browser defaults_'
  caption: |
    Collected by
    [Jens Oliver Meiert](https://meiert.com/en/blog/user-agent-style-sheets/)

- css: |
    body { margin: 8px; }
    a:link { color: blue; }
    div, section, article, p, ol, ul /* etc */ {
      display: block;
    }
    h1, h2, h3, h4 /* etc */ {
      font-weight: bold;
      font-size: something big I dunno;
    }

- img: layers/cascade-proposal.jpg
  alt: |
    Cascading HTML style sheets -- a proposal,
    Håkon W Lie, 10 Oct 1994
  position: top
  background: white
  <<: *proposal

- img: layers/proposal-no-defaults.jpg
  fit: 100% auto
  alt: |
    One big block of text
    with no white-space
    or line breaks
  caption: |
    `* { all: initial; }`

- title: |
    👥 **User** Styles
  sub: Establish desired *preferences*
  caption: These days rarely CSS, but *treated the same*

- img: layers/user-preferences.jpg
  fit: contain
  alt: |
    Language and appearance preferences in Firefox
    include light/dark mode,
    colors, fonts, and zoom level

- title: 🎨 **Author** Styles

- title: Cascade 🗺 **Origins**
  md: |
    1. 🖥 **User Agent** Defaults (applied first)
    2. 👥 **User** Preferences (override defaults)
    3. 🎨 **Author** Styles (so powerful)

- img: layers/vader.jpg
  alt: |
    Darth Vader
    choking a rebel soldier
    as storm troopers watch

- quote: |
    If conflicts arise **the user should have the last word**…
  <<: *proposal

- img: layers/balance-force.jpg
  alt: |
    Kylo Ren and Rey
    standing in front of an entire star war
    with spaceships and lasers
    and AT-AT walkers

- pre: Why we have…
  title: ❗**importance**

- pre: Importance...
  title: |
    **How Much** Do They **Care**?

- twoup:
    - src: css-next/good-spock.jpg
      alt: Spock
    - src: css-next/evil-spock.jpg
      alt: Spock with a goatee
  caption: |
    !mportant _mirror universe_

- md: |
    1. ❗🎨 Author **Important** (goes first)
    2. ❗👥 User **Important** (override authors)
    3. ❗🖥 User Agent **Important** (most power)

- md: |
    1. 🖥 User Agent Defaults
    2. 👥 User Preferences
    3. 🎨 Author Styles
    4. ==❗🎨 Author **Important**==
    5. ==❗👥 User **Important**==
    6. ==❗🖥 User Agent **Important**==

- img: layers/preferences-important.jpg
  fit: contain
  alt: |
    In the font preferences dialogue,
    a default-checked option:
    Allow pages to choose their own fonts,
    instead of your selections above
  caption: |
    Un-check for `!important` behavior

- pre: The _purpose_ of…
  title: ❗**importance**

- pre: Authors
  title: 👎🏼 **Override** Styles
  sub: We _probably wrote ourselves_

- pre: Users
  title: |
    👍🏼 **Protect** Styles
  sub: From _future origins_

- title: Often **Isolated**
  md: |
    1. …
    2. …
    3. ==🎨 Author Styles==
    4. ==❗🎨 Author **Important**==
    5. ❗…
    6. ❗…

- img: layers/astrolabe.jpg
  alt: |
    Mechanical astrolabe
    with Earth at the center,
    and concentric rings
    for other planets/stars
- img: layers/orrery.jpg
  alt: |
    Clockwork orrery,
    with planets circling the sun,
    and the earth off to one side
  position: top
- img: layers/orrery-specificity.jpg
  alt: |
    Clockwork orrery,
    with a scribbled arrow
    pointing to the earth tilt gears
    labeled 'specificity'
  position: top

# specificity
- section: Selectors & **Specificity**

- title: How **Specifically**
  sub: Is a selector _targeting elements_

- img: layers/select-all.jpg
  fit: contain
  background: black
  alt: |
    AEA Denver website
    with an hotpink dashed outline
    around every element on the page
- img: layers/select-logo.jpg
  fit: contain
  background: black
  alt: |
    AEA Denver website
    with an hotpink dashed outline
    around only the logo

- title: |
    More **Specific** Styles \
    _Likely_ \
    More **Important**

- title: |
    [Heuristic](https://en.wikipedia.org/wiki/Heuristic)
  sub: |
    a _practical assumption_
    that approximates the goal

- title: Assumptions **Often Fail**

- from: itcss
  use: main
- from: itcss
  use: layers
- from: itcss
  use: graph

# Layers ----------------
- section: |
    Cascade **Layers**
  caption: |
    [Working Draft](https://www.w3.org/TR/css-cascade-5/)

- from: itcss
  use: layers

- css: |
    @layer settings { … }
    @layer tools { … }
    @layer generic { … }
    @layer elements { … }
    @layer objects { … }
    @layer components { … }
    @layer overrides { … }

- md: |
    1. `@layer `**`settings`**` { … }`
    2. `@layer `**`tools`**` { … }`
    3. `@layer `**`generic`**` { … }`
    4. `@layer `**`elements`**` { … }`
    5. `@layer `**`objects`**` { … }`
    6. `@layer `**`components`**` { … }`
    7. `@layer `**`overrides`**` { … }`
  caption: |
    As many layers as we want!

- md: |
    1. `@layer `**`Utilities`**` { … }`
    2. `@layer `**`Components`**` { … }`
    3. `@layer `**`Themes`**` { … }`
    4. `@layer `**`Frameworks`**` { … }`
    5. `@layer `**`Resets`**` { … }`
  caption: |
    Any names that we want!

- css: |
    @layer reset {
      audio[controls] { display: block; }
      [hidden] { display: none !important; }
    }

- title: |
    **Layers** of _Specificity_

- title: |
    _Specificity_ is **Contained**

- css: |
    @layer framework {
      #menu .dropdown .item:hover {
        background: whitesmoke;
      }

      .menu-item {
        background: lightcyan;
      }
    }

- css: |
    @layer framework {
      #menu .dropdown .item:hover {
        background: whitesmoke;
      }
    }

    @layer override {
      .menu-item {
        background: lightcyan;
      }
    }

- title:  More **Cascade Control**
- title: 👎🏼 **Escalating** ❗️mportance
- title: 👍🏼 **Managing** Priorities

- pre: Like _Origins_,
  title: |
    ❗️mportant Layers **Reverse**

- md: |
    1. Resets
    2. Themes
    3. ==Components==

- title: |
    **❗`important`**

- md: |
    1. Resets
    2. Themes
    3. Components
    4. ==**❗mportant** Components==
    5. ==**❗mportant** Themes==
    6. ==**❗mportant** Resets==

- img: layers/balance-force.jpg
  alt: |
    Kylo Ren and Rey
    standing in front of an entire star war
    with spaceships and lasers
    and AT-AT walkers

- title: |
    _Prioritize_ `->` **Layers** \
    _Protect_ `->` **Importance**

- pre: For _flexibility_
  title: Layer **Everything**
  sub: |
    Once we use un-layered styles,
    that's as high as we can go

- pre: (But _not_
  title: Every **Individual** Thing)

- img: css-next/layers-scope.webp
  alt: |
    A grid of overlapping
    'scope' columns (buttons, cards, logins)
    and 'layer' rows
    (default, theme, component).
    Each scope crosses all layers,
    and each layer crosses all scopes.
  fit: contain
  background: white

# Scope ----------------
- section: |
    **Scoped** Styles

- pre: 1. Avoid
  title: |
    **Naming** Conflicts
  sub: (across _large teams_ & _projects_)

- css: |
    .post__title { /* BEM */ }
    .title[data-JKGHJ] { /* Vue */ }
  caption: |
    Maintain uniqueness

- pre: 2. By
  title: Expressing **Membership**
  sub: (through _lower boundaries_ & _proximity_)

- css: |
    .title { /* global */ }
    .post .title { /* nested */ }

    .post__title { /* BEM */ }
  caption: |
    _Membership_ is distinct from _ancestry_

- img: csswg/components.jpg
  alt: wireframe of a site, with multiple nested components
  fit: contain
  background: '#e5e5e5'
  caption: |
    A "donut scope" with
    _lower boundaries_
    similar to shadow-DOM `slots`

- img: csswg/scoped.jpg
  alt: |
    Diagram shows a component with porous boundaries,
    all styles can penetrate, or establish their own lower boundaries
  fit: contain
  background: white

- css: |
    .light-theme a { color: purple; }
    .dark-theme a { color: plum; }
  caption: |
    _DOM Proximity_
    is similar to _inheritance_

- demo: scope-proximity-issue
- css: |
    @scope (.media) to (.content) {
      img { /* only images that are "in scope" */ }
    }
  caption: |
    [CSSWG Scope Issue](https://github.com/w3c/csswg-drafts/issues/5809)

- pen: Scope boundary demo
  id: ZErXZVY

- pen: Scope proximity demo
  id: wvyBNXP

- pen: Visualizing scope
  id: XWZwvWj

- pre: prototype…
  title: Now in **Chromium**
  caption: >
    `chrome://flags` » Experimental Web Platform Features

- img: css-next/layers-scope.webp
  alt: |
    A grid of overlapping
    'scope' columns (buttons, cards, logins)
    and 'layer' rows
    (default, theme, component).
    Each scope crosses all layers,
    and each layer crosses all scopes.
  fit: contain
  background: white

# container queries
- section: >
    **Container** Queries

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
    **»»»** 2020s

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

- title: 😭 It's ~~**Impossible**~~
- title: 🥳 It's **Shipping**

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

- title: Shorthand (**Names First**)
  css: |
    .sidebar {
      container: sidebar layout / inline-size;
    }

- pre: There's _no default container_...
  css: |
    html {
      // <name> / <type>
      container: root layout / inline-size;
    }

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

- title: Chromium **Prototype**
  sub: Currently only _custom properties_

- pen: Style query button themes
  id: abGBNNx

- pen: Web component style query parameters
  id: abKVaoo

- pre: Other _Questions_
  title: |
    For CSS **Containers**?
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
