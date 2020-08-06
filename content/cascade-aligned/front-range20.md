---
venue: Front Range Front-End
date: 2020-08-06
quote:
  text: |
    Our medium is not done.
    Our medium is still 
    **going through radical changes**.
  cite: Jen Simmons, *Designing with Grid*
slides:

# intro -------------------------

- pre: What is
  title: |
    **Cascade Aligned** Programming?

- title: |
    `¯\_`**`(ツ)`**`_/¯`
  sub: We're here to *figure that out*...

- title: |
    **Object Oriented** CSS \
    & **Functional** CSS
  sub: Developed from *non-cascading* languages

- title: The **Cascade** 
  sub: Is *fundamentally* different

# cascade -------------------------

- pre: Understand the 
  title: (wierd) **Mental Model**

- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top
  caption: |
    [WWW HyperMedia Browser](https://worldwideweb.cern.ch/browser/)
    & *Editor*

- img: no-harm/cern-next.jpg
  alt: NeXT computer with a worn-out sticker
  caption: The original NeXT-based server

- img: process/ibm-pc.jpg
  alt: Old IBM desktop
  position: top

- quote: |
    It is required that HTML be 
    **a common language between all platforms**...
  cite: WWW Project

- img: dynamic-css/devices.jpg
  alt: A zillion different devices of all sizes (original)

- quote: |
    ...This implies no device-specific markup,
    **or anything which requires control over fonts or colors**.
  cite: WWW Project

- title: 😬

- img: no-harm/line-mode.jpg
  alt: The second browser, a text-only terminal
  position: top
  caption: |
    [Line Mode Browser](http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html), 
    developed by **Nicola Pellow**

- quote:
    WWW parsers should 
    **ignore tags** which they do not understand, 
    and **ignore attributes** which they do not understand 
    of tags which they do understand.
  cite: WWW Project
  caption: Both *forward* & *backward* compatible

- pre: Browser Support
  title: is **Not A Binary**

# css -------------------------

- pre: 1993-1994…
  title: Style **Wars**
  sub: w3.org/Style/History/

- title: |
    **Cascading** ~~HTML~~ **style sheets**
  sub: |
    *Håkon Lie*, October 1994
  caption: w3.org/People/howcome/p/cascade.html

- pre: Need to support
  title: |
    Style **Systems**

- md: |
    ```html
    <p><font color="rebeccapurple"> … </font><p>
    <p><font color="rebeccapurple"> … </font><p>
    <p><font color="rebeccapurple"> … </font><p>
    <p><font color="rebeccapurple"> … </font><p>
    <p><font color="rebeccapurple"> … </font><p>
    <p><font color="rebeccapurple"> … </font><p>
    ```

- quote: |
    A simple mapping
    **between HTML elements and presentation hints**.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)

- md: |
    ```css
    p {
      color: rebeccapurple; 
    }
    ```
    ```html
    <p> … </p>
    <p> … </p>
    <p> … </p>
    ```

- title: CSS **Selectors**
  md: |
    1. *Inline* `style="…"`
    2. *Unique* `#ID`s
    3. *Reusable* `.class`es & `[attributes]`
    4. *Element* `type`s
    5. *Universal* `*`

- md: |
    ```css
    button          { background: gray; }
    .action         { background: darkblue; }
    [type=“submit”] { background: darkgreen; 
                      background: var(--submit); }
    #send           { background: maroon; }
    ```
    ```html
    <button    style=“background: darkviolet;”
      id=“send” class=“action” type=“submit”>…</button>
    ```

- pre: 💥 Conflict!
  title: |
    Mutliple **`background`** \
    On The Same **`<button>`**

- pre: For Browsers...
  title: |
    Every *Property* \
    of Every *Element* \
    **Must Have** a *Single Value*

- pre: The 🌊 **Cascade**
  title: Resolves 💥 **Value Conflicts**

# origins -------------------------

- section: 🗺 Style **Origins**

- quote: |
    This proposal tries to 
    **soften the tension** between the *author* and the *reader*.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)

- quote: |
    **An ordered list (cascade) of style sheets** … 
    can be referenced from the same document.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)

- pre: Potentially
  title: From **Different** 🗺 **Origins**...
  sub: |
    🖥 *User Agent* (Browser),
    👥 *User*,
    or 
    🎨 *Author*

- title: Balance of **Intent**

- quote: |
    *The author* often wants to give the documents 
    a **distinct look and feel**, 
    the *user* will set *preferences* to make 
    **all documents appear more similar**.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
  
