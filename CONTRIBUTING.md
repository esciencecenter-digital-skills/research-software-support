# Contributing to this Research Software Support platform

## Quick start

In the Research Software Support modules we want to provide a comprehensive overview of the different aspects of research software support.
This, as you can imagine, is no easy feat, and we need your help!
So first of all, thank you very much for your interest in contributing to this project.

### What can I do?

- Contribute to the content discussion in the [chapter issues](https://github.com/esciencecenter-digital-skills/research-software-support/issues?q=is%3Aissue+is%3Aopen+label%3Astory), e.g. by listing good resources for information.
- [Author a lesson](#elements-of-a-module), e.g. by:
  - [Creating slides](#slides)
  - [Designing an exercise](#exercises)
  - [Curating online resources](#online-resources)
- Review a lesson module; both by looking at [open PRs](https://github.com/esciencecenter-digital-skills/research-software-support/pulls), as well as flagging issues for improvement in the [existing content](https://esciencecenter-digital-skills.github.io/research-software-support/).
- [Provide feedback](https://github.com/esciencecenter-digital-skills/research-software-support/issues) on the different subjects covered: what did we miss? Should something be restructured?

### How can I do it?

If you want to contribute to the content: look whether the issue you want to tackle [already exists](https://github.com/esciencecenter-digital-skills/research-software-support/issues) or make a [new issue](https://github.com/esciencecenter-digital-skills/research-software-support/issues/new), and [create a PR](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) with your changes from a fork or a branch.

It is useful to [review the structure of the project](https://github.com/esciencecenter-digital-skills/NEBULA/blob/main/README.md#directory-structure-and-content-tags) before you start.

## Target audience

The target audience for this material is University management and support staff.
University management taking part in courses involving these modules may be involved in creating university policy around research software.
The University support staff targeted are not themselves researchers or software engineers, but they support researchers and research software engineers in creating research software.

On a practical level, this means that these modules do not need to be very technical.
For example, a module on version control does not need to explain the details of Git and the different commands.
What it does need to do is explain why version control is important, and why it matters particularly in a research context.
A participant should walk away with a more elaborate vocabulary around a subject, knowledge on where and how to find more information, and motivation that they could transfer to others.

## Philosophy

As you are contributing to this material, please keep a few principles in mind:

### The material should be broadly usable

It should be ready for teaching both online and offline; in a regular and a flipped classroom; and even for self study.

The modules in this repository will be used as lesson materials for a live audience, and provide a resource for self-study.
Every module should therefore contain some essential classroom elements (e.g. slides, group exercises), as well as exercises that can be done individually, and reference material that can be read at home.

### The modules should be easy to (re)use

It is important that anybody can work with the material in this repository.
Slides should therefore contain complete notes for an instructor, which can also be used in self-study.
Exercises should be clearly explained, and where possible, times should be given for different parts of the lesson so an instructor can plan a workshop around these materials.

### Maintenance load should be kept to a minimum

We all know how fast things change, and how quickly information becomes outdated.
It is important to keep this in mind when creating lesson materials, and focus on core concepts, rather than specific tools and details.
Where it is useful to mention these, consider linking to external resources that will be maintained by others.

In general, it is better to link to external resources than to rewrite information that already exists elsewhere.
This, too, will limit the amount of maintenance that is required.

## Elements of a module

A module can contain the following elements:

- [slides](#slides), to be used in a classroom setting
- [text](#text), targeted at self study participants
- [exercises](#exercises), both for self study and for classroom use
- curated [online resources](#online-resources), both for self study and for classroom use

Ideally, all modules contain all elements.
In the current state of the project, however, modules are still shifting and may be split up or combined with others.
Therefore, the focus at this point is to accumulate material and to create a structure that makes sense.
Completing all elements will be done at a future stage.

### Slides

Slides are essential when teaching a module in a classroom setting.
They do not need to be long, however; a few slides to provide context and motivation is sufficient.

It is important to include notes, however brief, on ever slide.
The notes are crucial for any instructor preparing to teach with the materials.
They are also relevant for self-study participants, who can use the slides with accompanying notes to get a quick introduction to the subject.

Slides are written in a markdown file, which should be placed in the `/modules/{modulename}` directory and rendered with Reveal.js.
Technical information about the structure of these files [is here](https://github.com/esciencecenter-digital-skills/research-software-support/blob/main/README.md#slides-with-revealjs).

### Text

As this material is partly targeted at self-study participants, we explicitly want to include text.

This type of section is meant to illustrate the concepts that are also covered in the presentations but for self study purpose. In the future we might replace many of these with recorded videos.

### Exercises

Any excercises are welcome, and there are no limits to the type of exercises that can be included.
However, be explicit about the type of exercise at the top of the page:

- Should it be done live or online?
- Is it done individually or in groups, and if in groups, how big should the groups be?
- What is the expected duration of the exercise?

Furthermore, provide information on preparation for the instructor:

- What materials, if any, are necessary?
- What preparation, if any, is necessary?

If there are online resources that are relevant for the exercise, provide direct links instead of descriptions.

Finally, provide information on the expected outcome of the exercise.

Exercises are written in markdown, as chapters in the `modulename.md` file.
Technical information about the structure of this file [is here](#the-modulenamemd-file).

### Online resources

The online resources are the meat of the modules.
They provide the most detailed information to relevant content, and their collection should be comprehensive.

An online resource should be linked (see [lesson philosophy](#philosophy)), but in a specific way, and with clear context:

- Why is this resource relevant?
- What is the goal of reading the resource?
- What is the expected time investment?

In addition, be clear about the part of the resource that is important.
The links should go directly to the relevant part of the resource, and if that is not possible, clear pointers (e.g. the name of sub-headers) should be provided.
If the relevant part is over before the end of the linked page, explicitly add this information before the link.

And optionally, consider adding:

- Target audience or level of the resource (e.g. "technical resource, optional")
- Discussion points for the classroom

Online resources are written in markdown, in `modules/{modulename}/recources.md`.
Technical information about the structure of this file [is here](#the-modulenamemd-file).
