---
title: Sass Modules & Tools
talk: Sass **Modules** & **Tools**
date: 2020-05-22
slides:

# intro -----------------------

- section: Some **Background**

- face: hamptoncatlin.jpg
  pre: |
    @hcatlin
  title: |
    **Hampton** Catlin
  sub: Original **Inventor**

- pre: 2006...
  title: |
    **HAML** for Ruby

- md: |
    ```
    %ul
      %li Salt
      %li Pepper
    ```

- pre: 2007...
  title: Extended For **CSS**

- md: |
    ```sass
    ul
      :margin-bottom 1em
      li 
        :list-style-type disk
    ```

- title: |
    **Original** Sass Variables
  md: |
    ```sass
    !total_cols = 12
    !col_width = 4em
    ```

- title: |
    **Original** Sass Mixins
  md: |
    ```sass
    =grid-container(!grid = !total_cols )
      :margin-left auto
      :margin-right auto
      :overflow hidden
      :width=(!grid * !col_width) + ((!grid - 1) * !gutter_width)
      :max-width 99%
    ```

- title: |
    **Original** Control Structures
  md: |
    ```sass
    @if !switch
      :float right
    @else
      :float left
    ```

- face: natalieweizenbaum.jpg
  pre: |
    @nex3
  title: |
    **Natalie** Weizenbaum
  md: |
    Lead **Language Designer**

- pre: 2010 Sass » *Scss*
  title: More **CSSy Syntax**
  caption: Inspired by *Less*, which was inspired by *Sass*, which was…

- title: Design **Principles**
  md: |
    - Strict **Superset**: All CSS is Valid Scss
    - Clear **Differentiation** Between CSS & non-CSS
  
- pre: CSS *Superset*
  title: |
    `style.css` **➡** `style`**`.scss`**

- pre: Two-*Syntax* Options
  title: One **Sass** Language
  md: |
    - **Sass** Syntax ➡ *`*.sass`*
    - **Scss** Syntax ➡ *`*.scss`*

- pre: 2013
  title: Multiple **Implementations**
  sub: |
    LibSass » SassC | GoSass | Sass.js | **Node Sass** 
  caption: |
    Feature-freeze, and several years of confusion

- pre: 2018
  title: |
    ~~Ruby Sass~~ ➡ **Dart Sass**

- pre: Dart Sass 
  title: |
    **Reference** Implementation

- title: |
    `npm install` **`sass`**

- pre: Dart Sass
  title: |
    **Up-To-Date** Implementation

- pre: Dart Sass
  title: New **Features** Regularly
  sub: Along with bug-fixes

- pre: tl;dr
  title: Use **Dart Sass**

# partials ----------------------

- section: Sass **Modules**

- pre: |
    *Organize*
  title: Into **Partial** Files
  sub: Use the *`_partial.scss`* filename prefix

- md: |
    - **`sass/`**
      - `tools/`
      - `config/`
        - *`_colors.scss`*
        - *`_fonts.scss`*
        - *`_sizes.scss`*
        - *`_index.scss`*
      - `initial/`
      - `patterns/`
      - `layouts/`
      - `components/`
      - *`style.scss`*

- title: |
    `sass/config/`*`_index.scss`*
  md: |
    ```scss
    @forward 'color';
    @forward 'fonts';
    @forward 'scale';
    ```
  caption: |
    The **`_`** prefix is **implied**

- pre: Use *`@forward`*
  title: To **Combine** Partials

- title: |
    `sass/`*`style.scss`*
  md: |
    ```scss
    @use 'config';
    ```
  caption: |
    The **`index.scss`** file is **implied**

- pre: Use *`@use`*
  title: To **Access** Partials

- pre: |
    *`@import`* 
  title: Is A **CSS Feature**

# modules intro ----------------------

- pre: |
    `@use` & `@forward`
  title: |
    Only in **Dart Sass**

- pre: |
    Sass *`@import`* 
  title: Dangerously **Combines Files**

- pre: |
    Sass *`@import`* 
  title: Creates **Global Namespace**

