---
title: Integrated Documentation
talk: Integrated **Documentation** 
date: 2020-05-22
slides:

# intro ----------------

- pre: So We Built 
  title: Some **Beautiful Systems**

- pre: I'm Sorry, *But*
  title: First Rule of **Design Systems**

- pre: If They're Not *Communicated*,
  title: They **Don't Exist**
- pre: If They're Not *Integrated*,
  title: They **Won't Exist**

- pre: If We *Don't*
  title: |
    **Know** The Patterns
- pre: If We *Don't*
  title: |
    **Use** The Patterns
- pre: There *Won't*
  title: |
    **Be** Any Patterns

- pre: Solve A
  title: |
    **Human** Problem
- pre: Solve A
  title: |
    **Process** Problem

- pre: Simplify
  title: Design **Decisions**
- pre: Simplify
  title: Code **Decisions**
- pre: Simplify
  title: Team **Communication**
- pre: Simplify
  title: Best **Practice**

- pre: |
    *Single* 
  title: Source of **Truth**

- pre: Potentially *Cross-*
  title: |
    **Application** & **Platform**

- quote: |
    My job is to make sure 
    the system is **modular and flexible** enough 
    to be used in **any number of unpredictable ways**.
  cite: Mina Markham, [Pantsuit](https://medium.com/git-out-the-vote/pantsuit-the-hillary-clinton-ui-pattern-library-238e9bf06b54)

# examples ----------------

- img: patterns/lightning.jpg
  alt: Salesforce Lightning Design System
  position: top

- img: patterns/lonely-planet-colors.jpg
  alt: Lonely Planet Design System
  position: top

- img: patterns/chimp-grids.jpg
  alt: Mailchimp Grids
  position: top

- img: advanced-css/sizes-doc.jpg
  alt: Size Previews
  fit: contain

- img: patterns/chimp-voice.jpg
  alt: Mailchimp Voice
  position: top

- img: patterns/lightning-motion.jpg
  alt: Salesforce LDS Motion System
  position: top

- img: patterns/NYC-m.jpg
  alt: M

- img: patterns/NYC.jpg
  alt: New York City Transit Authority Graphic Standards Manual

- img: patterns/NYC-date.jpg
  alt: 1970
  fit: contain

- img: patterns/NYC-n.jpg
  alt: N

- img: patterns/NYC-numbers.jpg
  alt: Numbers 5-8

- img: patterns/NYC-sign.jpg
  alt: Diagram of sign construction
  fit: contain

# integration ----------------

- pre: Design Systems 
  title: Represent **Integration**
  sub: Design **&** Code **&** Process **&** Tools **&** Docs **&** ???

- title: Design **Systems**
  sub: |
    **Style** Guides + **Tool** Kits + **Component** Libraries + **???**

- pre: Involve
  title: The **Full Team**
- pre: Represent
  title: Multiple **Concerns**

- img: patterns/lego-library.jpg
  alt: Lego Component Library

- img: agile-systems/lego-organizer.jpg
  alt: Lego Organizer

- img: patterns/lego.jpg
  alt: Lego Airplane

- img: agile-systems/lego-play.jpg
  alt: |
    Girl from an 80s Lego commercial,
    holding her fantastic creation with a smirk

- img: agile-systems/lego-food.jpg
  alt: Baby eating a Lego block

- img: patterns/lightning-code.jpg
  alt: LDS icons with markup

- img: patterns/lightning-codex.jpg
  alt: Scribbled out LDS icons with markup

- pre: You are *not* 
  title: |
    **MailForce** or **InstaFace**
  sub: (unless you are)

- pre: Similar *Problems*
  title: Unique **Constraints**

- title: (Team **Size**)
- title: (Team **Structure**)
- title: (Internal **vs.** Consulting)
- title: (Private **vs.** Public)
- title: (Is it **1970**?)

- from: intro
  use: oddbird

# selling the idea ----------------------

- pre: How do you *sell it* 
  title: To **Clients** or **Bosses**?

- pre: YMMV
  title: (We **Often Don't**)

- quote: |
    Since OddBird thinks about handoff from the beginning,
    **maintenance has been super easy.**
    For example, 100% unit test coverage was a given.
    **I never had to ask for it.**
  cite: Sara Taillon, CTO at ORCAS

- pre: Lower
  title: Maintenance **Costs**
- pre: Lower
  title: Maintenance **Time**
- pre: Better
  title: Team **Communication**
- pre: Faster
  title: Feature **Development**
- pre: Consistent
  title: Design **Patterns**
- pre: More
  title: Time for **Details**
- pre: Encourage
  title: Best **Practice**
- pre: Encourage
  title: |
    **Accessibility**

- pre: Accessibility 
  title: Is A **Basic Human Right**
  caption: |
    [UN Convention on the Rights of Persons with Disabilities](https://www.un.org/development/desa/disabilities/convention-on-the-rights-of-persons-with-disabilities/article-9-accessibility.html)

- title: |
    **Perceivable**, \
    **Operable**, \
    **Understandable**, \
    **Robust**

- title: (Learn To **Test**)
  md: |
    - Browser DevTools 
    - [Axe](https://www.deque.com/axe/devtools/) DevTools
    - [VoiceOver](https://www.apple.com/accessibility/mac/vision/) (Mac) 
    - [NVDA](https://www.nvaccess.org/download/) (PC) 

- pre: Accessibility is 
  title: For **Everyone**
  sub: Along any number of spectrums

- pre: Provide 
  title: Accessible **Patterns**

- pre: Document
  title: Accessible **Use Cases**
  sub: Along with uses to avoid

# audit -----------------------

- section: |
    **Audit** Existing Materials

- title: What Do We **Have Already**?

- title: Take **Screenshots** & **Organize**

- img: docs/pantsuit-audit.jpeg
  alt: |
    Design patterns from the Hillary campaign, 
    printed on paper, cut apart,
    and labeled with sticky notes
  caption: |
    Image by 
    [Mina Markham](https://medium.com/git-out-the-vote/pantsuit-the-hillary-clinton-ui-pattern-library-238e9bf06b54)

- img: agile-systems/pnc-buttons.jpg
  caption: |
    Image by
    [Brad Frost](http://bradfrost.com/blog/post/interface-inventory/)

- title: |
    [cssstats.com](https://cssstats.com/stats?url=smashingconf.com)

- img: agile-systems/pages-to-patterns.jpg
  alt: printed and cut-out UI elements grouped on a page
  fit: cover
  caption: |
    Image from
    [From Pages to Patterns](https://alistapart.com/article/from-pages-to-patterns-an-exercise-for-everyone/)
    by Charlotte Jackson

- section: |
    **Plan** Your Approach

- title: What **Do We Need**?
- title: What's The **Code Stack**?
- title: What's The **Process**?

- pre: Start *Small*
  title: Get It **Right** & **Expand**

- pre: Continuous *Integration*
  title: |
    **Accurate** `>` Complete
- pre: Continuous *Integration*
  title: |
    **Maintained** `>` Complete

- pre: Avoid
  title: |
    **Separate** Forks 

- pre: Start *Designing*
  title: Look for **Patterns**

- pre: Go *Back*
  title: |
    **Iterative** Process

- pre: Start With
  title: What **You Know**

- pre: Start With
  title: What **Has Most Reach**

- pre: Start with 
  title: Design **Tokens**
  sub: Board reach, low specificity

# automation ----------------------

- section: |
    **Structured** Code

- img: agile-systems/color-preview.jpg
  alt: A color palette with 3 colors and their code values
  fit: contain

- title: Sass **Variables**
  md: |
    ```scss
    $color-brand-blue: hsl(195, 85%, 35%);
    $color-brand-orange: hsl(24, 100%, 39%);
    $color-brand-pink: hsl(330, 85%, 48%);
    ```

- title: 👍 DRY
  md: |
    ```scss
    .example {
      background: $color-brand-blue;
    }
    ```

- title: 👎 Not **Organized** 
- title: 👎 Encourages **One-Offs**
- title: 👎 Difficult to **Automate**

- pre: Make *Systems*
  title: The **Lazy** Option

- pre: |
    *Automate* 
  title: From **Structured Code**

- md: |
    ```scss
    // sass
    $brand: (
      'blue': hsl(195, 85%, 35%),
      'orange': hsl(24, 100%, 39%),
      'pink': hsl(330, 85%, 48%),
    );
    ```

- md: |
    ```json
    // json
    {
      'brand': {
        'orange': 'hsl(24, 100%, 39%)',
        'blue': 'hsl(195, 85%, 35%)',
        'pink': 'hsl(330, 85%, 48%)'
      }
    }
    ```

- md: |
    ```yaml
    # yaml
    brand:
      orange: hsl(24, 100%, 39%)
      blue: hsl(195, 85%, 35%)
      pink: hsl(330, 85%, 48%)
    ```

- pre: |
    *Sass* Provides
  title: Design **Data Types**

- pre: |
    *Lengths* 
  title: With **Unit-Math** 
  sub: |
    `16px + 12cm`
  
- pre: |
    *Colors* 
  title: With **Adjustment Functions**
  sub: |
    `color.adjust($color, $lightness: 15%)`

- pre: Pick *One Source*
  title: And **Export Anywhere** 

- md: |
    ```scss
    // json.scss
    @include json-encode($colors);
    ```

- md: |
    ```css
    /*! json-encode: '{
      'brand-orange': 'hsl(24, 100%, 39%)',
      'brand-blue': 'hsl(195, 85%, 35%)',
      'brand-pink': 'hsl(330, 85%, 48%)'
    }' */
    ```

- pre: Salesforce 
  title: YAML + **Theo**

- md: |
    ```yml
    global:
      type: "color"
      category: "brand-colors"

    props:
      text_default:
        value: "rgb(62, 62, 60)"
      text_warning:
        value: "rgb(255, 183, 93)"
    ```
  caption: |
    Salesforce-UX [**Theo**](https://github.com/salesforce-ux/theo)

- pre: Relationships *Limited*
  title: To **String Interpolation** 

- md: |
    ```yml
    aliases:
      vermilion:
        value: "7, 83%"
    props:
      color_vermilion:
        value: "hsla({!vermilion}, 53%, 1)"
      color_vermilion_dark:
        value: "hsla({!vermilion}, 43%, 1)"
    ```

- pre: Advantage?
  title: More **Generic Syntax**

- pre: Amazon 
  title: Json + **Style Dictionary**

- pre: Relationships *Limited*
  title: To **Name Alias**

- md: |
    ```json
    {
      "color": {
        "theme": {
          "brand": { "value": "{color.brand.main.value}" },
          "light": { "value": "#ebebeb" }
        }
      }
    }
    ```
  caption: |
    Amazon [**Style Dictionary**](https://amzn.github.io/style-dictionary/#/)

- img: docs/cti.png
  alt: |
    A hierarchy of category (color),
    type (background),
    item (button),
    sub-item (primary),
    and state (active)
  fit: contain
  caption: |
    Style Dictionary Recommended 
    ["CTI" structure](https://amzn.github.io/style-dictionary/#/properties?id=category-type-item)

- pre: Let *Data*
  title: Determine **Structure**?

- pre: |
    *Global* Tokens
  title: Color » Text » Action
  sub: Category, type, item

- pre: |
    *Object* Tokens
  title: Color » Link » Focus
  sub: Category, item, state

- pre: Know The *Trade-Offs*
  title: Adjust To **Your Needs**

# integrated -----------------------

- section: |
    **Integrate** Tools & Process

- pre: Integrated 
  title: |
    **Documentation** Generators

- img: patterns/sassdoc.jpg
  position: top
  caption: |
    [**SassDoc**](http://sassdoc.com)
    by [Hugo Giraudel](https://hugogiraudel.com/)

- md: |
    ```scss/2,6,8
    /// The primary function for
    /// accessing colors in your palette...
    /// @example scss
    ///   html {
    ///     background: color('background');
    ///   }
    /// @param {string | list} $color -
    ///   The name of a color in your palette...
    /// @return {color} -
    ///   A calculated css-ready color...
    @function color(...) {...}
    ```

- img: docs/sassdoc-theme.jpg
  alt: Generated site, showing mixins and functions
  position: top
  fit: 100% auto
  caption: |
    [SassDoc Default Theme](http://sassdoc.com/theme-gallery/preview/default/)

- img: docs/herman.jpg
  position: top
  fit: 100% auto
  caption: |
    OddBird's [**Herman**](https://oddbird.net/herman)
    is based on [**SassDoc**](http://sassdoc.com) syntax

- title: |
    `///` *`@colors`* \
    `///` *`@sizes`* \
    `///` *`@ratios`* \
    `///` *`@fonts`*

- md: |
    ```scss/3
    /// These colors are rarely used directly, 
    /// but form the basis of our palette.
    /// @group color
    /// @colors
    $brand-colors: (
      'brand-blue': hsl(195, 52%, 31%),
      'brand-orange': hsl(24, 100%, 62%),
      'brand-pink': hsl(330, 100%, 45%),
    );
    ```

- img: agile-systems/herman-colors.jpg
  alt: Herman Color Previews
  fit: contain

- img: agile-systems/herman-scale.jpg
  alt: Herman Scale Previews (Rulers)
  fit: contain

- img: agile-systems/herman-ratios.jpg
  alt: Herman Ratio Previews
  fit: contain

- img: patterns/herman-fonts.jpg
  alt: Herman Font Specimens
  fit: contain

# objects ----------------

- pre: Documenting
  title: Full **Components**
  sub: Related `html`, `css`, and `js`

- pre: Components 
  title: Also **Provide Meaning**

- md: |
    ```html
    <svg data-icon="news" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" width="20px" height="20px" viewBox="0 0 20 20">
    <path d="M14.5 14h-6c-0.276 0-0.5-0.224-0.5-0.5v-4c0-0.276 0.224-0.5 0.5-0.5h6c0.276 0 0.5 0.224 0.5 0.5v4c0 0.276-0.224 0.5-0.5 0.5zM9 13h5v-3h-5v3z"></path>
    <!-- more paths here -->
    </svg>
    ```

- title: | 
    `<`*`icon`* `name="gear" />`

- pre: Built-In
  title: |
    **Consistency** & **Accessibility**

- pre: Built-In
  title: |
    "API" for **Modifiers**

- pre: Document...
  title: Proper **Usage**
- pre: Document...
  title: Allowed **Modifications**

- pre: Where Do We
  title: |
    **Document?**

- pre: What Can We
  title: |
    **Automate?**

- pre: Depends on
  title: Stack or **Framework**

- pre: Depends on
  title: Who **Maintains** It

- pre: |
    *Herman* is
  title: | 
    **Sass**-Driven

- pre: Herman *Supports* 
  title: |
    **Nunjucks** Examples
  sub: Linked from Sass

- md: |
    ```scss
    /// Navigation items, with inactive and active states.
    /// @group nav
    /// @example njk
    ///   {% import 'nav.macros.njk' as nav %}
    ///   {{ nav.bar(active="dashboard", items=[…]) }}
    .nav-bar {
      /* … */
    }
    ```

- img: agile-systems/herman-comp.jpg
  alt: Rendered nav component
  fit: contain

- title: |
    **Framework**-Specific Tools

- img: agile-systems/vueds.jpg
  alt: Vue Design Systems
  caption: |
    [VueDS](https://vueds.com/) (with Theo)

- md: |
    ````md
    <docs>
      ```jsx
      <nav-bar active="Dashboard" :navItems="[…]"/>
      ```
    </docs>
    ````

- img: agile-systems/vueds-comp.jpg
  alt: Rendered VueDS Component
  fit: contain

- img: docs/storybook.jpg
  alt: Storybook
  caption: |
    [Storybook](https://storybook.js.org/)
    for React, Vue, Angular, & More

- img: advanced-css/storybook.jpg
  alt: Screenshot of storybook showing a button component
  fit: contain

# DIY ------------------------

- pre: Build Your Own
  title: With **Doxray** + (**Eleventy**?)
  caption: |
    https://github.com/himedlooff/doxray
    by [Mike Morici](https://twitter.com/himedlooff)

- pre: Parses
  title: Comments as **YAML**

- md: |
    ```css
    /* @docs
    label: Box Sizing
    category: reset
    note: |
      Use border-box by default, globally.
    */
    *, ::before, ::after { box-sizing: border-box; }
    ```

- pre: Define
  title: Your Own **Annotations**

- pre: Customize
  title: For **Any Language**

- md: |
    ```twig
    {# @docs
    label: pullquote
    category: typesetting
    params:
      text:
        type: string
        note: Rendered as block markdown
    #}
    {% macro blockquote(text) %}…{% endmacro %}
    ```

- md: |
    ```js
    /* @docs
    label: elide
    category: typesetting
    note: |
      Elide HTML at a given word count, and append `…` if elided.
    params:
      html:
        type: string
      count:
        type: Number
        default: 50
    */
    const elide = (html, count = 50) => { /* … */ }
    ```

- pre: |
    *Render* Docs
  title: However **You Like**

# outro ----------------------

- title: |
    **Meaningful** & **Structured** Code
  sub: Readable by **Humans** & **Machines**

- title: |
    **Inline** Documentation
  sub: Helps the human factors…

- title: |
    **Agile** & **Integrated** Process
  sub: Everyone shares a single-source…
---
