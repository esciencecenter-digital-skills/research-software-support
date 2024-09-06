# Research Software Support
This repository contains the contents for the Research Software Support platform. In the Research Software Support modules we want to provide a comprehensive overview of the different aspects of research software.

## Teaching this lesson?
Do you want to teach Research Software Support? This material is open-source and freely available. 
Are you planning on using our material in your teaching? 
We would love to help you prepare to teach the lesson and receive feedback on how it could be further improved, based on your experience in the workshop.

You can notify us that you plan to teach this lesson by creating an issue in this repository. Also, it would be great if you can update [this overview of all workshops taught with this lesson material](workshops.md). This helps us show the impact of developing open-source lessons to our funders.

## Target audience
The target audience for this material is University management and support staff. University management taking part in courses involving these modules may be involved in creating university policy around research software. The University support staff targeted are not themselves researchers or software engineers, but they support researchers and research software engineers in creating research software.

## Contributing
We welcome contributions to the content of the Research Software Support platform. Please view [the contributing guidelines](https://github.com/esciencecenter-digital-skills/research-software-support/blob/main/CONTRIBUTING.md) for more information.

## Technical documentation
This platform uses the [NEBULA framework](https://github.com/esciencecenter-digital-skills/NEBULA).

For elaborate setup instructions and other documentation, see the [NEBULA documentation](https://github.com/esciencecenter-digital-skills/NEBULA-docs)

## Quick local setup

More detailed information about local setup can be found in the [NEBULA local rendering docs](https://github.com/esciencecenter-digital-skills/NEBULA-docs/blob/main/local-rendering.md)

### Content directory/repository

To use NEBULA to build the content in this repository locally, you will need to clone this repository and the NEBULA repository:

```bash
git clone git@github.com:esciencecenter-digital-skills/research-software-support.git
git clone git@github.com:esciencecenter-digital-skills/NEBULA.git
```

### Link to the content repository

To make sure that NEBULA knows where to find the content, we create the following environment variable:

```bash
export CONTENT_PATH="/path/to/your/content/repository"
```

### Install dependencies


Check whether you have node and npm installed:
```bash
node -v
npm -v
```
The above commands should output the installed versions, *e.g.*, `10.6.0` and `v20.9.0`.

If this is not the case, proceed with installing the [node package manager](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

First, [use nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script), the "node version manager", this is a shell script that enables the installation, management and use of multiple versions of the node runtime environment and package manager.

```bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```

Now, install the the node Javascript runtime environment which includes the node package manager (npm):
```bash
nvm install node
```

Finally, you can use npm (node package manager) to install the dependencies of NEBULA. Navigate to the NEBULA respository:
```bash
cd /path/to/your/content/repository
npm install -g npm
```

### Local development build

Start the development server on `http://localhost:3000`:

```bash
# node package manager
npm run dev
```

Now you can open a browser and navigate to `http://localhost:3000/research-software-support`
