---
venue: CSS Day, NL
date: 2025-06-05

proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
  qr: https://www.w3.org/People/howcome/p/cascade.html

slides:

# <!--
# .####.##....##.########.########...#######.
# ..##..###...##....##....##.....##.##.....##
# ..##..####..##....##....##.....##.##.....##
# ..##..##.##.##....##....########..##.....##
# ..##..##..####....##....##...##...##.....##
# ..##..##...###....##....##....##..##.....##
# .####.##....##....##....##.....##..#######.
# -->

- pre: How many of you
  title: |
    Wrote CSS **Before Nesting**?
  sub: (Baseline 2023)

- pre: How many of you
  title: |
    Wrote CSS **Before Nesting** \
    and **Color-Mix()**?
  sub: (Baseline 2023)

- pre: How many of you
  title: |
    ~~Wrote CSS **Before Nesting**~~ \
    ~~and **Color-Mix()**~~ \
    Wrote CSS **Before Custom Props**?
  sub: (Baseline 2017)

- pre: How many of you
  title: |
    ~~Wrote CSS **Before Nesting**~~ \
    ~~and **Color-Mix()**~~ \
    ~~Wrote CSS **Before Custom Props**~~ \
    ~~Wrote CSS **Before Sass**~~ \
    ~~Built Sites **Before CSS**~~ \
    ~~Built Sites **Before \<font>**~~ \
    Are **Really Old**?

# <!--
# ..######...#######..##.....##.########..##.......########.##.....##
# .##....##.##.....##.###...###.##.....##.##.......##........##...##.
# .##.......##.....##.####.####.##.....##.##.......##.........##.##..
# .##.......##.....##.##.###.##.########..##.......######......###...
# .##.......##.....##.##.....##.##........##.......##.........##.##..
# .##....##.##.....##.##.....##.##........##.......##........##...##.
# ..######...#######..##.....##.##........########.########.##.....##
# -->

- pre: Things...
  title: Used to be **Simpler**

- title: |
    No **Deep-Nesting** \
    No **Color Spaces** \
    No **Variables** \
    No **Build Steps**…


- known: img-history-line-mode
  caption: No CSS, if we go far enough back!

- pre: Things were _also_...
  title: Way **More Complicated**

