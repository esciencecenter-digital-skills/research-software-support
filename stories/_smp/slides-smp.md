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
• Version control - use a version control system. Adequate versioning of research software facilitates management of research software, allowing for the identification of specific versions of the software.
- Testing - incorporate tests to ensure your software continues to work as intended. Different types of testing (unit, functional, inte- gration, linting, typing, regression, etc.) could be used. Tests in turn should also be documented. Coverage tools should also be used to assess the extent of the tested code.
• Packaging - use appropriate package managers to allow users to install/deploy your software with ease.
 • Software Engineering quality - make sure your software adheres to relevant code quality standards (styling, modularity, etc.) and uses tools for collaborative development to measure code quality.

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

• User documentation - explain clearly what the software does and how it should be used.
• Deployment documentation - explain system requirements (e.g. de- pendencies) for deploying the software and instructions for installa- tion and testing.
• Developer documentation - explain how the software can be modi- fied (docstrings, in-line comments, etc.), tested, and contributed to (governance, code of conduct, contributing guidelines, etc.).

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


• Repository - deposit releases of your software in an appropriate repository. This should preferably be a publicly accessible reposito- ry, providing globally unique, persistent, and resolvable identifiers
The most important consideration is that potential
to each release.
27
users of the software are able to get a copy they can use.28
• Software licensing and compatibility - assign a licence specifying conditions of use for your software, including patenting information (if relevant). Preferably the licence should be as open as possible, and as closed as necessary. Software licences must be compatible with the licence of external components (dependencies, libraries, etc.) that the software uses.
• Citation - include relevant information indicating how your software should be cited.

• Maintenance - make sure there are arrangements in place for the maintenance and reuse of your software. This could be through a community of developers who will continue to maintain it, or by in- cluding the maintenance of software as part of future projects, or by increasing the user base. Whenever suitable, develop a retirement strategy for your software.
• Support (during the project) – plan resources for support-rela-
ted activities such as training, hiring research software engineers, infrastructure, hardware, etc. The level of support should be in line with promises made regarding the level of service provided by your software (e.g. service level agreements).
• Risk analysis - consider other factors that could have an impact on your software. For example compliance with privacy policies, secu- rity considerations, reliability requirements, portability / vendor lock, etc.


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
From the institutional side, template is their task.
Making a template can include guidance on how to fill it out, incl institution-specific regulations or resources
Making a template should also include an assessment rubric, detailing (un)acceptable answers

---

<!-- .slide: data-state="standard" -->

## Not all software is equal

![](stories/_smp/softwarespectrum.png)

Note:
Research software comes in many shapes and sizes; can be single R package written by a PhD student to analyse data from a specific machine.
It can also be a multinational collaboration to develop a tool that is used by thousands of researchers worldwide.

Different software has different needs, but there are common principles in managing them and ensuring their sustainability.

From Lamprecht et al 2020: "Research software includes but is not limited to source code, binaries and web services, and covers a broad spectrum from short scripts written ad hoc by researchers to produce re- sults for a publication, to software rigorously developed for a mission-critical process"

owever, software exists in many forms - from sin- gle purpose scripts to mission critical frameworks - which means that not all requirements are necessarily applicable to every category of software. In practice, it might be useful to define SMP templates based on subsets of the core SMP requirements (Section 5.1). In the following sections we illustrate how to create such SMP templates using soft- ware management levels.


---

<!-- .slide: data-state="standard" -->

## SMP level: low

- Single purpose scripts
- Developer is the primary user
- Performs limited function:
  - Analyses a single experiment or dataset
  - Automates a routine task

Note:
6.1.1. Management level: low
Purpose. This software is typically developed for a specific analysis
(e.g. drawing a graph) or one-off project (e.g. practical examples in a course). The developer is the primary user and it is not intended to be used beyond a defined period or in a different context.
Reliability. This software is generally smaller in terms of lines of code and due to its restricted scope the output can easily be judged to be

correct, either visually (the graph looks correct) or basic input/output testing (it gives an expected output for a defined input). Good software practices (e.g. version control and user documentation) are highly recommended.
Maintenance. As this software is not intended to be used by others, either directly or as a dependency, its influence beyond the scope
for which it was intended is likely small. While measures to enable its reuse (documentation, versioning, archiving) are appropriate, no addi- tional maintenance planning is required.

examples
6.2.1. Software that requires low level management
• A script that is used to create and format a single figure for a publi- cation, for example, when using a plotting package such as ggplot2 (R) or Matplotlib (Python).
• Software written as part of a project to automate an administrative or routine process, e.g. monitoring a process or generating docu- ment templates.
• Software written specifically for the analysis of a single experiment, data processing, and presentation of its results.32

---

<!-- .slide: data-state="standard" -->

## SMP level: medium

