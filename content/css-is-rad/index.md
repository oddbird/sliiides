---
slug: css-is-rad
title: CSS is Rad
talk: CSS is **Rad**
venue: SmashingConf NY
date: 2019-10-15
banner: CSS is **Rad**
sections:
 - slug: intro
 - slug: rad
 - slug: vision
 - slug: mayiuse
 - slug: resources
tags:
  - talk
  - css is rad
---

{%- for section in sections %}
{%- set get = (page.url + section.slug + '/') if section.slug else none %}
{%- set sectionPage = collections[slug] | getPage(get) if get else none %}
{%- set sectionTitle = sectionPage.data.banner or sectionPage.data.title if sectionPage else '@@@' %}
{%- set sectionTitle = (section.title or sectionTitle) | mdInline %}
{%- if sectionPage or section.url %}
- ## [{{ sectionTitle | safe }} »]({{ section.url or sectionPage.url }})
{%- else %}
- ## {{ sectionTitle | safe }} ...
{%- endif %}
{%- endfor %}
