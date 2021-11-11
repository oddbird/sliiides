---
venue: Jamstack Toronto
date: 2021-11-11
script: |
  Hello
  small fragment of the world...
slides:
- img: 11ty/no-slides.jpg
  alt: The previous slide, covered in purple scribbles, with NO scrawled in red
  script: |
    I'm not here to show you these slides...
- todo: Add something interesting?
  script: |
    I'm here to show you
    the presentation software behind the slides.
- pre: Introducing…
  title: OddBird **Sliiides**
  sub: my eleventy web presentation tool
  caption: |
    [Sliiides on GitHub](https://github.com/oddbird/sliiides)
  script: |
    This is a little tool that I built
    using HTML, CSS, and just a pinch of javascript --
    with help from my favorite static site generator.
- face: mia-89.jpg
  pre: |
    @TerribleMia
  title: |
    **Miriam** Suzanne
  sub: |
    Age 7 (already very bad)
  script: |
    I give a whole lot of talks,
    way more than a person should.
    I would certainly give fewer talks,
    if I was a less terrible person.
    But here we are...
- md: |
    - **Very fast** to make slides
    - Automatic **code highlighting**
    - Embedded **live demos** (local or codepen)
    - Slide **templates**, and re-usable slides
    - A result that I can share, with **a11y built in**
  script: |
    And it's super important to me that I can
    get everything I want from my presentation tool.
- lang: yaml
  code: |
    slides:
    - img: 11ty/no-slides.jpg
      alt: The previous slide, covered in purple scribbles, with NO scrawled in red
      script: |
        I'm not here to show you these slides...
    - todo: Add something interesting?
      script: |
        I'm here to show you the tool behind the slides.
    - pre: Introducing…
      title: OddBird **Sliiides**
      sub: my eleventy web presentation tool
      caption: |
        [Sliiides on GitHub](https://github.com/oddbird/sliiides)
  script: |
    This tool has been working great for me,
    and 11ty gives it a lot of flexibility.

    I write most of my talks in yaml,
    but any 11ty data format will work.
    Here's the first few slides.
    You didn't see the script bit, but I did.

    I have the speaker view open in another tab.
    And a little bit of local-storage magic
    to keep both tabs in sync.
- lang: yaml
  code: |
    - from: itcss
      use: flipped
  script: |
    Whenever I need something more complex,
    or a slide that I want to re-use,
    I build it as a nunjucks include,
    and then add it to my yaml:
    from (include file) use (macro name).
- from: itcss
  use: flipped
  script: |
    Like this slide where I take
    Harry Roberts inverted triangle,
    and I put it back upright.

    Who goes around flipping triangles on their back like that?
    Come on, Harry!
- demo: awesome
  script: |
    But more often I'm showing off
    how totally [sorry, let me fix that]
    RAD CSS is.
- pen: OMG, Layers
  id: poweapY
  script: |
    and how to use the new features,
    like Cascade Layers --
    already behind a flag in all the major browsers.

    [If we have time left, I can show some of the code]
---
