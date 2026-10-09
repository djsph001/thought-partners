---
title: "Learning and Substituting"
date: 2026-10-08
description: "Economic harm alone does not establish infringement, and the absence of infringing output does not settle the legality of intermediate copying. To protect creators without granting ownership over what others learn, copyright needs to distinguish learning from substituting."
author: Dale Joseph
---

## The Unresolved Joint

Acquiring a book unlawfully is one question. Making computational copies from a lawfully acquired book is another. Using those copies to extract statistical relationships is another. Producing passages that reproduce protected expression is another. And producing a competing work that substitutes economically for the original may be another still.

These are not five versions of the same act. They span acquisition, intermediate copying, computational analysis, output behavior, and market consequences. Different actors may be responsible at different stages, and a legal conclusion about one does not necessarily determine another.

The field is divided over how far one stage can bear on another. In *Bartz*, the court separated pirated library copies from copies used for training (Doc. 231 at 29-31). In *Kadrey*, the court ruled for Meta on the record before it, recognizing market dilution as a possible route to harm while finding the evidence insufficient (Doc. 598 at 39-40). The Copyright Office's May 2025 pre-publication report says that different uses during AI development and deployment require separate consideration (at 36), and also that fair use must be evaluated in the context of the overall use (at 37). In *Ross*, the Third Circuit issued what has been reported as the first federal appellate decision on fair use in AI training, and distinguished its non-generative system from generative AI cases (Doc. 214 at 17 n.7).

This essay tests one proposition: **copyright should distinguish the act of learning from the act of substituting, without assuming that every economically harmful substitution is an infringement.** Its question is whether the law can protect creators against demonstrable economic harm without granting them ownership over what others learn.

The contribution is methodological, not doctrinal, and it has two parts of unequal strength. The first is a discipline: keep harm from a competing downstream product separate from harm to a market for permission to train, because evidence for one does not establish the other. The second is a hypothesis: a same-purpose trigger that screens for concentrated substitution. Its added value has not been shown. It is deliberately narrow, and general-purpose AI systems may fall outside it even when their aggregate market effects are substantial. The essay tests where it fails.

## A Hypothesis: The Same-Purpose Trigger

The fourth factor already directs courts to the effect of a use on the potential market for the work, and nothing here adds doctrine to it. The claim is about sorting. Before treating a claimed market loss as evidence against fair use, ask whether it reflects downstream substitution, impairment of a licensing opportunity, or broader technological displacement. These can overlap, but none establishes another. The categories are a simplification: in *Kadrey*, for example, the court distinguished output reproduction, impairment of training licenses, and indirect substitution by generated works (Doc. 598 at 25-26).

The hypothesis is a **same-purpose trigger**: output-stage effects bear on the training analysis most when the system serves the same function as the works it learned from, in the same market. It is a screening test, not a legal threshold. Three indicators say where closer scrutiny is warranted:

- **Function overlap:** does the system do what the source works do?
- **Market identity:** do the original work and the challenged product serve the same buyers and the same need?
- **Attribution:** can the substitution plausibly be traced to the training data?

They are indicators, not conditions that must all be met, and failing one does not end the inquiry. Firing the trigger opens an inquiry and decides nothing. Functional competition is not infringement of protected expression.

**A silent trigger is not clearance.** Diffuse harm remains assessable under the fourth factor even where the trigger does not fire. Reading silence as a finding of no harm would turn a screen into a shield.

**A definition that guards against circularity.** Market identity means overlap between how the original work is used and what the challenged product does. It does not mean the existence of a market for permission to train. Licensing-market impairment can still enter the fourth-factor analysis, but it is assessed separately. Otherwise the trigger would assume the entitlement that a licensing market is supposed to demonstrate.

## Five Cases

