---
title: Introduction Slides
type: slides
order: 1
---

<!-- .slide: data-state="title blue_overlay yellow_flag yellow_strip purple_half_circle_bottom purple_blob right_e_top" -->
# Generative AI

===

<!-- .slide: data-state="standard 10" -->

## A Brief History of AI

- **1940s–1950s**: neural computation, Turing’s questions and early machine intelligence
- **1956 onward**: AI becomes a named research field, initially dominated by symbolic reasoning
- **1960s–1970s**: strong optimism, expert systems and public investment
- **AI winters**: limited computing, brittle systems, theoretical limits and unmet promises reduce confidence
- **1980s–2000s**: expert systems, statistical learning, better data and larger computation
- **2010s onward**: deep learning and foundation models enable broad generative capabilities
- **2022+**: Chat LLM's (OpenAI launches public ChatGPT)

===

<!-- .slide: data-state="standard 10" -->

## The AI Family Tree

AI can be visualised as a set of nested fields. Each inner layer represents a more specific set of techniques within the broader area.

```
┌─────────────────────────────────────────┐
│  Artificial Intelligence                │
│  ┌───────────────────────────────────┐  │
│  │  Machine Learning                 │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │  Deep Learning              │  │  │
│  │  │ ┌───────────────────────┐   │  │  │
│  │  │ │Generative AI(e.g.LLMs)│   │  │  │
│  │  │ └───────────────────────┘   │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

===

<!-- .slide: data-state="standard 10" -->

## Gen AI Tree

```
Artificial Intelligence
└── Machine Learning
    └── Deep Learning
        └── Generative AI
            ├── Language models
            ├── Image models
            ├── Audio models
            └── Video models
