---
title: Introduction Slides
type: slides
order: 1
---

<style>
.reveal.overview {
  background-color: gray;
}
</style>

<!-- .slide: data-state="title blue_overlay yellow_flag yellow_strip purple_half_circle_bottom purple_blob right_e_top" -->
# Generative AI

### A Pilot

===

<!-- .slide: data-state="standard 10" -->

# Overview

==

<!-- .slide: data-state="standard 10" -->

## A Brief History of AI

<div style="font-size: smaller;">

- **1940s–1950s**: neural computation, Turing’s questions and early machine intelligence
- **1956 onward**: AI becomes a named research field, initially dominated by symbolic reasoning
- **1960s–1970s**: strong optimism, expert systems and public investment
- **AI winters**: limited computing, brittle systems, theoretical limits and unmet promises reduce confidence
- **1980s–2000s**: expert systems, statistical learning, better data and larger computation
- **2010s onward**: deep learning and foundation models enable broad generative capabilities
- **2022+**: Chat LLM's (OpenAI launches public ChatGPT)

</div>

==

<!-- .slide: data-state="standard 10" -->

## From AI to genAI

<div style="font-size:0.82em; text-align:left; padding:0.6rem 1rem 1rem; border:2px solid lightgray; border-radius:8px;">
  <strong>Artificial Intelligence</strong>
  <div class="fragment" data-fragment-index="0" style="margin-top:0.5rem; padding:0.6rem 1rem 1rem; border:2px solid lightgray; border-radius:8px;">
    <strong>Machine Learning</strong>
    <div class="fragment" data-fragment-index="1" style="margin-top:0.5rem; padding:0.6rem 1rem 1rem; border:2px solid lightgray; border-radius:8px;">
      <strong>Deep Learning</strong>
      <div class="fragment" data-fragment-index="2" style="margin-top:0.5rem; padding:0.6rem 1rem 1rem; background:lightgray; border-radius:8px;">
        <strong>Generative AI</strong>
        <div style="display:grid; grid-template-columns:repeat(4, 1fr); gap:1rem; margin-top:0.5rem; text-align:center;">
          <div style="padding:0.6rem; background:white; border-radius:8px; border:2px solid white;"><strong>Language models</strong></div>
          <div class="fragment semi-fade-out" data-fragment-index="3" style="padding:0.6rem; background:white; border-radius:8px; border:2px solid white;">Image models</div>
          <div class="fragment semi-fade-out" data-fragment-index="3" style="padding:0.6rem; background:white; border-radius:8px; border:2px solid white;">Audio models</div>
          <div class="fragment semi-fade-out" data-fragment-index="3" style="padding:0.6rem; background:white; border-radius:8px; border:2px solid white;">Video models</div>
        </div>
      </div>
    </div>
  </div>
</div>

Note:
- Most AI is not generative
- AI: expert systems, rule-based reasoning, search and planning, **and machine learning**
- Machine learning: linear regression, random forests, clustering, **and deep learning**
- Deep learning: image classifiers, speech recognition, anomaly detection, and **genAI**
- genAI: Many current models are multimodal and span several of the four types
- Simplifications:
  - Generative AI sits inside deep learning in practice today, not by definition (earlier generative methods such as Markov chains were not deep learning)
  - Not every language model is generative: encoder models such as BERT are used to classify and embed
- Language models are the focus of this module

==

<!-- .slide: data-state="standard 10" -->

## AI Capabilities

<style>
  .reveal .stepper .step { border: 2px solid lightgray; }
  .reveal .stepper .step.fragment.current-fragment { border-color: blue; }
  .reveal .stepper .step.first { border-color: blue; }
  .reveal .stepper .step.first.fragment.visible { border-color: lightgray; }
  .reveal .stepper.dim .step.fragment { opacity: 0.35; visibility: inherit; }
  .reveal .stepper .step.first.fragment,
  .reveal .stepper.dim .step.fragment.visible { opacity: 1; visibility: inherit; }
  .reveal .stepper .detail.fragment.current-visible:not(.current-fragment),
  .reveal .stepper .detail.fragment.fade-out.visible { display: none !important; }
