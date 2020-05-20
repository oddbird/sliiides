---
title: Modern & Resilient
talk: Modern & **Resilient**
date: 2020-05-21
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

- pre: This is *CSS*
  title: |
    **Primary Feature**

- quote: |
    Web **for all**. Web **on everything**.
  cite: World Wide Web Consortium, 1994
  caption: w3.org/Consortium/mission.html#principles
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
- pre: |
    *Forwards* & *Backwards*
  title: |
    **Compatible**  
- quote:
    WWW parsers should 
    **ignore tags** which they do not understand, 
    and **ignore attributes** which they do not understand 
    of tags which they do understand.
  cite: WWW Project

- pre: Browser Support
  title: is **Not A Binary**

- pre: Do *Browsers*
  title: |
    **Support** CSS Grid?

- pre: Can *I*
  title: |
    **Use** CSS Grid?

- pre: List of
  title: |
    **Supported** Browsers

- img: resilient/yesno.jpg
  alt: Do you like grid? check yes or no
  caption: |
    [CanIUse](https://caniuse.com/)?

- title: 🤞 Please **Say Yes** 🤞

- img: resilient/yesno-answer.jpg
  alt: Mixed yes/no/maybe answers

- pre: |
    *Arbitrary* Cutoff
  title: |
    **95%** ? **100%** ? Last **Two** ?

- img: resilient/how-this-works.jpg
  alt: |
    meme:
    That's not how this works!
    That's not how any of this works!
  fit: contain

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

- pre: Can *You Use*
  title: |
    **Hover** or **Cursor** Styles?
  sub: Not worth much on touch devices...

- pre: Responsive ➡ *Resilient*
  title: More Than **Viewport Width**

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

- pre: First...
  title: |
    **Browser** Sniffing

- caption: Selector **Hacks**
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

- caption: Value **Hacks**
  md: |
    ```css
    /* IE6 */
    #once { _color: blue }

    /* IE6, IE7 */
    #doce { *color: blue; /* or #color: blue */ }

    /* Everything but IE6 */
    #diecisiete { color/**/: blue }

    /* IE6, IE7, IE8, but also IE9 in some cases :( */
    #diecinueve { color: blue\9; }
    ```

- pre: 00s...
  title: |
    IE **Conditional** Comments
- md: |
    ```html
    <!--[if IE 7]>
      <link rel="stylesheet" type="text/css" href="css/ie7.css" />
    < ![endif]-->
    <!--[if IE 6]>
      <link rel="stylesheet" type="text/css" href="css/ie6.css" />
    < ![endif]-->
    ```

- pre: 2008...
  title: |
    IE **Conditional** Classes
  sub: |
    From [Paul Irish](https://www.paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/)

- md: |
    ```html
    <!--[if lt IE 7]>      <html class="ie6"> <![endif]-->
    <!--[if IE 7]>         <html class="ie7"> <![endif]-->
    <!--[if IE 8]>         <html class="ie8"> <![endif]-->
    <!--[if gt IE 8]><!--> <html>         <!--<![endif]-->
    ```
- md: |
    ```css
    div.foo { color: inherit;}
    .ie6 div.foo { color: #ff8000; }
    ```

- pre: 2009...
  title: |
    [**Modernizr**](https://modernizr.com/) for CSS3

- md: |
    ```css
    .no-cssgradients .header {
      background: url("images/glossybutton.png");
    }

    .cssgradients .header {
      background-image: linear-gradient(cornflowerblue, rebeccapurple);
    }
    ```  

- pre: Now…
  title: |
    **Evergreen** Browsers

- pre: Now…
  title: |
    **Cross-OS** Browsers
  sub: https://www.microsoft.com/en-us/edge

- pre: Now…
  title: |
    **`@media`** & **`@supports`**

- pre: Now…
  title: |
    `@supports` **`selector()`**

- pre: Now…
  title: |
    Better **Dev Tools**

- title: |
    [CanIUse](https://caniuse.com)
- title: |
    [StatCounter](https://gs.statcounter.com/browser-market-share)
- title: |
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

- title: |
    [**Nova** Website](https://panic.com/nova/)
  md: |
    - **Wide-Gamut** Colors
    - **Skew** & Reverse-Skew (no fallback)

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

- title: CSS (**Motion**) Remedy
  md: |
    ```css
    @media (prefers-reduced-motion: reduce) {
      *, ::before, ::after {
        animation-delay: -1s !important;
        animation-duration: 1s !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        scroll-behavior: auto !important;
        transition-duration: 0s !important;
      }
    }
    ```
  caption: |
    [CSS Remedy](https://github.com/jensimmons/cssremedy/blob/master/css/reminders.css#L31)

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
