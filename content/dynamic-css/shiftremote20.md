---
venue: Shift Remote
date: 2020-08-06
quote:
  text: |
    Our medium is not done.
    Our medium is still 
    **going through radical changes**.
  cite: Jen Simmons, *Designing with Grid*
slides:

# intro

- from: intro
  use: oddbird
- from: intro
  use: oss

# platform context

- title: |
    *1989…* HTML
  sub: Markup Language
- quote: |
    It is required that HTML be 
    **a common language between all platforms**...
  cite: WWW Project

- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top
  caption: |
    [WWW HyperMedia Browser](https://worldwideweb.cern.ch/browser/)
    & *Editor*
- img: no-harm/cern-next.jpg
  alt: NeXT computer with a worn-out sticker
  caption: The original NeXT-based server
- img: process/ibm-pc.jpg
  alt: Old IBM desktop
  position: top
- img: no-harm/4k.jpg
  alt: Modern desktops
- img: dynamic-css/devices.jpg
  alt: A zillion different devices of all sizes (original)
- img: process/smartwatch.jpg
  alt: Lineup of smart watches
- img: unfriendly/braille.jpg
  alt: Braille keyboard and headphones
- img: unfriendly/agnesscott/smart-home.png
  alt: Google Home, Amazon Echo, and Apple HomePod
- quote: |
    ...This implies no device-specific markup,
    **or anything which requires control over fonts or colors**.
  cite: WWW Project

- title: 😬

- img: no-harm/line-mode.jpg
  alt: The second browser, a text-only terminal
  position: top
  caption: |
    [Line Mode Browser](http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html), 
    developed by **Nicola Pellow**

# dynamic language

- pre: 1994 (*2000*)…
  title: |
    **Cascading** Style Sheets
- quote: |
    **An ordered list (cascade) of style sheets** … 
    can be referenced from the same document. 
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- quote: |
    The *user/browser* specifies *initial preferences* 
    and **hands the remaining influence over to the document**
    [authors].
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- quote: |
    [Authors] provide **hints** that the browser **may or may not use**.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)

- title: |
    **Declarative** Syntax \
    `!=` **Static** Results
- title: CSS is **Dynamic** & **Responsive**
  sub: Styling *Unknown Content* on an *Unknown Canvas*
  
# current color & calc()

- title: Responsive **Units**
  sub: |
    **`em`** & **`%`** » `rem`, `ch`, `ex`, `vw`, `vh`, `vmax`, `vmin`

- title: |
    *`currentColor`* Variable
  sub: Firefox **2006**...

- title: |
    *`calc()`* Function
  sub: Firefox **2011…**
- title: |
    `calc(` *`16px`* `+` *`20%`* `)`
  sub: Combine **Relative** & **Fixed** Widths!

# custom props

- title: Custom **Properties**
  sub: Firefox **2014**... Chrome/Safari **2016**... Edge **2017**

- title: |
    **`--aka`**`: 'css variables';`

- title: |
    **`-webkit-`**`property`

- title: |
    **`-<empty>-`**`property`

- title: |
    **`--`**`property`

- title: |
    **`--very`**`: few restrictions;`

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

# sass

- pre: Some *Overlap*
  title: With **Sass Variables**

- md: |
    ```scss
    $my-color: rebeccapurple;
    --my-color: rebeccapurple;
    ```

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

# inheritance

- pre: Custom *Properties*
  title: Inherit By **Default**

- md: |
    ```css
    html {
      --brand-color: hsl(330, 100%, 45%);
      --action: var(--brand-color);
    }

    a {
      color: var(--action);
    }
    ```

- title: Great for **Global Design Tokens**

- title: Use **`:root`** With Caution
  sub: Higher specificity, and some unexpected results...

- pre: Reset *Inheritance*
  title: With **Explicit** Selectors

- title: Declare **Locally**
  md: |
    ```css
    .light-theme {
      --text: black;
    }

    .dark-theme {
      --text: white;
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

- title: Great for **Components**

- pre: Optional args...
  title: Leave **Undefined**
  md: |
    ```css
    [data-btn] {
      background: var(--btn-color, blue);
    }
    ```

# functions 

- title: Custom **Functions** & **Mixins**

- demo: vars-stripes

# Layouts 

- title: Dynamic **Layouts**

- demo: vars-susy
  resize: both
  caption: |
    OOCSS [Grid Nesting Test](http://oocss.org/grids_docs.html)

# grids 

- pre: 2017...
  title: CSS **Grid**
  sub: |
    **March 6-9**: Firefox 52 **&** Chrome 57

- pen: Grid Terminology
  id: ObmjeZ
  user: stacy

- pre: Item *Placement*...
  title: |
    grid-**column**: `<start>` **/** `<end>` \
    grid-**row**: `<start>` **/** `<end>`

- title: |
    grid-column: **span `<count>`**

- title: grid-**template**
  md: |
    ```css
      'header          header         header' auto
      'nav             main           aside' 1fr
      'nav             footer         aside' auto
    / fit-content(20%) minmax(0, 1fr) 20em
    ```

# charts

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

- demo: vars-charts
  caption: |
    Article on [CSS Tricks](https://css-tricks.com/css-charts-grid-custom-properties/)

- title: CSS **Animation**

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

- demo: vars-temps

# invaders 

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

# Sprite Animations 

- img: dynamic-css/vueconf19/sprite.jpeg
  alt: Krystal Campioni sprite animation
  fit: contain

- img: dynamic-css/vueconf19/animations-copy.png
  alt: Sprite from Monster Slayer animation
  fit: contain

- title: Using **Vue**
  md: |
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

# resources

- face: anatudor.jpg
  pre: |
    @anatudor
  title: |
    **Ana** Tudor
  sub: |
    [CSS Tricks](https://css-tricks.com/author/thebabydino/)
    &&
    [CodePen](https://codepen.io/thebabydino/)

- title: My **Related Articles**...
  md: |
    - [More CSS Charts, with Grid & Custom Properties ](https://css-tricks.com/css-charts-grid-custom-properties/)
    - [CSS Custom Properties in the Cascade](https://www.smashingmagazine.com/2019/07/css-custom-properties-cascade/)
    - [Using Custom Property “Stacks” to Tame the Cascade ](https://css-tricks.com/using-custom-property-stacks-to-tame-the-cascade/)
---
