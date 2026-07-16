# Site Confession — Proposed Edits

## Landing Page (`src/pages/emergence/index.astro`)

### 1. Meta description (line 14)

**Current:**
"A decentralized, self-governing digital institution designed as a synthesis engine for human-AI collaboration. We build architectures that think with you."

**Proposed:**
"The Emergence Institute builds architectures for sovereign human-AI collaboration — designed for many, currently running on two nodes operated by one person. The mesh is built and waiting. Here's what your joining changes."
```

### 2. Hero copy (lines 29-33)

**Current:**
```
A decentralized network of sovereign AI agents.
Three nodes are live in Boston, Montreal, and Port-au-Prince. Join the mesh.
```

**Proposed:**
```
An architecture for turning multiple vantage points into shared truth.
Two nodes are live — one in Florida, one in Germany. Both are operated by the Institute's founder.
The mesh is built for many. It needs you.

The gap between two and many is not a limitation. It's the design.
```

### 3. Status strip (lines 43-57)

**Current:**
```
3 Active Nodes · 1,200 REP Staked · Last Jubilee 12d ago · 0 Disputes Open
```

**Proposed — split strip:**

```
┌─ LIVE ──────────────────────────────────────────────────┐
│  ● 2 nodes  ·  1 operator  ·  chain at bootstrap        │
│  · 0 certified events  ·  attestation quorum: unreached │
└─────────────────────────────────────────────────────────┘

┌─ DESIGN ─ when independent peers join ──────────────────┐
│  ≥3 nodes  ·  quorum-gated certification  ·  thickness  │
│  from verified contributions  ·  governance by sortition │
└─────────────────────────────────────────────────────────┘
```

Visual treatment: LIVE strip in the current green-dot style. DESIGN strip below or beside it, visually distinct — muted border, italic, or a lighter background. Same monospace font. The reader sees both and understands the seam.

### 4. Hero CTAs (lines 35-37)

**Current:**
```
Join the Mesh →   View Live Network →   Read the Protocols →
```

**Proposed:**
```
Run a Node →   See What Runs Now →   Read the Design →
```

"Run a Node" links to `/operate` (unchanged). "See What Runs Now" points to a real dashboard or a status page with live-derived numbers. "Read the Design" links to the Constitutional Room.

### 5. Two Scales section — "The Shared Mycelium" card (lines 89-104)

The Engine Room card is already honest (hardware spec). The Mycelium card claims "distributed consensus" and "the mycelium remembers together." Replace the aspirational present-tense with conditional:

**Current in Mycelium card:**
```
Coherence. Entrainment. Distributed Consensus.
```

**Proposed:**
```
Coherence. Entrainment. Designed for Consensus.
```

**Current:**
```
The mycelium remembers together.
```

**Proposed:**
```
The mycelium is designed to remember together — once multiple vantage points feed it.
```

### 6. "Balance. Speed. Stability." section (lines 109-131)

The two-rooms summary is fine structurally. The fix is on the Constitutional Room page itself.

### 7. "Sovereign Nodes. Shared Mycelium." section (lines 365-379)

**Current:**
```
The Emergence Institute is not a platform you join. It is an architecture you
run — on your hardware, under your governance, accountable to your community.
```

**Proposed:**
```
The Emergence Institute is not a platform you join. It is an architecture you
run — on your hardware, under your governance. Right now, one person runs both
nodes. The architecture is built for many. You're the missing input, not a user.
```

---

## Constitutional Room (`src/pages/emergence/constitutional.astro`)

### 1. Hero framing (lines 20-28)

**Current:**
```
If the Engine Room is fast, associative, and hot, the Constitutional Room is
the opposite: slow, deliberate, anchoring, cool.

It is where the principles that govern the Collective are held — not as rules
to be broken, but as anchors that prevent drift. The constitutional layer is
the long memory of the architecture. It does not reason. It witnesses.
```

**Proposed (add a seam marker):**
```
If the Engine Room is fast, associative, and hot, the Constitutional Room is
the opposite: slow, deliberate, anchoring, cool.

This page describes the constitutional layer as designed — the principles,
structures, and rules that govern the mesh once multiple independent vantage
points are present. What runs now: a two-node mesh at bootstrap, with the
chain honestly recording its single-operator state. The architecture below is
what activates when you join.

The constitutional layer is the long memory of the architecture. It does not
reason. It witnesses.
```

### 2. Primitive headings — fix tense

The primitives themselves are aspirational by nature (they describe what the system *shall* do). The fix is small: add a three-line preamble above the primitives grid that marks the seam.

**Insert after line 39 ("They are sealed into the Genesis Block..."):**

```
These primitives are the design. In the current mesh — two nodes, one
operator, bootstrap mode — they are architectural commitments, not
operational guarantees. They activate as independent peers join and the
chain transitions from root-authorized to quorum-certified.

The Genesis Block that seals them has not yet been committed. When it is,
the chain will record who signed it and why — permanently, audibly.
```

### 3. Footer copy (lines 184-188)

**Current:**
```
The Primitives are silent witnesses. They do not act. To see them activate,
watch the Engine Room apply them to live infrastructure...
```

**Proposed:**
```
The Primitives are silent witnesses. They do not act — yet. When the mesh
has enough independent vantage points for quorum to form, the constitutional
layer activates through certified events rather than root authorization.
The Engine Room runs the hardware. The Constitutional Room anchors the rules.
```

---

## What Doesn't Change

- **Engine Room** — already honest. Hardware spec, build guide, GPU tuning. Stays as-is.
- **All other pages** — the Lakou, the protocols, the library, the sidebar gap case study. These describe projects and designs, not live system state. No false present-tense claims found.
- **Site structure, URLs, design** — the edits are copy-level only. No layout changes except the split status strip.

---

## The Principle

Every sentence on the site falls into one of two categories, and the reader always knows which:

| What Runs | What It Becomes |
|---|---|
| Present tense | Future or conditional tense |
| Checkable against the chain | Marked as design |
| Numbers from the live system | Numbers explained |
| "Two nodes, Florida and Germany, both Dale's" | "≥3 nodes, independent operators, quorum forms" |

The seam between them is the story: **the mesh is built and waiting. The missing input is you.**
