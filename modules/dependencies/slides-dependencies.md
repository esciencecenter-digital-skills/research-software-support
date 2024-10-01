---
title: Software Dependencies
type: slides
order: 1
author: Jaro Camphuijsen
---

<!-- .slide: data-state="title" -->

# Software Dependencies

===

<!-- .slide: data-state="standard" -->

## What are software dependencies?

- A piece of software never operates in isolation. 
- Depends on other software (third party packages, libraries)
- Depends on system software (operating system, drivers, firmware)
- Depends on hardware (your computer and the chips inside, display)

note:
Software by nature always depends on other software and hardware. 

===

<!-- .slide: data-state="standard" -->

## What issues arise during development?

- Some dependencies might need (specific versions of) other dependencies, and so on...
- For different projects you might need different versions of the same library
- Dependencies might be updated during development


===

<!-- .slide: data-state="standard" -->

## What issues may arise?

- Many dependencies
- Long chains of dependencies
- Conflicting dependencies
- Circular dependencies
- Package manager dependencies
- Diamond dependency


===


<!-- .slide: data-state="standard" data-background-image="media/fire.png"-->

note: Sometimes you enter dependency hell

===

<!-- .slide: data-state="standard" -->

## What solutions exist?

|Concept |a | d|
|----|----|---|
| Containers  |   |   |
| Environments  |   |   |
| Requirements file|    |   |

===

