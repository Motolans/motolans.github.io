---
layout: single
title: "Weapon Builder"
permalink: /portfolio/weapon-builder/
author_profile: false
sidebar:
  nav: "main"
read_time: false
toc: true
---
<h2 class="section-header">Overview  </h2>
Here's a spreadsheet-based tool I built for a game I'm currently developing. We needed a smoother pipeline for the team to rapidly iterate on item stats outside of the main build. It needed to offer quick, visual comparisons for human eyeballs, as well as export the data in a form that could be easily imported into the game engine.

---

<h2 class="section-header"><span class="material-symbols-outlined" style="color: #1e3a8a;">eye_tracking</span> What's It Do?</h2>

<a href="/assets/images/weapon_checker_0.png" data-lightbox="game-gallery" data-title="Main menu and title screen" style="flex: 1 1 100%; max-width: 100%;">
    <img src="/assets/images/weapon_checker_0.png" alt="Weapon Selector" style="width: 100%; border-radius: 8px;" />
</a>

The Weapon/Ability Builder allows our designers to quickly compare and modify the stats of items in our game (TBA). It also serves as an out-of-engine master list for weapons and abilities. 

<video controls width="100%" poster="/assets/images/weapon_checker_0.png">
  <source src="/assets/videos/w_checker.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

The Weapon Growth Checker:
- Populates a dropdown menu with every weapon created so far
- Shows the color affinity of that weapon (red, blue, yellow, purple, green, orange, or black)
- Shows stat growth by weapon level
- Dynamically updates abilities assigned to the weapon (poison, knockback, etc.)
- Allows the designer to toggle color-based modifiers, dynamically updating stats
- Compares damage output to that of another selected weapon

---

<h2 class="section-header"><span class="material-symbols-outlined" style="color: #1e3a8a;">add_box</span> Adding Stats </h2> 
<video controls width="100%">
  <source src="/assets/videos/w_adder.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Designers add stats in the Automated Weapon Template or Manual Weapon Template. Here, they assign the weapon a color. Each stat gets a base value and an increment value. From a pulldown menu, designers can select the weapon levels at which the staff increments. For example, in the video above, the Icicle weapon is assigned a base value of 5 damage. Damage grows by 2 on each odd level.

If we go back to the Weapon Growth Checker we see:

<a href="/assets/images/w_adder_check.png" data-lightbox="game-gallery" data-title="Weapon Check Update" style="flex: 1 1 100%; max-width: 100%;">
    <img src="/assets/images/w_adder_check.png" alt="Weapon Checker Update" style="width: 100%; border-radius: 8px;" />
</a>

---

<h2 class="section-header"><span class="material-symbols-outlined" style="color: #1e3a8a;">valve</span> Output</h2>

The data is ultimately exported via App Script to JSON, where it can then be imported into the game engine.

<a href="/assets/images/json_output.png" data-lightbox="json_output" data-title="Output" style="flex: 1 1 100%; max-width: 100%;">
    <img src="/assets/images/json_output.png" alt="JSON output" style="width: 100%; border-radius: 8px;" />
</a>

---

<h2 class="section-header"><span class="material-symbols-outlined" style="color: #1e3a8a;">build</span> Tools & Technologies </h2>
- **Tool:** Google Sheets
- **Languages:** Apps Script 

---

<span class="material-symbols-outlined" style="color: #1e3a8a;">psychology</span> Notes / Reflections
Building pipeline infrastructure turned out to be an area where I could quickly add value with this project. A spreadsheet-based tool forces you to think of how to bridge the gaps between GSheets' functional programming paradigm and the engine's imperative one. Initially, I'd leaned more heavily on Apps Script for functionality, but ended up rebuilding the tool entirely with spreadsheet functions (save the export code). It's a lot faster and more stable this way.
