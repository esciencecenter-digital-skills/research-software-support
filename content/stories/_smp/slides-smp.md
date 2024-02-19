<!-- .slide: data-state="title" -->

# Software Management Plans

---

<!-- .slide: data-state="standard" -->

## Mapping the Via Appia

![Mapping the Via Appia](stories/_smp/viaappia.png)

Note:
The Via Appia was the most important road in the Roman Empire, connecting Rome to Brindisi in the south of Italy, spanning a distance of 540km.
It was used for military purposes, but also for trade and travel.
The Via Appia was built in 312 BC, and used for 600 years, until the fall of the Roman Empire.

The eScience Center participated in a project to map the Via Appia. Using a combination of satellite imagery and ground-based measurements, the project created a 3D model of the road. The model was used to study the road and its surroundings.

In this project, research software was used to process the satellite imagery and the ground-based measurements, and combine them into a 3D model of the Via Appia.

---

<!-- .slide: data-state="standard" -->

## The research life cycle

<center>
<img src="stories/_smp/researchcycle.png" width="60%">
</center>

Note:
All over the research life cycle we can find examples of software created for research.
Some are more straightforward than others:

- Planning: to design experiments
- Collecting: to collect data, to control instruments, to run simulations
- Analysing: to analyse data, to generate models

---

<!-- .slide: data-state="standard" -->

## Reuse & reproduce

Both reusability and reproducibility are important values in research software:

- **Reproducibility** is an integral part of the research process

- Software **reusability** allows building upon existing software

For both, we need to be able to **find**, **access**, **use**, and **understand** software.

Note:
Reproducibility of research allows validation of its findings, and is therefore vital in building a solid foundation for scientific progress.
We can only truly build upon existing research if we can reproduce its results.

When software has been used in research, this has enormous potential to facilitate the research reproducibility.
However, it also comes with its own particular challenges: software reproducibility is not always straightforward.

An additional feature of software, is that it may be a product on its own, and can be reused by others.
This is a great opportunity to build on our collective knowledge and tools, and to avoid reinventing the wheel.

Ensuring that the software is findable, accessible, usable and understandable is key to both reproducibility and reusability.

---

<!-- .slide: data-state="standard" -->

![Software Needs Maintenance](stories/_smp/maintenance.png)

Note:
Software and code have some unique features.
One particular feature is that they depend on other software, and on the environment in which they are run.
This means that it requires maintenance and updates to keep it functional, as the environments around it change.
This is called software sustainability.

---

<!-- .slide: data-state="standard" -->

## Overview

- Software Management Plan: what and why?
- Aspects of software management
- Different needs for different software
- SMP template examples

Note:
This presentation will introduce you to the concept of software management plans, as a first step towards better software stewardship and sustainability.
We will look at different aspects of good software managements, as well as different needs for different types of software.
Finally, we will take a look at some concrete examples of software management plans.

---

<!-- .slide: data-state="standard" -->

### Software Management Plan (SMP)

- Building on the success of Data Management Plans (DMPs)
- A document detailing how research software will be managed
  - What does it do?
  - Who is it for?
  - What resources does it need?
  - Who is responsible?
  - How long will it be available?
  - ...
- Can be part of a project proposal, or generated in the early phases

Note:
Software management plans (SMPs) are inspired by the earlier adopted data management plans.
In these documents, often created at or before the start of a project, plans and explicit decisions are made about various aspects around the management of these digital objects.
They are increasingly required by funders and institutions.

In an SMP it is explicitly stated what the software aims to do, who its target audience is, and what resources it is expected to need.
It also addresses the intended lifespan, and allocates responsibility: who makes releases? Who maintains the software at the end of the project, and if so for how long?

---

<!-- .slide: data-state="standard" -->

## Why use an SMP?

- Make technical choices explicit
- Plan for necessary resources
- Assess whether new software is really needed
- Clarity early on helps to avoid problems later
- ...

Note:
With an SMP, you make explicit plans and decisions in an early stage.
The SMP provides the team with structured, relevant questions early on, with the aim to maximize the accessibility, reusability, and impact of the software in question.
This supports good software management practices, and it makes sure they are known to the researchers involved.

More specifically, in an SMP you:

- Make explicit technical choices. For example, what programming language will be used? What operating system will be supported?
- Plan for necessary resources; be they financial, human, infrastructure or other.
- Assess whether new software is really needed; explore whether existing software can be reused, and to what extent;

These are issues that arise during software development anyway, but all too often are not explicitly dealt with.
By tackling them early, a conscious decision can be made rather than needing to deal with consequences of implicit choices.
Resource planning moreover is vital for the sustainability of the software.
Finally, the SMP will allow later verification of plans in a publicly funded project.

---

