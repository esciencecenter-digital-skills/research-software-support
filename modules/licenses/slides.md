---
title: Software Licensing
type: slides
order: 1
---

<!-- .slide: data-state="title blue_overlay yellow_flag yellow_strip purple_half_circle_bottom purple_blob right_e_top" -->

# Software Licensing

===

<!-- .slide: data-state="standard" -->

## Common questions

- Can I use this software I found online?
- Can I share my software with others?
- Can I contribute to someone else's software?


Note:

There are three different things researchers do with software that are affected by licensing: using someone else's software, sharing your own software, and contributing to someone else's software (or having others contribute to yours).

You're probably most likely to get questions on the second topic, because the first is so commonly done that people either know the answer or don't know that it's even an issue, while the third one is still pretty rare in practice.

Software is covered by copyright, and that's the main legal context in which we'll look at these questions here.

===

<!-- .slide: data-state="standard" -->

<div style="width: 70%; float: left; margin-top: 10%">

## About copyright

- Berne convention on copyright
- Owned by author or employer?
- Can be licensed

</div>

<div style="width: 30%; float: right">

<img src="media/Zytgloggeturm_Bern.jpg" width="100%">

</div>

<div style="float: left; clear: both; padding-left: 25%; padding-top: 1em">

<small>Photo by <a href="//commons.wikimedia.org/wiki/User:JoachimKohler-HB" title="User:JoachimKohler-HB">JoachimKohler-HB</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=140063312">Link</a></small>

</div>



Note:

By the Berne convention, software is automatically protected by copyright when it is made. Depending on the country, protection lasts 50 years or more. The owner of the copyright is the only one who can copy, publish, and modify the software.

If you make software as part of a job for an employer, then your employer owns the copyright. Otherwise, you are the owner (unless there's a contract somewhere that says otherwise).

The owner of the copyright on a work can give permission to others to do things they would otherwise not be allowed to do, like copying, publishing and modifying the work. A document that describes what they can do is called a copyright license. These licenses can be given to a specific party, usually as part of a contract, or they can be offered to the general public.


===

<!-- .slide: data-state="standard" -->

## Using others' software

- Two ways of using software
- You need a license
- Licenses sometimes implicit, or home-made
- Open Source is better and safer
- Different Open Source licenses available


Note:

There are two ways of using someone else's software: running it, and incorporating it into your own program. Both are covered by copyright, because you need to download and because you're making a derivative work.

So you need copyright permission, which is to say a license. In science, these are sometimes implied, by a researcher publishing the code without an explicit license, or home-made, which is not recommended because a non-expert will overlook many of the details of copyright law.

It's better if the software has an Open Source license, because these are professionally written and have standard, well-known meanings. We will go into that a bit more later. There are websites available that explain all the standard Open Source licenses in ordinary language, so that you can easily decide whether you can use a certain software package. You don't need to be (or have) a lawyer to use Open Source software.


===

<!-- .slide: data-state="standard" -->

<div style="width: 50%; float: left">

## Why share software?

- Reproducibility
- Increasing impact
- Academic freedom of employees
- Saving by collaborating
- Public funding

</div>

<div style="width: 40%; float: right">
<img src="media/Stephanie_Morales_Sharing.jpg" width="100%">
</div>

<div style="float: left; clear: both; padding-left: 35%; padding-top: 3em">
<small>Photo by <a href="https://unsplash.com/@stephaniemoarr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Stephanie Morales</a> on <a href="https://unsplash.com/photos/person-holding-white-ceramic-mug-DGt9zA3Fr0g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>
</div>


Note:

Scientific software is sometimes shared, but also sometimes kept to themselves by the researchers making it. Here are some reasons that sharing scientific software is important:

- Software is a scientific method, and it must be shared for the science to be reproducible.
- Sharing software will bring users of the methods and citations to papers about it
- Researchers frequently change jobs, moving from university to university. Without permission from their previous employers, they would have to start rebuilding their software from scratch every time they move to a new university, which would be very inefficient.
- Many of the most pressing problems that scientist work on involve complex, multifaceted systems that can only be properly studied in collaboration. Where software is involved, which is to say almost everywhere in academic research, researchers need to be able to exchange software and collaborate on its development, including across projects.
- The software was most likely funded with public money, and should therefore be available to the public, just like papers are published Open Access.

===

<!-- .slide: data-state="standard" -->

<div style="width: 50%; float: left">

## How to share software

- Put it online
- Add a license
    1. Who owns the software?
    2. Dependencies?
    3. Kinds of licenses

</div>

<div style="width: 40%; float: right">
<img src="media/Stephanie_Morales_Sharing.jpg" width="100%">
</div>

<div style="float: left; clear: both; padding-left: 35%; padding-top: 3em">
<small>Photo by <a href="https://unsplash.com/@stephaniemoarr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Stephanie Morales</a> on <a href="https://unsplash.com/photos/person-holding-white-ceramic-mug-DGt9zA3Fr0g?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>
</div>


Note:

To share software effectively, you need to give it a license, preferably an Open Source one.

To do that, you need to be the owner of the copyright, or at least be able to act on behalf of the owners. This may be very simple but it can also be very complex. More on the next slide.

The next thing to consider is whether other software has been used in the software you've made (that's almost always the case) and how those so-called dependencies are licensed, as this may constrain your choice.