</style>
<div class="stepper" style="min-height:18em; font-size:0.82em; text-align:left;">
  <div class="step first fragment" data-fragment-index="0" style="display:grid; grid-template-columns:7em repeat(3, 1fr); gap:1em; align-items:center; margin-bottom:0.5em; padding:0.5em 1em; background:lightgray; border-radius:8px;">
    <strong>Create</strong>
    <span>Generate</span>
    <span>Summarize</span>
    <span>Translate</span>
  </div>
  <div class="detail fragment fade-out" data-fragment-index="0" style="display:grid; grid-template-columns:7em repeat(3, 1fr); gap:1em; align-items:start; margin-bottom:0.8em; padding:0 1em; border:2px solid transparent;">
    <em style="color:gray;">e.g.</em>
    <span>Draft text, code, images, slides</span>
    <span>Papers, meeting notes, transcripts</span>
    <span>Languages, programming languages</span>
  </div>
  <div class="step fragment" data-fragment-index="0" style="display:grid; grid-template-columns:7em repeat(3, 1fr); gap:1em; align-items:center; margin-bottom:0.5em; padding:0.5em 1em; background:lightgray; border-radius:8px;">
    <strong>Understand</strong>
    <span>Classify</span>
    <span>Extract</span>
    <span>Detect</span>
  </div>
  <div class="detail fragment current-visible" data-fragment-index="0" style="display:grid; grid-template-columns:7em repeat(3, 1fr); gap:1em; align-items:start; margin-bottom:0.8em; padding:0 1em; border:2px solid transparent;">
    <em style="color:gray;">e.g.</em>
    <span>Publications, species, images, emails</span>
    <span>Metadata, entities, keywords</span>
    <span>Anomalies, fraud, tumors</span>
  </div>
  <div class="step fragment" data-fragment-index="1" style="display:grid; grid-template-columns:7em repeat(3, 1fr); gap:1em; align-items:center; margin-bottom:0.5em; padding:0.5em 1em; background:lightgray; border-radius:8px;">
    <strong>Find</strong>
    <span>Search</span>
    <span>Recommend</span>
    <span>Predict</span>
  </div>
  <div class="detail fragment current-visible" data-fragment-index="1" style="display:grid; grid-template-columns:7em repeat(3, 1fr); gap:1em; align-items:start; margin-bottom:0.8em; padding:0 1em; border:2px solid transparent;">
    <em style="color:gray;">e.g.</em>
    <span>Semantic search over documents</span>
    <span>Papers, resources</span>
    <span>Forecast outcomes with data</span>
  </div>
  <div class="step fragment" data-fragment-index="2" style="display:grid; grid-template-columns:7em repeat(3, 1fr); gap:1em; align-items:center; margin-bottom:0.5em; padding:0.5em 1em; background:lightgray; border-radius:8px;">
    <strong>Interact</strong>
    <span>Converse</span>
    <span>Reason</span>
    <span>Act</span>
  </div>
  <div class="detail fragment current-visible" data-fragment-index="2" style="display:grid; grid-template-columns:7em repeat(3, 1fr); gap:1em; align-items:start; margin-bottom:0.8em; padding:0 1em; border:2px solid transparent;">
    <em style="color:gray;">e.g.</em>
    <span>Chat assistants</span>
    <span>Solve problems, infer conclusions</span>
    <span>Use tools, execute workflows, control robots</span>
  </div>
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

