---
title: Platform overview
type: reading
order: 3
---

# Overview of publishing platforms

When creating or finding software, you will come across many platforms.
The table below gives an overview of different kinds of platforms and their purposes.

<!--- This exists to fix styling; otherwise the outer columns would have no padding. --->
<div class="not-prose">

|                                | Collaboration | Distributing                                       | Publishing                                 | Archiving |
|--------------------------------|---------------|----------------------------------------------------|--------------------------------------------|-----------|
| **Repositories (e.g. GitHub)** | ✔️            | ⚠️ (Used in practice, but not its primary purpose) | ⚠️ (Possible, but not its primary purpose) | ❌         |
| **Zenodo**                     | ❌             | ⚠️ (Possible, but not its primary purpose)         | ⚠️ (Possible, but not its primary purpose) | ✔️        |
| **Registries (e.g. PyPI)**     | ❌             | ✔️                                                 | ✔️                                         | ❌         |
| **Directories (e.g. RSD)**     | ❌             | ❌                                                  | ✔️                                         | ❌         |
| **Software Heritage**          | ❌             | ❌                                                  | ❌                                          | ✔️        |
| **Software paper**             | ❌             | ❌                                                  | ✔️                                         | ❌         |

</div>

Note that as a developer, you don't have to choose just one.
On the contrary, you will probably make use of multiple of these platforms.
Most software lives in a repository, where multiple people work on it together.
Releases of the software are usually archived in [Zenodo](https://zenodo.org/) (for GitHub, an [easy-to-use integration exists](https://help.zenodo.org/docs/github/enable-repository/)).
Software can be distributed on e.g. PyPI and published on the [RSD](https://research-software-directory.org/) and/or as software paper.
