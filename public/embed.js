// Lattice Mesh Live Widget — same-origin, no tailnet dependency
(function() {
  var API = '/mesh-api';
  var CONTAINER_ID = 'lattice-widget';

  var style = document.createElement('style');
  style.textContent = [
    '#lattice-widget {',
    '  font-family: -apple-system, BlinkMacSystemFont, "SF Mono", "Fira Code", monospace;',
    '  background: rgba(10,10,18,0.92); backdrop-filter: blur(8px);',
    '  border: 1px solid #2a2a3a; border-radius: 12px; padding: 16px;',
    '  color: #e8e8f0; font-size: 13px; max-width: 360px;',
    '}',
    '#lattice-widget .lw-header {',
    '  display: flex; justify-content: space-between; align-items: center;',
    '  margin-bottom: 12px;',
    '}',
    '#lattice-widget .lw-title {',
    '  font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: #8a8a9a;',
    '}',
    '#lattice-widget .lw-status { display: flex; align-items: center; gap: 6px; font-size: 11px; }',
    '#lattice-widget .lw-dot {',
    '  width: 8px; height: 8px; border-radius: 50%; display: inline-block;',
    '}',
    '#lattice-widget .lw-dot.online { background: #2ecc71; animation: lw-pulse 2s infinite; }',
    '#lattice-widget .lw-dot.offline { background: #e74c3c; }',
    '@keyframes lw-pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }',
    '#lattice-widget .lw-grid {',
    '  display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; margin-bottom: 10px;',
    '}',
    '#lattice-widget .lw-stat {',
    '  text-align: center; padding: 8px 4px;',
    '  background: rgba(255,255,255,0.03); border-radius: 8px; border: 1px solid #1a1a2a;',
    '}',
    '#lattice-widget .lw-val { font-size: 18px; font-weight: 700; }',
    '#lattice-widget .lw-val.green { color: #2ecc71; }',
    '#lattice-widget .lw-val.amber { color: #f39c12; }',
    '#lattice-widget .lw-val.purple { color: #9b59b6; }',
    '#lattice-widget .lw-label { font-size: 9px; text-transform: uppercase; color: #5a5a6a; margin-top: 2px; letter-spacing: 0.5px; }',
    '#lattice-widget .lw-ticker {',
    '  font-size: 11px; color: #8a8a9a; padding: 8px;',
    '  background: rgba(255,255,255,0.02); border-radius: 8px; border: 1px solid #1a1a2a;',
    '  margin-bottom: 10px; min-height: 20px; line-height: 1.5;',
    '}',
    '#lattice-widget .lw-cta {',
    '  display: block; text-align: center; padding: 10px;',
    '  background: linear-gradient(135deg, #2a2a4a, #1a1a3a);',
    '  border: 1px solid #3a3a5a; border-radius: 8px;',
    '  color: #9b59b6; text-decoration: none; font-size: 12px; font-weight: 600;',
    '  transition: all 0.2s; cursor: pointer;',
    '}',
    '#lattice-widget .lw-cta:hover { border-color: #9b59b6; background: linear-gradient(135deg, #3a3a5a, #2a2a4a); }',
    '#lattice-widget .lw-foot { text-align: center; font-size: 9px; color: #3a3a4a; margin-top: 6px; }',
    '.lw-hl { color: #2ecc71; }',
    '.lw-muted { color: #5a5a6a; }',
  ].join('\n');
  document.head.appendChild(style);

  function render(data) {
    var el = document.getElementById(CONTAINER_ID);
    if (!el) return;
    var peers = (data.peers || []).filter(function(p) { return !p.is_dead; });
    var totalHb = (data.peers || []).reduce(function(s, p) { return s + (p.heartbeats || 0); }, 0);
    var epoch = data.epoch || '—';
    var build = data.build || '—';
    var online = peers.length > 0;

    var activity = peers.map(function(p) { return '<span class="lw-hl">' + p.peer_id.slice(0,8) + '…</span>'; });
    var ticker = activity.length
      ? '▸ ' + activity.join(' · ')
      : '<span class="lw-muted">◌ Watching for activity…</span>';

    el.innerHTML = [
      '<div class="lw-header">',
      '  <span class="lw-title">⚡ Lattice Mesh</span>',
      '  <span class="lw-status"><span class="lw-dot ' + (online ? 'online' : 'offline') + '"></span>' + (online ? 'Mesh Active' : 'Offline') + '</span>',
      '</div>',
      '<div class="lw-grid">',
      '  <div class="lw-stat"><div class="lw-val green">' + peers.length + '</div><div class="lw-label">Nodes</div></div>',
      '  <div class="lw-stat"><div class="lw-val amber">' + epoch + '</div><div class="lw-label">Epoch</div></div>',
      '  <div class="lw-stat"><div class="lw-val purple">' + totalHb + '</div><div class="lw-label">Heartbeats</div></div>',
      '</div>',
      '<div class="lw-ticker">' + ticker + '</div>',
      '<a class="lw-cta" href="https://dale-joseph-hp-z4-g4-workstation.taild96c2e.ts.net/mesh/static/index.html" target="_blank">🔍 Watch Live Dashboard →</a>',
      '<div class="lw-foot">build: ' + build + '</div>',
    ].join('\n');
  }

  function fetchAndRender() {
    Promise.all([
      fetch(API + '/peers').then(function(r) { return r.json(); }).then(function(j) { return typeof j.data === 'string' ? JSON.parse(j.data) : j.data; }),
      fetch(API + '/epoch').then(function(r) { return r.json(); }).then(function(j) { return typeof j.data === 'string' ? JSON.parse(j.data) : j.data; }),
      fetch(API + '/nodeinfo').then(function(r) { return r.json(); }).then(function(j) { return typeof j.data === 'string' ? JSON.parse(j.data) : j.data; }),
    ]).then(function(results) {
      render({
        peers: results[0].peers,
        epoch: results[1].epoch,
        build: results[2].build_commit,
      });
    }).catch(function() {
      var el = document.getElementById(CONTAINER_ID);
      if (el) el.innerHTML = '<div style="padding:16px;text-align:center;color:#5a5a6a;font-size:11px;">◌ Mesh offline — check back soon</div>';
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchAndRender);
  } else {
    fetchAndRender();
  }
  setInterval(fetchAndRender, 5000);
})();