<div style="display:grid; grid-template-columns:repeat(6, 1fr); gap:1rem; font-size:0.82em; text-align:left;">
  <div style="grid-column:span 2; padding:0.9rem; background:lightgray; border-radius:8px; border:2px solid lightgray;">
    <strong>💬 Planning / Sparring</strong>
    <p style="margin:0.4rem 0 0;">Discuss architecture, talk through trade-offs, get a second opinion on your design</p>
  </div>
  <div class="fragment" style="grid-column:span 2; padding:0.9rem; background:lightgray; border-radius:8px; border:2px solid lightgray;">
    <strong>⌨️ Tab Completion</strong>
    <p style="margin:0.4rem 0 0;">Inline suggestions as you type — low risk, high daily value</p>
  </div>
  <div class="fragment" style="grid-column:span 2; padding:0.9rem; background:lightgray; border-radius:8px; border:2px solid lightgray;">
    <strong>🧱 Code Block Generation</strong>
    <p style="margin:0.4rem 0 0;">Ask for a function, a regex, a test — review and integrate manually</p>
  </div>
  <div class="fragment" style="grid-column:span 3; padding:0.9rem; background:lightgray; border-radius:8px; border:2px solid blue;">
    <strong>🤖 Agentic Coding</strong>
    <p style="margin:0.4rem 0 0;">Model reads/writes files, runs tests, operates autonomously — <em>our focus today</em></p>
  </div>
  <div class="fragment" style="grid-column:span 3; padding:0.9rem; background:lightgray; border-radius:8px; border:2px solid lightgray;">
    <strong>🌟 Autonomous Agents</strong>
    <p style="margin:0.4rem 0 0;">Execute scheduled tasks, react to web hooks, no or little user interaction</p>
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
  <div class="fragment" style="padding:0.9rem; background:lightgray; border-radius:8px;">
    <strong>♻️ Refactoring</strong>
    <p>Restructure working code for readability, performance, or style — with tests in place first</p>
  </div>
  <div class="fragment" style="padding:0.9rem; background:lightgray; border-radius:8px;">
    <strong>🧪 Tests &amp; Docs</strong>
    <p>Generate unit tests and docstrings — read the tests, they reveal the model's assumptions</p>
  </div>
  <div class="fragment" style="padding:0.9rem; background:lightgray; border-radius:8px;">
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
- 🧮 Statistical reasoning — wrong tools/types, silent NA drops, off-by-one errors
- ✨ <strong>Looks correct ≠ works correctly</strong>

<p style="font-size:0.75em; color:chocolate; margin-top:1rem;">
  The output reads like it was written by a competent analyst. That is exactly the danger.
</p>


==

<!-- .slide: data-state="standard 10" -->

> "LLMs doesn't know they are wrong. They don't know anything. They are very good at sounding right."
>
> <span class="fragment" style="color: gray;">– Claude.ai, asked about LLMs</span>

Note:

Who said this quote?

LLMs are a **pattern matcher**, not reasoner:
- Hallucinations
- Overconfidence
- Domain Weakness

==

<!-- .slide: data-state="standard 10" -->

## Up-Skill rather than De-Skill

<style>
  .reveal .upskill .fragment.current-visible:not(.current-fragment) { display: none; }
  .reveal .upskill .fragment.fade-out.visible { display: none; }
</style>
<ul class="upskill" style="display:block; min-height:11em; font-size:0.82em; text-align:left;">
  <li><strong>Locate technical information quickly</strong>
    <ul class="fragment fade-out" data-fragment-index="0"><li>Instead of reading through multiple documentation pages, you can ask AI to find the relevant function, argument, or method for your task.</li></ul>
  </li>
  <li class="fragment" data-fragment-index="0"><strong>Summarise key concepts</strong>
    <ul class="fragment current-visible" data-fragment-index="0"><li>AI can condense long documentation into concise, understandable explanations. You can even ask AI to tailor explanations to your code and dataset.</li></ul>
  </li>
  <li class="fragment" data-fragment-index="1"><strong>Clarify ambiguous points</strong>
    <ul class="fragment current-visible" data-fragment-index="1"><li>You can follow up iteratively, asking AI to rephrase explanations or provide examples.</li></ul>
  </li>
  <li class="fragment" data-fragment-index="2"><strong>Code comprehension</strong>
    <ul class="fragment current-visible" data-fragment-index="2"><li>Paste code generated by AI or colleagues and ask for line-by-line explanations.</li></ul>
  </li>
  <li class="fragment" data-fragment-index="3"><strong>Contextual learning</strong>
    <ul class="fragment current-visible" data-fragment-index="3"><li>Ask why certain functions or methods are used, what alternatives exist, and best practices.</li></ul>
  </li>
</ul>

==

<!-- .slide: data-state="standard 10" -->

## Exercise 1: AI Battle (15 min)

===

<!-- .slide: data-state="standard 10" -->

# Access & Deployment

==

<!-- .slide: data-state="standard 10" -->

## Hosting

<style>
  .reveal .stepper .step { border: 2px solid lightgray; }
  .reveal .stepper .step.fragment.current-fragment { border-color: blue; }
  .reveal .stepper .step.first { border-color: blue; }
  .reveal .stepper .step.first.fragment.visible { border-color: lightgray; }
  .reveal .stepper.dim .step.fragment { opacity: 0.35; visibility: inherit; }
  .reveal .stepper .step.first.fragment,
  .reveal .stepper.dim .step.fragment.visible { opacity: 1; visibility: inherit; }
  .reveal .stepper .detail.fragment.current-visible:not(.current-fragment),
  .reveal .stepper .detail.fragment.fade-out.visible { display: none !important; }
