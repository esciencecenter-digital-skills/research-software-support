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
- Allows your collaborators **and future you** to understand what has been done and why

===

<!-- .slide: data-state="standard" -->

## Why document software?

Make your software reusable:

- A user should be able to run your software in the same way as you do now 
- A user should be able to install your software
- A contributor should be able to add to, improve, or fix code

===

<!-- .slide: data-state="standard" -->

## Documentation purpose types

Documentation can have different purposes:

- **User documentation**: What does the software do? How can it be used?
<!-- .element: class="fragment" data-fragment-index="1" -->

- **Developer documentation**: How can your software be modified or extended?
<!-- .element: class="fragment" data-fragment-index="2" -->

- **Deployment documentation**: What hardware and software requirements are there?
<!-- .element: class="fragment" data-fragment-index="3" -->

===

<!-- .slide: data-state="standard" -->

## Documentation formats

<!-- add visual with documentation format with increasing complexity -->

- In-code: intended for contributors (comments, docstrings, ...)
- README: simple text file, first thing that users/collaborators see
- Websites, Wikis 

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

## Why write in-code documentation?

In-code documentation:

+ Makes code more understandable
+ Explains decisions that were made

===

<!-- .slide: data-state="standard"  -->

## When **not** to use in-code documentation?

+ When the code is self-explanatory
+ To replace good variable/function names
+ To replace version control
+ To keep old (zombie) code around

===

<!-- .slide: data-state="standard"  -->

## Readable code vs commented code

```python=
# convert from degrees celsius to fahrenheit
def convert(d):
    return d * 5 / 9 + 32
```
vs
```python=
def celsius_to_fahrenheit(degrees):
    return degrees * 5 / 9 + 32
```

===

<!-- .slide: data-state="standard"  -->

## What makes a good comment?

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

How are these different? Which one do you prefer?

===

<!-- .slide: data-state="standard"  -->

## Docstrings: a special kind of comment

```python=
def celsius_to_fahrenheit(degrees):
  """Convert degrees Celsius to degrees Fahrenheit."""
  return degrees * 5 / 9 + 32
```

Why is this OK?

Note:
Docstrings can be used to generate user documentation.
They are accessible outside the code.
They follow a standardized syntax.

===

<!-- .slide: data-state="standard"  -->

## In-code commenting: key points

+ Explicit, descriptive naming already provides important documentation.
+ Comments should describe the why for your code, not the what.
+ Writing docstrings is an easy way to write documentation while you code, as they are accessible outside the code itself.

===

<!-- .slide: data-state="standard"  -->

## User/API documentation

+ What if a README file is not enough?
+ How do I easily create user documentation?

===

<!-- .slide: data-state="standard"  -->

## Tools

+ **Sphinx** / **mkdocs** (documentation generator)
  - creates nicely-formatted HTML pages out of .md or .rst files
  - programming language independent
+ **Github pages** (deploy your documentation)
  - set up inside your GitHub repository
  - automatically deploys documentation generated above

===

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
