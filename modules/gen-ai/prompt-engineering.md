---
title: Prompt Engineering
type: reading
order: 2
---

## Prompt Engineering Framework

The better you can guide the AI model, the better results it will produce. The important aspects an AI model needs to know are:

> **Persona + Context + Task + Constraints + References**

Some aspects you usually set once (e.g. persona), some others you might need to refine in iterations and/or write out into a planning document that the AI model then ingests (e.g. context, tasks, constraints).

If your tool allows for it, do all of this is "planning mode", where the AI model is not allowed to write code yet. Execute only once you are satisfied with the plan, and have the AI model produce code in small, logical steps.

### 1. Define your Prompt

#### Persona

This sets the stage for how the LLM should approach problems to be solved. You usually set this once at the beginning of the discussion.

N.B.: The more the LLM models improve, the less important this will become.

Examples:
- "You are helping an RSE with ..."
- "You are a Python HPC expert specialized in ..."

#### Context

What are you trying to solve? What are all the important elements _surrounding_ your problem? Be as specific as possible.

Example:
- "I need to analyze 10GB of synthetic climate data. The data is in a Parquet file at `[/path/to/file.parquet]`. The data format is `[lat, long, temperature, humidity]`. I have 8 GB of RAM available, 8 CPU cores and 1 Radeon Vega 10 GPU."

#### Task

What is your desired end product? What exactly would you like the AI model to do? If you already know certain steps involved, mention them. Explain step-by-step if possible and be as detailed as you can. If you don't know certain aspects yet, ask them explicitly to discuss.

Example:
- "Design a Python script that smooths the data with a Gaussian mask of RMS radius 500m and calculates daily min, max and average temperatures. Walk me step-by-step through the architecture and discuss possible libraries and approaches."

#### Constraints

What are the boundary conditions of the problem? How should the AI model produce the code, and in which style?

Examples:
- "My laptop has 8GB of memory, which is less than the amount of data, so the processing must happen in chunks."
- "Spread the load across all CPU cores and the GPU, if possible"
- "Treat temperature values below -273.15°C as NaN"
- "Use type hinting and Google-style docstrings"

#### References

Is there something that the AI model can learn from? Tweaking existing code is _much_ easier than writing from scratch. That counts for both people and AI models.

Examples:
- "Similar code can be found here ..."
- "This is the API documentation of ..."

### 2. Evaluate

Does the AI model ask you the right questions? Does it seem on the right track? Examine the output carefully.

If it is making up facts ("hallucinations") or heading towards a wrong direction, you might need to ask the model to write out the current plan. You can tweak it later if necessary. Then you _destroy the models's context window_ (e.g. quitting the discussion), and start anew. Ask the AI model to read in the plan.

### 3. Iterate

Tweak the persona, rethink constraints or give more or different references.
