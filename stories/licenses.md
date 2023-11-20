---
id: 5
trl: high
category: Getting started
title: Licenses
author: eScience Center
thumbnail: "nlesc-dummy-1.png"
visibility: visible
---


:::Chapter{headline="Intro slides" presentation="slides-licenses.md"}

:::


:::Chapter{headline="Introduction" widemd=1}
## Software licenses: introduction

Copyright is a basic element of many things we produce, including software. Copyright, roughly speaking, means that we get to say how this work can be re-used by others, and what rights they have in copying, modifying, and distributing the work. When we do not explicitly formalize these rules in a license, the software cannot be (re-)used by others than the copyright holder. Including a license with software or code is therefore extremely important.

If someone codes in their own time for a project only they contribute to, then they are the copyright holder. When a project is authored by multiple people, all of these people have copyright, and therefore need to agree on the license.

When a project is done under employment, the copyright situation becomes more difficult. In most cases, copyright officially belongs to the employer, although the exact situation can differ depending on the employment contract. It is good practice therefore to check whether the employer has a policy for software licensing.

In practice, it is often the case that (University) employees assume copyright of their own work, and in the absence of (open source) policy, decide on their own licenses. Being thorough and checking with the University's legal department may result in an overly cautious response that requires the use of a proprietary license, heavily limiting the options for software (re)use.

To avoid getting stuck in the net of your institute's regulations and opinions (or absence of these), it is important to be well-informed yourself from the start. This module will give you an overview of different standardized (open source) licenses, and things to look out for when choosing to apply a license to a project.

:::


:::Chapter{headline="License types" widemd=1}
## License types

Follow the links below to read about different open licenses.

### The Turing Way (20 minutes)
Read in the Turing Way about [Software licenses](https://the-turing-way.netlify.app/reproducible-research/licensing/licensing-software.html) , as well as [Data licenses](https://the-turing-way.netlify.app/reproducible-research/licensing/licensing-data.html) and [Machine Learning Model licenses](https://the-turing-way.netlify.app/reproducible-research/licensing/licensing-ml.html). It is good to realize that these are different in ways that are relevant for re-use, that need to be covered specifically in a license.

### Choose a license (10 minutes)
By now you will have a good idea of what Open Source licenses are available. [Choosealicense.com](https://choosealicense.com/) tries to simplify the choice between them, and is an excellent resource to be aware of and recommend to others.

#### You should now be able to...
- Understand the difference between open and proprietary licenses
- Understand the difference between permissive and viral (or copyleft) free licenses
- Know the main Creative Commons permission marks (BY/SA/NC/ND)
- Understand what it means for something to be "in the public domain"
- Know that ML models, software, and data place different requirements on their respective licenses.
:::

:::Chapter{headline="License compatibility" widemd=1}
## License compatibility

Follow the links below to read about the compatibility of different open licenses.

### License compatibility (15 minutes)
What happens when software licenses meet? To start understanding the concept of license compatibility, [this blog post on mend.io is a good start](https://www.mend.io/resources/blog/license-compatibility/).

### Licence compatibility in-depth case study (optional; 20 minutes)
The Turing Way also discusses license compatibility with [an excellent in-depth analysis of a case study](https://the-turing-way.netlify.app/reproducible-research/licensing/licensing-compatibility.html). While this chapter is very informative, it goes quite deep into a specific case study, so it should be seen as illustrative rather than necessary background reading.

#### You should now be able to...
- Explain what license compatibility means
- Roughly know which open source licenses mix, and which do not.
:::

:::Chapter{headline="University Policy" widemd=1}

## University software policy (30 minutes)
It is important that the copyright holder (the university!) has a policy on software licensing, to allow their researchers to share software with an open license. [TU Delft has such a policy](https://zenodo.org/record/4629662), as does [the Netherlands eScience Center](https://guide.esciencecenter.nl/#/best_practices/licensing). Does your university or institution have a software policy?

#### You should now be able to...
- Know what factors motivate the creation of a software policy
- Know some licenses that are recommended by research institutions, and their motivation.

:::

:::Chapter{headline="Exercise 1"  widemd=1}
## Exercise 1: does your university have a software licensing policy?
Try and find out whether your university has a license policy. If you can find it, compare it with the policies linked above. What elements are commonly found? Which differences do you see, and what is their respective motivation?
:::

:::Chapter{headline="Exercise 2"  widemd=1}
## Exercise 2: What licenses do researchers at your university use?
Search on [GitHub](https://github.com/) or other software repositories for software created by researchers at your university. What licenses do they use? Do they adhere to a policy (if there is one?)
:::

:::Chapter{headline="Exercise 3"  widemd=1}
## Exercise 3: Explore license (in)compatibilities
Choose one program or package created by a researcher, either at your university or elsewhere, and explore the licenses of their dependencies. Can you spot potential licensing incompatibilities? (Note that dependencies do not automatically trigger compatibility issues; this too is a complex issue! It is however a good first step when choosing a license, to look at the licenses held by libraries you include.)

:::
