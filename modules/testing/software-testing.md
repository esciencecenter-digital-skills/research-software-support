---
title: Software Testing
type: reading
order: 2
---

## Software Testing (5 minutes)

Software testing is the process of evaluating and verifying that software and its components meet specified requirements and function as expected. This critical step in the software development lifecycle ensures that the final product is reliable, functional, and free of significant defects.

The primary goal of software testing is to identify defects, errors, flaws, or bugs early in the development process. By detecting issues early, developers can address them before the software is released, reducing the risk of costly fixes and enhancing overall quality. Software testing can be conducted manually, where a human tester actively uses the software, performing various actions and observing the results to detect any anomalies or unexpected behavior. Alternatively, automated testing utilizes test scripts or tools to execute tests automatically, which is efficient for repetitive tasks and can quickly cover a wide range of test scenarios.

Untested software can be likened to uncalibrated experimental devices. Just as uncalibrated instruments may provide inaccurate data and lead to erroneous conclusions, untested software can contain hidden defects that compromise its reliability and performance, potentially leading to critical failures in real-world applications; see optional section below.

### What can tests help you do?

Tests play a crucial role in ensuring the reliability, validity, and reproducibility of your software's results. They help users easily verify that they have correctly installed your software, often providing examples of how to use it effectively. Tests also enable other developers to contribute to your software and make modifications with confidence, knowing that nothing is breaking.

Additionally, tests preserve expected functionality by ensuring that new changes do not introduce unintended side effects. They manage complexity by encouraging code that is easier to test, which in turn makes it easier to understand and maintain.

### Types of Testing

There are several types of tests used in software development, each serving a specific purpose to ensure the quality and functionality of the software.

- **Smoke Tests**: Also known as "verification testing", "confidence testing" or "sanity testing", smoke tests are a preliminary type of testing that checks the basic functionality of the software. They are often used to determine if a new build is stable enough to proceed with more detailed testing. Smoke tests quickly identify major issues that could prevent the software from functioning at a basic level.

- **Unit Tests**: These tests focus on individual functions or components of the software, testing them one at a time. Unit tests are designed to validate that each function performs as expected in isolation, ensuring that the smallest parts of the codebase work correctly.

- **Integration Tests**: These tests evaluate how different parts of the software work together. Integration tests are crucial for identifying issues that arise when components interact, ensuring that the integrated parts function seamlessly as a whole.

- **System Tests**: These tests involve evaluating the entire software system running in an environment that simulates real-world conditions. System tests aim to verify that the software meets all specified requirements and performs well under expected usage scenarios.

- **Regression Tests**: These tests are used to ensure that recent code changes have not adversely affected existing functionality. By checking that the software produces the same results as before the changes, regression tests help maintain stability and prevent the reintroduction of previously fixed bugs.

## Examples of untested research software (40 minutes, optional)

There are several examples in which the lack of proper software testings resulted in serious consequences. Here are a few interesting cases:

- https://en.wikipedia.org/wiki/Therac-25
  - (1980) A tragic example of software bugs leading to loss of life, the Therac-25 radiation therapy machine had a flaw in its software, which resulted in patients receiving lethal doses of radiation.

- https://en.wikipedia.org/wiki/Ariane_flight_V88
  - (1996) This European Space Agency rocket was destroyed just 40 seconds after its launch due to a software bug.

- https://www.wired.com/2010/11/1110mars-climate-observer-report/
  - (1999) The loss of the Mars Climate Orbiter in 1999 is another prominent example of a catastrophe caused by a software error, specifically a unit conversion mistake.

- https://en.wikipedia.org/wiki/Year_2000_problem
  - (2000) The Y2K bug was a widespread computer flaw that was expected to cause chaos as the date changed from December 31, 1999, to January 1, 2000.

- https://www.science.org/doi/full/10.1126/science.314.5807.1856
  - (2006) A software flaw (a plus sign which should have been a minus) lead to a retraction of 5 scientific articles.

- https://en.wikipedia.org/wiki/Knight_Capital_Group
  - (2013) Knight Capital, a financial services firm, lost around $440 million within less than an hour due to a software glitch in its trading algorithms.

- https://en.wikipedia.org/wiki/Boeing_737_MAX_groundings
  - (2018-2019) Software issues with the Boeing 737 MAX's Maneuvering Characteristics Augmentation System (MCAS) were implicated in two fatal crashes

- https://arstechnica.com/information-technology/2019/10/chemists-discover-cross-platform-python-scripts-not-so-cross-platform/
  - (2019) Researchers found that a programming error in a set of Python scripts commonly used for computational analysis of chemistry data returned varying results based on which operating system they were run on—throwing doubt on the results of more than 150 published chemistry studies.