---
talk: Styling the **Intrinsic Web**
venue: SmashingConf SF 2022
date: 2022-06-21
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
slides:
- img: css-next/solitude.jpg
  alt: |
    Painting of a young white woman
    in a white gown and head scarf,
    sitting alone on tall a cloth-draped box,
    with her arms crossed
    and her head looking down,
    resting on one hand.
  fit: contain
  caption: |
    ~~Solitude~~ Miriam in COVID, by Frederic Leighton (circa 1890)
  background:
    linear-gradient(
      to bottom,
      powderblue 20%,
      pink 20% 40%,
      white 40% 60%,
      pink 60% 80%,
      powderblue 80%
    )
- from: intro
  use: logo
  logo: w3c

# Cascade Intro ---------
- pre: The _Future of CSS_
- pre: The _Present of CSS_
- pre: The _Past of CSS_

- pre: CSS exists
  title: For **Two Reasons**

# reusable
- pre: 1. _CSS_ describes
  title: Reusable **Objects**

- img: css-next/smashsf/sidesaddle-indd.jpg
  alt: |
    InDesign book-cover layout
    for Riding SideSaddle,
    my novel in a box
- img: css-next/smashsf/sidesaddle-box.jpg
  alt: |
    Final novel-in-a-box,
    Riding SideSaddle
  caption: |
    Living my childhood dream, RidingSidesaddle.com
- img: css-next/smashsf/sidesaddle-box-click.jpg
  alt: |
    Same photo,
    but with a badly overlaid cursor pointer
    and three big scribbled red question marks
- title: New **Content**!!!
  caption: don't think, only publish
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

- pre: We use
  title: |
    **Classes** & **Attributes**
  caption: |
    🤔 Lingo taken from Object Oriented Programming

- pre: Combine them
  title: To **Compose Objects**

- title: |
    Design **Systems** & \
    **Component** Libraries

- img: css-next/smashsf/brad.jpg
  alt: |
    Brad frost on stage
    talking bout design systems
    with a demo of
    'Brads discount NFT emporium'
    in comic sans

