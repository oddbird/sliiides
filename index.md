---
layout: base
title: sliiides
---

{% for item in collections.index %}
- [{{ (item.data.banner or item.data.title) | mdInline | safe }}]({{ item.url }})
{% endfor %}