- pre: |
    *`@use`* Loads
  title: Partials As **Modules**
  caption: |
    https://css-tricks.com/introducing-sass-modules/

- title: A **Module** Includes
  md: |
    - A **Namespace**
    - Public **Members**
      - Variables
      - Functions
      - Mixins
    - CSS **Output**

- title: |
    **`_colors.scss`**
  md: |
    ```scss
    $brand: rebeccapurple;
    $_private: papayawhip;
    
    @function tint($color, $amount) { ... }
    ```

- title: |
    **`@use 'colors'`**
  md: |
    ```scss
    // default 'colors' namespace
    // $_private is not available
    
    a {
      color: colors.$brand;
      background: colors.tint(maroon, 95%);
    }
    ```

- title: |
    `@use 'colors' `**`as *`**
  md: |
    ```scss
    a {
      color: $brand;
      background: tint(maroon, 95%);
    }
    ```

- title: |
    `@use 'colors' `**`as config`**
  md: |
    ```scss
    a {
      color: config.$brand;
      background: config.tint(maroon, 95%);
    }
    ```

- title: |
    `sass/config/`*`_index.scss`*
  md: |
    ```scss
    @forward 'color';
    @forward 'fonts';
    @forward 'scale';
    ```

- title: |
    `@use 'config'`
  md: |
    ```scss
    buttons {
      background-color: config.$brand;
      font-size: config.$small;
    }
    ```

- title: |
    `sass/config/`*`_index.scss`*
  md: |
    ```scss
    @forward 'color' as color-*;
    @forward 'fonts' as font-*;
    @forward 'scale' as size-*;
    ```

- title: |
    `@use 'config'`
  md: |
    ```scss
    buttons {
      background-color: config.$color-brand;
      font-size: config.$size-small;
    }
    ```

- pre: Helps *You*
  title: Write **Modular** Code

- pre: Helps *You*
  title: Visualize **Dependencies**

- pre: Helps *You*
  title: Avoid **Conflicts**

- pre: Helps *Sass*
  title: Avoid **CSS Conflicts**

- pre: Helps *Sass*
  title: Add **New Features**

- pre: Built-In
  title: Sass **Modules**
  sub: |
    `math`, `color`, `string`, `list`, `map`, `selector`, `meta`

- title: |
    `@use `**`'sass:math'`**
  md: |
    ```scss
    nav {
      width: math.percentage(1/3);
    }
    ```