- face: nicolesullivan.jpg
  pre: |
    @stubbornella
  title: |
    **Nicole** Sullivan
  sub: |
    2009 [**Object Oriented CSS**](https://github.com/stubbornella/oocss)

- face: nataliedowne.jpg
  pre: |
    @natbat
  title: |
    **Natalie** Downe
  sub: |
    2008 [**CSS Systems**](http://www.slideshare.net/nataliedowne/css-systems-presentation)

- img: css-next/smashsf/shubhie.jpg
  alt: |
    Shubhie Panicker on stage
    with a slide about Systems Thinking
  caption: Shubhie Panicker

- title: Selectors Can **Conflict**

- css: |
    /* <a href="#" class="rad">…</a> */
    a      {  color: teal;    }
    .rad   {  color: violet;  }
    [href] {  color: orange;  }

- img: css-next/thunderdome-words.jpg
  alt: |
    Tina Turner as Aunty Entity
    in the Mad Max Thunderdome,
    with the law
    'Two styles enter, one style leaves'
    in bold text
- img: conventions/systems-cascade.jpg
  alt: |
    Product label for Cascade,
    with sheeting action for virtually spotless dishes -
    subtitled 'Use the Cascade'
  position: top
  caption: |
    From Natalie Downe's
    2008 [**CSS Systems**](http://www.slideshare.net/nataliedowne/css-systems-presentation)

# responsive
- pre: 2. _CSS_ describes
  title: |
    **Responsive** Styles

- pre: |
    `@media`
  title: |
    _`min-width`_

- pre: |
    `@media`
  title: |
    _`prefers-reduced-motion`_

- quote: |
    The real advance in accessibility,
    is _providing options_
    and _adapting to user preferences_.
  cite: Kate Kalcevich, this morning (paraphrase)

- pre: |
    `@media`
  title: |
    _`hover`_

- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top
  caption: |
    [WWW HyperMedia Browser](https://worldwideweb.cern.ch/browser/)
    & *Editor*

- face: mia-89.jpg
  alt: 7 year old Miriam with her hands on her knees
  pre: |
    1989
  title: The **Artist** (it me)
  md: |
    *Not paying attention*

- img: rad/mystery.jpg
  alt: |
    Hand-made choose-your-own-adventure book called
    The Mystery of the Missing Art Box

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
  cite: W3C [Mission Statement](w3.org/Consortium/mission.html#principles)

- img: no-harm/4k.jpg
  alt: Modern desktops
- img: unfriendly/braille.jpg
  alt: Braille interface and headphones
- img: dynamic-css/devices.jpg
  alt: A zillion different devices of all sizes (original)
- img: process/smartwatch.jpg
  alt: Lineup of smart watches
- img: css-next/spider-man-web.jpg
  alt: |
    Spider man crawling towards you
    with webs everywhere
- img: unfriendly/agnesscott/smart-home.png
  alt: Google Home, Amazon Echo, and Apple HomePod

- img: css-next/smashsf/kate.jpg
  alt: |
    Kate Kalcevich on stage,
    with a slide of many illustrated faces,
    that says Accessibility is a Team Sport -
    with red scribbles overtop saying
    The Entire Web
  fit: contain
  caption: |
    Kate Kalcevich
    (photo stolen & cropped from
    [Kevin Lozandier](https://twitter.com/KevinLozandier/status/1539325916748206081))

- title: Everyone has **Input**
  md: |
    - 🖥 **User Agent** (Browser)
    - 👥 **User** (Preferences)
    - 🎨 **Author** (Site)
- quote: |
    We're designing _unknown content_
    with _unknown collaborators_
    on an _infinite and unknowable canvas_,
    across _operating systems_, _interfaces_,
    _writing-modes_, & _languages_...
  cite: me

# not like print
- img: css-next/smashsf/sidesaddle-indd.jpg
  alt: |
    InDesign book-cover layout
    for Riding Sidesaddle,
    my novel in a box
- quote: |
    The fact we can **control** a paper page
    is really **a limitation of that medium**.
  cite: John Allsopp, 2000
  caption: |
    [A Dao of Web Design](http://alistapart.com/article/dao)

- img: css-next/paper.jpg
  alt: Stacks of paper
- img: css-next/paper-click.jpg
  alt: |
    Stacks of paper
    with a pointer cursor badly pasted on top,
    with red scribbles coming out of the finger tip,
    and a speech bubble that say CLICK
- img: css-next/paper.jpg
  alt: Stacks of paper

# The Cascade
- quote: |
    There are **too many variables to consider.**
  cite: Keith J Grant
  caption: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)
- quote: |
    The **point of CSS** is to make it so
    **you don’t have to worry** about them all.
  cite: Keith J Grant
  caption: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)

- demo: normal-flow

- quote: |
    **Define some constraints**.
    Let the language work out the details.
  cite: Keith J Grant
  caption: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)

- quote:
    Provide **hints** that the browser **may or may not use**.
  <<: *proposal
- img: css-next/moloch.webp
  alt: |
    footage from Metropolis
    with people climbing the stares
    into the mouth of Moloch
    a giant machine with glowing eyes
  position: top
  caption: Algorithms want to eat you
- img: css-next/mammon.jpg
  alt: |
    more footage from Metropolis
    with Mammon the robot
    in a chair
    with wires feeding into her head
  caption: The browser knows _way too much_
- img: conventions/systems-cascade.jpg
  alt: |
    Product label for Cascade,
    with sheeting action for virtually spotless dishes -
    subtitled Use the Cascade
  position: top
  caption: https://www.w3.org/TR/css-cascade-5/

- img: css-next/specifishity.jpg
  alt: |
    CSS SpeciFISHity,
    A table of different fish
    in different combinations,
    each one labeled as a type of selector,
    and their specificities calculated below.
  position: top
  caption: |
    SpeciFISHity by [Estelle Weyl](https://www.standardista.com/css3/css-specificity/)
- img: css-next/thunderdome-words.jpg
  alt: |
    Tina Turner as Aunty Entity
    in the Mad Max Thunderdome,
    with the law
    'Two styles enter, one style leaves'
    in bold text
  caption: https://www.w3.org/TR/css-cascade-5/
- title: |
    every _css property_ \
    on every _html element_ \
    must have **exactly one value**
- title: |
    **Cascade** _filters out_ \
    **Inheritance** _fills in_
- demo: cascade-funnel
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

# origins & importance
- quote: |
    **An ordered list (cascade) of style sheets** …
    can be referenced from the same document.
  <<: *proposal

- quote: |
    The **user/browser** specifies _initial preferences_
    and **hands the remaining influence over** to the document.
  <<: *proposal
- title: Cascade **Origins**
  md: |
    - 🖥 **User Agent** (Browser)
    - 👥 **User** (Preferences)
    - 🎨 **Author** (Site)
- css: |
    /* browser styles */
    body { margin: 8px; }

    /* every designer */
    body { margin: 0; }
  caption: |
    This default style likely
    [pre-dates CSS](https://web.archive.org/web/19980130185434/http://www.verso.com/agitprop/corestyle/base.html)

- md: |
    1. ==🎨 **Author** (Site)==
    2. 👥 **User** (Preferences)
    3. 🖥 **User Agent** (Browser)
    {reversed}

- quote: |
    If conflicts arise **the user should have the last word**,
    but one should also allow the author to attach style hints.
  <<: *proposal

- title: ❗**important**
  sub: A balance of power

- md: |
    1. ==❗🖥 User Agent **Important**==
    2. ==❗👥 User **Important**==
    3. ==❗🎨 Author **Important**==
    4. 🎨 Author Styles
    5. 👥 User Preferences
    6. 🖥 User Agent Defaults
    {reversed}

- twoup:
    - src: css-next/good-spock.jpg
      alt: Spock
    - src: css-next/evil-spock.jpg
      alt: Spock with a goatee

- demo: cascade-funnel

- title: 👎🏼 **Override** Styles
  sub: in the _current_ origin

- title: 👍🏼 **Protect** Styles
  sub: from _more powerful_ origins

- face: css-next/solitude.jpg
  alt: Solitude painting from earlier
  md: |
    1. ❗…
    2. ❗…
    3. ==❗🎨 Author **Important**==
    4. ==🎨 Author Styles==
    5. …
    6. …
    {reversed}

# specificity
- title: CSS **Selectors** & **Specificity**

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


- title: Assumptions **Fail**
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
  cation: |
    Firefox user-agent styles (`resource://gre-resources/html.css`)

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
    1. Overrides
    2. Components
    3. Objects
    4. Elements
    5. Generic
    6. Tools
    7. Settings
    {reversed}
  caption: |
    Any layers we want!

- md: |
    1. Utilities
    2. Components
    3. Themes
    4. Frameworks
    5. Resets
    {reversed}
  caption: |
    Any layers we want!

- css: |
    @layer settings { … }
    @layer tools { … }
    @layer generic { … }
    @layer elements { … }
    @layer objects { … }
    @layer components { … }
    @layer overrides { … }
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

- title: |
    ❗️Important Layers **Reverse**
  sub: (exactly like origins)

- md: |
    1. ❗**Important** Resets
    2. ❗**Important** Themes
    3. ❗**Important** Components
    4. Components
    5. Themes
    6. Resets

- pre: if we need to…
  title: |
    _Layers_ -> **Override** \
    _Importance_ -> **Protect**

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

# Scope ----------------
- section: |
    **Scoped** Styles

- css: |
    .block .element.modifier { /* 3 */ }
    .block__element--modifier { /* 1 */ }

- pre: 1. Avoid
  title: |
    **Naming** Conflicts
  sub: (across _large teams_ & _projects_)

- pre: 2. By
  title: Expressing **Membership**
  sub: (through _lower boundaries_ & _proximity_)

- css: |
    .title { /* global */ }
    .post .title { /* nested */ }

    .post__title { /* BEM */ }
  caption: |
    _Membership_ is distinct from _ancestry_

- css: |
    .post__title { /* BEM */ }
    .title[data-JKGHJ] { /* Vue */ }
  caption: |
    Maintain uniqueness

- img: csswg/components.jpg
  alt: wireframe of a site, with multiple nested components
  fit: contain
  background: '#e5e5e5'
  caption: |
    A "donut scope" with
    _lower boundaries_
    similar to shadow-DOM `slots`

- pre: Different from
  title: Shadow-DOM **Encapsulation**

- img: csswg/widget.jpg
  fit: contain
  alt: |
    Diagram shows a widget with solid boundaries,
    which cannot be penetrated
    in either direction
    (global styles can't get in, widget styles can't get out)
  background: white
  caption: |
    **Encapsulation**
    is designed for _isolated DOM widgets_

- pre: Build-tools
  title: Provide **Scoped Styles**
  sub: BEM, CSS Modules, Vue, JSX, Stylable, etc

- img: csswg/scoped.jpg
  alt: |
    Diagram shows a component with porous boundaries,
    all styles can penetrate, or establish their own lower boundaries
  fit: contain
  background: white
  caption: |
    **Scope**
    is designed for _a unified system_

- css: |
    @scope (.media) to (.content) {
      img { /* only images that are "in scope" */ }
    }
  caption: |
    [CSSWG Scope Issue](https://github.com/w3c/csswg-drafts/issues/5809)

- css: |
    .light-theme a { color: purple; }
    .dark-theme a { color: plum; }
  caption: |
    _DOM Proximity_
    is similar to _inheritance_

- demo: scope-proximity-issue

- pen: Scope boundary demo
  id: ZErXZVY

- pen: Scope proximity demo
  id: wvyBNXP

- pen: Visualizing scope
  id: XWZwvWj

- pre: prototype…
  title: Now in **Chrome Canary**

- title: Proximity `>>` **Combinator**??
  css: |
    .light-theme >> a { color: purple; }
    .dark-theme >> a { color: plum; }

- title: Scoped **Selector Syntax**??
  css: |
    @scope (.media) to (.content) {
      img { … }
    }

    (.media / .content) img { … }

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

# Container Queries ----------------
- section: |
    **Container** Queries

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

- title: ⚠️ Layout **Loops**?
  sub: CSS _Context_ vs _Content_

- demo: normal-flow

- pre: 2010-2020
  title: 🚧 Laying **Foundations** 🚧

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

- title: Defining **Containers**

- img: csswg/cq-nested-containers.jpg
  alt: |
    We need to define the containers
    for our cards to query
  fit: contain
  background: white

- title: No **Content Sizing**

- css: |
    .container {
      contain: size layout style;
    }
  caption: |
    This containment will be automated

- pre: 2D size containment
  title: Is **Too Restrictive**
  caption: |
    Need a flexible dimension ("Be afraid of heights")

- pen: css-rad

- pre: We need
  title: |
    **Inline Size** Containment
  caption: |
    See the
    [Issues with Single-Axis Containment](https://github.com/w3c/csswg-drafts/issues/6426)

- img: css-next/smashsf/robin.jpg
  alt: |
    Robin Marx on stage,
    with a slide that says
    Here Be Dragons
    about http3,
    but scribbled text makes it about
    Single-axis containment
  fit: contain
  caption: |
    See the
    [Issues with Single-Axis Containment](https://github.com/w3c/csswg-drafts/issues/6426)

- pen: |
    💥 Inline Containment Error - Auto-sized BFCs effected by floats
  id: mdmJRxW
- pen: |
    💥 Inline Containment Error: %-Padding in Orthogonal Writing Modes
  id: PomqWVE

- img: css-next/zeno.jpg
  alt: |
    Zeno half way between a Greek temple and a tree,
    the remainder of his path is marked with
    increasingly small half-way measures,
    each with a sundial below it.

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

- html: |
    <div class="container">
      <div class="container">
        <div class="container">
          We can nest containers!
        </div>
      </div>
    </div>

- pen: Enter the 36 Chambers
  id: poamBMw

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

- title: |
    **Naming** Containers

- css: |
    .sidebar {
      container-type: inline-size;
      container-name: sidebar;
    }

    @container sidebar (width > 30em) {
      .container { padding: 2em; }
    }
  caption: |
    [CSSWG issue for named containers](https://github.com/w3c/csswg-drafts/issues/6176)

- title: Finding **Containers**
  md: |
    1. For _each matched element_…
    2. Find the _nearest ancestor_ that has…
       - Any required _container types_
       - Any required _container name_

- pen: media-v-container
- pen: cq-quotes
- pen: cq-flex
- pen: cq-books
- pen: cq-icons
- pen: cq-blinds
- pen: cq-water

- pre: prototype…
  title: In **Chrome Canary** & **Safari TP**
  caption: |
    [Codepen Demos](https://codepen.io/collection/XQrgJo)

- caniuse: css-container-queries

- css: |
    @container (width > 30em) { /* CQ support */ }

    @supports not (container-type: inline-size) {
      @media (width > 40em) { /* no CQ support */ }
    }

- title: Container Query **Polyfill**
  sub: https://github.com/GoogleChromeLabs/container-query-polyfill

- pre: But wait,
  title: There's **More**

- title: Container Query **Units**
  sub: |
    `cqw` | `cqh` | `cqi` | `cqb` | `cqmin` | `cqmax`

- pre: Why `cq*`?
  title: Because _`ch`_ **Already Exists**

- pen: cq-units-basic
- pen: cq-units-nike

- caniuse: css-container-query-units

- title: Non-size **Queries**
  caption: |
    [CSSWG issue for other query ideas](https://github.com/w3c/csswg-drafts/issues/5989)

- css: |
    @container style(--colors: invert) { … }
  caption: |
    In the spec, but not implemented yet

- css: |
    @container state(is-stuck) { … }
  caption: |
    [CSSWG issue for state queries](https://github.com/w3c/csswg-drafts/issues/6402)

# outro

- toc: true

- pre: Building on
  title: Existing **CSS**

- pre: Building on
  title: The **Cascade**

- pre: Already make...
  title: Styles **Reusable**

- pre: Already make...
  title: Styles **Responsive**

- img: css-next/rwd.jpg
  alt: |
    A List Apart:
    Responsive Web Design
    by Ethan Marcotte (May 25, 2010)
  caption: |
    [Responsive Web Design](https://alistapart.com/article/responsive-web-design/)
    by **Ethan Marcotte**, 2010

- title: Technical Ingredients…
  md: |
    - Fluid grids (%)
    - Flexible images (%)
    - Media queries

- title: |
    **Flexbox** & (**Sub**)**Grids** & …
  sub: |
    `min-`/`max-content`, `fit-content`, `minmax()`, `clamp()`, etc…

- face: jensimmons.jpg
  pre: |
    @jensimmons
  title: |
    **Jen** Simmons
  md: |
    [Everything You Know About Web Design Just Changed](https://youtu.be/jBwBACbRuGY)

- title: |
    **Intrinsic** Web Design

- caption: |
    **Intrinsic Web Design** by
    [Jen Simmons](https://twitter.com/jensimmons/status/980980521848127488)
  md: |
    1. **Fluid** & **Fixed**
    2. Stages of **Squishiness**
    3. Truly **Two-Dimensional** Layouts
    4. **Nested** Contexts
    5. **Expand** & **Contract** Content
    6. Media Queries, **As Needed**

- pre: Responsive & Reusable
  title: |
    **Components**

- quote: |
    Our medium is not done.
    Our medium is still
    **going through radical changes**.
  cite: Jen Simmons, *Designing with Grid*
