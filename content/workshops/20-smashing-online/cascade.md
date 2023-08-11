---
talk: Cascading & Inheritance
date: 2020-05-07
slides:

# 1. Styles -------------------------
- pre: |
    *CSS* is a System
  title: |
    For **Applying Styles** \
    to **Elements**
- quote: |
    The proposed scheme provides
    *a simple mapping*
    **between HTML elements and presentation hints**.
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- title: |
    **Inline** with HTML
  md: |
    ```html
    <button style=“
      background: rebeccapurple;
      color: white;
      font: inherit;
      padding: 0 1em;
    ”>…</button>
    ```
- md: |
    ```html
    <button style=“background: rebeccapurple; … ”>…</button>
    <button style=“background: rebeccapurple; … ”>…</button>
    <button style=“background: rebeccapurple; … ”>…</button>
    <button style=“background: rebeccapurple; … ”>…</button>
    <button style=“background: rebeccapurple; … ”>…</button>
    <button style=“background: rebeccapurple; … ”>…</button>
    ```
- title: |
    **Selector** "Hooks"
  md: |
    ```css
    button {
      background: rebeccapurple;
    }
    ```
    ```html
    <button>…</button>
    ```
- pre: Selectors come in
  title: Four Basic **Categories**
- title: |
    **Universal** `*`
  md: |
    ```css
    * {…}
    ```
    ```html
    <form>
      <button>…</button>
    </form>
    ```
- title: Element **Types**
  md: |
    ```css
    button {…}
    ```
    ```html
    <button>…</button>
    ```
- title: Classes **&** Attributes
  md: |
    ```css
    .action {…}
    [type=“submit”] {…}
    ```
    ```html
    <button class=“action” type=“submit”>…</button>
    ```
- title: Unique **ID**s
  md: |
    ```css
    #send {…}
    ```
    ```html
    <button id=“send”>…</button>
    ```
- title: We Can **Combine Them**
  md: |
    ```css
    #send > button.action[type=“submit”] {…}
    ```
    ```html
    <form id=“send”>
      <button class=“action” type=“submit”>…</button>
    </form>
    ```
- title: We Can **Stack Them**
  md: |
    ```css
    button {…}
    .action {…
    [type=“submit”] {…}
    #send {…}
    ```
    ```html
    <button id=“send” class=“action” type=“submit”>…</button>
    ```
- title: These Are **Powerful Features**!
  sub: combine & layer selectors to convey *meaning* & *intent*
- pre: It's also why
  title: We Need a 🌊 **Cascade**

# 2. Value Error -------------------------
- md: |
    ```css
    button          { background: gray; }
    .action         { background: darkblue; }
    [type=“submit”] { background: darkgreen;
                      background: var(--submit); }
    #send           { background: maroon; }
    ```
    ```html
    <button    style=“background: darkviolet;”
      id=“send” class=“action” type=“submit”>…</button>
    ```
- title: 💥 Conflict!
- md: |
    ```css
    [type=“submit”] { background: darkgreen;
                      background: var(--submit); }
    ```
    ```html
    <button>…</button>
    ```
- pre: 💥 OMG
  title: |
    Mutliple **`background`** \
    On The Same **`<button>`**
- pre: For Browsers...
  title: |
    Every *Property* \
    of Every *Element* \
    **Must Have** a *Single Value*
- pre: A *`<button>`* Needs
  title: |
    One **`Background-Color`** \
    & One Text **`Color`** \
    & One **`Padding-Left`** \
    & One **`Margin-Bottom`** \
    & ...
- pre: The 🌊 **Cascade**
  title: Resolves 💥 **Value Conflicts**

# 3. Browsers -------------------------
- md: |
    1. **filtering** `->` *declared* values?
    2. ==**cascading** `->` *cascaded* value?==
    3. **defaulting** `->` *specified* value
    4. **resolving** `->` *computed* value
    5. **formatting** `->` *used* value?
    6. **constraining** `->` *actual* value?
- pre: For Each
  title: |
    **Element** in the **DOM**
  sub: e.g. *`button`* or *paragraph*
- pre: And Each
  title: |
    Available **CSS Property**
  sub: e.g. *`background-color`* or *`margin-left`*
- pre: 1. Filtering...
  title: Are Values **Explicitly Defined**?
- pre: 2. Cascading (if multiple)...
  title: Which Has the **Most Weight**?
- pre: 3. Defaulting (if none)...
  title: Find a **Fallback Value**!
  sub: Either *inheritance*, or the *property default*
- pre: 4--6 Calculate Final Values...
  title: Based on **Context** & **Layout**
  sub: How many `px` is `50%` in this case?

