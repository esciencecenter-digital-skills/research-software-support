---
title: SMP requirements
type: info
order: 2
---



## **Purpose**
The software's purpose is the most important aspect of the SMP.

It allows you to be clear about the problem it addresses, and who the software is aimed at, as well as set boundaries on its scope.
Addressing the limitations of the software, as well as the advantages it will provide, help determine its scope.
This will help the developers focus on the specific needs of the software.



## **Engineering**
is related to building the software

#### **Version Control**
has a myriad of benefits: it allows keeping track of history and provenance, can support experimentation and collaboration, and is crucial for the identification of specific versions of the software.

#### **Testing**
ensures that software continues to work as intended.
There are many different approaches to this: units of code can be tested in unit tests; entire workflows can be verified in integration tests; acceptance tests can be created to ensure specific requirements are met; regression testing can be done to ensure new changes do not break existing functionality; and so on.
Deciding whether and if so what testing will be implemented is an important element of the SMP.

#### **Packaging**
is important for the distribution of software. The format in which the software will be distributed is an important decision that should be made early on.

#### **Code Quality**
should be addressed: what standards will be adhered to, and how will they be measured and supported?
There are many tools that can help with this, and it is important to choose them early on to maintain consistent code quality throughout the project.



## **Documentation**
is an important component of software, and should be tailored to different audiences.

#### **User Documentation**
the software's function should be explained, and instructions on how to use it should be provided.

#### **Developer Documentation**
instructions on how to modify the software, and how to contribute to the project should be provided.

#### **Deployment Documentation**
explains any system requirements (such as dependencies) for deploying the software, and installation and testing instructions.



## **Project Management**
addresses various conditions for the software's long-term sustainability and re-use.

#### **License**
Any reusable software should have an appropriate license, which is an important early decision.

#### **Maintenance**
Who will maintain the software and for how long? 
How actively will user concerns be addressed?
How much time will this take?
How and when will it be retired?

#### **Citation**
How will you collect information about its use? What DOI will you use for this?

#### **Repository**
where will the software be deposited and how accessible will it be?
Users should be able to obtain a functional copy of the software.

#### **Resources**
What resources - human, infrastructure, financial - will be needed, and when?

#### **Risk Analysis**
Are there privacy or security concerns?
Is there potential for vendor lock, or other considerations for future reliability and reuse?
What are the consequences of software failure and how will these be mitigated?