- Primary or secondary output of a research project
- Adds a library or module to existing tool, or even works standalone
- Unique functionality that will be reused
  - Implements a new or higher performance algorithm
  - Simulation software implementing a new model or method


Note:

6.1.2. Management level: medium
Purpose. Software of this level is typically developed as part of a re-
search project or is the primary output of a research project. Although usually developed for a single purpose, it incorporates functionality that may be of use to others, either as a standalone tool, library, or module in an existing tool.
Reliability. This software may have a direct influence on other re- searchers (e.g. project, research group) and/or software even if this was not the primary intention when it was conceptualised. As the software is more complicated and/or larger, in terms of lines of code, than those in the lower management level, good software practices such as version control using a system such as Git and user/technical documentation is essential here. More advanced requirements, such
as code auditing, automated testing of major functionality, software packaging, and distribution also need to be considered.
Maintenance. This software’s functionality is useful to researchers both in and outside the project, making it suitable for distribution. It will have a lifespan longer than the project in which it was developed and therefore long-term sustainability becomes more important. Software management requirements for this level include providing information on software archiving and citation as well as strategies for post-project maintenance and support.

6.2.2. Software that requires medium level management
• Software that implements a new or higher performance algorithm and can be applied to different input data.
• Simulation software that implements one or more models and/or numerical methods, e.g. computational fluid dynamics, chemical in- teractions, planetary evolution, partial differential equation solvers, numerical integration, etc.

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
6.1.3. Management level: high
Purpose. There are various types of software that require a high level of management, for example software developed and distributed for users other than the developers or software that has a direct (or sys- tematic) impact on something it interacts with. For instance, research results could be directly affected by the functioning of simulation software or training of machine learning models while physical effects could occur from the use of medical or engineering control software.
Reliability. As software of this level was designed, or has evolved, to be “mission critical,” reliability is of utmost importance. All possible actions should be taken to ensure reliability, which includes soft- ware architecture design, code standards, the use of comprehensive cross-platform automated unit and functional testing frameworks,
dependency management, and code auditing. In addition, legal development requirements, such as traceability, right to use, right to inspect, right to distribute, etc., and process documentation should be implemented as required (for example, software medical devices may require ISO or EC certified management processes).
Maintenance. There is no defined maintenance period associated with this class of software as it must be maintained as long as it is in use.
In order to maintain a high level of reliability, maintenance strategies, including funding and/or community development plans, should be in place. Build and release pipelines should be implemented so that not only source code availability but compiled software is maintained on evolving software/hardware platforms, OS, CPU, GPU etc.

• Software used in production on which an institute, department, or instrument depends on for their operation, e.g. software that is used for pre-processing all data coming from a particular telescope.
• Software that cannot be rewritten during a project’s lifetime. If one requires functionality from high-impact software, replacing it may threaten a project.

---

<!-- .slide: data-state="standard" -->

## Making that call

- **Purpose**: what is the reason or expected end-use for the software?
- **Reliability**: what is the effect of software failure and/or non-maintenance?
- **Maintenance**: what is the long-term effort needed to maintain the software?

Check the Practical Guide: [doi:10.5281/zenodo.7038280](https://doi.org/10.5281/zenodo.7038280)

Note:
A software management level consists of a set of the core require- ments that should be considered when developing a certain type of software. These requirements can be applicable before, during, and after the formal software development (project) period. Software man- agement levels provide a recipe for grouping the core requirements into subsets and generating an appropriate SMP template. To deter- mine which set of core requirements are relevant to a software man- agement level, three important factors should be considered:
1. Purpose. What is the current reason or expected end-use for de- veloping the software?
2. Reliability. The effect of software failure and/or non-maintenance on:
• Risk of harm to self or others. This includes injury, privacy violation, bias, and inappropriate content.
• Reputation. For example to self, institution or other.
• Research, either your own or of others. This effect could be
due to an obvious software failure (“crash”) or a hidden one, for example, returning inconsistent numerical results on differ- ent operating systems.
3. Maintenance. The long-term effort needed to maintain the soft- ware as long as it might be used as a standalone tool or depend- ency. This includes maintenance functions that can extend beyond the lifespan of the original development project and includes fixing bugs, dependency management, operating system compatibility, and security issues.
Using these factors we define three typical management levels (low, medium, high) that underlie the software examples (Section 6.2) and example SMP templates (Section 6.3).



---

<!-- .slide: data-state="standard" -->

<center>
<img src="stories/_smp/threelevels.png" width="60%">
</center>

---

<!-- .slide: data-state="standard" -->

## Take home messages

- Software is found in all stages of the research cycle
- Research software comes in many shapes and sizes
- Software stewardship starts with a good plan
- Good software management leads to better science

---

<!-- .slide: data-state="keepintouch" -->


www.esciencecenter.nl

info@esciencecenter.nl

020 - 460 47 70
