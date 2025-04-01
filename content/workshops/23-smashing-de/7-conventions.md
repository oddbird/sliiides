---
talk: Organizing Conventions
date: 2023-09-06
slides:
# intro

- pre: |
    *OOCSS*, *ITCSS*, \
    *SMACSS*, *BEM*, *CUBE*…
- pre: Branded
  title: CSS **Conventions**

- pre: Describe how we
  title: Write **Consistent** Code

- pre: Describe how we
  title: Write **Organized** Code

- pre: Describe how we
  title: Write **Maintainable** Code

- pre: Help us
  title: Write "**Better**" Code

- title: |
    CSS **Mental Model** \
    Selector **Naming** \
    Code **Organization**

- title: Text **Formatting**

- title: |
    **❌** ~~Text **Formatting**~~
  sub: (use a linter)

- title: Conventions Are **Optional**

- quote: |
    I think **they are all pretty neat**
    and I see the point,
    but I’m a bunch of years into this
    and still generally…
  cite: Chris Coyier
  face: chriscoyier.webp
  source: |
    [@chriscoyier](https://twitter.com/chriscoyier/status/1304106064321949696)

- quote: |
    **write the selector I need**
    and then style with that.
  cite: Chris Coyier
  face: chriscoyier.webp
  source: |
    [@chriscoyier](https://twitter.com/chriscoyier/status/1304106064321949696)

- pre: Understand
  title: Their **Concerns**
- pre: Understand
  title: Their **Solutions**

- quote: |
    write **the selector I need**
    and then style with that.
  cite: Chris Coyier
  face: chriscoyier.webp
  source: |
    [@chriscoyier](https://twitter.com/chriscoyier/status/1304106064321949696)

- quote: |
    Once you become experienced,
    you can **break the rules in creative ways**.
  cite: Eric Meyer
  face: ericmeyer-small.png
  source: |
    [Structural Naming](http://meyerweb.com/eric/thoughts/2004/06/26/structural-naming/)
    (2004)

- pre: Different
  title: Project **Needs**
- pre: Different
  title: Team **Structures**

- pre: Just because
  title: |
    **InstaSalesBook** Did It
  sub: Doesn't mean you need to

- quote: |
    We often hear “Are you using OOCSS or BEM?”
    but *these things are not mutually exclusive*.
    In fact, most of the time,
    we’re… mixing them up,
    **customizing them to suit our own needs**.
  cite: Una Kravets
  face: unakravets-small.jpg
  source: |
    [Atomic OOBEMITSCSS](https://www.sitepoint.com/atomic-oobemitscss/)

# problem -------------------------

- pre: Proto-convention...
  title: The 🌊 **Cascade**

- pre: Built-in
  title: |
    **Naming** Rules
- pre: Built-in
  title: |
    **Organizing** Rules

- quote:
    WWW parsers should
    **ignore tags** which they do not understand,
    and **ignore attributes** which they do not understand
    of tags which they do understand.
  cite: WWW Project

- quote:
    Support visual and **non-visual media**.
  cite: Håkon Lie

- quote:
    Provide **hints** that the browser **may or may not use**.
  cite: Håkon Lie

- title: Ignored **Selectors**
  code: |
    :has(p) {
      background: rebeccapurple;
    }

- title: Ignored **Decalarations**
  code: |
    body {
      color: oklch(320deg 50% 50%);
    }

- quote: |
    Websites ~~don't need to~~
    **cannot possibly**
    look the same in every browser.
  cite: Me, again

- pre: These *differences*
  title: Are a **Feature** of The Web

- pre: We *Script*
  title: |
    **Browsers** Perform Live

- pre: We don't *control* styles
  title: We **Hint** & **Suggest**

- pre: The 🌊 *Cascade*
  title: Relies on **Semantic Clues**

# selectors

- pre: Layers of...
  title: 🎯 Selector **Specificity**
- md: |
    1. *Inline* `style="…"`
    2. *Unique* `#ID`s
    3. *Reusable* `.class`es & `[attributes]`
    4. *Element* `type`s
    5. *Universal* `*`

- pre: Layers represent
  title: Different **Goals**

- pre: |
    universal/type »
  title: Global **Defaults**
- pre: |
    attrs/classes »
  title: Common **Patterns**
- pre: |
    ID/style »
  title: Singular **Overrides**
- pre: |
    combined... »
  title: |
    **Components** & Parts

- pre: Specificity provides
  title: A **Name-Layering** Convention

- pre: Use *selectors*
  title: Based on **Intent**

- pre: Use *low* specificity
  title: To **Describe Systems**

- pre: Use *high* specificity
  title: To **Describe Details**

# Order

- title: An **Organizing** Convention

- css: |
    .button {
      background: darkgreen;
    }

    .button-submit {
      background: rebeccapurple;
    }

- pre: |
    Source *Order*
  title: Is **Meaningful**
  sub: Not safe to **shuffle**

- pre: Sort code
  title: From **General** to **Specific**
  caption: Match the specificity!

- title: Link **States**
  css: |
    a:link {color: blue;}        /* specificity = 1,1 */
    a:visited {color: purple;}   /* specificity = 1,1 */
    a:hover {color: magenta;}    /* specificity = 1,1 */
    a:active {color: red;}       /* specificity = 1,1 */
  caption: |
    [Link Specificity](https://meyerweb.com/eric/css/link-specificity.html)
    by *Eric Meyer*

- code: |
    main {
      /* display: block; */
      display: flex;
      display: grid;
    }

- title: Mobile-**First**

- pre: Start *generic*
  title: Fallbacks for **Everyone**

- pre: Add on
  title: More **Targeted** Styles

- code: |
    /* … general … */
    @media ( … ) { … }
    @supports ( … ) { … }

# conventions

- pre: ~2004-2006
  title: |
    Broad **Conventions**

- title: Page **Structures**
  code: |
    #header { … }
    #nav { … }
    #main { … }
    #footer { … }
  caption: |
    See *Eric Meyer's*
    [Structural Naming](http://meyerweb.com/eric/thoughts/2004/06/26/structural-naming/)

- title: HTML**5**
  code: |
    header { … }
    nav { … }
    main { … }
    footer { … }

- title: Browser **Resets**
  sub: Shared CSS files

- pre: ~2006-2010...
  title: Major **CSS Libraries**
  sub: YUI, Blueprint, 960gs, etc…

- title: Central **Class Library**
  sub: |
    `<div class="` **`column col6of12 last`** `" >`

- title: Can be **Massive**
  sub: Solve *Every Problem* for *Every Project*

- pre: Often
  title: |
    Hard to **Customize**

# css systems

- face: nataliedowne.jpg
  pre: |
    @natbat
  title: |
    **Natalie** Downe
  sub: |
    2008
    [**CSS Systems**](http://www.slideshare.net/nataliedowne/css-systems-presentation)

- quote: |
    CSS frameworks **decrease the maintainability of code**.
  cite: Natalie Downe

- pre: CSS *Systems*
  title: |
    **Conventions** `>` Frameworks

- title: |
    **ClearLeft**
  sub: Web Consulting *Studio*

- md: |
    - High **quality code**
    - To tight **deadlines**
    - For **handover** to external developers

- img: patterns/oddbird-w-logo.jpg
  alt: Young Jonny, Carl, and Miriam playing Magic The Gathering
  caption: Proto-OddBird, 1994

- pre: CSS *Ordering*
  title: Based on **Specificity**

- img: conventions/systems-cascade.jpg
  alt: |
    Product label for Cascade,
    with sheeting action for virtually spotless dishes -
    subtitled Use the Cascade
  fit: contain

- md: |
    1. **Elements** grouped by **Type**
    2. **Classes** grouped by **Effect**
    3. **IDs** grouped by **Component**

- pre: 1...
  title: |
    **General** Styles
  md: |
    - body styles
    - reset
    - links
    - headings
    - *other elements, tags*

- pre: 2...
  title: |
    **Helper** Styles
  md: |
    - forms
    - notifications
    - errors
    - *consistant items with normally just one class*

- pre: 3...
  title: |
    Page **Structure**
  md: |
    - header
    - footer
    - generic layout blocks
    - *skeleton including page furniture*

- pre: 4...
  title: |
    Page **Components**
  sub: |
    "most of your styles will be in here"

- pre: 5...
  title: |
    **Overrides**
  sub: |
    avoid as much as possible

- title: Modular **Sizing**
- pre: Components & Internals
  title: 100% **Fluid**

- pre: Fixed widths
  title: Only On **Containers**
  sub: (usually in `em`s)

- title: |
    **`max-width`**`: 100%;`
  sub: (to stop overflow)

- pre: Be
  title: Afraid Of **Heights**
  sub: (the variable axis for text)

- demo: normal-flow
  resize: both

- pre: Up & Down
  title: |
    **Font Size** Constantly

- title: Don't **Overly Sandbox**
  sub: Styles should be *reusable*...

- pre: Focus on
  title: |
    **What** Not **Where**

- code:
    div#page div.teaser ul.products li p.name

- code:
    ul.products p.name

- pre: Don't *re-engineer*
  title: |
    **Seperate** Solutions
  sub: Develop in browsers simultaneously

# OOCSS --------------------

- face: nicolesullivan.jpg
  pre: |
    @stubbornella
  title: |
    **Nicole** Sullivan
  sub: |
    2009 [**Object Oriented CSS**](https://github.com/stubbornella/oocss)

- pre: Working for e.g.
  title: |
    **Yahoo!** & **Facebook**

- pre: How do you *scale CSS*
  title: For **Thousands of Pages**?

- pre: New *pages* should
  title: Rarely Require **New CSS**

- pre: Use a
  title: Component **Library**

- pre: Beyond
  title: Reusable **Components**

- title: Components **Share Patterns**
  sub: Avoid even *unique component styles*

- quote: |
    **A CSS “object” is a repeating visual pattern**,
    that can be *abstracted* into an independent snippet
    of *HTML, CSS, and possibly JavaScript*.
  cite: Nicole Sullivan, [OOCSS](https://github.com/stubbornella/oocss)

- pre: 1. Separate
  title: |
    **Structure** & **Skin**

- pre: Object *Structure*
  title: Minimal & **Reusable**

- pre: Object *Skin*
  title: Multiple **Theme Options**

- pre: Avoid limiting
  title: A **Class** To **One Tag**
  sub: |
    `.text` is better than `p.text` or `div.text`

- pre: 2. Separate
  title: |
    **Container** & **Content**

- title: Be **Flexible**
  md: |
    - **Container** sets `width` \
    - **Content** sets `height`

- pre: Rarely use
  title: |
    **Location-Dependent** Styles

- pre: \"Focus on
  title: |
    **What** Not **Where**\"
  sub: (from *CSS Systems*)

- img: conventions/oocss-media.jpg
  alt: |
    Media.
    Extending objects, a simple example.
    Block with media on left, and text on right.
    Block with media on right, and text on left.
  fit: contain
- img: conventions/oocss-structure.jpg
  alt: |
    Same media blocks,
    with overlayed boxes showing image and text elements
  fit: contain
- lang: html
  code: |
    <div class="media">
      <img class="fixedMedia" src="myImg.png" />
      <div class="text">...</div>
    </div>
- lang: html
  code: |
    <figure class="media">
      <img class="fixedMedia" src="myImg.png" />
      <figcaption class="text">...</figcaption>
    </figure>
- lang: html
  code: |
    <li class="media">
      <img class="fixedMedia" src="myImg.png" />
      <p class="text">...</p>
    </li>
- lang: html
  code: |
    <article class="media">
      <img class="fixedMedia" src="myImg.png" />
      <header class="text">...</header>
    </article>

- pre: |
    *Extend* Objects
  title: By Applying **Multiple Classes**

- lang: html
  code: |
    <div class="media media_reverse">
      <img class="fixedMedia" src="myImg.png" />
      <div class="text">...</div>
    </div>

- pre: Mix & match
  title: |
    **Container** & **Content** Objects
  sub: To create unique components, without unique CSS

- pre: Organized from
  title: |
    **Simple** to **Complex** Tasks

- pre: Mentions
  title: Missing **Scope**
  sub: We'll come back to that…

- pre: 2009-Present
  title: |
    Systems/Objects **Repackaged**
  sub: |
    SMACSS, BEM, Atomic Design, ITCSS, etc...

# BEM

- pre: 2010, *Yandex*
  title: |
    **B**lock **E**lement **M**odifier
  caption: |
    https://en.bem.info/

- pre: Block
  title: |
    **Standalone** Entity
  sub: Meaningful on its own

- pre: Element
  title: |
    Always **Part Of** A Block
  sub: No standalone meaning

- pre: Modifier
  title: |
    **Change** Appearance Or Behavior
  sub: A flag on a block or element

- pre: Not *Size* or *Complexity*
  title: |
    **Self-Sufficiency** & **Belonging**

- title: |
    **Selector** Naming
  code: |
    .block { }
    .block--modifier { }
    .block__element { }
    .block__element--modifier { }

- title: Always **Flat Specificty**
  sub: No `.combined.selectors`

- title: Modifier **Exception**
  code: |
    .block--modifier .block__element { }

- pre: Principle of
  title: Single **Responsibility**

- code: |
    /* Internal & Frame */
    .button {
      text-align: center;
      border: 1px solid black;
    }

- pre: Parent block provides
  title: |
    **External** Positioning

- code: |
    /* External */
    .header__button {
      margin: 30px;
    }

- title: |
    **Open**/**Closed** Principle
  sub: Open to modifier classes, closed to direct changes

- code: |
    /* ⚠ Not This */
    .header .button {
      margin: 30px;
    }

# SMACSS ----------------

- pre: 2011, *Jonathan Snook*
  title: |
    **SMACSS**
  sub: |
    *Scalable* and *Modular* Architecture for CSS

- title: Other **Inspirations**
  md: |
    - Jina's [**CSS Workflow**](https://vimeo.com/15982903)
    - Jeremy Keith's [**Pattern Primer**](https://adactio.com/journal/5028)

- title: Organized on **Category**
  md: |
    1. **Base** (element type)
    2. **Layout** (use `#id`)
    3. **Module** (use `.classes`)
    4. **State** (use `!important`)
    5. **Theme** (i.e. "skin")
  caption: |
    [SMACSS](http://smacss.com/)
    by [Jonathan Snook](https://snook.ca/)

- title: |
    **Layout** Styles
  code: |
    #article { float: left; }
    .l-flipped #article { float: right; }
    .l-fixed #article { width: 600px; }

- quote: |
    Related *elements within a module*
    use the **base name as a prefix**.
  cite: Jonathan Snook
  source: |
    [SMACSS](http://smacss.com/book/categorizing)

- code: |
    .example { }
    .example-caption { }

- title: State **Types**
  sub: |
    `.is-collapsed`, `.msg.is-error`, `.is-hidden`

- code: |
    /* Callout Module */
    .callout { }

    /* Callout Module with State */
    .callout.is-collapsed { }

- code: |
    // in module-name.css
    .mod { border: 1px solid; }

    // in theme.css
    .mod { border-color: blue; }
  caption: |
    Smells like a
    [cute duckling scam](https://www.slideshare.net/nataliedowne/css-systems-presentation/45-colourcss_layoutcss_typographycss_45)?

- pre: Minimize
  title: Depth of **Applicability**

- code: |
    /* 6 generations */
    body.article > #main > #content > #intro > p > b { }
    body.article #intro b { }

# Atomic ----------------

- pre: 2013, *Brad Frost*
  title: |
    **Atomic** Web Design
  sub: A *design process* based on composition
  caption: |
    [Atomic Web Design](https://bradfrost.com/blog/post/atomic-web-design/)

- img: systems/atoms.jpg
  alt: label, input, and button atoms
  fit: contain
  caption: |
    Atoms from Brad Frost's
    [Atomic Web Design](https://bradfrost.com/blog/post/atomic-web-design/)

- img: systems/molecule.jpg
  alt: search form molecule, with label, input, and button
  fit: contain
  caption: |
    Molecules from Brad Frost's
    [Atomic Web Design](https://bradfrost.com/blog/post/atomic-web-design/)

- img: systems/organism.jpg
  alt: banner organism, with logo, navigation, and search
  fit: contain
  caption: |
    Organisms from Brad Frost's
    [Atomic Web Design](https://bradfrost.com/blog/post/atomic-web-design/)

- img: systems/atomic-template.jpg
  alt: wireframe of a full page
  fit: contain
  caption: |
    Templates from Brad Frost's
    [Atomic Web Design](https://bradfrost.com/blog/post/atomic-web-design/)

# itcss ----------------------------

- pre: 2014, *Harry Roberts*
  title: |
    **I**nverted **T**riangle CSS
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)

- img: patterns/itcss-metrics.png
  fit: contain

- img: patterns/un-itcss-metrics.png
  fit: contain
  caption: |
    **Normal Triangle** by ~~Maslow~~ **Miriam**

- pre: |
    Narrow/Broad *Reach*
  title: How **Many** Elements?
- pre: |
    Low/High *Specificity*
  title: What Selector **Weight**?
- pre: |
    Generic to *Explicit*
  title: What **Desired Impact**?
  sub: From `p {}` through `.text-center {}`

- img: patterns/itcss-metrics.png
  fit: contain

- img: conventions/itcss-graph.png
  fit: contain
- img: conventions/itcss-good.png
  fit: contain

- img: patterns/itcss-layers.png
  fit: contain

- img: advanced-css/itcss-layers-note.png
  fit: contain

- code: |
    /* Runs the risk of becoming out of date; not very maintainable. */
    .blue { color: blue; }

    /* Depends on location in order to be rendered properly. */
    .header span { color: blue; }

    /* Too specific; limits our ability to reuse. */
    .header-color { color: blue; }

    /* Nicely abstracted, very portable, doesn’t risk becoming out of date. */
    .highlight-color { color: blue; }
  caption: |
    [CSS Guidelines](https://cssguidelin.es/#naming-conventions)

- title: 2015 **BEMIT**
  sub: Extending the BEM syntax for ITCSS

- title: Name**Spaces**
  md: |
    - Components » `.c-<name>`
    - Objects » `.o-<name>`
    - Utilities » `.u-<name>`
    - States » `.is-<name>`/`.has-<name>`
    - Media » `.<name>@<media>`

- lang: html
  code: |
    <div class="o-media@md  c-user  c-user--premium">
      <img src="" alt="" class="o-media__img@md  c-user__photo  c-avatar" />
      <p class="o-media__body@md  c-user__bio">...</p>
    </div>

# AMCSS

- pre: 2014, *Glen Maddern*
  title: |
    **Attribute Modules** for CSS
  caption: |
    glenmaddern.com/articles/introducing-am-css

- lang: html
  code: |
    <button custom-attribute="anything">...</button>

- pre: Custom *Attributes*
  title: Provide **Namespacing**

- title: Base **Attribute**
  sub: |
    `[am-Button]`

- title: Attribute **Variations**
  sub: |
    `[am-Button~='large']`

- lang: html
  code: |
    <a am-Button>Normal button</a>
    <a am-Button='large'>Large button</a>
    <a am-Button='rounded'>Rounded button</a>
    <a am-Button='large rounded'>Large rounded button</a>

- title: Choosing A **Prefix**
  md: |
    - `data-*` Provides **JavaScript API**
    - `*-*` Ensures **Future-Proofing**

- md: |
    - `[data-attr]` ➡ **Presence** (even if empty)
    - `[data-attr`**`=`**`"..."]` ➡ **Exact** match
    - `[data-attr`**`*`**`="..."]` ➡ **Any** match
    - `[data-attr`**`~`**`="..."]` ➡ **Space**-delimited (like classes)
    - `[data-attr`**`|`**`="..."]` ➡ **Hyphen**-delimited
    - `[data-attr`**`^`**`="..."]` ➡ **Starts** with...
    - `[data-attr`**`$`**`="..."]` ➡ **Ends** with...
    - `[data-attr="..."` **`i`**`|`**`s`**`]` ➡ **Case** sensativity
  caption: |
    More [details on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

# scope ----------------------------

- title: CSS-in-**JS**
  sub: Has *multiple meanings*

- pre: Using *JS Frameworks*...
  title:
    Single File **Components**

- title: Component Styles "**Scoped**"?

- pre: |
    *Scope*
  title: |
    Is About **Ownership**

- pre: Not just
  title: Is-**Inside-Of**
  sub: (no lower boundary)

- pre: But specifically
  title: Is-**Owned-By**
  sub: (clear lower boundaries)

- md: |
    ```html
    <article-component>
      <h2>...</h2>

      <sub-component />

      <footer>...</footer>
    </article-component>
    ```

- md: |
    ```html
    <article-component data-scope='article'>
      <h2 data-scope='article'>...</h2>

      <sub-component data-scope='article' data-scope='sub'>
        <!-- internals of sub only have scope='sub' -->
      </sub-component>

      <footer data-scope='article'>...</footer>
    </article-component>
    ```

- md: |
    ```html
    <style scoped>
      article { }
      h2 { }
      footer { }
    </style>
    ```
- md: |
    ```css
    article[data-scope=article] { }
    h2[data-scope=article] { }
    footer[data-scope=article] { }
    ```
- md: |
    ```html
    <article data-scope="article instance-id">
    ```
    ```css
    h2[data-scope~=article] {
      /* all instances */
    }
    h2[data-scope~=instance-id] {
      /* unique instance */
    }
    ```

- pre: Frameworks
  title: Don't **Organize** CSS

- pre: Always **Scope**
  title: |
    **Single-File** Components

# CSS-in-JS

- title: |
    **Emotion**
  lang: js
  code: |
    render(
      <button css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `} >...</button>
    )

- lang: html
  code: |
    <button class="css-1h3ivcl">...</button>

- pre: JS doesn't understand
  title: |
    **Lengths** & **Colors** &c.

# Atomic CSS

- pre: 2015, **Yahoo!**
  title: |
    **Atomic** CSS
  caption: No relation to **Atomic Design**

- title: CSS is **Painful**

- pre: Not-*quite*
  title: |
    **Inline** Styles

- lang: html
  code: |
    <div class="Bgc(#0280ae.5) C(#fff) P(20px)">...</div>

- lang: html
  code: |
    <div class="Pos(a) Bgc(brandColor) W(columnWidth) H(90px)">...</div>

- title: Tachyons
  lang: html
  code: |
    <body class="bg-green black-70 pa4">
      <h1 class="f1">...</h1>
    </body>

- title: Tailwind CSS
  lang: html
  code: |
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="rounded-lg md:w-56" src="..." alt="">
      </div>
      <div class="mt-4 md:mt-0 md:ml-6">
        <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">...</div>
      </div>
    </div>

- exact: |
    .btn {
      @apply font-bold py-2 px-4 rounded;
    }
    .btn-blue {
      @apply bg-blue-500 text-white;
    }
    .btn-blue:hover {
      @apply bg-blue-600;
    }

- pre: I don't
  title: |
    **Get** It `¯\_`**`(ツ)`**`_/¯`
  caption: Maybe it's a matter of *context*?

- pre: Often called
  title: |
    **Functional** CSS

- pre: CSS is
  title: All About **Context**

- pre: CSS is
  title: All About **Side Effects**

- pre: CSS is never
  title: Functionally "**Pure**"

- pre: It's all
  title: CSS **In The End**

- quote: |
    When you…
    reduce the amount of time you spend writing and editing CSS…
    you must **instead spend more time changing HTML classes**…
  cite: Nicolas Gallagher
  caption: |
    [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)

# cube

- pre: 2020, *Andy Bell*
  title: |
    **CUBE** CSS
  sub: Composition Utility Block Exception
  caption: https://piccalil.li/cube-css/

- pre: Adjusting OOCSS/BEM to
  title: De-Emphasize **Blocks**

- title: |
    **Macro** Before **Micro**

- quote: |
    Most of the work is already done for you
    **with global and high-level styles**.
  cite: Andy Bell

- pre: |
    *Composition*
  title: How Blocks **Flow Together**

- pre: Relies on
  title: |
    "**Intelligent**" Selectors
  sub: No "intervention by the author"
  caption: |
    [Semantic CSS With Intelligent Selectors](https://www.smashingmagazine.com/2013/08/semantic-css-with-intelligent-selectors/)
    by *Heydon Pickering*

- code: |
    .flow > * + * {
      margin-top: var(--flow-space, 1em);
    }

- pre: |
    *Utilities*
  title: Have **One Job**

- code: |
    .wrapper {
      margin-inline: auto;
      padding-inline: 1rem;
      max-width: 60rem;
    }

- code: |
    .bg-primary { background: #ff00ff; }
    .bg-secondary { background: #ffbf81; }

    .color-primary { color: #ff00ff; }
    .color-secondary { color: #ffbf81; }

- pre: |
    *Blocks*
  title: (Like **BEM** But Flexible)

- pre: |
    *Exceptions*
  title: |
    **Variations** To A Block

- code: |
    .card[data-state='reversed'] {
      display: flex;
      flex-direction: column-reverse;
    }

- title: Class **Grouping**
  code: |
    <article
      class="[ card ] [ section box ] [ bg-base color-primary ]"
      data-state="reversed"
    ></article>

# oddbird ----------------------------

- pre: At *OddBird*
  title: We **Mix & Match**
  sub: Ideas from Systems, OOCSS, ITCSS, AMCSS, CUBE…

- title: |
    **Context** Matters

- title: Work In **Layers**
  sub: (roughly ITCSS)

- title: Getting **Started**
  sub: my _recommendations_, your milage may vary

- pre: Establish
  title: A **Layer Order**

- css: |
    /* first & easy to find */
    @layer defaults, components, utilities;
  caption: |
    Start simple, and append as needed…

- html: |
    <style>/* keep this before linked styles */
    @layer defaults, components, utilities;
    </style>
    <link rel="stylesheet" href="…">
  caption: |
    Can live in the HTML, if that keeps it central

- pre: Then
  title: |
    Layer **Dependencies**
  sub: |
    resets, design systems, frameworks, libraries...

- pre: Clearly define…
  title: Each **Tool's Priority**

- pre: Clearly define…
  title: Tool-Specific **Overrides**

- css: |
    @import url(bootstrap.css) layer(bootstrap.vendor);

    @layer bootstrap.overrides {
      /* anything here will override bootstrap */
    }

- pre: As you go
  title: Update **Layer Order**

- pre: Then _Layer_
  title: Overall **Architecture**

- pre: For _flexibility_
  title: Layer **Everything**
  sub: |
    Once we use un-layered styles,
    that's as high as we can go

- pre: Working from
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

- title: |
    Single File **Components**?

- html: |
    /* Vue example */
    <template>…</template>
    <script>…</script>

    <style>
    @layer components {
      /* all our component styles */
    }
    </style>

- title: |
    CSS-**in-JS**?

- title: |
    ¯\\\_(**ツ**)_/¯
  sub: It depends on the tool

- pre: |
    Good Tools
  title: |
    Let Us **Use CSS Features**
  sub: |
    (otherwise '_tools_' become _obstacle_)

- title: |
    ¯\\\_(**ツ**)_/¯
  sub: You do you (no gate-keeping)

- pre: As useful,
  title: Layer **Inside Components**

- title: |
    **Nested** Sub-Layers

- pre: Use _layers_
  title: To **Provide Clarity**
- pre: Use _layers_
  title: To Describe **Intent**

- pen: layers-btn

- title: Convey **Architecture**
- title: Design **Systems**
- title: Tools & **Frameworks**
- title: WordPress **Themes**
- title: Rapid **Prototypes**

- pre: Not Just…
  title: |
    'This is **!mportant**'

- pre: |
    (layers _lower importance_ by default)

- pre: Not an
  title: |
    **All-Or-Nothing** Grenade

- pre: Encourages
  title: |
    **Nuanced** & **Explicit** Priorities

- title: >
    [Miriam.codes](https://miriam.codes/2022/09/06/layers/)

- pre: More *layers*
  title: Using **Custom Properties**
  sub: (with layered fallbacks)

- code: |
    a:link,
    a:visited {
      color: var(--theme-link, var(--link-focus, var(--global-link)));
    }

    a:hover,
    a:focus,
    a:active {
      --link-focus: var(--theme-focus, var(--global-focus));
    }
  caption: |
    [Using Custom Property “Stacks” to Tame the Cascade](https://css-tricks.com/using-custom-property-stacks-to-tame-the-cascade/)

- pre: Prefer
  title: |
    **Global** Styles

- quote: |
    Define some constraints.
    **Let the language work out the details.**
  cite: Keith J Grant
  caption: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)

- pre: Use *Built-In* Attributes
  title: When **Available**
  sub: (We ❤ "intelligent" selectors)

- title: is-**hidden**
  sub: |
    *`[aria-hidden]`* & *`[hidden]`* & *??*

- title: is-**collapsed**
  sub: |
    *`[aria-expanded]`* & *`[aria-pressed]`*

- pre: Use *Utility Classes*
  title: Where **Meaningful** & **Common**
  sub: |
    **`.visually-hidden`** | **`.elide`**

- pre: DRY Code
  title: |
    **D**on't **R**epeat **Y**ourself
  sub: |
    *`.warning`* `{ border-color: red; }`

- pre: DSfP
  title: |
    **D**on't **S**tretch **f**or **P**atterns
  sub: |
    *`.bc-r`* `{ border-color: red; }`

- pre: Combine *Tokens*
  title: Into **Themes**

- code: |
    [data-theme] {
      background-color: var(--theme-bg, var(--global-bg, transparent));
      color: var(--theme-color, var(--global-color, inherit));
    }

- code: |
    [data-theme='light'] {
      --theme-bg: var(--neutral-light);
      --theme-color: var(--neutral-dark);
      --theme-link: var(--primary-dark);
    }

    [data-theme='dark'] {
      --theme-bg: var(--neutral-dark);
      --theme-color: var(--neutral-light);
      --theme-link: var(--primary-light);
    }

- pre: Attribute-namespace
  title: |
    For **Related** Classes
  sub: |
    `.is-success` | `.is-error` **➡** **`[data-msg="success`** `|` **`error"]`**

- pre: A *Wider* 🌊 *Cascade*
  title: Allows **More Nuance** in Layering

# w3c

- pre: |
    *W3C* is working to
  title: |
    **Update** & **Extend** The Cascade

- title: More 🎯 **Nuance**
  sub: e.g. `:where()`

- title: |
    **Custom** Layers
  caption: |
    [The proposal](https://github.com/w3c/csswg-drafts/issues/4470)

- code: |
    @layer reset {
      *, ::before, ::after { box-sizing: border-box; }
      html { line-sizing: normal; }
      body { margin: 0; }
    }

    @layer base { }
    @layer components { }
    @layer utilities { }

- title: The Cascade is **Important**
- pre: The Cascade is
  title: Not **Going Away**

- title: The Cascade is **Useful**
  sub: To **guide** our conventions

- quote: |
    CSS is **unlike anything else**…
    designed for the realities
    of a **flexible, multilingual, multi-device** web.
  cite: Rachel Andrew
  caption: |
    [The Way We Talk About CSS](https://rachelandrew.co.uk/archives/2018/10/04/the-way-we-talk-about-css/)
---
