---
draft: true
venue: An Event Apart, Denver
date: 2022-09-13
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
slides:
- section: why we cascade

- title: The 🌊 **Cascade**

- title: The '**C**' in...

- title: |
    **C**ascading **H**TML **S**tyle **S**heets
  sub: Håkon Lie -- _October 10, 1994_

- face: mia-89.jpg
  alt: 7 year old Miriam with her hands on her knees
  pre: |
    _1989_
  title: Blissful **Ignorance**

- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top
  caption: |
    [WWW HyperMedia Browser](https://worldwideweb.cern.ch/browser/)
    & *Editor*

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
  cite: W3C [Mission Statement](w3.org/Consortium/mission.html#principles)

- img: no-harm/4k.jpg
  alt: Modern desktops
- img: dynamic-css/devices.jpg
  alt: A zillion different devices of all sizes (original)
- img: unfriendly/braille.jpg
  alt: Braille interface and headphones
- img: process/smartwatch.jpg
  alt: Lineup of smart watches
- img: unfriendly/agnesscott/smart-home.png
  alt: Google Home, Amazon Echo, and Apple HomePod
- img: queries-units/web-everything.jpg
  alt: |
    A gray office covered in cobwebs,
    and a gettyImages watermark.

- title:
    HTML [**Design Constraints**](http://info.cern.ch/hypertext/WWW/MarkUp/HTMLConstraints.html)
  caption: http://info.cern.ch/hypertext/WWW/MarkUp/HTMLConstraints.html

- pre: Not a
  title: Lack of **Styles**

- pre: But a
  title: Lack of **Author Styles**

- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top
  caption: |
    [WWW HyperMedia Browser](https://worldwideweb.cern.ch/browser/)
    & *Editor*

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
- pre: 1993-1994
  title: Style **Proposals**
  caption: w3.org/Style/History/
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
    **ViolaWWW** by **Pei-Yuan Wei**, 1993 (viola.org)
- md: |
    ```
    @DEFAULT fo(fa=ti,sp=pr,si=14,we=me,sl=ro,fo=in,bo=in,li=no)
    ju(st=le,hy=0,ke=0) co(nu=1,wi=80) br(lo=af,ob=it)
    li(lo=in,ma=no,li=un,nu=1,be=no,af=no,hi=0)

    @UL in(le=5)
    @LI ma(pr=ro,be=4) in(le=10,ri=10)
    ```
  caption: |
    **Robert Raisch**, June 1993
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
    Early _Tailwind_ prototype

- demo: https://web.archive.org/web/2022/http://info.cern.ch/hypertext/WWW/MarkUp/HTMLConstraints.html
  zoom: 2
  caption: info.cern.ch/hypertext/WWW/TheProject.html

- section: Origins & !mportance
- section: Shadow Context
- section: Attached (Inline) Styles
- section: Cascade Layers
- section: Selector Specificity
- section: Order of Appearance
- section: closer
---
