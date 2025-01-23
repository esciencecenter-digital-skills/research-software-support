---
title: Distributing Software
type: slides
order: 1
author: Jaro Camphuijsen, Lourens Veen
---

<!-- .slide: data-state="title" -->

# Distributing Software

===

<!-- .slide: data-state="standard" -->

## Clear up some jargon 


Script, program, function, notebook, package, library, image, container, it's confusing!

note:
Terms in software can be confusing, especially because they are often borrowed from another context (library, container, image) We'll introduce an analogy that we'll try to use throughout these slides, but as all analogies are imperfect representations of reality, it is bound to break at some point. We hope it will help you in understanding some key terms and concepts in software development.

==

### Functions

abstraction, interface, closed box, recipe, hierarchy, dependency

==

### Notebook

top-level, single file, interactive step-by-step execution/editing, user handles errors

Great for explorative scientific research and data exploration

==

### Script

top-level, single file, usually run as a whole, user handles errors and looks at source

==

### Program

top-level, multiple files, run as a whole, command line or GUI, handles some errors itself or at least presents clear message

==

### Library

lower levels, pre-cooked functionality

==

### Package

contains a library or program, or maybe several

==

### Image

special kind of package that runs in isolation (different degrees, e.g. snap/flatpack, docker, VM)

==

### Container

special kind of package that runs in isolation (different degrees, e.g. snap/flatpack, docker, VM)

===

<!-- .slide: data-state="standard" -->

## Why distribute?

1. For reproducibility/transparency of research
3. For developers that want to reuse parts of your software/methods
2. For users that want to use your software

note:
Remember, scientists usually write software for themselves, they are not really.


There are many reasons why you would want to distribute your software. "Users" and "developers" can include you. 


==


===

<!-- .slide: data-state="standard" -->

## Why can't I just publish and be done?


note:
- A piece of software never operates in isolation. 
- Depends on other software (third party packages, libraries)
- Depends on system software (operating system, drivers, firmware)
- Depends on hardware (your computer and the chips inside, display or printer)
- The world (hardware, software, people) around your software is constantly evolving

===

<!-- .slide: data-state="standard" data-background-image="media/fire.png"-->

note: Sometimes you enter dependency hell

===

<!-- .slide: data-state="standard" -->

## What issues may arise?

- Many dependencies
- Long chains of dependencies
- Conflicting dependencies
- Circular dependencies
- Package manager dependencies
- Diamond dependency

... and all of these are changing.


===

<!-- .slide: data-state="standard" -->

## What solutions exist?

Isolation or specification

===

<!-- .slide: data-state="standard" -->

## Isolation

![Layers of isolation](media/distributing-software-layers.png)

===

<!-- .slide: data-state="standard" -->

## Specification

Let the user (or some tool) solve the probem...

- requirements.txt
- environment.yml
- pyproject.toml
- package.json
etc...

note:
Specify the dependencies in a file and let the user build their own environment, container or vm.

===

## Considerations

- Large amount of isolation enhances reproducibility but decreases flexibility.
- Leaving it up to the user can be done for simple scripts (most research software)

===

## Rules of thumb   

- Simple scripts can use a simple dependency specification
- If other software might depend on this software, package it
- To archive a specific software version and its environment, you could use a container

