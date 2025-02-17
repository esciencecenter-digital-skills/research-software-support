---
title: Terminology
type: reading
order: 2
---

## Terminology
* **Branch**: A parallel version of a repository that allows independent development without affecting the main (set of) file(s). Each branch starts from an existing *commit* and can evolve separately, enabling multiple changes to be worked on simultaneously. Branches are commonly used for features, bug fixes, or experiments before merging them back into the main branch (often called the trunk or default branch).
* **Commit (noun)**: A commit or changeset is a set of alterations packaged together, along with meta-information  about the alterations. A commit/changeset describes the exact differences between two successive versions in the *version control system's* *repository* of changes along with information about the context of these changes, e.g. author, date, description (*commit message*) and a pointer to the parent commit, as well as a unique ID (*commit hash*).
* **Commit (verb)**: To write the changes made in a *working copy* into the *repository*.
* **Commit hash**: A unique identifier (usually an SHA-1 hash in Git) that represents a specific *commit*. This hash is generated based on the commit’s content, metadata, and parent commit(s), ensuring that each commit has a distinct and immutable reference.
* **Commit message**: A short description provided by the developer when creating a *commit*. It explains the purpose of the commit and helps others understand the changes. Good commit messages improve collaboration, history tracking, and debugging.
* **Merge**: The process of integrating changes from one *branch* into another. Typically, a feature or bugfix branch is merged into the main branch to include the new changes. Merging combines the commit history and resolves differences between branches.
* **Merge conflict**: A situation that occurs when two *branches* modify the same part of a file in incompatible ways. *Version control systems* require manual resolution to decide which changes should be kept before completing the merge.
* **Pull/push**: Copy revisions/*commits* from one *repository* into another. Pull is initiated by the receiving repository, while push is initiated by the source. Fetch is sometimes used as a synonym for pull, or to mean a pull followed by an update. 
* **Pull/merge request**: Contributions to a source code *repository* that uses a distributed *version control system* are commonly made by means of a pull request or merge request (synonyms). The contributor requests the project maintainer to *pull* and *merge* their changes to integrate it into the code base, hence the name.
* **Repository**: In *version control systems*, a repository is a data structure that stores files and metadata for a directory structure.
* **Version Control System**: A system that tracks changes to files over time, allowing collaboration, parallel development, and the ability to revert to previous states. Git is most commonly used for software in the present day.
* **Working copy**: The working copy is the local copy of files from a *repository*. All work done to the files in a repository is initially done on a working copy, hence the name.

[Git commands cheat sheet](https://training.github.com/downloads/github-git-cheat-sheet.pdf)
