---
title: Custom Properties & Functions
talk: Custom **Properties** & **Functions**
date: 2020-05-15
slides:

# intro ---------------------

- pre: |
    *Variables*
  title: In **CSS**

- title: |
    **current**Color
  sub: Firefox **2006**... Safari **2009**... IE9 **2011**...

- title: Borrowed from **SVG 1**
  sub: Added to **CSS 3**

- pre: Inherits *Keyword*
  title: Not **Resolved Color**
  sub: It should **re-calculate** when the color changes!
  caption: |
    [Safari Bug](https://bugs.webkit.org/show_bug.cgi?id=193171)
    Resolved but not released...

- pen: currentColor in SVG fill
  id: ExaNbjw

- title: Custom **Properties**
  sub: Firefox **2014**... Chrome/Safari **2016**... Edge **2017**

- title: |
    **`--aka`**`: 'css variables';`

- title: |
    `-<empty>-`**`browser-prefix`**

- title: |
    **`--very`**`: few restrictions;`

- pen: Page construction in CJSS
  user: scottkellum
  id: WqwjLm
  tabs: css

- title: |
    `var(` **`--name`** `)`

- title: |
    `var(` **`--name`** `, fallback)`

- title: Only **One Fallback**
  md: |
    `var(--my-font,` *`Baskerville, Georgia, serif`*`)`

- title: |
    **Nested** Fallbacks
  md: |
    `var(--my-color,` *`var(--other-color, pink)`*`)`

- pen: Invalid, Unsupported, or Undefined
  id: OYoVLX

# Sass ---------------------

- pre: Some *Overlap*
  title: With **Sass Variables**

- md: |
    ```scss
    $my-color: rebeccapurple;
    --my-color: rebeccapurple;
    ```

- pre: Store *Data*
  title: For **Later Use**

- pre: Establish
  title: |
    **Global** Patterns

- title: |
    Keep Code **DRY** 
  sub: |
    "*Don't Repeat Yourself*"

- pre: |
    With a *Single*
  title: |
    Source of **Truth**

- md: |
    ```css
    html {
      --gutter: 1.5rem;
      --shim: calc(var(--gutter) / 2);
    }
    ```

- md: |
    ```css
    html {
      --brand-color: hsl(330, 100%, 45%);
      --action: var(--brand-color);
    }
    ```

- pre: But there are
  title: Important **Differences**

- pre: Sass Variables *Scope*
  title: Without **DOM Awareness**

- md: |
    ```scss
    .example { 
      $columns: 2; 
    }
    .nested-class { 
      /* $columns == undefined */ 
    }
    ```

- pre: Properties *Inherit*
  title: With **DOM Awareness!**

- md: |
    ```css
    .example { 
      --columns: 2; 
    }
    .nested-class { 
      /* var(--columns) == 2 */ 
    }
    ```

- title: Media-Query **Changes**
  md: |
    ```scss
    @media (min-width: 30em) {
      html {
        $columns: 6; /* scope only */
        --columns: 6; /* 30em+ in browsers! */
      }
    }
    ```

- pre: Custom *Properties*
  title: Not Just **Variables**

- title: Use **Both**

- pre: Will It *Change*
  title: In The **Browser**?

- pre: Will It *Change*
  title: Depending on **Context**?

- pre: Keep *NSYNC*...
  title: Properties From **Variables**

- md: |
    ```scss
    $gutter: 1rem;
    html { --gutter: #{$gutter}; }
    ```

- md: |
    ```scss
    $brand-colors: (
      'brand-blue': hsl(195, 52%, 31%),
      'brand-orange': hsl(24, 100%, 62%),
      'brand-pink': hsl(330, 100%, 45%),
    );
    ```

- md: |
    ```scss
    html {
      @for $name, $value in $brand-colors {
        --#{$name}: #{$value};
      }
    }
    ```

# root ---------------------

- title: |
    *`<root-rant>`*...
  sub: Only the *rootest root*

- md: |
    ```css
    :root {
      --brand-color: hsl(330, 100%, 45%);
      --action: var(--brand-color);
    }
    ```

- pre: |
    *`:root`* selects
  title: Any **Document** Root
  sub: Like `<svg>` or `<xml>` or `<html>`

- demo: root-solo
- demo: root-embed

- pre: Pseudo-*class* Has
  title: Higher **Specificity**

- pre: Maybe *Use Cases*?
  title: But **Be Careful**

- title: |
    *`</root-rant>`*

# inheritance ---------------------

- pre: Custom *Properties*
  title: Inherit By **Default**

- pre: Reset *Inheritance*
  title: With **Explicit** Selectors

- title: Declare **Locally**
  md: |
    ```css
    [data-button='go'] {
      --btn-color: green;
    }
    ```

- title: Declare **Universally**
  md: |
    ```css
    * {
      --grid-area: main;
    }
    ```

- title: Combine **Both**
  md: |
    ```css
    [data-grid] * {
      --grid-area: main;
    }
    ```

- title: Declare **Nowhere** First
  md: |
    ```css
    [data-grid] * {
      grid-area: var(--grid-area, main);
    }
    ```
  caption: |
    Like JS **`undefined`**

# use cases ---------------------

- title: Lots  of **Use Cases**

- pre: Use (& *Manage*)
  title: The **Cascade**!

- pre: Changes...
  title: Based on **Context** / **Theme**

- md: |
    ```css
    button {
      background: blue
    }

    [data-theme='rebecca'] button {
      background: rebeccapurple;
    }
    ```

- md: |
    ```css
    button {
      background: var(--btn-color, blue);
    }

    [data-theme='rebecca'] {
      --btn-color: red;
    }
    ```

- pre: Inheritance 
  title: Rewards **Proximity**
  sub: Like "scroped styles"

- pre: Component *Parameters* 
  title: Set By **Inheritance**

- md: |
    ```css
    .component {
      color: var(--color, black);
    }

    .context {
      --color: rebeccapurple;
    }
    ```

- pre: Changes...
  title: Based on **State** / **Type**

- md: |
    ```css
    [data-button] {
      background: var(--btn-color, blue);
    }

    [data-button]:disabled {
      --btn-color: gray;
    }

    [data-button='go'] {
      --btn-color: green;
    }
    ```

- pre: Avoids *Nesting*
  title: For Lower **Specificity**

- pre: Component *Parameters* 
  title: As Safe **Inline Styles**

- md: |
    ```html
    <button style="--color: blue;">
    ```

- pre: Optionally
  title: |
    **Use** The Variable...
  md: |
    ```css
    button {
      background: var(--color, red);
    }
    ```

- title: ...Or **Ignore** It
  md: |
    ```css
    button.green {
      background: green;
    }
    ```

- title: Missing **Longhand**
  sub: (& Defaults)

- md: |
    ```css
    .box {
      box-shadow: var(--shadow-x, 0)
                  var(--shadow-y, 1px)
                  var(--shadow-blur, 0)
                  var(--shadow-color, currentColor);
    }
    
    .usage { --shadow-y: -1px; }
    ```

- demo: vars-basic

# functions ----------------------------

- title: Custom **Functions** & **Mixins**

- demo: vars-stripes

- img: dynamic-css/smashing-vars.jpg
  alt: CSS Custom Properties in the Cascade by Miriam Suzanne
  caption: |
    Article on
    [Smashing Magazine](https://www.smashingmagazine.com/2019/07/css-custom-properties-cascade/)

# Colors ----------------------

- title: Color **Themes**

- demo: vars-themes

- md: |
    ```css
    [data-theme] {
      background: var(--background);
      color: var(--text);
    }

    [data-theme='light'] {
      --background: #ddf;
      --text: #226;
    }
    ```

- title: Think in **Layers**
  sub: Brand **➡** Theme **➡** Purpose **➡**

- md: |
    ```css
    html {
      --brand-light: #ddf;
      --brand-dark: #226;
    }
    ```

- pre: |
    "Soft *Patch*" 
  title: Between **Layers**

- md: |
    ```css
    [data-theme='light'] {
      --background: var(--brand-light);
      --text: var(--brand-dark);
    }
    ```

- demo: vars-themes

- title: Individual **Color Channels**

- md: |
    ```css
    html {
      --h: 330;
      --s: 100%;
      --l: 34%;
      --color: hsl(var(--h), var(--s), var(--l));
    }
    ```

- title: Hue is **Radial**
  md: |
    ```css
    * {
      --complement: calc(var(--h) - 180);
      background: hsl(var(--complement), var(--s), var(--l));
    }
    ```

- title: Lightness is "**Clamped**"
  md: |
    ```css
    * {
      --threshold: 55;
      --contrast: calc((var(--l) - var(--threshold)) * -100%);
      color: hsl(var(--h), var(--s), var(--contrast));
    }
    ```

- demo: https://talks.oddbird.net/demos/hslTheme
  caption: |
    Inspired by [Facundo Corradini](https://css-tricks.com/switch-font-color-for-different-backgrounds-with-css/)

- title: |
    [Cascading Colors](cascading-colors.netlify.com/)

# Custom Cascades -----------------------

- title: Custom **Cascades**

- pen: Custom (Property) Cascades
  id: KKdWXGo

- md: |
    ```css
    html {
      @media (prefers-color-scheme: dark) {
        --os-mode: -1;
      }

      @media (prefers-color-scheme: light) {
        --os-mode: 1;
      }
    }
    ```

- md: |
    ```css
    [data-colors='light'] {
      --html-mode: 1;
    }

    [data-colors='dark'] {
      --html-mode: -1;
    }
    ```

- md: |
    ```css
    [data-colors] {
      --mode: var(
        --user-mode, var(
          --html-mode, var(
            --os-mode, 1
          )
        )
      );
    }
    ```

# Layouts --------------------------------

- title: Dynamic **Layouts**

- title: |
    [cssSusy](https://talks.oddbird.net/demos/cssSusy)
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

- title: |
    [Charts & Data](https://talks.oddbird.net/demos/cssChart)
  caption: |
    Article on [CSS Tricks](https://css-tricks.com/css-charts-grid-custom-properties/)

- img: layouts/invade.jpg
  caption: |
    [Levitated Toy Factory](http://levitated.guru/work/)
    at **Beyond Tellerand**

- img: dynamic-css/jsconfus18/learning.jpg
  alt: |
    List of code dourses, all titled Learn X Language,
    except the JavaScript course titled
    Intro To JS
  caption: One does not simply "learn" JavaScript
  fit: contain

- title: |
    [Vue Invaders](https://talks.oddbird.net/demos/vueInvaders)

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

- pre: Variable *Issues*...
  title: Content Requires **Quoted Values**

- md: |
    ```css
    div::after {
      --string: 'hello world';
      content: var(--string);
    }
    ```

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

- face: anatudor.jpg
  pre: |
    @anatudor
  title: |
    **Ana** Tudor
  sub: |
    [CSS Tricks](https://css-tricks.com/author/thebabydino/)
    &&
    [CodePen](https://codepen.io/thebabydino/)
---