| Case | Function overlap | Market identity | Attribution | Trigger |
|---|---|---|---|---|
| Legal-research tool (*Ross*) | High | High | Strong | Fires |
| General-purpose model | Low per work | Diffuse | Weak | Mostly silent |
| Tuned on one author's style | High | High | Moderate | Conditional |
| Tuned on a genre | Moderate | Uncertain | Weak | Conditional, weaker |
| Whole-book reproduction | High | High | Direct | Fires, but adds little |

Style imitation alone does not establish infringement, but the Copyright Office treats it as potentially relevant to market effect (at 66). The tuning rows stay conditional for that reason: the question they raise belongs to the fourth factor, not to infringement.

Whole-book reproduction raises a direct question of output infringement that the same-purpose trigger adds little to. The trigger is most useful, if it is useful at all, where delivered outputs do not reproduce protected expression but the intermediate copies and downstream competition still require analysis.

***Ross* in precise terms.** The system returned passages from judicial opinions, not headnote text (Doc. 214 at 5), and the record showed an intent to compete directly with Westlaw (at 6). But protected material was also copied in preparing the training data. For 2,243 headnotes, the District Court concluded that the corresponding memo questions were so similar to the headnote text, and so dissimilar to the underlying judicial opinions, that no reasonable juror could conclude the headnotes had not been copied (at 7 n.3). The District Court's partial summary-judgment infringement ruling concerned those 2,243 headnotes (at 7). The distinction is between the absence of infringing expression in the delivered answers and the copying that occurred during training. The court found that ROSS's use of the headnotes shared the same ultimate purpose as Thomson Reuters's use (Doc. 214 at 16-17).

**Two markets, not one.** *Ross* contains two market-harm inquiries. The court considers competition in the existing legal-research market (at 24-25), and separately considers a developing market for licensing headnotes as AI training data (at 26). The court's own labels are the original market and the potential derivative market, and its fourth-factor analysis also weighs harm to the value of the work and any public benefits of the copying (at 24). The two-market framing used here is a simplification of that structure, not the court's vocabulary.

| Market | Question |
|---|---|
| Downstream product market | Did the competing system reduce demand for an existing service? |
| Training-data licensing market | Did unauthorized copying impair an existing or potential opportunity to license the source material? |

Evidence for one does not establish the other. The distinction already has a legal history: the Second Circuit in *Texaco* limited cognizable licensing revenue to markets that are "traditional, reasonable, or likely to be developed" (60 F.3d 913, 929-30 (2d Cir. 1995)). And courts can perform the separation without this essay's vocabulary, as *Ross* and *Kadrey* both show. The claim here is not that the distinction is new, but that it should be kept as a discipline and used to test where a same-purpose screen fails.

Whether a licensing market for training data counts as evidence of harm was [the subject of an earlier essay](/blog/when-does-a-licensing-market-count).

## Where the Trigger Fails: Diffuse Harm

The trigger has a blind spot, and it is the one that matters most. It identifies concentrated substitution. It cannot capture diffuse dilution, where a general-purpose model competes with many works at once and none in particular. Function overlap with any single work is low, the affected market is a category, and attribution is weak. The trigger goes quiet where the harm, if it exists, is spread thinnest.

The tuning cases show the gradient. A system tuned on one author and used to produce substitutes for that author's books is conditional, since style imitation alone does not establish infringement. A system tuned on a genre is weaker still, because market identity and attribution are both much less certain.

**The Office takes a broader view.** The Copyright Office's May 2025 pre-publication report warns of a serious risk that the speed and scale of AI generation could dilute markets for works of the same kind as the training data (at 65). It also says that even where outputs are not substantially similar to a specific work, stylistic imitation enabled by training may affect a creator's market (at 66). These are statements of risk, not findings that the harm occurred in any market. The boundary drawn here is this essay's proposal, not the Office's position. The disagreement is whether such effects connect closely enough to the challenged copying to justify legal responsibility.