</style>
<div class="stepper" style="min-height:17em; font-size:0.82em; text-align:left;">
  <div style="display:grid; grid-template-columns:1fr 1.4fr; gap:1em; margin-bottom:0.4em; padding:0 1em; border:2px solid transparent; font-size:0.8em; color:gray;"><span>Route</span><span>Useful when …</span></div>
  <div class="step first fragment" data-fragment-index="0" style="display:grid; grid-template-columns:1fr 1.4fr; gap:1em; align-items:center; margin-bottom:0.5em; padding:0.5em 1em; background:lightgray; border-radius:8px;">
    <strong>Commercial hosted service</strong>
    <span>Fast access and broad capability matter</span>
  </div>
  <div class="detail fragment fade-out" data-fragment-index="0" style="margin-bottom:0.8em; padding:0 1em; border:2px solid transparent;"><strong>Ask:</strong> What data is retained, where, for how long and under which terms?</div>
  <div class="step fragment" data-fragment-index="0" style="display:grid; grid-template-columns:1fr 1.4fr; gap:1em; align-items:center; margin-bottom:0.5em; padding:0.5em 1em; background:lightgray; border-radius:8px;">
    <strong>EU-hosted service</strong>
    <span>Jurisdiction, procurement or institutional policy matters</span>
  </div>
  <div class="detail fragment current-visible" data-fragment-index="0" style="margin-bottom:0.8em; padding:0 1em; border:2px solid transparent;"><strong>Ask:</strong> Which legal entity, subprocessors and service commitments apply?</div>
  <div class="step fragment" data-fragment-index="1" style="display:grid; grid-template-columns:1fr 1.4fr; gap:1em; align-items:center; margin-bottom:0.5em; padding:0.5em 1em; background:lightgray; border-radius:8px;">
    <strong>Institution-hosted service</strong>
    <span>Sensitive data or local integration matters</span>
  </div>
  <div class="detail fragment current-visible" data-fragment-index="1" style="margin-bottom:0.8em; padding:0 1em; border:2px solid transparent;"><strong>Ask:</strong> Who operates it, who can access logs and how is it maintained?</div>
  <div class="step fragment" data-fragment-index="2" style="display:grid; grid-template-columns:1fr 1.4fr; gap:1em; align-items:center; margin-bottom:0.5em; padding:0.5em 1em; background:lightgray; border-radius:8px;">
    <strong>Local model</strong>
    <span>Data must remain within a controlled environment</span>
  </div>
  <div class="detail fragment current-visible" data-fragment-index="2" style="margin-bottom:0.8em; padding:0 1em; border:2px solid transparent;"><strong>Ask:</strong> What quality, update, support and security trade-offs follow?</div>
</div>

Note:
- The routes run from most convenient (commercial) to most control (local)
- Open-weight models are a property of the model, not a hosting route: they can run on any of these routes
  - Useful when inspectability, adaptation or local execution matters
  - Ask: What do the licence, training-data disclosures and hardware needs permit?

==

<!-- .slide: data-state="standard 10" -->

## Residency vs Jurisdiction

- **Residency**: where the data is stored and processed
- **Jurisdiction**: whose law applies to the provider
- An EU datacenter run by a US company is still subject to the US CLOUD Act
- Also check: Data Processing Addendum (DPA), Zero Data Retention (ZDR), subprocessors, no training on your data

Note:
- DPA, ZDR - see Exercise 2 "Client Settings"
- Some LLM "vendors" offer models themselves, others are _routers_ that broker between you and other vendors
  - Now you have _two_ companies to check

==

<!-- .slide: data-state="standard 10" -->

## Cost Model

- **Subscription**: flat fee, usage limits
- **API**: pay per token, input and output priced separately
- Agentic use consumes far more tokens than chat — the whole context is re-sent every turn
  - Cache hits are cheaper, but cost still piles up
- Larger models cost more: match model size to the task

Note:
- Input tokens: what you type
- Output tokens: what the LLM returns
- Cache: input + output of previous turns
  - The agent processes _the entire conversation_ every turn
