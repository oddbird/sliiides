---
venue: Shopify UX Summer Series 
date: 2020-08-13
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
quote: 
  text: |
    CSS is **unlike anything else**… 
    designed for the realities 
    of a **flexible, multilingual, multi-device** web.
  cite: Rachel Andrew
slides:

# intro

- demo: awesome

# vision / history

- section: A **Radical Vision** 
- pre: 1989…
  title: |
    The **WorldWideWeb** Project
  caption: |
    info.cern.ch/hypertext/WWW/TheProject.html
    (technical » html format » constraints)
- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top
  caption: |
    [WWW HyperMedia Browser](https://worldwideweb.cern.ch/browser/)
    & *Editor*
- img: no-harm/cern-next.jpg
  alt: NeXT computer with a worn-out sticker
  caption: The original NeXT-based server
- quote: |
    It is required that HTML be 
    **a common language between all platforms**...
  cite: WWW Project
- quote: |
    ...This implies no device-specific markup,
    **or anything which requires control over fonts or colors**.
  cite: WWW Project
- img: process/ibm-pc.jpg
  alt: Old IBM desktop
  position: top
- img: no-harm/line-mode.jpg
  alt: The second browser, a text-only terminal
  position: top
  caption: |
    [Line Mode Browser](http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html), 
    developed by **Nicola Pellow**
- quote: |
    Web **for all**. Web **on everything**.
  cite: W3C Mission Statement
  caption: w3.org/Consortium/mission.html#principles
- title: A **Radical** Shift in Power
  sub: From *authors* to *users*
- img: unfriendly/agnesscott/press.png
  alt: Gutenberg Press
  caption: What's the mission of the printing press?
- img: rad/indesign-gotl.jpg
  alt: InDesign book-cover layout
- img: rad/book-gotl.jpg
  alt: Published book
- quote: |
    The fact we can **control** a paper page 
    is really **a limitation of that medium**.
  cite: John Allsopp, 2000
  caption: |
    [A Dao of Web Design](http://alistapart.com/article/dao)
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

- pre: Browser *differences*
  title: Are a **Feature**, Not a Bug
- quote:
    WWW parsers should 
    **ignore tags** which they do not understand, 
    and **ignore attributes** which they do not understand 
    of tags which they do understand.
  cite: WWW Project
  caption: Both *forward* & *backward* compatible
- pre: Like *theater*...
  title: Every **Hamlet** Is Different
- pre: We Write
  title: A **Script** & **Stage Directions**
- title: Every **Performance** is **Unique**
- quote:
    It takes craft to **set up the circumstances** that are 
    **simple and yet contain the ambiguities** 
    and the incongruity of human experience.
  cite: Anne Bogart
  caption: A Director Prepares
- quote:  
    ...Something in which there is 
    **room for the audience to move around**,
    imagine, and make associations.
  cite: Anne Bogart
  caption: A Director Prepares

# styles

- section: |
    **Collaboration** & **Failure**
- quote: |
    HTML totally **eliminates any visual creativity** 
    that a document’s designer might have.
  cite: Roy Smith, 1993
- img: no-harm/mosaic.jpg
  alt: Mosaic browser
  caption: Mosaic, 1993
- quote: |
    The web would have become a **giant fax machine** 
    where **pictures of text** would be passed along.
  cite: Håkon Lie
- pre: Style *Proposals*…
  title: w3.org/Style/History/
- img: no-harm/viola.jpg
  alt: the viola browser
  fit: contain
  caption: |
    **ViolaWWW** by **Pei-Yuan Wei**, 1992 (viola.org)
- md: |
    ```
    (HEAD,BODY fontSize=normal 
               BGColor=white 
               FGColor=black 
      (H1 fontSize=largest 
          BGColor=red 
          FGColor=white) 
      (H2 fontSize=large) 
      (A FGColor=red)
      (CMD,KBD,SCREEN,LISTING,EXAMPLE fontFamily=fixed) 
      (BOLD,EMPH,STRONG fontWeight=bold)
    )
    ```
- pre: Request for Comments,
  title: |
     **STYLESHEETS**
  sub: |
    *Robert Raisch*, June 1993
- title: |
    "*an easily parsable format*"
  md: |
    ```
    @DEFAULT fo(fa=ti,sp=pr,si=14,we=me,sl=ro,fo=in,bo=in,li=no,nu=1,fn='')
    ju(st=le,hy=0,ke=0) co(nu=1,wi=80) br(lo=af,ob=it)
    li(lo=in,ma=no,li=un,nu=1,be=no,af=no,hi=0)

    @UL in(le=5)
    @LI ma(pr=ro,be=4) in(le=10,ri=10)
    ```
- title: |
    Fo*nt* Fa*mily* `=` Ti*mes*
  sub: |
    **`fo`**`(`**`fa`**=**`ti`**`,sp=pr,si=14,we=me …)`
- quote: |
    This is *not meant as a font name*, per se. 
    Rather it is a suggestion of a particular 
    **style of character representation**.
  cite: Robert Raisch, 1993
- quote: |
    Styles are **suggestions** or **hints** about behavior, not rules...
  cite: Robert Raisch, 1993
- title: |
    Fo*nt* Si*ze* `=` 14
  sub: |
    **`fo`**`(fa=ti,sp=pr,`**`si`**`=`**`14`**`,we=me …)`
- quote: |
    A set of **HINTS** or **SUGGESTIONS** to the renderer which might be used...
  cite: Robert Raisch, 1993
- quote: |
    [Allow] *browsers* to make 'appropriate' decisions… 
    aligned with the **intent of the original author**.
  cite: Robert Raisch, 1993
- img: no-harm/netscape.jpg
  alt: Netscape browser
  caption: Netscape, 1994
  fit: contain
- md: |
    ```html
    <CENTER>This text is centered</CENTER>
    
    <MULTICOL COLS="3" GUTTER="25">
      <P><FONT SIZE="4" COLOR="RED">…</FONT></P>
    </MULTICOL>
    ```

# CSS
- title: |
    **Cascading** ~~HTML~~ **style sheets**
  sub: |
    *Håkon Lie*, October 1994
  caption: w3.org/People/howcome/p/cascade.html
- img: patterns/oddbird-w-logo.jpg
  alt: Young Jonny, Carl, and Miriam playing Magic The Gathering
  caption: OddBird All-Hands, 1994
- quote: |
    Provide **hints** that the browser **may or may not use**.
  <<: *proposal
- quote: |
    This proposal tries to 
    **soften the tension** between the *author* and the *reader*.
  <<: *proposal
- quote: |
    *The author* often wants to give the documents 
    a **distinct look and feel**, 
    the *user* will set *preferences* to make 
    **all documents appear more similar**.
  <<: *proposal
- quote: |
    Author and reader use **same notation**.
  <<: *proposal
- quote: |
    An ordered list **(cascade)** of style sheets
  <<: *proposal
- title: |
    Cascade **Origins**
  sub: a *balance of power* between stakeholders
- quote: |
    The **user/browser** specifies *initial preferences* 
    and **hands the remaining influence over to the document**.
  <<: *proposal
- quote: |
    If conflicts arise **the user should have the last word**, 
    but one should also allow the author to attach **style hints**.
  <<: *proposal
- md: |
    ## **Weighted** Influence
    ```js 
    h1.font.size = 16pt 60%     [user]
    h1.font.size = 24pt 100%    [author]
                 = ???
    ```
- md: |
    ## **Weighted** Influence
    ```js 
    h1.font.size      = 16pt    60%
    h1.font.size      = 24pt    40% (100%)
    (16*60+24*40)/100 = 19.2pt
    ```
- md: |
    ```css 
    h1 { font-size: 16pt; }             [0%]
    h1 { font-size: 24pt !important; }  [100%]
    ```
- demo: weighted-styles
- md: |
    ## Weighted **Style Sheets**
    ```
    http://NYT.com/style 30%
    http://LeMonde.com/style 70%
    ```
- pen: NYT & Le Monde
  id: BaBvajd
- md: |
    ```
               User            Author
    Font   o-----x--------------o 64%
    Color  o-x------------------o 90%
    Margin o-------------x------o 37%
    Volume o---------x----------o 50%
    ```
- title: Cascading **Colors**
  sub: (oddbird.net)
- md: |
    ## Relative **Units**
    ```js
    h1.font.size *= 1.5
    ```
- md: |
    ## Relative **Units**
    ```css
    h1 { font-size: 1.5em; }
    ```
- title: 16px `!=` **1em**
  sub: Different *intent*!
- quote: Always **Show Your Work**
  cite: Math Teachers & CSS
- md: |
    ## Selector **Specificity**
    ```js 
    font.family = times
    h1.font.family = helvetica
    ```
- img: rad/indesign-palette.jpg
  alt: InDesign heading pattern, one selected heading has a different font
- title: Media **Queries**
- md: |
    ```js 
    speech.*.weight = 35db
    speech.em.weight = 40db
    ```
- md: |
    ```
    AGE > 3d 
      ? background.color = pale_yellow 
      : background.color = white
    ```
- quote: |
    Presentation decisions **based on the user's environment**; 
    e.g. the *size of the screen* or the *current date*.
  <<: *proposal
- md: |
    ```
    RELEVANCE > 80 
      ? h1.font.size *= 1.5
    ```

# origins

- section: We're **In This Together**

- quote: |
    The **user/browser** specifies *initial preferences* 
    and **hands the remaining influence over to the document**.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)

- title: |
    🖥 **User Agent** Styles \
    `aka` *Browser Defaults*
  sub: |
    *`resource://gre-resources/`*

- title: |
    `view` \
    `» page styles` \
    **`» no style`**
- title: |
    `all:` *`revert`*
  sub: |
    see also `* { all: initial !important; }`
- title: |
    👥 **User** Styles \
    `aka` *Preferences*
  sub: usually not CSS, but *treated the same*

- title: Stacked **Origins**
  md: |
    1. 🎨 **Author**
    2. 👥 **User**
    3. 🖥 **User Agent**

- quote: |
    If conflicts arise **the user should have the last word**, 
    but one should also allow the author to attach **style hints**.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)

