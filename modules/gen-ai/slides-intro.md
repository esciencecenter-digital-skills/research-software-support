---
title: Introduction Slides
type: slides
order: 1
---

<!-- .slide: data-state="title blue_overlay yellow_flag yellow_strip purple_half_circle_bottom purple_blob right_e_top" -->
# Generative AI

### A Pilot

===

<!-- .slide: data-state="standard 10" -->

# Overview

==

<!-- .slide: data-state="standard 10" -->

## A Brief History of AI

- **1940s–1950s**: neural computation, Turing’s questions and early machine intelligence
- **1956 onward**: AI becomes a named research field, initially dominated by symbolic reasoning
- **1960s–1970s**: strong optimism, expert systems and public investment
- **AI winters**: limited computing, brittle systems, theoretical limits and unmet promises reduce confidence
- **1980s–2000s**: expert systems, statistical learning, better data and larger computation
- **2010s onward**: deep learning and foundation models enable broad generative capabilities
- **2022+**: Chat LLM's (OpenAI launches public ChatGPT)

==

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

==

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

==

<!-- .slide: data-state="standard 10" -->

## Four roles for AI in research

1. Research object: study AI systems, data, behaviour or impacts
2. Research instrument: use AI to measure, classify, generate or analyse
3. Research co-creator: use AI during ideation, drafting or interpretation
4. Research infrastructure: embed AI in services, repositories, portals or workflows

==

<!-- .slide: data-state="standard 10" -->

## What is an LLM?

- Predicts the next token, one at a time: fluent ≠ true
- Non-deterministic: same prompt, different answers
- Frozen at a training cutoff: doesn't know the latest library versions
- No separation between instructions and data: everything is just text in the context
- Context window: everything the model "sees" — fills up, degrades, gets compacted

==

<!-- .slide: data-state="standard 10" -->

## Agent = Model + Harness

- **Model**: the LLM, stateless, only produces text
- **Harness**: the loop around it — runs tools, enforces permissions, manages context
  - Tools: file edits, shell, web search, MCP servers
  - Skills and instruction files `AGENTS.md`
  - "Memory" is just files fed back into the context


==

<!-- .slide: data-state="standard 10" -->

## How GenAI fits in your workflow

<div style="display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; font-size:0.82em; text-align:left;">
  <div style="padding:1rem; background:lightgray; border-radius:8px;">
    <strong>💬 Planning / Sparring</strong>
    <p>Discuss architecture, talk through trade-offs, get a second opinion on your design</p>
  </div>
  <div style="padding:1rem; background:lightgray; border-radius:8px;">
    <strong>⌨️ Tab Completion</strong>
    <p>Inline suggestions as you type — low risk, high daily value</p>
  </div>
  <div style="padding:1rem; background:lightgray; border-radius:8px;">
    <strong>🧱 Code Block Generation</strong>
    <p>Ask for a function, a regex, a test — review and integrate manually</p>
  </div>
  <div style="padding:1rem; background:lightgray; border-radius:8px; border: 2px solid blue;">
    <strong>🤖 Agentic Coding</strong>
    <p>Model reads/writes files, runs tests, operates autonomously — <em>our focus today</em></p>
  </div>
  <div style="padding:1rem; background:lightgray; border-radius:8px;">
    <strong>🌟 Autonomous Agents</strong>
    <p>Execute scheduled tasks, react to web hooks, no or little user interaction</p>
  </div>
</div>

Note:
- Different risk profiles per use-case

==

<!-- .slide: data-state="standard 10" -->

## What You Can Use It For Today

<div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; font-size:0.82em; text-align:left;">
  <div style="padding:0.9rem; background:lightgray; border-radius:8px;">
    <strong>🔍 Code Explanation</strong>
    <p>Paste unfamiliar code and ask for a walkthrough — useful for legacy scripts or inherited projects</p>
  </div>
  <div style="padding:0.9rem; background:lightgray; border-radius:8px;">
    <strong>♻️ Refactoring</strong>
    <p>Restructure working code for readability, performance, or style — with tests in place first</p>
  </div>
  <div style="padding:0.9rem; background:lightgray; border-radius:8px;">
    <strong>🧪 Tests &amp; Docs</strong>
    <p>Generate unit tests and docstrings — read the tests, they reveal the model's assumptions</p>
  </div>
  <div style="padding:0.9rem; background:lightgray; border-radius:8px;">
    <strong>🚀 DevOps</strong>
    <p>CI config, Dockerfiles, environment files — well-covered territory with high AI reliability</p>
  </div>
