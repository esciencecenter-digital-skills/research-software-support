---
title: Documentation
type: slides
order: 1
author: Luisa Orozco, Barbara Vreede, Jaro Camphuijsen, Carlos Martinez, Max Paulus, Robin Richardson
---

<!-- .slide: data-state="title" -->

# Documentation

===

<!-- .slide: data-state="standard" -->

## What is documentation?

- Provides context for your work
- Explains what this is and how to use it
- Explains what has been done and why


===

<!-- .slide: data-state="standard" -->

## Why document software?

Make your software reusable:

- A user should be able to run your software in the same way as you do now 
- A user should be able to install your software
- A contributor should be able to add to, improve, or fix code

note:

"a contributor" includes future you. Don't touch your code for a year or two and you will not immediately remember the decisions that you made in the past.

===

<!-- .slide: data-state="standard" -->

## Documentation types

Documentation can have different purposes:

- **User documentation**
<!-- .element: class="fragment" data-fragment-index="1" -->
  - What does the software do? How can it be used? How to install it?
<!-- .element: class="fragment" data-fragment-index="1" -->
- **Developer documentation**
<!-- .element: class="fragment" data-fragment-index="2" -->
  - How can your software be modified or extended? Why were certain development choices made.
<!-- .element: class="fragment" data-fragment-index="2" -->
- **Deployment documentation**
<!-- .element: class="fragment" data-fragment-index="3" -->
  - How to maintain the software? How to set up a webapp?
<!-- .element: class="fragment" data-fragment-index="3" -->

===

<!-- .slide: data-state="standard" -->

## Documentation formats

<!-- add visual with documentation format with increasing complexity -->

- README: simple text file, first thing that users/collaborators see
- In-code: intended for developers (comments, docstrings, ...)
- Websites, Wikis
- Tutorials

===

<!-- .slide: data-state="standard"  -->

## A good README file

+ README file is first thing a user/collaborator sees
+ What should be included in README files?
<ul>
  <li contenteditable="true">...</li>
  <li contenteditable="true">...</li>
  <li contenteditable="true">...</li>
  <li contenteditable="true">...</li>
  <li contenteditable="true">...</li>
  <li contenteditable="true">...</li>
  <li contenteditable="true">...</li>
</ul>


Note:
+ A descriptive project title
+ Motivation (why the project exists) and basics
+ Installation / How to setup
+ Copy-pasteable quick start code example
+ Usage reference (if not elsewhere)
+ Recommended citation if someone uses it
+ Other related tools ("see also")
+ Contact information for the developer(s)
+ License information
+ Contributing guidelines

===

<!-- .slide: data-state="standard"  -->

## In-code documentation?

- Code comments:
  - Provide context for (complex parts) of the code
  - Explains certain coding decisions
  - Can often be replaced by better programming
- Docstrings:
  - Special comments that describe (use of) functions/classes/etc.
  - Can be called by users/websites
  - Follow a standardized syntax (per programming language)

==

<!-- .slide: data-state="standard"  -->
## Exercise: In-line comments

**Comment A**

<pre data-id="code-animation"><code style="overflow: hidden;" data-trim class="python">
# Now we check if temperature is larger than -50:
if temperature > -50:
    print('do something')
</code></pre>

**Comment B**

<pre data-id="code-animation"><code style="overflow: hidden;" data-trim class="python">
# We regard temperatures below -50 degrees as measurement errors
if temperature > -50:
    print('do something')
</code></pre>

- How are these different? Which one do you prefer?
- Can you think of a way to avoid using comments altogether?

===

<!-- .slide: data-state="standard"  -->

## User/API documentation

+ What if a README file is not enough?
+ Use tools to create API documentation from existing docstrings

note:

tools include

+ **Sphinx** / **mkdocs** (documentation generator)
  - creates nicely-formatted HTML pages out of .md or .rst files
  - programming language independent
+ **Github pages** (deploy your documentation)
  - set up inside your GitHub repository
  - automatically deploys documentation generated above

===

<!-- .slide: data-state="standard"  -->

## Tutorials

+ Example code that allows users to run specific test cases 
+ Jupyter notebooks are often used for this purpose

<!-- .slide: data-state="standard" -->

## Take-home message

Documentation is a vital part of a project, and should be kept and created alongside the corresponding code.

Depending on the purpose and state of the project documentation needs to meet different criteria.

Documentation can take different shapes:
+ Readable code
+ In-code comments
+ Docstrings
+ README files
+ Tutorials/notebooks

<!-- .slide: data-state="keepintouch" -->


www.esciencecenter.nl

info@esciencecenter.nl

020 - 460 47 70
