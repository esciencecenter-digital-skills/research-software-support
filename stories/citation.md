---
id: 0
trl: medium
category: Publishing & Citing
title: Citation
author: eScience Center
thumbnail: "nlesc-dummy.png"
visibility: visible
---

:::Chapter{headline="Intro slides" presentation="slides-citation.md"}

:::

:::Chapter{headline="Introduction" widemd=1}
## Citing software

Software has become a crucial part of scientific research, yet it is not cited or credited as often and as easily as traditional research outputs. However, it is important to properly cite software, for many reasons, among which:

**Understanding Research Fields**: Software is a product of research, and by not citing it, we leave holes in the record of research of progress in those fields.

**Recognition**: Academic researchers at all levels, including students, postdocs, faculty, and staff, should be credited for the software products they develop and contribute to, particularly when those products enable or further research done by others. Non-academic researchers should also be credited for their software work, though the specific forms of credit are different than for academic researchers. Furthermore, citations can be tracked, which allows for more accurate assessment of the software's impact: who uses it, and what projects does it contribute to?

**Discovering Software**: Citations enable the specific software used in a research product to be found. Additional researchers can then use the same software for different purposes, leading to credit for those responsible for the software.

**Reproducibility**: Citation of specific software used is a crucial step in allowing other researchers to reproduce your results, although it is not sufficient. Additional information such as configurations and platform issues are also needed. Accurate information about the software — and its version! — used in your research is necessary for others to obtain and use the same software, making it easier to validate and build upon your research.

In this module, we will further illustrate the importance of software citation, and we will demonstrate how scientific software can be cited, and how to facilitate this as the author of scientific software. Here, you will be introduced to the file type `CITATION.cff`, which was developed especially for this purpose.
:::

:::Chapter{headline="Software Citation Principles" widemd=1}

The FORCE11 working group published the [Software Citation Principles](https://force11.org/info/software-citation-principles-published-2016/)



## The principles

**Importance**: Software should be considered a legitimate and citable product of research. Software citations should be accorded the same importance in the scholarly record as citations of other research products, such as publications and data; they should be included in the metadata of the citing work, for example in the reference list of a journal article, and should not be omitted or separated. Software should be cited on the same basis as any other research product such as a paper or a book, that is, authors should cite the appropriate set of software products just as they cite the appropriate set of papers.

**Credit and Attribution**: Software citations should facilitate giving scholarly credit and normative, legal attribution to all contributors to the software, recognizing that a single style or mechanism of attribution may not be applicable to all software.

**Unique Identification**: A software citation should include a method for identification that is machine actionable, globally unique, interoperable, and recognized by at least a community of the corresponding domain experts, and preferably by general public researchers.

**Persistence**: Unique identifiers and metadata describing the software and its disposition should persist – even beyond the lifespan of the software they describe.

**Accessibility**: Software citations should facilitate access to the software itself and to its associated metadata, documentation, data, and other materials necessary for both humans and machines to make informed use of the referenced software.

**Specificity**: Software citations should facilitate identification of, and access to, the specific version of software that was used. Software identification should be as specific as necessary, such as using version numbers, revision numbers, or variants such as platforms.

:::

:::Chapter{headline="Exercise: When to cite?" widemd=1}

## Exercise: Which software should I cite?
Suppose you are writing a paper on your latest research and are putting together the reference list. During your research you have used all the software mentioned below. 

- Ubuntu - Operating System ()
- Microsoft word - text editor (used to write the paper, take notes)
- Git - Version control software ()
- Numpy - Python math library (used in nearly all python-based research software)
- ESMValTool - Diagnostic tool/library for Earth System Models (Used in many climate research projects)
- ClimAnal - Your own domain specific python library (defines various analytical functions that you used in your climate research)
- The original code on which you based your library ClimAnal
- Your own local python script, used to execute the analysis

Which software would you cite and which not? Why?

:::

:::Chapter{headline="CITATION.cff" widemd=1}
## The `CITATION.cff` file

To facilitate the citation of scientific software, a group of software developers, researchers, and publishers have come together to develop the `CITATION.cff` format. A `CITATION.cff` file is a lightweight, machine-readable file that provides information about the software, its creators, and how it should be cited. This file can be included in the software, and should be easy to find and access.

There are even nice integrations with GitHub and Zenodo. 

Here is an example of a `CITATION.cff` file:

```
cff-version: 1.2.0
message: "If you use this software, please cite it as below."
authors:
  - family-names: Druskat
    given-names: Stephan
    orcid: https://orcid.org/1234-5678-9101-1121
title: "My Research Software"
version: 2.0.4
identifiers:
  - type: doi
    value: 10.5281/zenodo.1234
date-released: 2021-08-11
```

:::

:::Chapter{headline="Create a citation file" video="zcgLIT5Qd4M"}
## Using cffinit to create `CITATION.cff`

This tutorial demonstrates the use of CFFinit, to create a `CITATION.cff` file. You can find the tool at [citation-file-format.github.io/cff-initializer-javascript](https://citation-file-format.github.io/cff-initializer-javascript/#/).

:::
