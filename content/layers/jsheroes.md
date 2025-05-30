---
venue: JSHeroes, Romania
date: 2025-05-30
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
  qr: https://www.w3.org/People/howcome/p/cascade.html

quote:
  text: >
    You can’t make a web that’s **world-wide**
    by saying _it works on my machine_.

slides:

- img: conventions/systems-cascade.jpg
  alt: >
    Product label for Cascade,
    with sheeting action for virtually spotless dishes -
    subtitled 'Use the Cascade'
  position: top
  caption: |
    Original slide from Natalie Downe's 2008
    [**CSS Systems**](http://www.slideshare.net/nataliedowne/css-systems-presentation)
    talk

- title: The '**C**' in...
- known: url-history-chss
- known: img-history-www

- img: process/ibm-pc.jpg
  alt: Old IBM desktop
  position: top

- known: img-history-line-mode

- known: quote-w3c-mission

- img: dynamic-css/devices.jpg
  alt: A zillion different devices of all sizes (original)
- img: unfriendly/braille.jpg
  alt: Braille interface and headphones
- img: unfriendly/agnesscott/smart-home.png
  alt: Google Home, Amazon Echo, and Apple HomePod

- known: quote-html-all-platforms

- img: cascade/jsheroes/platforms.jpg
  alt: >
    Sketch notes for
    Sandrina's talk
    Full Stack Forms -
    most of the image is faded out,
    with a scribbled circle around
    different platforms,
    different UI challenges
  fit: contain
  caption: >
    Sketch Notes by **Oana Zaulet**
    for **Sandrina Pereira's** talk

- known: quote-html-no-control

- img: no-harm/tim-quote.jpg
  alt: >
    Sir Tim at a computer
    showing a badly photoshopped image
    of the previous slide

- pre: Web _Design_
  title: Will **Never Happen**

- title: Technology Is **Political**
  mode: light
  background: >
    linear-gradient(
      to bottom right,
      powderblue 0 20%,
      pink 20% 40%,
      white 40% 60%,
      pink 60% 80%,
      powderblue 80% 100%
    );

- pre: The problem is
  title: |
    Authors Having **Control**

- img: layers/not-alone.jpg
  alt: >
    We're Not Alone
    (in big block letters, in space)

# <!--
# .########..########...#######..##......##..######..########.########.
# .##.....##.##.....##.##.....##.##..##..##.##....##.##.......##.....##
# .##.....##.##.....##.##.....##.##..##..##.##.......##.......##.....##
# .########..########..##.....##.##..##..##..######..######...########.
# .##.....##.##...##...##.....##.##..##..##.......##.##.......##...##..
# .##.....##.##....##..##.....##.##..##..##.##....##.##.......##....##.
# .########..##.....##..#######...###..###...######..########.##.....##
# -->

- img: layers/not-alone-browsers.jpg
  alt: >
    Same We're Not Alone,
    with browser logos on top

- css: |
    h1, h2, h3, h4 /* etc */ {
      font-weight: bold;
      font-size: something big I dunno; }
    p { margin-block: 1em; }
    a:link {
      color: blue;
      text-decoration: underline; }

- known: img-history-line-mode

# <!--
# .##.....##..######..########.########.
# .##.....##.##....##.##.......##.....##
# .##.....##.##.......##.......##.....##
# .##.....##..######..######...########.
# .##.....##.......##.##.......##...##..
# .##.....##.##....##.##.......##....##.
# ..#######...######..########.##.....##
# -->

- img: layers/not-alone-users.jpg
  alt: >
    Same We're Not Alone,
    with browser logos
    and a guy in construction clothes
    carrying a laptop

- img: layers/not-alone-et.jpg
  alt: >
    Same We're Not Alone,
    with browser logos,
    a guy in construction clothes
    carrying a laptop,
    and ET
  caption: Web For **All**

- img: layers/user-preferences.jpg
  fit: contain
  alt: >
    Language and appearance preferences in Firefox
    include light/dark mode,
    colors, fonts, and zoom level
  caption: >
    The agent of the user!

- pre: Early web…
  title: All Styles are **Universal**
  sub: The same on every website

- pre: Controlled by…
  title: |
    **User** Preferences \
    & Browser **Choice**

- pre: We are _all_
  title: Web **Users** First

- pre: To understand CSS…
  title: Set **Your Preferences**

# <!--
# .####.##.....##..######..
# ..##..###...###.##....##.
# ..##..####.####.##.......
# ..##..##.###.##.##...####
# ..##..##.....##.##....##.
# ..##..##.....##.##....##.
# .####.##.....##..######..
# -->

- img: no-harm/mosaic.jpg
  alt: Mosaic browser
  caption: Mosaic, 1993

- known: img-history-line-mode
  caption: >
    No longer "_on everything_"

- quote: >
    The web would have become a **giant fax machine**
    where **pictures of text** would be passed along.
  cite: >
    Håkon Lie,
    [2014 interview](https://web.archive.org/web/20240105013339/https://dev.opera.com/articles/css-twenty-years-hakon/)

- known: url-history-styles

- quote: |
    … provide publishers with **stylistic influence**…
  <<: *proposal

- quote: |
    … **user** should have _the last word_…
  <<: *proposal

# <!--
# ..######.....###.....######...######.....###....########..########
# .##....##...##.##...##....##.##....##...##.##...##.....##.##......
# .##........##...##..##.......##........##...##..##.....##.##......
# .##.......##.....##..######..##.......##.....##.##.....##.######..
# .##.......#########.......##.##.......#########.##.....##.##......
# .##....##.##.....##.##....##.##....##.##.....##.##.....##.##......
# ..######..##.....##..######...######..##.....##.########..########
# -->

- quote: >
    … provides _author and reader_
    with **the same notation** for specifying style …
  <<: *proposal

- img: no-harm/safari-user-styles.jpg
  alt: >
    Safari settings panel,
    advanced tab,
    with a red scribble highlighting
    a style sheet option,
    with none selected by default.
  caption: >
    Safari: settings / advanced / style sheet…

- img: layers/user-preferences.jpg
  fit: contain
  alt: >
    Language and appearance preferences in Firefox
    include light/dark mode,
    colors, fonts, and zoom level
  caption: DreamWeaver for user styles

- title: CSS **Declarations**
  css: |
    /* property: value; */
    color: blue;

- title: CSS **Selectors**
  css: |
    p {
      background: white;
      color: mediumVioletRed;
    }

- html: |
    <link rel="stylesheet" href="styles.css">

- quote: |
    An ordered list (**cascade**) of _style sheets_.
  <<: *proposal

- title: |
    💥🙈⁉️💥
  md: |
    ```html
    <button style="color: teal" type="submit">…</button>
    ```
    ```css
    button { color: violet; }
    [type=submit] { color: vibrant; }
    ```

- title: |
    On every _html element_ \
    For every _css property_ \
    We need **exactly one value**

- img: conventions/systems-cascade.jpg
  alt: >
    Product label for Cascade,
    with sheeting action for virtually spotless dishes -
    subtitled 'Use the Cascade'
  position: top
  caption: |
    Original slide from Natalie Downe's 2008
    [**CSS Systems**](http://www.slideshare.net/nataliedowne/css-systems-presentation)
    talk

- img: css-next/thunderdome-words.jpg
  alt: >
    Tina Turner as Aunty Entity
    in the Mad Max Thunderdome,
    with the law
    'Two styles enter, one style leaves'
    in bold text
  caption: |
    Algorithmic Thunderdome

# <!--
# ..#######..########..####..######...####.##....##..######.
# .##.....##.##.....##..##..##....##...##..###...##.##....##
# .##.....##.##.....##..##..##.........##..####..##.##......
# .##.....##.########...##..##...####..##..##.##.##..######.
# .##.....##.##...##....##..##....##...##..##..####.......##
# .##.....##.##....##...##..##....##...##..##...###.##....##
# ..#######..##.....##.####..######...####.##....##..######.
# -->

- demo: cascade-funnel
  caption: >
    **Specificity** is one of the _final_ considerations

- title: Cascade 🗺 **Origins**
  md: |
    1. 🖥 **User Agent** (Browser) Defaults
    2. 👥 **User** Preferences
  caption: >
    _Preferences_ override _defaults_

- title: Cascade 🗺 **Origins**
  md: |
    1. 🖥 **User Agent** Defaults
    2. 👥 **User** Preferences
    3. ==🎨 **Author** Styles==

- img: layers/vader.jpg
  alt: >
    Darth Vader
    choking a rebel soldier
    as storm troopers watch

# <!--
# .####.##.....##.########...#######..########..########
# ..##..###...###.##.....##.##.....##.##.....##....##...
# ..##..####.####.##.....##.##.....##.##.....##....##...
# ..##..##.###.##.########..##.....##.########.....##...
# ..##..##.....##.##........##.....##.##...##......##...
# ..##..##.....##.##........##.....##.##....##.....##...
# .####.##.....##.##.........#######..##.....##....##...
# -->

- quote: |
    If conflicts arise **the user should have the last word**…
  <<: *proposal

- img: layers/balance-force.jpg
  alt: >
    Kylo Ren and Rey
    standing in front of an entire star war
    with spaceships and lasers
    and AT-AT walkers

- pre: Why we have…
  title: ❗**importance**

- md: |
    1. 🖥 User Agent Defaults
    2. 👥 User Preferences
    3. 🎨 Author Styles
    4. ==❗🎨 Author **Important**==
    5. ==❗👥 User **Important**==
    6. ==❗🖥 User Agent **Important**==

- twoup:
    - src: css-next/good-spock.jpg
      alt: Spock
    - src: css-next/evil-spock.jpg
      alt: Spock with a goatee
  caption: |
    !important _mirror universe_

- img: no-harm/ua-important.jpg
  alt: >
    Searching firefox user agent styles
    for important with 26 results,
    three visible setting area display none
    and fullscreen iframes
    border none, parring unset

- img: layers/preferences-important.jpg
  fit: contain
  alt: >
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
  alt: >
    Mechanical astrolabe
    with Earth at the center,
    and concentric rings
    for other planets/stars
- img: layers/orrery.jpg
  alt: >
    Clockwork orrery,
    with planets circling the sun,
    and the earth off to one side
  position: top
- img: layers/orrery-specificity.jpg
  alt: >
    Clockwork orrery,
    with a scribbled arrow
    pointing to the earth tilt gears
    labeled 'specificity'
  position: top

# <!--
# ..######..########..########..######..####.########.####..######.
# .##....##.##.....##.##.......##....##..##..##........##..##....##
# .##.......##.....##.##.......##........##..##........##..##......
# ..######..########..######...##........##..######....##..##......
# .......##.##........##.......##........##..##........##..##......
# .##....##.##........##.......##....##..##..##........##..##....##
# ..######..##........########..######..####.##.......####..######.
# -->

- pre: Selectors exist to…
  title: >
    **Select Elements** for Styling

- title: Layers of **Abstraction**
  css: |
    #banner { /* single element */ }
    .warning { /* class of elements */ }
    p, li { /* type of element */ }
    * { /* all of the elements */ }

- pre: Selectors make styling…
  title: More **Efficient** & **Expressive**
  css: |
    form:has(:invalid) [type="submit"] { … }

- pre: In the Cascade
  title: >
    **Specificity** is a
    [Heuristic](https://en.wikipedia.org/wiki/Heuristic)
  caption: >
    A _practical assumption_
    that approximates the goal

- title: How **Specifically**
  sub: Is a selector _targeting elements_

- pre: Assume we will…
  title: Start With **Broad Generic** Styles
- pre: Assume we will…
  title: Override With **Targeted** Styles

- known: itcss-main
- known: itcss-layers
- known: itcss-selectors

- img: cascade/jsheroes/markov.jpg
  alt: >
    Slide graphing markov chain weights
    edited to be about specificity maybe?
    With the different nodes labeled
    #id, .class, and type
  fit: contain
  caption: >
    Original slide from **Chelsea Troy**

- title: One **Flexible** Category
  md: |
    1. *Universal* `*`
    2. *Element* `type`s
    3. ==*Reusable* `.class`es & `[attributes]`==
    4. *Unique* `#ID`s

- css: |
    .block .element.modifier { /* 3 */ }
    .block__element--modifier { /* 1 */ }

- demo: cascade-funnel
  caption: All that's left is _source order_

- css: |
    /* don't touch */
    .block__element--modifier { … }

- known: itcss-graph

- img: cascade/jsheroes/no.jpg
  alt: >
    Drawing of someone watching a dragon breath fire
    on burning skeletons,
    the guy labeled 'you' is saying
    'my cascade!' -
    the dragon is labeled 'framework'
    and the flame is !important
  fit: contain
  caption: >
    Original slide from **Filip Sodic**

- title: 😩🤬😩

# <!--
# .##..........###....##....##.########.########...######.
# .##.........##.##....##..##..##.......##.....##.##....##
# .##........##...##....####...##.......##.....##.##......
# .##.......##.....##....##....######...########...######.
# .##.......#########....##....##.......##...##.........##
# .##.......##.....##....##....##.......##....##..##....##
# .########.##.....##....##....########.##.....##..######.
# -->

- pre: Even _the best_
  title: Heuristics Are **Assumptions**

- pre: We need
  title: Explicit **Tools**

- img: cascade/systems-layers.jpg
  alt: >
    Product label for Cascade,
    with sheeting action for virtually spotless dishes -
    subtitled 'Use the Cascade'.
    Sheeting action is covered by a scribble that says
    layers!
  position: top

- img: cascade/jsheroes/what.jpg
  alt: >
    Slide with inadvertent and reckless quadrant
    asking what's layering?
    Edited to ask about cascade layering
  fit: contain
  caption: >
    Original slide from **Emilia Muresan**

- support: cascade-layers
  title: Cascade Layers
  caption: |
    [Cascading & Inheritance Level 5](https://www.w3.org/TR/css-cascade/)

- pre: |
    **`@layer`**` { … }`

- pre: |
    `@layer `**`<name>`**` { … }`
  caption: >
    Optional, but _almost always better_

- img: cascade/jsheroes/prevent.jpg
  alt: >
    Prevent Leaks slide,
    edited to say
    prevent specificity leaks
  fit: contain
  caption: >
    Original slide from **Atila Fassina**

- title: Specificity is **Contained**
  sub: Higher layers win, _with any selector_

- css: |
    @layer default { /* least powerful */ }
    @layer theme { /* … */ }
    @layer components { /* more powerful */ }

    /* unlayered styles: most powerful */
  caption: |
    Stack in the order they're introduced

- pen: Layers live code
  id: wBaBrxG
  script: |
    - specificity & order
    - add one layer
    - add second layer
    - re-order layers
    - duplicate layer
    - add layer list
    - add nested layer
    - inspect with dev tools

- pre: |
    `@import url(…) `_`layer(<name>)`_`;`
  caption: >
    Import styles into a layer

- css: |
    @import url(system.css) layer(system);

- css: |
    /* system.css */
    @layer theme { … }
    @layer components { … }
  caption: >
    The imported file…

- css: |
    @import url(system.css) layer(system);

    @layer system.theme { … }
    @layer system.components { … }
  caption: >
    Imported layers get nested…

# <!--
# .########..#######..########...#######.
# ....##....##.....##.##.....##.##.....##
# ....##....##.....##.##.....##.##.....##
# ....##....##.....##.##.....##.##.....##
# ....##....##.....##.##.....##.##.....##
# ....##....##.....##.##.....##.##.....##
# ....##.....#######..########...#######.
# -->

- title: Getting **Started**
  sub: my _recommendations_, your milage may vary

- pre: Establish
  title: A **Layer Order**
  css: |
    /* first & easy to find */
    @layer reset, design-system, components, utilities;
  caption: |
    Start simple, and append as needed…

- html: |
    <style>/* keep this before linked styles */
    @layer reset, design-system, components, utilities;
    </style>
    <link rel="stylesheet" href="…">
  caption: |
    Can live in the HTML, if that keeps it central

- html: |
    <style>
    @layer reset, defaults, theme, components, utilities;
    @import url(reset.css) layer(reset);
    @import url(defaults.css) layer(defaults);
    @import url(theme.css) layer(theme);
    @import url(components.css) layer(components);
    @import url(utilities.css) layer(utilities);
    </style>
  caption: |
    Layered imports are great

- pre: Then
  title: Layer **Dependencies**
  sub: resets, design systems, frameworks, libraries...

- pre: Clearly define…
  title: Each **Tool's Priority**

- pre: Clearly define…
  title: Tool-Specific **Overrides**

- css: |
    @import url(bootstrap.css) layer(bootstrap.core);

    @layer bootstrap.overrides {
      /* anything here will override bootstrap */
    }

- pre: As you go
  title: Update **Layer Order**

- pre: Work from
  title: |
    **Lowest** to **Highest**

- from: itcss
  use: graph
- img: layers/chart-part-1.jpg
  fit: contain
  background: white
- img: layers/chart-part-2.jpg
  fit: contain
  background: white
- img: layers/chart-part-3.jpg
  fit: contain
  background: white
- img: layers/chart-layers.jpg
  fit: contain
  background: white

- pre: As useful,
  title: Sub-Layer **Inside Components**

- pen: layers-btn

- img: cascade/jsheroes/finish.jpg
  alt: >
    Slide originally said
    Don't leave things unfinished,
    changed to say un-layered
  fit: contain
  caption: >
    Original slide from **Sophie Koonin**

- pre: For _flexibility_
  title: Layer **Everything**
  sub: |
    Once we use un-layered styles,
    that's as high as we can go

- pre: Only allow un-layered
  title: |
    **Prototyping** & **DeBugging**

- title: |
    Single File **Components**?
  sub: No problem!

- html: |
    /* Vue example */
    <template>…</template>
    <script>…</script>

    <style>
    @layer components {
      /* all our component styles */
    }
    </style>

- pre: Tailwind or
  title: |
    CSS-**in-JS**?

- title: |
    `¯\_(`**`ツ`**`)_/¯`
  sub: It depends on the tool

- pre: |
    Good Tools
  title: |
    Let Us **Use CSS Features**
  sub: |
    (otherwise '_tools_' become _obstacle_)

# <!--
# .##.....##.########....###....##....##.####.##....##..######..
# .###...###.##.........##.##...###...##..##..###...##.##....##.
# .####.####.##........##...##..####..##..##..####..##.##.......
# .##.###.##.######...##.....##.##.##.##..##..##.##.##.##...####
# .##.....##.##.......#########.##..####..##..##..####.##....##.
# .##.....##.##.......##.....##.##...###..##..##...###.##....##.
# .##.....##.########.##.....##.##....##.####.##....##..######..
# -->

- pre: Use _layers_
  title: To **Provide Clarity**
- pre: Use _layers_
  title: To Describe **Intent**
- pre: Use _layers_
  title: To Convey **Architecture**

- pre: Not Just…
  title: |
    'This is **!important**'

- pre: |
    (layers _lower importance_ by default)

- pre: |
    X Should Override Y \
    **Because** \
    _'Components'_ Override _'Defaults'_

- pre: Encourage
  title: |
    **Nuanced** & **Explicit** Priorities

- pre: As long as
  title: The **Intent is Clear**

- pre: There's
  title: |
    **No Harm** Layering

- pre: Then _Un-Learn_
  title: >
    **Specificity-Driven** Selectors

- pre: The _best selectors_
  title: >
    Don't Need **Naming Conventions**
  css: |
    .form–-submit__invalid { /* ❌ */ }
    form:has(:invalid) button[type=submit] { /* ✅ */ }
  caption: >
    Let HTML do the work for you

- pre: Bonus…
  title: Less **Naming Things**
  css: |
    .form–-submit__invalid { /* ❌ */ }
    form:has(:invalid) button[type=submit] { /* ✅ */ }
- pre: Bonus…
  title: Encourage **Proper HTML**
  css: |
    .form–-submit__invalid { /* ❌ */ }
    form:has(:invalid) button[type=submit] { /* ✅ */ }

- img: cascade/jsheroes/code.jpg
  alt: >
    Thumbs-up write conventions,
    Rock-n-roll code semantics
  fit: contain
  caption: >
    Original slide from **Andrei Pfeiffer**

- pre: Don't _Fear Specificity_
  title: >
    **Contain** It

# <!--
# .########.....###....##....##..######..
# .##.....##...##.##...###...##.##....##.
# .##.....##..##...##..####..##.##.......
# .########..##.....##.##.##.##.##...####
# .##.....##.#########.##..####.##....##.
# .##.....##.##.....##.##...###.##....##.
# .########..##.....##.##....##..######..
# -->

- pre: Re-learn
  title: |
    **❗️important** As Intended

- pre: Like _Origins_,
  title: |
    ❗️important Layers **Reverse**

- img: layers/balance-force.jpg
  alt: >
    Kylo Ren and Rey
    standing in front of an entire star war
    with spaceships and lasers
    and AT-AT walkers

- md: |
    1. `@layer` Resets
    2. `@layer` Themes
    3. `@layer` Components

- md: |
    1. `@layer` Resets
    2. `@layer` Themes
    3. `@layer` Components
    4. ==**❗important** Components==
    5. ==**❗important** Themes==
    6. ==**❗important** Resets==

- title: 👎🏼 **Override** Styles
  sub: (that's what layers are for)

- title: 👍🏼 **Protect** Styles
  sub: From _future layers_

- css: |
    @layer reset {
      [hidden] { display: none !important; }
    }

- title: |
    _Prioritize_ `->` **Layers** \
    _Protect_ `->` **Importance**

# <!--
# ..#######..##.....##.########.########...#######.
# .##.....##.##.....##....##....##.....##.##.....##
# .##.....##.##.....##....##....##.....##.##.....##
# .##.....##.##.....##....##....########..##.....##
# .##.....##.##.....##....##....##...##...##.....##
# .##.....##.##.....##....##....##....##..##.....##
# ..#######...#######.....##....##.....##..#######.
# -->

- pre: The Cascade is
  title: Our **Most Powerful Tool**

- img: cascade/jsheroes/friend.jpg
  alt: >
    A boy riding a dragon
    as it flies past an orange sunset,
    in a drawing.
    Caption has been altered to say
    The [cascade] is our friend.
  fit: contain
  caption: >
    Original slide from **Filip Sodic**

- pre: It exists…
  title: To Balance **Priorities**
- title: Express **Architecture** & **Intent**

- pre: The _cascade_ is
  title: |
    Getting **Major Upgrades**

- quote: |
    A Jedi uses the [Cascade]
    for _knowledge and defense_,
    **never for attack**.
  cite: Yoda (almost)
  face: layers/yoda.jpg
  alt: Yoda leans on a walking stick among leaves

- feature: oddbird.dev/learn/courses/design-with-code/
  title: Designing With Code
  sub: Writing resilient and maintainable CSS
  bird: miriam
---
