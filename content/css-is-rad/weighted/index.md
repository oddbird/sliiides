---
title: Weighted Styles
css: demo-only
back: vision
---

Inspired by
[the original CSS proposal](https://www.w3.org/People/howcome/p/cascade.html),
which includes "weighting" of each rule or style sheet,
and generates a weighted average:

```css
/* user styles */
html { font-size: 16px 60%; }

/* author styles */
html { font-size: 100px; }
```

I've given the user/user-agent
root font-size
a weight of 60%,
and my own
`<code>100px</code>`
font-size
a weight of 40%.
