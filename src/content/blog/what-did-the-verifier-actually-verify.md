---
title: "What Did the Verifier Actually Verify?"
date: 2026-10-12
description: "OpenAI announced a proof of one of the Millennium Prize Problems and published a computer-checked formalization beside it. A month later, three researchers argued the two don't say the same thing — and pointed at a question at the heart of all formal verification."
author: Dale Joseph
---

A proof checker can verify an argument without verifying that it answers the question we intended to ask.

That is not a criticism of the tool. It is a precise description of what the tool does — and of what it leaves open.

On September 8, 2026, OpenAI announced what it presented as a solution to the Navier-Stokes problem, one of the seven Clay Millennium Prize Problems: the question of whether the equations that describe how fluids move can, starting from a smooth state, develop a singularity — a point where the mathematics breaks down — in finite time. Alongside a written proof, the company published a formal statement and proof in Lean, a language a computer can check. "We're sharing both a writeup of the proof and a formalization in Lean," the announcement read, and: "Lean formalization and verification took an additional 17 hours."

On October 6, three researchers posted a preprint arguing that the formalization does not correspond to the written proof. Their claim is about correspondence, not correctness.

---

## What a proof checker checks

Lean is a proof assistant. You hand it a mathematical statement written in its language, and a proof of that statement, and it checks the proof mechanically. When the check passes, the statement is a theorem of that formal system — true under the definitions and assumptions you imported into it.

That is a real achievement, and it has a precise scope. What Lean does not certify is that your formal statement means what you meant it to mean. It certifies that the formal statement, whatever it is, follows from the assumptions you gave it.

The three authors — Alexander Bastounis, Fabian Circelli, and Anders C. Hansen — lay out this argument in a preprint titled "Navier-Stokes lost in translation." The formalized proof, they write, "does not correspond to" the written proof. And the paper is precise about its own limits: "We do not make claims about the correctness of OpenAI's [natural-language] proof, we only make statements about mistranslations into Lean."

That disclaimer is the point in miniature. The question is not whether the mathematics is right. It is whether the checked statement is the same statement as the one that was claimed.

One thing to be clear about before looking at the examples: both concern intermediate steps in the proof — an estimate and a bound used along the way — not the final theorem. Whether the final formal theorem matches the problem as stated is a further question, and it is not one this essay takes up.

---

## The clean example

The critique's clearest example comes down to a single number.

One step of the written proof is an estimate that bounds how smooth a certain quantity is. To deliver its guarantee, the written proof needs four more derivatives than the output it promises. The Lean formalization of that same step needs five.

Both statements are public. The difference is one index: the written equation requires m+4 derivatives; the Lean theorem's assumptions require m+5. One extra layer of smoothness, one different condition.

Why does that matter? Because the formal statement is not the written statement. In this respect, it has a more demanding assumption: it requires one additional derivative. A check of the formal version tells you something about a nearby statement, not about the written one. Whether that one-derivative difference matters to the larger argument is a further question, and it is not one this essay claims to answer.

---

## The harder example

The critique's second example is less clean, and that is itself informative.

Here the question is a bound on a quantity called the pressure flux. The written proof states the bound using a quantity derived from the localized velocity difference. The Lean statement additionally depends on a quantity involving its spatial gradient.

On their face, the two statements are different. But the critique's own word for the situation is that the two are "hard to compare" — not that one is simply weaker than the other.

The second example does not prove the point as crisply as the first. But it suggests something the first one cannot: the correspondence between a written proof and its formalization can take real expertise, and more than a side-by-side read.

---

## What this is, and is not

None of this is a claim that the Navier-Stokes result is wrong. The authors of the critique say so explicitly, and it would be a mistake to read the paper as saying otherwise. Nor does this essay argue that formal verification does not work.

Formal verification can give very strong assurance about a precisely specified statement. What it cannot do, by itself, is tell you that the statement you specified is the statement you intended. Verification is only as strong as the correspondence between what is checked and what is claimed.

---

## The question that remains

So what did the verifier actually verify?

It verified that certain formal statements follow from their assumptions. Whether those formal statements faithfully represent the written proof OpenAI announced is a separate question — and it is the one the critique raises.

Whether the underlying mathematics is correct — whether a singularity actually forms — is a third question. OpenAI's announcement makes a mathematical claim. But neither the reported formal verification nor a comparison of the two published statements, on its own, establishes that claim. If the formal statements differ from the written ones, a passing check is compatible with the written proof being right or wrong. If they match, the pass would carry real weight. Which of those holds is exactly what remains to be established.

No public response from OpenAI was identified in the sources reviewed as of October 12, 2026.

What would justify the larger claim is not simply a repeat of the same check. It is independent experts comparing the written proof with its formalization, statement by statement — checking the definitions, the assumptions, the translation choices, and whether the theorem that follows is the theorem that was claimed.

A proof checker can establish that a formal statement follows from its assumptions. Whether that statement faithfully represents the original claim remains a separate question.

---

## Sources

- OpenAI, "[On the Navier–Stokes Millennium Prize Problem](https://openai.com/index/navier-stokes-solution/)" (announcement and writeup; [archived copy](https://web.archive.org/web/20260908195908/https://openai.com/index/navier-stokes-solution/)).
- A. Bastounis, F. Circelli, A. C. Hansen, "[Navier-Stokes lost in translation: Why Lean verification of AI autoformalisation does not guarantee correct natural language proofs](https://arxiv.org/abs/2610.08144)" (arXiv:2610.08144, October 6, 2026).
- OpenAI, [NavierStokesAndEuler](https://github.com/openai/NavierStokesAndEuler) repository (GitHub), commit `f9e8bc5`.

*Dale Joseph is the author of* Thought Partners: Preserving Cognitive Sovereignty in the Age of AI *and founder of the Emergence Institute. He worked for years as a consultant helping install hospital networks before turning to writing and systems thinking. He lives in Boynton Beach, Florida.*
