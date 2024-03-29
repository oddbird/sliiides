---
venue: SmashingConf Austin
date: 2020-10-13
quote:
  text: |
    Our medium is not done.
    Our medium is still
    **going through radical changes**.
  cite: Jen Simmons, *Designing with Grid*
slides:
# intro to vars
- pre: I heard
  title: You Like **Variables**
- code: |
    a {
      color: $brand-primary;
    }
  caption: Sass
- lang: less
  code: |
    a {
      color: @brand-primary;
    }
  caption: Less
- lang: js
  code: |
    render(
      <a css={css`
        color: ${brandPrimary};
      `}>...</a>
    )
  caption: JavaScript (Emotion)

- title: |
    **`$name`**`: `*`value`*`;`
- title: |
    **`color`**`: `*`$name`*`;`
- title: |
    **`color`**`: `*`value`*`;`

- pre: Re-use
  title: Common **Values**

- pre: Single
  title: Source of **Truth**

- title: |
    **D**on't **R**epeat **Y**ourself

- pre: Provide
  title: Meaningful **Names**

- title: |
    **`hsl(`**`329.8 67.7% 57.5%`**`)`**

- title: |
    `$`**`brand-primary`**
  caption: |
    Where is this color *from*

- title: |
    `$`**`action`**
  caption: |
    How is this color *used*

# in CSS
- pre: What about
  title:
    Variables In **CSS**?

- pre: 2006…
  title: |
    **current**Color

- pre: From *SVG 1*
  title: Borrowed for **CSS 3**

- pre: We Don't
  title: |
    **Assign** A Value

- pre: The *current* value
  title: Of the **Color** Property

- title: From **The Cascade**

- pre: current*Color*
  title: Also **Cascades**!

- pen: Dynamic Variables (currentColor)
  id: XWKbzvd

# intro custom props

- pre: 2014…
  title: Custom **Properties**

- title: |
    **`--aka`**`: 'css `*`variables`*`';`

- caniuse: css-variables

- title: |
    `-webkit-`**`property`** \
    `-moz-`**`property`** \
    `-<empty>-`**`property`**

- title: |
    **`--property`**`: `*`value`*`;`

- title: |
    `var(` **`--property`** `)`

- code: |
    html {
      --property: hsl(329.8 67.7% 57.5%);
    }

    a {
      color: var(--property);
    }
  caption: |
    Define like *any property* on *any element*

- pen: Dynamic Variables (Custom Properties)
  id: NWrGxEW