- Tips
  - Start a new conversation for a new topic
  - Use cheaper models for simpler tasks
  - Play with the "thinking" level of models

==

<!-- .slide: data-state="standard 10" -->

## A Framework for Tool Assessment

<div style="font-size: smaller;">

- **Purpose** What research task is being supported, and what would count as success?
- **Data** What information enters the system, and is it sensitive, personal, confidential or unpublished?
- **Control** Who can inspect, correct, stop and reproduce the workflow?
- **Evidence** How will quality, bias, uncertainty and failure be checked?
- **Governance** Which policies, licences, contracts and responsibilities apply?
- **Continuity** Can the work be rerun if the model, provider or interface changes?

</div>

===

<!-- .slide: data-state="standard 10" -->

# Security, Biases & Ethics

==

<!-- .slide: data-state="standard 10" -->

## A Risk Map for Research Support

<style>
  .reveal .stepper .step { border: 2px solid lightgray; }
  .reveal .stepper .step.fragment.current-fragment { border-color: blue; }
  .reveal .stepper .step.first { border-color: blue; }
  .reveal .stepper .step.first.fragment.visible { border-color: lightgray; }
  .reveal .stepper.dim .step.fragment { opacity: 0.35; visibility: inherit; }
  .reveal .stepper .step.first.fragment,
  .reveal .stepper.dim .step.fragment.visible { opacity: 1; visibility: inherit; }
  .reveal .stepper .detail.fragment.current-visible:not(.current-fragment),
  .reveal .stepper .detail.fragment.fade-out.visible { display: none !important; }
</style>
<div class="stepper dim" style="font-size:0.82em; text-align:left;">
  <div style="display:grid; grid-template-columns:repeat(12, 1fr); gap:0.6em;">
    <div class="step first fragment" data-fragment-index="0" style="grid-column:span 3; padding:0.5em 0.8em; background:lightgray; border-radius:8px;"><strong>🎯 Reliability</strong></div>
    <div class="step fragment" data-fragment-index="0" style="grid-column:span 3; padding:0.5em 0.8em; background:lightgray; border-radius:8px;"><strong>🔒 Privacy</strong></div>
    <div class="step fragment" data-fragment-index="1" style="grid-column:span 3; padding:0.5em 0.8em; background:lightgray; border-radius:8px;"><strong>🛡️ Security</strong></div>
    <div class="step fragment" data-fragment-index="2" style="grid-column:span 3; padding:0.5em 0.8em; background:lightgray; border-radius:8px;"><strong>⚖️ Bias</strong></div>
    <div class="step fragment" data-fragment-index="3" style="grid-column:span 4; padding:0.5em 0.8em; background:lightgray; border-radius:8px;"><strong>©️ Copyright</strong></div>
    <div class="step fragment" data-fragment-index="4" style="grid-column:span 4; padding:0.5em 0.8em; background:lightgray; border-radius:8px;"><strong>🔁 Reproducibility</strong></div>
    <div class="step fragment" data-fragment-index="5" style="grid-column:span 4; padding:0.5em 0.8em; background:lightgray; border-radius:8px;"><strong>🌱 Sustainability</strong></div>
  </div>
  <div style="display:grid; margin-top:1em;">
    <div class="fragment fade-out" data-fragment-index="0" style="grid-area:1/1; display:grid; grid-template-columns:1fr 1fr; gap:2em; padding:0 0.8em;">
      <div><strong>Typical failure</strong><br>Plausible but false claims, fabricated references or buggy code</div>
      <div><strong>Support response</strong><br>Require source checking, tests, domain review and uncertainty labels</div>
    </div>
    <div class="fragment current-visible" data-fragment-index="0" style="grid-area:1/1; display:grid; grid-template-columns:1fr 1fr; gap:2em; padding:0 0.8em;">
      <div><strong>Typical failure</strong><br>Sensitive prompts or files reach an external provider</div>
      <div><strong>Support response</strong><br>Classify data, use approved environments and minimise inputs</div>
    </div>
    <div class="fragment current-visible" data-fragment-index="1" style="grid-area:1/1; display:grid; grid-template-columns:1fr 1fr; gap:2em; padding:0 0.8em;">
      <div><strong>Typical failure</strong><br>Prompt injection, malicious content, unsafe tool calls or leaked secrets</div>
      <div><strong>Support response</strong><br>Limit permissions, sandbox actions and review connected tools</div>
    </div>
    <div class="fragment current-visible" data-fragment-index="2" style="grid-area:1/1; display:grid; grid-template-columns:1fr 1fr; gap:2em; padding:0 0.8em;">
      <div><strong>Typical failure</strong><br>Training data or evaluation gaps shape outputs</div>
      <div><strong>Support response</strong><br>Examine affected groups, document limitations and seek domain expertise</div>
    </div>
    <div class="fragment current-visible" data-fragment-index="3" style="grid-area:1/1; display:grid; grid-template-columns:1fr 1fr; gap:2em; padding:0 0.8em;">
      <div><strong>Typical failure</strong><br>Outputs or training data create unclear reuse conditions</div>
      <div><strong>Support response</strong><br>Check licences, provenance, attribution and institutional guidance</div>
    </div>
    <div class="fragment current-visible" data-fragment-index="4" style="grid-area:1/1; display:grid; grid-template-columns:1fr 1fr; gap:2em; padding:0 0.8em;">
      <div><strong>Typical failure</strong><br>Model, prompt, retrieval context or interface changes</div>
      <div><strong>Support response</strong><br>Record versions, inputs, settings, outputs and review decisions</div>
    </div>
    <div class="fragment current-visible" data-fragment-index="5" style="grid-area:1/1; display:grid; grid-template-columns:1fr 1fr; gap:2em; padding:0 0.8em;">
      <div><strong>Typical failure</strong><br>Resource-intensive computation or duplicated infrastructure</div>
      <div><strong>Support response</strong><br>Match model size and frequency to the task; prefer proportionate use</div>
    </div>
  </div>
