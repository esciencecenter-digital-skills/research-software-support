---
title: How to share software
type: reading
order: 5
---

## How to share software (6 minutes)

Sharing software is done these days by making it available through the Internet, via e.g. GitHub or Zenodo. As we have seen however, that's not all you need to do. Because of copyright law, the software also needs a license. Sharing scientific software is sometimes simple from a legal perspective, but it can also be quite complicated. This section explains the main issues to take into account, which are ownership of the copyright, constraints imposed by dependencies, and choosing a license.

### Ownership

A copyright license must be given by the owner(s) of the copyright being licensed. This means that the first step to licensing a program is to find those owners. In most countries, including The Netherlands, any work you do as part of your tasks as an employee of an organisation belongs to your employer, not to you. After all, they're paying you to do the work. This means that the copyright on any software written by a university employee is owned by the university.

If the software to be shared is written entirely by one person, with no copy-pasting of code from others, and no help from people outside of the organisation, then the copyright is therefore owned by your organisation, and it can decide how to license the code.

Science is often done collaboratively though, and that makes things a bit more complicated. Funding for research is often given to consortia comprising multiple organisations that will collaboratively execute the research project. Such a consortium is governed by a Consortium Agreement (CA), which almost always has an Intellectual Property paragraph. Unfortunately, the standard text in the templates used for those documents rarely mentions software, as it mainly addresses patents and trade secrets. It does however usually say that each party gets to own the things they make, and that the partners can use it for the purpose of executing the research, but not beyond that. (Note that there is always some negotiation regarding the text, so you should check any specific CAs that apply, and not rely on this general description.)

Funding may also come with terms covering ownership. eScience Center grants for example come with a stipulation that both parties co-own the software even if it is written completely by one of the partners.

So, if your researcher works on the software together with a researcher from a different organisation, then both organisations need to agree to license their respective copyrights, ideally under the same license to avoid complicating things.

For long-lived scientific software that isn't Open Source already, it can sometimes be very difficult to determine ownership. It may not always be clear who wrote which part of the code (especially if no version control software was used), who they worked for when they did so, and which contracts were in place that governed their activities. Ideally, the copyright owners would have been carefully tracked over the life of the software, with copyright statements in the README documenting the owners. That is unfortunately very rare however. If it is not possible to determine the owners of the copyright, then the software cannot be licensed.

### Dependencies

Owners may not be completely free to decide how to license their software. Aside from any constraints imposed by funders, *dependencies* play a role. Dependencies are externally developed, separate software packages that are needed for the software to work. Having such dependencies is very common, and dependencies typically have their own dependencies, so that any complete computer program consists of a whole collection of software packages, usually written by different people. These days at least for Open Source software, the complete program is rarely distributed as a whole. Instead, the owners of the individual components each put their components online, and a special tool is used to collect all the required bits and combine them together on the computer of the user, who can then use the software.

As described in the section on licensing, strong copyleft licenses place constraints on how the combined software can be licensed. As a result, you cannot use them in a non-Open Source program. This does not mean that you have to make your software Open Source if has a copyleft dependency, but *if* you distribute it, then that must be done under the same license, and/or a more permissive one that does not conflict with it.

As you can see, dependencies with strong copyleft licenses can make life a bit more complicated. On the other hand, as long as no proprietary software is involved not much can go wrong. In case there are proprietary dependencies (including ones without a license, or "academic use only" or somesuch), there is a larger issue. If the software cannot work without the dependency, and the proprietary license does not allow redistribution, there we can still open source the software, but others won't be able to run it unless they can somehow get a copy of the proprietary dependency. And if you choose a strong copyleft license for your code, then you'll have to add a special exception for your users to be able to use it with the proprietary dependency.

So it is really proprietary software that complicates things legally, and that's aside from the lack of Open Science transparency. On the other hand, some proprietary software package is sometimes the only solution, and so proprietary dependencies cannot always be avoided. If that's the case, you'll have to look at the specific terms for that package and try to find a solution.

Weak copyleft licenses are less of an issue, because they do not reach beyond the licensed package itself. They can become an issue if your researcher has copy-pasted code from them into their own program (which is bad practice, but unfortunately fairly common still), or created a modified version. In that case the same weak copyleft license applies to (parts of) their code or the modified software, thus restricting the available license choices.

### Choosing a license

In almost all cases, scientific software should be licensed under a common, standard Open Source license. Open Source enables scientific collaboration and makes the work available to the society that paid for its creation, and not using a standard license creates enough legal risk that most potential users will not be willing to touch the software unless they really have to.

Whether to use a permissive, weak, or strong copyleft license is up to the copyright owner. If your organisation has a policy on software, then it may well say something about which licenses can be used, so be sure to check that. The authors of the software may also have an opinion, or develop one if you explain the different kinds of licenses to them. A tool like [ChooseALicense](https://www.choosealicense.com) may help here.

Note that Creative Commons licenses should not be used for software. They were created specifically to be able to apply the concept of Open Source to everything that is *not* software, and aren't suitable to the specific properties of software. So use CC for data and other works, and an Open Source license for software.