**The temptation.** The gap invites an inference: if the trigger can't reach the harm, training itself must require permission. That runs backward. It treats the inadequacy of a test as proof of an entitlement. In *Ross*, the court accepted evidence that a market for licensing headnotes as AI training data was rapidly developing. It noted Thomson Reuters's evidence that it used its headnotes as training data for its own AI search products, which ROSS offered no evidence to disprove, and it reasoned that the absence of licenses to others did not disprove that a market exists to do so (Doc. 214 at 26). It found that unauthorized copying impaired Thomson Reuters's licensing opportunity. The opinion leaves unaddressed whether the market's development was independent of expectations about copyright licensing obligations, and it does not use the term "circular" in this analysis. That is an unanswered evidentiary question, not a finding that the market was litigation-driven. It is the evidentiary form of the circularity problem. The entitlement form, whether lost fees for a transformative use count at all, is the one *Kadrey* addressed.

**Two courts, different uses.** *Kadrey* found Meta's use "highly transformative" (Doc. 598 at 17) and rejected lost fees for licensing a transformative use as cognizable fourth-factor harm, reasoning that counting them would make the analysis circular (at 27-28). It separately considered indirect substitution and market dilution and found the plaintiffs' evidence insufficient (at 28-40). *Ross* found the use "minimally transformative, at best" (Doc. 214 at 17), held that the first factor weighed against fair use (at 18), and counted impairment of a developing licensing market against fair use (at 26). The decisions involved different uses and records. Whether *Kadrey*'s reasoning depends on the use being transformative, and so whether the two are reconcilable, is a question the sources raise and this essay does not decide. Neither establishes a uniform rule for generative AI training.

**What evidence would establish diffuse harm.** The evidence this framework would seek, offered as research criteria and not as requirements courts currently impose:

- measurable displacement in the affected category, separated from other causes;
- harm independent of the lawsuit asserting it;
- a causal link to the model's capability and not to general market trends;
- overlap between the buyers of the works and the users of the outputs;
- a counterfactual comparing observed market conditions with a plausible alternative in which the challenged copyrighted material was not used in training, while accounting for other available training sources and competing explanations. This asks a narrower causal question than whether the technology as a whole displaced a market, and it is harder to answer. It is the most demanding item, and no court uniformly requires it.

A claim that can be satisfied by announcing a price is not evidence.

**What mechanisms could respond.** The fourth factor, where courts and the Office have not agreed on the weight of dilution. Output liability, where particular outputs reproduce protected expression. And tools outside copyright: disclosure, labeling, collective compensation, competition and labor policy. Each has a cost. A levy changes incentives for everyone, and allocation formulas tend to favor those who write them.

**When copyright should decline.** Copyright protects expression and markets for works. It does not guarantee freedom from technological competition. Where the allegedly harmful substitution involves no infringement of protected expression, the existence of earlier training copies does not by itself establish liability. The copies may still be assessed on their own terms, but an intermediate copy is not a license to treat every downstream competitor as an infringer. That is uncomfortable for creators, and the cost should be stated plainly.

## What Crossover Does

A crossover trigger should change the questions we investigate, not automatically change the legal status of earlier conduct. The proposed sequence is **trigger, evidence, legal assessment, remedy**, and each step can end the inquiry.

**What may a court consider?** Suppose training is otherwise defensible and the system is later deployed in a way that substitutes for the works it learned from. There are three answers:

1. **Exclude later effects from the training analysis.** Later outputs create separate liability, if anything. This gives developers certainty.
2. **Admit later effects without a special foreseeability restriction.** Ordinary rules of relevance and causation still apply. The fourth factor looks at actual market effect, which gives this answer doctrinal footing.
3. **Admit them, with weight governed by foreseeability.** This is the proposal.

Later commercial effects are evidence bearing on the market-effect inquiry. Treating them as evidence does not make earlier copying retroactively illegal or reopen a settled judgment. The question is what a court may consider and how much weight to give it. *Warhol* supports assessing the specific use at issue (598 U.S. 508, 533-34 (2023)). It does not support the foreseeability rule, which is this essay's proposal.

