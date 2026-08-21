---
title: "AI-assisted 3D printing: from idea to object with my son"
author: "Tomas Hajek"
pubDatetime: 2026-05-27T08:00:00+02:00
featured: false
draft: false
tags:
  - ai
  - agents
  - 3d-printing
  - maker
  - parenting
description: "A small weekend maker project with my son: using an AI agent, parametric CAD, and a 3D printer to turn a hanging solar bulb into a desk light stand."
---

My kids bought a small hanging solar light bulb.

There was only one problem: they did not want to hang it.

They wanted it on the desk.

So Tobias and I turned it into a small weekend maker project.

<video controls preload="metadata" playsinline style="width: 100%; border-radius: 0.5rem; margin: 2rem 0;">
  <source src="/videos/desk-lamp-bulb-holder-v6-glass-audiov2-linkedin-4x5.mp4" type="video/mp4" />
  <a href="/videos/desk-lamp-bulb-holder-v6-glass-audiov2-linkedin-4x5.mp4">Watch the process video</a>
</video>

Instead of opening a CAD tool from scratch and manually building the model, I used an AI agent to help create a parametric 3D design.

The workflow was very simple:

- measure the round glass bulb
- describe the holder we wanted
- generate editable Python CAD code
- export STEP and STL files
- validate the model
- slice it
- print it
- test the physical fit
- adjust the design

The final version is a compact 3D-printed cradle: **76 × 72 × 12 mm**, with a **62 mm socket** for the bulb and a shallow **9.5 mm cutout** so the glass sits nicely on the table.

<img src="/images/solar-light-bulb-stand.jpg" alt="A small solar light bulb sitting in a compact black 3D-printed desk stand on a wooden table." loading="lazy" style="width: 100%; border-radius: 0.5rem; margin: 2rem 0;" />

The object itself is not complicated. It is basically a small black base for a decorative cracked-glass solar bulb.

But that is exactly why I liked the project.

It was not about making something impressive. It was about showing the whole chain from a small everyday problem to a real physical object:

**idea → AI-assisted design → parametric CAD → STEP/STL → slicer → printer → physical result**

The repository is structured around source-first 3D printing. The Python CAD file is the canonical source. STEP is the editable CAD export. STL is the slicer input. The agent workflow is documented so the same pattern can be reused for other small household parts.

I like AI agents most when they help turn a small everyday problem into something I can inspect, adjust, print, and hold.

For functional 3D prints, I think this source-first approach matters. You want dimensions, clearances, tolerances, and editable code. A prompt-to-mesh result might look cool, but a parametric model is much easier to measure, regenerate, inspect, and improve after the first print does not fit perfectly.

And for Tobias, the fun part was visible: an idea became code, code became a model, the model became a print, and the print became a thing on the desk.

Watching Tobias see an idea become code, a model, and finally a real object on the desk was the best part of the project.

Repository and process notes:
<https://github.com/hajekt2/3dprint>
