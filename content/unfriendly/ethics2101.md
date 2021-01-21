---
venue: GA Ethics in Design
date: 2021-01-21
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
quote:
  text: |
    **It takes craft** to set up the circumstances
    that are **simple** and yet
    **contain the ambiguities** and the incongruity
    **of human experience**.
  cite: Anne Bogart, **A Director Prepares**
slides:
# intro: easy
- pre: what makes something?
  title: User **Friendly**?
- quote: |
    **Easy** to learn,
    use, understand,
    or deal with
  cite: |
    [Merriam-Webster](https://www.merriam-webster.com/dictionary/user-friendly)
- quote:
    Don't Make Me **Think**
  cite: |
    [Steve Krug](https://en.wikipedia.org/wiki/Don%27t_Make_Me_Think)
  caption: |
    (I haven't read this book…)
- quote:
    It **Just Works**
  cite: Apple?
- pre: As designers
  title: We **advocate for** users
- img: unfriendly/whatwomenwant.jpg
  alt: |
    Altered 'What Women Want' movie poster
    says 'What Users Want'
- quote: |
    Users spend _most of their time on other sites_.
    This means that users prefer your website to work
    **the same way as all the other sites** they already know.
  cite: |
    [Jakob Nielsen](https://www.nngroup.com/people/jakob-nielsen/)
- img: unfriendly/unique.jpg
  alt: |
    Wireframe with top logo and navigation,
    a hero image that says `we're unique`,
    and three columns featuring large icons.
  caption: |
    "All Websites Look The Same"
    from [NoVolume](http://www.novolume.co.uk/blog/all-websites-look-the-same/)

# intro: theater
- img: unfriendly/hellogoodbye.jpg
  alt: |
    A young man collapsed on the ground,
    clasping his sister's hand
  caption: |
    Athol Fugard's **Hello and Goodbye**, 2006

- face: bogart.jpg
  title: Anne **Bogart**
  md: |
    A **Director Prepares**

- img: unfriendly/results.jpg
  alt: |
    You cannot create results.
    You can only create conditions
    in which something might happen.

- quote:
    ...in which there is
    **room for the audience to move around**,
    imagine, and make associations.
  cite: Anne Bogart
  caption: A Director Prepares

# intro: the web

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
- img: no-harm/www-browser.jpg
  alt: The first world wide website & graphic browser
  position: top
- img: no-harm/line-mode.jpg
  alt: The second browser, a text-only terminal
  position: top
  caption: |
    [Line Mode Browser](http://line-mode.cern.ch/www/hypertext/WWW/TheProject.html),
    developed by **Nicola Pellow**
  cite: WWW Project
- title: A **Radical** Shift
- img: rad/indesign-gotl.jpg
  alt: InDesign book-cover layout
- pre: On the web...
  title: Everything is **Variable**
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
- quote: |
    Web **for all**. Web **on everything**.
  cite: W3C [Mission Statement](w3.org/Consortium/mission.html#principles)

# CSS
- quote: |
    ...This implies no device-specific markup,
    **or anything which requires control over fonts or colors**.
- pre: But...
  title: |
    **Fonts** & **Colors** are *Great*
  sub: For both *authors* & *users*
- title: |
    **Cascading** ~~HTML~~ **style sheets**
  sub: |
    *Håkon Lie*, October 1994
  caption: w3.org/People/howcome/p/cascade.html
- quote: |
    This proposal tries to
    **soften the tension** between the *author* and the *reader*.
  <<: *proposal
- quote: |
    An ordered list **(cascade)** of style sheets
  <<: *proposal
- quote: |
    The **user/browser** specifies *initial preferences*
    and **hands the remaining influence over** to the document.
  <<: *proposal
- quote: |
    If conflicts arise **the user should have the last word**
  cite: Håkon Lie
  <<: *proposal
- md: |
    ```
               User            Author
    Font   o-----x--------------o 64%
    Color  o-x------------------o 90%
    Margin o-------------x------o 37%
    Volume o---------x----------o 50%
    ```
- pre: Not _ease_
  title: But **Access** & **Control**
- title: Users are **all different**
  sub: experiences, skills, limitations, goals
- quote: |
    The fact we can **control** a paper page
    is really **a limitation of that medium**.
  cite: John Allsopp, 2000
  caption: |
    [A Dao of Web Design](http://alistapart.com/article/dao)

# Bootstrapping

- title: |
    **Bootstrapping** vs **Plug-and-play**
  caption: |
    Lori Emerson,
    [From the Philosophy of the Open to the Ideology of the User-Friendly](http://loriemerson.net/2013/02/02/from-the-philosophy-of-the-open-to-the-ideology-of-the-user-friendly-2/)

- pre: |
    _Bootstrapping_
  title: |
     **Augmenting** Human Intellect

- quote: |
    **Providing the means** for **users** to create **better tools.**

- quote: |
    **Any barrier that exists**
    between the user and some part of the system
    will eventually be **a barrier to creative expression**.
  cite: |
    “Design Principles Behind Smalltalk” (Byte 1981)

- title: |
    "**Open**" or "**Adaptable**"

- img: process/raspberrypi-kit.jpg
  alt: Raspberry Pi Kit

- pre: |
    _Plug-and-play_
  title: |
    It **Just Works**

- img: process/iphone-3.jpg
  alt: All iPhones

- title: |
    "**Intuitive**" or "**Invisible**"

- img: process/touch-chart.jpg
  alt: chart of common touch gestures

- title: |
    Easy for **Who**?
    To do **What**?

- title: Who defines the "**default**"?

- img: unfriendly/skincolor.png
  alt: Girl with a 'skin color' bandaid significantly lighter than her skin

- img: unfriendly/gender.jpg
  alt: |
    Are you a man or a woman? man, woman, other
  caption: |
    Hat tip [**@GenderTitle**](https://twitter.com/GenderTitle)

- title: |
    **First** Name / **Last** Name?
  sub: and that name never changes...

- img: unfriendly/facebook-gender.jpg
  alt: |
    Old facebook dropdown for Gender
    has 58 options to choose from

- quote: |
    Under an increasing pressure to monetize the data they store,
    Facebook looks for ways to **limit difference** across the site.
  cite: |
    Ben Grosser,
    [How the Technological Design of Facebook Homogenizes Identity and Limits Personal Representation](https://bengrosser.com/blog/how-the-technological-design-of-facebook-homogenizes-identity-and-limits-personal-representation/)

- pre: Make things _easy_
  title: With **Machine Learning**

- img: unfriendly/agnesscott/meyer-review.png
  alt: Facebook Shows Berieved Parents Their Year in Review

- img: unfriendly/twitter-crop.jpg
  alt: |
    Twitter Apologizes for 'racist' image-cropping algorithm.
    Users highlight examples of feature automatically focusing on
    white faces over Black ones

- quote: |
    The *easiest* fix for that biased cropping AI?
    No it’s not to build another AI -
    it’s to **give people the power**
    to select crop boundaries when posting a photo.
  cite: |
    Amy X Zhang,
    [Sep 19, 2020](https://twitter.com/amyxzh/status/1307505876396158976)

- pre: The most _friendly_ approach
  title: Is **Respect**

- img: unfriendly/agnesscott/average.png
  alt: The End of Average

- pre: Design for
  title: |
    **Edge** Cases

- pre: Design for
  title: |
    **Stress** Cases

- pre: Adapt to
  title: |
    User **Needs** & **Preferences**

- img: rad/car-seat.jpg
  alt: Woman adjusting a car seat
  position: bottom

- pre: Please
  title: |
    Make Me **Think**

- face: sarawb.jpg
  title: Sara **Wachter-Boettcher**
  md: |
    [Technically Wrong](https://www.sarawb.com/books)
  caption: |
    Includes the story of NextDoor App
