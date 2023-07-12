<!-- .slide: data-state="title" -->

# FAIR software

---

<!-- .slide: data-state="standard" -->

## *Ceci n'est pas une photo*

<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg/1280px-Black_hole_-_Messier_87_crop_max_res.jpg" width="55%">
</center>

<small>[The Event Horizon Telescope Collaboration et al. 2019](https://doi.org/10.3847/2041-8213/ab0ec7) (CC BY 3.0)</small>

Note:

Software plays an important role in science. A first thought may be its role in data collection and analysis. Further, it may play a role in designing experiments, based on models generated. It may _be_ the experiment itself, simulate a research outcome based on data or ideas entered; it may also be the "brain" behind controlling crucial instrumentation.

What scientific software can you think of?

What role does it play?

An example here: the Event Horizon Telescope, which took a "picture" of a black hole.
The "telescope" is not a single tool, but complex: a "planet-scale array of eight ground-based radio telescopes" (wikipedia).
The separate telescopes collect data that is synchronized with atomic clocks, and the data is combined at highly specialised supercomputers.
The data can be converted into an image using custom software.

---

<!-- .slide: data-state="standard" -->

## Research Software is...

“software that is used to generate, process or analyse results that you intend to appear in a publication (either in a journal, conference paper, monograph, book or thesis)”

*[UK Research Software Survey 2014](https://doi.org/10.5281/zenodo.608046)*

Note:

A definition of research software, from the UK Research Software Survey 2014.
It is important that not all software that is used in research is research software.
For example, a text editor that is used to write a paper is not research software.
Nor is powerpoint, or a web browser.
Even tools like R or Python are not necessarily research software.
The code written for the analysis would research software, however.
Just like a custom made Excel macro that is used to analyse data.

---

<!-- .slide: data-state="standard" -->

## Research life cycle

<center>
<img src="stories/_fairsoftware/researchcycle.png" width="60%">
</center>

Note:
Emphasize the role of software in all phases of research:

- Planning: to design experiments
- Collecting: to collect data, to control instruments, to run simulations
- Analysing: to analyse data, to generate models
- Publishing: to generate figures, to write papers
- Preserving: preserve data and software, to make it available for reuse
- Re-using: to re-use data and software, to reproduce results, to build upon

---

<!-- .slide: data-state="standard" -->

<center>
<img src="stories/_fairsoftware/unescoopenscience.png" width="50%">
</center>

<small>[UNESCO Recommendation on Open Science, 2021](https://creativecommons.org/2021/12/02/unesco-recommendation-on-open-science-ratified/) (CC BY IGO 3.0)</small>

Note:
Open Science encompasses many aspects of science.
It is a movement that aims to make science — which includes software — more open, transparent, and accessible.
This is supported by many organisations, including UNESCO.

---

<!-- .slide: data-state="standard" -->

## The FAIR principles

<center>
<img src="stories/_fairsoftware/fair.png" width="60%">
</center>

Note:
the FAIR principles standardize values that help openness, transparency, and accessibility.

---

<!-- .slide: data-state="standard" -->

![screenshot Wilkinson 2016](stories/_fairsoftware/fairwilkinson.png)

Note:
FAIR principles were originally designed for data, but are also applicable to software.
Designed also with other digital objects in mind, though actual description was data-specific.
This has been extended meanwhile.

---


<!-- .slide: data-state="standard" -->

## Software is not data

Software is...

- **complex**: code is creatively generated, interconnected and multi-layered
- **interdependent**: it builds upon and therefore depends on other software
- **executable**: it is not static, but can be run
- **dynamic**: it can break over time, and versioning is common

Note:
While technically, software is a special kind of data (in that it is representation of information in a digital state), they are in essence quite different.

Software and data both are digital objects, sharing certain characteristics: they can be assigned a DOI, and they can have a license.

Software is quite different from data, however. Consider:

- Complexity; it is not a single file, but a collection of files that are interconnected and multi-layered, and do not necessarily stand on their own. Software is also the result of a creative process that provides a tool to do something, and not the result of a measurement or observation.
- Interdependence; software is often built using other software, and rarely built completely from scratch. This makes it dependent on other existing applications, which themselves may also change over time.
- Executability; software is in its dryest form a set of instructions that can be an archive of a procedure. However, the main goal of software is that these instructions can be executed. Data, by contrast, stand on their own.
- Dynamic vs static; its interdependence and context-dependency drives software to require maintenance to retain its value, and this maintenance is not straightforward. Maintenance is also counter to academic culture; it does not fit in existing structures (both in terms of reward/recognition, but also in terms of funding and understanding of what is needed). Versioning of software is very common, while data is often static (though versions may happen).

---

<!-- .slide: data-state="standard" -->

## Software opportunities

- Software is a **living thing**
- Creative process allows for **early adoption** of good practices
- Openness and transparency are **inherent** to software


Note:
The different nature of software also provides opportunities.
Software is a living thing, and therefore it is easier to adopt good practices early on.
Crucially, there is a community driven openness in software that long predates the open science movement.
This is not to say that software is inherently open, but that there is a broad open culture, which also comes with existing tools and pathways to facilitate openness and transparency.
Consider GitHub (and other code hosting platforms), which are designed for this purpose.
Consider also version control software, a good software development practice that builds in provenance.

---

<!-- .slide: data-state="standard" -->

## Findability

- Archive on Zenodo: DOI and persistence (GitHub is not guaranteed)
- Include metadata, explicitly containing the DOI
- Include it in a searchable software registry

Note:

Metadata: In the context of FAIR, software metadata should at least describe where to find a specific version of the software, how to cite it, who are the authors, what are the inputs and outputs, and what are dependencies.

---

<!-- .slide: data-state="standard" -->

## Accessibility



---

<!-- .slide: data-state="standard" -->

## Interoperability



---

<!-- .slide: data-state="standard" -->

## Reusability



---


<!-- .slide: data-state="standard" -->

## What FAIR is not

FAIR is not a quality checklist!

Software quality is addressed insofar as it affects:

- usability, an aspect of interoperability
- maintainability, an important element of reuse

Quality aspects *not* part of FAIR:

- computational efficiency
- functional correctness
- security
- ...


Note:
The FAIR principles are limited in scope when it comes to software.
It is important to realize that their primary goal is not to address software quality itself.
FAIR software can be of poor quality, and good quality software may not be FAIR.

Some quality aspects are addressed by FAIR, in particular usability and maintainability.
Because software is dynamic and interdependent, its reusability requires that it is maintained to continue to work (or that a conserved context is provided, such as a virtual machine with required dependencies).

Secondary to maintainability are quality aspects like tests, modularized architecture, developer documentation, and so on.

Interoperable software is usable by others, and therefore it is important that it is well documented and that it is easy to install and run.
This ties into quality aspects like user documentation, installation instructions, and so on.

Note though, that there is no mention of correctness, nor of efficiency or security.
Software may adhere perfectly to FAIR, yet produce the wrong results, in a painfully slow and inefficient process, while leaking personal information.

---

<!-- .slide: data-state="standard" -->

## What FAIR is not

Note:
FAIR is not perfect.

FAIR is a

---

<!-- .slide: data-state="standard" -->

## FAIR is a spectrum

Note:

FAIR is not a checklist, but a set of principles.
As such, it informs a spectrum of software sustainability, and not a binary "FAIR or not FAIR".


---

<!-- .slide: data-state="standard" -->

## Take home messages

- Software is found in all stages of the research cycle
- Research software comes in many shapes and sizes
- Software sustainability is important but challenging to achieve
- Good software management leads to better science
- FAIR principles give a practical framework for tackling software sustainability



---

<!-- .slide: data-state="keepintouch" -->


www.esciencecenter.nl

info@esciencecenter.nl

020 - 460 47 70
