---
talk: Proposal for **Container Queries**
venue: Google Developer Experts
date: 2021-06-03
slides:

# Container Queries ----------------

- pen: Media vs Container
  id: xxqYjeL
  script: |
    - Media queries let us respond to viewport
    - Same element in multiple containers,
      viewport isn't useful
    - Respond to containers instead

- img: csswg/cq-nested.jpg
  alt: |
    Nested grid-item containers
    inside the main container,
    also use small card layout
  fit: contain
  background: white
  caption: |
    Containers can be nested
  script: |
    No matter how those containers are nested.

- title: Layout **Loops**
  sub: CSS _Context_ vs _Content_
  script: |
    But trying to measure a "container" in CSS,
    and then make changes based on that measurement,
    poses a bit of a paradox.

- pen: Rad
  id: BaWrzqd
  script: |
    One of the coolest responsive features in CSS,
    which we don't talk about nearly enough,
    is the way we calculate layout
    based on both context and content.
    Add more content,
    and a container will try to grow,
    but it might also be constrained by context,
    or explicit sizing.

    That's very cool,
    but if you add container queries,
    it becomes an infinite loop:
    as the container gets larger, we make the content smaller,
    which makes the container smaller,
    which makes the content larger.

- pre: 2010-2020
  title: 🚧 Laying **Foundations** 🚧
  script: |
    So for a long time,
    this seemed impossible to implement.
    But behind the scenes,
    a lot of people
    have been laying the groundwork in browsers.