Finally, different Open Source licenses specify different terms and conditions for use, and you need to decide what you want there.

===

<!-- .slide: data-state="standard" -->

## Who owns a work?

- Work for hire
- Consortium agreements
- Funding constraints


Note:

In most countries, including The Netherlands, any work you do as part of your tasks as an employee of an organisation belongs to your employer, not to you. After all, they're paying you to do the work. This means that the copyright on any software written by a university employee is owned by the university.

Science is often done in consortia, which are typically governed by a Consortium Agreement. Those often have a section on Intellectual Property that applies. Sadly those sections often don't mention copyright, but they do usually state that each partner gets to own the things they've made. That means that if your researcher has worked together on the software with researcher at one of the partners, that there are two owners that need to decide on licensing together.

Funding may also come with restrictions or stipulations regarding ownership. For example, eScience Center grants come with a rule that says that both parties co-own the software, even if it was written by one of them, and that it will be published under the Apache License unless otherwise agreed.

===

<!-- .slide: data-state="standard" -->

## Kinds of licenses

<table style="border: 0.1em solid black; border-collapse: collapse; width: 100%">
    <tr align="center" style="border: 0.1em solid black">
        <th colspan="3" align="center" style="border: 0.1em solid black">Free and Open Source</th>
        <th rowspan="3" align="center" valign="center" style="border: 0.1em solid black">Proprietary</th>
    </tr>
    <tr align="center" style="border: 0.1em solid black">
        <th colspan="2" align="center" style="border: 0.1em solid black">Copyleft</th>
        <th rowspan="2" align="center" style="border: 0.1em solid black">Permissive</th>
    </tr>
    <tr align="center" style="border: 0.1em solid black">
        <th align="center" style="border: 0.1em solid black">Strong</th>
        <th align="center" style="border: 0.1em solid black">Weak</th>
    </tr>
    <tr align="center" style="border: 0.1em solid black">
      <td align="center" style="border: 0.1em solid black; padding: 1em">GPL<sup>1</sup> AGPL<sup>2</sup></td>
      <td align="center" style="border: 0.1em solid black; padding: 1em">LGPL<sup>3</sup> MPL<sup>4</sup></td>
      <td align="center" style="border: 0.1em solid black; padding: 1em">BSD<sup>5</sup> MIT<sup>6</sup> Apache</td>
          <td align="center" >Research only, No&nbsp;copying, No&nbsp;modification</td>
    </tr>