<!-- .slide: data-state="standard" -->

<center>
<img src="stories/_smp/smpguide.png" width="50%" />

[doi:10.5281/zenodo.7038280](https://doi.org/10.5281/zenodo.7038280)

</center>

Note:
To get started on creating a Software Management Plan, this practical guide has been created by NWO and the Netherlands eScience Center.
Its first version was released in August of 2022, but it has since been, and will continue to be, updated.
All past versions and the latest release are available on Zenodo via this DOI.

---

<!-- .slide: data-state="standard" -->

<center>
<img src="stories/_smp/groupedrequirements.png" width="60%" />
</center>

Note:
In the practical guide, the core requirements for an SMP are listed, and grouped into four categories.

Focusing on the *engineering*, the guide asks about version control, packaging, testing, and software quality.

Focusing on *documentation*, the guide discusses documentation needs for users, developers, and for deployment specifically.

Focusing on *project management*, the guide addresses licensing, maintenance, resources, the project repository, and a risk analysis.

Finally, the guide asks about the *purpose* of the software.

---

<!-- .slide: data-state="standard" -->
<center>
<img src="stories/_smp/purpose.png" width="40%" />
</center>

- What problem does it solve?
- Who is the intended audience?
- What are its advantages and limitations?

Note:
The software's purpose is a central question in the SMP.

It is important to be clear about the problem it addresses, and who the software is aimed at.
Addressing the limitations of the software, as well as the advantages it will provide, help determine its scope.
This will help the developers focus on the specific needs of the software.

---

<!-- .slide: data-state="standard" -->

<center>
<img src="stories/_smp/engineering.png" width="30%" />
</center>

- What version control will you use?
- How will you test the software?
- How will the project be organized or packaged?
- How will you manage code quality?

Note:
On the engineering focus, several specific areas are addressed.

*Version control* has a myriad of benefits: it allows keeping track of history and provenance, can support experimentation and collaboration, and is crucial for the identification of specific versions of the software.

*Testing* ensures that software continues to work as intended.
There are many different approaches to this: units of code can be tested in unit tests; entire workflows can be verified in integration tests; acceptance tests can be created to ensure specific requirements are met; regression testing can be done to ensure new changes do not break existing functionality; and so on.
Deciding whether and if so what testing will be implemented is an important element of the SMP.

*Packaging* is important for the distribution of software.
The format in which the software will be distributed is an important decision that should be made early on.

*Code quality* should be addressed: what standards will be adhered to, and how will they be measured and supported?
There are many tools that can help with this, and it is important to choose them early on to maintain consistent code quality throughout the project.

---

<!-- .slide: data-state="standard" -->

<center>
<img src="stories/_smp/documentation.png" width="30%" />
</center>

- What documentation will you provide
  - for users?
  - for developers?
- How will you manage system requirements (e.g. dependencies)?

Note:
Documentation is an important component of software, and should be tailored to different audiences.

In *user documentation*, the software's function should be explained, and instructions on how to use it should be provided.

In *developer documentation*, instructions on how to modify the software, and how to contribute to the project should be provided.

*Deployment documentation* explains any system requirements (such as dependencies) for deploying the software, and installation and testing instructions.

---

<!-- .slide: data-state="standard" -->

<center>
<img src="stories/_smp/projectmanagement.png" width="30%" />
</center>

- What license will you use?
- How will the software be maintained? For how long?
- How should the software be cited?
- What repository(ies) will you use?
- What resources will you need?
  - e.g. infrastructure, personnel, training, hardware...
- What risks and challenges do you foresee?

Note:
The project management focus is broad, and addresses various conditions for the software's long-term sustainability and re-use.

Any reusable software should have an appropriate *license*, which is an important early decision.

The *maintenance* of the software should be addressed in an SMP: who will maintain it, and for how long?
How and when will it be retired?

Plan the *citation* of the software: how will you collect information about its use? What DOI will you use for this?

The *repository* where the software will be deposited is preferably publicly accessible, and should allow users to obtain a functional copy of the software.

What *resources* — human, infrastructure, financial - will be needed, and when?

Finally, a *risk analysis* should be performed: for instance, are there privacy or security concerns? Is there potential for vendor lock, or other considerations for future reliability and reuse?

---

<!-- .slide: data-state="standard" -->

## SMP template

- Should be provided by the institution
- Include guidance:
  - Instructions on how to fill it out
  - Resources for information and support
  - Institution-specific regulations
  - Institution-specific resources available
- Include an assessment rubric (e.g. with (un)acceptable answers)

Note:
The Software Management Plan template is a duty of the institution.
A good SMP includes guidance on how to fill it out, including institution-specific regulations and resources.

An assessment rubric should accompany the template, indicating per question or focus what conditions need to be met, and which answers are (un)acceptable.

---

<!-- .slide: data-state="standard" -->

## Not all software is equal

![](stories/_smp/softwarespectrum.png)

Note:
It is important to realize when making an SMP, that research software comes in many shapes and sizes.

An ad-hoc R script written by a PhD student to analyse data from a specific machine, is research software.

It can also be a multinational collaboration to develop a tool that is used by thousands of researchers worldwide.

Different software has different needs, but there are common principles in managing them and ensuring their sustainability.

The diversity of research software does mean that not all requirements apply to every type of software.
To address this, we can subset the core requirements to create different SMP templates tailored to software with different management needs.

The SMP Guide distinguishes software with low, medium, and high management needs.

---

<!-- .slide: data-state="standard" -->

## SMP level: low

- Single purpose scripts
- Developer is the primary user
- Performs limited function:
  - Analyses a single experiment or dataset
  - Automates a routine task

Note:
Software with low management requirements is defined by its limited function: it performs a single analysis or automates a routine task.
Its **purpose** is typically limited to a specific experiment, and the developer is the primary user.

The **reliability** of this type of software is usually easy to assess: the output can be visually inspected, or tested with a limited set of inputs.

The **maintenance** of this type of software is usually limited to the duration of the project in which it was developed.
It is not intended to be used by others, and therefore its influence beyond the scope for which it was intended is likely small.

Best practices during development (e.g. version control), as well as measures to enable its reuse (documentation, versioning, archiving) are appropriate and recommended.
They are however not requirements, nor is long term maintenance planning necessary.

---

<!-- .slide: data-state="standard" -->

## SMP level: medium

- Primary or secondary output of a research project
- Adds a library or module to existing tool, or even works standalone
- Unique functionality that will be reused
  - Implements a new or higher performance algorithm
  - Simulation software implementing a new model or method

Note:
Software requiring **medium** management, is defined as software that is the primary or secondary output of a research project.

Its original **purpose** is typically limited to a single research project, but incorporates functionality that may be of use to others, either as a standalone tool, library, or module in an existing tool.

The **reliability** is more difficult to assess due to its increased complexity, but it is also also more important: this software likely has an effect on other research outside of the original project.
Good software practices such as version control and user/technical documentation are therefore essential here.
More advanced requirements, such as code auditing, automated testing, software packaging, and distribution also need to be considered.

This software's longer term **maintenance** is relevant as it will have a lifespan longer than the project in which it was developed.
Software management planning should include providing information on archiving and citation as well as strategies for post-project maintenance and support.

---

<!-- .slide: data-state="standard" -->

## SMP level: high

- Mission critical software
- High standards required for reliability
- Absence or replacement of the software would threaten research
- Software that is continually in use:
  - Preprocessing data coming from a telescope
  - Controlling a medical device

Note:
**High** management software is defined as mission critical software.

Its **purpose** is to perform a critical function, and its absence or replacement would threaten the research.

The **reliability** of this software is of utmost importance, and all possible actions should be taken to ensure it.

Its **maintenance** is not limited to the duration of the project in which it was developed, but should be maintained as long as it is in use.
Thus, maintenance strategies, including funding and/or community development plans, should be in place.

---

<!-- .slide: data-state="standard" -->

## Making that call

- **Purpose**: what is the reason or expected end-use for the software?
- **Reliability**: what is the effect of software failure and/or non-maintenance?
- **Maintenance**: what is the long-term effort needed to maintain the software?

Check the Practical Guide: [doi:10.5281/zenodo.7038280](https://doi.org/10.5281/zenodo.7038280)

Note:
Deciding what level of management, and therefore which SMP template, is appropriate for a specific software project, is not always straightforward.
The practical guide provides some guidance on how to make this decision.
Addressing what purpose the software serves, how reliable it needs to be, and what efforts will be required for its longer term maintenance, will help determine the appropriate level of management.

---

<!-- .slide: data-state="standard" -->

<center>
<img src="stories/_smp/threelevels.png" width="60%">
</center>

Note:
With a specific level of management in mind, the core requirements that are relevant for this software's management can be determined.
The practical guide provides a clear overview of this.

---

<!-- .slide: data-state="standard" -->

## Take home messages

- Software is found in all stages of the research cycle
- Research software comes in many shapes and sizes
- Software stewardship starts with a good plan
- Good software management leads to better science

Note:
Software is found in all stages of the research cycle, and is used for many different purposes.
It comes in many shapes and sizes, and has different needs.
Software stewardship starts with a good plan, and is an important scientific step: good software management leads to better science.

---

<!-- .slide: data-state="keepintouch" -->


www.esciencecenter.nl

info@esciencecenter.nl

020 - 460 47 70
