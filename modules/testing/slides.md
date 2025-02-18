---
title: Software Testing
type: slides
order: 1
---

<!-- .slide: data-state="title" -->

## Software Testing

===

<!-- .slide: data-state="standard" -->

### What is software testing?

> Software testing is the process of evaluating and verifying that a software and its components meet specified requirements and work as expected. Its primary purpose is to identify defects, errors, flaws, or bugs early in the development process.

Note:

As with any other engineering/scientific approach, it's important to check that the expected/required results of your software are accomplished. As such, software testing is analogous to testing lab protocols or (experimental) equipment before publication/putting it on the market.

==

<!-- .slide: data-state="standard" -->

### Risks of poorly tested (research) software

<center>
<img src="media/testing-motivation1.png" width="30%" style="display:inline;">
<img src="media/testing-motivation2.png" width="30%" style="display:inline;">
<img src="media/testing-motivation3.png" width="30%" style="display:inline;">
</center>


<small> Find the complete articles [here](https://www.science.org/doi/full/10.1126/science.314.5807.1856), [here](https://arstechnica.com/information-technology/2019/10/chemists-discover-cross-platform-python-scripts-not-so-cross-platform/), and [here](https://www.wired.com/2010/11/1110mars-climate-observer-report/) </small>

Note:

There are several examples in which the lack of proper software testings resulted in serious consequences.

The first article from 2006 reports about a software flaw (a plus sign in place of a minus sign) that lead to a retraction of 5 scientific articles.

In the second from 2019, researchers found that a programming error in a set of Python scripts commonly used for computational analysis of chemistry data returned varying results based on which operating system they were run on—throwing doubt on the results of more than 150 published chemistry studies.

The loss of the Mars Climate Orbiter in 1999 is another prominent example of a catastrophe caused by a software error, specifically a unit conversion mistake.

There is also the case of the Ariane flight V88, an European Space Agency rocket which was destroyed just 40 seconds after its launch due to a software bug; see https://en.wikipedia.org/wiki/Ariane_flight_V88.

==

<!-- .slide: data-state="standard" -->

### Why test your software ?

- Ensure reliability and reproducibility
- Boost developer confidence
- Detect problems with (updated) dependencies early
- Simplify and manage code complexity
- Confirm correct installation and demonstrate use

Note:

- Ensuring software reliability, validity, and reproducibility for research software directly influences the reproducibility of the results ontained.
- A good test suite gives collaborators and (external) contributors confidence to make modifications without breaking existing functionalities.
- As mentioned before, software almost always relies on other software (its dependencies). As the dependencies change or get updated, your use of these depencies may also need to change. Having tests in place will detect such issues as soon as they arise and allow you stay ahead of the curve.
- Code that is easy to test is often easier to understand and maintain. By writing good tests, you push yourself to write good code.
- Tests can be used as an example or tutorial for (new) users to see how to use the software, or to test that their installation was successful.

==

<!-- .slide: data-state="standard" -->

### The Power of Automated Testing

Software is inherently automatable: use its power to test itself!

- Faster Execution – Runs tests in seconds/minutes vs. hours of manual testing.
- Higher Accuracy – Eliminates human error, ensuring consistent results.
- Early Detection – Identifies issues when they arise.
- Scalability – Handles large test suites without extra effort.
- Cost Efficiency – Saves time and resources in the long run.

Note:

Developers (and researchers) generally run a number of tests or test scripts manually at certain points in the development process. However, if we think of the problems mentioned in the previous slide, these would often not have been detected by manual testing.

Instead, we would encourage developers to collect those (and more!) tests into a test suite and have them run systematically. Many programming languages have existing tools that helkp you create and run tests suits: [PyTest](https://docs.pytest.org/) for Python, [testthat](https://testthat.r-lib.org/) for R, [JUnit](https://junit.org/) for Java, etc.

===

<!-- .slide: data-state="standard" -->

### Test types

- **Smoke tests** verify that the essential functions of the software work.
- **Unit tests** assess individual components for correctness.
- **Integration tests** verify interactions between different parts of the software.
- **System tests** evaluate the complete and integrated software system.
- **Regression tests** ensure new changes don’t disrupt existing functionality.

Note:

- Smoke test: A preliminary test to verify that the essential functions of the software work. If a smoke test fails, further testing is halted until the issues are resolved.
- Unit test: A test that verifies the functionality of an individual unit (e.g., a function, method, or module) in isolation. In unit tests each individual unit of a software is tested separately.
- Integration test: A test that checks the interaction between integrated components or modules. Individual units (that are tested in isolation using unit tests) are combined and tested as a group. The goal is to detect faults in how these units work together, especially focusing on data flow, APIs, and dependencies.
- System test: A test that evaluates the complete system as a whole to ensure it meets functional (correct results, no crashes, ...) and non-functional (security, performance, ...) requirements. It checks how different components interact under real-world conditions. It is similar to an integration test but broader in scope.
- Regression tests: A test that ensures recent code changes haven't negatively affected existing functionality. This often involves re-running previous test cases to confirm that everything still works as expected.

==

<!-- .slide: data-state="standard" -->

### Exercise

Identify the test types in this story:

<div style="text-align: left;">
During the process of manufacturing a ballpoint pen, we see smoke coming out of one of our machines, so we halt production immediately, put out the fire, and check why it caught fire in the first place occurred before continuing. We produce the cap, the body, the tail, the ink cartridge, and the ballpoint in different machines and check the quality of each component before assembling the whole. Next we check that the cap and tail fit on the body and the ink cartridge fits inside. When everything is put together, we ensure that it writes properly and doesn't leak. In the future, we plan to supply different colors of ink and will re-run these tests for each new colored pen.
</div>

===

<!-- .slide: data-state="standard" -->

### Continuous Integration and Deployment (CI/CD)

CI/CD is "next level" automation for your software project!

<img src="https://blog.cloudhm.co.th/wp-content/uploads/2021/03/ci-cd.png" width="50%">
<small> Image source: https://blog.cloudhm.co.th/ci-cd/ </small>

Note:

Continuous Integration (CI) is a practice in software development where team members regularly integrate their individual code changes, often several times a day, into a shared remote repository. After every integration, a working version of the project is built and the software's test suite is run automatically, making it possible to identify defects, errors, flaws, or bugs introduced by changes early in the development process. This helps keep the code up-to-date and reduces the chances of major issues when combining everyone's work.

Continuous deployment (CD) is the practice of automatically deploying every working version of the project that passes the automated testing phase to its end-users.

===

<!-- .slide: data-state="standard" -->

## Take home messages

- Automated software testing is key for quality, reliability, and reproducibility
- Unit tests verify individual components, integration tests check component interactions
- CI/CD streamlines development and enhances deployment efficiency

===

<!-- .slide: data-state="keepintouch" -->


www.esciencecenter.nl

info@esciencecenter.nl

020 - 460 47 70