</div>

Note:
- Privacy includes confidentiality
- Bias includes representativeness
- Copyright includes licensing

==

<!-- .slide: data-state="standard 10" -->

## The Lethal Trifecta

Dangerous when an agent has **all three**:

1. Access to private data 🔐
2. Exposure to untrusted content (web pages, issues, emails, files) 🌐
3. A way to communicate externally 📤

<br>
<br>

<ul>
  <li class="fragment">Remove one leg, and prompt injection loses most of its teeth.</li>
  <li class="fragment">Sandboxing can help protecting against injection <em>and</em> mistakes.</li>
</ul>

==

<!-- .slide: data-state="standard 10" -->

## Licensing

- Purely AI-generated output is likely not copyrightable (US and EU)
- Open-source licences rely on copyright, so licensing purely AI-written code is shaky
- Generated code may reproduce licensed code verbatim
  - Snippet scanners exist (e.g. SCANOSS), but tooling is immature
  - Vendor "public code" filters and indemnities shift liability, but don't guarantee clean code
- Some open-source projects restrict or ban AI-generated contributions

==

<!-- .slide: data-state="standard 10" -->

## Exercise 2: Checking AI Client Settings (15 mins)

===

<!-- .slide: data-state="standard 10" -->

# Practice

==

<!-- .slide: data-state="standard 10" -->

##  Good Practices

1. Before touching code, discuss the architecture with the AI — it's a good sparring partner
2. Ask it to review your plan and surface edge cases you haven't considered
3. Supply links to relevant documentation in your prompt
4. Write the agreed plan to a file — this becomes compact context for future sessions

Note:
- Also see tab "Prompt Engineering"

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

Note:
- The better models get, the less important the "Role" becomes

==

<!-- .slide: data-state="standard 10" -->

## Prompt Engineering Tips

<div style="font-size: smaller;">

- Start broad ➜ discuss ➜ refine ➜ add constraints before implementation
- Ambiguity during <em>implementation</em> is dangerous — be precise about signatures, types, return values
- Ask for <strong>options</strong>: "Give me three approaches and their trade-offs"
- Ask for <strong>steps</strong>: "Walk me through this optimisation step by step"
- Provide <strong>examples</strong>: "This R function does X — implement the equivalent in Python"
- Explaining the problem clearly helps <em>you</em> understand it better too

</div>

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

==

<!-- .slide: data-state="keepintouch" -->

[www.esciencecenter.nl](https://www.esciencecenter.nl)

info@esciencecenter.nl

020 - 460 47 70