- quote: |
    The **user/browser** specifies *initial preferences* 
    and **hands the remaining influence over to the document**.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)

- title: Stacked in **Layers**
  md: |
    1. 🎨 **Author**
    2. 👥 **User**
    3. 🖥 **User Agent**

- title: Balance of **Power**

- quote: |
    If conflicts arise **the user should have the last word**, 
    but one should also allow the author to attach **style hints**.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)

- pre: The *Real Reason* For
  title: ❗**importance**

- md: |
    1. ==❗🖥 User Agent **Important**==
    2. ==❗👥 User **Important**==
    3. ==❗🎨 Author **Important**==
    4. 🎨 Author Styles
    5. 👥 User Preferences
    6. 🖥 User Agent Defaults

- title: Balance of **Support**

- quote: |
    Provide **hints** that the browser **may or may not use**.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)

- title: Design for **The Unknown**
  sub: |
    *Sizes*, *Interfaces*, *Preferences*, *Content*, &c...
    
- quote: |
    There are **too many variables to consider.** 
    The point of CSS is to make it so you don’t have to worry about them all. 
    **Define some constraints. 
    Let the language work out the details.**
  cite: Keith J Grant
  caption: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)

- pre: There's always
  title: A **Fallback** Option

# specificity -------------------------

- section: 🎯 Selector **Specificity**

- title: A **Layering System**
  
- pre: From...
  title: |
    **Broad** Patterns \
    to **Specific** Overrides

- title: Different **Intents**
  md: |
    - `universal/type` » Global Defaults
    - `attrs` » Common Patterns
    - `attrs > attrs` » Reusable Components
    - `ID` » Singular Overrides

- pre: Each *Selector* has a *Weight* 
  title: Based on **How Specific** It Is

