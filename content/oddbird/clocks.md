---
talk: Mechanical **Clocks**
sub: An Intro to Horology
venue: OddBird (Virtual) Retreat
date: 2023-10-04
slides:
- img: clocks/grandfather.jpg
  alt: Grandfather clocks
- img: clocks/wall.jpg
  alt: Wall clocks
- img: clocks/mantel.jpg
  alt: Mantel clocks
- img: clocks/pocket.jpg
  alt: Pocket watches
- img: clocks/watches.jpg
  alt: Wrist watches

- title: Essential **Parts**
  toc: true

- pre: Called a…
  title: Clock **Movement**

- img: clocks/clickspring.jpg
  alt: >
    Closeup of skeleton clock
    with visible gears
  caption: >
    Skeleton Clock
    (from [Clickspring](https://www.youtube.com/@Clickspring))

- img: clocks/mauthe.jpg
  fit: contain
  caption: >
    1920s Mauthe - German wall clock
- img: clocks/movement.jpg
  fit: contain

- img: clocks/movements.png
  alt: >
    The insides are usually
    brass and steel

- img: clocks/watch-movements.png
  alt: >
    Watch movements have similar parts,
    but a more compact layout
    and (sometimes) synthetic rubies holding the axels

- img: clocks/time-only.jpg
  fit: contain
  alt: >
    A time-only clock
    has one power source to wind,
    and one gear train
  caption: >
    **Time-only** (single wind arbor & spring)
- img: clocks/time-strike.jpg
  fit: contain
  alt: >
    A time and strike clock
    has one two,
    the second one
    is attached to a small padded hammer
  caption: >
    **Time & Strike** (counts the hour / half hour)

- img: clocks/front.jpg

- img: clocks/wire.jpg
  fit: contain
  alt: >
    A spiral wire gong
  caption: A spiral gong
- img: clocks/gong.jpg
  fit: contain
  alt: >
    Several long straight gongs
    with two or more wires
  caption: A straight gong
- img: clocks/cuckoo.jpg
  fit: contain
  alt: >
    A time-and-strike movement
    with a wire up to a cuckoo
    instead of a hammer
  caption: A **cuckoo** is a type of 'strike mechanism'
- img: clocks/chime.jpg
  fit: contain
  alt: >
    A chiming movement has a third power source,
    set of gears,
    and a larger set of hammers in the back
  caption: >
    **Chimes** plays a tune, often on quarter hours

- pre: We'll focus on
  title: The **Time**

- section: >
    **Oscillating** Resistor

- img: clocks/balance.jpg
  caption: Watch **Balance Spring**

- img: clocks/period.png
  fit: contain
  caption: Clock **Pendulum**

- pre: Oscillating _period_
  title: Determined by **Length**

- demo: pendulum-time
  caption: >
    _Time_ from _length_

- demo: pendulum-length
  caption: >
    _Length_ from _time_

- img: clocks/period-chart.jpg
- pen: Pendulum Math
  id: QWzVaEY
- title: >
    Just **Theory**
- img: clocks/period.jpg
  fit: contain
- title: Reality **Sucks**
- title: |
    ~~Reality **Sucks**~~ \
    Reality **Involves Friction**
- title: |
    ~~Reality **Sucks**~~ \
    Reality **Involves Friction** \
    And **Variations in Gravity** \
    And **Variations in Temperature** \
    And…
- title: Do **More Math**?

- img: clocks/compensate.jpg
  fit: contain
  caption: >
    Use _compensating_ materials
    to counter temperature changes…

- title: No, This is **Engineering**
- title: Get **Close Enough**

- demo: pendulum-rough
  caption: >
    Metric _approximations_

- title: Make Everything **Adjustable**

- img: clocks/pend-adjust.jpg
  fit: contain

- title: >
    **Responsive** Clock Design(tm)

- section: >
    **Escapement**

- img: clocks/escape.gif
  fit: contain
  caption: >
    Recoil
    (Wikipedia [Mechanical Escapements](https://en.wikipedia.org/wiki/Escapement#Mechanical_escapements_2))

- img: clocks/deadbeat-escape.gif
  fit: contain
  caption: >
    Deadbeat (notice _two beats per period_)
- img: clocks/grasshopper-escape.gif
  fit: contain
  caption: >
    Grasshopper
- img: clocks/gravity-escape.gif
  fit: contain
  caption: >
    Gravity
- img: clocks/lever-escape.gif
  fit: contain
  caption: >
    Lever (used in watches)

- img: clocks/back.jpg
  fit: contain
- img: clocks/top.jpg
  fit: contain

- pre: Great but…
  title: >
    **Perpetual Motion** is Fake

- title: Pendulum's **Lose Momentum**
  sub: from _pivot friction_ _air resistance_

- img: clocks/crutch.jpg
  fit: contain

- img: clocks/deadbeat.jpg
  fit: contain
  caption: >
    Deadbeat provides angled _impulse_ faces

- pre: Our _escape wheel_
  title: Needs **Torque**

- section: >
    **Power** Source

- img: clocks/time-only.jpg
  fit: contain
  caption: >
    **(Main) Spring** provides a _compact_ power source

- img: clocks/weight.jpg
  fit: contain
  caption: >
    **Weight** provides a _consistent_ power source

- pre: We need a
  title: Very **Small Force**

- pre: Over a
  title: Very **Long Time**

- pre: Our goals…
  title: To **Un-Wind Slowly**
  md: |
    - **30hr** Clock -> Daily Wind
    - **8 Day** Clock -> Weekly Wind
    - **400 Day** Clock -> Yearly Wind

- section: >
    **Gear** Train
  caption: >
    'Train of wheels' or 'going train'

- img: clocks/lever.jpg
  fit: contain
- img: clocks/lever-gear.jpg
  fit: contain

- img: clocks/arbor.jpg

- pre: Paired
  title: >
    **Wheels** & **Pinions**
  sub: >
    Attached to an _arbor_

- pre: Teeth need
  title: Equal **Size** & **Spacing**

- title: >
    **Tooth** Ratio `==` **Size** Ratio
- title: Design With **Circles**

- img: clocks/onshape.jpg
  fit: contain
- img: clocks/spiral-train.jpg
  fit: contain

- img: clocks/side.jpg

- title: >
    Server-Side **Logic**

- pre: Higher _ratios_
  title: Run **Longer**
- pre: Higher _ratios_
  title: Need **More Force**

- pre: Not only
  title: Drawing Out The **Power**

- pre: The _gear ratios_ also…
  title: Divide The **Pendulum Beat**

- pre: Pendulum runs
  title: At **Any Speed**
  sub: smaller clock, shorter pendulum, faster beat

- pre: We need _any wheel_
  title: To Rotate **Hourly**

- pre: Call that…
  title: The "**Center Wheel**"

- img: clocks/center-wheel.jpg

- title: That's our **API**

- img: clocks/motion.jpg

- section: >
    **Dial** Indicator

- pre: >
    _Server side_ logic
  title: >
    Called "**Motion Works**"

- img: clocks/motion-diagram.jpg

- img: clocks/motionwork.jpg
- title: User **Interface**
- img: clocks/mauthe.jpg
  position: top

- pre: >
    _Strike_ Mechanism
  title: Uses **Event Listeners**!
  sub: (we don't have time for that)

- title: My **Process**
- demo: https://clocks.mia.wtf/clocks/v2/
- img: clocks/onshape.jpg
  fit: contain
- img: clocks/test-design.jpg
  fit: contain
- title: >
    **Laser Cut** & **3d Print**
- title: >
    ✨ **Physical** Code ✨
- title: Resources…
  md: |
    - My [Rack and Snail Strike](https://www.youtube.com/watch?v=ntNzVlqbwPM&)
      Video
    - [Repair Shop](https://www.youtube.com/@TheRepairShop)
    - [Clickspring](https://www.youtube.com/@Clickspring)
    - [Wristwatch Revival](https://www.youtube.com/@WristwatchRevival)
    - [NAWCC Video Series](https://www.youtube.com/watch?v=lDZHlcjQnOo)
---
