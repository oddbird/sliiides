---
talk: Cascading Styles pt. 2
date: 2023-09-06
proposal: &proposal
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
slides:

# Selectors v2

- pre: Free us to…
  title: Use **Expressive Selectors**

- css: |
    .form-action--submit { /* … */ }
    form button[type=submit] { /* … */ }

- pre: Style with
  title: >
    [Stateful, Semantic Selectors](https://benmyers.dev/blog/semantic-selectors/)
  caption: Article by **Ben Myers**

- pre: Some Selectors
  title: Help **Manage Specificity**

- css: |
    [id="example"] {
      /* ID selector, class specificity */
    }

- pre: >
    `:is()` and `:where()`
  title: Take **Entire Selectors**
  css: |
    a:is(body.home #logo) { /* … */ }
    a:where(body.home #logo) { /* … */ }
- pre: >
    `:is()` and `:where()`
  title: Select **The Same Elements**
  sub: The union of both _inside_ & _outside_ selectors
- css: |
    /* (a) AND ALSO (nav .active) */
    a:where(nav .active) { color: black; }
    a:is(nav .active) { color: black; }
- css: |
    /* (h1 a) AND ALSO (main > *) */
    h1 a:where(main > *) { color: black; }
    h1 a:is(main > *) { color: black; }

- pre: >
    `:is()` and `:where()`
  title: Also **Group Selectors**
- css: |
    h1 a:hover, h1 a:focus,
    h2 a:hover, h2 a:focus,
    h3 a:hover, h3 a:focus,
    h4 a:hover, h4 a:focus,
    h5 a:hover, h5 a:focus {
      text-decoration: underline;
    }
- title: Commas for **OR**
  css: |
    /* (h1 OR h2 OR …) AND (a:hover OR a:focus) */
    :is(h1, h2, h3, h4, h5) a:where(:hover, :focus) {
      text-decoration: underline;
    }

- title: Example From **User Agent**
  css: |
    table[rules=cols i] > tfoot > tr > td,
    table[rules=cols i] > tfoot > tr > th,
    table[rules=all i] > tfoot > tr > td,
    table[rules=all i] > tfoot > tr > th {
      /* … */
    }
- css: |
    table:where(
      [rules=cols i], [rules=cols i]
    ) > tfoot > tr > :is(th, td) { /* … */ }

- pre: >
    `:is()` and `:where()`
  title: Have **Different Specificity**

- pre: Use `:where()`
  title: To **Remove** Specificity
  css: |
    a { color: blue; }
    a:hover { color: rebeccapurple; }
    nav a.active { color: black; }

- css: |
    /* nav a.active { 0,1,2 } */
    nav a:where(.active) { /* 0,0,2 */ }
    a:where(nav .active) { /* 0,0,1 */ }

- pre: Use `:where()`
  title: For **Default Variations**

- pre: But `is()` takes specificity
  title: From **Highest Internal Selector**
  css: |
    :is(a, .b, #c .d) { /* 1,1,0 */ }
    a:is(.b, #c .d) { /* 1,1,1 */ }

- title: Comparing **Specificity**
  css: |
    a:where(#logo, .sponsor .logo) {
      /* specificity: 0,0,1 */
    }

    a:is(#logo, .sponsor .logo) {
      /* specificity: 1,0,1 */
    }
- pre: It doesn't matter
  title: Which Item **Matches**!
  md: |
    ```css
      a:is(#logo, .sponsor .logo) { /* … */ }
    ```
    ```html
      <a class="sponsor logo">Still 1,0,1</a>
    ```
- pre: Use `:not()`
  title: For **Excluding Elements**
  sub: (inside matches are removed from outside matches)
  css: |
    /* (p) UNLESS (.warning)  */
    p:not(.warning) { /* … */ }

- title: New **`:has()`** Selector
  css: |
    form:has(:focus) { /* form:focus-within */ }
    button:has(svg) { /* icon button */ }
    .card:has(> figure:first-child) { /* image card */ }
    .card:not(:has(img)) { /* card without image */ }
    input:has(+ .error) { /* input followed by error */ }

- pen: Card has image
  id: abqPdQv
  user: una
  caption: Una Kravets

- pen: Has light/dark selection
  id: wvXvxmv

- caniuse: css-nesting

- pre: >
    `:is()` & `:not()` & `:has()`
  title: Use **Same Specificity**

- title: Which one wins?
  css: |
    article:has(h1, .title) a {
      color: red;
    }

    article h1 a {
      color: green;
    }

- title: CSS **Nesting**
  sub: Also relies on `:is()` selector

- caniuse: css-nesting

- css: |
    button, .btn {
      background: rebeccapurple;
      color: white;
    }

- css: |
    button, .btn {
      background: rebeccapurple;
      color: white;

      &:focus,
      &:hover,
      &:active {
        background: teal;
      }
    }

- css: |
    button, .btn { /* … */ }

    :is(button, .btn):focus,
    :is(button, .btn):hover,
    :is(button, .btn):active { /* … */ }

- css: |
    ol, ul {
      > p { /* :is(ol, ul) > p */ }
      .sidebar & { /* .sidebar :is(ol, ul) */ }
    }

- css: |
    .card {
      @layer defaults {
        display: flex;
      }

      @layer variations {
        @media (min-width: 30em) {
          display: grid;
         }
      }
    }

- pre: For now…
  title: |
    Nested Selectors **Must** \
    Start With a **Symbol**

- title: Not Valid (**Yet**)
  css: |
    ol, ul {
      li { /* … */ }
      nav & { /* … */ }
    }

- title: Solutions (**For Now**)
  css: |
    ol, ul {
      & li { /* … */ }
      :is(nav) & { /* … */ }
    }

- pre: Similar to…
  title: Sass **Syntax**
- pre: Different from…
  title: Sass **Behavior** & **Specificity**

# Scope ----------------

- title: |
    **Scoped** Styles

- demo: cascade-funnel

- pre: 1. Avoid
  title: |
    **Naming** Conflicts
  sub: (across _large teams_ & _projects_)

- pre: 2. By
  title: Expressing **Membership**
  sub: (through _lower boundaries_ & _proximity_)

- title: Scope **Proximity**

- css: |
    .light-theme a { color: purple; }
    .dark-theme a { color: plum; }
  caption: |
    DOM _Proximity_

- demo: scope-proximity-issue

- pre: |
    _`@scope`_` (`_`<root>`_`) { /*…*/ }`
  caption: |
    [Scope spec](https://www.w3.org/TR/css-cascade-6/)

- css: |
    @scope (.light-theme) {
      a { /* similar to simple nesting… */ }
    }
    @scope (.dark-theme) {
      a { /* but the _closer_ scope root wins… */ }
    }
  caption: |
    [Scope spec](https://www.w3.org/TR/css-cascade-6/)

- pen: Scope proximity demo
  id: wvyBNXP

- title: Scope **Boundaries**

- css: |
    .title { /* global */ }
    .post .title { /* nested */ }

    .post__title { /* BEM */ }
  caption: |
    _Membership_ is distinct from _ancestry_

- img: layers/scope-donut.jpg
  alt: Media component with contents that are out of scope
  fit: contain
  background: white
  caption: |
    A "donut scope" with
    _lower boundaries_

- img: csswg/components.jpg
  alt: wireframe of a site, with multiple nested components
  fit: contain
  background: '#e5e5e5'
  caption: |
    A "donut scope" with
    _lower boundaries_

- pre: Build-tools
  title: Provide **Scoped Styles**
  sub: BEM, CSS Modules, Vue, JSX, Stylable, etc

- css: |
    .post__title { /* BEM */ }
    .title[data-JKGHJ] { /* Vue */ }
  caption: |
    Maintain uniqueness

- pre: |
    _`@scope`_` (<root>)`_` to (<boundary>)`_` {…}`
  caption: |
    [Scope spec](https://www.w3.org/TR/css-cascade-6/)

- css: |
    @scope (.media) to (.content) {
      img { /* only images that are "in scope" */ }
    }
  caption: |
    [Scope spec](https://www.w3.org/TR/css-cascade-6/)

- pen: Visualizing scope
  id: XWZwvWj

- pen: Scope boundary demo
  id: ZErXZVY

- title: Nested **&lt;style&gt;** Scopes
- html: |
    <article>
      <style scoped>
        p { color: green; } 
      </style>
      <p>This paragraph will be green.</p>
    </article>

    <p>This paragraph won't!</p>
  caption: |
    ❌ This won't work (yet)
- html: |
    <article>
      <style>
        @scope {
          p { color: green; } 
        }
      </style>
      <p>This paragraph will be green.</p>
    </article>

    <p>This paragraph won't!</p>
  caption: |
    ✅ This works

- pre: Different from
  title: CSS (Descendant) **Nesting**

- title: Lower **Specificity**
- title: Clearer **Relationships**
- title: Lower **Boundaries**

- pre: Different from
  title: Shadow-DOM **Encapsulation**

- img: csswg/widget.jpg
  fit: contain
  alt: |
    Diagram shows a widget with solid boundaries,
    which cannot be penetrated
    in either direction
    (global styles can't get in, widget styles can't get out)
  background: white
  caption: |
    **Encapsulation**
    is designed for _isolated DOM widgets_

- img: csswg/scoped.jpg
  alt: |
    Diagram shows a component with porous boundaries,
    all styles can penetrate, or establish their own lower boundaries
  fit: contain
  background: white
  caption: |
    **Scope**
    is designed for _a unified system_

- pre: By default…
  md: |
    1. **Scoped** styles _win_
    2. **Shadow** styles _lose_

- demo: cascade-funnel

- pre: prototype…
  title: Now in **Chromium Canary**
  sub: |
    `about://flags` - _experimental web platform features_
  caption: (Chrome or Edge Canary)

# Outro

- pre: Finally…
  title: Order of **Appearance**
  sub: (last style wins)

- css: |
    .resilient {
      color: green;
      color: color(display-p3 0 1 0);
    }
  caption: We'll talk about this more soon…

- pre: The Cascade is
  title: Our **Most Powerful Feature**

- pre: The _cascade_ is
  title: |
    Getting **Major Upgrades**

- pre: Fundamental To…
  title: A **World Wide Web**

- pre: The _cascade_
  title: |
    Expresses **Priority**

- pre: The _cascade_
  title: |
    Based on **Intent**

- pre: Describing…
  title: Entire **Design Systems**

- pre: The _cascade_
  title: |
    Facilitates **Collaboration**

- img: layers/not-alone-et.jpg
  alt: |
    Same We're Not Alone,
    with browser logos,
    a guy in construction clothes
    carrying a laptop,
    and ET

- quote: |
    A Jedi uses the [Cascade]
    for _knowledge and defense_,
    **never for attack**.
  cite: Yoda (almost)
  face: layers/yoda.jpg
  alt: Yoda leans on a walking stick among leaves

- pen: Cascade Work Template
  id: abPmNLB
---
