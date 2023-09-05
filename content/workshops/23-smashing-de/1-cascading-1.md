---
talk: Cascading Styles pt. 1
date: 2023-09-06
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
slides:

- title: The **Cascade**

- title: The '**C**' in...
- title: |
    C**H**SS
  <<: *proposal

- img: layers/cascade-proposal.jpg
  alt: |
    Cascading HTML style sheets -- a proposal,
    Håkon W Lie, 10 Oct 1994
  position: top
  fit: contain
  background: white
  <<: *proposal

- img: layers/back-to-the-future.jpg
  alt: |
    Back to the future
    flaming tire tracks between
    Doc and Marty's legs,
    as they look back in surprise.
  caption: '1989'

# origins of the web

- section: A **World Wide** Web

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
  cite: |
    W3C Mission, [Design Principles](https://w3.org/Consortium/mission.html#principles)

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

- img: layers/html-constraints.jpg
  alt: |
    info.cern.ch
    HTML Design Constraints, screenshot
  position: top
  fit: contain
  background: white
  caption: info.cern.ch/hypertext/WWW/TheProject.html

- quote: |
    It is required that HTML be
    **a common language between all platforms**...
  cite: WWW Project

- quote: |
    ...This implies no device-specific markup,
    or anything which requires
    **control over fonts or colors**.
  cite: WWW Project

- pre: Web _Design_
  title: Will **Never Happen**

- from: auto
  use: end

- pre: Not a
  title: Lack of **Design**

- img: no-harm/line-mode.jpg
  alt: The second browser, a text-only terminal
  position: top
  caption: |
    [Line Mode Browser](http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html)

- pre: A lack of
  title: |
    Design **Control**

- title: A **Radical** Shift
- img: unfriendly/agnesscott/press.png
  alt: Gutenberg Press
  caption: What's the mission of the printing press? (~1440)

- img: css-next/smashsf/sidesaddle-indd.jpg
  alt: |
    InDesign book-cover layout
    for Riding SideSaddle,
    my novel in a box

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

- img: css-next/smashsf/sidesaddle-box-click.jpg
  alt: |
    Same photo,
    but with a badly overlaid cursor pointer
    and three big scribbled red question marks

- img: css-next/smashsf/sidesaddle-box.jpg
  alt: |
    Final novel-in-a-box,
    Riding SideSaddle

# Contextual

- pre: Web styles…
  title: Must Be **Contextual**
  sub: Responsive to constant _change_

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

- title: Not just **Responsive**…
- title: …Also **Collaborative**

- img: layers/not-alone.jpg
  alt: |
    We're Not Alone
    (in big block letters, in space)
- img: layers/not-alone-browsers.jpg
  alt: |
    Same We're Not Alone,
    with browser logos on top
- img: layers/not-alone-users.jpg
  alt: |
    Same We're Not Alone,
    with browser logos
    and a guy in construction clothes
    carrying a laptop
- img: layers/not-alone-et.jpg
  alt: |
    Same We're Not Alone,
    with browser logos,
    a guy in construction clothes
    carrying a laptop,
    and ET

# Resilient

- pre: Web styles…
  title: Must Be **Resilient**

- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top right
  caption: |
    [WWW HyperMedia Browser](https://worldwideweb.cern.ch/browser/)
    & *Editor*

- img: no-harm/line-mode.jpg
  alt: The second browser, a text-only terminal
  position: top

- quote:
    WWW parsers should
    **ignore tags** which they do not understand,
    and **ignore attributes** which they do not understand
    of tags which they do understand.
  cite: WWW Project
  caption: Both *forward* & *backward* compatible

- pre: The web is _designed for_
  title: >
    **Progressive** Enhancement

- quote:
    Provide **hints** that _the browser may or may not use_.
  cite: Håkon Lie

- pre: CSS _Declaration_
  title: >
    **`property`**`:` **value**`;`


- title: |
    **`display`**`:` **grid**`;`

- pre: Browsers Can
  title: >
    **Ignore** Declarations
  css: |
    body {
      /* Browser default `display: block` */
      display: flex;
      display: grid;
    }

- pre: Browser Support
  title: is **Non-Binary**
  caption: |
    [CanIUse](https://caniuse.com/) » [**MayIUse**](https://mayiuse.org/)

- quote: |
    **You can use it and not use it at the same time**,
    because *it works and it doesn't work at the same time*.
    It's **Quantum CSS**!
    It's Magic!
  cite: |
    Jen Simmons,
    [Intro to Resilient CSS](https://www.youtube.com/watch?v=u00FY9vADfQ)

- title: Font **Stacks**
  sub: |
    `font-family: `*`Consolas`*`, `*`Menlo`*`, `*`'Courier New'`*`, `*`monospace`*`;`

- title: |
    **`@Supports`** `{ … }`

- pre: We *Already*
  title: |
    **Know How** To Do This

- img: rad/car-seat.jpg
  alt: Woman adjusting a car seat
  position: bottom

- pre: 2010...
  title: |
    **Responsive** Web Design**™️**

- pre: Not _Re-Writing_
  title: For **Every Viewport**

- pre: Providing
  title: >
    Progressive **Layers** of Style
  sub: e.g. _Mobile First_

# Declarative

- pre: Browsers need
  title: To **Understand Priorities**

- pre: We _provide_
  title: The **Meaning** & **Intent**

- pre: Web styles…
  title: Must Be **Declarative**

- title: |
    **`<h1>`**`Main header`**`</h1>`** \
  sub: |
    **`<p>`**`a paragraph`**`</p>`** \
  caption: |
    [Understanding why Semantic HTML is Important](https://medium.com/@mandy.michael/understanding-why-semantic-html-is-important-as-told-by-typescript-bd71ad41e6c4),
    by Mandy Michael

- title: |
    `16px `**`!=`**` 1em`

- title: |
    `flexbox `**`!=`**` grid`

- title: |
    Convey **Different Intent**

- quote: |
    There are **too many variables to consider.**
    The point of CSS is to make it so you don’t have to worry about them all.
    **Define some constraints.
    Let the language work out the details.**
  cite: Keith J Grant
  caption: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)

- pen: css-rad

- quote: |
    CSS is **unlike anything else**…
    designed for the realities
    of a **flexible, multilingual, multi-device** web.
  cite: Rachel Andrew, 2018
  caption: |
    [The Way We Talk About CSS](https://rachelandrew.co.uk/archives/2018/10/04/the-way-we-talk-about-css/)

# Solving the Problem

- quote: |
    We're designing _dynamic content_
    with _unknown collaborators_
    on an _infinite and unknowable canvas_,
    across _operating systems_, _interfaces_,
    _writing-modes_, & _languages_...
  cite: me

- pre: It's _difficult_
  title: But Also **Essential**

- quote: |
    HTML totally **eliminates any visual creativity**
    that a document’s designer might have.
  cite: Roy Smith, 1993

- img: no-harm/mosaic.jpg
  alt: Mosaic browser
  position: top
  caption: Mosaic, 1993

- quote: |
    The web would have become a **giant fax machine**
    where **pictures of text** would be passed along.
  cite: Håkon Lie

- pre: 1993-1994
  title: |
    [w3.org/Style/History/](https://w3.org/Style/History/)

- img: layers/cascade-proposal.jpg
  alt: |
    Cascading HTML style sheets -- a proposal,
    Håkon W Lie, 10 Oct 1994
  position: top
  fit: contain
  background: white
  <<: *proposal

- img: no-harm/netscape.jpg
  alt: Netscape Handbook online tutorial
  caption: Netscape Navigator, 1994
  fit: contain
- md: |
    ```html
    <CENTER>This text is centered</CENTER>

    <MULTICOL COLS="3" GUTTER="25">
      <P><FONT SIZE="4" COLOR="RED">…</FONT></P>
    </MULTICOL>
    ```

- md: |
    ```html
    <p><font color="red"> … </font><p>
    <p><font color="red"> … </font><p>
    <p><font color="red"> … </font><p>
    <p><font color="red"> … </font><p>
    <p><font color="red"> … </font><p>
    <p><font color="red"> … </font><p>
    ```

- quote: |
    A simple mapping
    **between HTML elements and presentation hints**.
  <<: *proposal

- title: CSS **Declarations**
  sub: provide the _presentation hints_

- title: |
    **`color`**`:` **`red`**`;`

- title: CSS **Selectors**
  sub: provide the _mapping_

- md: |
    ```css
    p { color: red; }
    ```
    ```html
    <p> … </p>
    <p> … </p>
    <p> … </p>
    ```

- title: Entire **Style Sheets**
  html: |
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

- pre: For Browsers...
  title: |
    Every *Property* \
    on Every *Element* \
    **Must Have** a *Single Value*

- title: |
    🤯⁉️
  css: |
    color: teal;
    color: violet;
    color: oklch(79.269% 0.171 70.67);
    color: not-real;

# The Cascade

- section: The **Cascade**

- pre: The 🌊 **Cascade**
  title: Resolves 💥 **Conflicts**

- pre: Rules for…
  title: |
    **Cascading** filters out \
    **Inheritance** fills in

- img: css-next/thunderdome-words.jpg
  alt: |
    Tina Turner as Aunty Entity
    in the Mad Max Thunderdome,
    with the law
    'Two styles enter, one style leaves'
    in bold text
  caption: |
    Algorithmic Thunderdome

- img: css-next/coins.jpg
  alt: |
    Mechanical coin sorter on a table,
    with a ramp at the top
    and a small-to-large series of slots
  fit: contain
- md: |
    1. Is it marked as `!important`?
    2. Who requested the style?
    3. Does it come from the shadow DOM?
    4. Is it an inline style?
    5. What cascade layer is it in? (new)
    6. What is the **selector specificity**?
    7. How close is the scope root? (proposed)
    8. Which comes last?

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

# origins and importance ----------------

- pre: Origins...
  title: |
    **Who Requested** The Style?

- img: layers/not-alone-et.jpg
  alt: |
    Same We're Not Alone,
    with browser logos,
    a guy in construction clothes
    carrying a laptop,
    and ET

- quote: |
    This proposal tries to
    **soften the tension**
    between the _author_ and the _reader_.
  <<: *proposal

- quote: |
    *The author* often wants to give the documents
    a **distinct look and feel**,
    the *user* will set *preferences* to make
    **all documents appear more similar**.
  <<: *proposal

- pre: Importance...
  title: |
    **How Much** Do They **Care**?

- quote: |
    The **user/browser** specifies _initial preferences_
    and **hands the remaining influence over** to the document.
  <<: *proposal

- title: |
    🖥 **Browser** Defaults

- pre: Officially…
  title: |
    🖥 **User Agent** Styles
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
  fit: contain
  background: white
  <<: *proposal

- img: layers/proposal-no-defaults.jpg
  fit: 100%
  alt: |
    One big block of text
    with no white-space
    or line breaks
  caption: |
    `* { all: initial; }`

- pre: >
    _Initial_ Values are…
  title: Defined by **Specification**
- pre: >
    _Initial_ Values are…
  title: Specific to **Each Property**
- pre: >
    _Initial_ Values are…
  title: The Same On **All Elements**

- title: >
    `margin:` **`0`**
  sub: (even on paragraphs)

- title: >
    `color:` **`canvasText`**
  sub: (even on links)

- title: >
    `display:` **`inline`**
  sub: (even on divs)

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
- img: layers/preferences-important.jpg
  fit: contain
  alt: |
    In the font preferences dialogue,
    a default-checked option:
    Allow pages to choose their own fonts,
    instead of your selections above
  caption: |
    Un-check for `!important` behavior
- title: 🎨 **Author** Styles

- title: Cascade 🗺 **Origins**
  md: |
    1. 🖥 **User Agent** (goes first)
    2. 👥 **User** (override browser)
    3. 🎨 **Author** (most powerful)

- img: layers/vader.jpg
  alt: |
    Darth Vader
    choking a rebel soldier
    as storm troopers watch

- quote: |
    If conflicts arise **the user should have the last word**…
  <<: *proposal

- pre: Why we have…
  title: ❗**importance**

- twoup:
    - src: css-next/good-spock.jpg
      alt: Spock
    - src: css-next/evil-spock.jpg
      alt: Spock with a goatee
  caption: |
    !important _mirror universe_

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

- img: layers/balance-force.jpg
  alt: |
    Kylo Ren and Rey
    standing in front of an entire star war
    with spaceships and lasers
    and AT-AT walkers

- pre: The _purpose_ of…
  title: ❗**importance**

- title: 👎🏼 Authors **Override** Styles
  sub: in a rage-fueled display of _brute force_

- title: 👍🏼 Users **Protect** Styles
  sub: because legibility is _important_

- demo: cascade-funnel
  caption: Same throughout the Cascade

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

# shadow context & element attached styles

- demo: cascade-funnel

- title: (Shadow) **Context**

- title: For **Custom Elements**
  sub: (we won't cover this in detail)

- title: Hidden **Element Structure**
- title: Including **Default Styles**

- pre: Like a custom
  title: >
    **User Agent** Extension

- pre: Shadow styles
  title: Default **Low Priority**

- pre: Again…
  title: Importance is **Defensive**

- md: |
    - For _normal_ styles,
      **light > shadow**
    - For _important_ styles,
      **shadow > light**

- pen: Important Shadow Context
  id: RwjRrEE

- pre: >
    Web 'Components'
  title: Are Not **Site Components**

- demo: cascade-funnel

- title: >
    **Element-Attached** Styles
  md: |
    ```html
    <!-- Element-attached/inline -->
    <button style='color: blue'>…</button>
    ```
    ```css
    /* Selectors */
    button { color: violet; }
    ```
  caption:
    Inline styles win (when importance is equal)

# specificity ----------------

- title: CSS **Selectors** & **Specificity**
  sub: (we'll come back to _layers_)

- title: |
    Dealing With **Selectors**
  css: |
    .this-is a.selector {
      /* declarations: here; */
    }

- css: |
    button          { background: gray; }
    .action         { background: darkblue; }
    [type=“submit”] { background: darkgreen; }
    #send           { background: maroon; }

- pre: Each *Selector* has a *Weight*
  title: Based on **How Specific** It Is

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
    [Heuristic](https://en.wikipedia.org/wiki/Heuristic)
  sub: |
    a practical assumption
    that approximates the goal

- title: |
    More **Specific** Styles \
    _Likely_ \
    More **Important**

- pre: |
    universal/type »
  title: Global **Defaults**

- pre: |
    attrs/classes »
  title: Common **Patterns**

- pre: |
    IDs »
  title: Singular **Overrides**

- title: Four **layers**
  md: |
    1. *Universal* `*` (go first)
    2. *Element* `type`s (`p`, `ul`, `body`, etc)
    3. *Reusable* `.class`es & `[attributes]`
    4. *Unique* `#ID`s (most power)

- pre: Like *Versioning*…
  title: |
    v3.**10**.1 **`>`** v3.**9**.12
- pre: Like *Versioning*…
  title: |
    (ID)`.`(Class/Attr)`.`(Element)
  caption: |
    semantic versions: (major)`.`(minor)`.`(patch)
- css: |
    #contact-form .actions button[type='submit']:active { }
- css: |
    /* Specificity 1.3.1 - 1 ID, 3 Attrs, 1 Element */
    #contact-form .actions button[type='submit']:active { }
- pre: Often written with _commas_…
  title: |
    Specificity of [**1,3,1**]

- pre: Compare _from the left_
  title: |
    **1**,0,2 `vs` **0**,3,2 `vs` **0**,2,3
- pre: Compare _from the left_
  title: |
    **1,0,2** ~~`vs` 0,3,2 `vs` 0,2,3~~
- pre: Move on _when tied_
  title: |
    **0**,3,2 `vs` **0**,2,3
- pre: Move on _when tied_
  title: |
    0,**3**,2 ~~`vs` 0,**2**,3~~

- from: itcss
  use: main
- from: itcss
  use: layers
- from: itcss
  use: graph

- title: Heuristics Are **Assumptions**
- title: Assumptions **Often Fail**
  sub: Especially "**At Scale**"

- css: |
    /* …default table styles… */
    table[rules=cols i] > tfoot > tr > td,
    table[rules=cols i] > tfoot > tr > th,
    table[rules=all i] > tfoot > tr > td,
    table[rules=all i] > tfoot > tr > th {
      border-color: black;
    }
  caption: |
    [html.spec.whatwg.org](https://html.spec.whatwg.org/multipage/rendering.html#tables-2)

- css: |
    [hidden] {
      display: none !important;
    }

- title: One **Flexible** Layer
  md: |
    1. ~~*Universal* `*`~~
    2. ~~*Element* `type`s~~
    3. ==*Reusable* `.class`es & `[attributes]`==
    4. ~~*Unique* `#ID`s~~

- css: |
    .block .element.modifier { /* 3 */ }
    .block__element--modifier { /* 1 */ }

- from: itcss
  use: graph

- title: ❗**important**

- css: |
    .🤬-bootstrap {
      font-weight: bold !important;
    }

- title: 😩🤬😩

# Layers ----------------

- title: |
    Cascade **Layers**
  caption: |
    [Working Draft](https://www.w3.org/TR/css-cascade-5/)

- caniuse: css-cascade-layers
  caption: |
    There's also
    [a polyfill](https://www.oddbird.net/2022/06/21/cascade-layers-polyfill/)

- demo: cascade-funnel

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

- title: |
    **Layers** of _Specificity_

- pre: |
    **`@layer`**` { … }`

- pre: |
    `@layer `**`<name>`**` { … }`

- css: |
    @layer reset {
      audio[controls] { display: block; }
      [hidden] { display: none !important; }
    }

- pre: |
    `@import url(…) `_`layer(<name>)`_`;`

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
    @layer reset { /* least powerful */ }
    @layer default { /* … */ }
    @layer theme { /* … */ }
    @layer components { /* more powerful */ }
    /* unlayered styles: most powerful */
  caption: |
    Stack in the order they're introduced

- title: |
    _Specificity_ is **Contained**

- css: |
    @layer framework {
      #menu .dropdown .menu-item {
        background: whitesmoke; /* ✅ specificity! */
      }

      .menu-item {
        background: lightcyan;
      }
    }

- css: |
    @layer framework {
      #menu .dropdown .menu-item {
        background: whitesmoke;
      }
    }
    @layer override {
      .menu-item {
        background: lightcyan; /* ✅ layer! */
      }
    }

- css: |
    @layer one { … }
    @layer two { … }
    @layer one { … }
    @layer three { … }
    @layer one { … }

- pre: Repeated _Layers_
  title: |
    Are **Grouped**
- pre: Groups
  title: |
    Stack **In Order**

- css: |
    @layer generic {
      audio[controls] { display: block; }
    }

    @layer theme { /* … */ }

    /* still a lower layer than "theme" styles */
    @layer generic {
      [hidden] { display: none !important; }
    }

- css: |
    @layer generic {
      audio[controls] { display: block; }
      [hidden] { display: none !important; }
    }

    @layer theme { /* … */ }

- title: |
    Explicit **Layer Order**
  sub: Define it once, at the start

- pre: |
    `@layer `**`<name>`**`, `**`<name>`**`, `**`<etc>`**`;`

- css: |
    /* establish layer order */
    @layer one, two, three;

    /* add code to layers as needed */
    @import url(two.css) layer(two);
    @layer three { … }
    @layer one { … }
    @layer two { … }

- demo: layer-sort

- title: |
    **Nesting** Layers

- css: |
    @layer components {
      @layer state { … }
    }

    /* access nested layers */
    @layer components.state { … }

- css: |
    /* system.css */
    @layer theme { … }
    @layer components { … }

- css: |
    @import url(system.css) layer(system);

    @layer system.theme { … }
    @layer system.components { … }

- css: |
    @import url(system.css) layer(system);

    @layer system.theme { … }
    @layer system.components { … }
    @layer system.custom { … }

- css: |
    @import url(bootstrap.css) layer(bootstrap.theirs);

    @layer bootstrap.ours {
      /* anything here will override bootstrap */
    }

- css: |
    @layer components {
      @layer defaults, themes, state;
    }

- title: Not **Escalating** ❗️importance
- title: |
    **Managing** Priorities

- pen: layers-btn

- title:  More **Cascade Control**
- title: Fewer **Specificity Hacks**
- title: Less **❗️importance**

- pre: Like _Origins_,
  title: |
    ❗️important Layers **Reverse**

- md: |
    1. Resets
    2. Themes
    3. Components

- title: |
    **`!important`**

- md: |
    1. Resets
    2. Themes
    3. Components
    4. ==**❗important** Components==
    5. ==**❗important** Themes==
    6. ==**❗important** Resets==

- img: layers/balance-force.jpg
  alt: |
    Kylo Ren and Rey
    standing in front of an entire star war
    with spaceships and lasers
    and AT-AT walkers

- title: |
    **Protect** Styles
  sub: From _future layers_

- css: |
    @layer reset {
      audio[controls] { display: block; }
      [hidden] { display: none !important; }
    }

- title: |
    _Prioritize_ `->` **Layers** \
    _Protect_ `->` **Importance**

- pre: Not Just…
  title: |
    'This is **!important**'
  sub: (layers _lower importance_ by default)

- pre: |
    X Overrides Y \
    **Because** \
    _'Components'_ Override _'Defaults'_

- pen: Cascade Work Template
  id: abPmNLB
---