- demo: cascade-inspect

# 4. Selectors -------------------------
- pre: We Often Talk About
  title: |
    **Selectors** & 🎯 **Specificity**
- title: Where **We Have Control**
  md: |
    ```css
    button          { background: gray; }
    .action         { background: darkblue; }
    [type=“submit”] { background: darkgreen;
                      background: var(--submit); }
    #send           { background: maroon; }
    ```
- pre: Each *Selector* has a *Weight*
  title: Based on **How Specific** It Is
- pre: |
    Inline `style`s are *explicit*
  title: The Highest 🎯 **Specificity**
- md: |
    1. ==*Inline* `style`s==
- md: |
    1. *Inline* `style`s
    2. ==*Unique* `ID`s==
- md: |
    1. *Inline* `style`s
    2. *Unique* `ID`s
    3. ==*Reusable* `class`es & `attributes`==
  caption: |
    Also `:pseudo-classes`, like `:hover` & `:checked` *state*
- md: |
    1. *Inline* `style`s
    2. *Unique* `ID`s
    3. *Reusable* `class`es & `attributes`
    4. ==*Element* `type`s==
  caption: |
    Also `::pseudo-elements`, like `::before` & `::after` *content*
- md: |
    1. *Inline* `style`s
    2. *Unique* `ID`s
    3. *Reusable* `class`es & `attributes`
    4. *Element* `type`s
    5. ==*Universal* `*`==
