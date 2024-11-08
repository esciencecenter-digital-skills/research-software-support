---
title: Publishing Software
type: slides
order: 2
---

<!-- .slide: data-state="title" -->

# Publishing Software

===

<!-- .slide: data-state="standard" -->

## Before we dive in...

What do you already know about software publication? 

Note: Let participants discuss how they would publish a piece of software.

Answers can potentially be collected in a collaborative document.

===

<!-- .slide: data-state="standard" -->

## What do we mean by publishing?

* Publishing the *software itself* (not just publishing an article *about* it)
* There are many ways to do this

Note:

This generally means the source code itself, ideally including instructions on how to use it, what dependencies it has on other software, etc.

The goal is to allow others to find and use your code, if they so wish, without extreme levels of difficulty.

===

<!-- .slide: data-state="standard" -->

## Why Publish?

* Major scientific considerations 
    * Citability
    * Reproducibility
* FAIRness
<img src="media/fair.png" width="30%">

Note:

Citability - Allows the software authors to get credit for their work
Reproducibility - If software is not published anywhere then few people will successfully reproduce analyses, simulations or other research results that were performed by other researchers

Additionally, publishing is essential for meeting the FAIR principles:
Findability - if software lives on someone's harddrive then it cannot be easily found by anyone
Accessibility - the software can e.g. be downloaded and installed using a standard protocol (authentication is still a possibility)
Interoperability - publishing the dependencies (e.g. software libraries) and input/output formats and versions is necessary for interoperability
Reusability - it's only reusable if it's available, and if people know what they are allowed to do with it (based on its software license)

===

<!-- .slide: data-state="standard" -->

## Traditional publishing pipeline

* Write some code and leave it on your harddrive
* Generate scientific results with it
* Write a paper about those results
* Possibly not even mentioning the software at all

===

<!-- .slide: data-state="standard" -->

### Consequences

* The software itself is not citable
* Methods are not easily reproduced or even analysed
* Nobody else can build on top of your research

===

<!-- .slide: data-state="standard" -->
## Modern publishing pipeline

* Software repository
* Tag/semantic versioning
* Get a persistent identifier
* Registries
* Software Paper

===

<!-- .slide: data-state="standard" -->
### Software repository

Put all source files in a public version-controlled repository
e.g. GitHub, GitLab

* Software is immediately Findable
* Naturally contains a log of all development history

Include a software license, and a citation.cff file

Note:

See license, citation and software management chapters

===

<!-- .slide: data-state="standard" -->
### Software repository
Which one?
<img src="media/repository_logos.png" width="80%">

Note:

Anything is better than nothing. Gitlab and Github are the mainstream, used by many and with lots of features. You might run into projects using other repositories. 

===

<!-- .slide: data-state="standard" -->
### Tag/semantic versioning

It is important to communicate the actual version of the software used for a particular piece of research

If your software is used as a dependency of another software/workflow then specific versions can be referenced

Ideally, use "semantic versioning" in the form MAJOR.MINOR.PATCH (e.g. v2.1.5)

===

<!-- .slide: data-state="standard" -->
### Get a Persistent Identifier

Specific versions of the software should be published to an archiving service that provides persistent identifiers

For example, Zenodo is a long term archiving service for scientific data and software.
Zenodo will assign a DOI to the published data, making it citable

Note:

See Citation story

===

<!-- .slide: data-state="standard" -->
### Registries
Add a link to your software on a relevant public registry

* For example, the eScience Center maintains the Research Software Directory
* Can also be domain specific software registries
* Or even list it on awesomelist

This aids greatly in Findability by relevant researchers

===

<!-- .slide: data-state="standard" -->
### Software Paper

Publish a journal article about the software specifically

* Journal of Research Software (JORS)
* Journal of Open Source Software (JOSS)
* SoftwareX
* CRAN

Some journals perform peer review of the software in question

===

<!-- .slide: data-state="standard" -->

## Automate as many steps as possible!

For example, you can automate archiving on Zenodo by linking it to your github account

See instructions in the "Automating software publication" tab of this story

===

<!-- .slide: data-state="keepintouch" -->


www.esciencecenter.nl

info@esciencecenter.nl

020 - 460 47 70
