---
draft: true
venue: An Event Apart, Denver
date: 2022-10-11
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
slides:

# cascade history ----------------

- todo: Cascade History

- img: conventions/systems-cascade.jpg
  alt: |
    Product label for Cascade,
    with sheeting action for virtually spotless dishes -
    subtitled 'Use the Cascade'
  position: top
  caption: |
    Slide from Natalie Downe's 2008
    [**CSS Systems**](http://www.slideshare.net/nataliedowne/css-systems-presentation)
    talk

- title: The '**C**' in...
- title: |
    **`CHSS`**
  caption: https://w3.org/People/howcome/p/cascade.html

- demo: https://w3.org/People/howcome/p/cascade.html
  zoom: 2
  caption: |
    *Håkon Lie*, October 1994 🥳 **28 years**

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
  cite: |
    W3C Mission, [Design Principles](https://w3.org/Consortium/mission.html#principles)

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
- img: layers/ford-cobweb.jpg
  alt: |
    Indiana Jones
    covered in cobwebs,
    looking frustrated.

- demo: https://web.archive.org/web/2022/http://info.cern.ch/hypertext/WWW/MarkUp/HTMLConstraints.html
  zoom: 2
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

- pre: Not a
  title: Lack of **Styles**

- img: no-harm/line-mode.jpg
  alt: The second browser, a text-only terminal
  position: top
  caption: |
    [Line Mode Browser](http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html)

- pre: A lack of
  title: |
    Style **Control**

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

- pre: Don't
  title: Reinvent **PDF**'s

- quote: |
    The web would have become a **giant fax machine**
    where **pictures of text** would be passed along.
  cite: Håkon Lie

- pre: Content
  title: Often **Changes**

- quote: |
    Web **for all**. Web **on everything**.
  cite: |
    W3C Mission, [Design Principles](https://w3.org/Consortium/mission.html#principles)

- pre: Styles
  title: Must be **Responsive**

- pre: |
    `@media`
  title: |
    _`min-width`_

- pre: |
    `@media`
  title: |
    _`prefers-reduced-motion`_

- pre: |
    `@media`
  title: |
    _`hover`_

- pre: |
    `@supports`
  title: |
    _`container-type: inline-size`_

- pre: Styles
  title: Must be **Collaborative**

- pre: Browsers
  title: Provide **Defaults**

- quote: |
    The **author** (or publisher)
    often wants to give the documents a
    _distinct look and feel_...
  <<: *proposal
  caption: branding, etc
- quote: |
    ...the **user**
    will _set preferences_
    to make all documents appear more similar.
  <<: *proposal
  caption: light/dark/contrast modes, font-sizes, etc

- quote: |
    We're designing _unknown content_
    with _unknown collaborators_
    on an _infinite and unknowable canvas_,
    across _operating systems_, _interfaces_,
    _writing-modes_, & _languages_...
  cite: me

- quote: |
    There are **too many variables to consider.**
  cite: Keith J Grant
  caption: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)

- quote: |
    **Define some constraints**.
    Let the language work out the details.
  cite: Keith J Grant
  caption: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)

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
    ```
    ```css
    button { color: violet; }
    ```

- html: |
    <link rel="stylesheet" href="so-many-hints.css">
    <style>...</style>

- quote: |
    An ordered list (**cascade**) of _style sheets_.
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
    On every _html element_, \
    For every _css property_ \
    We need **exactly one value**

- title: |
    **Cascade** _filters out_ \
    **Inheritance** _fills in_

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
- img: css-next/coins-exclusive.jpg
  alt: |
    Same coin sorter,
    with all slots crossed off
    except for the largest one with coins in it,
    and an arrow pointing at those coins
    that says 'move on'
  fit: contain

- pre: |
    _Cascade_ defines
  title: |
    **Layers** of (style) **!mportance**

- demo: cascade-funnel

# origins and importance ----------------

- title: |
    **Origins** & **Importance**

- pre: Origins...
  title: |
    **Who Requested** The Style?

- pre: Importance...
  title: |
    How Much **Do They Care**?

- quote: |
    ...tries to
    **soften the tension**
    between the *author* and the *reader*.
  <<: *proposal

- quote: |
    The **user/browser** specifies _initial preferences_
    and **hands the remaining influence over** to the document.
  <<: *proposal

- title: |
    🖥 **User Agent** Defaults
  sub: |
    _Browser_ styles for a readable default

- title: |
    👥 **User** Styles
  sub: Desired *preferences*
  caption: These days rarely CSS, but *treated the same*

- title: 🎨 **Author** Styles
  sub: That's us…

- title: Cascade 🗺 **Origins**
  md: |
    1. 🖥 **User Agent** (goes first)
    2. 👥 **User**
    3. 🎨 **Author** (most power)

- quote: |
    If conflicts arise **the user should have the last word**,
    but one should also allow the author to attach **style hints**.
  cite: Håkon Lie
  <<: *proposal

- pre: The *Real Reason* For
  title: ❗**importance**

- twoup:
    - src: css-next/good-spock.jpg
      alt: Spock
    - src: css-next/evil-spock.jpg
      alt: Spock with a goatee
  caption: |
    !mportant _mirror universe_

- md: |
    1. ❗🎨 Author **Important** (goes first)
    2. ❗👥 User **Important**
    3. ❗🖥 User Agent **Important** (most power)

- md: |
    1. 🖥 User Agent Defaults
    2. 👥 User Preferences
    3. 🎨 Author Styles
    4. ==❗🎨 Author **Important**==
    5. ==❗👥 User **Important**==
    6. ==❗🖥 User Agent **Important**==

- demo: cascade-funnel
  caption: Same with **Shadow Contexts**

- title: 👎🏼 **Override** Styles
  sub: in the _current_ layer

- title: 👍🏼 **Protect** Styles
  sub: from _more powerful_ layers

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

# specificity ----------------

- pre: (out of order...)
  title: CSS **Selectors** & **Specificity**

- md: |
    - `*` **(universal)**
    - `type`
    - `.class` & `[attr]`
    - `#ID`s **(single-use)**
  caption: |
    [heuristic](https://en.wikipedia.org/wiki/Heuristic):
    a practical assumption
    that approximates the goal

- pre: |
    universal/type »
  title: Global **Defaults**

- pre: |
    attrs/classes »
  title: Common **Patterns**

- pre: |
    ID/style »
  title: Singular **Overrides**

- md: |
    1. *Unique* `#ID`s
    2. *Reusable* `.class`es & `[attributes]`
    3. *Element* `type`s
    4. *Universal* `*`
    {reversed}

- img: patterns/itcss-layers.png
  alt: |
    A triangle pointing down,
    with labeled layers from top —
    settings, tools, generic,
    elements, objects, components,
    overrides
  fit: contain
  background: white
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    CSS (ITCSS), by Harry Roberts

- img: css-next/un-itcss-layers.png
  alt: |
    Same triangle flipped vertically,
    with all the labels rotated
    and numbered 1-7 from bottom to top
  fit: contain
  background: white
  caption: |
    **Un-Inverted Triangle** CSS,
    by Miriam _(totally original!)_

- face: harryroberts.jpg
  title: |
    **Harry** Roberts
  sub: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    CSS (ITCSS)

- title: Heuristics Can **Fail**
- title: Especially "**At Scale**"

- css: |
    table[rules]:not([rules=""])> tr > td,
    table[rules]:not([rules=""])> * > tr > td,
    table[rules]:not([rules=""])> tr > th,
    table[rules]:not([rules=""])> * > tr > th,
    table[rules]:not([rules=""])> td,
    table[rules]:not([rules=""])> th
    {
      border-width: thin;
      border-style: none;
    }
  caption: |
    Default user-agent styles (Firefox -> `resource://gre-resources/html.css`)

- css: |
    [hidden] {
      display: none !important;
    }

- md: |
    1. ~~*Unique* `#ID`s~~
    2. ==*Reusable* `.class`es & `[attributes]`==
    3. ~~*Element* `type`s~~
    4. ~~*Universal* `*`~~

- css: |
    .block .element.modifier { /* 3 */ }
    .block__element--modifier { /* 1 */ }

- img: patterns/un-itcss-metrics.png
  alt: |
    Triangle with
    the horizontal edge labeled 'reach',
    and the vertical edges
    labeled 'specificity' and 'explicitness'
  fit: contain
  background: white
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    CSS (ITCSS), by Harry Roberts

- img: css-next/un-itcss-layers.png
  alt: |
    triangle
    with labeled layers from
    wide base to narrow point —
    settings, tools, generic,
    elements, objects, components,
    overrides
  fit: contain
  background: white
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    CSS (ITCSS), by Harry Roberts

- title: ❗**important**

- css: |
    .🤬-bootstrap {
      font-weight: bold !important;
    }

- title: 😩🤬😩

# Layers ----------------

- section: |
    Cascade **Layers**
  caption: |
    [Working Draft](https://www.w3.org/TR/css-cascade-5/)

- img: css-next/un-itcss-layers.png
  alt: |
    triangle
    with labeled layers from
    wide base to narrow point —
    settings, tools, generic,
    elements, objects, components,
    overrides
  fit: contain
  background: white
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    CSS (ITCSS), by Harry Roberts

- title: |
    **Layers** of _Specificity_

- pre: |
    **`@layer`**` { … }`

- pre: |
    `@layer `_`<layer-name>`_` { … }`

- css: |
    @layer generic {
      audio[controls] { display: block; }
      [hidden] { display: none !important; }
    }

- pre: |
    `@input url(…) `_`layer(<name>)`_`;`

- css: |
    @import url(reset.css) layer(reset);

- css: |
    @import url(reset.css) layer(reset);

    @layer generic {
      audio[controls] { display: block; }
      [hidden] { display: none !important; }
    }

- md: |
    1. Utilities
    2. Components
    3. Themes
    4. Frameworks
    5. Resets
    {reversed}
  caption: |
    Any layers we want!

- md: |
    1. Overrides
    2. Components
    3. Objects
    4. Elements
    5. Generic
    6. Tools
    7. Settings
    {reversed}
  caption: |
    As many layers as we want!

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
    {reversed}
  caption: |
    Layers stack as they are introduced

- img: patterns/itcss-layers.png
  alt: |
    inverted triangle
    with labeled layers from
    wide top to narrow downward point —
    settings, tools, generic,
    elements, objects, components,
    overrides
  fit: contain
  background: white
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    CSS (ITCSS), by Harry Roberts

- img: css-next/un-itcss-layers.png
  alt: |
    triangle
    with labeled layers from
    wide base to narrow point —
    settings, tools, generic,
    elements, objects, components,
    overrides
  fit: contain
  background: white
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    CSS (ITCSS), by Harry Roberts

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

- title: |
    Add to **Existing Layers**

- css: |
    @layer generic {
      audio[controls] { display: block; }
    }

    @layer generic {
      [hidden] { display: none !important; }
    }

- css: |
    @layer generic {
      audio[controls] { display: block; }
      [hidden] { display: none !important; }
    }

- css: |
    @layer default { … }
    @layer theme { … }

    /* still a lower layer than "theme" styles */
    @layer default { … }

- title: |
    Establish **layer Order**

- css: |
    @layer generic, elements, objects, components, overrides;

- css: |
    /* establish layer order */
    @layer one, two, three;

    /* add code to layers as needed */
    @import url(two.css) layer(two);
    @layer three { … }
    @layer one { … }
    @layer two { … }

- pre: |
    _Unlayered_ styles
  title: |
    Default **Highest Priority**

- demo: layer-sort

- title: |
    **Nesting** Layers

- css: |
    @layer tools {
      @layer custom { … }
    }

    /* access nested layers */
    @layer tools.custom { … }

- css: |
    @layer components {
      @layer defaults, structures, themes, utilities;
    }

- css: |
    /* tools.css */
    @layer theme { … }
    @layer components { … }

- css: |
    @import url(tools.css) layer(tools);

    @layer tools.theme { … }
    @layer tools.custom { … }

- pre: Never again…
  title: Struggle with **Frameworks**

- css: |
    @import url(bootstrap.css) layer(bootstrap);

    @layer bootstrap.my-overrides {
      /* anything here will override bootstrap */
    }

- title: Use **Inside Components**

- pen: layers-btn
- caniuse: css-cascade-layers

- title:  More Cascade **Control**
- title: Fewer **Hacks**

- pre: Don't let _heuristics_
  title: Boss You Around

- title: |
    ❗️Important Layers **Reverse**
  sub: (exactly like origins)

- md: |
    1. Resets
    2. Themes
    3. Components

- md: |
    1. Resets
    2. Themes
    3. Components
    4. ==❗**Important** Components==
    5. ==❗**Important** Themes==
    6. ==❗**Important** Resets==

- pre: if we need to…
  title: |
    _Override_ `->` **Layers** \
    _Protect_ `->` **Importance**

- title: |
    _Complete Guide_ to CSS Cascade Layers
  sub: https://css-tricks.com/css-cascade-layers/

- img: css-next/layers-polyfill.jpg
  alt:
    OddBird article,
    Cascade Layers – There’s a Polyfill for That!
    by Sana Javed on June 21, 2022
  position: top
  caption: |
    https://www.oddbird.net/2022/06/21/cascade-layers-polyfill/




- todo: closer

- quote: |
    It _works_ and it _doesn't work_ **at the same time**.
    It's **Quantum CSS**!
  cite: |
    Jen Simmons,
    [Intro to Resilient CSS](https://www.youtube.com/watch?v=u00FY9vADfQ)
---
