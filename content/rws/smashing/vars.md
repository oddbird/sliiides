---
title: Custom Properties & Functions
talk: Custom Properties & **Functions**
date: 2020-05-15
slides:

# intro ---------------------

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
    `var(` **`--name`** `, fallback)`

- title: Only **One Fallback**
  md: |
    `var(--my-font,` *`Baskerville, Georgia, serif`*`)`

- title: |
    **Nested** Fallbacks
  md: |
    `var(--my-color,` *`var(--other-color, pink)`*`)`

# Sass ---------------------

- pre: Sass Variables *Scope*
  title: Without **DOM Awareness**

- md: |
    ```scss
    .example { $columns: 2; }
    .nested-class { /* $columns == undefined */ }
    ```

- pre: Custom Props *Inherit*
  title: With **DOM Awareness!**

- md: |
    ```css
    .example { --columns: 2; }
    .nested-class { /* var(--columns) == 2 */ }
    ```

- title: Media-Query **Toggle**
  md: |
    ```scss
    @media (min-width: 30em) {
      html {
        $columns: 6; /* scope only */
        --columns: 6; /* 30em+ in browsers! */
      }
    }
    ```

# defining ---------------------

- title: |
    **Global** Variables
  md: |
    ```css
    html {
      --brand-color: hsl(330, 100%, 45%);
    }
    ```

- pre: Or *`:root`*
  title: For **Multiple Formats**??
  sub: Only the *rootest root*, *higher specificity*

- demo: root-solo
- demo: root-embed

- title: |
    *`</root-rant>`*

- pre: Inherits *Resolved Value*
  title: Compiled Where **Defined**

- pre: Stop *Inheritance*
  title: With **Universal** Declaration

- md: |
    ```css
    * {
      --columns: 12;
      --column-span: initial;
    }
    ```

- pre: When Reasonable
  title: Declare **Locally**

- md: |
    ```css
    button {
      --btn-color: green;
    }
    ```

# use cases ---------------------

- title: Avoid **Nesting**...

- md: |
    ```scss
    button {
      background: blue
    }

    .this button {
      background: red;
    }
    ```

-  title: ...For Lower **Specificity**

- md: |
    ```scss
    button {
      --btn-color: var(--brand-color, blue);
      background: var(--btn-color, blue);
    }

    .this {
      --btn-color: red;
    }
    ```

- title: Safe **Inline Styles**

- md: |
    ```html
    <button style="--color: blue;">
    ```

- pre: Optionally
  title: |
    **Use** The Variable...

- md: |
    ```scss
    button {
      background: var(--color, red);
    }
    ```

- title: ...Or **Ignore** It

- md: |
    ```scss
    button.green {
      background: green;
    }
    ```

- title: Missing **Longhand**
  sub: (& Defaults)

- md: |
    ```css
    .example {
      --shadow-y: -1px;
      box-shadow: var(--shadow-x, 0)
                  var(--shadow-y, 1px)
                  var(--shadow-blur, 0)
                  var(--shadow-color, currentColor);
    }
    ```

- title: Individual **Color Channels**

- md: |
    ```css
    html {
      --h: 330;
      --s: 100%;
      --l: 34%;
    }

    button {
      background: hsl(var(--h), var(--s), var(--l));
    }
    ```

# functions ----------------------------

# ## `calc(` **`16px`** `+` **`20%`** `)`
# mix and match units

# <!-- slide -->

# ## Variables `+` Calc `==` **Functions**
# `calc(` **`var(--span)`** `/` **`var(--columns)`** `* 100%)`

# <!-- slide -->

# ## New Old **Grid System**?
# I'm not sure there's any reason to do this exactly...

# ```css
# html {
#   --columns: 12;
# }

# [data-span] {
#   --width: calc(var(--span) / var(--columns) * 100%);
#   width: var(--width, initial);
# }
# ```

# <!-- slide -->

# ```css
# [data-span='3'] {
#   --span: 3;
# }

# [data-span='half'] {
#   --span: calc(var(--columns) / 2);
# }
# ```

# <!-- slide -->

# ## Smart **Media-Queries**

# ```css
# * {
#   --columns: 6;
#   @media (min-width: 45em) { --columns: 12; }
# }
# ```

# <!-- slide -->

# ---
# demo: cssSusy
# resize: true
# caption: |
#   [AG Grid Nesting Test](http://oocss.org/grids_docs.html)
#   from OOCSS
# ---

# <!-- slide -->

# ### Variable **Issues**:
# ## Unknown **Value Types**

# <!-- slide -->

# ## Transition & Animate **Results**
# Not the variable itself...

# ```scss
# button {
#   --color: green;
#   background: var(--color);
#   transition: background 0.5s;

#   &:hover {
#     --color: red;
#   }
# }
# ```

# <!-- slide -->

# ## Houdini [Properties & Values API][values] **\***
# **\*** Experimental (behind Chrome flag)

# [values]: https://drafts.css-houdini.org/css-properties-values-api/

# <!-- slide -->

# ## In **JavaScript**

# ```js
# CSS.registerProperty({
#   name: "--brand-color",
#   syntax: "<color>",
#   initialValue: "pink",
#   inherits: true,
# });
# ```

# <!-- slide -->

# ## Proposed **CSS**

# ```css
# @property --brand-color {
#   syntax: "<color>";
#   initialValue: "pink";
#   inherits: true;
# }
# ```

# <!-- slide -->

# ## **Content** Requires **Quoted Values**

# ```css
# div::after {
#   --string: 'hello world';
#   content: var(--string);
# }
# ```

# <!-- slide -->

# ## Content **Hack** For Numbers

# ```css
# div::after {
#   --number: 3;
#   counter-reset: number var(--number);
#   content: counter(number);
# }
# ```

# <!-- slide -->

# ### Currently
# ## **No Support** in **`url()`** | **`@media`**

# <!-- slide -->

# ### ~~`var(--size)em`~~
# ## `calc( var(--size)` **`* 1em`** `)`

# <!-- slide -->

# ## `@supports (` **`--css: vars`** `) {}`
# Any valid **definition** will work...

# <!-- slide -->

# ---
# split:
#   image: /images/_people/leaverou.jpg
#   size: cover
# ---

# # Lea Verou | [@LeaVerou](https://twitter.com/LeaVerou/)
# ### [CSS Variables Talk](https://www.youtube.com/watch?v=2an6-WVPuJU)
# and [slides](http://leaverou.github.io/css-variables)

# <!-- slide -->

# ---
# layout: todo
# ---

# 1. Build 3 button colors, and 2 button padding-sizes
# 2. Build a variable-based layout system

---
