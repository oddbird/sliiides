---
draft: true
talk: Selectors & Specificity
date: 2023-09-06
slides:

- css: |
    button          { background: gray; }
    .action         { background: darkblue; }
    [type=“submit”] { background: darkgreen; }
    #send           { background: maroon; }

- pre: Each *Selector* has a *Weight*
  title: Based on **How Specific** It Is

- title: >
    **Unique** `ID`s
  css: |
    #logo {
      /*
        there should only be one element per page
        with a given ID.
      */
    }
- title: >
    **Reusable** `class`es & `attributes`
  css: |
    .action           { background: darkblue; }
    [type=“submit”]   { background: darkgreen; }
    :hover, :checked  { background: rebeccapurple; }
  caption:
    Includes `:`pseudo-classes
- title: >
    **Element** `type`s
  css: |
    button      { background: gray; }
    a::after    { background: darkblue; }
    ::selection { background: mediumvioletred; }
  caption:
    Includes `::`pseudo-elements
- md: |
    1. *Unique* `ID`s
    2. *Reusable* `class`es & `attributes`
    3. *Element* `type`s
    4. ==*Universal* `*`==
- pre: Like *Versioning*…
  title: |
    v3.**10**.1 **`>`** v3.**9**.12
- pre: Like *Versioning*…
  title: |
    (ID)`.`(Class/Attr)`.`(Element)
  caption: |
    semantic versions: (major)`.`(minor)`.`(patch)
- css: |
    #contact-form .actions button[type='submit']:active { }
- css: |
    /* Specificity 1.3.1 - 1 ID, 3 Attrs, 1 Element */
    #contact-form .actions button[type='submit']:active { }
- pre: Often written with _commas_…
  title: |
    Specificity of [**1,3,1**]


- pre: Compare _from the left_
  title: |
    **1**,0,2 `vs` **0**,3,2 `vs` **0**,2,3
- pre: Compare _from the left_
  title: |
    **1,0,2** ~~`vs` 0,3,2 `vs` 0,2,3~~
- pre: Move on _when tied_
  title: |
    **0**,3,2 `vs` **0**,2,3
- pre: Move on _when tied_
  title: |
    0,**3**,2 ~~`vs` 0,**2**,3~~

- pre: Exceptions…
  title: >
    **Selection** Pseudo-Classes
  sub: >
    `:where()`, `:is()`, `:not()`, `:has()`

- pre: >
    `:is()` and `:where()`
  title: Take **Entire Selectors**
  css: |
    a:is(body.home #logo) { /* … */ }
    a:where(body.home #logo) { /* … */ }
- pre: >
    `:is()` and `:where()`
  title: Select **The Same Elements**
  sub: The union of both _inside_ & _outside_ selectors
- css: |
    /* (a) AND ALSO (nav .active) */
    a:where(nav .active) { color: black; }
    a:is(nav .active) { color: black; }
- css: |
    /* (h1 a) AND ALSO (main > *) */
    h1 a:where(main > *) { color: black; }
    h1 a:is(main > *) { color: black; }

- pre: >
    `:is()` and `:where()`
  title: Also **Group Selectors**
- css: |
    h1 a:hover, h1 a:focus,
    h2 a:hover, h2 a:focus,
    h3 a:hover, h3 a:focus,
    h4 a:hover, h4 a:focus,
    h5 a:hover, h5 a:focus {
      text-decoration: underline;
    }
- title: Commas for **OR**
  css: |
    /* (h1 OR h2 OR …) AND (a:hover OR a:focus) */
    :is(h1, h2, h3, h4, h5) a:where(:hover, :focus) {
      text-decoration: underline;
    }

- title: Example From **User Agent**
  css: |
    table[rules=cols i] > tfoot > tr > td,
    table[rules=cols i] > tfoot > tr > th,
    table[rules=all i] > tfoot > tr > td,
    table[rules=all i] > tfoot > tr > th {
      /* … */
    }
- css: |
    table:where(
      [rules=cols i], [rules=cols i]
    ) > tfoot > tr > :is(th, td) { /* … */ }

- pre: >
    `:is()` and `:where()`
  title: Have **Different Specificity**

- pre: Use `:where()`
  title: To **Remove** Specificity
  css: |
    a { color: blue; }
    a:hover { color: rebeccapurple; }
    nav a.active { color: black; }

- css: |
    /* nav a.active { 0,1,2 } */
    nav a:where(.active) { /* 0,0,2 */ }
    a:where(nav .active) { /* 0,0,1 */ }

- pre: Use `:where()`
  title: For **Default Variations**

- pre: But `is()` takes specificity
  title: From **Highest Internal Selector**
  css: |
    :is(a, .b, #c .d) { /* 1,1,0 */ }
    a:is(.b, #c .d) { /* 1,1,1 */ }

- title: Comparing **Specificity**
  css: |
    a:where(#logo, .sponsor .logo) {
      /* specificity: 0,0,1 */
    }

    a:is(#logo, .sponsor .logo) {
      /* specificity: 1,0,1 */
    }
- pre: It doesn't matter
  title: Which Item **Matches**!
  md: |
    ```css
      a:is(#logo, .sponsor .logo) { /* … */ }
    ```
    ```html
      <a class="sponsor logo">Still 1,0,1</a>
    ```
- pre: Use `:not()`
  title: For **Excluding Elements**
  sub: (inside matches are removed from outside matches)
  css: |
    /* (p) UNLESS (.warning)  */
    p:not(.warning) { /* … */ }
- pre: >
    `:not()` and `:is()`
  title: Have **Same Specificity**
- todo: nesting
- todo: has()
---
