---
venue: Smashing Conf NY
title: When Variables Cascade
talk: When **Variables Cascade**
date: 2025-10-07

slides:

- img: vars/smashing25/invalid.png
  alt: >
    Nick Desbarats on stage
    in front of a slide that said
    What the $&#! is a dashboard anyway -
    but dashboard has been scribbled out
    and replaced with hand-written
    guaranteed invalid value
  fit: contain

- pre: Have you used…
  title: >
    **Variables** in **CSS**?

- support: custom-properties
  title: Custom properties (aka "variables")

- pre: Have you used…
  title: >
    **Variables** in **Sass**?

- pre: Have you used…
  title: >
    **Variables** in **JS**?

- scss: |
    /* Sass Variables */
    this-slide {
      $my-color: red;
      $my-color: yellow;

      background-color: $my-color;

      $my-color: green;
      $my-color: powderBlue;
    }
  caption: What's the _`background-color`_?

- js: |
    /* JS Variables */
    let myColor = 'red';
    myColor = 'yellow';

    thisSlide.style.backgroundColor = myColor;

    myColor = 'green';
    myColor = 'powderBlue';
  caption: What's the _`background-color`_?

- pre: Imperative languages
  title: Follow Steps **In Order**
  scss: |
    this-slide {
      $my-color: red;
      $my-color: yellow; /* winner! */

      background-color: $my-color;

      $my-color: green;
      $my-color: powderBlue;
    }
  background: yellow
  mode: light
  caption: Variables in **Sass**

- caption: What's the _`background-color`_ in **CSS**???
  css: |
    this-slide {
      --my-color: red;
      --my-color: yellow;

      background-color: var(--my-color);

      --my-color: green;
      --my-color: powderBlue;
    }

- pre: CSS is a
  title: >
    **Declarative** Language

- pre: Not a _series of steps_, but
  title: A Set of **Declarations**

- caption: >
    Describing _properties_ of _HTML Elements_
  css: |
    /* property: value */
    background-color: yellow;

