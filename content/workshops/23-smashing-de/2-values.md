---
talk: Value Resolution & Custom Properties
date: 2023-09-06
slides:

# intro to vars
- pre: I heard
  title: You Like **Variables**
- pre: I heard
  title: You Like **Variables**
  sub: In _CSS_

- title: |
    Sass \
    Less \
    PostCSS \
    CSS-in-JS...

- pre: Take
  title: Common **Values**

- title: |
    **Global** Design Tokens
  sub: brand colors, sizes, fonts, etc...
  caption: Term coined by [Jina](https://twitter.com/jina)

- title: |
    `hsl(322, 92%, 24%)`
  mode: dark
  background: hsl(322, 92%, 24%)
  caption: The best color (tastes like rhubarb)

- pre: Provide
  title: Meaningful **Names**

- title: |
    `$`**`deep-raspberry`**
  caption: |
    What it _looks like_

- title: |
    `$`**`best-color`**
  caption: |
    Why we _chose it_

- title: |
    `$`**`action`**
  caption: |
    What it _signifies_

- title: |
    `$`**`link`** \
    `$`**`button`**
  caption: |
    Where to _use it_

- scss: |
    // origin
    $best-color: hsl(322, 92%, 24%);

    // meaning
    $action: $best-color;

    // usage
    $link: $action;
    $button: $action;
  caption: |
    ¿Por qué no los _tres_?

- img: advanced-css/patch.jpg
  alt: Physical patch bay with wires
  caption: Patch bays are great

- title: Don't **Do Anything**
  sub: Until we _apply them_
  caption: A way of storing & organizing information for later

- scss: |
    button {
      background-color: $button;
    }
  caption: Connecting the final _patch cord_ to _output_

- title: 😎 _cooool_

- pre: 2014...
  title: CSS **Variables**

- caniuse: css-variables

- title: |
    ~~`$name: value;`~~ \
    **`--`**`name: `*`value`*`;`

- pre: |
    `-`~~`webkit`~~`-property` \
    `-`~~`moz`~~`-property`
  title: |
    **`--property`**
  caption: |
    All prefix, no browser: _`-<empty>-property`_

- title: |
    **`--very`**`: few restrictions;`

- pen: Page construction in CJSS
  user: scottkellum
  id: WqwjLm
  tabs: css

- pre: Define
  title: On **Elements**
  caption: (like other _properties_)

- scss: |
    // global
    $best-color: hsl(322, 92%, 24%);
    $action: $best-color;
    $button: $action;

- css: |
    html {
      --best-color: hsl(322, 92%, 24%);
      --action: var(--best-color);
      --button: var(--action);
    }
  caption: |
    `:root` is fine, but why?

# root ---------------------

- title: |
    **`:root`** Selector?
  sub: Only the *rootest root*

- md: |
    ```css
    :root {
      --brand-color: hsl(330, 100%, 45%);
      --action: var(--brand-color);
    }
    ```

- title: Any **Document** Root
  sub: Like `<svg>` or `<xml>` or `<html>`

- demo: root-solo
- demo: root-embed

# inherit -------------------

- pre: Inherit
  title: By **Default**
  caption: (like other _properties_)

- pre: Apply
  title: On Any **Descendants**

- title: |
    `var(` **`--property`** `)`

- css: |
    button { color: var(--button); }

- pre: Keep Sass/CSS
  title: |
    **Global Values** NSYNC

- scss: |
    $best-color: hsl(329.8 67.7% 57.5%);

    html {
      --action: #{$best-color};
    }
  caption: |
    The `#{interpolation}` syntax is required
    for parsing Sass inside CSS variables

- scss: |
    $colors: (
      'brand-blue': hsl(195, 52%, 31%),
      'brand-orange': hsl(24, 100%, 62%),
      'brand-pink': hsl(322, 92%, 24%),
    );

    html {
      @for $name, $value in $colors {
        --#{$name}: #{$value};
      }
    }

- pre: If you
  title: Only Use **Global Values**
- pre: Then
  title: |
    You're **Missing Out**

# Compiled vs Dynamic
- pre: Preprocessor are…
  title: |
    **Compiled** (**Server-Side**)

- scss: |
    button {
      background-color: $action;
    }

- title: Preprocessor ✨ **Magic** ✨

- css: |
    button {
      background-color: hsl(322, 92%, 24%);
    }

- pre: Sass Variables are
  title: Static at **Compilation**

- pre: That's a
  title: Huge **Limitation**

# think different
- pre: CSS is…
  title: |
    **Responsive** (**Client-Side**)

- title: Responds to **Devices**
  caption: Different sizes, capabilities, interfaces, etc.
- title: Responds to **Browsers**
  caption: Different sizes, feature support, etc.
- title: Responds to **User Preferences**
  caption: Font sizes, forced colors, reduced motion, etc.
- title: Responds to **Interactions**
  caption: States like hover, focus, checked, etc.
- title: Responds to **HTML Context**
  caption: Different pages, layouts, components, etc.

- pre: CSS Variables
  title: Are **Responsive**

- pre: CSS Variables
  title: Are **Always Dynamic**

# intro custom props

- pre: CSS _Variables_
  title: |
    Need a New **Mental Model**

- title: |
    "CSS **Custom Properties**…
  sub: …for _Cascading Variables_ Module Level 1"
  caption: |
    The [custom properties spec](https://www.w3.org/TR/css-variables-1/)

- title: Cascade **Like Properties**
- title: Inherit **Like (some) Properties**
- title: Custom **Properties**
  sub: Properties _that we define_

- pre: The _Cascade_
  title: Filters **Targeted Values**
  sub: when there are _conflicts_

- css: |
    p { color: black; }
    p.error { color: red; }

- pre: Change values
  title: Based on **State**, **Class**, &c

- pre: Then _Inheritance_
  title: Fills in **Missing Values**
  sub: based on _nearest target ancestor_

- css: |
    html { color: green; }
    p { /* color inherits */ }

- pre: Change values
  title: Based on **DOM Context**

- pre: Custom properties
  title: |
    **Capture** a Value
  sub: Somewhere in the cascade

- css: |
    html { --action: red; }
    main { --action: green; }
    aside { --action: blue; }

- pre: And then…
  title: |
    That Value **Inherits**
  sub: Through the DOM

- css: |
    button { background: var(--action); }
  caption: |
    `red` by default, `green` inside `<main>`, `blue` in any `<aside>`

- pen: 'Custom Properties Demo: Buttons'
  id: RwoEWvE

- title: Reduce **Nesting**

- css: |
    button {
      background: blue
    }

    .my-context button {
      background: rebeccapurple;
    }

- css: |
    button {
      background: var(--btn-color, blue);
    }

    .my-context {
      --btn-color: red;
    }

- pre: Inheritance
  title: Rewards **Proximity**
  sub: Like "scoped styles"

- pre: Reset *Inheritance*
  title: With **Explicit** Selectors

- title: Declare **Locally**
  css: |
    [data-button='go'] {
      --btn-color: green;
    }

- title: Declare **Universally**
  css: |
    * {
      --grid-area: main;
    }

- title: Combine **Both**
  css: |
    [data-grid] > * {
      --grid-area: main;
    }

- title: Define **Nowhere**
- title: |
    Initial **Guaranteed Invalid**
  pre: like JS `Undefined`

- title: |
    `var(` **`--undefined`** `, fallback)`

- code: |
    button {
      background: var(--btn-color, teal);
    }

- title: |
    `var( --undefined,` **`fallback`** `)`
  caption: Only *one fallback*

- title: Allows **List Values**
  sub: |
    `var(--my-font,` *`Baskerville, Georgia, serif`*`)`

- title: |
    **Nested** Fallbacks
  code: |
    button {
      background: var(--btn-color, var(--action, teal));
    }

- title: Font **Stacks**
  sub: |
    `font-family: `*`Consolas`*`, `*`Menlo`*`, `*`'Courier New'`*`, `*`monospace`*`;`

- pre: Warning
  title: Not for **Legacy Support**

- title: |
    ❌ **Browser** Fallbacks
  code: |
    button {
      background: teal; /* old browser */
      /* empty variables */
      background: var(--btn-color, var(--action, teal));
    }
  caption: |
    [Invalid at Computed-Value Time](https://twitter.com/TerribleMia/status/1369055587837771776)

- title: |
    **Browser** Fallbacks
  code: |
    html { background: red; }

    @supports (--css: variables) {
      html { background: green; }
    }

# use cases -----------

- pre: CSS Variables
  title: Manage **Dynamic Changes**

- title: User **Preferences**

- pen: Custom Property Light/Dark
  id: KKNbLpZ

- title: Attribute **Patterns**

- md: |
    - `[attr]` ➡ **Presence** (even if empty)
    - `[attr`**`=`**`"..."]` ➡ **Exact** match
    - `[attr`**`*`**`="..."]` ➡ **Any** match
    - `[attr`**`~`**`="..."]` ➡ **Space**-delimited (like classes)
    - `[attr`**`|`**`="..."]` ➡ **Hyphen**-delimited
    - `[attr`**`^`**`="..."]` ➡ **Starts** with...
    - `[attr`**`$`**`="..."]` ➡ **Ends** with...
    - `[attr="..."` **`i`**`|`**`s`**`]` ➡ **Case** sensativity
  caption: |
    More [details on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

- pen: Custom Property Themes
  id: ExNGJre

- title: Media **Queries**

- pen: Variables & Media Queries
  id: XWNowZQ

- title: Variations on a **Default**

- pen: Variables Grid Areas
  id: vYyvwom

- title: Safe **Inline Styles**

# Layouts --------------------------------

- title: Dynamic **Layouts**

- title: |
    [cssSusy](https://talks.oddbird.net/demos/cssSusy)
  sub: >
    🙅🏻‍♀️ Please _don't use this_ 🙅🏻‍♀️
  caption: |
    [AG Grid Nesting Test](http://oocss.org/grids_docs.html)
    from OOCSS

- title: Client **Day Planner**
  md: |
    ![Screenshot of schedule grid]({{ img }}layouts/schedule.jpg)

- title: Define the **Day**
  md: |
    ```html
    <main style="
      --day-start: 9,
      --day-end: 18
    ">
    ```

- title: Define the **Events**
  md: |
    ```html
    <section style="
      --event-start: 13,
      --event-end: 14
    ">
    ```

- pen: Dynamic CSS Layouts
  id: xxKVqzz

- title: Color **Schemes**

- demo: vars-themes

- title: Individual **Color Channels**

- css: |
    html {
      --h: 330;
      --s: 100%;
      --l: 34%;
      --color: hsl(var(--h), var(--s), var(--l));
    }

- title: Hue is **Radial**
  css: |
    * {
      --complement: calc(var(--h) - 180);
      background: hsl(var(--complement), var(--s), var(--l));
    }

- title: Lightness is "**Clamped**"
  css: |
    * {
      --threshold: 55;
      --contrast: calc((var(--l) - var(--threshold)) * -100%);
      color: hsl(var(--h), var(--s), var(--contrast));
    }

- demo: https://talks.oddbird.net/demos/hslTheme
  caption: |
    Inspired by [Facundo Corradini](https://css-tricks.com/switch-font-color-for-different-backgrounds-with-css/)

- title: Interaction **States**

- pen: Layering State & Type
  id: MWeaeGR

- title: Custom **Cascades**

- title: Defined **Properties**
  sub: For _Changing State_/_Type_

- title: Open **Arguments**
  sub: For _Inheriting Context_

- title: Custom **Longhand**

- pen: Custom **Longhand**
  id: gOLqoGN

- title: CSS **Functions** & **Mixins**

- pen: Variables » Functions » Mixins
  id: pozyeaN

# Value resolution

- pre: Custom properties
  title: >
    Resolve **Before Inheriting**

- title: CSS **Value Resolution**
  sub: >
    [css-cascade-5](https://www.w3.org/TR/css-cascade-5/#value-stages)
  caption: >
    [Day 82: value processing](https://www.matuzo.at/blog/2023/100daysof-day82/)

- css: |
    color: hotpink;
    color: oklch(0.45 0.20 352);
    color: not-real;

- title: >
    **Parse** Time
  md: |
    - `color: hotpink;`
    - `color: oklch(0.45 0.20 352);`
    - ~~`color: not-real;`~~

- title: >
    **Declared** Values
  css: |
    h1, h2, h3 {
      color: aqua;
    }

    #page-title {
      color: currentColor;
    }

- title: >
    **Cascaded** Value
  css: |
    #page-title {
      color: currentColor;
    }

- pre: If no _cascaded value_
  title: >
    [Defaulting](https://www.w3.org/TR/css-cascade-5/#defaulting)

- title: >
    **Specified** Value
  sub: Cascaded or _Defaulted_
  md: |
    - `color: currentColor;` - _cascaded_
    - `display: block` - _cascaded_ (from UA)
    - `font-family` - _inherited_ (from parent)
    - `background-color: transparent` - _initial_ (from spec)

- title: Global **keywords**…
  sub: |
    `inherit`, `initial`, `unset`, `revert`, `revert-layer`

- title: Inherit
  sub: Use value _from parent_
- title: Initial
  sub: Use _specified_ value
- title: Unset
  sub: Use _defaulted_ value (`inherit` or `initial`)
- title: Revert
  sub: Use _previous origin_ value (e.g. UA defaults)
- title: Revert-Layer
  sub: Use _previous layer_ value (including origins as layers)

- pre: Global *keywords*…
  title: Resolve on **Custom Properties**
- css: |
    html {
      --color: green;
      --color: initial;
      background: initial;
      background: var(--color, red); /* ??? */
    }
  caption: >
    [Codepen demo](https://codepen.io/miriamsuzanne/pen/MWZbvMz)

- title: >
    **Computed** Value
  sub: Relative values and variables are replaced
  md: |
    - `color: currentColor` » `rgb(0, 0, 0)`
    - `padding: 2em` » (<font-size> * 2) » `48px` (for example)

- pre: In most cases…
  title: Computed Values **Inherit**
  sub: Global keywords are an exception

- pre: >
    `currentColor`
  title: Inherits as *Keyword*
  sub: It should **re-calculate** when the color changes!

- pen: currentColor in SVG fill
  id: ExaNbjw

- title: >
    **Used** Value
  sub: Final resolutions, based on layout etc
  md: |
    - `width: 80%` » `1223px` (for example)
    - `color-scheme: dark light` » `dark` (for example)
    - `flex: 1` » (nothing on non-flex items)

- title: >
    **Actual** Value
  sub: What is displayed on the screen
  md: |
    - `font-size: 14.2px` » `14px`

- pre: Custom properties…
  title: Inherit **Computed Values**

- pre: Custom properties…
  title: Invalid **At Computed Value Time**

- pen: Invalid, Unsupported, or Undefined
  id: OYoVLX

# more mixins ---------------

- pen: CSS gradient-art decorations
  id: eYdJvWE

- pen: Angled Background CSS-Only Mixin
  id: BEvjbm

- title: Component **Arguments**

- pen: Media Object
  id: ZEObOVg

- title: Data **Visualizations**

- pen: Bar Charts with Scale
  id: BdQVOa
  caption: |
    Article on [CSS Tricks](https://css-tricks.com/css-charts-grid-custom-properties/)

- demo: vars-temps

- title: Check For **A11y**
  sub: When manipulating data tables
  caption: |
    https://css-tricks.com/accessible-simple-responsive-tables/

- title: JavaScript **Interactions**

- pen: Custom Property Color Palettes
  id: xoyrgX
  caption: |
    [Cascading Colors](https://www.oddbird.net/cascading-colors/)

- code: |
    html {
      @media (prefers-color-scheme: dark) {
        --os-mode: -1;
      }

      @media (prefers-color-scheme: light) {
        --os-mode: 1;
      }
    }

- code: |
    [data-colors='light'] {
      --html-mode: 1;
    }

    [data-colors='dark'] {
      --html-mode: -1;
    }

- code: |
    [data-colors] {
      --mode: var(
        --html-mode, var(
          --user-mode, var(
            --os-mode, 1
          )
        )
      );
    }

- pen: Vue Invaders!
  id: LmrEmb

# Sprite Animations ---------------------------

- title: CSS **Animation**

- demo: vars-temps

- pre: Set *Index* Prop
  title: To Offset **Delay**

- md: |
    ```twig
    <div style="--index: {{ loop.index }};">
    ```

    ```css
    [style*='--index'] {
      animation-delay: calc(var(--index) * 50ms);
    }
    ```

- pre: Create *API*
  title: For **HTML Soft Patch**

- md: |
    ```html
    <div style="--ease: var(--in-out-back);">
    ```

    ```css
    [style*='--ease'] {
      --in-quad: cubic-bezier(0.55, 0.085, 0.68, 0.53);
      --out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
      --in-out-back: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
    ```

- img: dynamic-css/vueconf19/sprite.jpeg
  alt: Krystal Campioni sprite animation
  fit: contain

- img: dynamic-css/vueconf19/animations-copy.png
  alt: Sprite from Monster Slayer animation
  fit: contain

- md: |
    ```html
    <section
      class="sprite-demo"
      :style="{
        '--src': show.sprite.src,
        '--columns': show.sprite.columns,
        '--rows': show.sprite.rows,
    }">...</section>
    ```

- md: |
    ```html
    <div
      v-for="action in show.actions"
      :key="action.name"
      :data-action="action.name"
      :style="{
        '--row': action.row,
      }"
    />
    ```

- title: |
    [cssSprites](https://talks.oddbird.net/demos/cssSprites)
  caption: |
    Animated sprites from
    [Monster Slayer](https://github.com/krystalcampioni/monster-slayer)
    by [Krystal Campioni](https://twitter.com/krystalcampioni)

# Issues ---------------------------

- pre: Variable *Issues*...
  title: Unknown **Value Types**

- pre: Transition & Animate
  title: |
    **Target** Properties
  sub: Not the variable itself...

- md: |
    ```scss
    button {
      --color: green;
      background: var(--color);
      transition: background 0.5s;

      &:hover {
        --color: red;
      }
    }
    ```

- title: Houdini **Fix**
  caption: |
    [Properties & Values API](https://drafts.css-houdini.org/css-properties-values-api/)

- title: Proposed **CSS**
  md: |
    ```css
    @property --brand-color {
      syntax: "<color>";
      initialValue: "pink";
      inherits: true;
    }
    ```

- caniuse: mdn-css_at-rules_property
  title: \@property

- title: Current **JavaScript**
  md: |
    ```js
    CSS.registerProperty({
      name: "--brand-color",
      syntax: "<color>",
      initialValue: "pink",
      inherits: true,
    });
    ```

- pre: Initial values
  title: Must be **Absolute**
  sub: When the `syntax` is not `*`
  caption: Define relative values on root…

- pre: Variable *Issues*...
  title: Content Requires **Quoted Values**

- css: |
    div::after {
      --string: 'hello world';
      content: var(--string);
    }

- pre: |
    *No Support* in
  title: |
     **url()** and **@media**

- pre: |
    ~~`var(--size)em`~~
  title: |
    `calc( var(--size)` **`* 1em`** `)`

- title: |
    `@supports (` **`--css: vars`** `)`
  sub: Any valid **definition** will work...

# outro --------------------

- pre: Custom *Properties*
  title: Are **Not Just** Variables
  sub: (as we've known them)

- pre: Sass Variables...
  title: Development **Shortcuts**

- md: |
    - Global Tokens
    - Reusable Mixins
    - Pre-Compiled Functions

- pre: Custom Properties
  title: |
    **Dynamic** & **Responsive** Styling

- pre: Capture values
  title: Where **Defined**

- pre: Change values
  title: Based on **State** or **Class**

- pre: Inherit Values
  title: Based on **Context**

- md: |
    - Contextual tokens
    - Dynamic Visualizations
    - Component Settings
    - User Interactions

- pre: For defining
  title: |
    **Systems** & **Components**

- pen: CSS Custom Properties Demo
  id: RwEWydE
  user: stacy
---
