---
title: Version Control Slides
type: slides
order: 1
---

<!-- .slide: data-state="title"  -->

# Version Control

What is version control and why should I use it?

note:
You are probably using version control every day. Word documents store a history of changes for you, which you can undo. 

===

<!-- .slide: data-state="standard center" -->
<img src="https://swcarpentry.github.io/git-novice/fig/phd101212s.png" width="45%">

<small> "Piled Higher and Deeper” by Jorge Cham, http://www.phdcomics.com </small>

===

<!-- .slide: data-state="standard center"  -->
## Documents are...

<div >
  a series of changes
  <img style="height: 30vh; margin: 0; padding: 0;" src="https://swcarpentry.github.io/git-novice/fig/play-changes.svg"/>
</div>

note:
In version control systems, documents start with a base version and record all the changes that happened on top of that base version. Because of this you can always "play back" to an earlier version, while it does not store duplicates.

===


<!-- .slide: data-state="standard center" -->

## Changes are stored

<img src="media/git-diff.png" width="80%">

note:
A version control system (like git) keeps track of the individual changes for us. 

===

<!-- .slide: data-state="standard center" -->

## Changes are stored

<img src="media/git-log.png" width="80%">

note:
The changes are stored along with some useful metadata. A set of changes, along with its metadata is called a "commit". 

===

<!-- .slide: data-state="standard" -->
## More than one...

<div style="float: left; width: 49%;">
  independent change
  <img style="height: 350px;" src="media/versions.svg"/>
</div>

<div style="float: right; width: 49%;">
  can be merged
  <img style="height: 350px;" src="media/merge.svg"/>
</div>

note:
When collaborating you might have various versions (sets of changes) that co-exist at the same time on so called "branches". Modern version control software can usually automatically merge multiple changes into a single document.

===

<!-- .slide: data-state="standard" -->
## Merge conflicts

However, if multiple contributors work on the same thing...

```bash
This line contains a typos.
```
<!-- .element: class="fragment" data-fragment-index="1" -->

... then "merge conflicts" may arise: 
<!-- .element: class="fragment" data-fragment-index="2" -->

```bash
<<<<<<< contributor1
This line contains typos.
=======
This line contains a typo.
>>>>>>> contributor2
```
<!-- .element: class="fragment" data-fragment-index="2" -->

note:

If changes are made to the same section (usually the same or consecutive line(s) of text) of a document a **conflict** arises. Changes cannot be automatically merged, as the interpreter does not know which version or which combination to use. Human intervention is required and can involve rolling back a change, finding common ground between changes, etc.

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
  - avoid "scope creep" and instead create separate indepedent branches for isolated topics
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