- title: |
    Every _CSS Property_ \
    of Every _HTML Element_ \
    **Must Have** a _Single Value_
  qr: https://www.w3.org/Style/CSS/all-properties.en.html
  caption: >
    [**693** _distinct_ property names](https://www.w3.org/Style/CSS/all-properties.en.html)

- pre: Every _`<button>`_ Needs
  title: |
    One **`Background-Color`** \
    & One Text **`Color`** \
    & One **`Padding-Left`** \
    & One **`Margin-Inline-End`** \
    & ...

- pre: on _each HTML element_
  title: For **Each Property**…
  md: |
    1. Find the _relevant_/_valid_ declarations
    2. Remove _duplicate/conflicting_ properties
    3. Fill in any _missing_ properties
    4. Resolve any _relationships_

- pre: Need to…
  title: Discard **Invalid Values**
  css: |
    this-slide {
      background-color: red;
      background-color: yellow;
      background-color: green;
      background-color: powderBlue;
      /* background-color: smashingConf; */
    }

- pre: Need to…
  title: Remove **Conflicting Values**
  css: |
    this-slide {
      /* background-color: red; */
      /* background-color: yellow; */
      /* background-color: green; */
      background-color: powderBlue;
      /* background-color: smashingConf; */
    }

- pre: Need to…
  title: Fill in **Missing Values**
  css: |
    this-slide {
      /* no text `color` was declared, */
      /* but we can inherit one! */
    }

- pre: Finally…
  title: Resolve **Computed Values**
  css: |
    this-slide {
      background-color: rgb(176, 224, 230); /* powderBlue */
      color: rgb(0, 0, 0); /* canvasText maybe */
    }

- title: Value **Resolution** Process
  md: |
    1. Filtering
    2. Cascading
    3. Defaulting (includes _inheritance_)
    4. Resolving (based on _type_)

- url: https://www.w3.org/TR/css-variables-1/
  title: CSS **Custom Properties** for _Cascading_ Variables

- pre: >
    CSS _variables_…
  title: >
    Are **Just Properties**

- caption: What's the _`background-color`_ in **CSS**???
  css: |
    this-slide {
      --my-color: red;
      --my-color: yellow;

      background-color: var(--my-color);

      --my-color: green;
      --my-color: powderBlue;
    }

- pre: Don't follow…
  title: >
    **Steps** in Code

- pre: Do follow…
  title: Value **Resolution** Process
  md: |
    1. Filtering
    2. Cascading
    3. Defaulting (includes _inheritance_)
    4. Resolving

- title: (skip _filtering_ for now…)

- caption: Cascade to _remove duplicates_
  css: |
    this-slide {
      /* --my-color: red; */
      /* --my-color: yellow; */

      background-color: var(--my-color);

      /* --my-color: green; */
      --my-color: powderBlue;
    }

- demo: cascade-funnel
  caption: Order is part of _the cascade_

- pre: Then _resolve relationships_
  css: |
    this-slide {
      background-color: powderBlue;
      --my-color: powderBlue;
    }

- caption: Order doesn't matter _between properties_
  css: |
    this-slide {
      background-color: var(--my-color);

      --my-color: red;
      --my-color: yellow;
      --my-color: green;
      --my-color: powderBlue; /* winner! */
    }
  background: powderBlue
  mode: light

- caption: Order only matters _within properties_
  css: |
    this-slide {
      background-color: var(--my-color);

      --my-color: red;
      --my-color: green;
      --my-color: powderBlue;
      --my-color: yellow; /* winner! */
    }
  background: yellow
  mode: light

# <!--
# .##....##.########.##......##
# .###...##.##.......##..##..##
# .####..##.##.......##..##..##
# .##.##.##.######...##..##..##
# .##..####.##.......##..##..##
# .##...###.##.......##..##..##
# .##....##.########..###..###.
# -->

- pre: New…
  title: >
    **CSS** Features

- support: container-style-queries
  title: Container `style()` queries
  caption: >
    [CSS Conditional Rules Module Level 5](https://www.w3.org/TR/css-conditional-5/#style-container)

- support: if
  title: Inline conditions with `if()`
  caption: >
    [CSS Values and Units Module, Level 5](https://www.w3.org/TR/css-values-5/)

- support: function
  title: CSS `@function` rule
  caption: >
    [CSS Functions & Mixins Module, Level 1](https://www.w3.org/TR/css-mixins-1/)

- support: mixin
  title: CSS `@mixin` rule
  caption: >
    [CSS Functions & Mixins Module, Level 1](https://www.w3.org/TR/css-mixins-1/)

- pre: Often…
  title: >
    **Inspired By** Sass etc
- md: |
    - Variables
    - Math and color manipulation
    - Nesting
    - **`if()`**
    - **`@function`**
    - **`@mixin`**

- pre: CSS versions
  title: >
    Work **Differently**

- title: Value **Resolution** Process
  md: |
    1. Filtering
    2. Cascading
    3. Defaulting (includes _inheritance_)
    4. Resolving

- img: vars/smashing25/understanding.png
  alt: >
    Christine Vallaure on stage
    in front of a (photo-shopped) slide
    that says understanding of.
  fit: contain

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

- title: A **CSS Declaration**
  css: |
    color: blue;

- title: A **Relevant Declaration**…
  sub: (determined one element at a time)
  md: |
    1. In a _stylesheet that applies_ (see `media` attr)
    2. _Not_ in a _false conditional_ rule (see at-rules)
    3. In a _selector that matches_ the HTML Element
    4. Is **syntactically valid**
  caption: Result is a _(maybe empty) list_ of 'declared' values

- pre: CSS _valid syntax_
  title: >
    Depends on **Type Safety**

- md: |
    - `<integer>` / `<number>` / `<dimension>` etc…
    - `<length>` / `<angle>` / `<time>` etc…
    - `<calc-sum>`
    - `<color>` / `<hue>` / `<alpha-value>`
    - `<image>` / `<position>`
    - `<string>`
    - `<url>`
    - `<custom-ident>` / `<dashed-ident>`
    - etc.
  caption: >
    All **[CSS Types](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)**

- pre: >
    The
    [`color`](https://www.w3.org/TR/css-color-4/#the-color-property)
    property
  title: >
    Only Accepts
    [`<color>`](https://www.w3.org/TR/css-color-4/#typedef-color)
    Values

- title: >
    ❌ **Not Valid** Syntax
  css: |
    html { color: 3em; }
  caption: >
    `3em` is a `<length>`, not a `<color>`

- title: >
    ✅ **Valid** Syntax
  css: |
    html { color: teal; }
  caption: >
    `teal` is a `<named-color>`, a `<color>` sub-type

- css: |
    html {
      color: teal;
      color: 3em;
    }

- css: |
    html {
      color: teal;
      /* color: 3em; */
    }
  caption: >
    Invalid declarations can be _filtered_

- title: Value **Resolution**
  md: |
    1. Filtering ("**parse time** validation")
    2. Cascading
    3. Defaulting
    4. Resolving

- title: Useful **Progressive Enhancement**
  css: |
    html {
      color: teal;
      color: oklch(55% 0.09 195); /* discarded?? */
    }

- title: >
    **Some** Browsers…
  css: |
    html {
      color: teal;
      /* color: oklch(55% 0.09 195); */
    }

- title: >
    **Other** Browsers…
  css: |
    html {
      color: teal;
      color: oklch(55% 0.09 195);
    }
  caption: Let them both _cascade_!

- title: >
    **Other** Browsers…
  css: |
    html {
      /* color: teal; */
      color: oklch(55% 0.09 195);
    }
  caption: Let them both _cascade_!

- quote: |
    **You can use it and not use it at the same time**,
    because *it works and it doesn't work at the same time*.
    It's Quantum CSS!
    It's Magic!
  cite: |
    Jen Simmons,
    [Intro to Resilient CSS](https://www.youtube.com/watch?v=u00FY9vADfQ)

- caption: What's the _`background-color`_ in **CSS**???
  css: |
    this-slide {
      background-color: var(--my-color);

      --my-color: powderBlue;
      --my-color: smashingConf; /* 👀👀👀 */
    }

- pre: But _custom_ properties
  title: Have **No Defined Type**

- title: >
    ✅ Valid **Syntax**
  css: |
    .ಠ_ಠ {
      --（╯°□°）╯: ︵┻━┻;
    }
  caption: >
    credit: Tab Atkins

- title: >
    ✅ Valid **Syntax**
  css: |
    html { --my-property: teal; }

- title: >
    ✅ Valid **Syntax**
  css: |
    html { --my-property: 3em; }

- title: >
    ✅ Valid **Syntax**
  css: |
    html { color: var(--my-property); }

- title: >
    ✅ Still **Valid Syntax**
  css: |
    html {
      --my-property: 3em;
      color: var(--my-property);
    }
  caption: >
    _Might_ fail later…

- title: >
    ✅ Still **Valid Syntax**
  css: |
    html {
      --my-property: 3em;
      color: var(--my-property);
    }

    html {
      --my-property: deepPink;
    }
  caption: >
    `deepPink` is the best color in CSS, fight me

- title: Value **Resolution**
  md: |
    1. Filtering ("**parse time** validation")
    2. Cascading
    3. Defaulting
    4. **Resolving** 👀👀👀👀

- pre: Declarations containing
  title: The **`var()` function**
  sub: Are _not evaluated at parse time_

- title: Value **Resolution**
  md: |
    1. Filtering ("**parse time**")
    2. Cascading
    3. Defaulting
    4. Resolving ("**computed value time**")

- pre: Might become…
  title: Invalid At **Computed Value Time**
  caption: >
    Sometimes called "IACVT" in Github issues

- pre: Declarations containing
  title: |
    The `var()` function \
    or **`if()` function** \
    or **any `--custom()` function**
  sub: Are _not evaluated at parse time_

- id: XWGOdVQ
  pen: Invalid At Computed Value Time

- title: >
    ✅ Still Valid **Syntax**
  css: |
    body {
      --my-property: 3em;
      color: var(--my-property);
    }

    @property --my-property {
      syntax: "<color>";
      initial-value: teal;
      inherits: true;
    }
  caption: >
    Not _invalid_ until _computed value time_!

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
  caption: Result is _zero or one_ 'cascaded' value

- pre: Cascade handles…
  title: Declaration **Conflicts**

- img: no-harm/thunderdome-words.jpg
  alt: >
    Tina Turner as Aunty Entity
    in the Mad Max Thunderdome,
    with the law
    'Two styles enter, one style leaves'
    in bold text
  caption: >
    Put **Tina Turner** in the browser, you cowards

- demo: cascade-funnel
  caption: Starts with importance

- pre: We _know_…
  title: Variables **Cascade**

- css: |
    this-slide {
      background: maroon !important;

      --my-color: deepPink !important;
      --my-color: powderBlue;

      background: var(--my-color);
    }
  caption: What color is the _background_?

- css: |
    this-slide {
      background: maroon !important;

      --my-color: deepPink !important;
      /* --my-color: powderBlue; */

      /* background: var(--my-color); */
    }
  caption: Cascade applies to _each property_
  background: maroon
  mode: dark

- pre: Importance
  title: Applies to **Custom Properties**
  sub: (not passed along as part of the _variable value_)

- url: https://smashingconf.com/ny-2025/workshops/miriam-suzanne-modern-css-architecture
  title: >
    Workshop: Modern CSS Architecture

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
    3. **Defaulting** (filling in _empty values_)
    4. Resolving
  caption: Result is _exactly one_ 'specified' value

- pre: Some
  title: |
    Properties **Inherit**

- pre: Most _properties_
  title: >
    **Don't** Inherit

- id: eYXbPJP
  pen: Inheritance intuition

- pre: Inheritance
  title: From **Parent**

- css: |
    html { color: red; }

    body > main { /* inherits… ? */ }
  caption: >
    Each element from it's _direct parent_

- css: |
    html { color: red; }
    /* body inherits from `html` */
    body > main { /* inherits from `body` */ }
  caption: >
    Each element from it's _direct parent_

- pre: Inheritance
  title: Requires **Lineage**

- css: |
    html { color: red; }
    body { color: blue; }
    body > main { /* inherits from `body` */ }
  caption: >
    Each element from it's _direct parent_

- qr: oddbird.dev/learn/courses/design-with-code/
  img: mixins/build-wealth.jpg
  alt: >
    How to build generational wealth
    for your family,
    text overlaid on a multi-generation
    family photo all smiling at the camera

- img: no-harm/oligarchs.jpg
  alt: >
    A line of tech oligarchs
    at the inauguration of Donald Trump,
    including
    Elon Musk of Tesla,
    Mark Zuckerberg of Meta,
    Jeff Bezos of Amazon,
    and Sunar Pichai of Google
  position: bottom
  caption: Become an **Evil Tech Oligarch**!

- pre: >
    _Custom_ properties
  title: >
    **Inherit** By Default

- css: |
    html { --brand-color: deepPink; }

    form button[type=submit] {
      background: var(--brand-color);
    }

- pre: Custom properties
  title: Are **Invisible Until Used**

- pre: Custom properties can
  title: Smuggle **Hidden Context**

- pre: Allowing us to
  title: |
    ~~Avoid **Inheritance Taxes**~~ \
    Inherit **Across Generations**

- pen: End-Run Inheritance
  id: poYGQbY

- pre: Inheritance…
  title: Is **Only a Fallback**!

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
    Cascade applies _declared styles_

- img: vars/boxes-inherit.png
  position: center
  alt: >
    inheritance from context -
    same diagram,
    but the boxes that weren't styled before
    now match the color of their parent box
  caption: >
    Defaulting handles _whatever's left_

- pre: We could say…
  title: Cascade **Has Priority**

- pen: Importance doesn't inherit
  id: RNrpKpX

- pre: Defaulting _process_
  title: Depends on the **Property**

# <!--
# .####.##....##.####.########.####....###....##......
# ..##..###...##..##.....##.....##....##.##...##......
# ..##..####..##..##.....##.....##...##...##..##......
# ..##..##.##.##..##.....##.....##..##.....##.##......
# ..##..##..####..##.....##.....##..#########.##......
# ..##..##...###..##.....##.....##..##.....##.##......
# .####.##....##.####....##....####.##.....##.########
# -->

- pre: No _inheritance_?
  title: >
    Default to **Initial Value**
  caption: >
    [Initial Value Spec](https://www.w3.org/TR/css-cascade-5/#initial-values)

- quote: |
    Each property has an **initial value**,
    defined in **the property’s definition table**.
  cite: >
    Cascade & Inheritance,
    § 7.1.
    [Initial Values](https://www.w3.org/TR/css-cascade-5/#initial-values)
  caption: >
    Spec or [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/color#formal_definition)
    'formal definition'

- css: |
    /* ultimate reset! */
    * { all: initial !important; }
  caption: |
    Try it [on any website](https://smashingconf.com/ny-2025)!

- css: |
    /* initial values */
    display: inline;
    background: transparent;
    color: CanvasText;
    font-style: normal;
    flex-basis: auto;
    /* etc. */

- css: |
    body { display: initial; } /* inline */
    section { display: initial; } /* inline */
    div { display: initial; } /* inline */
    span { display: initial; } /* inline */
    head { display: initial; } /* inline */
    title { display: initial; } /* inline */

- css: |
    html, body, p, div, article, aside, header,
    hgroup, footer, main, nav, section /* etc */ {
      display: block;
    }

    base, basefont, datalist, head, link, meta,
    script, style, template, title /* etc */ {
      display: none;
    }
  caption: |
    Browser defaults _are essential_!

- pre: Custom properties…
  title: Have No **Definition Table**?!

- pre: Default _initial value_…
  title: >
    "The **Guaranteed Invalid** Value"
  sub: like _`Undefined`_ in JS

- pre: Fallbacks…
  title: Only When **Guaranteed Invalid**
  css: |
    p {
    	--not-a-color: 3em;
    	color: orange;
    	color: var(--not-a-color, green);
    }

- pen: Fallbacks must be guaranteed
  id: ZYQWZQp

- pre: >
    _Typed_ variables
  title: >
    Require an **`Initial-Value`**
  css: |
    @property --border-size {
      syntax: "<length>";
      initial-value: 1px;
      inherits: false;
    }
  caption: >
    Options for [syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/@property/syntax)

- pre: >
    _Typed_ variables
  title: Are Never **Guaranteed Invalid**

- pre: >
    _Typed_ variables
  title: Will **Never Fallback**

- css: |
    @property --border-size {
      syntax: "<length>";
      initial-value: 12px;
      inherits: false;
    }

    button {
      border: var(--border-size, thin) solid;
    }

- pen: No fallbacks for typed properties
  id: zxrojBG

- pre: >
    _Explicit_ defaulting…
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

- pre: Use `unset` or `initial`
  title: For **Guaranteed Invalid Value**
  sub: (on un-typed properties)

# <!--
# .########..########..######...#######..##.......##.....##.########
# .##.....##.##.......##....##.##.....##.##.......##.....##.##......
# .##.....##.##.......##.......##.....##.##.......##.....##.##......
# .########..######....######..##.....##.##.......##.....##.######..
# .##...##...##.............##.##.....##.##........##...##..##......
# .##....##..##.......##....##.##.....##.##.........##.##...##......
# .##.....##.########..######...#######..########....###....########
# -->

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

- pre: >
    _Defaulting_ has to happen
  title: Before **Resolution**
  sub: (gives us computed value)
- pre: But _Resolution_ has to happen
  title: Before **Inheritance**
  sub: (at least on the parent)

- pre: Move through DOM tree
  title: |
    **Parent** Resolves, \
    then **Children** Inherit

- pen: Computed Values
  id: dPopMJM

- pre: Resolution
  title: Depends on **Property Type**

- title: |
    `<color>` » `rgb()` \
    `<length>` » `px` \
    `<angle>` » `deg` \
    etc…

- pre: Un-typed _custom properties_
  title: >
    **Can't Resolve** Until Used

- pre: Un-typed _custom properties_
  title: Only **Substitute** Before Inheriting

- pen: CSS types, resolution, and inheritance
  id: WbrxMKZ

- pen: Comparing Values with Types
  id: LEVWNdq

# <!--
# .########.####.##....##....###....##......
# .##........##..###...##...##.##...##......
# .##........##..####..##..##...##..##......
# .######....##..##.##.##.##.....##.##......
# .##........##..##..####.#########.##......
# .##........##..##...###.##.....##.##......
# .##.......####.##....##.##.....##.########
# -->

- pre: On each _element_
  title: For **Each Property**
  md: |
    1. Filtering » _0+ 'declared' values_
    2. Cascading » _0-1 'cascaded' values_
    3. Defaulting » _1 'specified' value_
    4. Resolving » _1 'computed' value_

- title: Repeat for **Child Elements**

- pre: Properties _inherit_…
  title: The **Parent Computed Value**

- pre: >
    `var()`, `if()`, & `--functions()`…
  title: Become **Invalid at Computed Value Time**

- pre: Fallbacks require
  title: The **Guaranteed Invalid Value**

- pen: Flag functions
  id: GgJZmBd

- pen: miaGPT
  id: yyNarwz

- pre: If you _thought_
  title: CSS was **Programming**

- pre: It _still is_…
  title: (But With **More Features**)

- pre: If you _thought_
  title: CSS is **Not Programming**

- pre: It _still isn't_…
  title: (But With **More Features**)

- pre: If you just want…
  title: To **Code Some Styles** Good

- feature: oddbird.dev/courses/design-with-code/
  title: Designing With Code
  sub: Writing resilient and maintainable CSS
  bird: miriam
---