- pre: Often Represented by *Numbers*
  title: Using **Factors of 10**
  sub: (but I don't recommend it)
- md: |
    - *`1000`* -- Inline `style`s
    - *`100`* -- Unique `ID`s
    - *`10`* -- Reusable `class`es & `attributes`
    - *`1`* -- Element `type`s
    - *`0`* -- Universal `*`

    ```css
    /* 1  +  10  +     10      + 0  == 21 */
    button.action[type=“submit”] * {   …   }
    ```
- title: |
    `10`**`*`**`10`**`!=`**`100`
- title: By That **Logic**...
  md: |
    ```css
    /* 10 +  10 +  10 +  10 +  10 +
       10 +  10 +  10 +  10 +  10  = 100 */
    .class.class.class.class.class
    .class.class.class.class.class {  …  }

    /* 100 = 100 */
    #id    {  …  }
- title: |
    👎 **Don't Bother**
  sub: small numbers are *easier*
- pre: More Like *Versioning*
  title: |
    v3.**9**.5
  caption: |
    3 ids, 9 classes, 5 element types?
- pre: More Like *Versioning*
  title: |
    v3.**10**.5
  caption: |
    3 ids, *10* classes, 5 element types?
- pre: More Like *Versioning*
  title: |
    v3.**11**.5
  caption: |
    3 ids, *11* classes, 5 element types?
- pre: More Like *Versioning*
  title: |
    v3.**462**.5
- pre: More Like *Versioning*
  title: |
    v3.**462**.5 `<` **v4.0**
- pre: Only the *First Number* Matters
  title: |
    **2**.5.1 `or` **1**.12.2 `or` **1**.3.42
- pre: Only the *First Number* Matters
  title: |
    **2.5.1** ~~`or` 1.12.2 `or` 1.3.42~~
- pre: Move on *When Tied*
  title: |
    **1**.12.2 `or` **1**.3.42
- pre: Move on *When Tied*
  title: |
    1.**12**.2 ~~`or` 1.**3**.42~~
- img: cascade/coins.jpg
  alt: Coin-sorter using different-sized column slots
- img: cascade/coins-empty.jpg
  alt: Coin-sorter, with empty columns crossed out
- img: cascade/coins-final.jpg
  alt: Coin-sorter, all but the largest column crossed out

# 5. Authors -------------------------
- pre: Ideally...
  title: A **Layering System**
- pre: From...
  title: |
    **Broad** Patterns \
    to **Specific** Overrides
- from: itcss
  use: layers
- from: itcss
  use: main
- title: Different **Intents**
  md: |
    - `universal/type` » Reset / Normalizer
    - `type/attr` » Initial Defaults
    - `attrs` » Common Patterns
    - `attrs` » Page Layouts
    - `attr > attr` » Components
    - `ID` » Overrides
- title: Some **Limitations**
- title: 👎 Too **Few** Layers
  sub: Use *combinations*!
  caption: |
    Sorry *BEM*, I disagree...
- pre: 👎 Only *Classes* & *Attributes*
  title: Are **Customized** AND **Reusable**
- title: 👎 Selector **Double-Duty**
  sub: As *hooks* & *weights*
- title: 👍 <i>It's *Super Clever*</i>
- pre: 👍 It's *Super Clever*
  title: 👎 But It's **Way Too Clever**

# 6. Origins -------------------------
- pre: Anyway...
  title: 🌊 Cascade `>>>` 🎯 **Specificity**
- quote:
    Style sheets can be cascaded;
    the **user/browser** specifies initial preferences
    and hands the remaining influence over...
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- quote:
    ... It provides
    **author** and **reader** with the same notation...
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- pre: The 🌊 *Cascade* starts with
  title: A **List of Stylesheets**
  sub: applied to the same document...
- pre: Potentially
  title: From **Different** 🗺 **Origins**...
  sub: |
    🖥 *User Agent* (Browser),
    👥 *User*,
    or
    🎨 *Author*
- title: |
    🖥 **User Agent** Styles \
    `aka` *Browser Defaults*
  sub: |
    *`resource://gre-resources/`*
- title: |
    `view` \
    `» page styles` \
    **`» no style`**
- pre: |
    `all:` *`revert`*
  title: |
    **Not** `all:` **`initial`**
  sub: |
    see also `* { all: initial !important; }`
- title: |
    👥 **User** Styles \
    `aka` *Preferences*
  sub: usually not CSS, but *treated the same*
- title: |
    `(user preference demo)`
- title: |
    🎨 **Author** Styles \
    `aka` *Document Styles*
  sub: absolutely *everything* we write
- title: Stacked in **Layers**
  md: |
    1. 🎨 **Author**
    2. 👥 **User**
    3. 🖥 **User Agent**
- pre: Like 🎯 Specificity
  title: Highest 🗺 **Origin Wins**
- md: |
    1. ==🎨 **Author** Styles==
    2. 👥 **User** Preferences
    3. 🖥 **User Agent** Defaults
- title: ?**!**?**!**?
- quote: |
    If conflicts arise **the user should have the last word**
  cite: Håkon Lie
  caption: |
    [Cascading HTML style sheets -- a proposal](https://www.w3.org/People/howcome/p/cascade.html)
- pre: ?*!*?*!*?
  title: What **Gives**!?

# 7. Importance -------------------------
- pre: The *Real Reason* For
  title: ❗**importance**
  caption: |
    Not so you can fight with Bootstrap...
- pre: When anyone adds...
  title: |
    **`!important`**
- md: |
    1. ==❗🖥 User Agent **Important**==
    2. ==❗👥 User **Important**==
    3. ==❗🎨 Author **Important**==
    4. 🎨 Author Styles
    5. 👥 User Preferences
    6. 🖥 User Agent Defaults
- md: |
    1. ==❗🖥 User Agent **Important**==
    2. ❗👥 User **Important**
    3. ❗🎨 Author **Important**
    4. 🎨 Author Styles
    5. 👥 User Preferences
    6. ==🖥 User Agent Defaults==
- md: |
    1. ❗🖥 User Agent **Important**
    2. ==❗👥 User **Important**==
    3. ❗🎨 Author **Important**
    4. 🎨 Author Styles
    5. ==👥 User Preferences==
    6. 🖥 User Agent Defaults
- md: |
    1. ❗🖥 User Agent **Important**
    2. ❗👥 User **Important**
    3. ==❗🎨 Author **Important**==
    4. ==🎨 Author Styles==
    5. 👥 User Preferences
    6. 🖥 User Agent Defaults
- title: Feels Like **Specificity**
  sub: 🐢layers all the way down...
- title: A Few **Special Origins**
- md: |
    1. ❗🖥 User Agent Important
    2. ❗👥 User Important
    3. ❗🎨 Author Important
    4. ==🏇🏽 **Animations**==
    5. 🎨 Author Styles
    6. 👥 User Preferences
    7. 🖥 User Agent Defaults
- md: |
    1. ==🎠 **Transitions**==
    2. ❗🖥 User Agent Important
    3. ❗👥 User Important
    4. ❗🎨 Author Important
    5. 🏇🏽 **Animations**
    6. 🎨 Author Styles
    7. 👥 User Preferences
    8. 🖥 User Agent Defaults

# 8. All Together -------------------------
- pre: Where the 🌊 *Cascade* Starts
  title: In **Theory** & **Practice**
- md: |
    1. ==🗺 *Origin* & ❗*importance*==
    2. 🎯 Selector *Specificity*
    3. ⏭ Source *Order*
- pre: The 🌊 *Cascade*
  title: Isn't Only **About Us**
- pre: Because The *Web*
  title: Isn't Only **About Us**
- md: |
    1. ==🗺 *Origin* & ❗*importance*==
       1. 🎠 Transitions
       2. ❗🖥 User Agent Important
       3. ❗👥 User Important
       4. ❗🎨 Author Important
       5. 🏇🏽 Animations
       6. 🎨 Author Styles
       7. 👥 User Preferences
       8. 🖥 User Agent Defaults
    2. 🎯 Selector *Specificity*
    3. ⏭ Source *Order*
- md: |
    1. 🗺 *Origin* & ❗*importance*
       1. 🎠 Transitions
       2. ❗🖥 User Agent Important
       3. ❗👥 User Important
       4. ❗🎨 Author Important
       5. 🏇🏽 Animations
       6. ==🎨 Author Styles==
       7. 👥 User Preferences
       8. 🖥 User Agent Defaults
    2. 🎯 Selector *Specificity*
    3. ⏭ Source *Order*
- md: |
    1. Origin: 🎨 **Author Styles**
       1. ==🎯 Selector *Specificity*==
       2. ⏭ Source *Order*
- md: |
    1. Origin: 🎨 **Author Styles**
       1. **Inline Styles**
       2. **IDs**
       3. **Classes** & **Attributes**
       4. **Elements**
       5. **Universal** `*`
- md: |
    1. Origin: 🎨 **Author Styles**
       1. **Inline Styles**
       2. **IDs**
       3. ==**Classes** & **Attributes**==
       4. **Elements**
       5. **Universal** `*`
- pre: If there are still options...
  title: The ⏭ **Final Value** Wins
- md: |
    1. 🗺 *Origin* & ❗*importance*
    2. 🎯 Selector *Specificity*
    3. ==⏭ Source *Order*==
- md: |
    1. Origin: 🎨 **Author Styles**
       1. Specificity: **Classes** & **Attributes**
          1. ==⏭ Source *Order*==

# 9. Inheritance -------------------------
- pre: The 🌊 *Cascade*
  title: Filters Out **Extra Values**
- pre: 🧬 *Inheritance*
  title: Fills In **Missing Values**
- md: |
    1. **filtering** `->` *declared* values?
    2. **cascading** `->` *cascaded* value?
    3. ==**defaulting** `->` *specified* value==
    4. **resolving** `->` *computed* value
    5. **formatting** `->` *used* value?
    6. **constraining** `->` *actual* value?
- pre: Sometimes 🧬 *Inheritance*
  title: And Sometimes **`Initial` Values**
- pre: Generally...
  title: |
    **Text** Styles Inherit \
    **Box** Styles Don't
- pre: 🌊 *Cascade*
  title: Is The Solid **Architecture**
- pre: 🧬 *Inheritance*
  title: Is **What's Left Open**
- pre: 🧬 *Inheritance*
  title: Happens **Last**
- pre: 🎯Specified Values
  title: Can **Get There First**
- pre: 🧬 Inherited Values
  title: Don't Care About **Specificity**
- pre: 🧬 Inherited Values
  title: Only Care About **Proximity**
- demo: cascade-inherit

# 10. Wider Please -------------------------
- pre: So We Filter Based On...
  title: 🗺 Where Sheets **Come From**
- pre: And...
  title: How ❗**Important** They Are
- pre: Then...
  title: What They 🎯 **Target**
- pre: And...
  title: Finally The ⏭ **Order**
- pre: Then...
  title: 🧬 Fill Any **Gaps**
- pre: A *Wider* 🌊 *Cascade*
  title: Allows **More Nuance** in Layering
- pre: Conventions like *BEM*
  title: Flatten 🌊 **The Cascade**
  sub: (every selector is a single class)
- pre: When Frameworks Often
  title: Automate **Source Order**
- title: 😬
- title: |
    **Multiple** Solutions
- pre: |
    *Authors* Should
  title: Learn To **Use The Full Cascade**
- title: |
    👍 **#IDs** are *Good*
- pre: When they
  title: Express **Meaning** & **Intent**
- title: 👍 **Nesting** is *Good*
- title: |
    *(We'll come back to this in more detail)*
- pre: |
    *W3C* Should
  title: |
    **Update** & **Extend** The Cascade
- title: More 🎯 **Nuance**
  sub: e.g. `:where()`
- pre: |
    "scoped" styles?
  title: |
    **Custom Elements** \
    & **Web Components**
- title: |
    **Custom Author** Origins?
  caption: |
    [The proposal](https://github.com/w3c/csswg-drafts/issues/4470)
- from: itcss
  use: layers
- title: <i>¯\\\_*(ツ)*_/¯</i>
- title: The Cascade is **Important**
- title: The Cascade is **Useful**
- pre: The Cascade is
  title: Not **Going Away**
- title: Learn To **Use It**
- pre: |
    @TerribleMia
  title: |
    **#ResilientWebSystems**
---
