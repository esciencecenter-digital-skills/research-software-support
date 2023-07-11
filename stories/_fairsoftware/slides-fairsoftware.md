<!-- .slide: data-state="title" -->

# FAIR software

---

<!-- .slide: data-state="standard" -->

## *Ceci n'est pas une photo*

<center>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_Messier_87_crop_max_res.jpg/1280px-Black_hole_-_Messier_87_crop_max_res.jpg" width="55%">
</center>

[The Event Horizon Telescope Collaboration et al. 2019](https://doi.org/10.3847/2041-8213/ab0ec7)

Note:

Software plays an important role in science. A first thought may be its role in data collection and analysis. Further, it may play a role in designing experiments, based on models generated. It may _be_ the experiment itself, simulate a research outcome based on data or ideas entered; it may also be the "brain" behind controlling crucial instrumentation.

What scientific software can you think of?

What role does it play?

An example here: the Event Horizon Telescope, which took a "picture" of a black hole.
A "planet-scale array of eight ground-based radio telescopes forged through international collaboration" (wikipedia).
The separate telescopes collect data that is synchronized with atomic clocks, and the data is combined at highly specialised supercomputers.
They were then converted into an image using custom software.

---

<!-- .slide: data-state="standard" -->

## Research Software is...

“software that is used to generate, process or analyse results that you intend to appear in a publication (either in a journal, conference paper, monograph, book or thesis)”

*[UK Research Software Survey 2014](https://doi.org/10.5281/zenodo.608046)*

Note:

Open source software included in UNESCO recommendations on open science
Various studies highlight importance of research software, but attention for software management is still limited

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

## The FAIR principles

<center>
<img src="stories/_fairsoftware/fair.png" width="60%">
</center>

Note:
FAIR is not a perfect, but a useful metric.
It is a practical framework for thinking about software sustainability.
FAIR is not a checklist, but a set of principles.
As such, it informs a spectrum of software sustainability, and not a binary "FAIR or not FAIR".

---

<!-- .slide: data-state="standard" -->

![screenshot Wilkinson 2016](stories/_fairsoftware/fairwilkinson.png)

Note:
FAIR principles were originally designed for data, but are also applicable to software.
Designed also with other digital objects in mind, though actual description was data-specific.
This has been extended meanwhile.

---


<!-- .slide: data-state="standard" -->

## Software challenges

What challenges does software pose that data does not?

Software is...

- **complex**: code is interconnected and multi-layered
- **dynamic**: versioning is more common; also, it can break over time
- **interdependent**: it builds upon and therefore depends on other software
- **diverse**: there are many different languages and paradigms

Note:
Software requires maintenance to retain its value, and maintenance is not straightforward.
Maintenance is also counter to academic culture; it does not fit in existing structures (both in terms of reward/recognition, but also in terms of funding and understanding of what is needed).

FAIR was designed for data, but aimed at much more.

From Lamprecht et al 2020 (copied and sometimes paraphrased):
Software is not data
Technically, software is a special kind of data, in that it is representation of information in a digital state.
Software and data both are digital objects, sharing certain characteristics: they can be assigned a DOI, and they can have a license.

Differences between data and software:
- Data are facts or observations that provide evidence.
- In contrast, software is the result of a creative process that provides a tool for doing something, for example with data.
- As such, software is executable, while data is not.
- Software is often built using other software. Software is rarely built completely from scratch, and instead utilizes existing applications that leads to complex dependencies.
- The lifetime of software is generally shorter than that of data, as versioning is applied more frequently and regularly leads to changes in behaviour and/or interfaces. Hence, dependencies as well as dependent software packages are subject to frequent changes.

---

<!-- .slide: data-state="standard" -->

## Software opportunities

- Software is a living thing

Note:
For example, while the process of making data FAIR is typically done when the data is published to an archive, open source software ideally should start working toward satis- fying the FAIR4RS Principles when it is initially being developed since it may be used by others directly from its development environment. This is especially true for software that is developed in the open, such as on GitHub, where it is common for users to clone the repository and use the software directly from the repository. In this case, the software is being used before it is published, and therefore it should be FAIR before it is published.
(from Barker et al 2022 and copilot)

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

## FAIR and software quality

FAIR is not a quality checklist!

Software quality is addressed insofar as it affects:

- usability, an aspect of interoperability
- maintainability, an important element of reuse

Quality aspects *not* part of FAIR:

- computational efficiency
- functional correctness
- security


Note:

From Lamprecht et al 2020:

Distinguish between form (that is, how a software is provided, the code itself) and function (that is, what a software actually does, how it behaves, the algorithm encoded), as different quality considerations apply.

Quality aspects concerning the form of software can be considered as covered by FAIR, in particular by the interoperability and reusability principles. It is important to realise that unlike data, software is not static and can only be (re)used if it is sustainable and evolves along with the continuous development of the entire software ecosystem. The quality of its codebase is decisive for a software’s ability to evolve sustainably. This characteristic is often also referred to as maintainability, and includes aspects like modularity, understandability, changeability, analysability and testability [16]. Following guidelines for good scientific software development, as well as language- and/or community specific coding standards [17] are effective means to making and keeping the code base maintainable. Many of these qualities are measurable/quantifiable and could thus be covered with additional FAIR principles and metrics.

Quality aspects that concern the functionality of software, on the other hand, go beyond what is cov- ered by the FAIR principles. Arguably, the most important quality criterion for research software is functional correctness, i.e., the production of the correct results every time the software is run. Thorough validation of the functional correctness of research software can, however, be significantly more difficult than the testing that is required for code maintainability as discussed above [18,19]. For example, testing the software might require specific resources such as access to high performance computing, validated input/output data pairs to test the implementation of an algorithm might not be available yet (as the purpose of the software is to create them), or require the execution of very long computations. Other important quality criteria related to functionality of research software are security measures (guaran- teeing privacy and integrity of research data) and computational efficiency (striving to optimise use of resources and runtime performance). The latter cannot be measured statically and may require system- atic scientific benchmarking in order to arrive at meaningful performance estimates [20,21]. Discussion is ongoing to see if for these criteria workable principles and metrics can be developed, but specific training and adequate attention in the development process are certainly key to high functional quality of research software.


---

<!-- .slide: data-state="standard" -->

## Software sustainability

Note:
Software breaks over time. It needs to be maintained, updated, and adapted to new environments. This is called software sustainability.


---

<!-- .slide: data-state="standard" -->

## Goal: reproducible research

Note:
Is this actually the goal of research software? Or is it to make research more efficient, or to make it possible to do research that would otherwise be impossible?
Or all of the above?

---

<!-- .slide: data-state="standard" -->

## Manage your software

- Is there software we can already use/adapt?
- How easy is it for others to take and use?
- Who will use the software afterwards?
- How will they use it?
- NOT another bit of admin: software management leads to better science!


---

<!-- .slide: data-state="standard" -->

##

---

<!-- .slide: data-state="standard" -->

## Not all software is created equal

Note:
Research software comes in many shapes and sizes; can be single R package written by a PhD student to analyse data from a specific machine.
It can also be a multinational collaboration to develop a tool that is used by thousands of researchers worldwide.

Different software has different needs, but there are common principles in managing them and ensuring their sustainability.
Acknowledging that research software is a broad term and all research software benefits good management is an important first step.

From Lamprecht et al 2020: "Research software includes but is not limited to source code, binaries and web services, and covers a broad spectrum from short scripts written ad hoc by researchers to produce re- sults for a publication, to software rigorously developed for a mission-critical process"

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
