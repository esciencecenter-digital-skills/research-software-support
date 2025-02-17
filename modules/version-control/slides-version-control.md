---
title: Version Control Slides
type: slides
order: 1
---

<!-- .slide: data-state="title"  -->
# Version Control

What is version control and why should I use it?

note:
You are probably using version control every day. Word and other documents store a history of changes for you, which you can undo. Google docs have an even more intricate system of reviewing history, etc.

===

<!-- .slide: data-state="standard center" -->
### Version Control

*a system that organizes and records changes to a (set of) file(s) and/or their metadata over time, allowing one to
revisit specific versions later.*

<div class="fragment" data-fragment-index="1">
  <img src="https://swcarpentry.github.io/git-novice/fig/phd101212s.png" width="38%">
  <small> <a href="http://www.phdcomics.com">Piled Higher and Deeper</a> by Jorge Cham </small>
</div>

note:
Strictly speaking, this is a form of version control: separate versions are stored, commented on, and organized in some way.

Lets see a more practical, systematic, and robust way of doing this...

===

<!-- .slide: data-state="standard center"  -->
## Documents are treated as...

<div>
  ... a series of changes
  <img style="height: 30vh; margin: 0; padding: 0;" src="https://swcarpentry.github.io/git-novice/fig/play-changes.svg"/>
</div>

note:
In version control systems, documents start with a base version and record all the changes that happened on top of that base version. Because of this you can always "play back" to an earlier version or compare separate iterations, without having to store near-identical variations of the same documents.

==

<!-- .slide: data-state="standard center"  -->
## Software consists of one or more documents...

... each of which are treated as a series of changes.

We typically call the group of documents that comprise the software the [codebase](version_control_terminology).

note:

#TODO: make this slide graphical instead
#TODO: reword this slide

===

<!-- .slide: data-state="standard center" -->

## Each change is stored...

... alongside useful metadata.

A single unit of change is called a [commit](version_control_terminology).

<img src="media/git-diff.png" width="80%">

note:
A version control system (like git) keeps track of the individual changes for us.

==

<!-- .slide: data-state="standard center" -->

## Sequential changes form a log

The data structure that contains the codebase plus the commit history is called a [repository](version_control_terminology).

<img src="media/git-log.png" width="80%">

note:

#TODO: show a github commit history instead?

==

<!-- .slide: data-state="standard center"  -->
## Changes can be complex

- Additions/deletions to a file
- Changes to a document
- New files added
- Files moved into different folders
- ...

note:

#TODO: consider moving this slide to later in the presentation

===

<!-- .slide: data-state="standard" -->
## Revisiting Past Versions

Say you have dozens (hundreds, thousands) of old versions, how do you manage to find a useful previous version?


- effective committing (sizing & messages)
- versioning systems
- CHANGELOGs

note:

#TODO: replace list below with a cartoon or image, the list will become separate slides

==

<!-- .slide: data-state="standard" -->

## Effective Committing

- Keep commits small and focused
  - #TODO: add ref on atomic commits
- Add useful commit messages to each commit
  - short main message, room for additional detail
  - #TODO: show example

note:

==

<!-- .slide: data-state="standard" -->

## Versioning

Use a logical system to keep track of (stable) versions.
- Semantic Versioning (SemVer):
  - v1.3.12 => major.minor.patch
  - #TODO: add link to SemVer
- Create a different (logical) system 
  - and document it in the repo
  - #TODO: show example from ruff
- Update on zenodo to create a DOI

note:

Not every change or addition needs a new version number; this is what commits/commit messages are for.

Make sure that whatever versioning system you use is also documented in the repo, so that others (and future you) can see what the logic is.

==

<!-- .slide: data-state="standard" -->

## Change Logs

Keep a human readable log summarizing the changes of each new version

note:

This is the equialent of the "commit message" at the level of a new version.

#TODO: show example imaghe of a change log

===

<!-- .slide: data-state="standard center" -->
## Collaborating using VC

More than one...

<div style="float: left; width: 49%;" class="fragment" data-fragment-index="1">
  ... source of change...
  <img style="height: 80%; padding-top: 20px;" src="media/versions.svg"/>
</div>

<div style="float: right; width: 49%;" class="fragment" data-fragment-index="2">
  ...can be merged into a single document.
  <img style="height: 80%; padding-top: 20px;" src="media/merge.svg"/>
</div>

note:
When collaborating you might have various versions (sets of changes) that co-exist at the same time on so called "branches". Modern version control software can usually automatically merge multiple changes into a single document.

==

<!-- .slide: data-state="standard center" -->
## Keeping a Centralized Repository

<img style="height: 350px;" src="https://www.researchgate.net/profile/Mark-Ziemann/publication/371671830/figure/fig2/AS:11431281168661745@1687060872300/Distributed-version-control-Adapted-from-48.png" alt="Distributed version control. Adapted from [48]."/>

