---
title: "Two or Three Witnesses: Standing You Cannot Give Yourself"
date: 2026-07-24
description: "A number that can't tell you where it came from isn't a measurement — it's a rumor. What it takes to build a system where standing has to be signed by someone who isn't you."
author: Dale Joseph
---

There's a number on a page I built.

It said my node had a standing of 999.81. I had no idea what that meant.

Not because the number was wrong. Because I couldn't tell which part of it had been *given* to me and which part I had *earned*. Every node receives a starting grant when it joins the network—a bootstrap, a courtesy, a way to exist before you've done anything. Whatever work mine had actually done since was buried somewhere in the decimals, indistinguishable from the gift.

A number that can't tell you where it came from isn't a measurement. It's a rumor.

So I split it. The page shows two figures now: what was granted, and what was earned. The earned figure currently reads 0.002.

That is almost nothing. It is also the most honest number on the page, because every thousandth of it was signed by someone who wasn't me.

---

## What a Witness Actually Does

Here is the mechanism, and it's simpler than it sounds.

A node performs work—in this case, staying present and carrying traffic for the network over some window of time. When it wants that work to count, it doesn't announce it. It asks the peers who would know.

Each of those peers does one thing: it checks **its own records**. Did I actually receive service from this node during that window? Not "does their claim look reasonable." Not "do I trust them." Did my own logs, kept for my own purposes, independently register the thing they say happened?

If the answer is yes, the peer signs. And what it signs is not the claim—it's its own observation. The claimant assembles those signatures into a **witnessed claim** and submits it.

That distinction sounds like a technicality. It's the entire thing. A system where the witness signs the claimant's assertion is a system where the claimant is still the only source. A system where the witness signs its own records is a system where two independent memories have to agree before anything counts.

One of them is bookkeeping. The other is evidence.

---

## Presence Is Free. Standing Is Earned.

There's a second distinction underneath the first, and I didn't see it at first.

For weeks, my network kept killing its own participants. A node would join, connect, start doing exactly what it was supposed to do—and get evicted. The logs showed hundreds of these. The eviction rule was checking whether a node had any standing, and if it had none, it removed it as dead weight.

The rule wasn't broken. It was enforcing a standard no new node could possibly meet. You needed standing to survive. You needed to survive long enough to earn standing. Nobody could ever get in.

The fix was a single line of code and a change in what I believed. **Presence** and **standing** are different things, and they must never be gated on each other. If you show up and stay connected, you're established—that costs nothing but showing up, and it's enough to keep your place in the network permanently. Standing is separate. It's earned through witnessed work, it decays if you stop working, and it's what gives your voice weight in decisions.

There's a hard reason for keeping them apart, beyond the bootstrap problem. If standing controlled who was allowed to witness, then the nodes with standing would decide who else could get any. That's a closed loop—an aristocracy that issues its own patents of nobility. So witnessing is open to anyone who is simply present. Only standing has to be earned.

You cannot buy your way into the room. You also cannot be thrown out of it for being poor.

---

## Two or Three Witnesses

The oldest legal standard I know of on this question is also the most honest one.

The Mosaic law set the threshold at two or three witnesses and said plainly that one was not sufficient—not for anything that mattered, and especially not for anything irreversible. Paul repeats it centuries later, almost word for word, to a church arguing about who to believe. The rule survives because the failure it prevents is permanent: a single voice, however sincere, cannot establish a fact about itself.

My network currently has one witness.

I want to be precise about what that means, because this is exactly where systems like mine usually start lying. One witness is not consensus. It is not proof. It is not "verified" in any sense that word deserves. Right now, my node's earned standing was attested by exactly one other node—which I also run.

So the page says so. The display reads:

> ▸ 999.249 thick · 0.002 earned · 1 witness

That last number is the one I care most about. It doesn't flatter anything. It says: one party vouched for this. Draw your own conclusions.

This is the **self-attested era** of the network, and naming it is the point. The mesh is small, the operators are few, and every attestation currently traces back to hardware I own. That will change as other people run nodes, and the number will climb toward the ancient threshold. Until then, the honest move isn't to hide the one. It's to publish it.

---

## What to Look For

You will probably never run a node. But you are surrounded by systems that show you numbers about people, and almost none of them will answer the question this one is built to answer.

When a platform shows you a score, a rating, a follower count, a verification badge, ask three things:

**Who attested to this?** Not who displayed it—who actually checked something and put their name on it.

**How many independent parties?** One source is a claim, no matter how confidently it's rendered.

**Is that count published?** This is the one that separates real systems from theatrical ones. A platform that knows its number rests on a single unverifiable source, and chooses not to tell you, has made a decision about you.

Most of what looks like measurement online is assertion wearing measurement's clothes. The tell is almost always the missing witness count—not a wrong number, just a number with no visible provenance, which you're expected to accept because it's rendered in a confident font.

The practice I'm settling on, for whatever I build: publish the witness count next to every standing figure, always, even when it's embarrassingly small. *Especially* when it's embarrassingly small. A one that admits it's a one is worth more than a thousand that won't say where it came from.

Right now my number is one.

I'd rather show you that than let you assume it's more.

---

*Dale Joseph is the author of* Thought Partners: Preserving Cognitive Sovereignty in the Age of AI *and founder of the Emergence Institute. He worked for years as a consultant helping install hospital networks before turning to writing and systems thinking. He lives in Boynton Beach, Florida.*
