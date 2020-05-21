---
title: Sass Modules & Tools
talk: Sass **Modules** & **Tools**
slides:

# intro -----------------------

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

- pre: 2010 Sass » *Scss*
  title: More **CSSy Syntax**
  caption: Inspired by *Less*, which was inspired by *Sass*, which was…

- title: Design **Principles**
  md: |
    - Strict **Superset**: All CSS is Valid Scss
    - Clear **Differentiation** Between CSS & non-CSS
  
- face: natalieweizenbaum.jpg
  pre: |
    @nex3
  title: |
    **Natalie** Weizenbaum
  md: |
    Lead **Language Designer**

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

# features ----------------------

- section: Sass **Features**

# nesting & ----------------------

- pre: Syntax *Sugar*
  title: Sass **Nesting**

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

- title: Avoid **HTML Structure**
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

- pre: Sass is
  title: A **Pre-Processor**

- pre: Your *Sass* is only as good
  title: As The **CSS It Generates**

- pre: Criteria for
  title: Any **CSS Tools**

- pre: In The Browser
  title: There is **Only CSS**

- pre: |
    *&*
  title: |
    **Parent** Selector

- md: |
    ```scss
    // a:link, a:visited { ... }
    a {
      &:link, &:visited {
        color: rebeccapurple;
      }
    }
    ```

# variables ----------------------

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

- title: Fun **Legacy Fact**
  md: |
    ```scss
    $variable-name == $variable_name
    ```

- pre: Sass *Values*
  title: Based on **CSS**

- title: |
    Sass **Numbers**
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

- pre: Many Tools
  title: |
    **Generate** CSS

- pre: Sass
  title: |
    **Understands** CSS

- pre: Additional
  title: |
    **Sass-Only** Values
  sub: |
    **`true`** | **`false`** | **`null`** | `functions`

- title: Sass **Maps**
  md: |
    ```scss
    $map-variable: (
      keys: values,
      structured: data,
    );
    ```

# control structures ----------------------


# mixins ----------------------

- title: Sass **Mixins**
  md: |
    ```scss
    ```

- section: CSS Advancements

- section: Design Systems

- section: Sass Modules

- section: Moving Forward
---
