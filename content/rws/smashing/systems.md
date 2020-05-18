---
title: Naming & Organizing
talk: CSS **Organizing Conventions**
date: 2020-05-21
slides:

# intro -------------------------

- pre: ~2007
  title: Major **Grid Frameworks**
  sub: Blueprint, 960gs, etc…

- img: layouts/12-after.jpg
  alt: an element on a 12-column grid
  caption: Add a gutter on the right margin...
  fit: contain

- title: |
    `column` **`col6of12`** `last`

- pre: 👍 Provide
  title: Consistent **Patterns**

- pre: 👍 Handle
  title: Float **Hacks**

- pre: 👎 Framework
  title: Override **Hell**
  caption: |
    I make too much of my living
    fixing this problem…

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

- title: |
    *ClearLeft*
  md: |
    - High **quality** code
    - On tight **deadlines**
    - For **handover** to client developers
  caption: |
    This matches our experience at [OddBird](https://oddbird.net)

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

- pre: Ordering 
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
    most of your styles will be in here *[??]*

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

- title: Look for **Patterns** 

- pre: Don't Overly *Sandbox*
  title: Focus on **What** Not **Where**

- pre: Up & Down
  tile: |
    **Font Size** Constantly

- pre: Always be  
  title: |
    **Afraid** of **Heights**
  sub: we never know how tall things are...

- pre: Beware of
  title: |
    "Cute Duckling **Scams**"
  sub: |
    **`colors.css`** | **`layout.css`** | **`typography.css`**

# ---
# demo: codeConcerns
# ---

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
    **A CSS “object” is a repeating visual pattern**,
    that can be abstracted into an independent snippet
    of **HTML, CSS, and possibly JavaScript**.
  cite: Nicole Sullivan, [OOCSS](https://github.com/stubbornella/oocss)

- title: |
    **Component** Driven

- pre: 1. Separate 
  title: |
    **Structure** & **Skin**

- pre: Object *Structure*
  title: Minimal & **Reusable**
  sub: |
    "using classes to name your objects & their components"

- pre: Object *Skin*
  title: Multiple **Theme Options**
  sub: |
    "a large amount of **visual variety** without much code"

- pre: Separate 
  title: |
    **Container** & **Content**
  sub: |
    "Rarely use **location-dependent** styles"  
  caption: |
    BEM is what happens
    when you change "rarely" to "never"

- pre: Also from *OOCSS*...
  title: |
    **Media Object**

- todo: demo media object?

# other systems ----------------

- todo: key points of SMACSS, BEM, Atomic Design?

- pre: 2009-Present
  title: |
    Systems/Objects **Repackaged**
  sub: |
    SMACSS, BEM, Atomic Design, ITCSS, etc...

- pre: All are *Useful*
  title: |
    Combine **What Works**

# Cascade Aligned ------------------------------

- pre: CSS and...
  title: Programming **Paradigms**

- pre: |
    CSS as 
  title: |
    **Object-Oriented**

- quote: |
    **Objects** are instances of *classes*, 
    which also determine their *types*.
  cite: |
    [Wikipedia](https://en.wikipedia.org/wiki/Object-oriented_programming)

- title: |
    `article`**`.post`**
  sub: |
    Instance of **`.post`** class, type **`article`**

- title: Object **Composition**
  sub: |
    `.person` class can include `.name` & `.address` classes

- pre: |
    CSS as  
  title: |
    **Functional**

- quote: |
    A **declarative and composable** style, 
    where *small functions are combined* in a modular manner. 
  cite: |
    [Wikipedia](https://en.wikipedia.org/wiki/Functional_programming)

- title: |
    `p.alert`**`.error`**
  sub: |
    The result of passing `p` through `.alert` & `.error` functions

- pre: But CSS
  title: Is **Fundamentally Different**
  sub: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)

- title: |
    **Cascade Aligned** Programming

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

- pre: We Provide...
  title: |
    **Hints** & **Suggestions**

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

- pre: Express
  title: What You **Mean**
  sub: |
    Not *whatever mimics the mockup in Chrome*

- pre: Clear *Semantics*
  title: Help the **Browsers**
  sub: Adjust to context

- pre: Clear *Semantics*
  title: Help the **Users**
  sub: With accessibility & other APIs

- pre: Clear *Semantics*
  title: Help other **Developers**
  sub: Read & understand & maintain the code

# organizing -----------------------------------

- title: |
    **Organizing** Conventions

- pre: CSS *Systems*
  title: Based on **Specificity**
  md: |
    1. **Elements**
    2. **Classes**
    3. **IDs**

- pre: |
    *Atomic* Design
  title: Based on **Complexity**
  md: |
    1. **Atoms** (element type)
    2. **Molecules**
    3. **Organisms**
    4. **Templates**
    5. **Pages**
  caption: |
    [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
    by [Brad Frost](https://bradfrost.com/)

- pre: |
    *SMACSS*
  title: Based on **Category**
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

- pre: |
    *ITCSS*
  title: Based on **Reach**
  md: |
    1. **Settings**
    2. **Tools**
    3. **Generic**
    4. **Elements**
    5. **Objects** (reusable structures)
    6. **Components** (recognisable UI)
    7. **Trumps**
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    by [**Harry Roberts**](https://twitter.com/csswizardry)

- pre: CSS *Systems* + *OOCSS*
  title: Updated **with Pictures**

- img: patterns/itcss-metrics.png
  fit: contain

- img: patterns/un-itcss-metrics.png
  fit: contain
  caption: |
    **Normal Triangle** by ~~Maslow~~ **Miriam**

- img: patterns/itcss-layers.png
  fit: contain

- img: advanced-css/itcss-layers-note.png
  fit: contain

# oddbird ----------------------------

- pre: OddBird
  title: Based on **Reach & Complexity**
  md: |
    1. **Tools**
    2. **Config**
    4. **Initial**
    5. **Patterns**
    6. **Layouts**
    7. **Components**

- pre: CSS *Systems* + *OOCSS* +
  title: |
    **ITCSS** + **Atomic Design** + ...

- pre: Tools
  title: Used **Across Projects**
  sub: Sass, Accoutrement, Herman, Cascading Colors...

- pre: Config
  title: Design **Tokens**
  sub: Coined by [Jina](https://twitter.com/jina)

- title: Tokens by **Purpose**
  sub: |
    **`_colors.scss`** | **`_sizes.scss`** | **`_fonts.scss`**

- pre: Avoid the
  title: Sass **Duckling Scam**
  sub: | 
    **`_variables.scss`** | **`_functions.scss`** | **`_mixins.scss`**

- pre: |
    *Combined* as a
  title: Single **Sass Module**
  sub: With *no CSS output*

- pre: Initial
  title: Global & Element **Defaults**
  sub: Including *resets* & *custom properties*

- pre: Patterns
  title: Reusable **Objects** & **Skins**
  sub: The majority of our code base...

- pre: Layouts
  title: Specific **Templates**

- pre: Components
  title: Specific **Functionality**
  sub: Often composed of existing *patterns*

- pre: Layer *Folders*
  title: With **Sass Partials**

- todo: Expand on Vue/React Structures...

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

- todo: more on scoping

# utilities -----------------------------

- todo: more on tailwind

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

- pre: Use *Utility Classes*
  title: For **Meaningful** Utilities
  sub: |
    **`.sr-only`** | **`.clearfix`** | **`.elide-text`**

# namespace ------------------

- pre: SMACSS 
  title: Layer **Prefixes**
  sub: |
    *`.l-`*`<layout>` | *`.is-`*`<state>`

- title: State **Types**
  sub: |
    `.is-collapsed`, `.msg.is-error`, `.is-hidden`

- title: is-**collapsed**
  sub: |
    `[aria-expanded]` & `[aria-pressed]`

- pre: Namespace
  title: |
    **Related** Selectors
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

- pre: Use *Built-In* Attributes
  title: When **Available**

- title: is-**hidden**
  sub: |
    *`[aria-hidden]`* & *`[hidden]`* & *??*

- title: Visual **Only**
  pre: |
    *`[aria-hidden]`*

- title: Hidden **Everywhere**
  pre: |
    *`[hidden]`*

- pre: |
    *????*
  title: Screen Reader **Only**
  sub: |
    *`.sr-only`* 

- pre: |
    *????*
  title: Screen Reader **Only**
  sub: |
    *`[data-hidden='screen']`* | *`[data-hidden='small-screen']`*
---