- title: Sass [**Migrator**](https://sass-lang.com/documentation/cli/migrator)

# nesting & ----------------------

- section: Selector **Nesting**

- md: |
    ```css
    nav {
      background: silver;
    }
    
    nav ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }

    nav li { display: inline-block; }
    ```

- md: |
    ```scss
    nav {
      background: silver;

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li { display: inline-block; }
    }
    ```

- pre: Useful for
  title: Scope **Ownership**

- pre: Useful for
  title: Managing **Overrides**

- pre: Especially With
  title: Media **Bubbling**

- md: |
    ```scss
    nav {
      display: flex;
      flex-direction: column;

      @media (min-width: 30em) {
        flex-direction: row;
      }
    }
    ```

- pre: Also Works With
  title: |
    **@support** Queries

- md: |
    ```scss
    nav {
      float: left;
      width: 25%;

      @supports (display: grid) {
        width: auto;
      }
    }
    ```

- pre: |
    *&*
  title: |
    **Parent** Selector

- md: |
    ```scss
    a {
      :link, :visited {
        // a :link, a :visited 😿
      }
    }
    ```

- md: |
    ```scss
    a {
      &:link, &:visited {
        // a:link, a:visited 😻
      }
    }
    ```

- pre: Be *Careful* 
  title: Breaking **Selectors**
- md: |
    ```scss
    .block {
      // .block {}
      &__element {
        // .block__element {}
        &--modifier {
          // .block__element--modifier {}
        }
      }
    }
    ```

- title: Don’t **Overly Sandbox**
  sub: Avoid the temptation to *mimic* html structure
  md: |
    ```scss
    body {
      nav {
        ul {
          li { display: inline-block; }
        }
      }
    }
    ```

- md: |
    ```css
    body nav ul li { display: inline-block; }
    ```

- pre: Sass is
  title: A **Pre-Processor**

- pre: Your *Sass* is only as good
  title: As The **CSS It Generates**

- pre: Criteria for
  title: Any **CSS Tools**

- pre: In The Browser
  title: There is **Only CSS**

# variables ----------------------

- section: Imperative **Variables**

- title: Sass **Variables**
  md: |
    ```scss
    $variable-name: value;
    ```

- title: Using **Variables**
  md: |
    ```scss
    nav {
      background: $brand-color;
    }
    ```

- title: Interpolating **Variables**
  md: |
    ```scss
    #{$selector} {
      --brand-color: #{$brand-color};
    }
    ```

- title: Fun **Legacy Fact**
  md: |
    ```scss
    $variable-name == $variable_name
    ```

- pre: Sass Variables *Scope*
  title: To **Modules** & **Brackets**

- pre: Custom Properties *Inherit*
  title: Through **DOM Structures**

- pre: Sass Variables *Compile*
  title: To A **Single Value**

- pre: Custom Properties *Resolve*
  title: In The **Cascade**

- pre: Sass *Variables*
  title: For **Code Automation**

- pre: Custom *Properties*
  title: For **Dynamic Style**

- pre: Many Tools
  title: |
    Have **Variables**

- pre: Many Tools
  title: |
    **Generate** CSS

- pre: Sass is
  title: |
    **Designed For** CSS

- pre: Sass *Values*
  title: Based on **CSS**

- title: |
    **Numbers** & **Lengths**
  sub: |
    **`3.14`** | **`34em`** | **`15vw`** | &c.

- title: |
    Sass **Strings**
  sub: |
    **`'nav main'`** | **`bold`**

- title: |
    Sass **Colors**
  sub: |
    **`#df207f`** | **`hsl(...)`** | **`rgb(...)`** | &c...

- title: |
    Sass **Lists**
  sub: |
    **`'Helvetica Neue', sans-serif`** | **`auto 1fr 30em`** | &c.

- pre: Additional
  title: |
    **Sass-Only** Values
  sub: |
    **`true`** | **`false`** | **`null`** | `<functions>`

- title: Data **Maps**
  md: |
    ```scss
    $map-variable: (
      keys: values,
      structured: data,
    );
    ```

- md: |
    ```scss
    $color-brand-blue: hsl(195, 85%, 35%);
    $color-brand-orange: hsl(24, 100%, 39%);
    $color-brand-pink: hsl(330, 85%, 48%);
    ```

- md: |
    ```scss
    // 'colors' module...
    $brand: (
      'blue': hsl(195, 85%, 35%),
      'orange': hsl(24, 100%, 39%),
      'pink': hsl(330, 85%, 48%),
    );
    ```

- md: |
    ```scss/5
    @use 'colors';
    @use 'sass:map';
    
    a {
      // map.get($map, $key)
      color: map.get(colors.$brand, 'blue');
    }
    ```

- md: |
    ```scss/5
    @use 'sass:map';
    
    $_brand: ( ... );
    $_ui: ( ... )

    $colors: map.merge($_brand, $_ui);
    ```

- pre: |
    *Meaningful* Grouping 
  title: For **Humans** & **Machines**

# control structures ----------------------

- section: Control **Structures**

- pre: |
    *`@if`* & *`@else`*
  title: Define **Optional** Code

- md: |
    ```scss
    @use 'sass:color';

    button {
      color: $btn-color;

      @if (color.lightness($btn-color) > 50%) {
        background: black;
      } @else {
        background: white;
      }
    }
    ```

- pre: |
    *`@each`* & *`@for`*
  title: Define **Looping** Code
  caption: |
    https://css-tricks.com/loops-css-preprocessors/

- pre: |
    *`@for`* Loops
  title: Number **Ranges**
  md: |
    ```scss
    @for $n from 1 through 10 {
      .item:nth-child(#{$n}) {
        // generate styles for nth-child 1-10
      }
    }
    ```

- pre: |
    *`@each`* Loops
  title: Lists & **Maps**
  md: |
    ```scss
    html {
      // each <key>, <value> in <map>
      @each $name, $color in $brand {
        --color-brand-#{$name}: #{$color};
      }
    }
    ```

- md: |
    ```scss
    @each $name, $color in $buttons {
      [data-btn-color='#{$name}'] {
        background-color: $color;
      }
    }
    ```

- pre: Maps can be 
  title: Updated **Dynamically**

- md: |
    ```scss
    @use 'sass:color';
    @use 'sass:map';

    @each $name, $color in $colors {
      $generated: (
        '#{$name}-light': color.scale($color, $lightness: 50%),
        '#{$name}-dark': color.scale($color, $lightness: -50%),
      );

      $colors: map.merge($colors, $generated);
    }
    ```

- pre: Maps can be 
  title: Accessed **Dynamically**

- md: |
    ```scss
    @mixin background($color-name) {
      background: map.get($color-name);
    }

    // You can't interpolate variable names...
    // $#{$color-name}
    ```

# mixins & functions ----------------------

- section: |
    **Mixins** & **Functions**

- pre: Sass *Mixins*
  title: Store **Blocks of Code**
  sub: Like massive variables...

- md: |
    ```scss
    @mixin button-base {
      border: thin solid;
      border-radius: 0.12em;
      font: inherit;
      padding: 0.25em 1em;
    }
    ```
- md: |
    ```scss
    [data-btn='danger'] {
      @include button-base;
      background: maroon;
      color: white;
    }
    ```

- md: |
    ```scss
    @mixin button($background, $text) {
      background: $background;
      color: $text;
      border: thin solid;
      border-radius: 0.12em;
      font: inherit;
      padding: 0.25em 1em;
    }
    ```

- md: |
    ```scss
    [data-btn='danger'] {
      @include button(maroon, white);
    }
    ```

- pre: Sass *Functions*
  title: Return a **Value**

- md: |
    ```scss
    @use 'sass:color';

    @function contrast($color) {
       @if (color.lightness($color) > 50%) {
          @return black;
        } @else {
          @return white;
        }
      }
    ```

- md: |
    ```scss
    button {
      background: $brand-color;
      color: contrast($brand-color)
    }
    ```

- md: |
    ```scss
    @mixin button($background) {
      background: $background;
      color: contrast($background);
      border: thin solid;
      border-radius: 0.12em;
      font: inherit;
      padding: 0.25em 1em;
    }
    ```

- pre: Simpler *map.get*
  title: |
    **Color** Function

- md: |
    ```scss/4
    @use 'config';
    @use 'sass:map';
    
    a {
      color: map.get(config.$colors, 'action');
    }
    ```

- md: |
    ```scss/3-5
    @use 'sass:map';
    $colors: ( ... );

    @function color($name) {
      @return map.get($colors, $name);
    }
    ```

- md: |
    ```scss/3
    @use 'config';
    
    a {
      color: config.color('action');
    }
    ```

- pre: Create
  title: Modular **Toolkits**

- pre: Capture
  title: Control **Structures**

- md: |
    ```scss
    @use 'sass:color';
    @use 'sass:map';

    @each $name, $color in $colors {
      $generated: (
        '#{$name}-light': color.scale($color, $lightness: 50%),
        '#{$name}-dark': color.scale($color, $lightness: -50%),
      );

      $colors: map.merge($colors, $generated);
    }
    ```

- md: |
    ```scss
    @use 'sass:color';
    @use 'sass:map';

    @function build-palette($colors) {
      @each $name, $color in $colors {
        $generated: (
          '#{$name}-light': color.scale($color, $lightness: 50%),
          '#{$name}-dark': color.scale($color, $lightness: -50%),
        );
  
        $colors: map.merge($colors, $generated);
      }
    }
    ```

- md: |
    ```scss
    @use 'tools';

    $colors: ( ... )
    $colors: tools.build-palette($colors);
    ```

- pre: Tools *Encourage*
  title: |
    **Consistency**
- pre: Tools *Encourage*
  title: |
    **Best Practice**
- pre: Tools *Encourage*
  title: |
    **Systems**
- pre: Tools *Free Us*
  title: |
    To Focus on **Details**

- quote: |
    My job is to make sure 
    the system is **modular and flexible** enough 
    to be used in **any number of unpredictable ways**.
  cite: Mina Markham, [Pantsuit](https://medium.com/git-out-the-vote/pantsuit-the-hillary-clinton-ui-pattern-library-238e9bf06b54)

- pre: 👍 *Opinionated*
  title: |
    About **Process**
- pre: 👎 *Opinionated*
  title: |
    About **Style**

- pre: Balance of *Firm*
  title: And **Flexible**

- pre: Tools
  title: Are A **ByProduct**

- pre: Notice *Patterns*
  title: And **Capture Them**

- pre: Reuse *Tools*
  title: And **Adapt**

- pre: |
    *Over*-Engineering
  title: |
    Is **Part of The Process**

# map problem ---------------------------

- section: Map **References**

- pre: Ok, so...
  title: There's A **Map Problem**

- title: Internal **Reference**
  md: |
    ```scss/2
    $colors: (
      'brand-blue': hsl(195, 85%, 35%),
      'action': 'brand-blue', // just a string
    );
    ```

- title: Internal **Reference**
  md: |
    ```scss/4
    @use 'sass:map';

    $colors: (
      'brand-blue': hsl(195, 85%, 35%),
      'action': map.get($colors, 'brand-blue');
    );
    ```

- pre: |
    *`ERROR`*
  title: Undefined variable **`$colors`**

- pre: |
    *Recursive*
  title: Map-Get **Function**

- md: |
    ```scss
    $colors: (
      'brand-pink': hsl(330, 85%, 48%),
      'escher': 'brand-pink',
      'godel': 'escher',
      'bach': 'godel',
      'kevin bacon': 'bach',
    );
    ```

- md: |
    ```scss/5-7
    @use 'sass:map';

    @function color($name) {
      $result: map.get($colors, $name);

      @if map.has-key($colors, $result) {
        $result: color($result);
      }

      @return $result;
    }
    ```

- title: |
    `color('kevin bacon')` \
    `hsl(330, 85%, 48%)`
  background: hsl(330, 85%, 48%)
  color: white

- title: Map **Adjustments**

- md: |
    ```scss/5
    $colors: (
      'brand-pink': hsl(330, 85%, 48%),
      'escher': 'brand-pink',
      'godel': 'escher',
      'bach': 'godel',
      'kevin bacon': 'bach' ('lighten': 20%),
    );
    ```

- title: ✨
  sub: (more **function** magic we won't dig into)

- title: |
    `color('kevin bacon')` \
    `hsl(330, 85%, 68%)`
  background: hsl(330, 85%, 68%)

- title: ¯\\\_**(ツ)**_/¯

- pre: 👎 Requires *More Tooling*
  title: And **Custom Syntax**

- title: 👍 **Meaningful** Organization
- title: 👍 **Visible** Relationships
- title: 👍 **Single Source** Of Truth
- title: 👍 **Automated** Systems

- img: tools/accoutrement.jpg
  alt: colors, type, animations, sizes, etc.
  position: top
  fit: 100% auto
  caption: |
    OddBird's [Accoutrement](https://oddbird.net/accoutrement/)

- img: docs/herman.jpg
  position: top
  fit: 100% auto
  caption: |
    OddBird's [**Herman**](https://oddbird.net/herman)
    is based on [**SassDoc**](http://sassdoc.com) syntax

- pre: Find or *Build*
  title: Tools That **Fit You**

- pre: Tools That
  title: |
    **Encourage** You

- pre: Tools That
  title: Get **Out of Your Way**
---
