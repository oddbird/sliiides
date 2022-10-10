---
venue: OddBird Retreat (lightning)
date: 2022-09-30
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
slides:

- title: CSS **Declarations**
  css: |
    property: value;

- title: |
    _`color`_`:` **blue**`;`

- md: |
    ```html
    <button style='color: blue'>…</button>
    ```
    ```css
    button { color: violet; }
    ```

- title: |
    💥🙈⁉️💥
  md: |
    ```html
    <button style='color: blue'>…</button>
    ```
    ```css
    button { color: violet; }
    ```

- title: |
    **Multiple** or **Unknown** ⁉️
  css: |
    color: teal;
    color: violet;
    color: oklch(79.269% 0.171 70.67);

- title: |
    On every _html element_, \
    For every _css property_ \
    We need **exactly one value**

- title: |
    **Cascade** _filters out_ \
    **Inheritance** _fills in_

- demo: cascade-funnel

- img: css-next/coins.jpg
  alt: |
    Mechanical coin sorter on a table,
    with a ramp at the top
    and a small-to-large series of slots
  fit: contain
- img: css-next/coins-exclusive.jpg
  alt: |
    Same coin sorter,
    with all slots crossed off
    except for the largest one with coins in it,
    and an arrow pointing at those coins
    that says 'move on'
  fit: contain

- demo: cascade-funnel

# origins and importance ----------------

- title: |
    **Origins** & **Importance**

- quote: |
    The **user/browser** specifies _initial preferences_
    and **hands the remaining influence over** to the document.
  <<: *proposal

- title: Cascade 🗺 **Origins**
  md: |
    1. 🖥 **User Agent** (browser)
    2. 👥 **User**
    3. 🎨 **Author** (document/us)

- title: Cascade 🗺 **Origins**
  md: |
    1. 🖥 **User Agent** (goes first)
    2. 👥 **User**
    3. 🎨 **Author** (most power)

- quote: |
    If conflicts arise **the user should have the last word**,
    but one should also allow the author to attach **style hints**.
  cite: Håkon Lie
  <<: *proposal

- title: ❗**important**

- md: |
    1. 🖥 User Agent Defaults (goes first)
    2. 👥 User Preferences
    3. 🎨 Author Styles
    4. ==❗🎨 Author **Important**==
    5. ==❗👥 User **Important**==
    6. ==❗🖥 User Agent **Important**== (most power)

- title: 👎🏼 **Override** Styles
  sub: in the _current_ layer

- title: 👍🏼 **Protect** Styles
  sub: from _more powerful_ layers

- title: Often **Isolated**
  md: |
    1. …
    2. …
    3. ==🎨 Author Styles==
    4. ==❗🎨 Author **Important**==
    5. ❗…
    6. ❗…

- demo: cascade-funnel

# specificity ----------------

- title: CSS **Selectors** & **Specificity**

