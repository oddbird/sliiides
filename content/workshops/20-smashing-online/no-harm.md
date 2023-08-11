---
title: First, Do No Harm
talk: First, **Do No Harm**
date: 2020-05-07
slides:

# 0. intro -------------------------
- from: intro
  use: oddbird
- from: intro
  use: oss
- title: Tell Me **About You**
  sub: |
    What's your *role*,
    & *how long* have you been writing CSS?

# 1. WWW -------------------------
- pre: Let's Talk About…
  title: |
    **Cascading Style Sheets**
- demo: awesome
- pre: Understand the
  title: (wierd) **Mental Model**
- pre: 1989–1990
  title: |
    The **WorldWideWeb**
  caption: |
    info.cern.ch/hypertext/WWW/TheProject.html
    (technical » html format » constraints)
- img: no-harm/sir-tim.jpg
  alt: Tim in front of a computer with the first web browser
  caption: |
    **Sir Tim Berners-Lee**
    at *CERN*
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
    Web **for all**. Web **on everything**.
  cite: World Wide Web Consortium, 1994
  caption: w3.org/Consortium/mission.html#principles
- img: unfriendly/agnesscott/press.png
  alt: Gutenberg Press
  caption: What's the mission of the printing press?
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
    It is required that HTML be
    **a common language between all platforms**...
  cite: WWW Project
- title: 👍
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

# 2. proposals -------------------------
- quote: |
    HTML totally **eliminates any visual creativity**
    that a document’s designer might have.
  cite: Roy Smith, 1993
- pre: Style *Proposals*…
  title: w3.org/Style/History/
- img: no-harm/mosaic.jpg
  alt: Mosaic browser
  caption: Mosaic, 1993
- quote: |
    The web would have become a **giant fax machine**
    where **pictures of text** would be passed along.
  cite: Håkon Lie
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
    Robert Raisch, June 1993
- quote: |
    [Allow] *browsers* to make 'appropriate' decisions…
    aligned with the **intent of the original author**.
  cite: Robert Raisch, 1993
- md: |
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
- title: |
    Fo*nt* Si*ze* `=` 14
  sub: |
    **`fo`**`(fa=ti,sp=pr,`**`si`**`=`**`14`**`,we=me …)`
- quote: |
    Styles are **suggestions** or **hints** about behavior, not rules...
  cite: Robert Raisch, 1993
- quote: |
    A set of **HINTS** or **SUGGESTIONS** to the renderer which might be used...
  cite: Robert Raisch, 1993
- md: |
    ```
    <outspec>
      <docdesc><charlist>
        <font size="12pt" bckcol="white" fontcol="black">
      </charlist></docdesc>

      <e-i-c gi="h1">
        <font size="24pt" bckcol="red", fontcol="white"></e-i-c>
      <e-i-c gi="bold emph strong”>
        <font weight="bold"></e-i-c>
    </outspec>
    ```
  caption: |
    **SGML Stylesheet Language** -- Steve Heaney, October 1993
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

# 3. CSS -------------------------
- title: |
    **Cascading** ~~HTML~~ **style sheets**
  sub: |
    *Håkon Lie*, October 1994
  caption: w3.org/People/howcome/p/cascade.html
- img: no-harm/hakon.jpg
  alt: young Håkon Lie
  caption: Håkon Lie
- img: patterns/oddbird-w-logo.jpg
  alt: OddBird logo imposed over three children playing Magic The Gathering
  caption: OddBird founders meeting, 1994 (Jonny, Carl, Miriam)
- quote: |
    This proposal tries to
    **soften the tension** between the *author* and the *reader*.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- quote: |
    *The author* often wants to give the documents
    a **distinct look and feel**,
    the *user* will set *preferences* to make
    **all documents appear more similar**.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- quote: |
    Author and reader use **same notation**.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- title: The **Cascade**
- quote: |
    **An ordered list (cascade) of style sheets** …
    can be referenced from the same document …
    **and merged** as they are encountered.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- title: |
    cascade **Origins**
  sub: a *balance of power* between stakeholders
