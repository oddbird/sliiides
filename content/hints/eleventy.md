---
venue: 11ty International Symposium
date: 2024-05-08

proposal: &proposal >
  Håkon Lie,
  [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)

script: |
  - We're talking about:
  - Origins of the web,
  - But especially _design_ on the web, using

slides:

# <!--
# .####.##....##.########.########...#######.
# ..##..###...##....##....##.....##.##.....##
# ..##..####..##....##....##.....##.##.....##
# ..##..##.##.##....##....########..##.....##
# ..##..##..####....##....##...##...##.....##
# ..##..##...###....##....##....##..##.....##
# .####.##....##....##....##.....##..#######.
# -->

- title: C**H**SS

- known: url-history-chss
  script: |
    - CHSS
    - Håkon Lie, 1994
    - email, still archived online

- known: url-history-styles
  script: |
    - not the only proposal
    - not the first
    - based on several existing proposals

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
  caption: |
    *Pei-Yuan Wei*,
    [1993](https://www.w3.org/Style/History/www.eit.com/www.lists/www-talk.1993q4/0264.html)
    (Viola.org)

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
  caption: |
    *Robert Raisch*,
    [June 1993](https://www.w3.org/Style/History/www.eit.com/www.lists/www-talk.1993q2/0445.html)

- known: url-history-styles
  script: |
    - solves a major problem for the new platform

- title: Technology Is **Political**
  script: |
    - not technical
    - but philosophical
    - political, like all decisions we make
    - designing a new platform or interface

- known: img-history-www
  script: |
    - first web browser
    - Hypermedia WWW Browser and Editor
    - CERN
    - NeXt machine
    - graphic interface

- known: img-everything-ibm
  script: |
    You can't make a web that's world-wide,
    by saying _it works on my machine,
    and everyone else is an edge-case_.

- known: img-history-line-mode
  script: |
    - Nicola Pellow
    - Line Mode browser
    - text-only
    - no install
    - any device with an internet connection

- known: quote-w3c-mission
  script: |
    - Mission statement of W3C

- known: img-everything-devices
- known: img-everything-speakers
  script: |
    - includes devices without screen
    - or screen readers
    - _read the screen_ (a combination)

# <!--
# .##.......####.##.....##.####.########..######.
# .##........##..###...###..##.....##....##....##
# .##........##..####.####..##.....##....##......
# .##........##..##.###.##..##.....##.....######.
# .##........##..##.....##..##.....##..........##
# .##........##..##.....##..##.....##....##....##
# .########.####.##.....##.####....##.....######.
# -->

- known: quote-w3c-mission
  script: |
    - If we really want this to work
    - Everywhere for everyone

- known: url-history-html
  script: |
    - leads to some interesting constraints
    - documented on the original website
    - (still online)

- known: resilient-html
  script: |
    - browsers ignore code they don't understand

    [DEMO]
    - individual attributes
    - entire HTML tags

- title: Protect the **Content**
  sub: across devices, and over time
  caption: a web prime directive…
  script: |
    - the code is optional
    - the **content** is essential
    - whatever else happens
    - browsers should _protect the content_
    - _that's why…_

- known: url-history-html
  script: |
    - we can still see
    - first website on modern browsers

- known: url-www-emulator
  script: |
    - modern website, on the first browser
    - (this is an emulator you can play with)
    - No css
    - No images
    - all the text is there

- known: quote-html-all-platforms
  script: |
    - limitation is more dramatic
    - for _graphic design_
    - to be a common language anywhere…

- known: quote-html-no-control

- pre: Web _Design_
  title: Will **Never Happen**
  sub: (at least in a graphic sense)

# <!--
# ..######..########....###....########.####..######.
# .##....##....##......##.##......##.....##..##....##
# .##..........##.....##...##.....##.....##..##......
# ..######.....##....##.....##....##.....##..##......
# .......##....##....#########....##.....##..##......
# .##....##....##....##.....##....##.....##..##....##
# ..######.....##....##.....##....##....####..######.
# -->

- img: no-harm/viola.jpg
  alt: >
    Viola WWW browser
    demonstrating early stylesheets
  script: |
    - problem isn't styles
    - early browsers _internal_ stylesheets

- known: img-history-line-mode
  script: |
    - Even text-only browser
    - headings, paragraphs, etc
    - But _the styles are different_ **per browser**
    - not **per website**

- img: no-harm/indesign-gotl.jpg
  alt: InDesign book-cover layout
  script: |
    - not the way print works
    - define everything…
    - page size (static, forever)
    - export to PDF, jpg,
    - send it to the printer

- img: no-harm/book-gotl.jpg
  alt: Published book

- img: no-harm/click-gotl.jpg
  alt: >
    Published book
    with badly super-imposed
    hand-pointer cursor
    and scribbled word click!

- img: no-harm/book-gotl.jpg
  alt: Published book
  script: |
    - It just sits there
    - _The same was true for other digital formats at the time…_

- pre: >
    _PostScript_, 1982
  title: >
    **Page Description** Language
  caption: >
    The source code for PDFs
  script: |
    - PostScript around almost a decade
    - page description language
    - Like print
    - describes a _static page_
    - how big is it? where does each thing go?
    - We set fonts, colors, etc.
    - We have complete **control**, _but…_

- known: quote-dao-control
  script: |
    - That control comes at a cost
    - The page, print or PDF, is a static medium
    - can't adapt to context or preferences
    - a limitation of the medium

# <!--
# ....###....########.....###....########..########
# ...##.##...##.....##...##.##...##.....##....##...
# ..##...##..##.....##..##...##..##.....##....##...
# .##.....##.##.....##.##.....##.########.....##...
# .#########.##.....##.#########.##...........##...
# .##.....##.##.....##.##.....##.##...........##...
# .##.....##.########..##.....##.##...........##...
# -->

- pre: Web Styles
  title: >
    Must Be **Contextual**
  caption: a radical shift!
  script: |
    - web is different
    - even static sites aren't _static_
    - what we ship is not always
      what our audience sees
    - _styles must adapt to situations…_
    - the web is responsive to context

- pre: >
    `@media`
  title: >
    `min-width`
  caption: Viewport dimensions
  script: |
    - Not just the width of the viewport

- pre: >
    `@media`
  title: >
    `prefers-reduced-motion`
  caption: User needs & preferences
  script: |
    - user needs & preferences

- pre: >
    `@media`
  title: >
    `hover`
  caption: Device interfaces
  script: |
    - device interfaces

- pre: >
    `@supports`
  title: >
    `container-type: inline-size`
  caption: Browser capabilities over time
  script: |
    - changing capabilities over time
    - _in other words…_

# <!--
# ..######...#######..##.......##..........###....########.
# .##....##.##.....##.##.......##.........##.##...##.....##
# .##.......##.....##.##.......##........##...##..##.....##
# .##.......##.....##.##.......##.......##.....##.########.
# .##.......##.....##.##.......##.......#########.##.....##
# .##....##.##.....##.##.......##.......##.....##.##.....##
# ..######...#######..########.########.##.....##.########.
# -->

- img: no-harm/not-alone.jpg
  alt: >
    We're Not Alone
    (in big block letters, in space)
  script: |
    - We're not alone here
    - We're part of an ecosystem
    - Our decisions impact other people
    - And we don't get final say

- img: no-harm/not-alone-browsers.jpg
  alt: >
    Same We're Not Alone,
    with browser logos on top
  script: |
    - We're collaborating with browsers
    - (instructed to ignore us)

- img: no-harm/not-alone-users.jpg
  alt: >
    Same We're Not Alone,
    with browser logos
    and a guy in construction clothes
    carrying a laptop
  script: |
    - Also the people who interact with our sites
    - On their chosen devices
    - (with varying capabilities)
    - wearing handy little tool belts

- known: img-not-alone-et
  script: |
    - aliens 👽
    - Maybe, who knows?
    - We should collaborate with them…

- img: no-harm/et-bike.jpg
  alt: >
    ET and the kids
    flying their bicycles
    across the sunset
  script: |
    - just trying to get home.

    The CHSS proposal is
    _explicitly designed around this collaboration_

- quote: |
    This proposal tries to
    **soften the tension** between the *author* and the *reader*.
  cite: *proposal
  script: |
    - Designed to soften the tension
    - But specifically…

- quote: >
    If conflicts arise
    **the user should have the last word**…
  cite: *proposal
  script: |
    - If conflicts arise,
    - _User_ should have last word

- md: |
    1. 🖥 User Agent Defaults
    2. 👥 User Preferences
    3. 🎨 Author Styles
    4. ==❗🎨 Author **Important**==
    5. ==❗👥 User **Important**==
    6. ==❗🖥 User Agent **Important**==
  script: |
    - The Cascade ensures that
    - from step one, _origins and importance_
    - When a user marks styles important
    - They take priority over anything we can say

- pre: The _purpose_ of…
  title: ❗**importance**

- img: layers/vader.jpg
  alt: |
    Darth Vader
    choking a rebel soldier
    as storm troopers watch
  script: |
    - Not for us to get in petty squabbles
    - And stomp around force-choking our colleagues

- img: layers/balance-force.jpg
  alt: |
    Kylo Ren and Rey
    standing in front of an entire star war
    with spaceships and lasers
    and AT-AT walkers
  script: |
    - But to maintain balance in the universe
    - And give power back to the rebel…
    - um… users. I don't know.
    - Analogies are hard.

- quote: |
    A Jedi uses [importance]
    for _knowledge and defense_,
    **never for attack**.
  cite: Yoda (almost)
  face: layers/yoda.jpg
  alt: Yoda leans on a walking stick among leaves

- quote: >
    If a trade-off needs to be made,
    **always put user needs above all.**
  cite: >
    W3C,
    [Platform Design Principles](https://www.w3.org/TR/design-principles/#priority-of-constituencies)
  script: |
    - That's a core W3C principle
    - If a tradeoff needs to be made
    - (in the design of the platform)
    - Always put user needs above all

# <!--
# .########..########..######..####..######...##....##
# .##.....##.##.......##....##..##..##....##..###...##
# .##.....##.##.......##........##..##........####..##
# .##.....##.######....######...##..##...####.##.##.##
# .##.....##.##.............##..##..##....##..##..####
# .##.....##.##.......##....##..##..##....##..##...###
# .########..########..######..####..######...##....##
# -->

- pre: Web _Design_
  title: Seems **Impossible**
  script: |
    - Under those constraints,
    - _design_ seemed almost impossible, but…

- quote: >
    HTML totally **eliminates any visual creativity**
    that a document’s designer might have.
  cite: >
    Roy Smith,
    [www-talk "Re: Adobe's PDF"](http://1997.webhistory.org/www.lists/www-talk.1993q3/0238.html)
  script: |
    - _No one_ was happy with that outcome
    - When every site looks the same
    - That's _boring_ for both authors and users

- img: no-harm/mosaic.jpg
  alt: Mosaic browser
  caption: Mosaic, 1993
  script: |
    - Turning point, 1993
    - Mosaic added image tag to HTML
    - Before web standards
    - web styles suddenly possible

- img: no-harm/broken-image.png
  alt: >
    A pixelated broken-image icon,
    showing a photo torn at one corner
  fit: contain
  background: white
  script: |
    - lose what makes HTML special
    - _Can't protect the content in an image…_
    - If it doesn't load, it's lost

- quote: >
    The web would have become a **giant fax machine**
    where **pictures of text** would be passed along.
  cite: >
    Håkon Lie,
    [2014 interview](https://dev.opera.com/articles/css-twenty-years-hakon/)
  script: |
    - A real risk to the platform

- known: url-history-styles
  script: |
    - 1993-1994
    - a rush of different proposals

- quote: >
    …Allow the author
    to **attach style hints**.
  cite: *proposal
  script: |
    - author _style hints_

- quote: >
    Styles are **suggestions**
    or **hints** about behavior,
    **not rules**...
  cite: >
    Robert Raisch,
    [Request for comments: STYLESHEETS](https://www.w3.org/Style/History/www.eit.com/www.lists/www-talk.1993q2/0445.html)
  script: |
    - Not _rules_, but _hints_ and _suggestions_.
    - (phrase shows up over and over)

- quote:
    Provide **hints** that _the browser may or may not use_.
  cite: Håkon Lie

- quote: >
    A set of **HINTS** or **SUGGESTIONS**
    to the renderer which _might be used_...
  cite: >
    Robert Raisch,
    [Request for comments: STYLESHEETS](https://www.w3.org/Style/History/www.eit.com/www.lists/www-talk.1993q2/0445.html)
  script: |
    - Sometimes all-caps
    - [slide]

- quote: >
    Provide authors and publishers
    with **stylistic influence**
    _without resorting to page description languages_.
  cite: *proposal
  script: |
    - In Håkon's proposal…
    - authors and publishers have
    - stylistic _influence_
    - without resorting to page description languages
    - without giving us full _control_
    - _Use the same resilient logic as HTML…_

- known: resilient-html
  title: Resilient **CSS**
  script: |
    - browsers ignore css
    - always protect the content!

- known: css-rad
  script: |
    - reason default `overflow` is `visible`
    - if we get cocky
    - make a box too small for our text
    - Browser will try to bail us out
    - Not because it's the best-looking solution
    - but because the web is unpredictable
    - so browsers protect content

- quote: >
    Content should be **viewable** and **accessible** by default.
  cite: >
    W3C, [Platform Design Principles](https://www.w3.org/TR/design-principles/#css-content-should-be-visible)
  script: |
    - another design principle of the w3c
    - content should be viewable and accessible by default

- img: no-harm/indesign-is.jpg
  alt: InDesign is [+]
  fit: contain
  background: white
  script: |
    - InDesign doesn't worry about
    - accidental overflow can be found and fixed
    - before we hit publish
    - and then it _stays the way we designed it_

# <!--
# .########..########..######..##..........###....########..########
# .##.....##.##.......##....##.##.........##.##...##.....##.##......
# .##.....##.##.......##.......##........##...##..##.....##.##......
# .##.....##.######...##.......##.......##.....##.########..######..
# .##.....##.##.......##.......##.......#########.##...##...##......
# .##.....##.##.......##....##.##.......##.....##.##....##..##......
# .########..########..######..########.##.....##.##.....##.########
# -->

- quote: >
    Graphic design of **unknown content**
    with **unknown collaborators**,
    on an **infinite and unknowable canvas**,
    across **operating systems, interfaces, languages,
    and writing modes**...
  cite: me
  script: |
    - It's absurd.

- quote: >
    There are **too many variables to consider.**
    The point of CSS is to make it
    so you don’t have to worry about them all.
  cite: Keith J Grant
  caption: >
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)

- pre: CSS is
  title: A **Declarative** Language

- css: |
    /* a 'declaration' */
    property: value;
  script: |
    - write our _hints_ as _declarations_,
    - a _property_ and a _value_

- title: >
    **`width`**`: 500px;`
  script: |
    - Declare seemingly simple concepts
    - width of a box

- title: >
    `text-wrap: `**`pretty`**`;`
  script: |
    - More abstract concepts
    - wrapping text so it looks 'pretty'
    - (whatever that means)

- title: >
    `width: `**`500px`**`;`
  script: |
    - Even the concepts that seem 'simple', hide deeper complexity
    - Should our box be smaller
      on a screen that has higher resolution?
    - What do we mean by a pixel?
    - How does that unit respond to zooming in and out?

- known: img-content-box
  caption: >
    The `content-box` model
  script: |
    - width of the content box?
    - padding and border are added
- known: img-border-box
  caption: >
    The `border-box` model
  script: |
    - Or the width of the whole box,
    - with padding and borders?
    - No good answer
    - Depends on what we're doing

- title: >
    `inline-size: `**`500px`**`;`
  script: |
    - Maybe we don't want width at all
    - We're really talking about the inline-size
    - The size available to a line of text

- title: |
    `width: `**`min-content`**`;` \
    `width: `**`max-content`**`;`
  script: |
    - We could size the box
    - _Based on it's contents_

- title: |
    `width: `**`45ch`**`;`
  script: |
    - Or the size of a character
    - in the font we're using?

- title: |
    `width: `**`100%`**`;` \
    `width: `**`90vw`**`;` \
    `width: `**`80cqi`**`;`
  script: |
    - Or even based on context
    - a parent element, viewport, or container

- title: |
    `width: `**`min(34ch, 100%)`**`;`
  script: |
    - Or some combination
    - Like the minimum, of two values

- known: img-context-content
  script: |
    - Everything in CSS based on
    - constant back-and-forth
    - _context_ pushing in,
    - (defining available space)
    - _content_ pushing out
    - (taking up space)

- known: img-everything-devices
  script: |
    - How do we _ensure_
    - Our content will fit
    - _any container we put it in_?

- title: We **Can't**
  script: |
    - We can't
    - We don't have all the information

- pre: But
  title: The **Browser Can**
  script: |
    - But the browser does have all that info
    - If we want this power,
    - We have to give up control

- title: |
    `width: `**`auto`**`;`
  script: |
    - The  most useful tools in CSS
    - express this kind of abstract _behavior_
    - let the browser work out _details_
    - if we can avoid touching it, _we should_
    - the browser knows more than we do

- pre: Expressive
  title: Like **Language**
  script: |
    - not describing the page
      in step-by-step detail
    - but expressing high-level concepts
    - Our job is poetic, providing subtext
    - Not just _the resulting style_
    - But _the purpose_ of a style choice
    - The _intent_

- pre: Subtext…
  title: >
    `padding: 16px` **!=** `padding: 1em`
  caption: |
    [CSS Values & Units Level 4](https://www.w3.org/TR/css-values-4/)
  script: |
    - Units are great at this
    - why CSS has so many
    - `1em` sometimes same as `16px`
    - But they have different meaning
    - And _adapt differently_ in context

- title: Design For **Change**
  script: |
    - My job is not
    - make it look good on my device
    - But make sure it adapts
    - to _unexpected changes in context_

- pre: In CSS…
  title: >
    `flex` **!=** `grid`
  script: |
    - Similar with layout methods
    - We can get the same result using flexbox/grid
    - different _movement_ and _behavior_

- pre: Express…
  title: |
    More **Meaning** \
    Fewer **Constraints**
  caption: Write CSS _like poetry_
  script: |
    - Writing CSS is about
    - expressing our intent _clearly_
    - using _hints_ and _suggestions_
    - provide more meaning with fewer constraints

- known: css-rad
  script: |
    To me, this meme
    perfectly captures
    what _is actually awesome_
    about CSS --
    and how we can go wrong
    by taking _too much control_
    without considering the consequences.
    So how can we lighten our grip here?

    [demo] change to use intrinsic sizes

# <!--
# ..#######..##.....##.########
# .##.....##.##.....##....##...
# .##.....##.##.....##....##...
# .##.....##.##.....##....##...
# .##.....##.##.....##....##...
# .##.....##.##.....##....##...
# ..#######...#######.....##...
# -->

- pre: To _Avoid Harm_…
  title: Express **Clear Intent**
  script: |
    - To avoid harm
    - Not describing a static page,
    - But expressing a _design vision_
    - Through HINTS and SUGGESTIONS
    - Help the browser _understand constraints_

- pre: to _Avoid Harm_
  title: Design **For Change**
  script: |
    - so that when things change,
    - browsers can adapt our design

- pre: to _Avoid Harm_
  title: Design **Systems**
  script: |
    - A cascading style sheet is a _design system_
    - A set of guides for maintaining cohesive design
    - Across a variety of contexts

- pre: To _Avoid Harm_…
  title: Use a **Light Touch**
  sub: define the edges, not the details
  script: |
    - Use a light tough
    - Define the outer boundaries…

- known: quote-w3c-mission
  caption: let go of _control_
  script: |
    - We provide hints
    - Help the browser understand our goals,
    - Let the browser take care of details

- pre: _First_
  title: Do **No Harm**
  script: |
    - This is our job as designers (engineers)
    - everything else in CSS
    - built around this political vision
    - protect the content, protect the user
    - Our first responsibility is not to break things
    - First, Do no harm
---
