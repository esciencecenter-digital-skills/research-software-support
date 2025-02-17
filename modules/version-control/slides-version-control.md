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
## Avoiding merge conflicts

How to minimize creating merge conflicts:

- Communicate:
  - discuss who is working on what
  - agree on common standards such as formatting, (conflicting) style guides, linting rules, etc.
- Frequent merging:
  - Merge (small) changes back to the central repository often
  - Pull changes to your local repository regularly
- Organize changes:
  - use "feature branches" rather than making changes to the main document directly 
  - avoid "scope creep" and instead create separate independent branches for isolated topics
  - review each other's changes before merging them

<!-- .element: class="fragment" data-fragment-index="1" -->

note:
Resolving merge conflicts can be time-consuming and error prone, especially for larger changes/conflicts. Therefore it is a good idea for teams to agree on some basic practices to avoid creating conflicts in the first place. Keep in mind, that it is unrealistic to prevent all conflicts. This is fine, but they will need some attention to resolve. 

===

<!-- .slide: data-state="standard center" -->
## Collaboration

<img style="height: 350px;" src="https://www.researchgate.net/profile/Mark-Ziemann/publication/371671830/figure/fig2/AS:11431281168661745@1687060872300/Distributed-version-control-Adapted-from-48.png" alt="Distributed version control. Adapted from [48]."/>

<small>[The five pillars of computational reproducibility: Bioinformatics and beyond](https://www.researchgate.net/figure/Distributed-version-control-Adapted-from-48_fig2_371671830)</small>


note:
Collaborative code developers often make use of a remote server (like GitHub, or GitLab) as a central repository from which all other repositories derive. But this is not the only way you can use version control to do collaborative development. 

===

<!-- .slide: data-state="standard" -->
## Some terminology

Files can be stored in:
 - **working directory**: the files you can see
 - **staging area / index**: files about to be committed
 - **local repository**: the (permanent) record on a given user's disk 
 - **remote repository**: an online copy of the record, often used as the central repository

===

<!-- .slide: data-state="standard center" -->

## The right tool?

<img src="media/repository_logos.png" width="90%">

note:
Many different tools exist specifically for collaborative version control of computer source code and other simple text-based documents. It is often good to know what is the default or most-used tool in your university, institute or group. 

Git (for version control) with Gitlab and Github (for collaboration) are the mainstream, used by many and with lots of features. You might run into projects using other repositories.

===

<!-- .slide: data-state="standard" -->
## Key Points
- Version control is like unlimited **undo** in MS Word, and more
- Version control also allows many people to work in parallel
- For collaborative development a remote, cloud hosted repository is often used as central hub
- Communication is key to avoid conflicting versions of the same software
