#!/usr/bin/env node
// Build the antichrist-read.astro page from chapter markdown files
import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const chaptersDir = join(import.meta.dirname, '..', 'content', 'antichrist', 'chapters-final');

const files = [
  { id: 'prologue', file: 'prologue-canonical.md', label: 'Prologue' },
  { id: 'ch1', file: 'chapter1-final.md', label: 'Ch 1' },
  { id: 'ch2', file: 'chapter2-final.md', label: 'Ch 2' },
  { id: 'ch3', file: 'chapter3-final.md', label: 'Ch 3' },
  { id: 'ch4', file: 'chapter4-final.md', label: 'Ch 4' },
  { id: 'ch5', file: 'chapter5-final.md', label: 'Ch 5' },
  { id: 'ch6', file: 'chapter6-final.md', label: 'Ch 6' },
  { id: 'ch7', file: 'chapter7-final.md', label: 'Ch 7' },
  { id: 'ch8', file: 'chapter8-final.md', label: 'Ch 8' },
  { id: 'ch9', file: 'chapter9-final.md', label: 'Ch 9' },
  { id: 'ch10', file: 'chapter10-final.md', label: 'Ch 10' },
  { id: 'ch11', file: 'chapter11-final.md', label: 'Ch 11' },
  { id: 'ch12', file: 'chapter12-final.md', label: 'Ch 12' },
  { id: 'ch13', file: 'chapter13-final.md', label: 'Ch 13' },
];

function mdToHtml(md) {
  const lines = md.split('\n');
  const html = [];
  let inEpigram = false;
  let epigramLines = [];
  let firstSection = true;
  let chapterTitle = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip the # title line (we handle it separately)
    if (trimmed.startsWith('# ') && !trimmed.startsWith('## ')) {
      chapterTitle = trimmed.replace('# ', '');
      continue;
    }

    // Section headers
    if (trimmed.startsWith('## ')) {
      const sectionTitle = trimmed.replace('## ', '');
      html.push(`<p class="section-label">— ${sectionTitle} —</p>`);
      continue;
    }

    // Horizontal rules become section breaks
    if (trimmed === '---') {
      html.push('<hr class="section-break" />');
      continue;
    }

    // Empty lines
    if (trimmed === '') continue;

    // Check if this is an italic block (epigram - starts and ends with *)
    // Detect epigram blocks: consecutive lines that are all italic
    if (trimmed.startsWith('*') && trimmed.endsWith('*') && !trimmed.startsWith('**')) {
      // Check if next lines are also italic - this is an epigram block
      let j = i;
      let block = [];
      while (j < lines.length) {
        const t = lines[j].trim();
        if (t === '' || t === '---') {
          if (block.length > 0) break;
          j++;
          continue;
        }
        if (t.startsWith('*') && t.endsWith('*') && !t.startsWith('**')) {
          block.push(t.slice(1, -1)); // remove outer *
          j++;
        } else {
          break;
        }
      }
      if (block.length > 1) {
        // Multi-line italic block = epigram
        const epigramHtml = block.map(l => convertInline(l)).join('<br/>');
        html.push(`<p class="epigram"><em>${epigramHtml}</em></p>`);
        i = j - 1; // skip ahead
        continue;
      }
      // Single italic line - just a paragraph
    }

    // Regular paragraph
    html.push(`<p>${convertInline(trimmed)}</p>`);
  }

  return { title: chapterTitle, body: html.join('\n          ') };
}

function convertInline(text) {
  // Bold: **text**
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  // Italic: *text* - but not inside already-processed tags
  text = text.replace(/\*([^*]+?)\*/g, '<em>$1</em>');
  // Em dash
  // Already present as —, no conversion needed
  return text;
}

// Count words
let totalWords = 0;

// Build nav links
const navLinks = files.map(f => `<a href="#${f.id}">${f.label}</a>`).join('\n        ');

// Build chapter articles
const articles = [];
for (const f of files) {
  const md = readFileSync(join(chaptersDir, f.file), 'utf-8');
  totalWords += md.split(/\s+/).length;
  const { title, body } = mdToHtml(md);

  articles.push(`
      <!-- ${title || f.label} -->
      <article id="${f.id}" class="chapter">
        <h2>${title || f.label}</h2>
        <div class="chapter-body">
          ${body}
        </div>
      </article>

      <div class="chapter-divider">\u2B25 \u2B25 \u2B25</div>`);
}

const wordCount = Math.round(totalWords / 100) * 100;