<small>[The five pillars of computational reproducibility: Bioinformatics and beyond](https://www.researchgate.net/figure/Distributed-version-control-Adapted-from-48_fig2_371671830)</small>


note:
Collaborative code developers often make use of a remote server (like GitHub, or GitLab) as a central repository from which all other repositories derive. But this is not the only way you can use version control to do collaborative development.

==

<!-- .slide: data-state="standard center" -->
## Hosting the Main Repository

<img src="media/repository_logos_focused.png" width="80%"> <!-- non-focused image can be found until SHA 8c658f43, v1.6.0 -->


note:
Many different tools exist specifically for collaborative version control of computer source code and other simple text-based documents.

Git (for version control) with GitLab and GitHub (for collaboration) are the mainstream, used by many and with lots of features. We recommend against using any of the other tools unless the users already know what they are doing or have very strong reasons for sticking to them.

GitLab is fully open source and allows for setting up private environments (#TODO: lookup the terminology). Conversely, GitHub is owned by Microsoft and uses (some) proprietary software components, but is more widely used and more people will be familiar with the interface and functionality.

==

<!-- .slide: data-state="standard center" -->
## Branching

A project can have many [branches](version_control_terminology), which may or may not get [merged](version_control_terminology) back into the main version.

<img src="https://book.the-turing-way.org/_images/sub-branch.png" width="60%">
<small> Image by: <a href="https://book.the-turing-way.org/reproducible-research/vcs/vcs-workflow-branches">The Turing Way</a></small>

What uses can you think of to create branches, other than "feature branches"?
<!-- .element: class="fragment" data-fragment-index="1" -->

note:
The main branch is supposed to be a stable version, that one can mostly rely on to work as expected. Changes created in branches may get merged back into the stable version, or may persist (or die) as a parallel version
Branches here are indicated as "feature branches", i.e. branches used while creating new features in a code base.

Other uses of branches:
- a sandbox or playground, for trying out different things without "damaging" the stable version
- organizing/storing results alongside their different variations/settings 

===

<!-- .slide: data-state="standard center" -->
## What can go wrong?

<img src="media/conflict.png" height="80%">

note:
If changes are made to the same section (usually the same or consecutive line(s) of text) of a document a [merge conflict](version_control_terminology) arises. Changes cannot be automatically merged, as the interpreter does not know which version or which combination to use. Human intervention is required and can involve rolling back a change, finding common ground between changes, etc.

Resolving merge conflicts can be time-consuming and error prone, especially for large conflicts. Therefore it is a good idea for teams to agree on some basic practices to avoid creating conflicts in the first place.

==

<!-- .slide: data-state="standard" -->
## Merge conflicts

If two people change the same line...

```bash
This line contains a typos.
```
... [merge conflicts](version_control_terminology) may arise:
<!-- .element: class="fragment" data-fragment-index="2" -->

```bash
<<<<<< HEAD (Current Change)
This line contained a typo.
=======
This line contained typos.
>>>>>> feature-branch (Incoming Change)
```
<!-- .element: class="fragment" data-fragment-index="2" -->

note:

If changes are made to the same section (usually the same or consecutive line(s) of text) of a document a [merge conflict](version_control_terminology) arises. Changes cannot be automatically merged, as the interpreter does not know which version or which combination to use. Human intervention is required and can involve rolling back a change, finding common ground between changes, etc.

Resolving merge conflicts can be time-consuming and error prone, especially for large conflicts. Therefore it is a good idea for teams to agree on some basic practices to avoid creating conflicts in the first place.

==

<!-- .slide: data-state="standard center" -->
## Avoiding merge conflicts

How to minimize creating merge conflicts:

- !! Communication !!:
  - discuss who is working on what
  - follow existing (or agree on common) code standards such as formatting, style guides, etc.
- Frequent updates:
  - [push and pull](version_control_terminology) each other's changes regularly.
- Organize changes:
  - use "feature branches" rather than making changes to the main document directly
  - avoid "scope creep" and instead create separate independent branches for isolated topics
  - review each other's changes before merging them
- Use (automated) tools to help you with above:
  - *linters* and *formatters* help safeguard/automate adherence to style principles.
  - *Kanban boards* or other task management systems help avoid multiple people working on the same issue

<!-- .element: class="fragment" data-fragment-index="1" -->

note:

Keep in mind, that it is unrealistic to prevent all conflicts. This is fine, but they will need some attention to resolve.

Communication is key!

#TODO: make slide less texty. Spread over slides or use images?

===

<!-- .slide: data-state="standard" -->
## Key Points
- Version control is like unlimited undo in MS Word... and more!
- Version control also allows many people to work in parallel
- For collaborative development a remote, cloud hosted repository is often used as central hub
- Communication is key to avoid conflicting versions of the same software

note:

#TODO: revisit these