- pre: The *Real Reason* For
  title: ❗**importance**

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

# origins

- section: |
    **Quantum** Design

- quote:
    WWW parsers should 
    **ignore tags** which they do not understand, 
    and **ignore attributes** which they do not understand 
    of tags which they do understand.
  cite: WWW Project
  caption: Both *forward* & *backward* compatible
- md: |
    ## Ignored **Selectors**
    ```css
    :is(html) {
      background: rebeccapurple;
    }
    ```
- md: |
    ## Ignored **Decalarations**
    ```css
    body {
      /* Browser default `display: block` */
      display: flex;
      display: grid;
    }
    ```
- title: Font **Stacks**
  sub: |
    `font-family: `*`Consolas`*`, `*`Menlo`*`, `*`'Courier New'`*`, `*`monospace`*`;`
- title: Variable **Stacks**
  sub: |
    `var(`*`--one`*`, var(`*`--two`*`, var(`*`--three`*`, fallback)))`
- pre: Browser Support
  title: is **Non-Binary**
- quote: |
    **You can use it and not use it at the same time**,
    because *it works and it doesn't work at the same time*.
    It's **Quantum CSS**!
    It's Magic!
  cite: |
    Jen Simmons, 
    [Intro to Resilient CSS](https://www.youtube.com/watch?v=u00FY9vADfQ)
- pre: |
    [CanIUse](https://caniuse.com/)?
  title: |
    More like [**MayIUse**](https://mayiuse.org/)
- pre: We *Already*
  title: |
    **Know How** To Do This
- title: RWD**™️** ... **2010**
- pre: |
    Not *Re-Writing*
  title: For **Every Viewport**
- title: Responsive ➡ **Resilient**
- pre: |
    Not *The Same*
  title: For **Every Browser**
- pre: When *necessary* 
  title: |
    Make **Minor** Adjustments

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
    Sorce-Order **Fallback**

- demo: subgrid-forms

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
    **Feature** Queries

- title: |
    **@supports** ( … ) { … }
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

- title: |
    **Selector** Queries
  caption: |
    [MDN Page](https://developer.mozilla.org/pt-BR/docs/Web/CSS/@supports#Testing_for_the_support_of_a_selector)

- demo: fallback-selector

# media queries -------------------

- title: |
    **Preference** Queries
  caption: |
    [MDN Page](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features)

- title: prefers-**color-scheme**
- title: prefers-**contrast**
- title: prefers-**reduced-motion**
- title: prefers-**reduced-transparency**

- title: |
    Media **Features**
  caption: |
    [MDN Page](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features)

- title: |
    **Hover** & **Pointer** Media
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

- pre: Support *More Browsers*
  title: With **Lower Standards**

- pre: Care *More*
  title: By **Caring Less**

- face: jensimmons.jpg
  pre: |
    @jensimmons
  title: |
    **Jen** Simmons
  md: |
    [Resilient Videos](https://www.youtube.com/watch?v=u00FY9vADfQ&list=PLbSquHt1VCf1kpv9WRGMCA9_Nn4vCLZ9Y)

- md: |
    # More **Resources**:

    - [Resilient, Declarative, Contextual][rdc] by *Keith J. Grant*
    - [Resilient Web Design][rwd] by *Jeremy Keith*
    
    [rdc]: https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/
    [rwd]: https://resilientwebdesign.com/
---