- quote: |
    The **user/browser** specifies *initial preferences*
    and **hands the remaining influence over to the document**.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- quote: |
    If conflicts arise **the user should have the last word**,
    but one should also allow the author to attach **style hints**.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- quote: |
    Provide **hints** that the browser **may or may not use**.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- md: |
    ## **Weighted** Influence
    ```js
    h1.font.size = 16pt 60%
    h1.font.size = 24pt 100%
    ```
- md: |
    ```js
    h1.font.size      = 16pt    60%
    h1.font.size      = 24pt    40% (100%)
    (16*60+24*40)/100 = 19.2pt
    ```
- md: |
    ```
               User            Author
    Font   o-----x--------------o 64%
    Color  o-x------------------o 90%
    Margin o-------------x------o 37%
    Volume o---------x----------o 50%
    ```
- demo: weighted-styles
- title: Cascading **Colors**
  sub: (see the footer)
- md: |
    ## Weighted **Style Sheets**
    ```
    http://NYT.com/style 30%
    http://LeMonde.com/style 70%
    ```
- md: |
    ## Selector **Specificity**
    ```js
    (*.)font.family = times
    h1.font.family = helvetica
    ```
- quote: |
    The order of the two is irrelevant --
    the **more specific statements will override the more general** ones.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- md: |
    ## **Media ~~Queries~~** Selectors
    ```js
    speech.*.weight = 35db
    speech.em.weight = 40db
    ```
- quote: |
    Presentation decisions **based on the user's environment**;
    e.g. the *size of the screen* or the *current date*.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- md: |
    ```
    AGE > 3d
      ? background.color = pale_yellow
      : background.color = white
    ```
- quote: |
    HTML documents should also be influenced
    by the **relevance of each document** for each individual user.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- md: |
    ```
    RELEVANCE > 80
      ? h1.font.size *= 1.5
    ```
- md: |
    ## **Relative** Units
    ```css
    /* h1.font.size *= 1.5 */
    h1 { font-size: 1.5em; }
    ```
- pre: Presented @
  title: |
    **WWW Conference** 1995
  sub: by *Håkon Lie* & *Bert Bos*
- quote: |
    Ended up in political discussions about the **author-reader balance**.
  cite: Bert Bos

# 4. Radical -------------------------
- pre: fast-forward *25 years*…
  title: The **Modern Web**
- pre: Applications
  title: More **Powerful** & **Complex**
- quote: |
    Web **for all**. Web **on everything**.
  cite: World Wide Web Consortium, 1989
  caption: w3.org/Consortium/mission.html#principles
- pre: It's True...
  title: |
    "CSS is **for documents**"
- title: |
    "~~CSS~~ ***The Entire Web*** \
    is for documents"
- img: unfriendly/agnesscott/press.png
  alt: Gutenberg Press
  caption: |
    "The printing press is just for bibles"
- quote: |
    The fact we can **control** a paper page
    is really **a limitation of that medium**.
  cite: John Allsopp, 2000
  caption: |
    [A Dao of Web Design](http://alistapart.com/article/dao)
- pre: The Web is
  title: |
    **User-Centered**
- pre: The Web is
  title: |
    **User-Controlled**
- pre: We Write
  title: The **Script** & **Stage Directions**
- pre: But
  title: Every **Performance** is **Unique**
- quote:
    Do I want to create work in which everyone feels the same,
    or everyone feels differently?
    ...Something in which there is
    **room for the audience to move around**,
    imagine, and make associations.
  cite: Anne Bogart
  caption: A Director Prepares
- quote:
    It takes craft to **set up the circumstances** that are
    **simple and yet contain the ambiguities**
    and the incongruity of human experience.
  cite: Anne Bogart
  caption: A Director Prepares

# 5. Resilient, Declarative, Contextual -------------------------
- pre: CSS is for
  title: |
    **HINTS** & **SUGGESTIONS**
- title: Design for **The Unknown**
  sub: |
    *Sizes*, *Interfaces*, *Preferences*, *Content*, &c...
- quote: |
    There are **too many variables to consider.**
    The point of CSS is to make it so you don’t have to worry about them all.
    **Define some constraints.
    Let the language work out the details.**
  cite: Keith J Grant
  caption: |
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)
- pre: |
    CSS is *Resilient*…
  title: |
    A **Progressive** Enhancement
