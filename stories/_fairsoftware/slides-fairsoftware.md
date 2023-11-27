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

<center>
<img src="stories/_fairsoftware/definition.png" width="55%">
</center>

<small>definition of Research Software from the FAIR4RS working group</small>

Note:

A definition of research software, from the FAIR4RS working group.
It is important that not all software that is used in research is research software.
For example, a text editor that is used to write a paper is not research software.
Nor is powerpoint, a web browser, or the software used to guide the telescope.
Even tools like R or Python are not necessarily research software.
The code written in R or Python for an analysis would be research software, however.
Just like a custom-made Excel macro that is used to analyse data.
Or a custom-made web application that is used to collect data.

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

![FAIR for Research Software paper](stories/_fairsoftware/fair4rs_paper.png)

Fair 4 Research Software (FAIR4RS) working group (2022)
[doi:10.1038/s41597-022-01710-x](https://doi.org/10.1038/s41597-022-01710-x)

![Contributing Organizations](stories/_fairsoftware/fair4rs_logos.png)

Note:
In 2022, the results of extensive community consultation were published in the FAIR for Research Software paper.
The group behind this was a collaboration between the Research Software Alliance, the Research Data Alliance, and FORCE11.

---

<!-- .slide: data-state="standard" -->

![FAIR for Research Software principles](stories/_fairsoftware/fair4rs_principles.png)

Note:
These are the interpretations given to the FAIR principles for software by the working group.
In many cases these are rephrased to better fit software, but in some cases they are also extended.

---

<!-- .slide: data-state="standard" -->

## Findability

![FAIR4RS Findability](stories/_fairsoftware/fair4rs_F.png)

- Archive on Zenodo for DOI and persistence<br />
  <small> Note that persistence on GitHub is not guaranteed!</small>
- Use (semantic) versioning with updates<br />
  <small> Zenodo assigns a DOI to each version </small>
- Include metadata, explicitly containing the DOI<br />
  <small> but also license, version, dependencies, etc. </small>
- Register the software in a community registry<br />
  <small> such as PyPI or CRAN, depending on the language/domain </small>

Note:
For software findability, a few things need to work together:

The software needs to be archived on a platform that provides a DOI and persistence. GitHub is not guaranteed to provide this, and while it is a useful tool is not a suitable archive for software.
GitHub does work well together with Zenodo, which provides both.
Together they also provide functionality for versioning: when releasing a new version on GitHub, and using the Zenodo integration, Zenodo will update the entry and assign a new DOI to the new version.

For software-specific findability, though, Zenodo is insufficient. Here, you can think of more specific registries, such as PyPI, CRAN, or Bioconductor; depending on the language and domain of the software.

---

<!-- .slide: data-state="standard" -->

## Accessibility

![FAIR4RS Accessibility](stories/_fairsoftware/fair4rs_A.png)

- Community registries provide standard download protocols<br />
  <small> e.g. `pip install my_software` </small>
- Metadata on Zenodo is part of the persistent archive

Note:
A lot of accessibility is covered by the findability principles, but there are a few additional things to consider.
Specifically, software may still be FAIR as long as its metadata is accessible.
The code of the software itself, not the actual functional engine, could be considered metadata.

---

<!-- .slide: data-state="standard" -->

## Interoperability

![FAIR4RS Interoperability](stories/_fairsoftware/fair4rs_I.png)

- Input and output both needs to meet community standards<br />
  <small> e.g. file formats, data models, ontologies </small>
- References to external objects should be unambiguous<br />
  <small> use URLs, DOIs, version numbers etc. </small>

Note:
As with data, interoperability refers partly to formats and standards (in this case: inputs, outputs, or other objects used). For example CSV, JSON, and XML are interoperable formats, while PDF is not.
These standards may also be domain-specific, such as the use of ontologies in the life sciences.

The second sub-principle refers to the use of unambiguous references to external objects, such as libraries, data, or models. A clear link allows the right object to be used by the software.

---

<!-- .slide: data-state="standard" -->

## Reusability

![FAIR4RS Reusability](stories/_fairsoftware/fair4rs_R.png)

- Include a software-specific license<br />
  <small>as a file called `LICENSE` in the project's root</small>
- Many Open Source software licenses exist<br />
  <small> see [choosealicense.com](https://choosealicense.com/)</small>
- License choice is not always straightforward<br />
  <small> confirm with dependencies, copyright holder(s), and specialists </small>
- Use version control (e.g. Git) with a public host (e.g. GitHub)<br />
  <small> history and provenance is a public part of the repository </small>
- Dependencies should be listed, and unambiguous<br />
  <small> use a standardized file/protocol, and version numbers</small>

Note:
Licenses are an important part of reusability.
Without a license, copyright disallows reuse.
In an open science context especially, Open Source licenses are the default choice.
They are numerous, but the choice is not always straightforward.
It is advised to learn about the different licenses, about important considerations (e.g. dependencies and the role and identity of copyright holders) and to consult with specialists when in doubt.

---

### FAIR is not a quality checklist

Software quality is addressed insofar as it affects:

- usability, an aspect of interoperability
- maintainability, an important element of reuse

Quality aspects *not* part of FAIR:

- computational efficiency &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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

## FAIR is a spectrum

<center>
<img src="stories/_fairsoftware/spectrum.png" width="60%" />
</center>

Note:

FAIR is not a checklist, but a set of principles.
As such, it informs a spectrum of software sustainability, and not a binary "FAIR or not FAIR".

FAIR is not a perfect metric, but it is helpful, and tailored to specific values of open science.

---

<!-- .slide: data-state="standard" -->

## Take home messages

- Software is an important part of research
- FAIR4RS principles guide towards accessibility and openness of research software
- FAIR is not a quality checklist
- Software places unique demands on FAIR, and provides unique opportunities
- FAIRness is a spectrum

---

<!-- .slide: data-state="keepintouch" -->


www.esciencecenter.nl

info@esciencecenter.nl

020 - 460 47 70