***Ross* is the easy case.** Training and purpose were contemporaneous, so nothing had to reach backward. The unresolved case is purpose that emerges after training: capabilities no one intended, or a model later fine-tuned or given retrieval. A system *built* to substitute differs from one that later turns out to. The proposed conditions:

- the same-purpose indicators were present, or reasonably predictable, when the copies were made;
- deployment evidence confirms the substitution, not stated intent;
- any relief is tied to the works shown to fall within the substituted function.

**Defending the third condition.** Copyright remedies respond to infringement of protected rights, but their structure varies. Statutory damages generally operate per work infringed (17 U.S.C. § 504(c)), while actual damages and attributable profits, injunctions, and class procedures involve different requirements (§§ 502(a), 504(b), 412; Fed. R. Civ. P. 23). Aggregate evidence may inform the fair-use analysis without establishing an infringement claim for every affected work. This framework therefore proposes a further limit: relief for concentrated substitution should require a demonstrable connection to the protected works and uses at issue. That is a proposed attribution principle, not a requirement of existing copyright law. It fits damages more naturally than injunctions, which restrain infringement and are not computed per work, so an injunction might reach a whole system even where harm traces to few works. The cost is that genuine aggregate economic harm from training may remain without a copyright remedy, and where harm is real but cannot be traced, copyright may be the wrong instrument.

***Bartz* shows where aggregation has worked.** A class of copyright owners settled for $1.5 billion over Anthropic's acquisition and copying of pirated books, and the court gave final approval in July 2026 (Doc. 680). The release covered past acquisition and copying and did not extend to claims about AI outputs (at 7). That result shows that claims can be aggregated where the works and the copying can be identified. It does not show how to remedy diffuse market harm attributed to training. It was also a settlement, not an adjudicated damages award.

**What this costs.** If later effects can weigh against training, developers face uncertainty, and the safe response is to license everything. That would rebuild the permission regime this essay warns against. Foreseeability is meant to limit this, but it moves the dispute to what counts as foreseeable, and that is a weakness. The opposite rule has a cost too: a developer could structure training to be defensible and deploy for substitution afterward.

Where purpose and foreseeability are absent, this framework would ordinarily assess the original training use and later output conduct separately. Whether existing law permits that separation in a given case is a question for the courts.

## What Would Disprove This

A framework that survives every counterexample by adding exceptions is not becoming more accurate. **Revising** a framework narrows its claim on a stated principle. **Abandoning** it is required when a fix exists only to rescue the outcome. A fix that can be stated as a principle applying beyond the case that prompted it is a revision. One that works only to restore the preferred result is a sign the framework has failed.

The trigger, the foreseeability condition, the research criteria, and the tests below are this essay's proposals, not established doctrine. Thresholds are qualitative, and the evidence we would examine is named for each. The market separation and the trigger are assessed separately, since the first could survive the failure of the second.

**False positive.** The trigger fires for a commercially competing system whose training is nonetheless fair use. A screen is expected to over-include, so one case refutes nothing. *Evidence:* how often the trigger fires in cases resolved as fair use for independent reasons, and whether firing predicts where real harm appears. Abandon it if firing predicts nothing.

**False negative.** A general-purpose model causes measurable displacement and the trigger stays silent. The diffuse-harm section predicts this. *Evidence:* displacement measured across different model types. If documented harm is mostly diffuse, the trigger is a narrow tool, which the opening already says it may be.

**Licensing-market failure.** A system has little downstream overlap, so the trigger stays silent, yet a court still finds a cognizable training-data licensing market impaired. *Evidence:* how often fourth-factor findings rest on licensing-market impairment alone, and whether those findings survive the independence criteria described above. If courts mostly decide on that basis, the trigger is a diagnostic for downstream harm only, and the lasting contribution is the separation of the two markets.