</table>
<div style="margin-top: 1em; font-size: 70%; line-height: 2em">
  <sup>1</sup>GPL: GNU General Public License <sup>2</sup>AGPL: Affero General Public License <sup>3</sup>LGPL: GNU Lesser General Public License <sup>4</sup>MPL: Mozilla Public License <sup>5</sup>BSD: Berkeley Software Distribution <sup>6</sup>MIT: Massachusetts Institute of Technology
</div>


Note:

Software licenses can be classified into different categories, which is helpful to get a quick idea for what kind of license you are dealing with. First, there are Open Source and non-Open Source licenses. Open Source licenses allow you to use the software, share it, change it, and share your changes. Proprietary software licenses do not allow one or more of these things. Note that this is not about being commercial, you can actually sell copies of Open Source programs, although you're not very likely to find buyers.

Copyleft licenses say that if you modify the licensed software or incorporate it into your own, that that new software package must then be licensed under the same license. A permissive license allows licensing the new work under any license. As a result, copyleft software needs to remain open source, while permissively licensed software can be made proprietary.

Within the copyleft licenses we can distinguish strong copyleft, which covers both modified versions and use in other programs, from weak copyleft, which only limits modification. So a weak copyleft license keeps the licensed software package itself Open Source, but can be used as a part of proprietary software, while a strong copyleft license keeps the software from being used in (but not with) proprietary software (it is a bit vague legally where the limit is).

Finally, the Affero GPL is designed for use with software that is designed to be installed on a server and accessed remotely, for example through a web browser. A normal copyleft license does not require the server owner to give a copy of the software running on the server to the users, while the AGPL does.

===

<!-- .slide: data-state="standard" -->

## Choosing a license

- Use a standard Open Source license
- Check your policy (if applicable)
- Use a tool


Note:

The next step is to choose a license. If at all possible, use a standard Open Source license, because it will make everyone's lives much easier. Do not use Creative Commons licenses, as they're not designed for use with software.

Next, check if your organisation has a policy that covers software licenses. Those are still a bit rare, but they're being worked on in many places so it's likely that you'll have one at some point. Check whether it specifies a particular license, or maybe a range of acceptable ones.

Finally, there are some nice tools available that make it easier to select an Open Source license. We'll have a look at that in the exercise.

===

<!-- .slide: data-state="standard" -->

<div style="width: 50%; float: left">

## Contributing to software

- Under the license
- Contributor License Agreements
    - Who are you dealing with?
    - Transfer or license?

</div>

<div style="width: 50%; float: right">
<img src="media/Kleine_Dinge.jpg" width="100%">
</div>

<div style="float: left; clear: both; padding-left: 35%; padding-top: 3em">
<small>Photo by <a href="https://unsplash.com/@markkoenig?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mark König</a> on <a href="https://unsplash.com/photos/white-and-green-quote-board-xCEuxxhpY3o?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></small>
</div>


Note:

The most common way of contributing to an open source project is to do it under the license associated with the project. That means that you keep the copyright on your addition or modification, and license it under the same license as the existing code. This is the norm for small projects run by volunteers (or scientists). This case is similar to sharing your own code under a given license.

Larger, more professionally run Open Source projects sometimes require a Contributor License Agreement. This is a contract that states what the recipient of your improvement can do with it. These are not standardised, so the contents vary.

When evaluating these, it's good to look at who you're dealing with. A commercial entity, like Google, or a governance organisation like the Apache Foundation. The latter non-profit offers support for Open Source projects, including making sure that everything is properly licensed. Google is of course a commercial entity.

Some CLAs require you to transfer ownership of the copyright on your contribution to someone else, which can be a good idea if that sole copyright holder can be trusted, for example because it makes it easier to upgrade the license. It may also allow them to turn your work proprietary however. In other cases, you're just giving explicit permission to distribute your contribution as Open Source software, which seems more just.

In general with CLAs, you should be careful with commercial entities (state aid!), and it's in any case probably wise to get your legal department involved.

===

<!-- .slide: data-state="keepintouch" -->


www.esciencecenter.nl

info@esciencecenter.nl

020 - 460 47 70
