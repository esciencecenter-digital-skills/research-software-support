---
id: 8
trl: medium
category: Publishing & Citing
title: Publication
author: eScience Center
thumbnail: "nlesc-dummy.png"
---

:::Chapter{headline="Intro slides" presentation="slides-publication.md"}

:::

:::Chapter{headline="Software publication pipeline" widemd=1}

## Steps
It is recommended that all steps in the pipeline are followed, but they are not dependent on eachother. In this pipeline we provide resources to achieve the whole pipeline using GitHub or GitLab for hosting the source code 
* Software repository
* Tag/semantic versioning
* Get a persistent identifier
* Registries
* Software Paper


## Software repository
If possible, during the development of Research Software, changes should be tracked using dedicated version control software like [git](https://git-scm.com/).  
Put all source files in a public version-controlled repository, preferably GitHub or GitLab. Both GitHub and Gitlab provide online repositories for hosting source code. The nice thing about GitHub and GitLab is that it also stores the history of changes to the source code. As can be inferred from their names, they were designed to be used together with Git version control.  

A quickstart tutorial for...

* [GitHub](https://docs.github.com/en/get-started/quickstart/create-a-repo)
* [GitLab](https://docs.gitlab.com/ee/user/project/index.html)


## Versions, tags and releases
Every time software changes, and that history is stored, that can be considered a new **version** of the software. It is useful to add special identifiers, called **tags** to new versions that mark significant changes, so that specific versions of your software can be cited or referenced as dependency by other software. If you use git for version control, [creating tags in git](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

It is good practice to use **[semantic versioning](https://semver.org/)** to tag the software, in this way, information about the impact of the change from one version to the next is stored in the tag. Usually, tagged versions of the software are opened up to the public in a **software release**, together with updated documentation and a documentation of the changes since the previous release in a so called **changelog**.

The documentation of creating releases... 

* [on GitHub](https://docs.github.com/en/repositories/releasing-projects-on-github)
* [on GitLab](https://docs.gitlab.com/ee/user/project/releases/)


## Get a persistent identifier
Specific versions of the software should be published to an archiving service that provides persistent identifiers

For example, Zenodo is a long term archiving service for scientific data and software.
Zenodo will assign a DOI to the published data, making it citable.

Documentation on how to integrate Zenodo with your repository...

* [on GitHub](https://docs.github.com/en/repositories/archiving-a-github-repository/referencing-and-citing-content)
* [on Gitlab](https://gitlab.com/sbeniamine/gitlab2zenodo)


## Registries
To improve findability of the software, it should be shared in [existing software registries](https://github.com/NLeSC/awesome-research-software-registries). Preferably, software is added to a registry specific to the domain and/or programming language. Software can be shared in multiple registries if they are relevant to the software. 


## Software Paper
A major, but also optional step is to publish a journal article about the software specifically in a dedicated software journal. Some examples are:

* [Journal of Open Research Software (JORS)](https://openresearchsoftware.metajnl.com/)
* [Journal of Open Source Software (JOSS)](https://joss.theoj.org/)
* [SoftwareX](https://www.softxjournal.com/)

[Check this extensive list of software journals](https://www.software.ac.uk/top-tip/which-journals-should-i-publish-my-software)

Note that this is different than other scientific journal publications in that the publication should be focussing on the software and its features and not on any particular research results. However, research projects in which the software plays a crucial role can of course be mentioned as use cases. 

## Communication and outreach
Once software is released, it is often a good idea to spend some time on communication and outreach to potential users of the software. In this way the world will get to know your software. This can be in many forms:

* Blogposts
* Organisational/institutional newsletters
* Conference presentations/posters
* Etc.

:::

:::Chapter{headline="Automating software publication" widemd=1} 

Most of the steps in the modern software publishing pipeline can be automated. 