- quote: |
    `.ಠ_ಠ { ` \
    **&nbsp;&nbsp;`--（╯°□°）╯`**`: `**`︵┻━┻`**`;` \
    `}`
    is valid CSS.
  cite: Tab Atkins
  source: |
    [@tabatkins](https://twitter.com/tabatkins/status/1099050056760487936)
  caption: |
    You can even make it
    [flip a table](https://twitter.com/tabatkins/status/1099093964727083008)

- pen: Page construction in CJSS
  user: scottkellum
  id: WqwjLm
  tabs: css

# global tokens
- pre: Custom *Properties*
  title: Inherit By **Default**

- pre: Establish
  title: |
    **Global** Design Tokens

- code: |
    // colors
    $brand-color: hsl(330, 100%, 45%);
    $action: $brand-color;

    // sizes
    $gutter: 1.5rem;
    $spacer: $gutter * 3;

- code: |
    html {
      /* colors */
      --brand-color: hsl(330, 100%, 45%);
      --action: var(--brand-color);

      /* sizes */
      --gutter: 1.5rem;
      --spacer: calc(var(--gutter) * 3);
    }
  caption: |
    `:root` has higher specificity

- pre: Not a
  title: Total **Replacement**

- pre: Like having
  title: |
    **Back-End** & **Front-End**

- pre: They have
  title: Different **Strengths**
- pre: Use them
  title: Together **NSYNC**

- pre: Define *CSS Properties*
  title: From **Sass Variables**

- code: |
    $gutter: 1rem;
    html { --gutter: #{$gutter}; }

- code: |
    $brand-colors: (
      'brand-blue': hsl(195, 52%, 31%),
      'brand-orange': hsl(24, 100%, 62%),
      'brand-pink': hsl(330, 100%, 45%),
    );

- code: |
    html {
      @for $name, $value in $brand-colors {
        --#{$name}: #{$value};
      }
    }

- pre: More than
  title: |
    Global **Tokens**

- title: Custom **Properties**
  sub: defined by systems, components, etc

- title: Values That **Change**

- title: Different **States**
  sub: hover, focus, active, etc

- title: Different **Variations**
  sub: info, warning, error, etc

- title: Different **Context**
  sub: light/dark mode, viewports, etc

- pre: The 🌊 *Cascade*
  title: Resolves **Conflicts**

- md: |
    1. 🗺 *Origin* & ❗*importance*
    2. 🎯 Selector *Specificity*
    3. ⏭ Source *Order*

- title: Layered **Origins**
  md: |
    1. ==🎨 **Author** Styles==
    2. 👥 **User** Preferences
    3. 🖥 **User Agent** Defaults

- md: |
    1. ==❗🖥 User Agent **Important**==
    2. ==❗👥 User **Important**==
    3. ==❗🎨 Author **Important**==
    4. 🎨 Author Styles
    5. 👥 User Preferences
    6. 🖥 User Agent Defaults

- md: |
    1. ==🎠 **Transitions**==
    2. ❗🖥 User Agent Important
    3. ❗👥 User Important
    4. ❗🎨 Author Important
    5. ==🏇🏽 **Animations**==
    6. 🎨 Author Styles
    7. 👥 User Preferences
    8. 🖥 User Agent Defaults

- md: |
    1. *Inline* `style`s
    2. *Unique* `ID`s
    3. *Reusable* `class`es & `attributes`
    4. *Element* `type`s
    5. *Universal* `*`

- pre: We need
  title: Custom **Cascades**

- pre: With
  title: Custom **Properties**

- pre: Capture
  title: Cascading **Values**

- pre: Apply them
  title: Somewhere **Else**

- section: Managing **Context**

- pre: For *contextual styling*
  title: |
    **Proximity** Matters

- pre: The 🌊 *Cascade*
  title: Ignores **Proximity**

- pre: 🧬 *Inheritance*
  title: Is All **Proximity**

- pre: Custom *Properties*
  title: Inherit By **Default**

- pre: Reset *Inheritance*
  title: With **Explicit** Selectors

- pen: Cascading Variables & Proximity
  id: wvWKMVv

- title: Define **Anywhere**

- title: Define **Locally**
  code: |
    button {
      --btn-color: green;
    }

- title: Define **Universally**
  sub: Functionally "turns off" inheritance
  code: |
    * {
      --border-width: 0;
    }
  caption: |
    [Properties & Values API](https://drafts.css-houdini.org/css-properties-values-api/)

- title: Complex **Selectors**
  code: |
    .typeset > * {
      --grid-area: content;
    }

- title: Define **Nowhere**
  code: |
    .typeset > * {
      grid-area: var(--grid-area);
    }
  caption: |
    Like JS **`undefined`**

- title: |
    `var(` **`--name`** `, fallback)`

- title: Define **Nowhere**
  code: |
    .typeset > * {
      grid-area: var(--grid-area, content);
    }

- pre: Fallback for
  title: |
    **Undefined** Properties
  caption: Not for older browsers!

- title: Font **Stacks**
  sub: |
    `font-family: `*`Consolas`*`, `*`Menlo`*`, `*`'Courier New'`*`, `*`monospace`*`;`

- pen: Invalid, Unsupported, or Undefined
  id: OYoVLX

- pre: |
    *Undefined* properties
  title: Allow **Inherited** Values

- pre: |
    *Unlike* normal properties
  title: We Can **Apply Selectively**

- pre: Great for
  title: |
    **Contextual** Variations

- pre: Global *keywords*…
  title: Resolve on **Custom Properties**
  sub: They are not passed along as a value

- pre: Global *keywords*…
  title: |
    Inherit, **Initial**, Unset, Revert

- pre: Un-define
  title: |
    Using **`initial`** Keyword

- title: Universal **Un-Define**
  code: |
    * {
      --grid-area: initial;
    }

- section: Managing **Intent**

- title: Layering **Modifiers**
  md: |
    1. State
    2. Variation
    3. Object
    4. Context
    5. Global Defaults

- title: Layering **Modifiers**
  md: |
    1. State
    2. Variation
    3. ==Context==
    4. Object
    5. Global Defaults

- title: Font **Stacks**
  sub: |
    *`Consolas`*`, `*`Menlo`*`, `*`'Courier New'`*`, `*`monospace`*

- title: Intent **Stacks**
  sub: |
    *`state`*`, `*`variation`*`, `*`object`*`, `*`context`*`, `*`default`*

- title: |
    `var(` **`--name`** `, fallback)`
  sub: Only *One Fallback*

- title: Allows **List Values**
  sub: |
    `var(--my-font,` *`Baskerville, Georgia, serif`*`)`

- title: |
    **Nested** Fallbacks
  md: |
    `var(--my-color,` *`var(--other-color, pink)`*`)`

- pen: Layering State & Type
  id: MWeaeGR

- code: |
    [data-theme] {
      background-color: var(--theme-bg, var(--global-bg));
      color: var(--theme-color, var(--global-color));
    }

- code: |
    [data-theme='light'] {
      --theme-bg: var(--neutral-light);
      --theme-color: var(--neutral-dark);
      --theme-link: var(--primary-dark);
    }

    [data-theme='dark'] {
      --theme-bg: var(--neutral-dark);
      --theme-color: var(--neutral-light);
      --theme-link: var(--primary-light);
    }

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
        --user-mode, var(
          --html-mode, var(
            --os-mode, 1
          )
        )
      );
    }

- title: |
    [Cascading Colors](https://cascading-colors.netlify.com/)

- section: Describing **Objects**

- face: nicolesullivan.jpg
  pre: |
    @stubbornella
  title: |
    **Nicole** Sullivan
  sub: |
    Revisiting [**Object Oriented CSS**](https://github.com/stubbornella/oocss)

- pre: Object *Structure*
  title: Minimal & **Reusable**

- pre: Object *Skin*
  title: Multiple **Theme Options**

- title: |
    **Extending** Selectors
  sub: The Sass `@extends` feature

- lang: html
  code: |
    <div class="media">
      <img class="fixedMedia" src="myImg.png" />
      <div class="text">...</div>
    </div>

- pre: |
    *Extend* Objects
  title: By Applying **Multiple Classes**

- lang: html
  code: |
    <div class="media media_reverse">
      <img class="fixedMedia" src="myImg.png" />
      <div class="text">...</div>
    </div>

- lang: html
  code: |
    <div class="media media_rounded">
      <img class="fixedMedia" src="myImg.png" />
      <div class="text">...</div>
    </div>

- pen: Media Object
  id: ZEObOVg

- pre: Custom *Properties*
  title: Are **Not Just** Variables

- pre: Allow us to
  title: |
    **Define** Our Own Cascades

- pre: |
    *Attribute* Selectors
  title: |
    Provide An **Interface**

- md: |
    - `[attr]` ➡ **Presence** (even if empty)
    - `[attr`**`=`**`"..."]` ➡ **Exact** match
    - `[attr`**`*`**`="..."]` ➡ **Any** match
    - `[attr`**`~`**`="..."]` ➡ **Space**-delimited (like classes)
    - `[attr`**`|`**`="..."]` ➡ **Hyphen**-delimited
    - `[attr`**`^`**`="..."]` ➡ **Starts** with...
    - `[attr`**`$`**`="..."]` ➡ **Ends** with...
    - `[attr="..."` **`i`**`|`**`s`**`]` ➡ **Case** sensitivity
  caption: |
    More [details on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

- title: More **Resources**
  md: |
    - [CSS Custom Properties In The Cascade](https://www.smashingmagazine.com/2019/07/css-custom-properties-cascade/), by **me**
    - [Using Custom Property “Stacks” to Tame the Cascade](https://css-tricks.com/using-custom-property-stacks-to-tame-the-cascade/), by **me**
    - [Global and Component Style Settings with CSS Variables](https://www.sarasoueidan.com/blog/style-settings-with-css-variables/),
      by **Sara Soueidan**
    - [A user’s guide to CSS variables](https://increment.com/frontend/a-users-guide-to-css-variables/),
      by **Lea Verou**
---