- img: mixins/jam.jpg
  alt: >
    Inspecting the 1996 SpaceJam site
    to show a complex table layout
    with extra spacers to make a circle
  caption: >
    [SpaceJam](https://www.spacejam.com/1996/), 1996

- img: mixins/slice.png.webp
  alt: >
    Exporting slices of an airplane takeoff
    from Photoshop,
    we can see the DreamWeaver table code
    that will be generated
  fit: contain
  position: center

- caption: circa **2012**
  title: lol, **Grid Systems**
  css: |
    .col2of6 {        /* where is col2of6? */
      float: left;    /* why do we float it? */
      display: inline;      /* what? */
      width: 31.707%; /* where’s that % from? */
      margin-right: 2.439%; /* another one? */
    }

- img: mixins/first-talk.jpg
  alt: >
    Keynote slide -
    bold maroon text on manilla -
    Meaningful CSS
    for a Humane Web
    by [miriam is scribbled over top my old name]
  position: center
  caption: >
    Meaningful CSS, **2012** (my first talk)

- img: mixins/meaning.jpg
  alt: >
    2012 slide -
    CSS is awesome, but it lacks meaningful abstractions.
  position: center
  caption: >
    Meaningful CSS, **2012** (my first talk)

- pre: The _Meaning_ Problem…
  title: |
    **Repetition** is hard to maintain. \
    **Relationships** are hidden. \
    **Reasons** are unclear.

- img: mixins/vars.jpg
  alt: >
    2012 slide -
    CSS variables module level 1
    w3c working draft, 10 April 2012,
    Thank you Tab Atkins!
  position: center
  caption: >
    Meaningful CSS, **2012** (my first talk)

- from: intro
  use: oss
  oss:
    sass: https://sass-lang.com/
  caption: >
    Variables, Mixins, Functions, and Nesting

- scss: |
    /* originally +grid-col(3) */
    article { @include span(3); }
  caption: >
    **Susy**, 2009

- pre: A simple _language_
  title: Can Cause **Complex Code**

- pre: Some language _complications_
  title: Can **Simplify Code**

- url: https://www.w3.org/TR/css-grid/
  caption: >
    **CSS Grid** Baseline 2017

- css: |
    article { grid-column: span 3; }
  caption: >
    **CSS Grid** Baseline 2017

- css: |
    main { grid-area: main; }
  caption: >
    **CSS Grid** Baseline 2017

- url: https://www.oddbird.net/talks/no-grid-system/
  title: Don't Use My Grid System (2017-2019)
  position: center

# <!--
# .##....##.########.##......##
# .###...##.##.......##..##..##
# .####..##.##.......##..##..##
# .##.##.##.######...##..##..##
# .##..####.##.......##..##..##
# .##...###.##.......##..##..##
# .##....##.########..###..###.
# -->

- pre: I'm _back_
  title: With New **Abstractions**

- url: https://www.w3.org/TR/css-mixins-1/
  title: CSS Functions & Mixins Module, Level 1

- css: |
    @function --my-function(--optional, --parameters) {
      --any-logic: using custom property syntax;
      result: 4; /* returned value */
    }
  caption: |
    CSS **Function** with `@function`

- pre: >
    CSS _Functions_
  title: Act Like **Values**
  css: |
    button {
      padding: --space();
      background: --theme-color(brand);
      border: var(--border-width);
    }
  caption: >
    Where _`var()`_ is allowed

- pen: Simple Function
  id: QwbKjwY

- todo: combine results from queries
- todo: functions are declarative

- support: function
  title: CSS @Function Rule
  caption: >
    Chrome with _Experimental Web Platform Features_

- css: |
    @mixin --my-mixin(--optional, --parameters) {
      /* all styles are output? */
      --this-is: public;
      padding: 1em 2em;
    }
  caption: |
    CSS **Mixin**

- pre: >
    CSS _Mixins_
  title: Act Like **Nested Rules**
  css: |
    aside {
      @apply --callout-box(info);
      position: relative;
    }
  caption: >
    Where _style rules_ are allowed

- pen: Gallery Mixin
  id: zxGKvbz

- support: mixin
  title: CSS @Mixin Rule

- pre: Inline _conditions_
  title: With the **if()** Function
  qr: https://www.w3.org/TR/css-values-5/
  caption: CSS Values and Units Module, Level 5

- pen: If() with Media Queries
  id: EajgabR

- support: if
  title: Inline Conditions with `if()`
  caption: >
    Chrome with _Experimental Web Platform Features_

- title: Conditions…
  md: |
    - `media()`
    - `supports()`
    - `style()`

# <!--
# .##.....##....###....########...######.
# .##.....##...##.##...##.....##.##....##
# .##.....##..##...##..##.....##.##......
# .##.....##.##.....##.########...######.
# ..##...##..#########.##...##.........##
# ...##.##...##.....##.##....##..##....##
# ....###....##.....##.##.....##..######.
# -->

- pre: Just the _latest_
  title: >
    **Inspired By** Sass et al
- md: |
    - Variables
    - Math and color functions
    - Nesting
    - **`if()`**
    - **`@function`**
    - **`@mixin`**

- pre: CSS versions
  title: >
    Work **Differently**

- img: mixins/talk.jpg
  alt: >
    We Need To Talk About Kevin
    movie poster for
    with a Tilda Swinton looking scared
    and Ezra Miller looking evil,
    but the word Kevin is replaced by scribbles
    so it says We Need to talk about --Variables

- url: https://www.w3.org/TR/css-variables-1/
  title: CSS **Custom Properties** for _Cascading_ Variables

- pre: Cascade & inherit
  title: As **Properties** of **Elements**

- pre: Sass variables use
  title: >
    **Lexical** Scope
  caption: Determined by Sass code organization

- css: |
    html { $color: green; }
    body { /* $color == undefined */ }

- pre: Custom properties use
  title: >
    **DOM** Scope
  caption: Result of mapping properties to elements

- css: |
    html { --color: green; }
    body { /* --color == green */ }

- pen: 'Custom Properties Demo: Buttons'
  id: RwoEWvE

- title: Value **Resolution**
  md: |
    1. Filtering
    2. Cascading
    3. Defaulting (includes _inheritance_)
    4. Resolving
    5. ~~Formatting~~
    6. ~~Constraining~~
  caption: Variables _expose the process_

- title: |
    On each _html element_ \
    For every _css property_ \
    We need **exactly one value**
  caption: Same for custom properties!

# <!--
# .####....###.....######..##.....##.########
# ..##....##.##...##....##.##.....##....##...
# ..##...##...##..##.......##.....##....##...
# ..##..##.....##.##.......##.....##....##...
# ..##..#########.##........##...##.....##...
# ..##..##.....##.##....##...##.##......##...
# .####.##.....##..######.....###.......##...
# -->

- pre: Filtering
  title: Finds **Relevant** Declarations
  md: |
    1. In a _stylesheet that applies_ (see `media` attr)
    2. _Not_ in a _false conditional_ rule (see at-rules)
    3. In a _selector that matches_ the HTML Element
    4. Is **syntactically valid**
  caption: Result is a _(maybe empty) list_ of 'declared' values

- title: >
    ✅ Valid **Syntax**
  css: |
    html { color: teal; }

- title: >
    ❌ _Not_ Valid **Syntax**
  css: |
    html { color: 3em; }
  caption: >
    We can discard it _at parse time_

- css: |
    html {
      /* color: <color>; */
      color: teal; /* applied! */
      color: 3em; /* discarded */
    }

- title: >
    ✅ Valid **Syntax**
  css: |
    html { color: var(--my-property); }

- title: >
    ✅ Valid **Syntax**
  css: |
    html { --my-property: teal; }

- title: >
    ✅ Valid **Syntax**
  css: |
    html { --my-property: 3em; }

- title: >
    ✅ Still **Valid Syntax**
  css: |
    html {
      --my-property: 3em;
      color: var(--my-property);
    }
  caption: >
    But _will fail_ later…

- title: >
    ✅ Still Valid **Syntax**
  css: |
    html {
      --my-property: 3em;
      color: var(--my-property);
    }

    @property --my-property {
      syntax: "<color>";
      initial-value: teal;
      inherits: true;
    }
  caption: >
    Registration applies _at computed value time_

- pre: Declarations containing
  title: The **`var()` function**
  sub: Are _not evaluated at parse time_

- pre: Declarations containing
  title: |
    The `var()` function \
    or **`if()` function** \
    or **any `--custom()` function**
  sub: Are _not evaluated at parse time_

- title: Invalid At **Computed Value Time**
  sub: >
    "IACVT"

- id: XWGOdVQ
  pen: Invalid At Computed Value Time

# <!--
# ..######.....###.....######...######.....###....########..########
# .##....##...##.##...##....##.##....##...##.##...##.....##.##......
# .##........##...##..##.......##........##...##..##.....##.##......
# .##.......##.....##..######..##.......##.....##.##.....##.######..
# .##.......#########.......##.##.......#########.##.....##.##......
# .##....##.##.....##.##....##.##....##.##.....##.##.....##.##......
# ..######..##.....##..######...######..##.....##.########..########
# -->

- title: Value **Resolution**
  md: |
    1. Filtering
    2. **Cascading**
    3. Defaulting
    4. Resolving

- pre: Cascade…
  title: Removes **Conflicting** Declarations
  caption: Result is _zero or one_ 'cascaded' value

- pen: Importance in Custom Properties
  id: OPVXrEX

# <!--
# .####.##....##.##.....##.########.########..####.########
# ..##..###...##.##.....##.##.......##.....##..##.....##...
# ..##..####..##.##.....##.##.......##.....##..##.....##...
# ..##..##.##.##.#########.######...########...##.....##...
# ..##..##..####.##.....##.##.......##...##....##.....##...
# ..##..##...###.##.....##.##.......##....##...##.....##...
# .####.##....##.##.....##.########.##.....##.####....##...
# -->

- title: Value **Resolution**
  md: |
    1. Filtering
    2. Cascading
    3. **Defaulting**
    4. Resolving
  caption: Result is _exactly one_ 'specified' value

- pre: Defaulting _process_
  title: Depends on the **Property**

- pre: Some
  title: |
    Properties **Inherit**
  sub: value from _direct parent_

- img: vars/boxes-unstyled.png
  position: center
  alt: >
    Wireframe of a website
    with nested blue boxes,
    all of them have dashed borders

- img: vars/boxes-cascade.png
  position: center
  alt: >
    cascade:is(.selectors) -
    same wireframe,
    but some of the borders are now solid,
    and some have become pink
  caption: >
    **Cascaded** values from _selector mapping_

- img: vars/boxes-inherit.png
  position: center
  alt: >
    inheritance from context -
    same diagram,
    but the boxes that weren't styled before
    now match the color of their parent box
  caption: >
    **Inherited** values from _parent context_

- pre: >
    _Custom_ properties
  title: >
    **Inherit** By Default

- pre: Inheritance
  title: Requires **Lineage**

- pre: Custom properties
  title: Can Carry **Hidden Context**

- pre: Allowing us to
  title: |
    Inherit **Across Generations**

- pen: End-Run Inheritance
  id: poYGQbY

- pre: Most _properties_
  title: >
    **Don't** Inherit

- pre: No inheritance?
  title: >
    Use **Initial Value**
  caption: >
    [Initial Value Spec](https://www.w3.org/TR/css-cascade-5/#initial-values)

- pre: Default _initial value_…
  title: >
    "The **Guaranteed Invalid** Value"
  sub: like _`Undefined`_ in JS

- pen: Invalid, Unsupported, or Undefined
  id: OYoVLX

- caption: >
    **Register** Custom Properties
  css: |
    @property --border-size {
      syntax: "<length>";
      initial-value: 1px;
      inherits: false;
    }

- pre: >
    _Typed_ properties
  title: Will **Never Fallback**
  caption: They always have an _`initial` value_

- title: Function **Types**
  css: |
    @function --color() returns <color> {/* … */}

- pre: Use _variables_
  title: To **Provide Fallback**
  caption: >
    [Generic fallback syntax for IACVT values](https://github.com/w3c/csswg-drafts/issues/9990)

- pen: Guaranteed Invalid Functions
  id: qEdagxB

- pre: >
    _explicit_ defaulting…
  title: >
    "Global **Keywords**"
  md: |
    - `initial` (from spec)
    - `inherit` (from parent element)
    - `unset` (inherit or initial)
    - `revert` (from browser)
    - `revert-layer` (previous layer)

- pre: Defaulting _keywords_
  title: Apply To **Custom Properties**

- pen: Defaulting keywords apply to custom properties
  id: myJrgEv

- title: Value **Resolution**
  md: |
    1. Filtering
    2. Cascading
    3. Defaulting
    4. **Resolving**
  caption: Result is _exactly one_ 'computed' value

- pen: Computed Values
  id: dPopMJM

- title: Computed Values **Inherit**
  caption: >
    (except _`currentColor`_!)

- pre: Move through DOM tree
  title: Resolve **Parent**, then Default **Children**

  md: |
    1. Filtering
    2. Cascading
    3. **Defaulting**
    4. **Resolving**

- pre: Unregistered Properties
  title: Can't **Resolve**

- pen: Variables substitute, but don't resolve (until used)
  id: LEVRRyg

- todo: creating var functions
- todo: Functions resolve
  caption: >
    [Functional Capturing](https://blog.kizu.dev/functional-capturing/),
    by **Roman Komarov**

# <!--
# .########.####.##....##....###....##......
# .##........##..###...##...##.##...##......
# .##........##..####..##..##...##..##......
# .######....##..##.##.##.##.....##.##......
# .##........##..##..####.#########.##......
# .##........##..##...###.##.....##.##......
# .##.......####.##....##.##.....##.########
# -->

- pre: Some questions…
  title: That I **Always Get**…

- pre: Are there…
  title: Performance **Issues**?

- title: Browsers Optimize **Constantly**
  caption: Your data is probably old

- pre: Generally…
  title: CSS is **Not The Issue**

- pre: To cause _issues_…
  title: Trigger Re-Style on **More Elements**

- pre: Question…
  title: Is **Sass** Dead Yet?

- pre: If you don't need it anymore…
  title: Then **Don't Use It** 🎉

- pre: But if you're
  title: Building **Design Systems**
  caption: Go to **Brad** & **Ian**'s talk

- pre: Sass provides…
  title: >
    **Loops**, **Lists**, & **Objects** 🎉
  caption: >
    _Very unlikely_ to get loops in CSS

- pre: Why make the browser
  title: Solve **Server-side Problems**?

- pre: Recap…
  title: >
    **Mixins** & **Functions**

- pre: Not changing
  title: What We **Can Do**

- pre: If you _thought_
  title: CSS was **Programming**

- pre: It _still is_…
  title: (But With **More Features**)

- pre: If you _thought_
  title: CSS is **Not Programming**

- pre: It _still isn't_…
  title: (But With **More Features**)

- pre: But improving
  title: The **Syntax** & **Maintainability**

- img: mixins/meaning.jpg
  alt: >
    2012 slide -
    CSS is awesome, but it lacks meaningful abstractions.
  position: center
  caption: >
    Meaningful CSS, **2012** (my first talk)

- pre: If you just want…
  title: To **Code Some Styles** Good

- feature: oddbird.dev/learn/courses/design-with-code/
  title: Designing With Code
  sub: Writing resilient and maintainable CSS
  bird: miriam

---
