# Research Software Support
This repository contains the contents for the Research Software Support platform.

This platform uses the [NEBULA framework](https://github.com/esciencecenter-digital-skills/NEBULA).

For elaborate setup instructions and other documentation, see the [NEBULA documentation](https://github.com/esciencecenter-digital-skills/NEBULA-docs)


# Quick local setup

## Content directory/repository

To use NEBULA to build the content in this repository locally, you will need to clone this repository and the NEBULA repository:

```bash
git clone git@github.com:esciencecenter-digital-skills/research-software-support.git
git clone git@github.com:esciencecenter-digital-skills/NEBULA.git
```

## Link to the content repository

To make sure that NEBULA knows where to find the content, we create the following environment variable:

```bash
export CONTENT_PATH="~/path/to/your/content/repository"
```

## Install dependencies

Install the dependencies using the [node package manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm):

```bash
# node package manager
npm install
```

## Local development build

Start the development server on `http://localhost:3000`:

```bash
# node package manager
npm run dev
```

Now you can open a browser and navigate to `http://localhost:3000/research-software-support`