- md: |
    - `*` **(universal)**
    - `type`
    - `.class` & `[attr]`
    - `#ID`s **(single-use)**
  caption: |
    [heuristic](https://en.wikipedia.org/wiki/Heuristic):
    a practical assumption
    that approximates the goal

- md: |
    1. *Universal* `*`
    2. *Element* `type`s
    3. *Reusable* `.class`es & `[attributes]`
    4. *Unique* `#ID`s (most powerful)

- img: patterns/itcss-layers.png
  alt: |
    A triangle pointing down,
    with labeled layers from top —
    settings, tools, generic,
    elements, objects, components,
    overrides
  fit: contain
  background: white
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    CSS (ITCSS), by Harry Roberts

- img: patterns/itcss-metrics.png
  alt: |
    Triangle with
    the horizontal edge labeled 'reach',
    and the vertical edges
    labeled 'specificity' and 'explicitness'
  fit: contain
  background: white
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    CSS (ITCSS), by Harry Roberts

# Layers ----------------

- title: Cascade **Layers**
  caption: |
    [Working Draft](https://www.w3.org/TR/css-cascade-5/)

- pre: |
    `@layer `_`<layer-name>`_` { … }`

- css: |
    @layer generic {
      audio[controls] { display: block; }
    }

    @layer generic {
      [hidden] { display: none !important; }
    }

- css: |
    @layer generic {
      audio[controls] { display: block; }
      [hidden] { display: none !important; }
    }

- pre: |
    `@import url(…) `_`layer(<name>)`_`;`

- css: |
    @import url(reset.css) layer(reset);

- md: |
    1. Overrides
    2. Components
    3. Objects
    4. Elements
    5. Generic
    6. Tools
    7. Settings
  caption: |
    As many layers as we want!

- css: |
    @layer settings { … }
    @layer tools { … }
    @layer generic { … }
    @layer elements { … }
    @layer objects { … }
    @layer components { … }
    @layer overrides { … }
  caption: |
    Layers stack as they are _first introduced_

- img: patterns/itcss-layers.png
  alt: |
    inverted triangle
    with labeled layers from
    wide top to narrow downward point —
    settings, tools, generic,
    elements, objects, components,
    overrides
  fit: contain
  background: white
  caption: |
    [**Inverted Triangle**](http://technotif.com/manage-large-css-projects-with-itcss/)
    CSS (ITCSS), by Harry Roberts

- title: |
    _Specificity_ is **Contained**

- css: |
    @layer framework {
      #menu .dropdown .menu-item {
        background: whitesmoke;
      }
    }

    @layer override {
      .menu-item {
        background: lightcyan;
      }
    }

- css: |
    @layer default { … }
    @layer theme { … }

    /* still a lower layer than "theme" styles */
    @layer default { … }

- title: |
    Establish **layer Order**
  md: |
    ```css
    @layer generic, elements, objects, components, overrides;
    ```

- css: |
    /* establish layer order */
    @layer one, two, three;

    /* add code to layers as needed */
    @import url(two.css) layer(two);
    @layer three { … }
    @layer one { … }
    @layer two { … }

- pre: |
    _Unlayered_ styles
  title: |
    Default **Highest Priority**

- demo: layer-sort

- title: |
    **Nesting** Layers

- css: |
    @layer tools {
      @layer custom { … }
    }

    /* access nested layers */
    @layer tools.custom { … }

- css: |
    @layer components {
      @layer defaults, structures, themes, utilities;
    }

- css: |
    /* tools.css */
    @layer theme { … }
    @layer components { … }

- css: |
    @import url(tools.css) layer(tools);

    @layer tools.theme { … }
    @layer tools.custom { … }

- css: |
    @import url(framework.css) layer(framework.base);

    @layer framework.overrides {
      /* anything here will override framework.base */
    }

- title: Use **Inside Components**

- pen: layers-btn

- title: |
    ❗️Important Layers **Reverse**
  sub: (exactly like origins)

- md: |
    1. Resets
    2. Themes
    3. Components

- md: |
    1. Resets
    2. Themes
    3. Components
    4. ==❗**Important** Components==
    5. ==❗**Important** Themes==
    6. ==❗**Important** Resets==

- pre: if we need to…
  title: |
    _Override_ `->` **Layers** \
    _Protect_ `->` **Importance**

- title: At **OddBird**

- title: Already **Sorting Layers**
  md: |
    - tools (Sass, no output)
    - config (Sass, no output)
    - reset
    - initial
    - patterns
    - layout
    - components (Sometimes SFC)
    - utilities (eg `.visually-hidden`)
  caption: |
    With slight variations between projects

- css: |
    /* first styles in the document */
    @layer reset, initial, patterns, layout, components, utilities;

- title: Wrap **Components**
  html: |
    <template>…</template>
    <script>…</script>
    <style lang='scss'>
    @layer components {
      /* all our component styles */
    }
    </style>

- title: Can't Layer `@use`
  scss: |
    @use 'patterns' layer(patterns);
    @layer { @use 'patterns'; }
  caption: These won't work

- title: Can **Layer in Partials**

- scss: |
    /* '_patterns.scss' */

    @layer patterns {
      /* all our css is nested */
    }

- title: Or use `meta.load-css()`

- scss: |
    /* 'screen.scss' */
    @use 'sass:meta';

    @layer patterns {
      @include meta.load-css('patterns');
    }

- title: Or use **Mixins**

- scss: |
    /* '_patterns.scss' */

    @mixin css {
      /* all our css is nested */
    }

- scss: |
    /* 'screen.scss' */
    @use 'patterns';

    @layer patterns {
      @include patterns.css();
    }

- pre: Fine to
  title: Repeat for **Sub-Layers**

- pre: if we need to…
  title: |
    _Override_ `->` **Layers** \
    _Protect_ `->` **Importance**

- pre: Fine to
  title: Use **Meaningful Selectors**
  sub: Like `#id`s and nesting

- pre: Also
  title: Can use `:where()`
  sub: To lower specificity in some cases

---