</div>

===

<!-- .slide: data-state="standard 10" -->

# Strengths & Weaknesses

==

<!-- .slide: data-state="standard 10" -->

## Well Suited

- 🧑‍💻 Sparring partner / pair programmer / junior dev
- ⚗️ Prototyping and exploring unfamiliar territory
- 🤖 Automating repetitive or tedious tasks
- 🌐 Popular frameworks and languages (Python, tidyverse, SQL…)
- 🔍 Sifting through log files and stack traces
- 📚 Learning about new-to-you technologies
- 🔣 Regex (genuinely very good at this)

==

<!-- .slide: data-state="standard 10" -->

## Dangerous Territory

- 📜 Gigantic inputs — clobbers the context window
- 🔮 Used as an oracle or on autopilot
- 📈 Feature creep — it will enthusiastically build things you didn't ask for
- 🧩 Niche frameworks and languages
- 🧮 Statistical reasoning — wrong df, silent NA drops, off-by-one lags
- ✨ <strong>Looks correct ≠ works correctly</strong>
  - The output reads like it was written by a competent analyst. That is exactly the danger.

<p style="font-size:0.75em; color:chocolate; margin-top:1rem;">
  The output reads like it was written by a competent analyst. That is exactly the danger.
</p>


==

<!-- .slide: data-state="standard 10" -->

> "It doesn't know it's wrong. It doesn't know anything. It's very good at sounding right."
> <span class="fragment" style="color: gray;">– Claude.ai</span>

Note:

**Pattern matcher**, not reasoner

- Hallucinations
- Overconfidence
- Domain Weakness

==

<!-- .slide: data-state="standard 10" -->

## Up-Skill rather than De-Skill


- Locate technical information quickly: Instead of reading through multiple documentation pages, you can ask AI to find the relevant function, argument, or method for your task.
- Summarise key concepts: AI can condense long documentation into concise, understandable explanations. You can even ask AI to tailor explanations to you code and dataset.
- Clarify ambiguous points: You can follow up iteratively, asking AI to rephrase explanations or provide examples.
- Code comprehension: Paste code generated by AI or colleagues and ask for line-by-line explanations.
- Contextual learning: Ask why certain functions or methods are used, what alternatives exist, and best practices.

==

<!-- .slide: data-state="standard 10" -->

## Exercise 1: AI Battle (15 min)

===

<!-- .slide: data-state="standard 10" -->

# Access & Deployment

==

<!-- .slide: data-state="standard 10" -->

<div style="font-size: large">

| Route | Useful when | Questions for support |
|---|---|---|
| Commercial hosted service | Fast access and broad capability matter | What data is retained, where, for how long and under which terms? |
| EU-hosted service | Jurisdiction, procurement or institutional policy matters | Which legal entity, subprocessors and service commitments apply? |
| Institution-hosted service | Sensitive data or local integration matters | Who operates it, who can access logs and how is it maintained? |
| Open-weight model | Inspectability, adaptation or local execution matters | What do the licence, training-data disclosures and hardware needs permit? |
| Local model | Data must remain within a controlled environment | What quality, update, support and security trade-offs follow? |

</div>

==

<!-- .slide: data-state="standard 10" -->

## Residency vs Jurisdiction

- **Residency**: where the data is stored and processed
- **Jurisdiction**: whose law applies to the provider
- An EU datacenter run by a US company is still subject to the US CLOUD Act
- Also check: DPA, subprocessors, retention, no training on your data, zero data retention (ZDR)

==

<!-- .slide: data-state="standard 10" -->

## Cost Model

- **Subscription**: flat fee, usage limits
- **API**: pay per token, input and output priced separately
- Agentic use consumes far more tokens than chat — the whole context is re-sent every turn
  - Cache hits are cheaper, but cost still piles up
- Larger models cost more: match model size to the task

==

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

==

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

==

<!-- .slide: data-state="standard 10" -->

## The Lethal Trifecta

Dangerous when an agent has **all three**:

1. 🔐 Access to private data
2. 🌐 Exposure to untrusted content (web pages, issues, emails, files)
3. 📤 A way to communicate externally

