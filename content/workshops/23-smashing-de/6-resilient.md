---
talk: Resilient Styles
date: 2023-09-06
quote:
  text: |
    If you have to **entirely re-engineer for IE**,
    overriding your standards-ready CSS in a conditional comment,
    you’re Doing It Wrong.
  cite: Natalie Downe, 2008

slides:

# intro -------------------

- pre: CSS is
  title: |
    **Resilient**

- pre: CSS
  title: |
    Errors **Silently**

- pre: |
    ~~*ReferenceError*~~
  title: Variable is not defined

- pre: |
    ~~*SyntaxError*~~
  title: Missing `}` after property list

- md: |
    ```css
      @what about (this: fake code I) {
        made-up :: that's not valid at all?
      }

      html {
        background: rebeccapurple;
        beep: boop;
        color: white;
        color: color(display-p3 0.9975 0.7295 0.8147);
        color: fake;
      }
    ```

- demo: resilient

- pre: The *Primary Feature*
  title: |
    Of **CSS**
- pre: The *Primary Feature*
  title: |
    Of ~~**CSS**~~ The **Entire Web**
- pre: Web *Compatible*
  title: |
    **Forwards** & **Backwards**

- quote: |
    Web **for all**. Web **on everything**.
  cite: World Wide Web Consortium, 1994
  caption: w3.org/Consortium/mission.html#principles
- img: dynamic-css/devices.jpg
  alt: A zillion different devices of all sizes (original)
- img: process/smartwatch.jpg
  alt: Lineup of smart watches
- img: unfriendly/braille.jpg
  alt: Braille keyboard and headphones
- img: unfriendly/agnesscott/smart-home.png
  alt: Google Home, Amazon Echo, and Apple HomePod

- title: No Style is **Universal**

- pre: Browser Support
  title: is **Not A Binary**

- title: SubGrid **is Cool**!
- title: SubGrid **Support**?

- img: resilient/yesno.jpg
  alt: >
    Hand written note says
    I like you, do you like me?

- caniuse: css-subgrid

- img: resilient/yesno-answer.jpg
  alt: >
    X's, checks, and question marks
    scribbled all over the note
    in random red and green variations

- title: 18%???

- pre: |
    *Arbitrary* Cutoff
  title: |
    **95%** ? **100%** ? Last **Two** ?

