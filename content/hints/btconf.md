---
venue: Beyond Tellerand
date: 2024-11-08

proposal: &proposal >
  Håkon Lie,
  [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)

quote:
  text: >
    You can’t make a web that’s **world-wide**
    by saying _it works on my machine_.

slides:

- img: no-harm/btconf/fuck-it.jpg
  alt: >
    Craig in front of a slide that says
    Fuck it, let's do this
  caption: Craig Black

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
    - Håkon Lie, 1994
    - email, still archived online

- known: url-history-styles
  script: |
    - not the only proposal for styles on the web
    - not the first

- title: Solved a **Problem**
  script: |
    - solves a major problem for the new platform

- title: Technology Is **Political**
  script: |
    - not technical, but philosophical
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

- known: img-everything-devices
- known: img-everything-speakers
  script: |
    - includes devices without screen
    - or screen readers
    - _read the screen_ (a combination)

- img: no-harm/btconf/playground.jpg
  alt: >
    Linda in front of a slide
    with the colorful computer playground she designed
    for kids
  caption: Linda Liukas

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

- known: url-history-html
  script: |
    - we can still see
    - first website on modern browsers

- img: no-harm/btconf/emulator.jpg
  alt: >
    BT conference Berlin website
    and Miriam's speaker page
    rendered as text-only
    on the WWW browser emulator
  caption: >
    [worldwideweb30.com](https://worldwideweb30.com/browser#https://beyondtellerrand.com/events/berlin-2024)
    c/o [Remy Sharp](https://remysharp.com)
  script: |
    - modern website, on the first browser
    - (this is an emulator you can play with)
    - No css
    - No images
    - all the text is there

- title: Protect the **Content**
  sub: across devices, and over time
  caption: a web prime directive…
  script: |
    - whatever else happens
    - browsers should _protect the content_
    - the code is optional
    - the **content** is essential

- known: quote-html-all-platforms
  script: |
    - Which creates a big problem for _design_ specifically
    - For HTML to be a common language everywhere…

- known: quote-html-no-control

- img: no-harm/tim-quote.jpg
  alt: >
    Sir Tim at a computer
    showing a badly photoshopped image
    of the previous slide
  script: |
    - Sir Tim wrote that
    - in 1990 or something
    - _He already knew that..._

- pre: Web _Design_
  title: Will **Never Happen**
  sub: (at least in a graphic sense)

- pre: The End
  title: Any **Questions**
  caption: Please go home

# <!--
# ..######..########....###....########.####..######.
# .##....##....##......##.##......##.....##..##....##
# .##..........##.....##...##.....##.....##..##......
# ..######.....##....##.....##....##.....##..##......
# .......##....##....#########....##.....##..##......
# .##....##....##....##.....##....##.....##..##....##
# ..######.....##....##.....##....##....####..######.
# -->

- img: no-harm/btconf/how.jpg
  alt: >
    Christine in front of a slide
    with 'what' (crossed off) and how
  caption: Christine Vallaure
  script: |
    - The problem isn't "what" but "how"

- img: no-harm/viola.jpg
  alt: >
    Viola WWW browser
    demonstrating early stylesheets
  script: |
    - Early browsers all had built-in stylesheets,

- known: img-history-line-mode
  script: |
    - Even the text-only browser
    - uppercase headings, space between paragraphs, etc
    - But these styles come from the browser
    - And apply the same to every page on the web
    - All websites look the same

- pre: >
    _PostScript_, 1982
  title: >
    **Page Description** Language
  caption: >
    The source code for PDFs
  script: |
    - But PostScript around almost a decade
    - giving authors much more control
    - Allowing us to create fully designed documents

- img: no-harm/btconf/code-design.jpg
  alt: >
    Christine in front of a slide
    with a venn diagram of code and design overlapping
  caption: Christine Vallaure
  script: |
    - using only code
    - Describing every aspect of the page in detail
    - and then packaging up the results

- img: no-harm/indesign-gotl.jpg
  alt: InDesign book-cover layout
  script: |
    - Like a print designer
    - In control of every detail…
    - We set the page size (static, forever)
    - down to the inks used, and the paper to print on

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

- svg: svg/content/more-more
  alt: Animation of twitter-like posts appearing
  script: |
    - And often unpredictable content
    - Changing all the time
    - _All of these variables, because…_

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
    - And on the web, we don't get final say

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
    - (super cute in their handy tool belts)
    - On their chosen devices
    - (with varying capabilities)
    - _And we're also collaborating with…_

- known: img-not-alone-et
  script: |
    - aliens 👽
    - Maybe, who knows?

- img: no-harm/et-bike.jpg
  alt: >
    ET and the kids
    flying their bicycles
    across the sunset
  script: |
    - They're probably just trying to get home.

# <!--
# .########..########..######..####..######...##....##
# .##.....##.##.......##....##..##..##....##..###...##
# .##.....##.##.......##........##..##........####..##
# .##.....##.######....######...##..##...####.##.##.##
# .##.....##.##.............##..##..##....##..##..####
# .##.....##.##.......##....##..##..##....##..##...###
# .########..########..######..####..######...##....##
# -->

- quote: >
    Graphic design of **unknown content**
    with **unknown collaborators**,
    on an **infinite and unknowable canvas**,
    across **operating systems, interfaces, languages,
    and writing modes**...
  cite: me
  script: |
    - So we're here, supposed to do…
    - (slide)
    - It's absurd

- pre: Web _Design_
  title: Seems **Impossible**
  script: |
    - Under those constraints,
    - _design_ seemed impossible, but…

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
    - put everything in an image, and it never changes
    - Just like print design!

- img: no-harm/broken-image.png
  alt: >
    A pixelated broken-image icon,
    showing a photo torn at one corner
  fit: contain
  background: white
  script: |
    - or it doesn't show up at all
    - and we lose everything that makes HTML special
    - _Can't protect structured content in an image…_
    - If it doesn't load, it's lost

- quote: >
    The web would have become a **giant fax machine**
    where **pictures of text** would be passed along.
  cite: >
    Håkon Lie,
    [2014 interview](https://web.archive.org/web/20240105013339/https://dev.opera.com/articles/css-twenty-years-hakon/)
  script: |
    - A real risk to the platform
    - (slide)

- known: url-history-styles
  script: |
    - And so we get a rush of proposals
    - around 1993 and 1994
    - trying to save the web from images!

- img: no-harm/to-the-max.jpg
  alt: >
    Closeup of the Style history page
    with one phrase in focus,
    HTML To The Max
  script: |
    - It's time to take HTML _to the max!_

- code: |
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
  caption: |
    *Pei-Yuan Wei*,
    [October 1993](https://www.w3.org/Style/History/www.eit.com/www.lists/www-talk.1993q4/0264.html)
    (Viola.org)
  script: |
    - Pei Wei's Viola browser
    - Was the first to allow custom style sheets for a page
    - About a year before CSS was proposed
    - It has familiar selectors, nesting, property-value pairs,
    - And even _inheritance_
    - They all have inheritance, or something like it…

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
  script: |
    - Several months before Viola,
    - Robert Raisch proposed this 'easily parsable format'
    - I assume he means _parsable by machines_?
    - Because I can't parse it, I had to memorize the first few lines.
    - You can see the default selector there,
    - We're setting our default fonts in the `fo` function
    - Family=times, spacing is proportional, size 14,
    - and then _'we' is 'me', which…_

- img: no-harm/we-is-me.jpg
  alt: >
    I Am the Walrus Lyrics,
    I am he as you are he as you are me
    And we are all together,
    Genius annotation -
    John Lennon is attempting to set
    the default font weight to medium
    using Robert Raisch's stylesheet proposal,
    while also suggesting that we are all one.
    The 'we' property describes
    the general weight of a character representation,
    Lennon told Playboy in 1980.
  fit: contain
  position: center
  script: |
    - I don't know,
    - Sounds like a Beatles song?
    - John Lennon had a lot to say about web typography

- quote: >
    [Times] is not meant as a font name, per se.
    Rather it is a **suggestion**
    of a particular _style of character representation_.
  cite: >
    Robert Raisch,
    [Request for comments: STYLESHEETS](https://www.w3.org/Style/History/www.eit.com/www.lists/www-talk.1993q2/0445.html)
  caption: >
    `times` (serif), `helvetica` (sans-serif),
    `system` (from the OS), and `typewriter` (monospace)
  script: |
    - But Robert is clear that these styles are only suggestions!
    - Even the `times` font-family
    - doesn't mean we get the 'times' font _specifically_,
    - it just means we want something _like times_,
    - a serif font!
    - _And he repeats this phrasing…_

- quote: >
    Styles are **suggestions**
    or **hints** about behavior,
    **not rules**...
  cite: >
    Robert Raisch,
    [Request for comments: STYLESHEETS](https://www.w3.org/Style/History/www.eit.com/www.lists/www-talk.1993q2/0445.html)
  script: |
    - Over and over,
    - We're not writing _rules_,
    - but _suggestions_ or _hints_ about behavior.

- quote: >
    A set of **HINTS** or **SUGGESTIONS**
    to the renderer which _might be used_...
  cite: >
    Robert Raisch,
    [Request for comments: STYLESHEETS](https://www.w3.org/Style/History/www.eit.com/www.lists/www-talk.1993q2/0445.html)
  script: |
    - Sometimes all-caps
    - hints and suggestions which might not be used.
    - _And the other proposals pick this up…_

- quote: >
    Specified attributes are taken as "**hints**"
    that will _degrade in a controlled way_ depending on
    the level of support… in the operating environment.
  cite: >
    Jon Bosak,
    [Proposal for a language optimized for WWW delivery](https://www.w3.org/Style/History/www.ora.com/davenport/HDL/hdl.proposal.html)
  script: |
    - Jon Bosak's
    - Hints that will degrade in a controlled way
    - _Or, with CHSS…_

- quote: >
    …Allow the author
    to **attach style hints**.
  cite: *proposal
  script: |
    - We can allow the author to attach _style hints_

- quote:
    Provide **hints** that _the browser may or may not use_.
  cite: Håkon Lie
  script: |
    - Hints that the browser may or may not use

- quote: >
    Provide authors and publishers
    with **stylistic influence**
    _without resorting to page description languages_.
  cite: *proposal
  script: |
    - Authors should have stylistic _influence_,
    - without resorting to page description languages
    - without giving us full _control_
    - _Use the same resilient logic as HTML…_

- known: resilient-html
  title: Resilient **CSS**
  script: |
    - browsers ignore css that they don't understand
    - We don't get a blank page with an error message,
    - We get the content with default styles.
    - Always protect the content!

- quote: >
    Content should be **viewable** and **accessible** by default.
  cite: >
    W3C, [Platform Design Principles](https://www.w3.org/TR/design-principles/#css-content-should-be-visible)
  script: |
    - This becomes another design principle of the w3c
    - content should be viewable and accessible by default
    - Which is why…

- known: css-rad
  script: |
    - The default `overflow` is `visible`
    - if we get so cocky
    - that we try to shove large text in a small box
    - The browser will try to bail us out
    - Not because it's the best-looking solution
    - but because the web is unpredictable
    - and browsers prioritize content over style
    - That's a good thing!
    - _What's the alternative?_

- img: no-harm/indesign-is.jpg
  alt: InDesign is [+]
  fit: contain
  background: white
  script: |
    - InDesign doesn't even worry about accidental overflow
    - The whole word just disappears!
    - But that's fine, because we can fix it
    - before we hit print,
    - and it will _stay fixed forever_

- img: no-harm/book-gotl.jpg
  alt: Published book
  script: |
    - Unchanging
    - Unaware of context
    - Unable to adapt
    - By giving up some _deign control_

# <!--
# .########.########.##....##..######..####..#######..##....##
# ....##....##.......###...##.##....##..##..##.....##.###...##
# ....##....##.......####..##.##........##..##.....##.####..##
# ....##....######...##.##.##..######...##..##.....##.##.##.##
# ....##....##.......##..####.......##..##..##.....##.##..####
# ....##....##.......##...###.##....##..##..##.....##.##...###
# ....##....########.##....##..######..####..#######..##....##
# -->

- known: img-not-alone-et
  script: |
    - We allow the web to carry our designs
    - Farther than we could ever go alone
    - Because we're not alone,

- quote: |
    This proposal tries to
    **soften the tension** between the *author* and the *reader*.
  cite: *proposal
  script: |
    - While CHSS wasn't the first stylesheet proposal,
    - It didn't invent selectors, or properties, or even inheritance
    - It was the first to suggest an equal _collaboration_
    - Designed to soften the tension
    - Between the author and the reader

- quote: |
    While the _author_ (or publisher)
    often wants to give the documents a **distinct look and feel**,
    the _user_ will set **preferences**
    to make **all documents appear more similar**.
  cite: *proposal
  script: |
    - Authors want to show their creativity and branding,
    - with a distinct look and feel,
    - make their document visually interesting.
    - But users will have _preferences_,
    - styles that they like better (or even require)
    - like larger text or _dark mode_,
    - and sites can respect those preferences!

- img: no-harm/btconf/agency.jpg
  alt: >
    Christine in front of a slide
    that defines the word agency,
    the power to make independent choices
    and take control over ones
    work and career.
  fit: contain
  caption: Christine Vallaure

- img: no-harm/btconf/agency-ai.jpg
  alt: >
    Adobe Illustrator canvas with the previous slide
    edited to replace Christine with Jessica
  fit: contain
  caption: Jessica Hische

- img: no-harm/btconf/agency-adhd.jpg
  alt: >
    Using preview to edit the previous slide
    with scribbled red digital letters
    that say ADHD instead of agency
  fit: contain
  caption: Jessica Hische

- img: no-harm/btconf/agency-web.jpg
  alt: >
    Again editing the previous slide
    to replace Jessica with Miriam,
    and the phrase 'work and career'
    with the scrawled phrase 'web surfing'
  fit: contain
  caption: Miriam Suzanne

- quote: >
    The proposed scheme is balanced
    in the sense that it
    _provides author and reader_
    with **the same notation** for specifying style.
  cite: *proposal
  script: |
    - We do that by allowing everyone to contribute styles
    - Written in the same language

- css: |
    /* a 'declaration' */
    property: value;
    color: blue;
  script: |
    - Each of us providing
    - our _style hints_ as _declarations_,
    - a _property_ and a _value_

- css: |
    /* a selector, with attached declarations… */
    /* a 'style rule' (or 'rule set') */
    p {
      background: white;
      color: mediumVioletRed;
    }
  script: |
    - We can group those together,
    - and add selectors
    - forming _rule-sets…_

- html: |
    <!-- a 'style sheet' -->
    <link rel="stylesheet" href="styles.css">
  script: |
    - Which can be attached to an HTML document,

- css: |
    /* another 'style sheet' */
    @import url('styles.css');
  script: |
    - Or chain together,
    - _Resulting in…_

- quote: >
    An ordered list (**cascade**) of _style sheets_.
  cite: *proposal
  script: |
    - An ordered list (or 'cascade') of stylesheets
    - all applied to the same web site,
    - _But not coordinated…_

- known: img-not-alone-et
  script: |
    - Remember, anyone can add styles to the page
    - So, of course, _this leads to conflicts!…_

- css: |
    /* <button type="submit" id="send" class="action"> */
    button          { background: gray; }
    .action         { background: darkBlue; }
    [type=“submit”] { background: darkGreen;
                      background: var(--submit, black); }
    #send           { background: maroon; }
  caption: >
    💥 Conflicts!
  script: |
    - We have _any number_ of declarations
    - coming from _different sources_
    - likely applying different values
    - to the same properties, on the same elements!

- pre: For _Browsers_...
  title: |
    Every _CSS Property_ \
    On Every _HTML Element_, \
    **Must Have** a _Single Value_
  script: |
    - Browsers need to resolve conflicts.
    - Every CSS property
    - on every HTML element
    - must have a _single value_

- pre: Every _`<button>`_ Needs
  title: |
    One **`Background-Color`** \
    & One Text **`Color`** \
    & One **`Padding-Left`** \
    & One **`Margin-Inline-End`** \
    & ...
  script: |
    - Every button needs
    - one text `color`,
    - one `padding-left`,
    - one `margin-inline-end`, etc.
    - _To get there, we need..._

- img: no-harm/thunderdome-words.jpg
  alt: >
    Tina Turner as Aunty Entity
    in the Mad Max Thunderdome,
    with the law
    'Two styles enter, one style leaves'
    in bold text
  caption: >
    Put **Tina Turner** in the browser, you cowards
  script: |
    - Some way to thunder-dome our declarations
    - And choose a single winner
    - Two styles enter, one style leaves

# <!--
# ..#######..########..####..######...####.##....##..######.
# .##.....##.##.....##..##..##....##...##..###...##.##....##
# .##.....##.##.....##..##..##.........##..####..##.##......
# .##.....##.########...##..##...####..##..##.##.##..######.
# .##.....##.##...##....##..##....##...##..##..####.......##
# .##.....##.##....##...##..##....##...##..##...###.##....##
# ..#######..##.....##.####..######...####.##....##..######.
# -->

- css: |
    /* button { background: gray; } */
    /* .action { background: darkBlue; } */
    [type=“submit”] {
      /* background: darkGreen; */
      /* background: var(--submit, black); */
    }
    #send { background: maroon; }
  script: |
    - The simplest way to choose a winner,
    - We can let each declaration override the previous one
    - Until there's only one left
    - Last takes precedence
    - _We'll start there, but…_

- known: img-not-alone-et
  script: |
    - Someone has to go first,
    - And who gets to go last?
    - We have to put everyone into some kind of _order_

- pre: First…
  title: |
    🖥 **User Agent** Styles
  caption: aka _Browser Defaults_
  script: |
    - Sure, ok.
    - We can start with the styles we already have
    - At the _bottom_ of our cascade,
    - first and least important
    - The browser, or _user agent_
    - providing _legible defaults_
    - That's essential!

- known: img-history-line-mode
  script: |
    - You can't render text without styling it somehow!

- known: url-history-chss
  script: |
    - This email archive doesn't add any document styles,
    - But the browser is providing some!
    - Let's see what happens when we remove those.
    - [demo]
    - <clip-board>* { all: initial; }</clip-board>

- css: |
    /* initial values */
    display: inline;
    background: transparent;
    color: CanvasText;
    font-style: normal;
    flex-basis: auto;
    /* etc. */
  caption: >
    Properties have **initial values**
  script: |
    - Here we're seeing _initial values_…
    - The specification defines
    - An _initial value_ for each _property_
    - Display inline, background transparent, and so on

- css: |
    body { display: initial; } /* inline */
    section { display: initial; } /* inline */
    div { display: initial; } /* inline */
    span { display: initial; } /* inline */
    head { display: initial; } /* inline */
    title { display: initial; } /* inline */
  script: |
    - The `initial` value for `display`
    - is _always_ `inline`!
    - Doesn't matter what element we're talking about
    - Body, section, div, span…

- img: no-harm/title-inline.jpg
  alt: >
    Proposal email with dev tools open
    and * { display: inline; } applied,
    inspecting the title element in the document head,
    which is now visible on the page
    before the h1 that starts the email.
  caption: *proposal
  script: |
    - Even something hidden like the `head` or `title` element
    - Would get `display:inline` by default
    - _If the browser didn't come along and set…_

- css: |
    html, body, p, div, article, aside, header,
    hgroup, footer, main, nav, section /* etc */ {
      display: block;
    }

    base, basefont, datalist, head, link, meta,
    script, style, template, title /* etc */ {
      display: none;
    }
  script: |
    - `display:block` and `display:none`
    - everywhere we expect it

- css: |
    body { margin: 8px; }
    a:link {
      color: blue;
      text-decoration: underline; }
    h1, h2, h3, h4 /* etc */ {
      font-weight: bold;
      font-size: something big I dunno; }
  script: |
    - They also add things like
    - `8px` margin on the `body`
    - Link colors and underlines
    - Heading styles, large bold text
    - Space around paragraphs and lists, etc

- known: link-user-agent
  script: |
    - These are the user agent styles
    - And they apply to every site on the web
    - With only minor differences between browsers

- pre: Second…
  title: |
    👥 **User** Styles
  caption: aka _User Preferences_
  script: |
    - After browser defaults
    - Users apply their preferences

- quote: >
    [CSS] provides _author_ and _reader_
    with **the same notation**…
  cite: *proposal
  script: |
    - Originally using CSS syntax as well

- img: no-harm/safari-user-styles.jpg
  alt: >
    Safari settings panel,
    advanced tab,
    with a red scribble highlighting
    a style sheet option,
    with none selected by default.
  caption: >
    Safari: settings / advanced / style sheet…
  script: |
    - Safari still supports this option
    - In the settings panel, upload a stylesheet

- known: img-user-preferences
  alt: >
    Language and appearance preferences in Firefox
    include light/dark mode,
    colors, fonts, and zoom level
  caption: |
    Firefox appearance settings
  script: |
    - Other browsers have mostly switched
    - To limited preference settings in a graphic interface

- known: link-user-preferences
  script: |
    - The details are different
    - But the results are the same
    - Users get to set some default preferences
    - That are applied to every site they visit

- known: img-not-alone-et
  script: |
    - And to be clear,
    - When we talk about 'users' or 'readers'
    - on the web…

- title: We **All Use The Web**
  sub: More than we _author it_
  script: |
    - We're talking about _all of us_
    - We all use the web
    - And I think it's safe to say
    - We spend more time using the web
    - Than we spend _building it_

- pre: We can _all_
  title: Have **Preferences**
  script: |
    - And we're all allowed to have preferences!
    - Not just light mode or dark mode,
    - But fonts, font sizes, all of it.

- img: no-harm/btconf/hard.jpg
  alt: >
    Jessica with a slide that says
    it's hard to be a person
  fit: contain
  caption: Jessica Hische

- img: no-harm/btconf/hard-small.jpg
  alt: >
    Previous slide badly edited so it's Miriam
    saying it's hard to be a person
    reading the small low-contrast text
    on your website
  fit: contain
  caption: Miriam Suzanne

- pre: Go ahead…
  title: Make The Web **Your Own**
  caption: that's the whole point
  script: >
    - I used to worry as a dev
    - "but I'll see something different than the user"
    - _That's the point! People might see something different!_
    - Having a unique setting is a great way to remember that

- pre: Finally…
  title: 🎨 **Author** Styles
  sub: from the _author origin_
  script: |
    - Finally, 'document' or 'author' styles
    - (also us, making stuff for the web)
    - We come last

- title: 🗺 Cascade **Origins**
  md: |
    1. 🖥 **User Agent** Defaults (first, lowest priority)
    2. 👥 **User** Preferences
    3. 🎨 **Author** Styles (last, too powerful)
  script: |
    - And so we get the highest priority,
    - Last takes precedence, remember!
    - These are called the 'cascade origins'
    - We override the user preferences
    - Which override the browser defaults

- img: https://images.unsplash.com/photo-1561898431-a2988eb64ecb
  alt: >
    girl reaching into a white bucket,
    with paint all over
    her hands and the floor around her
  position: bottom left
  caption: >
    Photo by [Tanaphong Toochinda](https://unsplash.com/@daen_2chinda)
  script: |
    - Which is a lot of power for us to have!
    - Sometimes we're not even paying attention
    - _Or we throw a fit…_

- known: img-cascade-vader
  script: |
    - And stomp around force-choking everyone in our way
    - But Håkon was clear…

- quote: |
    If conflicts arise
    **the user should have the last word**
  cite: *proposal
  script: |
    - When it really matters,
    - The _user_ should have the last word

- quote: >
    If a trade-off needs to be made,
    **always put user needs above all**.
  cite: >
    W3C
    [Web Platform Design Principles](https://www.w3.org/TR/design-principles/#priority-of-constituencies)
  caption: >
    'Priority of Constituencies'
  script: |
    - This has also become a W3C principle
    - Always put user needs above all

# <!--
# .####.##.....##.########...#######..########..########
# ..##..###...###.##.....##.##.....##.##.....##....##...
# ..##..####.####.##.....##.##.....##.##.....##....##...
# ..##..##.###.##.########..##.....##.########.....##...
# ..##..##.....##.##........##.....##.##...##......##...
# ..##..##.....##.##........##.....##.##....##.....##...
# .####.##.....##.##.........#######..##.....##....##...
# -->

- css: |
    color: blue 64%;
  script: |
    - So the original proposal included
    - A percentage next to each declaration
    - Expressing how _important_ that style is

- css: |
    /* user styles */
    html { background: blue 64%; }

    /* site styles */
    html { background: red 100%; } /* only 36% */
  script: |
    - And if the user requests 64% control,
    - It doesn't matter how much we want,
    - This isn't winner-takes-all,
    - It's first-come-first-served
    - And there's only `36%` remaining influence for us…

- title: >
    `color-mix(in srgb, blue 64%, red)`
  mode: dark
  background: 'color-mix(in srgb, blue 64%, red)'
  script: |
    - And the result is a weighted average of our styles!
    - I wanted blue, but you asked for red,
    - So here's the purple no one asked for!
    - People immediately pointed out how this could go wrong
    - And how hard it would be to average other values like fonts

- img: no-harm/comic-papyrus.webp
  alt: >
    A comic-sans papyrus mashup
    font specimen with upper/lower latin characters
    and punctuation, on textured parchment
    with a drawing of Anubis laying face-up
    on snoopy's dog house,
    and a small tagline claiming
    the most beutifulest font ever created.
    ever. full special character set included
    (not shown here)
  caption: |
    [Comic Papyrus](https://www.nicolaginzler.com/2015/05/25/comic-papyrus/)
    by Ben Harman
  script: |
    - Although I wish we had tried harder on that one

- code: |
    :      User            Author
    Font   o-----x--------------o 64%
    Color  o-x------------------o 90%
    Margin o-------------x------o 37%
    Volume o---------x----------o 50%
  caption: *proposal
  script: |
    - I honestly love this final diagram that Håkon provides
    - ASCII art of a graphic interface with range sliders
    - So users can fine-tune their design
    - Live-mixing the relative weights of every declaration

- css: |
    html { background: blue; }            /* 0%   */
    html { background: red !important; } /* 100% */
  script: |
    - It was simplified into a binary option
    - 0% by default, or 100% with the `important` flag…

- md: |
    1. 🖥 User Agent Defaults
    2. 👥 User Preferences
    3. 🎨 Author Styles
    4. ==❗🎨 Author **Important**==
    5. ==❗👥 User **Important**==
    6. ==❗🖥 User Agent **Important**==
  script: |
    - Important styles generate three new origins!
    - They always win over normal styles,
    - But now we go in reverse order –
    - Authors first, but then user preferences
    - And the browser plays cleanup

- img: no-harm/spock-twin.jpg
  alt: Spock, and Spock with a goatee
  caption: |
    `!important` _mirror universe_
  script: |
    - It's a mirror universe where
    - All our evil twins have goatees

- img: no-harm/btconf/tennis.jpg
  alt: >
    Top view of people playing tennis
  caption: >
    Photo by [Lucas Davies](https://unsplash.com/@lucas_davies?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash)

- img: no-harm/btconf/squash.jpg
  alt: >
    Two guys in a squash court,
    the closer one is taking a dramatic swing

- img: no-harm/ua-important.jpg
  alt: >
    Searching firefox user agent styles
    for important with 26 results,
    three visible setting area display none
    and fullscreen iframes
    border none, parring unset
  script: |
    - Yes, browsers defaults are often important

- img: no-harm/preferences-important.jpg
  fit: contain
  alt: >
    In the font preferences dialogue,
    a default-checked option:
    Allow pages to choose their own fonts,
    instead of your selections above
  caption: |
    Firefox: un-check for `!important` behavior
  script: |
    - And users can set important styles
    - Using CSS in Safari
    - Or a checkbox in the Firefox settings

- pre: The _purpose_ of…
  title: ❗**Importance**
  script: |
    - Importance doesn't change _specificity_
    - It changes the origins
    - And the priority of origins
    - _The purpose…_

- pre: Authors
  title: 👎🏼 **Specificity** Wars
  sub: With our own _colleagues and libraries_
  script: |
    - Is not for fighting each other
    - In big teams who can't agree
    - Or angrily trying to override
    - Styles we wrote last year

- pre: Browsers/Users
  title: |
    👍🏼 **Protect** Styles
  sub: From higher origins _breaking important things_
  script: |
    - The purpose is for _users_ and _browsers_
    - To _protect style_ from _future origins_
    - Someone that _might come along later…_

- known: img-cascade-vader
  script: |
    - That's us
    - Importance exists to
    - _protect our users_ from what we might do!

- title: Often **Isolated**
  md: |
    1. …
    2. …
    3. ==🎨 Author Styles==
    4. ==❗🎨 Author **Important**==
    5. ❗…
    6. ❗…
  script: |
    - But the way our origins (normal and important)
    - _Are isolated together…_

- img: no-harm/astrolabe.jpg
  alt: >
    Mechanical astrolabe
    with Earth at the center,
    and concentric rings
    for other planets/stars
  script: |
    - We start to think
    - We're the center of the universe

- img: no-harm/orrery.jpg
  alt: >
    Clockwork orrery,
    with planets circling the sun,
    and the earth off to one side
  position: top
  script: |
    - When we're really just one pale blue dot
    - In the solar system of the cascade
    - Which rotates around user needs!
    - Fair, it's what we deal with every day
    - But we need to have perspective

- quote: |
    A Jedi uses the [Cascade]
    for _knowledge and defense_,
    **never for attack**.
  cite: Yoda (basically)
  face: no-harm/yoda.jpg

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
    - So now we're not just dealing with
    - some extreme unknowns

- img: no-harm/spock-diversity.jpg
  alt: >
    Infinite diversity in infinite combinations,
    Spock wearing a medallion triangle on circle
    and giving the Vulcan salute
  script: |
    - Infinite diversity in infinite combinations

- quote: >
    There are **too many variables to consider.**
    The point of CSS is to make it
    so you don’t have to worry about them all.
  cite: Keith J Grant
  caption: >
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)
  script: |
    - But the browser is allowed to ignore us
    - And the user can override anything we say
    - There are two many variables,
    - and everything we say is a _suggestion…_

- quote: |
    The point of CSS is to make it
    so **you don’t have to worry about them all**.
  cite: Keith J Grant
  caption: >
    [Resilient, Declarative, Contextual](https://keithjgrant.com/posts/2018/06/resilient-declarative-contextual/)
  script: |
    - But everything we say is also a _hint_
    - Telling the browser something about our _intent_

- pre: CSS is
  title: A **Declarative** Language
  script: |
    - CSS is a declarative language

- title: >
    **`width`**`: 500px;`
  script: |
    - Some declarations seem simple,
    - the width of a box

- title: >
    `text-wrap: `**`pretty`**`;`
  script: |
    - While some are more abstract,
    - wrapping text so it looks 'pretty'
    - (whatever that means)

- title: >
    `width: `**`500px`**`;`
  caption: |
    [Zoom, zoom, and zoom](https://www.oddbird.net/2024/07/09/zoomies/)
    by **Miriam**
  script: |
    - But even 'simple' declarations contain _subtext_
    - What do we mean by a pixel?
    - Should this box get smaller
      on a screen with higher resolution?
    - How should it respond to zooming in and out?

- known: img-content-box
  caption: >
    The `content-box` model
  script: |
    - Are we setting the width of the content box?
    - (so padding and border are added to our width)
- known: img-border-box
  caption: >
    The `border-box` model
  script: |
    - Or the width of the entire box,
    - so padding and border are _subtracted_ to get the content size?

- title: |
    `width: `**`100%`**`;` \
    `width: `**`90vw`**`;` \
    `width: `**`80cqi`**`;`
  script: |
    - Should it be based on _context_
    - a parent element, viewport, or container

- title: |
    **`flex: `**`1`
  script: |
    - Or flexible in relation to sibling elements
    - And remaining space

- img: no-harm/btconf/look-within.jpg
  alt: >
    Jessica in front of a slide
    that says stop looking sideways,
    look within
  script: |
    - Or should we stop looking sideways,
    - and look _within_

- title: |
    `width: `**`min-content`**`;` \
    `width: `**`max-content`**`;`
  script: |
    - To get the size of the _contents_
    - That's a great suggestion, Jessica

- demo: https://workshops.oddbird.net/_demos/flow/physical/
  script: |
    - Maybe it's not the `width` we care about at all,
- demo: https://workshops.oddbird.net/_demos/flow/logical/
  script: |
    - that's just the direction text flows.
    - Are we trying to set the length of a line of text?

- title: >
    `inline-size: `**`45em`**`;`
  script: |
    - Should it be based on the size of the font?

- title: |
    `width: `**`min(45em, 100%)`**`;`
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

- title: |
    `width: `**`auto`**`;`
  script: |
    - We don't have all the information, but the browser does
    - So the most useful tools in CSS
    - express this kind of abstract _behavior_
    - let the browser work out _details_

- img: no-harm/same-color.png
  caption: >
    `A` and `B` are both <code style="--color-tile:#787878">#787878</code>
  alt: >
    A cylinder casts a shadow
    across a chess board,
    creating an optical illusion -
    a dark square outside the shadow (A)
    and a light square inside (B)
    are actually the same shade of gray

  script: |
    - Like all design choices
    - Our styles are _contextual_
    - Properties often behave differently
    - or not at all, depending on _other properties_

- pre: CSS _properties_
  title: Are Never **Pure Functions**
  script: |
    - As a result, CSS features tend to be _intertwined_
    - Behavior is never isolated,
    - And everything has side-effects
    - We're not doing functional programming,

- pre: Expressive
  title: Like **Poetry**
  script: |
    - What we do is more expressive, like poetry
    - Not describing the page in step-by-step detail
    - but communicating high-level ideas through subtext
    - Not just _the result we want_
    - But _the intent_ behind each choice

- pre: Subtext…
  title: >
    `16px` **!=** `1em`
  caption: |
    [CSS Values & Units](https://www.w3.org/TR/css-values/)
  script: |
    - Units are great at this
    - (it's why CSS has so many of them)
    - On the surface `1em` is _sometimes_ `16px`
    - But they carry different implications
    - And _adapt differently_ in context

- pre: In CSS…
  title: >
    `flex` **!=** `grid`
  script: |
    - Similar with layout methods
    - We can sometimes get the same result
    - using either flexbox or grid
    - But they _move_ differently at the edges,

# <!--
# ..#######..##.....##.########
# .##.....##.##.....##....##...
# .##.....##.##.....##....##...
# .##.....##.##.....##....##...
# .##.....##.##.....##....##...
# .##.....##.##.....##....##...
# ..#######...#######.....##...
# -->

- known: img-history-www
  script: |
    - And our job, the entire reason we're here
    - Is not to make things look good on one device,
    - Or in a single browser, but…

- img: no-harm/btconf/risks.jpg
  alt: >
    Sophie in front of a slide
    that says know the risks and plan for them
  caption: Sophie Koonin

- title: Design For **Change**

- known: quote-dao-control
  script: |
    - By letting go of control…

- quote:
    Provide **hints** that _the browser may or may not use_.
  cite: Håkon Lie
  script: |
    - While expressing ourselves _clearly_
    - Providing _hints_ and _suggestions_

- img: no-harm/btconf/robot.jpg
  alt: >
    Jan in front of a slide
    of his young child and an orange-faced robot
    leaning their heads together
  caption: Jan De Coster
  script: |
    - We can express what we want
    - To the browser
    - Like a therapy robot
    - So it can help us adapt

- img: no-harm/btconf/shit.jpg
  alt: >
    Sophie in front of a slide
    that says 'incidents happen'
  caption: Sophie Koonin
  script: |
    - When incidents inevitably happen
    - Because incidents always happen

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

- img: no-harm/not-alone.jpg
  alt: >
    We're Not Alone
    (in big block letters, in space)
  script: |
    - We're not alone on this platform
    - and everything about CSS
    - is built around that political vision

- quote: >
    Always put **user needs** above all.
  cite: >
    W3C
    [Web Platform Design Principles](https://www.w3.org/TR/design-principles/#priority-of-constituencies)
  script: |
    - Respect the user

- quote:
    It takes craft to **set up the circumstances** that are
    **simple and yet contain the ambiguities**
    and the incongruity of human experience.
  cite: Anne Bogart
  caption: A Director Prepares
  script: |
    - This is our job as designers, design engineers
    - Not forcing everyone into a singular experience
    - But setting up the circumstances for communication
    - In an unpredictable world,
    - adapting to the _incongruities of human experience_

- quote: >
    Content should be **viewable** and **accessible** by default.
  cite: >
    W3C, [Platform Design Principles](https://www.w3.org/TR/design-principles/#css-content-should-be-visible)
  script: |
    - Protect the content

- img: no-harm/btconf/nothing.jpg
  alt: >
    Sophie in front of a slide
    that asks
    what happens if you do nothing?
  caption: Sophie Koonin

- pre: _First_
  title: Do **No Harm**
  script: |
    - Do no harm
---
