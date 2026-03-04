---
layout: single
title: "Demystifying LLM Workflows For The Average Human"
excerpt: "What does it mean to 'use AI' anyway?"
date: 2026-03-03
tags: [llm, ai, patterns]
---

<a href="/assets/images/stock-photo.jpg" data-featherlight="image">
  <img src="/assets/images/stock-photo.jpg" alt="A free stock photo. I think it's nice." style="max-width: 100%; height: auto;" />
</a>

The cardinal sin of the current AI era is, in my opinion, the mystification of process. Mystification breeds both wonder and fear of fraud, each well-justified. Tech has always presented itself as a kind of sorcery to the end user, but neural networks add an entire new layer of opacity; even for engineers, cracking open a single node in a neural net won’t tell you too much about what decisions the whole network is making. This is also what’s so interesting about LLMs; it’s very different than working with other machines, where you are the pattern-matcher and the program is a tool that reliably executes the instructions it’s given. 

Instead, it’s two pattern-matchers working in parallel. One with a vast corpus of data from which to draw relationships, the other with a stronger understanding of context and, more importantly, the ability to rapidly cycle between contexts while retaining important information. This, of course, isn’t a post about the special spark that separates humans from machines, but a process observation. The ability to make machines that do specific, bounded tasks better than humans is trivial. In the blue-collar world, McDonald’s has largely automated each step of the combo meal process, but the transitions between the contexts, assembling a coherent end product like a tray resembling the order and resolving complex edge cases (strange, custom orders, for example), are handled by humans.

It’s not that different here, we’re just in a white-collar context. So let’s demystify the process of what “using AI” looks like for the vast majority of current use cases. 

**The Prompt:** You ask the model to do something. It does it. Or, if it thinks you’re naughty, tells you it can’t do it. You can add constraints and details to try to influence the output. It probably won’t give you exactly what you need. This is okay. You’re the last-mile truck in the supply chain. 

**Evaluate Output:** Did the model give you what you wanted or something close enough to it that you can work from it? If not, try again. Did it understand your request?  To create novel output, LLMs need to be wrong sometimes. It might be wrong now. The more familiar you are with the subject, the more likely you are to catch these mistakes. If you’re uncertain, ask for citations or run the code somewhere it won’t cause a catastrophe.  

**You Made A Mistake?:** Sometimes it’s correct and your hunch is wrong. You’ve probably been wrong before. It’s okay. Make the adjustments.

**It’s Hallucinating?**: You have struck a valuable blow for the human resistance. Now what? There are a few directions you can take here depending on just how wacky the output was. You can tell the model you caught it. It’ll probably say something like “Good catch” and then give you some output that may or may not also be a hallucination. You can try to help it by narrowing the constraints You can salvage what’s usable if you’re confident in its validity Or you can solve the problem using different tools. LLMs are not AGI, after all.  

**Apply Output:** Utilize what it gave you. I recommend implementing it in your own way rather than copying and pasting it. Do you understand what it did? If not, ask the model to walk you through each step of what it did. You may have to verify that as well. 

Agents introduce some qualitative changes to the workflow, which we can revisit at a later date.

