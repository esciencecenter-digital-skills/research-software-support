---
title: The `CITATION.cff` file
type: reading
order: 4
---

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
