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

Creative works, like books, paintings and music, but also scientific articles and software, are covered by copyright. Copyright is a legal construct that gives the owner of the copyright on a work the exclusive right to reproduce, modify, publicly perform and distribute the work. As a result, anyone who is not the copyright holder needs to have permission from the copyright holder to also be able to do so. One way a copyright holder can give such permission is to publicly license the work.

Newly created works are automatically covered by copyright. This copyright is owner by the creator of the work, unless they were employed and created the work as part of their employment, in which case their employer owns the work. If multiple persons or organisations contribute to a work, then they each own a share of the copyright, and all need to give permission for others to be able to do any of the things protected by copyright.

Ownership can be transferred by contract. Employment contracts often state explicitly that the copyright of any created works will be owned by the employer. In Europe, certain rights, such as the right to be recognised as the author of the work (if you want to), are inalienable: they cannot be transferred away from the author.

Research scientists are generally employed by universities, so that legally speaking their works are owned by the university they work for. In practice, for example when submitting a paper to a journal, it is often assumed that scientists can transfer copyright ownership or otherwise give permission to the publisher to publish the paper on behalf of the university, but strictly speaking there is usually no legal basis for this. Likewise, if scientists produce software as part of their scientific work, then that software is owned by the university, and publishing it as Open Source software, while often done, does not sit on solid legal footing.

Sharing scientific software offers great possibilities for collaboration, sharing of resources, and increased impact of the scientific work as well as of the software itself. This module gives an overview of the different kinds of Open Source licenses typically used to share and collaboratively develop software, and discusses which policies universities could enact to make it easier for their employees to properly license the software they create.

:::


:::Chapter{headline="License types" widemd=1}
## License types

### Free and Open Source Software

According to the Free Software Foundation:

- The freedom to run the program as you wish, for any purpose.
- The freedom to study how the program works, and change it, so it does your computing as you wish. Access to the source code is a precondition for this.
- The freedom to redistribute copies so you can help others.
- The freedom to distribute copies of your modified versions to others. By doing this you can give the whole community a chance to benefit from your changes. Access to the source code a precondition for this.

### Changing and combining software

- Software can be modified, by making small or larger changes to it
- Software can be used as a component in a larger program
- Those can be combined
- Copyright law sees this as creating a derived work
- Mechanical translations are not derived works

### License categories

<table>
    <thead>
        <tr>
            <th colspan="3">Free and Open Source</th>
            <th rowspan="3">Proprietary</th>
        </tr>
        <tr>
            <th colspan="2">Copyleft</th>
            <th rowspan="2">Permissive</th>
        </tr>
        <tr>
            <th>Strong</th>
            <th>Weak</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>GPL<sup>1</sup> AGPL<sup>2</sup></td>
        <td>LGPL<sup>3</sup> MPL<sup>4</sup></td>
        <td>BSD<sup>5</sup> MIT<sup>6</sup> Apache</td>
            <td>Research Only: No&nbsp;copying, No&nbsp;modification</td>
        </tr>
    </tbody>
    <caption>
      <div class="footnote">
        <sup>1</sup>GPL: GNU General Public License <sup>2</sup>AGPL: Affero General Public License <sup>3</sup>LGPL: GNU Lesser General Public License <sup>4</sup> MPL: Mozilla Public License <sup>5</sup> BSD: Berkeley Software Distribution <sup>6</sup> MIT: Massachusetts Institute of Technology
      </div>
      Licenses can either be Free or Proprietary, with Free Licenses further classified as Copyleft or Permissive.
    </caption>
</table>

:::

:::Chapter{headline="Exercise 1" widemd=1}
## Exercise 1: Choose a license (10 minutes)

Imagine that you have made a software package and want to publish it with an Open Source license. Go to [Choosealicense.com](https://choosealicense.com/) and pick a license. Which one did you choose? Why?

:::

:::Chapter{headline="University Policy" widemd=1}
## University software policies

### Why?

- Ensure scientific software is properly licensed
  - Including the software your employees use!
- Increase collaboration
- Increase impact

### How?

- Still in development
- TU Delft
- Astron
- NLeSC

### What?

- Software quality
- Software development processes and tooling
- Adhering to others' licenses
- How to publish as Open Source
- Acceptable licenses
- Registering output
- Education of researchers in software development
- Acknowledge funding

:::

:::Chapter{headline="Exercise 2" widemd=1}
## Exercise 2: does your university have a software licensing policy?
Try and find out whether your university has a license policy. If you can find it, compare it with the policies linked above. What elements are commonly found? Which differences do you see, and what is their respective motivation?
:::

:::Chapter{headline="Exercise 3"  widemd=1}
## Exercise 3: What licenses do researchers at your university use?
Search on [GitHub](https://github.com/) or other software repositories for software created by researchers at your university. What licenses do they use? Do they adhere to a policy (if there is one?)
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

:::Chapter{headline="More" widemd=1}

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

:::Chapter{headline="Even more" widemd=1}

## University software policy (30 minutes)
It is important that the copyright holder (the university!) has a policy on software licensing, to allow their researchers to share software with an open license. [TU Delft has such a policy](https://zenodo.org/record/4629662), as does [the Netherlands eScience Center](https://guide.esciencecenter.nl/#/best_practices/licensing). Does your university or institution have a software policy?

#### You should now be able to...
- Know what factors motivate the creation of a software policy
- Know some licenses that are recommended by research institutions, and their motivation.

:::

