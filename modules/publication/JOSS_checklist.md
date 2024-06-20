---
title: Review your software
type: exercise
order: 6
---

# Review your software for publication

*In a live setting, this exercise is done in groups.
Each group will be assigned a software project.
The group will then go trough the JOSS checklist reviewing the software.*

## Step 1: Choose a software project

Choose a software project for this exercise, preferably one you are familiar with.

If you don't have a software in mind, you can use one of the following:

- [ESMValTool](https://research-software-directory.org/software/esmvaltool)
- [Cross-Perspective Topic Modeling](https://research-software-directory.org/software/cptm)
- [LitStudy](https://research-software-directory.org/software/litstudy)
- [Haddock](https://research-software-directory.org/software/haddock3)
- [worcs](https://cjvanlissa.github.io/worcs/index.html)
- [Xenon](https://research-software-directory.org/software/xenon)

## Step 2: Fill the JOSS review checklist

Get the [template checklist](https://github.com/openjournals/joss-reviews/blob/master/.buffy/templates/reviewer_checklist.md) used in the review process of [JOSS](https://joss.theoj.org/) and fill it out.

### General checks

- [ ] **Repository:** Is the source code for this software available at the {{target-repository}}?
- [ ] **License:** Does the repository contain a plain-text LICENSE or COPYING file with the contents of an [OSI approved](https://opensource.org/licenses/alphabetical) software license?
- [ ] **Contribution and authorship:** Has the submitting author ({{author-handle}}) made major contributions to the software? Does the full list of paper authors seem appropriate and complete?
- [ ] **Substantial scholarly effort:** Does this submission meet the scope eligibility described in the [JOSS guidelines](https://joss.readthedocs.io/en/latest/submitting.html#substantial-scholarly-effort)
- [ ] **Data sharing:** If the paper contains original data, data are accessible to the reviewers. If the paper contains no original data, please check this item.
- [ ] **Reproducibility:** If the paper contains original results, results are entirely reproducible by reviewers. If the paper contains no original results, please check this item.
- [ ] **Human and animal research:** If the paper contains original data research on humans subjects or animals, does it comply with [JOSS's human participants research policy and/or animal research policy](https://joss.readthedocs.io/en/latest/policies.html?highlight=animal#joss-policies)? If the paper contains no such data, please check this item.

### Functionality

- [ ] **Installation:** Does installation proceed as outlined in the documentation?
- [ ] **Functionality:** Have the functional claims of the software been confirmed?
- [ ] **Performance:** If there are any performance claims of the software, have they been confirmed? (If there are no claims, please check off this item.)

### Documentation

- [ ] **A statement of need**: Do the authors clearly state what problems the software is designed to solve and who the target audience is?
- [ ] **Installation instructions:** Is there a clearly-stated list of dependencies? Ideally these should be handled with an automated package management solution.
- [ ] **Example usage:** Do the authors include examples of how to use the software (ideally to solve real-world analysis problems).
- [ ] **Functionality documentation:** Is the core functionality of the software documented to a satisfactory level (e.g., API method documentation)?
- [ ] **Automated tests:** Are there automated tests or manual steps described so that the functionality of the software can be verified?
- [ ] **Community guidelines:** Are there clear guidelines for third parties wishing to 1) Contribute to the software 2) Report issues or problems with the software 3) Seek support.

Skip the last category *Software paper*

## Step 3: How was the reviewing process?

Reflect on the difficulty of the review process.
Which advantages has this review process?
Are there projects in which you are currently working that would pass this review?