**Temporal failure.** A developer changes the system's purpose after training and exploits the foreseeability condition. *Evidence:* whether independent researchers can apply the foreseeability test consistently. Revise it if gaming is rare and detectable. If foreseeability can't be assessed reliably, drop the condition and choose between the first two answers described above.

**Attribution failure.** Reliable evidence shows aggregate harm that cannot be traced to particular works. This is a stated limit, not a refutation. Reconsider the premise if such cases dominate and copyright is the only plausible route. Then either copyright needs a mechanism for aggregate harm, which is a legislative choice, or the claim that copyright should decline is wrong.

**Counterfactual failure.** If no workable counterfactual can be constructed, claims of diffuse harm tied to specific training material may be unprovable to the standard this framework seeks. That limits our ability to establish causation. It does not by itself show a limit on what courts may consider under the fourth factor.

**Added-value failure.** The framework adds nothing if it does not prevent an analytical error, reveal an evidentiary gap, or change what evidence is gathered. This has not been shown. A retrospective check against *Kadrey*, done after reading the opinion, is uninformative on this point: the court separated licensing harm from downstream harm and examined dilution without the trigger, and the trigger is predicted to be silent for a general-purpose model. Retrospective agreement cannot show added value. The only test proposed here is prospective. Before a ruling in a pending case, record in writing what the framework says a court should examine, then compare that record with what the court did. Selecting the cases and fixing the predictions in advance guards against fitting them to the framework. A reviewer comparison could supplement this: give independent reviewers masked scenarios drawn from decided cases, and compare ordinary four-factor analysis with the same analysis preceded by the trigger and the market separation. Consistency is not correctness, and there is no gold standard, so any result would be suggestive and not conclusive. If the framework makes no measurable difference, the trigger should be downgraded from a proposed framework to an explanatory device.

**What has been established.** *Ross* found that ROSS's use of the headnotes shared the same ultimate purpose as Thomson Reuters's use, was "minimally transformative, at best," and impaired a developing training-data licensing market, in a non-generative case. *Bartz* separated acquisition from training. *Kadrey* rejected lost licensing fees for a transformative use as cognizable harm, reasoning that counting them would be circular, recognized indirect substitution and dilution as possible routes to harm, and found the plaintiffs' evidence of dilution insufficient. *Texaco* limited cognizable licensing markets, and *Warhol* supports assessing the specific use at issue. The Copyright Office's pre-publication report says that development and deployment uses require separate consideration and that fair use must also be evaluated in light of the overall use (at 36–37).

**What has not.** How any of this applies to generative systems; whether diffuse dilution is cognizable; whether the *Ross* training-data market reflects independent demand; whether foreseeability can be applied reliably; whether the framework changes outcomes or evidence-gathering in practice.

**On the central question:** for concentrated substitution, the law can plausibly protect against demonstrable harm without granting ownership over what others learn, by scrutinizing same-purpose copying more closely. For diffuse harm, this framework offers no copyright answer, and the response may lie elsewhere.

What survives even if the trigger fails is narrower: economic harm does not by itself establish infringement, and the absence of infringing output does not by itself settle the legality of intermediate copying.

## Disclosure

AI assistance: This essay was developed with assistance from Claude (Anthropic) and ChatGPT (OpenAI). Anthropic is a defendant in Bartz v. Anthropic, a case discussed in this essay. The author personally reviewed key passages of the Third Circuit's opinion in Thomson Reuters v. ROSS, including pp. 5–7, 16–18, 22, and 24–26, and searched its full text for "circular" and "litigation"; other citations were checked against primary sources with AI assistance. Judgments and any remaining errors are the author's.

*Dale Joseph is the author of* Thought Partners: Preserving Cognitive Sovereignty in the Age of AI *and founder of the Emergence Institute. He worked for years as a consultant helping install hospital networks before turning to writing and systems thinking. He lives in Boynton Beach, Florida.*
