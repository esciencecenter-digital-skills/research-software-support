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
Remember, scientists usually write software for themselves, they are not really thinking about other people using their software. But it's often useful to turn it around. I want to use someone else's software, what would be ideal for me?

There are many reasons why you would want to distribute your software. "Users" and "developers" can include you. 

==

### Scenario 1: reproduce results and review research method 

(and modify -> "notebook" or "script")

Install onto your system, with all the dependencies, and source code, and data
Can be separate from everything else

==

### Scenario 2: reuse parts or methods

(if you've made a new method, or a new implementation -> "library")

Needs an API
Install onto your system, with all dependencies, no source needed
Needs to integrate with other code via programming

==

### Scenario 3: use the application

(if you have a stand-alone tool -> "program", mostly outside of science)

Needs a user interface
Install onto your system, with all dependencies, no source needed
No need to integrate with other code via programming

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

## Software distribution technology

==

### Scenario 1: need to reproduce the environment (dependencies) and then download the notebook/script

- environment definition, e.g. requirements.txt, environment.yml
- make script/notebook available for download
- user uses a package manager to recreate the environment from publicly available software
- use an image (mostly long-term archival)

==

### Scenario 2: need to install dependencies and then the code

from source (dependency hell)
use a package manager
user installs additional dependency using a package manager

==

### Scenario 3: need to install dependencies and the code

- use a package manager (app store)
- use an installer
- use an image (mostly long-term archival)

===

## Software changes over time

Scenario 1: fix versions in your environment definition (but they may cease to work... -> image)
Scenario 2: semantic versioning of the API
Scenario 3: major new features or date-based, marketing issue

===

### Summary

Script/notebook -> Supplementary material/GitHub/Zenodo/Website (with environment definition and input data) -> review, reproduce, modify
Library -> Suitable package manager -> install and use in a script
Program -> Package manager or installer -> install and run on their computer