Remove one leg, and prompt injection loses most of its teeth.

Sandboxing can help protecting against injection _and_ mistakes

==

<!-- .slide: data-state="standard 10" -->

## Licensing

- Purely AI-generated output is likely not copyrightable (US and EU)
- Open-source licences rely on copyright, so licensing purely AI-written code is shaky
- Generated code may reproduce licensed code verbatim
  - Snippet scanners exist (e.g. SCANOSS), but tooling is immature
  - Vendor "public code" filters and indemnities shift liability, they don't guarantee clean code
- Some open-source projects restrict or ban AI-generated contributions

==

<!-- .slide: data-state="standard 10" -->

## Exercise 2: Checking AI Client Settings (15 mins)

===

<!-- .slide: data-state="standard 10" -->

# Practice

==

<!-- .slide: data-state="standard 10" -->

# Good Practices

===

<!-- .slide: data-state="standard 10" -->

##  Good Practices

1. Before touching code, discuss the architecture with the AI — it's a good sparring partner
2. Ask it to review your plan and surface edge cases you haven't considered
3. Supply links to relevant documentation in your prompt
4. Write the agreed plan to a file — this becomes compact context for future sessions

==

<!-- .slide: data-state="standard 10" -->

## The Prompt Framework

**Role + Context + Task + Constraints + References**

<table style="width:100%; border-collapse:collapse; font-size: smaller;">
  <tr>
    <td style="padding:0.4rem 0.8rem; color:blue; white-space:nowrap;"><strong>Role</strong></td>
    <td style="padding:0.4rem 0.8rem;">"You are helping an RSE writing a data analysis pipeline in Python…"</td>
  </tr>
  <tr>
    <td style="padding:0.4rem 0.8rem; color:blue; white-space:nowrap;"><strong>Context</strong></td>
    <td style="padding:0.4rem 0.8rem;">Hardware, data format, scale, existing codebase, language/version</td>
  </tr>
  <tr>
    <td style="padding:0.4rem 0.8rem; color:blue; white-space:nowrap;"><strong>Task</strong></td>
    <td style="padding:0.4rem 0.8rem;">Specific, measurable outcome — not "make it faster", but "reduce runtime below 30s on 10GB input"</td>
  </tr>
  <tr>
    <td style="padding:0.4rem 0.8rem; color:blue; white-space:nowrap;"><strong>Constraints</strong></td>
    <td style="padding:0.4rem 0.8rem;">Memory limits, coding conventions, libraries allowed, what must not change</td>
  </tr>
  <tr>
    <td style="padding:0.4rem 0.8rem; color:blue; white-space:nowrap;"><strong>References</strong></td>
    <td style="padding:0.4rem 0.8rem;">Package docs, similar code, API specs — especially for niche libraries</td>
  </tr>
</table>

==

<!-- .slide: data-state="standard 10" -->

## Prompt Engineering Tips

- Start broad ➜ discuss ➜ refine ➜ add constraints before implementation
- Ambiguity during <em>implementation</em> is dangerous — be precise about signatures, types, return values
- Ask for <strong>options</strong>: "Give me three approaches and their trade-offs"
- Ask for <strong>steps</strong>: "Walk me through this optimisation step by step"
- Provide <strong>examples</strong>: "This R function does X — implement the equivalent in Python"
- Explaining the problem clearly helps <em>you</em> understand it better too

Note:
- Writing a good prompt _requires the same clarity as writing a good specification_.
- If you can't write a good specification, you have not fully defined the problem yet.

==

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

==

<!-- .slide: data-state="standard 10" -->

## Exercise 3: AI Declaration Tool (15 min)

===

<!-- .slide: data-state="standard 10" -->

# Wrap-Up

==

<!-- .slide: data-state="standard 10" -->

## Key Takeaways

- Generative AI is a changing capability family.
- Good advice starts with purpose, data, control, evidence, governance and continuity.
- Human review, domain knowledge and reproducible records remain central.
- Tool choice should follow the research workflow and institutional context.
- Research support professionals can turn broad principles into practical routes for safe, FAIR and sustainable use.

<!-- .slide: data-state="keepintouch" -->

[www.esciencecenter.nl](https://www.esciencecenter.nl)

info@esciencecenter.nl

020 - 460 47 70
