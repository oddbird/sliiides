---
venue: CSS Cafe
date: 2021-06-24
script: |
  I'm here to talk about the future of CSS,
  but in order to understand where we're going —
slides:
# Cascade Intro ---------
- pre: The _Present of CSS_
  script: |
    we need to understand where we are –
- pre: The _Past of CSS_
  script: |
    And how we got here.

- pre: CSS exists
  title: For **Two Reasons**
  script: |
    In my mind CSS exists for two primary reasons

- pre: 1. _CSS_ makes
  title: Styles **Responsive**
  script: |
    First,
    CSS makes styles responsive –

- pre: |
    `@media`
  title: |
    _`min-width`_
  script: |
    and not just to
    dimensions of a viewport --

- pre: |
    `@media`
  title: |
    _`prefers-reduced-motion`_
  script: |
    But user preferences --

- pre: |
    `@media`
  title: |
    _`hover`_
  script: |
    and device interfaces.

- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top
  caption: |
    [WWW HyperMedia Browser](https://worldwideweb.cern.ch/browser/)
    & *Editor*
  script: |
    When Sir Tim
    and the team at CERN
    released the first
    hypermedia browser,
    it was designed for the NeXT machine,
    with a fancy graphic interface
- img: process/ibm-pc.jpg
  alt: Old IBM desktop
  position: top
  script: |
    But you can't make a web that's "world-wide",
    by saying "it works on my machine"
    and everyone else is an "edge-case".
- img: no-harm/line-mode.jpg
  alt: The second browser, a text-only terminal
  position: top
  caption: |
    [Line Mode Browser](http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html),
    developed by **Nicola Pellow**
  script: |
    So right away they release a second browser,
    designed to work on any terminal with an internet connection.
- quote: |
    Web **for all**. Web **on everything**.
  cite: W3C [Mission Statement](https://w3.org/Consortium/mission.html#principles)
  script: |
    This becomes the _mission statement_ of the web --
    web for all, web on everything.
- img: unfriendly/braille.jpg
  alt: Braille interface and headphones
  script: |
    That includes assistive devices --
- img: unfriendly/agnesscott/smart-home.png
  alt: Google Home, Amazon Echo, and Apple HomePod
  script: |
    And non-visual media --
    always with the end-user in control of the outcome.

- quote:
    Provide **hints** that the browser **may or may not use**.
  cite: Håkon Lie
  script: |
    We provide hints and suggestions,
    semantic clues,
    but only the browser
    can put it all together.

- title: The **Cascade**
  script: |
    And the cascade describes that process --

- quote: |
    **An ordered list (cascade) of style sheets** …
    can be referenced from the same document.
  cite: Håkon Lie
  caption: https://w3.org/People/howcome/p/cascade.html
  script: |
    by accepting style sheets
    from everyone involved --

- quote: |
    The **user/browser** specifies _initial preferences_
    and **hands the remaining influence over** to the document.
  cite: Håkon Lie
  caption: https://w3.org/People/howcome/p/cascade.html
  script: |
    _Browsers_ & _users_ establish
    global defaults and preferences across the web,
    and then we fill in the details
    of our particular site

- title: Cascade **Origins**
  md: |
    - 🎨 **Author** (Document)
    - 👥 **User** Preferences
    - 🖥 **User Agent** (Browser)
  script: |
    These are the primary "cascade origins" --
    each one representing a
    different set of needs and concerns,

- pre: The _Cascade_
  title: Resolves **Merge Conflicts**
  script: |
    But these different perspectives,
    can sometimes be in conflict.
    So the rules of cascade & inheritance
    describe how to merge all three origins,
    and resolve those conflicts.

- md: |
    1. 🎨 **Author** (Document)
    2. 👥 **User** Preferences
    3. 🖥 **User Agent** (Browser)
  script: |
    In most cases,
    the user preferences will override the browser defaults,
    and (for better or worse)
    we're allowed to override both of them.

- quote: |
    If conflicts arise **the user should have the last word**,
    but one should also allow the author to attach style hints.
  cite: Håkon Lie
  caption: https://w3.org/People/howcome/p/cascade.html
  script: |
    But when things really get heated,
    when it really matters,
    the user and browser can insist --

- title: ❗**important**
  sub: A balance of power
  script: |
    That some styles are
    more important than others --

- md: |
    1. ==❗🖥 User Agent **Important**==
    2. ==❗👥 User **Important**==
    3. ==❗🎨 Author **Important**==
    4. 🎨 Author Styles
    5. 👥 User Preferences
    6. 🖥 User Agent Defaults
  script: |
    Creating _important origins_
    that cascade in reverse order.
    Important author styles aren't that special.
    That's us in the middle,
    with our normal and important styles side-by-side.
    But users can override us when they need to,
    and the browser finally decides
    what's out of bounds,
    what's possible on this device,
    what features are supported,
    and so on.

- pre: 2. Style*Sheets*
  title: Make Styles **Reusable**
  script: |
    The second goal of CSS
    is to make our design objects reusable...

- lang: html
  code: |
    <P><FONT SIZE="4" COLOR="BLUE">…</FONT></P>
    <P><FONT SIZE="4" COLOR="BLUE">…</FONT></P>
    <P><FONT SIZE="4" COLOR="BLUE">…</FONT></P>
    <P><FONT SIZE="4" COLOR="BLUE">…</FONT></P>
    <P><FONT SIZE="4" COLOR="BLUE">…</FONT></P>
  script: |
    Instead of repeating the same styles
    over and over in our HTML

- title: CSS **Selectors**
  code: |
    p {
      color: blue;
    }
  script: |
    We can use selectors to apply styles broadly –

- pre: We use
  title: |
    **Classes** & **Attributes**
  caption: |
    🤔 Lingo taken from Object Oriented Programming
  script: |
    Creating patterns
    based on things like
    classes and attributes --

- pre: Combine them
  title: To **Compose Objects**
  script: |
    Which we can combine,
    to compose re-usable objects --

- title: |
    Design **Systems** & \
    **Component** Libraries
  script: |
    -- Design Systems & Component Libraries.

- face: nicolesullivan.jpg
  pre: |
    @stubbornella
  title: |
    **Nicole** Sullivan
  sub: |
    2009 [**Object Oriented CSS**](https://github.com/stubbornella/oocss)
  script: |
    CSS is object-oriented to the core,
    but it is also declarative, contextual, and resilient --
    features of the cascade.
    CSS is cascade-oriented.

- title: 💥 Conflict!
  css: |
    button          { background: gray; }
    .action         { background: darkblue; }
    [type=“submit”] { background: darkgreen; }
    #send           { background: maroon; }
  script: |
    But selectors create another potential conflict
    for the cascade to resolve.
    Since we can use multiple different selectors
    to target the same element --

- title: Selector **Specificity**
  caption: |
    [heuristic](https://en.wikipedia.org/wiki/Heuristic):
    a practical assumption
    that approximates the desired goal
  script: |
    The cascade needs to determine a winner,
    so it uses a clever heuristic --
    an educated guess --
    called specificity.

- md: |
    - `*` **(universal)**
    - `type`
    - `.class` & `[attr]`
    - `#ID`s **(single-use)**
  script: |
    We assume that each selector type is meant to
    represent a different goal or perspective,
    based on how narrowly that selector has been targeted.

- pre: |
    universal/type »
  title: Global **Defaults**
  script: |
    The most generic selectors,
    help us paint in broad strokes
    to establish low-priority defaults --
- pre: |
    attrs/classes »
  title: Common **Patterns**
  script: |
    Classes and attributes
    allow us to describe
    higher-priority patterns,
    that make up the majority of our styles --
- pre: |
    ID/style »
  title: Singular **Overrides**
  script: |
    Then one-off ID's are both
    the most narrowly targeted,
    and the highest priority.
- md: |
    1. *Unique* `#ID`s
    2. *Reusable* `.class`es & `[attributes]`
    3. *Element* `type`s
    4. *Universal* `*`
  script: |
    We can combine these selectors in various ways,
    but their specificity is always compared
    one "layer" at a time.
    Selectors with an ID will always override
    selectors without an ID,
    and so-on down the list.

- img: patterns/itcss-layers.png
  fit: contain
  background: white
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    CSS (ITCSS), by Harry Roberts
  script: |
    This is a rough approximation
    of the layers in our code --
    moving from global abstractions
    to narrowly targeted components and overrides. --

- title: Heuristics Can 💥**Fail**💥
  script: |
    But it's not perfect.

- title: Especially "**At Scale**"
  script: |
    As our projects become larger and more complex
    with more distributed teams
    and third-party integrations,
    there are _a lot_ of situations
    that don't fit the rule --

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
  script: |
    Some low-priority defaults are very specific --

- css: |
    [hidden] {
      display: none !important;
    }
  script: |
    While some generic attributes,
    really ought to have more weight behind them.

- md: |
    1. ~~*Unique* `#ID`s~~
    2. ==*Reusable* `.class`es & `[attributes]`==
    3. ~~*Element* `type`s~~
    4. ~~*Universal* `*`~~
  script: |
    And out of all these specificity layers,
    there's only one that we can
    both _customize_ **and** _reuse_.
    Classes & attributes.

- css: |
    .block .element.modifier { /* 3 */ }
    .block__element--modifier { /* 1 */ }
  script: |
    So we spend a lot of our time
    fighting over _how many attributes_
    should be in a selector --

- img: patterns/itcss-metrics.png
  fit: contain
  background: white
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    CSS (ITCSS), by Harry Roberts
  script: |
    With rules and conventions
    to ensure our cascade specificity --

- img: patterns/itcss-layers.png
  fit: contain
  background: white
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    CSS (ITCSS), by Harry Roberts
  script: |
    matches carefully crafted layers of _intent_,

- title: ❗**important**
  sub: A balance of power
  script: |
    And throwing importance like a grenade
    when we get stuck,

- css: |
    .bootstrap-thing {
      font-weight: bold !important;
    }
  script: |
    Or if one part of the system
    doesn't play by the same rules.

# Layers ----------------
- section: |
    Cascade **Layers**
  caption: |
    [Working Draft](https://www.w3.org/TR/css-cascade-5/)
  script: |
    So that brings us to our first new feature:
    Cascade Layers.

- img: patterns/itcss-layers.png
  fit: contain
  background: white
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    CSS (ITCSS), by Harry Roberts
  script: |
    This will allow us to create our own
    custom layers of the cascade,
    that more explicitly represent
    the different parts of a system --
    and potentially different teams on a project,
    or even third-party code.
    You can think of these as
    customizable _layers of specificity_ --

- title: Stacked in **Layers**
  md: |
    1. Components?
    2. Themes?
    3. Frameworks?
    4. Resets?
  script: |
    Or like our own custom CSS Origins --
    but for things like resets, defaults,
    frameworks, themes, components,
    utilities --
    anything we want,
    in whatever order we need.

- md: |
    1. ❗**Important** Resets
    2. ❗**Important** Themes
    3. ❗**Important** Components
    4. Components
    5. Themes
    6. Resets
  script: |
    And the `important` flag works as intended.
    Inverting the layers
    when it becomes necessary for a lower layer
    to insist on something,
    and punch above it's weight.

- css: |
    @import url(headings.css) layer(default);
  script: |
    We can define a layer,
    give it a name,
    and add styles to it
    using either a layer function on the import rule --
- css: |
    @layer default {
      audio[controls] { display: block; }
      [hidden] { display: none !important; }
    }
  script: |
    Or by nesting styles inside the new at-layer rule --
- css: |
    @import url(headings.css) layer(default);

    @layer default {
      audio[controls] { display: block; }
      [hidden] { display: none !important; }
    }
  script: |
    -- Or both. Here we're creating a "default" layer
    with the `headings.css` import,
    and using the at-rule
    to add a few more styles to the same
    "default" layer.

- css: |
    @layer default { /* lowest */ }
    @layer theme { /* higher */ }
    @layer components { /* highest */ }
  script: |
    Layers stack in the order they were first defined,
    with the first layer at the bottom,
    and the last layer at the top.
    The highest layer will win conflicts,
    no matter what specificity is used
    for the selectors inside.

    Specificity only matters _inside_ each layer.

- css: |
    @layer framework {
      .menu > .dropdown > .item {
        background: whitesmoke;
      }
    }

    @layer override {
      .menu-item {
        background: lightcyan;
      }
    }
  script: |
    So this single `menu-item` class wins over
    the combined `menu`, `dropdown`, and `item` classes,
    because the `override` layer is defined
    after the `framework` layer.
    This makes it simple to override a tool like bootstrap,
    no matter how they write their selectors.

- css: |
    @layer default { /* … */ }
    @layer theme { /* … */ }

    /* still a lower layer than "theme" styles */
    @layer default { /* … */ }
  script: |
    But we don't need to keep all our styles in that same order.
    Once a layer has been established,
    we can add to it from anywhere in our code.
    The priority is based on when the layer name
    _first appears_.

- css: |
    @layer default;
    @layer theme;
    @layer components;

    @layer default {
      * { box-sizing: border-box; }
    }
  script: |
    We can even use the at-layer rule without any styles,
    just a name,
    to establish our order up front.
    After that,
    we load the code in any order,
    and it will just work.

    That's especially important if we're using CSS-in-JS,
    where styles might load in any order.

- css: |
    @layer default, theme, components;

    @layer default {
      * { box-sizing: border-box; }
    }
  script: |
    And there's a shorthand syntax to make that even easier,
    using a comma-separated list of layer names.

- css: |
    @layer default, tools, theme, components;
    @import url(tools.css) layer(tools);
  script: |
    One of the goals here
    is to make it so that we as authors
    get to define exactly where
    third-party tools belong
    in our layering.
    No matter what specificity those tools use internally,
    or whatever layers they create,
    we can always override them
    without resorting to specificity hacks.

- css: |
    /* tools.css */
    @layer theme { /* … */ }
    @layer components { /* … */ }
  script: |
    And this also gives
    framework or component-library authors
    a way to provide layers
    we can hook into --

- css: |
    @import url(tools.css) layer(tools);

    @layer tools.theme { /* … */ }
    @layer tools.custom { /* … */ }
  script: |
    Either directly,
    or by wrapping those layers into a contained namespace.
    We can create or access
    "nested" or "name-spaced" layers
    using a dot-notation to combine the names.

- css: |
    @layer tools {
      @layer custom {
        /* tools.custom */
      }
    }
  script: |
    Or we can actually nest the layer rules --
    it works the same way.

- title: |
    More Cascade **Control**
  script: |
    This gives us a lot more control
    over our corner of the cascade,
    so we're not totally reliant
    on selector specificity
    and code-order to determine
    what takes precedence.
    We have control over the cascade!

- title: |
    Fewer **Hacks**
  script: |
    Hopefully that allows us to replace
    all our specificity & importance hacks
    with more clearly defined patterns.

- pre: |
    _Unlayered_ styles
  title: |
    Default **Lowest Priority**
  script: |
    Of course,
    we don't have to put all our styles into these layers --
    and for the sake of progressive enhancement,
    we likely want to start adding layers slowly.

    Un-layered styles will work the same way they always have,
    and belong to an implied "base layer"
    below all the others.

- pre: Should that default
  title: Be **Adjustable**?
  caption: |
    [CSSWG issue for ordering unlayered styles](https://github.com/w3c/csswg-drafts/issues/6323)
  script: |
    This is actually a recent change --
    we used to have unlatered styles at the top --
    but we think making them a base helps
    match expectations & improve the upgrade path.

    But there is also discussion now
    about making it adjustable.
    You can check out the issue thread
    if you're interested in that conversation.

# Scope ----------------
- section: |
    **Scoped** Styles
  script: |
    The next feature is also about how selectors work.
    With "scope",
    we're trying to address two issues
    that come up regularly,
    and drive people to use tools & conventions
    like BEM syntax or CSS-in-JS.

- pre: 1. Avoid
  title: |
    **Naming** Conflicts
  sub: (across _large teams_ & _projects_)
  script: |
    The first goal is to avoid
    naming conflicts as our projects grow.

- pre: 2. By
  title: Expressing **Membership**
  sub: (through _lower boundaries_ & _proximity_)
  script: |
    Which we can solve
    by focusing on our second goal:
    expressing "membership" or "ownership"
    in our selectors.

- css: |
    .title { /* global */ }
    .post .title { /* nested */ }
  caption: |
    _Membership_ is distinct from _ancestry_
  script: |
    While nested selectors
    might seem like a way to
    express membership --
    in this case
    a title that is inside a post --

- css: |
    .title { /* global */ }
    .post .title { /* nested */ }

    .post__title { /* BEM */ }
  caption: |
    _Membership_ is distinct from _ancestry_
  script: |
    That's not quite the same thing
    as _a post-title_.
    The first one only describes a nested structure,
    but the second describes
    a more clear membership in a component pattern.
    Not _all the titles in a post_,
    just the title that _belongs to_ the post.

- css: |
    .post__title { /* BEM */ }
    .title[data-JKGHJ] { /* Vue */ }
  script: |
    We don't have a good way to convey that
    using our current CSS selectors,
    unless we invent a new unique name
    for every kind of title,
    based on what it belongs to --
    either manually using a convention like BEM,
    or automated with JavaScript compilers.

- html: |
    <h2 class="title post__title">
  script: |
    And if we want some global title styles,
    we end up using multiple classes --
    and hoping the more targeted pattern will override
    the global pattern.

- img: csswg/components.jpg
  alt: wireframe of a site, with multiple nested components
  fit: contain
  background: '#e5e5e5'
  caption: |
    A "donut scope" with
    _lower boundaries_
    similar to shadow-DOM `slots`
  script: |
    Another way to think about this is
    to say that some components
    have lower boundaries --
    the component itself is a "donut"
    with a hole in the middle for content.
    We should be able to style a tab component,
    or a media-object,
    without worrying that we might accidentally
    style _everything inside_ it by mistake.

- pre: Different from
  title: Shadow-DOM **Encapsulation**
  script: |
    This might sound similar to shadow-DOM encapsulation,
    and there is certainly cross-over
    between scope & encapsulation.

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
  script: |
    But the Shadow-DOM is designed
    around highly-isolated widgets.
    Boundaries are defined in the DOM,
    so that each element has a single scope,
    and styles are isolated from getting in or out.
    Scopes are never allowed to overlap at all.

- pre: Build-tools
  title: Provide **Scoped Styles**
  sub: BEM, CSS Modules, Vue, JSX, Stylable, etc
  script: |
    While that kind of encapsulation is useful sometimes,
    it's very different from the lighter-touch
    "scope" that we get from existing
    build-tools and conventions --

- img: csswg/scoped.jpg
  alt: |
    Diagram shows a component with porous boundaries,
    all styles can penetrate, or establish their own lower boundaries
  fit: contain
  background: white
  caption: |
    **Scope**
    is designed for _a unified system_
  script: |
    Where scopes reference the DOM,
    but they're more fluid --
    able to overlap,
    and integrate more smoothly
    with global design systems.
    Different scopes can have different boundaries,
    and global styles continue to apply globally.

    This provides us with a much lower-impact alternative.
    Scopes are defined in CSS,
    and can be re-used across components,
    or overlap & cascade together.

- css: |
    @scope (.media) to (.content) {
      img { /* only images that are "in scope" */ }
    }
  caption: |
    [CSSWG Scope Issue](https://github.com/w3c/csswg-drafts/issues/5809)
  script: |
    So we're proposing an at-scope rule,
    that accepts both a scope-root selector
    (in this case `media`)
    and a lower-boundary selector
    (in this case `content`).
    Any selectors inside the at-rule
    only apply _between_ the root
    and the lower-boundary.
    In this case we're styling images inside media,
    unless they are also inside the media content.

- md: |
    ```css
    .light-theme a { color: purple; }
    .dark-theme a { color: plum; }
    ```
  caption: |
    _DOM Proximity_
    is similar to _inheritance_
  script: |
    We can also talk about this
    in terms of _proximity_.
    These two selectors apply to links
    inside a light-theme or dark-theme class.
    And that works great,
    as long as we never nest one theme inside the other.
    Since our selectors both have the same specificity,
    and _ancestor proximity_ is not part of the cascade --

- demo: scope-proximity-issue
  script: |
    dark-theme will always override light theme
    in nested situations.

- css: |
    @scope ([data-theme=light]) to ([data-theme]) {
      a { color: purple; }
    }
    @scope ([data-theme=dark]) to ([data-theme]) {
      a { color: plum; }
    }
  script: |
    We can solve that problem using lower-boundaries,
    so that themes never bleed into each other --

- css: |
    @scope ([data-theme=light]) {
      a { color: purple; }
    }
    @scope ([data-theme=dark]) {
      a { color: plum; }
    }
  script: |
    But I think it would also make sense for
    scope proximity to be added as part of the scope feature.
    When specificity is equal,
    we would default to using the "closer" scope-root.
    This part of the spec is still being debated.

- title: Scope **Resources**
  md: |
    - [Full scope Explainer](https://github.com/oddbird/css-sandbox/blob/main/src/scope/explainer.md)
    - [CSSWG Issue](https://github.com/w3c/csswg-drafts/issues/5809)
  script: |
    There's a lot more to the proposal,
    which you can look into if your interested.
    The CSSWG has expressed interest,
    feedback is welcome,
    and Chrome plans to prototype this soon,
    for more testing.

    But for now, this one is entirely theoretical.

# Container Queries ----------------
- section: |
    **Container** Queries
  script: |
    And that brings us to the real reason we're here.
    Container Queries.

- pen: media-v-container
  script: |
    - Media queries let us respond to viewport
    - Same element in multiple containers,
      viewport isn't useful
    - Respond to containers instead

- img: csswg/cq-nested.jpg
  alt: |
    Nested grid-item containers
    inside the main container,
    also use small card layout
  fit: contain
  background: white
  caption: |
    Containers can be nested
  script: |
    No matter how those containers are nested.

- title: Layout **Loops**
  sub: CSS _Context_ vs _Content_
  script: |
    But trying to measure a "container" in CSS,
    and then make changes based on that measurement,
    poses a bit of a paradox.

- pen: css-rad
  script: |
    One of the coolest responsive features in CSS,
    which we don't talk about nearly enough,
    is the way we calculate layout
    based on both context and content.
    Add more content,
    and a container will try to grow,
    but it might also be constrained by context,
    or explicit sizing.

    That's very cool,
    but if you add container queries,
    it becomes an infinite loop:
    as the container gets larger, we make the content smaller,
    which makes the container smaller,
    which makes the content larger.

- pre: 2010-2020
  title: 🚧 Laying **Foundations** 🚧
  script: |
    So for a long time,
    this seemed impossible to implement.
    But behind the scenes,
    a lot of people
    have been laying the groundwork in browsers.

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
  script: |
    Last year two proposals emerged,
    showing different ways we might pull this off.
    Both are interesting,
    but David Baron's approach has the most momentum right now,
    and I've been working on it
    to flesh out some of the details,
    and start writing a specification.

- title: Defining **Containers**
  script: |
    The first thing we need to do
    is define our containers --

- img: csswg/cq-nested-containers.jpg
  alt: |
    We need to define the containers
    for our cards to query
  fit: contain
  background: white
  script: |
    Any element we want to measure,
    query, and respond to.

- title: No **Content Sizing**
  script: |
    In order to avoid any layout loops,
    we need to turn off content-based sizing
    on those elements.
    Our containers need to be sized
    without reference to anything inside it.

- css: |
    .container {
      contain: size layout style;
    }
  script: |
    We already have a property for this!
    It's called `contain`,
    and allows us to "contain" various types of things.

    Size containment turns off content-based sizing,
    layout containment is kinda like a clearfix --
    wrapping around floats and margins --
    and style containment keeps list-counters
    from leaking out.

    And we're going to need all three of these
    for our container queries work.

- pre: 2D size containment
  title: Is **Too Restrictive**
  caption: |
    Need a flexible dimension ("Be afraid of heights")
  script: |
    But size-containment is…
    bad in most cases.
    It's just not possible to build all our layouts
    with explicit width and height!

- pen: css-rad
  script: |
    We need one axis to be fluid,
    and respond to content,
    so that we don't create accidental overflow.

- pre: We need
  title: |
    **Inline Size** Containment
  caption: |
    See the
    [CSSWG issue for single-axis containment](https://github.com/w3c/csswg-drafts/issues/1031)
  script: |
    And usually we want to contain the `width`,
    or the inline-dimension,
    and allow the `height` to grow or shrink
    with the content.
    That's pretty standard web-layout best practice.
    So we're adding an option to make
    single-axis containment possible.

- css: |
    .container {
      contain: inline-size;
    }
  script: |
    Contain `inline-size`.

- css: |
    .container {
      contain: block-size;
    }
  script: |
    We're not sure if we can also support
    a `block-size` value here.
    That needs some more experimenting.
    There are weird issues
    with the way percentages work.

- css: |
    .sidebar, main, .grid-item {
      contain: inline-size layout style;
    }
  script: |
    Don't worry, you don't need to
    memorize and write out all these values.
    The browser will figure that out for you.

- css: |
    .sidebar, main, .grid-item {
      container-type: inline-size;
    }
  caption: |
    [CSSWG discussion of new syntax](https://github.com/w3c/csswg-drafts/issues/6174)
  script: |
    Instead of specifying all the containment required,
    we just say what type of container we want --
    or _what we want to query_.
    In this case we want to query the inline size.
    Browsers can take that,
    and apply the right containment
    in the background.

- pre: |
    _Warning_!
  title: |
    Not a **Stable Spec** Yet
  caption: |
    [Editor's Draft](https://drafts.csswg.org/css-contain-3/)
  script: |
    This changed recently,
    so some articles and demos
    might still use the old syntax.

    And the spec is still in active development,
    so it could change again.

- title: |
    **Querying** Containers
  script: |
    Once we have containers,
    we can begin to query them!

- css: |
    @container (min-width: 40em) {
      .card { /* ... */ }
      h2 { /* ... */ }
    }
  caption: |
    Each element queries the
    _nearest ancestor container_
  script: |
    A container-query
    looks exactly like a media-query,
    but with at-container instead of at-media.
    And each element will query
    the size of it's nearest ancestor container.

    Container's can't query themselves.
    That's ensures there are no loops.

- html: |
    <div class="container">
      <div class="container">
        <div class="container">
          We can nest containers!
        </div>
      </div>
    </div>
  script: |
    But we can nest containers
    as much as we need to --

- css: |
    .container { container-type: inline-size; }

    @container (width > 30em) {
      .container { padding: 2em; }
    }
  script: |
    And each container can respond
    to the one above it.

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
  script: |
    If you don't want to rely on the nearest container,
    you can also give containers names,
    and only query containers with a specific name.

- css: |
    .sidebar { container-type: inline-size; }

    @container type(inline-size) (width > 30em) {
      .container { padding: 2em; }
    }
  caption: |
    [CSSWG issue for type queries](https://github.com/w3c/csswg-drafts/issues/6393)
  script: |
    Or only query a specific container type.

- pre:
    Chrome **Prototype**
  md: |
    1. Download/Update [Chrome Canary](https://www.google.com/chrome/canary/)
    2. Go to `chrome://flags` in the URL bar
    3. Search for "CSS Container Queries" & enable it
    4. You'll need to restart after turning it on
  caption: |
    [Codepen Demos](https://codepen.io/collection/XQrgJo)
  script: |
    Chrome already has a prototype,
    and you can start playing with it
    behind a feature flag.
    I've started collecting codepen demos
    to help you get started.

- pen: Container Vs Media Queries
  id: NWRJpQo
  script: |
    But why don't I just show you?
    I've set up two containers on the page,
    each with one card using a media-query,
    and one card using a container query.
    The media queries all trigger at the same time,
    but the container queries
    depend on the size of the container.

- pen: cq-quotes
  script: |
    My coworker David Herron,
    made this one showing
    the same blockquote
    with three different designs
    based on the size of the container.

- pen: cq-flex
  script: |
    In some cases,
    like inside flexbox or grid,
    there is no outside container
    that will tell us the actual space available
    for each item.
    But we can get around that by adding a container
    around each component --
    in this case div.card is wrapping each article.
    The outer div establishes a container,
    and the inner article can query it.

- pen: cq-books
  script: |
    Max Böck has created this bookstore demo
    with self-contained web components.
    Each component host element is a container,
    and everything inside the component
    adjusts based on available size.

- pen: cq-blinds
  script: |
    Of course, we can also get creative!
    Jhey Tompkins made these interactive blinds
    that get smaller as the container gets bigger.
    Because CSS doesn't have to be practical
    to be awesome.

- pen: cq-water
  script: |
    Stephanie Eckles joked that my containers don't hold water,
    so I made this demo to prove her wrong.

- pre: More to do...
  title: Container **Units**
  caption: |
    [CSSWG issue for container units](https://github.com/w3c/csswg-drafts/issues/5888)
  script: |
    We're also working on container-relative units,
    similar to vw, vh, vmin, vmax,
    but a percentage of the container size
    rather than the viewport.

- pre: More to do...
  title: Non-size **Queries**
  caption: |
    [CSSWG issue for other query ideas](https://github.com/w3c/csswg-drafts/issues/5989)
  script: |
    And we're working on queries
    that aren't about the container size.

- css: |
    @container property(--colors == invert) { … }
  caption: |
    [CSSWG issue for style queries](https://github.com/w3c/csswg-drafts/issues/6396)
  script: |
    We might be able to query the actual value
    of a property on the container,
    and change internal styles based on that property.

- css: |
    @container (is-stuck) { … }
  caption: |
    [CSSWG issue for state queries](https://github.com/w3c/csswg-drafts/issues/6402)
  script: |
    Or check if our container is position-sticky,
    and currently in a "stuck" state.

    Both of these _should be possible_,
    but we haven't worked out all the details yet.

- title: Coming **Soon**
  sub: with a polyfill
  script: |
    All of this could be available in Chrome & Edge
    by the end of the year.
    Firefox and Safari have both expressed interest,
    but I imagine they'll wait for a stable spec before implementing.

- title: |
    **Migration** Path
  script: |
    There's also a polyfill being developed,
    which would make this all work on older browsers,
    using a bit of JavaScript.

- css: |
    @container (width > 30em) { /* CQ support */ }

    @supports not (container-type: inline-size) {
      @media (width > 40em) { /* no CQ support */ }
    }
  script: |
    Or we can use the at-supports rule,
    to create fallbacks natively in CSS.

- title: CQ Proposal **Resources**
  md: |
    - [Full CQ Explainer](https://github.com/oddbird/css-sandbox/blob/main/src/rwd/query/explainer.md)
    - [CSSWG project](https://github.com/w3c/csswg-drafts/projects/18)
    - [TAG Review](https://github.com/w3ctag/design-reviews/issues/592)
    - [More Articles & Demos »](/css-next/cq-resources/)
  script: |
    I'll share the link to my slides,
    so you can check for the latest resources.

# outro

- toc: true
  script: |
    All of these features are designed to work together
- pre: Building on
  title: Existing **CSS**
  script: |
    Building on the existing features of CSS --
- pre: Building on
  title: The **Cascade**
  script: |
    And the cascade
    that holds it all together --
- pre: Already make...
  title: Styles **Responsive**
  script: |
    But particularly the overlap
    between the two main goals of CSS:
    to make responsive --
- pre: Already make...
  title: Styles **Reusable**
  script: |
    and reusable styles.
    Building components that are inherently responsive.

- pre: Modular CSS
  title: |
    **Responsive Components**
  script:
    There's already been
    a lot of progress in this space,
    with tools like grid & flexbox & aspect-ratios --
    now layers, scope, and container queries --
    but also color-functions, nesting and more.
- quote: |
    Our medium is not done.
    Our medium is still
    **going through radical changes**.
  cite: Jen Simmons, *Designing with Grid*
  script: |
    "Our medium is not done.
    Our medium is still
    going through radical changes."