- quote: |
    **You can use it and not use it at the same time**,
    because *it works and it doesn't work at the same time*.
    It's **Quantum CSS**!
    It's Magic!
  cite: |
    Jen Simmons,
    [Intro to Resilient CSS](https://www.youtube.com/watch?v=u00FY9vADfQ)

- pre: We *Already*
  title: |
    **Know** How To Do This

- title: Responsive ➡ **Resilient**

- pre: Re-*Define*
  title: What **Support** Means

- pre: |
    Not *Re-Writing*
  title: For **Every Viewport**

- pre: |
    But *Building*
  title: |
    **Progressive** Enhancements

- pre: Then *Support*
  title: |
    **Everyone** Possible

# tools ------------------------

- pre: Tools Keep
  title: Getting **Better**


- pre: 2004...
  caption: Selector **Hacks**
  md: |
    ```css
    /* IE6 and below */
    * html #uno  { color: red }

    /* IE7 */
    *:first-child+html #dos { color: red }

    /* IE7, FF, Saf, Opera  */
    html>body #tres { color: red }

    /* IE8, FF, Saf, Opera (Everything but IE 6,7) */
    html>/**/body #cuatro { color: red }
    ```

- pre: 2009...
  title: |
    [**Modernizr**](https://modernizr.com/) for CSS3
  sub: Sniff *features* not *browsers*

- md: |
    ```css
    .no-cssgradients .header {
      background: url("images/glossybutton.png");
    }

    .cssgradients .header {
      background-image: linear-gradient(deeppink, rebeccapurple);
    }
    ```

- pre: Now…
  title: |
    **Evergreen** Browsers

- pre: Now…
  title: |
    **`@media`** & **`@supports`**

- pre: Now…
  title: |
    Better **Dev Tools**

- pre: There's more to
  title: |
    [CanIUse](https://caniuse.com)

- pre: Also…
  title: |
    [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
  sub: Mozilla Developer Network

- pre: Browser *Testing*
  title: Is **Great When Possible**

- pre: Browser *Testing*
  title: Is ~~**Required Constantly**~~

# no fallback -------------------

- section: |
    **No Fallback** Needed

- demo: fallback-none

- title: This **Site**...
  md: |
    - List **Markers**
    - Text **Decoration**
    - Scroll **Snap**
    - Clip **Path**

# silent fallback -------------------

- section: |
    Silent **Override**

- demo: cascade-funnel

- title: Order of **Appearance**
  sub: Is a progressive-enhancement _feature_

- demo: subgrid-forms

- face: jensimmons.jpg
  pre: |
    @jensimmons
  title: |
    **Jen** Simmons
  md: |
    [Resilient Videos](https://www.youtube.com/watch?v=u00FY9vADfQ&list=PLbSquHt1VCf1kpv9WRGMCA9_Nn4vCLZ9Y)

- demo: fallback-hero
  caption: |
    Based on a
    [LayoutLand video](https://www.youtube.com/watch?v=0X6zrW2QW8Q)
    by Jen Simmons

- title: This **Site**
  md: |
    - Responsive **Font Sizes**
    - **Grid** Layout
    - Custom **Properties**

- todo: Wide gamut colors

# support queries -------------------

- section: |
    **Support** Queries
  caption: |
    [MDN Page](https://developer.mozilla.org/pt-BR/docs/Web/CSS/@supports)

- demo: fallback-support

- title: This **Site**...
  md: |
    - Background-Clip **Text**
    - **Variable** Fonts
    - Object **Fit** (for flexing images)

- todo: Wide gamut colors in custom props

# supports selector -------------------

- section: |
    **Selector** Queries
  caption: |
    [MDN Page](https://developer.mozilla.org/pt-BR/docs/Web/CSS/@supports#Testing_for_the_support_of_a_selector)

- demo: fallback-selector

# media queries -------------------

- section: |
    **Preference** Queries
  caption: |
    [MDN Page](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features)

- pre: |
    *@media* Not Just
  title: |
    Print & **Viewport Sizes**

- title: prefers-**color-scheme**
  sub: |
    `light` | `dark` | `no-preference`
- title: prefers-**contrast**
  sub: |
    `low` | `high` | `no-preference`
- title: prefers-**reduced-motion**
  sub: |
    `reduce` | `no-preference`
- title: prefers-**reduced-transparency**
  sub: |
    `reduce` | `no-preference`

- demo: media-prefers

- title: Reduced **Motion**
  sub: Not _reduced animation_

- pen: Reduced Motion
  id: qBLqjxY

- section: |
    Media **Features**
  caption: |
    [MDN Page](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features)

- demo: fallback-hover

- pre: Combining
  title: Hover & **Pointer** Media
- md: |
    ```css
    /* touch screens */
    @media (hover: none) and (pointer: coarse) { }

    /* stylus-based screens */
    @media (hover: none) and (pointer: fine) { }

    /* gesture-based screens (Wii controller, Kinect) */
    @media (hover: hover) and (pointer: coarse) { }

    /* mouse & touch pad */
    @media (hover: hover) and (pointer: fine) { }
    ```

# resources --------------

- title: Platform **Status**
  md: |
    - [*Firefox*](https://platform-status.mozilla.org/)
    - [*Webkit*](https://webkit.org/status/) (Safari)
    - [*Chrome*](https://www.chromestatus.com/)
    - [*Edge*](https://developer.microsoft.com/en-us/microsoft-edge/status/)

- title: Browser **Issues**
  md: |
    - [*Firefox*](https://bugzilla.mozilla.org/)
    - [*Webkit*](https://bugs.webkit.org/) (Safari)
    - [*Chromium*](https://bugs.chromium.org/p/chromium/issues/list)
      (Chrome/Edge)

- title: More **Resources**
  md: |
    - [*Resilient Web Design*](https://resilientwebdesign.com/)
      by **Jeremy Keith**
    - [*Layout Land Resilient CSS*](https://www.youtu.be/u00FY9vADfQ)
      by **Jen Simmons**
    - [*Grid By Example*](https://gridbyexample.com)
      by **Rachel Andrew**
    - [*The Lean Web*](https://leanweb.dev/)
      by **Chris Ferdinandi**
    - [*Mozilla Developer Videos*](https://youtube.com/MozillaDeveloper)
      by [several of us]

- pre: Support *More Browsers*
  title: With **Lower Standards**

- pre: Care *More*
  title: By **Caring Less**

---
