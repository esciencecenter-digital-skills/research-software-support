---
id: 3
trl: medium
category: Getting started
title: FAIR software
author: eScience Center
thumbnail: "nlesc-dummy.png"
visibility: visible
---

:::Chapter{headline="Introduction: slides" presentation="slides-fairsoftware.md"}

:::

:::Chapter{headline="What is FAIR?" widemd=1}

## What is FAIR?

### FAIR principles (15 minutes)

The FAIR principles are:

- **F**indable
- **A**ccessible
- **I**nteroperable
- **R**eusable

They were originally introduced in [this paper by Wilkinson et al.](https://doi.org/10.1038/sdata.2016.18).
This paper is a good starting point to learn more about FAIR, but if you are already familiar with the concept, a quick skim of the paper should do.
The most important take-away from this particular paper is the point that FAIR, while originally a data-specific concept, was designed with other digital objects in mind as well.

### FAIR software (10 minutes)

To extend the FAIR principles to software, the [FAIR 4 Research Software working group](https://force11.org/groups/fair-4-research-software-fair4rs-working-group/) was formed.
Their paper [Introducing the FAIR principles for research software](https://doi.org/10.1038/s41597-022-01710-x) describes in more practical terms how FAIR can be applied to software.

#### You should now be able to

- Understand the different facets of FAIR
- Be aware of the machine-actionable nature of FAIR
- Get a feeling for additional challenges that software poses to FAIR

### FAIR software (20 minutes, optional)

While the intepretation of the FAIR4RS working group has been the dominant set of principles since its publication, it was not the first attempt to apply FAIR to software.
[This paper by Anna Lena Lamprecht et al.](https://doi.org/10.3233/ds-190026) was published a few years earlier, and also described an extension of the FAIR principles for software.
The paper is a more elaborate in its descriptions of software, the different aspects of software, and how they are or are not addressed by FAIR.
It is a good read if you want to get a deeper understanding of software and its relation to the FAIR principles.

### Discussion

- What are the differences between FAIR principles for data and software?
- What challenges do you see in making software FAIR?
- Why is FAIR software important?

:::

:::Chapter{headline="Research software" widemd=1}

## The role of research software (10 minutes)

The following piece was written after a workshop called "The Future of Research Software", held in the Netherlands in 2022.

It explores the different roles for research software in the research life cycle, strengthening the case for sustainable software.

[Defining the Roles of Research Software](https://upstream.force11.org/defining-the-roles-of-research-software/)

After reading the piece, discuss the following questions:

- What are the different roles of research software?
- What are the challenges for each of these roles?
- How can we address these challenges?

:::


:::Chapter{headline="Exercise: the Research Life Cycle" widemd=1}

## Exercise: Where does software fit in the research life cycle?

Take a look at the research life cycle below.

<img src="stories/_fairsoftware/researchcycle.png" alt="The Research Life Cycle" width="400"/>

Think of a piece of research software you have used or developed.

Where does it fit in the research life cycle?

### Existing software

The following research software can also be used as examples:

- [Xenon](https://research-software-directory.org/software/xenon)
- [ESMValTool](https://research-software-directory.org/software/esmvaltool)
- [RS-DAT](https://research-software-directory.org/projects/rs-dat)
- [Haddock](https://research-software-directory.org/software/haddock3)
- [worcs](https://cjvanlissa.github.io/worcs/index.html)

:::

:::Chapter{headline="Exercise: Mapping FAIR" widemd=1}

## Exercise: Mapping the principles

### The FAIR4RS Principles are:

#### F: Software, and its associated metadata, is easy for both humans and machines to find.

- F1. Software is assigned a globally unique and persistent identifier.
  - F1.1. Components of the software representing levels of granularity are assigned distinct identifiers.
  - F1.2. Different versions of the software are assigned distinct identifiers.
- F2. Software is described with rich metadata.
- F3. Metadata clearly and explicitly include the identifier of the software they describe.
- F4. Metadata are FAIR, searchable and indexable.

#### A: Software, and its metadata, is retrievable via standardised protocols.

- A1. Software is retrievable by its identifier using a standardised communications protocol.
  - A1.1. The protocol is open, free, and universally implementable.
  - A1.2. The protocol allows for an authentication and authorization procedure, where necessary.
- A2. Metadata are accessible, even when the software is no longer available.

#### I: Software interoperates with other software by exchanging data and/or metadata, and/or through interaction via application programming interfaces (APIs), described through standards.

- I1. Software reads, writes and exchanges data in a way that meets domain-relevant community standards.
- I2. Software includes qualified references to other objects.

#### R: Software is both usable (can be executed) and reusable (can be understood, modified, built upon, or incorporated into other software).

- R1. Software is described with a plurality of accurate and relevant attributes.
  - R1.1. Software is given a clear and accessible license.
  - R1.2. Software is associated with detailed provenance.
- R2. Software includes qualified references to other software.
- R3. Software meets domain-relevant community standards.

### Three examples

The following three examples of software have been described with statements that can be mapped to the FAIR4RS Principles. With each statement, identify the principle(s) it maps to, and the (sub)facet(s) of the principle(s) it addresses. A single statement may map to multiple (sub)facets.

#### Example 1: [Comet](https://doi.org/10.1002/pmic.201200439)

Comet is a command-line tool and desktop application for tandem mass spectrometry sequence database search6.

- Comet is licensed under the Apache 2.0 open source licence.
- Comet is registered in the bio.tools catalogue of bioinformatics tools, where it has a globally unique and persistent identifier, and rich metadata that includes the identifier and is searchable and indexable.
- The metadata in bio.tools is independent from the Comet repository, and will stay accessible should the software itself become inaccessible.
- The publicly accessible project repository on GitHub includes detailed information about the development of Comet.
- The code includes dependencies to external software packages, such as Thermo Scientific’s MSFileReader library.
- Comet can be downloaded via the browser following the links provided in the metadata using https.
- Comet uses standard data types from the proteomics domain for its input and output data that are documented in the metadata as functional annotations.

#### Example 2: [PureGoMe](https://doi.org/10.5281/zenodo.4337242)

PuReGoMe is a project aimed at understanding Dutch public sentiment during the COVID-19 outbreak period by analysing real-time Twitter data. It provides a collection of Python scripts and Jupyter notebooks for this purpose.

- PureGoMe can be downloaded from the project repository, while metadata is accessible independently from the registry.
- PuReGoMe's GitHub repository has detailed records of the development history.
- The code includes dependencies to other software, such as various Python libraries.
- PuReGoMe has a (versioned) DOI from Zenodo.
- PuReGoMe uses the Apache 2.0 open source licence.
- PuReGoMe uses standard file formats (e.g., CSV files) for data exchange.
- PuReGoMe refers to other objects such as websites.
- PureGoMe is registered in the Research Software Directory that captures the most relevant metadata, including the identifier, in searchable and indexable form.

#### Example 3: [gammaShiny](https://doi.org/10.5281/zenodo.4139005)

gammaShiny is an application that provides enhanced graphical user interfaces for the R gamma package8. It is used to process in-situ gamma-ray spectrometry measurements for luminescence dating.

- gammaShiny has been deposited in the HAL French national archive and it has a persistent globally unique identifier, with the HAL identifier of the metadata record and a SWHID, identifying specifically the software artefact on the Software Heritage universal software source code archive.
- Thanks to the HAL platform, where a licence is mandatory, gammaShiny is under a GNU General Public Licence v3.0.
- The archived versions of gammaShiny’s source code in Software Heritage include a codemeta.json file, identifiable with a SWHID, where other metadata is available including dependencies named in CodeMeta ("softwareRequirements").

### Do you agree?

The examples were taken from [this paper](https://doi.org/10.1038/s41597-022-01710-x).
In the Results section of the paper you will find the authors' analysis of the software, which contains the statements above, mapped to the FAIR4RS Principles.

Do you agree with their assessment?

:::

:::Chapter{headline="Exercise: FAIR in practice" widemd=1}

## FAIR in practice

Role playing exercise:
One person presents the software, the other person gives feedback.

Tasks for presenter:

- What is the software about?
- Who will use it?
- What is the expected lifecycle of the software?
- What potential users or applications are untapped?

Tasks for reviewer:

- Which FAIR principles are addressed?
- How can the software be made more FAIR?
- What would be the next step (low-hanging fruit)?

Together:

- Define the next steps for the software


Goals:

- Frame an assessment positively: always start with assessing the things that have been done that contribute to good management and FAIR software. This is crucial, as well as motivating.

:::
