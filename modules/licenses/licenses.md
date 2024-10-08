---
title: Software licenses
type: reading
order: 4
---

## Software licenses (8 minutes)

Software licenses are legal statements that give permission to use, modify and/or distribute software. By copyright law, only the copyright owner(s) can give this permission, so the license must be granted by those owners.

There are different kinds of software licenses, with different underlying business models. Some software producers sell copies or seats, where the user has to pay for each computer that the software is used on or person the software is used by, and where the user does not have permission to modify or distribute the software. In this case, licenses are given to individual users or companies as part of a sales contract.

It is also possible to make a general statement that anyone can use, modify and/or distribute a software package under certain conditions. In this case, there is no contract, and no specific counterparty. Instead, the owners of the copyright give the same permissions to everyone, usually in a document included with the software as it is put on the Internet. Software distributed like this can usually be downloaded without paying, although there may still be significant limitations on what you can do with it.

Some software is distributed with a license that gives very broad permissions to anyone who obtains a copy. Such software is known as Free Software and/or Open Source Software. Before we look at what that is exactly, it helps to understand a bit better what software actually is, and how it's made.

### What is software?

To non-programmers, software can appear to be a somewhat magical thing. It is in our computers and phones and it makes them work, or sometimes not work. It's made by specialist people who we call programmers, and who must be very smart to be able to make all this work, or perhaps very dumb given how often software doesn't work. In short, it seems to be mysterious.

Of course, programmers are perfectly ordinary people. They make the software that makes our phones and computers work, and sometimes programmers make mistakes, and then the software doesn't work as intended. Computer programs are made by typing text into the computer, just like you do when writing an email or a letter. Computer programs consist of one or more files with instructions for the computer. These files can be modified to change what the software does, they can be combined together into a larger, more complex program, and they can be shared with others and reused. For the computer to be able to run the software, the files need to be translated from the human-readable text form (the *source code*) into a sequence of numbers encoding the same commands (a *binary*). This is done mechanically by a special program called a compiler or an interpreter.

There are different ways of making software collaboratively. One is to work closely together (even sharing a computer!) on the same source code, which can help reduce mistakes as two see more than one, or it can be useful as a teaching exercise. Looser ways of collaborating include copying someone else's code and then independently modifying it to do something a bit different, and reusing a software component made by someone else in your own program, usually in its original form but possibly with changes as well.

The looser forms of collaboration rely on software being distributed from its maker to its user, who then modifies it or integrates it. This requires permission from the copyright owners because there's distribution and the creation of a derivative work, which means that there needs to be a license. A reliable and easy way to do this is to make all the software Free and Open Source.

### Free and Open Source Software

The Free Software Foundation lists four freedoms that users need to be given by the copyright owner(s) for a program to be considered Free Software:

- The freedom to run the program as you wish, for any purpose.
- The freedom to study how the program works, and change it, so it does your computing as you wish. Access to the source code is a precondition for this.
- The freedom to redistribute copies so you can help others.
- The freedom to distribute copies of your modified versions to others. By doing this you can give the whole community a chance to benefit from your changes. Access to the source code a precondition for this.

Note that the word "free" here refers to freedom to do things, not to what the software costs. You're allowed to sell copies of Free Software!

Open Source Software has an official definition too, which is quite a bit longer but boils down to the same thing. Because of that, the terms are often combined into Free and Open Source Software, or FOSS, but the term Open Source is also popular. We will use them here interchangeably.

You can make a software package that you own the copyright to Open Source by distributing it (usually on the Internet) under an Open Source license, i.e. one that gives everyone the above freedoms. In practice, that means that the software is distributed in source code form, with a license document stating that the copyright owners give everyone the freedom to do the above things, subject to certain conditions. There exist a small number of standard Open Source licenses that you can use. All of these are open source, but there are some difference as well that are good to know about.

### License categories

