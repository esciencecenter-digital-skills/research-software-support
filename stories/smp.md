---
id: 1
trl: medium
category: Reusability
title: Software Management Plans
author: eScience Center
thumbnail: "nlesc-dummy.png"
visibility: visible
---
:::Chapter{headline="Intro slides" presentation="slides-smp.md"}

:::

:::Chapter{headline="SMPs" widemd=1}
## Software Management Plans

Research software plays a crucial role in academic research and has become a key output of many research projects. A software management plan helps to implement best practices during software development and ensures that software is accessible and reusable in the short and longer term. It also contributes to the reproducibility of results and stimulates collaborative work on open-source software for research.

[A practical guide to software management plans](https://zenodo.org/record/7589725)

:::

:::Chapter{headline="Why an SMP?" widemd=1}
It’s not hard!

A software management plan (SMP) can help to:

- Explain why developing new software is necessary
- Make the research software reusable and sustainable
- Plan for necessary resources
- Allow for verification of work that went into implementation

:::

:::Chapter{headline="Exercise: SMPs in practice" widemd=1}

*In a live seting, this exercise is done in groups.
Each group will be assigned a software project.
The group will then create an SMP for this project.*

## Step 1: Choose a software project

Choose a software project for this exercise, preferably one you are familiar with.

If you don't have a project in mind, you can use one of the following:
- [Xenon](https://research-software-directory.org/software/xenon)
- [ESMValTool](https://research-software-directory.org/software/esmvaltool)
- [RS-DAT](https://research-software-directory.org/projects/rs-dat)
- [Haddock](https://research-software-directory.org/software/haddock3)
- [worcs](https://cjvanlissa.github.io/worcs/index.html)

Find the Practical Guide at [tinyurl.com/SMP-guide](https://doi.org/10.5281/zenodo.7589725).

## Step 2: Assess the management level needed

- Look at the software repository or page in the Research Software Directory
- Assess what level of management the software needs: low, medium, or high.

For this, use the following considerations (section 5 in [the guide](https://doi.org/10.5281/zenodo.7589725)):

1. **Purpose**. What is the current reason or expected end-use for developing the software?
2. **Reliability**. The effect of software failure and/or non-maintenance on:
    - Risk of harm to self or others. This includes injury, privacy violation, bias, and inappropriate content.
    - Reputation. For example to self, institution or other.
    - Research, either your own or of others. This effect could be due to an obvious software failure ("crash") or a hidden one, for example, returning inconsistent numerical results on different operating systems.
3. **Maintenance**. The long-term effort needed to maintain the software as long as it might be used as a standalone tool or dependency. This includes maintenance functions that can extend beyond the lifespan of the original development project and includes fixing bugs, dependency management, operating system compatibility, and security issues.

This may not be a clear-cut decision, but that is fine.
The goal is to get a sense of the level of management needed.
Discuss with your group and come to a consensus.

## Step 3: Fill in the SMP template

From the assessment made in Step 1, get the requirements that match the level of management needed.

[You can find a template here]().

Copy the template, and fill it in for your software project.

NB:


:::


:::Chapter{headline="Resources" widemd=1}
## Overview of practical guides

- [Version control](https://the-turing-way.netlify.app/reproducible-research/vcs.html)
- [Testing](https://the-turing-way.netlify.app/reproducible-research/testing/testing-guidance.html)
- [Packaging](https://the-turing-way.netlify.app/reproducible-research/renv/renv-package.html)
- [Documentation](https://guide.esciencecenter.nl/#/best_practices/documentation)
  - User
  - Deployment
  - Developer
- [Citation](https://the-turing-way.netlify.app/communication/citable/citable-cff.html#cm-citable-cff)
- [Software licensing](https://the-turing-way.netlify.app/reproducible-research/licensing/licensing-software.html) and [compatibility](https://the-turing-way.netlify.app/reproducible-research/licensing/licensing-compatibility.html)


:::

:::Chapter{headline="Exercise: SMP v FAIR" widemd=1}

## SMP vs FAIR

### Why do we care?

When thinking of the importance of good software stewardship, management, and development practice, many reasons and motivations come to mind.
You may think of:

- Accuracy of results
- Reproducibility of results
- Reusability of software
- User friendliness of software
- Software quality
- Recognition and rewards for software developers
- Scholarly archive
- Software sustainability

What are the reasons and motivations that come to mind for you?

### Mapping motivations

(**NB:** If you are not yet familiar with the FAIR principles for research software, [take a look at the chapter on FAIR software](/fairsoftware) before doing the following exercise.)

The motivations we listed above were important considerations for the development of Software Management Plans as well as the FAIR principles for research software.
They do not match completely, however.
Each has its own focus and emphasis.

In the following exercise, we will map the motivations we listed above to the ultimate goals of SMPs and the FAIR principles.

Draw a Venn diagram with two circles: SMP and FAIR:

<img src="/stories/_smp/venn_fairsmp.png" width="400">

Map the motivations listed above to the Venn diagram.

- Which motivations are covered by SMPs, which by FAIR, and which by both?
- Do you find any motivations that are not covered by either?
- What does this tell you about the relationship between SMPs and FAIR?

:::