- quote:
    WWW parsers should
    **ignore tags** which they do not understand,
    and **ignore attributes** which they do not understand
    of tags which they do understand.
  cite: WWW Project
  caption: Both *forward* & *backward* compatible
- md: |
    ## Ignored **Decalarations**
    ```css
    body {
      /* Browser default `display: block` */
      display: flex;
      display: grid;
    }
    ```
- pre: Browser Support
  title: is **Not A Binary**
- pre: |
    [CanIUse](https://caniuse.com/)?
  title: |
    More like [**MayIUse**](https://mayiuse.org/)
  sub: amIright?
- title: Font **Stacks**
  sub: |
    `font-family: `*`Consolas`*`, `*`Menlo`*`, `*`'Courier New'`*`, `*`monospace`*`;`
- title: Variable **Stacks**
  sub: |
    `var(`*`--one`*`, var(`*`--two`*`, var(`*`--three`*`, fallback)))`
- title: |
    **`@Supports`** `{ … }`
  caption: |
    We'll get into the details later...
- pre: |
    CSS is *Declarative*…
  title: Relying on **Meaning** & **Intent**
- title: |
    **`<h1>`**`Main header`**`</h1>`** \
  sub: |
    **`<p>`**`a paragraph`**`</p>`** \
  caption: |
    [Understanding why Semantic HTML is Important](https://medium.com/@mandy.michael/understanding-why-semantic-html-is-important-as-told-by-typescript-bd71ad41e6c4),
    by Mandy Michael
- title: |
    `16px `**`!=`**` 1em`
  sub: |
    Convey Different *Intent*
- pre: |
    CSS is *Contextual*…
  title: |
    **Adapting** to change
- pre: |
    CSS is for…
  title: |
    Design **Systems**
- md: |
    ```html
      <P><FONT SIZE="16" COLOR="RED">…</FONT></P>
      <P><FONT SIZE="16" COLOR="RED">…</FONT></P>
      <P><FONT SIZE="16" COLOR="RED">…</FONT></P>
      <P><FONT SIZE="16" COLOR="RED">…</FONT></P>
    ```
- md: |
    ```css
    .warn {
      font-size: 16px;
      color: red;
    }
    ```

# 6. Awesome -------------------------
- title: CSS **Saved** The Web
  sub: from becoming *inaccessible* & *platform-specific*
- pre: The *Difficult Bits*
  title: Come From That **Difficult Problem**
- quote: |
    ...This implies no device-specific markup,
    **or anything which requires control over fonts or colors**.
  cite: WWW Project
- title: |
    We're Doing **The Impossible**
- pre: By Providing
  title: |
    **HINTS** & **SUGGESTIONS**
- demo: awesome
  caption: Over-specified, but still *resilient*
- img: advanced-css/indesign-is.jpg
  alt: InDesign is [+]
  fit: contain
- demo: normal-flow
- quote: |
    CSS is **unlike anything else**…
    designed for the realities
    of a **flexible, multilingual, multi-device** web.
  cite: Rachel Andrew, 2018
  caption: |
    [The Way We Talk About CSS](https://rachelandrew.co.uk/archives/2018/10/04/the-way-we-talk-about-css/)
- pre: A *Design Tool*
  title: |
    For **Unknown Content** \
    On An **Unknown Canvas**
- pre: |
    *CSS* is
  title: Downright **Radical**
- pre: |
    @TerribleMia
  title: |
    **#ResilientWebSystems**
---
