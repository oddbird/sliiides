---
venue: Design 4 Drupal 
date: 2020-09-09
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

- pre: |
    *1989*
  title: |
    The **WorldWideWeb** Project

- face: mia-89.jpg
  alt: 7 year old Miriam with her hands on her knees
  pre: |
    1989
  title: The **Artist** (it me)
  md: |
    *Not interested in tech* at all

- img: rad/mystery.jpg
  alt: |
    Hand-made choose-your-own-adventure book called 
    The Mystery of the Missing Art Box

- img: rad/sward.jpg
  alt: |
    Hand-made book called 
    The Sward
  caption: I couldn't afford *copy editing*...

- img: unfriendly/hellogoodbye.jpg
  alt: |
    A young man collapsed on the ground,
    clasping his sister's hand
  caption: |
    Athol Fugard's **Hello and Goodbye**, 2006

- img: rad/performances.jpg
  alt: |
    Image search for Hello and Goodbye performance photos

- face: bogart.jpg
  title: Anne **Bogart**
  md: | 
    Theater **Viewpoints**\*
  caption: |
    \* Like *The Elements of Design*
    but for theater

- quote:  
    ...in which there is 
    **room for the audience to move around**,
    imagine, and make associations.
  cite: Anne Bogart
  caption: A Director Prepares

- img: rad/newworld06.jpg
  alt: |
    2006 New World Arts website
    on the wayback machine