```

===

<!-- .slide: data-state="standard 10" -->

## AI Capabilities

<div style="font-size: x-large">

| AI Capability | Example |
| ------------- | ------- |
| Generate | Draft text, code, images, slides |
| Summarize | Papers, meeting notes, transcripts |
| Classify | Publications, species, images, emails |
| Extract | Metadata, entities, keywords |
| Translate | Languages, programming languages |
| Search | Semantic search over documents |
| Recommend | Papers, resources |
| Predict | Forecast outcomes with data |
| Detect | Anomalies, fraud, tumors |
| Converse | Chat assistants |
| Reason | Solve problems, infer conclusions |
| Act | Use tools, execute workflows, control robots |

</div>

===

<!-- .slide: data-state="standard 10" -->

## Four roles for AI in research

1. Research object: study AI systems, data, behaviour or impacts
2. Research instrument: use AI to measure, classify, generate or analyse
3. Research co-creator: use AI during ideation, drafting or interpretation
4. Research infrastructure: embed AI in services, repositories, portals or workflows

===

<!-- .slide: data-state="standard 10" -->

## How GenAI fits in your workflow

- 💬 Planning / Sparring
  - Discuss architecture, talk through trade-offs, get a second opinion on your design
- ⌨️ Tab Completion
  - Inline suggestions as you type — low risk, high daily value
- 🧱 Code Block Generation
  - Ask for a function, a regex, a test — review and integrate manually
- 🤖 Agentic Coding
  - Model reads/writes files, runs tests, operates autonomously — our focus today
- 🌟 Autonomous Agents
  - Execute scheduled tasks, react to web hooks, no or little user interaction

===

<!-- .slide: data-state="standard 10" -->

## What You Can Use It For Today



- 🔍 Code Explanation
  - Paste unfamiliar code and ask for a walkthrough — useful for legacy scripts or inherited projects
- ♻️ Refactoring
  - Restructure working code for readability, performance, or style — with tests in place first
- 🧪 Tests & Docs
  - Generate unit tests and docstrings — read the tests, they reveal the model's assumptions
- 🚀 DevOps
  - CI config, Dockerfiles, environment files — well-covered territory with high AI reliability

===

<!-- .slide: data-state="standard 10" -->

# Strengths & Weaknesses

===

<!-- .slide: data-state="standard 10" -->

## Well Suited

- 🧑‍💻 Sparring partner / pair programmer / junior dev
- ⚗️ Prototyping and exploring unfamiliar territory
- 🤖 Automating repetitive or tedious tasks
- 🌐 Popular frameworks and languages (Python, tidyverse, SQL…)
- 🔍 Sifting through log files and stack traces
- 📚 Learning about new-to-you technologies
- 🔣 Regex (genuinely very good at this)

===

<!-- .slide: data-state="standard 10" -->

## Dangerous Territory

- 📜 Gigantic inputs — clobbers the context window
- 🔮 Used as an oracle or on autopilot
- 📈 Feature creep — it will enthusiastically build things you didn't ask for
- 🧩 Niche frameworks and languages
- 🧮 Statistical reasoning — wrong df, silent NA drops, off-by-one lags
- ✨ Looks correct ≠ works correctly
  - The output reads like it was written by a competent analyst. That is exactly the danger.

===

<!-- .slide: data-state="standard 10" -->

## Up-Skill rather than De-Skill


- Locate technical information quickly: Instead of reading through multiple documentation pages, you can ask AI to find the relevant function, argument, or method for your task.
- Summarise key concepts: AI can condense long documentation into concise, understandable explanations. You can even ask AI to tailor explanations to you code and dataset.
- Clarify ambiguous points: You can follow up iteratively, asking AI to rephrase explanations or provide examples.
- Code comprehension: Paste code generated by AI or colleagues and ask for line-by-line explanations.
- Contextual learning: Ask why certain functions or methods are used, what alternatives exist, and best practices.

===

<!-- .slide: data-state="standard 10" -->

## Excercise 1: AI Battle (20 min)


Use arena.ai in battle mode — two AIs answer the same prompt, you vote for the better response.

Round 1 — "Easy" (5 min)

I plan to wash my car. The car wash is 50m away. Should I take the car or go by foot?

Round 2 — "Complicated" (10 min)

I have 10GB of spectral measurement data I'd like to analyze. Which programming language should I use, and why?

This is intentionally incomplete — iterate, add constraints, push for a concrete architecture.

Reflection (5 min) — discuss with your neighbour: where did they do well? Where did they struggle? Did either model ever admit uncertainty?

===

<!-- .slide: data-state="standard 10" -->

## Access and deployment

<div style="font-size: large">

| Route | Useful when | Questions for support |
|---|---|---|
| Commercial hosted service | Fast access and broad capability matter | What data is retained, where, for how long and under which terms? |
| EU-hosted service | Jurisdiction, procurement or institutional policy matters | Which legal entity, subprocessors and service commitments apply? |
| Institution-hosted service | Sensitive data or local integration matters | Who operates it, who can access logs and how is it maintained? |
| Open-weight model | Inspectability, adaptation or local execution matters | What do the licence, training-data disclosures and hardware needs permit? |
| Local model | Data must remain within a controlled environment | What quality, update, support and security trade-offs follow? |

</div>

===

<!-- .slide: data-state="standard 10" -->

## A Framework for Tool Assessment

- Purpose: What research task is being supported, and what would count as success?
- Data: What information enters the system, and is it sensitive, personal, confidential or unpublished?
- Control: Who can inspect, correct, stop and reproduce the workflow?
- Evidence: How will quality, bias, uncertainty and failure be checked?
- Governance: Which policies, licences, contracts and responsibilities apply?
- Continuity: Can the work be rerun if the model, provider or interface changes?

===

<!-- .slide: data-state="standard 10" -->

# Security, Biases & Ethics

===

<!-- .slide: data-state="standard 10" -->

## A Risk Map for Research Support

<div style="font-size: large">

| Risk | Typical failure | Support response |
|---|---|---|
| Reliability | Plausible but false claims, fabricated references or buggy code | Require source checking, tests, domain review and uncertainty labels |
| Privacy and confidentiality | Sensitive prompts or files reach an external provider | Classify data, use approved environments and minimise inputs |
| Security | Prompt injection, malicious content, unsafe tool calls or leaked secrets | Limit permissions, sandbox actions and review connected tools |
| Bias and representativeness | Training data or evaluation gaps shape outputs | Examine affected groups, document limitations and seek domain expertise |
| Copyright and licensing | Outputs or training data create unclear reuse conditions | Check licences, provenance, attribution and institutional guidance |
| Reproducibility | Model, prompt, retrieval context or interface changes | Record versions, inputs, settings, outputs and review decisions |
| Sustainability | Resource-intensive computation or duplicated infrastructure | Match model size and frequency to the task; prefer proportionate use |

</div>

===

<!-- .slide: data-state="standard 10" -->

## Excercise 2: Checking AI Client Settings

Choose ChatGPT, Copilot or another available system.
Find and record:

- Check the settings:
  - Find a setting about reusing your content for training?
- Find which model you are using
  - See the differences between lighter and heavier models
- Look up information about the model
- Find documentation of how model applies privacy & security (GDPR)

(Coding With AI Lession: https://southampton-rsg-training.github.io/coding-with-ai/2-ai-assisted-coding.html )

===

<!-- .slide: data-state="standard 10" -->

##  Good Practices

1. Before touching code, discuss the architecture with the AI — it's a good sparring partner
1. Ask it to review your plan and surface edge cases you haven't considered
1. Supply links to relevant documentation in your prompt
1. Write the agreed plan to a file — this becomes compact context for future sessions

===

<!-- .slide: data-state="standard 10" -->

## The Prompt Framework

**Role + Context + Task + Constraints + References**

- Role, "You are helping an RSE writing a data analysis pipeline in Python…"
- Context, Hardware, data format, scale, existing codebase, language/version
- Task, Specific, measurable outcome — not "make it faster", but "reduce runtime below 30s on 10GB input"
- Constraints, Memory limits, coding conventions, libraries allowed, what must not change
- References, Package docs, similar code, API specs — especially for niche libraries

===

<!-- .slide: data-state="standard 10" -->

## Prompt Engineering Tips

- Start broad ➜ discuss ➜ refine ➜ add constraints before implementation
- Ambiguity during implementation is dangerous — be precise about signatures, types, return values
- Ask for options: "Give me three approaches and their trade-offs"
- Ask for steps: "Walk me through this optimisation step by step"
- Provide examples: "This R function does X — implement the equivalent in Python"
- Explaining the problem clearly helps you understand it better too

===

<!-- .slide: data-state="standard 10" -->

## Transparency about AI

Record, where relevant:

- purpose and research activity
- tool, provider, model and access route
- date or version information
- data or context supplied
- material generated, transformed or evaluated
- human review and verification performed
- limitations, uncertainty and unresolved concerns
- how the use affected authorship, attribution or interpretation

===

<!-- .slide: data-state="standard 10" -->

## Excercise 3: AI Declaration Tool (10 min)

Use the AI Declaration tool: https://ai-declaration.org/

===

<!-- .slide: data-state="standard 10" -->

## Sources and further reading:


Primary lesson materials used for the comparison:

- [Ethics, Reliability and Security](https://github.com/esciencecenter-digital-skills/coding-with-ai/blob/add_good_practices/episodes/3-ethics-reliability-and-security.md)
- [Good Practices](https://github.com/esciencecenter-digital-skills/coding-with-ai/blob/add_good_practices/episodes/4-good-practices.md)
- [GenAI implications for novices](https://carpentries-incubator.github.io/genai-implications-novice/index.html)
- [AI fundamentals for researchers](https://southampton-rsg-training.github.io/ai-fundamentals-for-researchers/index.html)
- [Open-source and open-data GenAI slides](https://cbds.gitlab.io/estp_2026/open-source-open-data/slides/genAI/index.html)
- [CodeRefinery: Responsible Use of Generative AI in Assisted Coding](https://coderefinery.github.io/coding-with-ai/)

Additional supporting references consulted:

- [Southampton: Coding with AI](https://southampton-rsg-training.github.io/coding-with-ai/)
- [Southampton: Developing Research Software with AI Tools](https://southampton-rsg-training.github.io/research-software-ai-tools/aio.html)
- [Carpentries: Responsible machine learning in Python](https://carpentries-incubator.github.io/machine-learning-responsible-python/)
- [Carpentries: Building Better Research Software](https://carpentries-incubator.github.io/fair-research-software/)

===

<!-- .slide: data-state="standard 10" -->

## Key Takeaways

- Generative AI is a changing capability family.
- Good advice starts with purpose, data, control, evidence, governance and continuity.
- Human review, domain knowledge and reproducible records remain central.
- Tool choice should follow the research workflow and institutional context.
- Research support professionals can turn broad principles into practical routes for safe, FAIR and sustainable use.

===

<!-- .slide: data-state="keepintouch" -->

[www.esciencecenter.nl](https://www.esciencecenter.nl)

info@esciencecenter.nl

020 - 460 47 70