const page = `---
import Base from '../layouts/Base.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---

<Base
  title="Read the Draft — The Antichrist and the Prophet"
  description="Working draft: Prologue and Chapters 1–13 of The Antichrist and the Prophet by Dale Joseph."
>
  <Header slot="header" />

  <!-- PASSWORD GATE -->
  <div id="auth-gate" class="auth-gate">
    <div class="auth-box">
      <p class="label gold">Private Draft</p>
      <h2>The Antichrist and the Prophet</h2>
      <p class="auth-note">This manuscript is not public. Enter the access code to continue.</p>
      <form id="auth-form" onsubmit="return false;">
        <input type="password" id="auth-input" placeholder="Access code" autocomplete="off" />
        <button type="submit" id="auth-submit">Enter</button>
        <p id="auth-error" class="auth-error" style="display:none;">Incorrect code.</p>
      </form>
    </div>
  </div>

  <!-- MANUSCRIPT (hidden until auth) -->
  <section id="manuscript" class="section reader-section" style="display:none;">
    <div class="container reader-container">
      <p class="label gold">Working Draft — Private</p>
      <h1>The Antichrist and the Prophet</h1>
      <p class="subtitle">Prologue · Chapters 1–13</p>
      <div class="divider"></div>
      <p class="reader-note">Working draft for review purposes. ~${wordCount.toLocaleString()} words.</p>

      <!-- NAV -->
      <nav class="chapter-nav">
        ${navLinks}
      </nav>

      ${articles.join('\n')}

      <p class="reader-end">— End of Draft: Prologue + Chapters 1–13 —</p>
      <p class="reader-end-note">The arc continues. Part Two in progress.</p>

    </div>
  </section>

  <Footer slot="footer" />
</Base>

<script is:inline>
  // Simple client-side auth gate
  // SHA-256 hash of the access code
  const HASH = '${process.env.READER_HASH || 'SET_HASH_HERE'}';

  async function sha256(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
  }

  // Check if already authed
  if (localStorage.getItem('antichrist-auth') === 'true') {
    document.getElementById('auth-gate').style.display = 'none';
    document.getElementById('manuscript').style.display = 'block';
  }

  document.getElementById('auth-form').addEventListener('submit', async () => {
    const input = document.getElementById('auth-input').value;
    const hash = await sha256(input);
    if (hash === HASH) {
      localStorage.setItem('antichrist-auth', 'true');
      document.getElementById('auth-gate').style.display = 'none';
      document.getElementById('manuscript').style.display = 'block';
    } else {
      document.getElementById('auth-error').style.display = 'block';
    }
  });
</script>

<style>
  /* AUTH GATE */
  .auth-gate {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #0e0e0e;
    padding: 2rem;
  }

  .auth-box {
    max-width: 400px;
    text-align: center;
  }

  .auth-box h2 {
    font-family: Georgia, serif;
    color: #f0ece0;
    font-size: 1.8rem;
    margin: 0.5rem 0 1rem;
  }

  .auth-note {
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  #auth-form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
  }

  #auth-input {
    background: #1a1a1a;
    border: 1px solid #333;
    color: #f0ece0;
    padding: 0.8rem 1rem;
    font-size: 1rem;
    width: 280px;
    text-align: center;
    font-family: Georgia, serif;
    letter-spacing: 0.1em;
  }

  #auth-input:focus {
    outline: none;
    border-color: #C9A84C;
  }

  #auth-submit {
    background: #C9A84C;
    color: #0e0e0e;
    border: none;
    padding: 0.6rem 2rem;
    font-size: 0.9rem;
    cursor: pointer;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 600;
  }

  #auth-submit:hover {
    background: #d4b55a;
  }

  .auth-error {
    color: #c44;
    font-size: 0.85rem;
  }

  /* READER */
  .reader-section {
    padding: 4rem 1rem 6rem;
    background: #0e0e0e;
    min-height: 100vh;
  }

  .reader-container {
    max-width: 740px;
    margin: 0 auto;
  }

  .reader-note {
    color: #888;
    font-size: 0.9rem;
    margin-bottom: 2rem;
    font-style: italic;
  }

  .chapter-nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 3rem;
    padding: 1rem 0;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
  }

  .chapter-nav a {
    color: #C9A84C;
    text-decoration: none;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
    padding: 0.3rem 0.6rem;
    border: 1px solid #333;
    border-radius: 2px;
    transition: border-color 0.2s, color 0.2s;
  }

  .chapter-nav a:hover {
    border-color: #C9A84C;
  }

  .chapter {
    margin-bottom: 4rem;
  }

  .chapter h2 {
    font-size: 1.6rem;
    color: #C9A84C;
    margin-bottom: 1.2rem;
    font-family: Georgia, serif;
  }

  .epigram {
    color: #aaa;
    font-style: italic;
    font-size: 0.95rem;
    line-height: 1.8;
    border-left: 2px solid #C9A84C;
    padding-left: 1.2rem;
    margin-bottom: 2rem;
  }

  .chapter-body p {
    color: #d4d0c8;
    line-height: 1.85;
    margin-bottom: 1.2rem;
    font-family: Georgia, serif;
    font-size: 1.05rem;
  }

  .chapter-body em {
    color: #bbb;
  }

  .chapter-body strong {
    color: #C9A84C;
    font-weight: 600;
  }

  .section-label {
    color: #C9A84C;
    font-size: 0.8rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin: 2rem 0 1rem;
    opacity: 0.8;
  }

  .section-break {
    border: none;
    border-top: 1px solid #2a2a2a;
    margin: 2rem 0;
  }

  .chapter-divider {
    text-align: center;
    color: #C9A84C;
    opacity: 0.4;
    margin: 3rem 0;
    letter-spacing: 0.5em;
  }

  .reader-end {
    text-align: center;
    color: #666;
    font-style: italic;
    margin-top: 2rem;
  }

  .reader-end-note {
    text-align: center;
    color: #444;
    font-size: 0.85rem;
    margin-top: 0.5rem;
  }

  .label {
    font-size: 0.8rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .gold {
    color: #C9A84C;
  }

  h1 {
    font-size: 2.5rem;
    font-family: Georgia, serif;
    color: #f0ece0;
    margin: 0.5rem 0;
  }

  .subtitle {
    color: #888;
    margin-bottom: 1.5rem;
  }

  .divider {
    width: 60px;
    height: 2px;
    background: #C9A84C;
    margin: 1.5rem 0 2rem;
  }
</style>
`;

writeFileSync(join(import.meta.dirname, 'src', 'pages', 'antichrist-read.astro'), page);
console.log(`Done. ${totalWords} words across ${files.length} chapters.`);