<table>
    <tr align="center">
        <th colspan="3">Free and Open Source</th>
        <th rowspan="3" valign="top">Proprietary</th>
    </tr>
    <tr align="center">
        <th colspan="2">Copyleft</th>
        <th rowspan="2">Permissive</th>
    </tr>
    <tr align="center">
        <th>Strong</th>
        <th>Weak</th>
    </tr>
    <tr align="center">
      <td>GPL<sup>1</sup> AGPL<sup>2</sup></td>
      <td>LGPL<sup>3</sup> MPL<sup>4</sup></td>
      <td>BSD<sup>5</sup> MIT<sup>6</sup> Apache</td>
          <td>Research Only: No&nbsp;copying, No&nbsp;modification</td>
    </tr>
</table>
<div class="footnote">
  <sup>1</sup>GPL: GNU General Public License <sup>2</sup>AGPL: Affero General Public License <sup>3</sup>LGPL: GNU Lesser General Public License <sup>4</sup> MPL: Mozilla Public License <sup>5</sup> BSD: Berkeley Software Distribution <sup>6</sup> MIT: Massachusetts Institute of Technology
</div>

The table above shows five of the most common FOSS licenses. They're organised in a hierarchystarting with the distinction between Free and Open Source on the one and, and proprietary software on the other. Proprietary software is software that isn't FOSS, which is to say that it has restrictions on use or modification or distribution. It's called proprietary because there is a proprietor or (copyright) owner, who has exclusive control over the software. For Open Source this is not the case: there is a copyright and it's owned by someone, but the license gives everyone else the same permissions they have and so they don't have exclusive control.

Within the category of Open Source licenses, we can distinguish Copyleft licenses and Permissive licenses. Permissive licenses give everyone permission to use, modify and distribute with no further restrictions other than perhaps requiring an acknowledgement that the software was used. In particular, permissive licenses allow the software to be used as a part of non-Open Source software, and for it to be redistributed without the source code, so that it cannot be inspected or modified anymore.

Copyleft licenses try to ensure that the software remains FOSS. You are free to distribute Open Source software that has a copyleft license, but you have to include the complete source code and distribute the modified or extended software under that same license. As a result, everyone who gets a copy of a version of the software and anything it's used in will be free to use, modify and distribute that product. Note that distribution isn't required, all common open source licenses allow making private modifications and not sharing them with anyone.

Weak copyleft licenses are intended for use with libraries, software components that are intended to be used by other programmers to build larger programs. A weak copyleft license applies copyleft to the library itself, but not to the larger program using the library. As a result, programmers using the library can distribute their part of the program without source code or the right to make modifications, as long as they do distribute the source for the library, including any modifications. Strong copyleft licenses require the entire program to be under the same strong copyleft license.

### License politics

Besides the legal differences, there's a bit of a political difference between Free Software and Open Source, and between copyleft and permissive licenses, that is good to understand. Free Software adherents see everyone as a potential programmer, and believe that your computer isn't truly yours until you fully control what it does, which requires the ability to inspect and modify the software. They envision a world in which computer users collaboratively develop the software they use, sharing their improvements with each other. They therefore prefer copyleft licenses, because those ensure that as many software packages (and therefore, users) as possible are free.

Open Source takes a more pragmatic approach in assuming that most software is made by a small cadre of software developers, often employed by companies, and that there are a potentially large number of end users that have neither the skills nor the inclination to change what their computer does. For these end users, having the source code is not useful, but the developers can often save some effort by working together on software that everyone needs. A permissive Open Source license makes that possible with a minimal amount of legal complexity. It also makes it easy to build commercial, proprietary products on top of the software.

From the perspective of science, there's something to be said for each of these approaches. On the one hand, Free Software and copyleft matches the ideals of Open Science quite well. On the other hand, science and scientific software development is funded by society using public funds in the hopes that something useful will come out of it, and scientific papers are useless to most citizens. They want a product, which will be produced commercially, and that is a good match for the Open Source and permissive licensing model.