- title: 2020 **Proposals**
  md: |
    - David Baron:
      [`@container`](https://github.com/dbaron/container-queries-implementability) \
      _limited by containment_
    - Brian Kardell:
      [`switch()`](https://bkardell.com/blog/AllThemSwitches.html) \
      _limited to paint_
  caption: |
    Different tradeoffs, worth pursuing both
  script: |
    Last year two proposals emerged,
    showing different ways we might pull this off.
    Both are interesting,
    but David Baron's approach has the most momentum right now,
    and I've been working on it
    to flesh out some of the details,
    and start writing a specification.

- section: Defining **Containers**
  script: |
    The first thing we need to do
    is define our containers --

- img: csswg/cq-nested-containers.jpg
  alt: |
    We need to define the containers
    for our cards to query
  fit: contain
  background: white
  script: |
    Anything we want to be able to measure.

- title: No **Content Sizing**
  script: |
    In order to avoid any layout loops,
    we need to turn off content-based sizing.
    Our containers need to be sized
    without reference to anything inside it.

- css: |
    .container {
      contain: size layout style;
    }
  script: |
    We already have a property for this!
    It's called `contain`,
    and allows us to "contain" various types of things.

    Size containment turns off content-based sizing,
    layout containment is kinda like a clearfix --
    wrapping around floats and margins --
    and style containment keeps list-counters
    from leaking out.

    And we're going to need all three of these
    for our container queries work.

- pre: 2D size containment
  title: Is **Too Restrictive**
  caption: |
    Need a flexible dimension ("Be afraid of heights")
  script: |
    But size-containment is…
    bad in most cases.
    It's just not possible to build all our containers
    with explicit widths and heights!
    We usually need one axis to be fluid,
    so that extra content has somewhere to go.

- pre: We need
  title: |
    **Inline Size** Containment
  caption: |
    See the
    [CSSWG issue for single-axis containment](https://github.com/w3c/csswg-drafts/issues/1031)
  script: |
    Most layouts work by containing the `width`,
    or the inline-dimension,
    and allowing the `height` to grow or shrink
    with the content.
    So we're adding an option to make
    single-axis containment possible.

- css: |
    .container {
      contain: inline-size;
    }
  script: |
    Contain `inline-size`.

    We're not sure if we can also allow
    a `block-size` values here.
    That needs some more experimenting.

- css: |
    .sidebar, main, .grid-item {
      contain: inline-size layout style;
    }
  script: |
    In our initial proposal,
    applying the appropriate containment --
    layout and 1d or 2d size --
    creates a container.

    That's how the Chrome prototype currently works,
    but you can see it's _a lot_ to remember,
    and it's not obvious what's going on.

- css: |
    .sidebar, main, .grid-item {
      container: inline;
    }
  caption: |
    [CSSWG discussion of new syntax](https://github.com/w3c/csswg-drafts/issues/6174)
  script: |
    So we're working on a simpler syntax here.

    Instead of specifying all the containment required,
    we just say what type of container we want --
    or _what we want to query_.
    In this case we want to query the inline size.
    Browsers can take that,
    and apply the right containment
    in the background.

    This syntax is still very much in development,
    so it could change a lot.
    There's some concern around having
    a `container` property
    that is so similar to the `contain` property.

- section: |
    **Querying** Containers
  script: |
    Once we have containers,
    we can begin to query them!

- css: |
    @container (min-width: 40em) {
      .card { /* ... */ }
      h2 { /* ... */ }
    }
  caption: |
    Each element queries the
    _nearest ancestor container_
  script: |
    A container-query
    looks exactly like a media-query,
    but with at-container instead of at-media.
    And each element will query
    the size of it's nearest ancestor container.

    That's another important limitation
    to make sure there are no loops.
    Container's can't query themselves.

- html: |
    <div class="container">
      <div class="container">
        <div class="container">
          We can nest containers!
        </div>
      </div>
    </div>
  script: |
    We can have containers inside of containers --

- css: |
    .container { container: inline; }

    @container (width > 30em) {
      .container { padding: 2em; }
    }
  script: |
    And we can change containers
    inside a container query.
    But each container will respond
    to the size of its parent container.

- pre:
    Chrome **Prototype**
  md: |
    1. Download/Update [Chrome Canary](https://www.google.com/chrome/canary/)
    2. Go to `chrome://flags` in the URL bar
    3. Search for "CSS Container Queries" & enable it
    4. You'll need to restart after turning it on
  caption: |
    [Codepen Demos](https://codepen.io/collection/XQrgJo)
  script: |
    Chrome already has a prototype,
    and you can start playing with it
    behind a feature flag.
    I've started collecting codepen demos
    to help you get started.

- pen: Container Vs Media Queries
  id: NWRJpQo
  script: |
    But why don't I just show you?
    I've set up two containers on the page,
    each with one card using a media-query,
    and one card using a container query.
    The media queries all trigger at the same time,
    but the container queries
    depend on the size of the container.

- pen: container query demo with blockquotes
  id: YzpywrZ
  user: dvdherron
  script: |
    My coworker David Herron,
    made this one showing
    the same blockquote
    with three different designs
    based on the size of the container.

- pen: Flexbox cards, with Container Queries
  id: mdRVMbp
  script: |
    In some cases,
    like inside flexbox or grid,
    there is no outside container
    that will tell us the actual space available
    for each item.
    But we can get around that by adding a container
    around each component --
    in this case div.card is wrapping each article.
    The outer div establishes a container,
    and the inner article can query it.

- pen: Container Query Bookstore
  user: mxbck
  id: XWMrMOp
  script: |
    Max Böck has created this bookstore demo
    with self-contained web components.
    Each component host element is a container,
    and everything inside the component
    adjusts based on available size.

- pen: Container Query Blinds v2
  id: qBrEMEe
  user: jh3y
  script: |
    Of course, we can also get creative!
    Jhey Tompkins made these interactive blinds
    that get smaller as the container gets bigger.
    Because CSS doesn't have to be practical
    to be awesome.

- pre: Migration path
  title: Using **@supports**

- css: |
    @container (width > 30em) { /* CQ support */ }

    /* actual syntax TBD */
    @supports not (container: inline) {
      @container (width > 40em) { /* no CQ support */ }
    }

- pre: More to do...
  title: Container **Units**
  caption: |
    [CSSWG issue for container units](https://github.com/w3c/csswg-drafts/issues/5888)

- pre: More to do...
  title: Non-size **Queries**
  caption: |
    [CSSWG issue for other query ideas](https://github.com/w3c/csswg-drafts/issues/5989)

- pre: More to do...
  title: |
    **Named** Containers
  caption: |
    [CSSWG issue for named containers](https://github.com/w3c/csswg-drafts/issues/6176)

- title: CQ Proposal **Resources**
  md: |
    - [Full CQ Explainer](https://github.com/oddbird/css-sandbox/blob/main/src/rwd/query/explainer.md)
    - [CSSWG project](https://github.com/w3c/csswg-drafts/projects/18)
    - [TAG Review](https://github.com/w3ctag/design-reviews/issues/592)
    - [More Articles & Demos »](/css-next/cq-resources/)
  script: |
    I'm recording this in advance,
    so check back.
    I'll share the link to my slides,
    and update this one with more resources
    before the conference starts.

# outro

- pre: Building on
  title: Existing **CSS**
  script: |
    Building on the existing features of CSS --

- pre: Already make...
  title: Styles **Responsive**
  script: |
    But particularly the overlap
    between the two main goals of CSS:
    to make responsive --
- pre: Already make...
  title: Styles **Reusable**
  script: |
    and reusable styles.
    Building components that are inherently responsive --

- pre: Modular CSS
  title: |
    **Responsive Components**
  script:
    There's already been
    a lot of progress in this space,
    with tools like grid & flexbox & aspect-ratios --
    but Container Queries help us get a little closer.