- pre: Often Represented by *Numbers*
  title: Using **Factors of 10**
  sub: (but I don't recommend it)
- md: |
    - *`1000`* -- Inline `style`s
    - *`100`* -- Unique `ID`s
    - *`10`* -- Reusable `class`es & `attributes`
    - *`1`* -- Element `type`s
    - *`0`* -- Universal `*`
    
    ```css
    /* 1  +  10  +     10      + 0  == 21 */
    button.action[type=“submit”] * {   …   }
    ```
- title: By That **Logic**...
  md: |
    ```css
    /* 10 +  10 +  10 +  10 +  10 +  
       10 +  10 +  10 +  10 +  10  = 100 */
    .class.class.class.class.class
    .class.class.class.class.class {  …  }
    
    /* 100 = 100 */
    #id    {  …  }
- title: |
    `10`**`*`**`10`**`!=`**`100` 
- title: |
    👎 **Don't Bother**
  sub: small numbers are *easier*
- pre: More Like *Versioning*
  title: |
    v3.**9**.5
  caption: |
    3 ids, 9 classes, 5 element types?
- pre: More Like *Versioning*
  title: |
    v3.**10**.5
  caption: |
    3 ids, *10* classes, 5 element types?
- pre: More Like *Versioning*
  title: |
    v3.**11**.5
  caption: |
    3 ids, *11* classes, 5 element types?
- pre: More Like *Versioning*
  title: |
    v3.**462**.5
- pre: More Like *Versioning*
  title: |
    v3.**462**.5 `<` **v4.0**
- pre: Only the *First Number* Matters
  title: |
    **2**.5.1 `or` **1**.12.2 `or` **1**.3.42
- pre: Only the *First Number* Matters
  title: |
    **2.5.1** ~~`or` 1.12.2 `or` 1.3.42~~
- pre: Move on *When Tied*
  title: |
    **1**.12.2 `or` **1**.3.42
- pre: Move on *When Tied*
  title: |
    1.**12**.2 ~~`or` 1.**3**.42~~

- img: cascade/coins.jpg
  alt: Coin-sorter using different-sized column slots
- img: cascade/coins-empty.jpg
  alt: Coin-sorter, with empty columns crossed out
- img: cascade/coins-final.jpg
  alt: Coin-sorter, all but the largest column crossed out

# Order -------------------------

- section: ⏭ Source **Order**

- title: The **Final Declaration** Wins
  sub: (unless it doesn't)

- md: |
    ```css
    [type=“submit”] { 
      background: darkgreen; 
      background: var(--submit); 
    }
    ```

# inheritance -------------------------

- pre: The 🌊 *Cascade*
  title: Filters Out **Extra Values**

- pre: 🧬 *Inheritance*
  title: Fills In **Missing Values**

- pre: 🧬 *Inheritance* helps us...
  title: Paint in **Broad Strokes**

- pre: 🧬 *Inheritance* helps us...
  title: Keep code **DRY**

# constraints -------------------------

- pre: CSS is
  title: Doing The **Impossible**

- quote: |
    CSS is **unlike anything else**… 
    designed for the realities 
    of a **flexible, multilingual, multi-device** web.
  cite: Rachel Andrew, 2018
  caption: |
    [The Way We Talk About CSS](https://rachelandrew.co.uk/archives/2018/10/04/the-way-we-talk-about-css/)

- quote: |
    *Graphic design* of **unknown content** 
    on an **infinite and unknown canvas**, 
    across **operating systems, interfaces, & languages**...
  cite: me, on twitter...

- quote: |
    There are **too many variables to consider.** 
    The point of CSS is to make it so you don’t have to worry about them all. 
    **Define some constraints. 
    Let the language work out the details.**
  cite: Keith J Grant
  caption: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)

- title: CSS is **Resilient**

- quote:
    WWW parsers should 
    **ignore tags** which they do not understand, 
    and **ignore attributes** which they do not understand 
    of tags which they do understand.
  cite: WWW Project
  caption: Both *forward* & *backward* compatible

- md: |
    ```css
    [type=“submit”] { 
      background: darkgreen; 
      background: var(--submit); 
    }
    ```

- title: Font **Stacks**
  sub: |
    `font-family: `*`Consolas`*`, `*`Menlo`*`, `*`'Courier New'`*`, `*`monospace`*`;`

- title: |
    **`@Supports`** `{ … }`

- pre: |
    *Cascade Aligned* Programming...
  title: Is a **Progressive Enhancement**

- title: CSS is **Declarative**
  sub: Relying on *Meaning* & *Intent*

- title: |
    `16px `**`!=`**` 1em`

- title: |
    `1fr `**`!=`**` 50%`

- pre: We provide...
  title: |
    **HINTS** & **SUGGESTIONS**

- pre: |
    *Cascade Aligned* Programming...
  title: Is a **Progressive Enhancement**

- title: CSS is **Contextual**

- pre: Because...
  title: |
    **Design** is Contextual

- title: |
    `@media (`**`min-width: 30em`**`)`

- pre: |
    *Cascade Aligned* Programming...
  title: Has to **Adapt** & **Respond**

- pre: Also because...
  title: |
    We're **Collaborating**

- title: |
    `@media (` \
      **`prefers-color-scheme: dark`** \
    `)`

- pre: |
    *Cascade Aligned* Programming...
  title: Respects **Other Origins**

- pre: The *Cascade* 
  title: Is About **Balancing Concerns**

- pre: Balancing
  title: |
    **Branding** with **Preferences**

- pre: Balancing
  title: |
    **Systems** with **Details**

- pre: Balancing
  title: |
    **Context** with **Modularity**

- pre: Balancing
  title: |
    **Control** with **Resilience**

- pre: We Define...
  title: |
    Minimal **Constraints**

- pre: We Communicate...
  title: |
    **Relationships** & **Intent**

- pre: CSS Provides...
  title: |
    **Relative** Units

- pre: CSS Provides...
  title: |
    **Intrinsic** Sizing

- pre: CSS Provides...
  title: |
    **Normal** Flow

- pre: We express
  title: |
    **Hints** & **Suggestions**

- pre: Clear *Semantics*
  title: Help the **Browsers**
  sub: Make informed decisions

- pre: Help the *Browsers*
  title: Help the **Users**

- title: Help other **Developers**
  sub: Read & understand & maintain the code

- quote:
    It takes craft to **set up the circumstances** that are 
    **simple and yet contain the ambiguities** 
    and the incongruity of human experience.
  cite: Anne Bogart
  caption: A Director Prepares

# others -------------------------

- title: What Have **We Tried**?

# css systems -------------------------

- face: nataliedowne.jpg
  pre: |
    @natbat
  title: |
    **Natalie** Downe
  sub: |
    2008 [**CSS Systems**](http://www.slideshare.net/nataliedowne/css-systems-presentation)

- img: patterns/systems.png
  alt: |
    Writing Maintainable CSS by Natalie Downe | Barcamp London 5
    28th September 2008
  caption: |
    [Download the pdf with slides & notes](http://clearleft.s3.amazonaws.com/2008/cssSystems_notes_small.pdf)
  fit: contain

- pre: ~2007
  title: Major **Grid Frameworks**
  sub: Blueprint, 960gs, etc…

- title: Central **Class Library**
  sub: |
    `<div class="` **`column col6of12 last`** `" >`

- title: |
    One **Universal** Grid

- title: |
    Hard to **Customize** 

- quote: |
    CSS frameworks **decrease the maintainability of code**.
  cite: Natalie Downe

- pre: CSS *Systems*
  title: |
    **Conventions** `>` Frameworks

- md: |
    - **Shared** Vocabulary
    - **Reusable** Patterns
    - **Personalized** Styles

- pre: CSS Ordering 
  title: Based on **Specificity**

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

- pre: |
   *Layouts* with
  title: |
    **Fluid** Internals
  caption: |
    Before *Media Queries* & *RWD™*

- md: |
    ```css
    #container {
      width: /* em values preferred */;
      max-width: 100%;
    }
    .any-internal { /* % values only */ }
    ```

- title: Don't **Overly Sandbox**
  sub: Styles should be *reusable*...

- pre: Focus on
  title: |
    **What** Not **Where**

- md: |
    ```css
    div#page div.teaser ul.products li p.name { … }
    ```

- md: |
    ```css
    .products .name { … }
    ```

- pre: Up & Down
  title: |
    **Font Size** Constantly

- pre: Dont *Re-engineer* 
  title: |
    **Seperate** Solutions
  sub: For individual browsers

- md: |
    1. **Define** it
    2. **Develop** it
    3. **Maintain** it
    4. **Communicate** it

# OOCSS --------------------

- face: nicolesullivan.jpg
  pre: |
    @stubbornella
  title: |
    **Nicole** Sullivan
  sub: |
    2009 [**Object Oriented CSS**](https://github.com/stubbornella/oocss)

- quote: |
    Code **re-use** is almost non-existant.
  cite: Nicole Sullivan, [OOCSS](https://www.slideshare.net/stubbornella/object-oriented-css/)

- pre: Leads to *bloat*...
  title: Code Size **1:1 with Components**

- quote: |
    **A CSS “object” is a repeating visual pattern**,
    that can be abstracted into an independent snippet
    of **HTML, CSS, and possibly JavaScript**.
  cite: Nicole Sullivan, [OOCSS](https://github.com/stubbornella/oocss)

- pre: Systemic design
  title: Beyond **Reusable Components**

- title: |
    Components **Share Patterns**
  sub: More *layers* of design abstraction...

- pre: 1. Separate 
  title: |
    **Structure** & **Skin**

- pre: Object *Structure*
  title: Minimal & **Reusable**

- pre: Object *Skin*
  title: Multiple **Theme Options**

- pre: Separate 
  title: |
    **Container** & **Content**
  sub: |
    "Rarely use **location-dependent** styles"  
  caption: |
    BEM is what happens
    when you change "rarely" to "never"

# CSS is OO ----------------

- pre: CSS clearly uses
  title: |
    Object-Oriented **Language**

- title: We Style **Objects**
  sub: Individual *elements* on the page
  
- pre: Objects can...
  title: Belong To a **Class**

- pre: Objects can...
  title: Have Individual **Attributes**

- title: Object **Composition**
  sub: |
    **`.person`** class contains **`.name`** & **`.address`** classes

# Atomic ----------------

- pre: Enter *Brad Frost*...
  title: |
    **Atomic Web Design**
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

- pre: 2009-Present
  title: |
    Systems/Objects **Repackaged**
  sub: |
    SMACSS, BEM, Atomic Design, ITCSS, etc...

# SMACSS ----------------

- title: |
    **SMACSS** `+=` OOCSS

- pre: |
    *SMACSS*
  title: Organized on **Category**
  md: |
    1. **Base** (element type)
    2. **Layout** (use `#id`)
    3. **Module** (use `.classes`)
    4. **State** (use `!important`)
    5. **Theme** (i.e. "skin")
  caption: |
    [SMACSS](http://smacss.com/)
    by [Jonathan Snook](https://snook.ca/)

# itcss ----------------------------

- title: |
    **ITCSS** `+=` CSS Systems
  sub: Updated *with OOCSS & pictures*
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    by [**Harry Roberts**](https://twitter.com/csswizardry)

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

- img: patterns/itcss-layers.png
  fit: contain

- img: advanced-css/itcss-layers-note.png
  fit: contain

# oddbird ----------------------------

- pre: OddBird mix-and-match...
  title: Organized by **Reach & Complexity**
- md: |
    1. **Tools**
    2. **Config**
    4. **Initial**
    5. **Patterns**
    6. **Layouts**
    7. **Components**

- pre: CSS *Systems* + *OOCSS* +
  title: |
    **ITCSS** + **Atomic Design** + ...

# scope ----------------------------

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
  title: Is-**Owened-By**
  sub: (clear lower boundaries)

- pen: Isolation Donut
  id: mdbGGwZ

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
      article { ... }
      h2 { ... }
      footer { ... }
    </style>
    ```
- md: |
    ```css
    article[data-scope=article] { ... }
    h2[data-scope=article] { ... }
    footer[data-scope=article] { ... }
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

# naming -----------------------------

- title: |
    **Naming** Conventions
  sub: Not explicit in most...

- pre: BEM
  title: |
    **B**lock **E**lement **M**odifier
  caption: |
    http://getbem.com/naming/

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
  sub: |
    *`.block`* » *`.block__element`* » *`.block__element--modifier`*

- pre: 👍 Clarity
  title: Of **Relationship Structure**

- pre: 👎 Flattening
  title: Of **Selector Structure**
  sub: Everything is *equal specificity*

- pre: 👉 Combine *Selectors*
  title: Match **Scope** & **Specificity**
  sub: In **meaningful** ways

# namespace ------------------

- pre: SMACSS 
  title: Layer **Prefixes**
  sub: |
    *`.l-`*`<layout>` | *`.is-`*`<state>`

- title: State **Types**
  sub: |
    `.is-collapsed`, `.msg.is-error`, `.is-hidden`

- pre: Use *Built-In* Attributes
  title: When **Available**

- title: is-**hidden**
  sub: |
    *`[aria-hidden]`* & *`[hidden]`* & *??*

- title: is-**collapsed**
  sub: |
    *`[aria-expanded]`* & *`[aria-pressed]`*

- pre: Customize to
  title: |
    Namespace **Related** States
  sub: |
    `.is-success` | `.is-error` **➡** **`[data-msg="success`** `|` **`error"]`**
  caption: |
    `data` is optional, `-` should be enforced

- title: Base **Attribute**
  sub: |
    `[data-btn]`
- title: Attribute **Variations**
  sub: |
    `[data-btn~='success']`

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

# utilities -----------------------------

- pre: Recent trends...
  title: Atomic CSS » **Functional CSS**

- pre: We've always had
  title: |
    **Utility** Classes
  sub: From `.clearfix` to `.column3of12` and `.sr-only`

- title: Utilities **Only**?
  md: |
    ```html
    <div class="md:flex">
      <div class="md:flex-shrink-0">
        <img class="rounded-lg md:w-56" src="…" alt="">
      </div>
      <div class="mt-4 md:mt-0 md:ml-6">
        <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">…</div>
        <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">…</a>
        <p class="mt-2 text-gray-600">…</p>
      </div>
    </div>
    ```

- pre: |
    CSS can be  
  title: |
    **Functional** In Some Ways

- title: |
    `p.alert`**`.error`**
  sub: |
    Composed result of `p`, `.alert`, & `.error` functions

- pre: Selectors can
  title: Never Be "**Pure**"

- pre: CSS is
  title: All About **Context**

- pre: CSS is
  title: All About **Side Effects**

- pre: Going *all-in*
  title: Only **Moves The Problems**
  sub: From CSS to HTML

- pre: Use *Utility Classes*
  title: For **Meaningful** Utilities
  sub: |
    **`.sr-only`** | **`.clearfix`** | **`.elide-text`**

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

# conclusion -----------------------------

- pre: What is
  title: |
    **Cascade Aligned** Programming?

- pre: Express
  title: Layers of **Intent**

- pre: A *Wider* 🌊 *Cascade*
  title: Allows **More Nuance** in Layering

- pre: |
    *W3C* Should
  title: |
    **Update** & **Extend** The Cascade

- title: More 🎯 **Nuance**
  sub: e.g. `:where()`

- pre: |
    "scoped" styles?
  title: |
    **Custom Elements** \
    & **Web Components**

- title: |
    **Custom Author** Layers?
  caption: |
    [The proposal](https://github.com/w3c/csswg-drafts/issues/4470)

- from: itcss
  use: layers

- title: CSS **Custom Properties**
  md: |
    ```css
    button {
      background: var(--btn-state, var(--btn-type, var(--btn-default)));
    }
    ```
  caption: |
    [Using Custom Property “Stacks” to Tame the Cascade](https://css-tricks.com/using-custom-property-stacks-to-tame-the-cascade/)

- title: The Cascade is **Important**
- title: The Cascade is **Useful**
- pre: The Cascade is 
  title: Not **Going Away**
- title: Learn To **Use It**

---