- pre: Eric Meyer's
  title: |
    [CSS **Edge**](https://meyerweb.com/eric/css/edge/)
    Experiments

- img: unfriendly/agnesscott/zen.jpg
  alt: CSS Zen Garden
  fit: contain
  caption: |
    Dave Shea's [CSS Zen Garden](http://www.csszengarden.com/)
    demonstrates the power of CSS

- title: |
    **Performative** Turn
- img: unfriendly/agnesscott/jane-script.png
  alt: Jane/Eyre Script
  caption: |
    Script from [Jane/Eyre](https://www.miriamsuzanne.com/theater/janeeyre/)
- img: unfriendly/agnesscott/jane-eyre.jpg
  alt: Two women in bed
  caption: |
    Photo from [Jane/Eyre](https://www.miriamsuzanne.com/theater/janeeyre/)
- img: unfriendly/urinal.jpg
  alt: row of urinals
- img: unfriendly/fountain.jpg
  alt: upside-down urinal, signed R. Mutt
  caption: |
    **Marcel Duchamp** Fountain,
    1917, photograph by **Alfred Stieglitz**

- pre: |
    *CSS* is a
  title: Weird **Art Project**

- pre: Not just stylesheets...
  title: Browsers **Perform the Web**

- pre: |
    *The Web* is a
  title: Weird **Art Project**

# vision / history

- pre: |
    *1989*
  title: |
    The 
    [**WorldWideWeb**](http://info.cern.ch/hypertext/WWW/TheProject.html) 
    Project

- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top
  caption: |
    [WWW HyperMedia Browser](https://worldwideweb.cern.ch/browser/)
    & *Editor*
- quote: |
    It is required that HTML be 
    **a common language between all platforms**...
  cite: WWW Project
- quote: |
    Web **for all**. Web **on everything**.
  cite: W3C [Mission Statement](w3.org/Consortium/mission.html#principles)
- img: no-harm/cern-next.jpg
  alt: NeXT computer with a worn-out sticker
  caption: The original NeXT server
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
    ...This implies no device-specific markup,
    **or anything which requires control over fonts or colors**.
  cite: WWW Project
- title: A **Radical** Shift
- img: unfriendly/agnesscott/press.png
  alt: Gutenberg Press
  caption: What's the mission of the printing press? (~1440)
- img: rad/indesign-gotl.jpg
  alt: InDesign book-cover layout
- img: rad/book-gotl.jpg
  alt: Published book
- title: Everything is **Variable**
  sub: |
    *Sizes*, *Interfaces*, *Preferences*, *Content*, *Features*, &c...
- img: no-harm/4k.jpg
  alt: Modern desktops
- img: dynamic-css/devices.jpg
  alt: A zillion different devices of all sizes (original)
- img: process/smartwatch.jpg
  alt: Lineup of smart watches
- img: unfriendly/agnesscott/smart-home.png
  alt: Google Home, Amazon Echo, and Apple HomePod
- img: unfriendly/braille.jpg
  alt: Braille keyboard and headphones
- pre: Compatible
  title: | 
    **Forward** & **Backward** & **Sideways**
- quote:
    WWW parsers should 
    **ignore tags** which they do not understand, 
    and **ignore attributes** which they do not understand 
    of tags which they do understand.
  cite: WWW Project
- quote: |
    There are **too many variables to consider.** 
  cite: Keith J Grant
  caption: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)
- pre: Only *Browsers*
  title: Have **All The Context**
- quote: |
    Websites ~~don't need to~~
    **cannot possibly**
    look the same in every browser.
  cite: Me, right here right now
- pre: Browser *differences*
  title: Are a **Feature**, Not a Bug
- quote: |
    The fact we can **control** a paper page 
    is really **a limitation of that medium**.
  cite: John Allsopp, 2000
  caption: |
    [A Dao of Web Design](http://alistapart.com/article/dao)

# styles
- pre: But...
  title: |
    **Fonts** & **Colors** are *Great*
  sub: For both *authors* & *users*
- quote: |
    HTML totally **eliminates any visual creativity** 
    that a document’s designer might have.
  cite: Roy Smith, 1993
- img: no-harm/mosaic.jpg
  alt: Mosaic browser
  fit: contain
  caption: Mosaic, 1993 (Marc Andreessen)
- quote: |
    The web would have become a **giant fax machine** 
    where **pictures of text** would be passed along.
  cite: Håkon Lie
- pre: Style *Proposals*…
  title: w3.org/Style/History/
- title: |
    [**Stylesheet Language**](https://www.w3.org/Style/History/www.eit.com/www.lists/www-talk.1993q4/0264.html)
  sub: |
    **Pei-Yuan Wei**, Oct 1993
- img: no-harm/viola.jpg
  alt: the viola browser
  fit: contain
  caption: |
    **ViolaWWW** by **Pei-Yuan Wei**, 1993 (viola.org)
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
- quote: |
    Note that properties are **inherited down the tree**, unless overridden...
    [This] helps to keep the description short, 
    as **lots of information can be derived by the context** in the
    tree structure.
  cite: Pei-Yuan Wei
- pre: Request for Comments,
  title: |
     [**STYLESHEETS**](https://www.w3.org/Style/History/www.eit.com/www.lists/www-talk.1993q2/0445.html)
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
    This is **not meant as a font name**, per se. 
    Rather *it is a suggestion* of a particular 
    style of character representation.
  cite: Robert Raisch, 1993
- title: |
    Fo*nt* Si*ze* `=` 14
  sub: |
    **`fo`**`(fa=ti,sp=pr,`**`si`**`=`**`14`**`,we=me …)`
- quote: |
    A ["general"] UNIT takes on 
    **different interpretation depending on the context**.
- quote: |
    Styles are **suggestions** or **hints** about behavior, not rules...
  cite: Robert Raisch, 1993
- quote: |
    A set of **HINTS** or **SUGGESTIONS** to the renderer which might be used...
  cite: Robert Raisch, 1993
- quote: |
    [Allow] **browsers to make 'appropriate' decisions**… 
    aligned with the *intent* of the original author.
  cite: Robert Raisch, 1993
- img: no-harm/netscape.jpg
  alt: Netscape browser
  caption: Netscape Navigator, 1994 (also Marc Andreessen)
  fit: contain
- md: |
    ```html
    <CENTER>This text is centered</CENTER>
    
    <MULTICOL COLS="3" GUTTER="25">
      <P><FONT SIZE="4" COLOR="RED">…</FONT></P>
    </MULTICOL>
    ```
- md: |
    ```html
      <P><FONT SIZE="4" COLOR="RED">…</FONT></P>
      <P><FONT SIZE="4" COLOR="RED">…</FONT></P>
      <P><FONT SIZE="4" COLOR="RED">…</FONT></P>
      <P><FONT SIZE="4" COLOR="RED">…</FONT></P>
      <P><FONT SIZE="4" COLOR="RED">…</FONT></P>
    ```
  caption: |
    Tailwind Prototype?
- img: patterns/oddbird-w-logo.jpg
  alt: Young Jonny, Carl, and Miriam playing Magic The Gathering
  caption: OddBird All-Hands, 1994

# CSS
- title: |
    **Cascading** ~~HTML~~ **style sheets**
  sub: |
    *Håkon Lie*, October 1994
  caption: w3.org/People/howcome/p/cascade.html
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
- title: The 🌊 **Cascade**
  sub: A *list of stylesheets*
- quote: |
    The **user/browser** specifies *initial preferences* 
    and **hands the remaining influence over** to the document.
  <<: *proposal
- quote: |
    If conflicts arise **the user should have the last word**, 
    but one should also allow the author to attach **style hints**.
  cite: Håkon Lie
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
- demo: weighted-styles
- md: |
    ```css 
    h1 { font-size: 16pt; }             [0%]
    h1 { font-size: 24pt !important; }  [100%]
    ```
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
  caption: |
    See OddBird's [**Cascading Colors**](https://www.oddbird.net/cascading-colors/)

# origins

- title: Cascade 🗺 **Origins**
  md: |
    1. 🖥 **User Agent** (Browser)
    2. 👥 **User**
    3. 🎨 **Author**

- title: |
    🖥 **User Agent** Defaults
  sub: |
    A *readable* baseline for HTML
- title: <em><code class="click-select">resource://gre-resources/</code></em>
  sub: (on Firefox)
- pre: |
    *`revert`* » Browser/User \
    *`initial`* » Specification
  caption: |
    Try it on OddBird.net

- title: |
    👥 **User** Styles
  sub: Desired *preferences*
  caption: These days rarely CSS, but *treated the same*

- title: 🎨 **Author** Styles
  sub: That's us…

- title: Stacked **Origins**
  md: |
    1. 🎨 **Author**
    2. 👥 **User**
    3. 🖥 **User Agent**

- quote: |
    If conflicts arise **the user should have the last word**, 
    but one should also allow the author to attach **style hints**.
  cite: Håkon Lie
  <<: *proposal

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

# specificity

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
- md: |
    ```
    RELEVANCE > 80 
      ? h1.font.size *= 1.5
    ```
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

# quantum design

- pre: Designed to
  title: Be **Resilient**
- pre: Designed to 
  title: |
    **Fail** Beautifully
- quote:
    WWW parsers should 
    **ignore tags** which they do not understand, 
    and **ignore attributes** which they do not understand 
    of tags which they do understand.
  cite: WWW Project
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
- quote: |
    **You can use it and not use it at the same time**,
    because *it works and it doesn't work at the same time*.
    It's **Quantum CSS**!
    It's Magic!
  cite: |
    Jen Simmons, 
    [Intro to Resilient CSS](https://www.youtube.com/watch?v=u00FY9vADfQ)
- pre: Browser Support
  title: is **Non-Binary**
  caption: |
    [CanIUse](https://caniuse.com/) » [**MayIUse**](https://mayiuse.org/)
- pre: We *Already*
  title: |
    **Know How** To Do This
- img: rad/car-seat.jpg
  alt: Woman adjusting a car seat
  position: bottom
- title: Font **Stacks**
  sub: |
    `font-family: `*`Consolas`*`, `*`Menlo`*`, `*`'Courier New'`*`, `*`monospace`*`;`
- pre: 2010...
  title: |
    **Responsive** Web Design**™️**
- pre: |
    Not *Re-Writing*
  title: For **Every Viewport**
- img: dynamic-css/devices.jpg
  alt: A zillion different devices of all sizes (original)
- quote: |
    There are **too many variables to consider**... 
    The point of CSS is to make it so 
    **you don’t have to worry about them all**. 
  cite: Keith J Grant
  caption: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)

- pre: So *how* do we 
  title: Code For **Resilience**?

- section: |
    Trust **The Flow**

- quote: |
    Define some constraints. 
    **Let the language work out the details.**
  cite: Keith J Grant
  caption: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)

# trust the flow --------

- demo: normal-flow
  resize: both
- demo: awesome
- img: advanced-css/indesign-is.jpg
  alt: InDesign is [+]
  fit: contain

# no fallback -------------------

- section: |
    Let it **Fail**

- demo: fallback-none
- demo: fallback-hero

# silent fallback -------------------

- section: |
    Sorce-Order **Fallback**

- demo: subgrid-cards

# support queries -------------------

- section: |
    **Support** Queries

- title: |
    **@supports** ( … ) { … }
  caption: |
    [MDN Page](https://developer.mozilla.org/pt-BR/docs/Web/CSS/@supports)

- demo: fallback-support

# supports selector -------------------

- title: |
    @Supports **Selector**( … )
  caption: |
    [MDN Page](https://developer.mozilla.org/pt-BR/docs/Web/CSS/@supports#Testing_for_the_support_of_a_selector)

- demo: fallback-selector

# media queries -------------------

- section: |
    The Other **Media** Queries

- title: |
    **Preference** Queries
  caption: |
    [MDN Page](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features)
  md: |
    - prefers-**color-scheme**
    - prefers-**contrast**
    - prefers-**reduced-motion**
    - prefers-**reduced-transparency**

- title: |
    **Interface** Queries
  sub: |
    Like **hover** & **pointer** media
  caption: |
    [MDN Page](https://developer.mozilla.org/en-US/docs/Web/CSS/@media#Media_features)

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

- pre: We have
  title: The **Tools**
- pre: We have
  title: The **Knowledge**

- pre: To do
  title: |
    The **Impossible**

- quote: |
    *Graphic design* of **unknown content** 
    on an **infinite and unknown canvas**, 
    across **operating systems, interfaces, & languages**...
  cite: Me, on twitter...

- title: Like **Live Theater**

- pre: We can write
  title: A **Script** & **Stage Directions**

- pre: Each *performance*
  title: Will Be **Totally Unique**

- img: rad/mystery.jpg
  alt: |
    Hand-made choose-your-own-adventure book called 
    The Mystery of the Missing Art Box

- quote:
    It takes craft to **set up the circumstances** that are 
    **simple and yet contain the ambiguities** 
    and the incongruity of human experience.
  cite: Anne Bogart
  caption: A Director Prepares

- pre: Embrace
  title: |
    **Quantum** Browser Support 
- pre: Let the web
  title: |
    Fail **Beautifully**
- pre: Care about
  title: |
    **People** Over "Perfection"

- pre: Create *Radical*
  title: |
    **User-Centered** Designs

- quote: |
    CSS is **unlike anything else**… 
    designed for the realities 
    of a **flexible, multilingual, multi-device** web.
  cite: Rachel Andrew
  caption: |
    [The Way We Talk About CSS](https://rachelandrew.co.uk/archives/2018/10/04/the-way-we-talk-about-css/)

# outro

- face: jensimmons.jpg
  pre: |
    @jensimmons
  title: |
    **Jen** Simmons
  md: |
    [Resilient Videos](https://www.youtube.com/watch?v=u00FY9vADfQ&list=PLbSquHt1VCf1kpv9WRGMCA9_Nn4vCLZ9Y)

- md: |
    # More **Resources**:
    - [Why is CSS so Weird?][weird] (video) by Miriam
    - [User Unfriendly][unfriendly] (talk) by Miriam
    - [The Way We Talk About CSS][talk] by *Rachel Andrew*
    - [Resilient, Declarative, Contextual][rdc] by *Keith J. Grant*
    - [Resilient Web Design][rwd] by *Jeremy Keith*
    - [The CSS Saga][saga] by *Håkon Lie* & *Bert Bos*
    
    [weird]: https://oddbird.net/2019/10/03/css-is-weird/
    [unfriendly]: https://www.oddbird.net/talks/user-unfriendly/
    [talk]: https://rachelandrew.co.uk/archives/2018/10/04/the-way-we-talk-about-css/
    [rdc]: https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/
    [rwd]: https://resilientwebdesign.com/
    [saga]: https://www.w3.org/Style/LieBos2e/history/Overview.htm

- from: intro
  use: oddbird
---
