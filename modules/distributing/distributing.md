---
title: Distributing Software
type: reading
order: 4
---

# Distributing software (10 minutes)

Modern software contsists of an often large collection of components (libraries, packages) that are combined together to form an application. This whole collection needs to be reproduced on the computer of the user for things to work. There are two ways of doing that: 

1) combining them all together on the computer of the developer, and then wrapping everything up into a package, installer, container image, or VM image that is sent to the user, or 
2) putting the components that you made yourself on the Internet (as a package), and relying on the user to download the other components (packages) and assembling it all together into a working application

## Monolithic applications

Option 1) works for applications, which are more or less independent. If they're used together, then it's by saving a file from one and opening it in another application. Each application contains all the bits it needs, and is installed on the user's computer in a separate folder, away from everything else. That means that different applications don't get in each other's way, but it's also rather inefficient if many applications use the same component, because you end up with many copies of that component.

If you do choose option 1), then you still have a choice between making a package, an installer, a container image, or a virtual machine image. A package is an archive (think a ZIP-file, which it often literally is) that contains, in this case, all the components needed by the application. Since it's just a file, a package needs to be installed by a special program called a package manager. The App Store or Play Store on your phone is such a program.

An installer is itself a computer program, that also contains all the components needed by the application. It gets downloaded by the user, who then runs it, after which it copies all the components from within itself onto the user's computer. It can then run there just like an application installed from a package using a package manager.

A container image is a special kind of package. It also contains all the parts needed to run a program, but it is run in a special isolated environment called a container. A normal application can access everything else on the computer, including files and parts of other applications. It's set up to use its own components of course, but it could access other things if it wanted or needed to. An application that runs in a container can't do this, it's isolated from everything else except for the operating system. This is an advantage for example if the software runs on a server that is accessible from the Internet, because it provides some security. It also makes it easy to run many copies of the software on many servers, so that you can serve many users.

A Virtual Machine finally is even more isolated. It contains its own operating system together with the application, so that the running application cannot even access the operating system on the user's computer. This has similar advantages as a container, being more secure, but it's also slower than using containers.

So these are the different ways option 1), distributing a monolithic application with everything included, can be implemented. As said, this reduces potential compatibility problems, but isn't very efficient because you end up with many copies of everything.

## Separate packages

Option 2) is more efficient than option 1), because the user can just install each component once, and then every other component that needs it can use it. There are drawbacks here as well though. First, the user needs to figure out which components are needed for a particular application, and then install them one by one. This puts them in an unpleasant place called "dependency hell".

Dependency hell was mostly solved by the invention of package managers, which automate the process of downloading and installing the required components. Example are pip, conda, apt, and Homebrew. If each component is put into a package with some metadata that describes which other packages it needs, then the package manager can do all that automatically, at least assuming that everything is Open Source and freely available online, because it cannot go to the shop to buy a license for everything. Still, often everything is Open Source and then this saves a huge amount of work. Dependency hell is not the only problem however.

Software is continuously developed, and that means that it changes over time. Those changes sometimes change how a component is used by other components, which then need to be updated too. So the user may end up with an older program that only works with an older version of component X, while they also want to used a different newer program that works only with a newer version of X. A good package manager will give an error message in that case, but that doesn't solve the problem. Which version do you install?

There are again two common solutions to this, distributions and environments. A distribution, like Ubuntu, is made by a group of people who create a collection of packages that are all compatible with each other, meaning that every package in it that uses package X works with the same version of package X, namely the one that's included in the distribution. This takes a significant amount of work, but it's very nice because you only have one version of everything, and maximal space efficiency. Of course there are still updates, but they happen once every six months or several years, and then everything is updated at once. That does mean that you don't get the latest version right away, but also that things just work and don't suddenly break. (Cathedral!)

Another way to fix the multiple options of X problem is to use environments. An environment is a separate part of the computer into which packages can be installed, in such a way that only packages within the environment are combined. So now you can install one application in one environment with one version of X, and the other application in another environment with another version of X. That costs more disk space, but it's easier to get the latest stuff, and it doesn't require all the work of constantly ensuring everything is compatible. So this makes option 2) look a bit more like option 1) again, although you can still have fewer environments than you have applications. (Bazaar!)

## Which option to choose when

Scientific software is often a script, which is basically the topmost component in the whole collection of components. Scripts mostly just tell other components what to do. Since the script isn't used by other components, it can be packaged as an application in either of the above-mentioned ways. Users can the install and run it to *reproduce* the results, but not easily use it in their own script or modify it to do something different but related.

Sometimes, scientists (or Research Software Engineers!) develop components that are intended for use by others in their scripts, or even in other components. Those need to be packaged as packages for a package manager, because they need to be combined with other packages on the user's computer. (The user is a programmer, in this case!) This allows the software to be *reused* by others in their scripts.

Finally, for others to be able to modify the software and perhaps contribute some new feature or fixes back to it, the source code of the software needs to be available through a public repository. Package managers and installers don't normally install software in a way that makes it easy to modify, as that's not what they're designed for. To be able to modify the software, you need the source code, in a version control system. So besides in a package or container repository, don't forget to make a public git repository too!