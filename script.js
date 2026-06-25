/* ============================================================
   AirdropScan — Dashboard Script
   ============================================================ */

// --- Airdrop Data ---
const airdrops = [
  // Free
  { id: 'monad', initials: 'MO', name: 'Monad', chain: 'Monad', type: 'TESTNET', status: 'live', reward: '$500–5K', url: 'https://testnet.monad.xyz', desc: 'EVM L1 testnet', category: 'free', color: 'hsl(265,70%,58%)' },
  { id: 'berachain', initials: 'BR', name: 'Berachain', chain: 'Berachain', type: 'TESTNET', status: 'live', reward: '$200–2K', url: 'https://bartio.berachain.com', desc: 'PoL consensus L1', category: 'free', color: 'hsl(30,80%,50%)' },
  { id: 'abstract', initials: 'AB', name: 'Abstract', chain: 'zkSync L2', type: 'TESTNET', status: 'live', reward: '$100–1K', url: 'https://abs.xyz', desc: 'Consumer L2 by Igloo', category: 'free', color: 'hsl(200,70%,50%)' },
  { id: 'corn', initials: 'CN', name: 'Corn Network', chain: 'L2', type: 'TESTNET', status: 'live', reward: '$50–500', url: 'https://usecorn.com', desc: 'BTC-powered L2', category: 'free', color: 'hsl(30,70%,50%)' },
  { id: 'hana', initials: 'HN', name: 'Hana', chain: 'Multi', type: 'DEPIN', status: 'live', reward: '$50–300', url: 'https://hana.network', desc: 'DePIN + AA wallet', category: 'free', color: 'hsl(340,60%,55%)' },
  { id: 'ink', initials: 'IK', name: 'Ink Chain', chain: 'OP Stack', type: 'TESTNET', status: 'live', reward: '$100–800', url: 'https://inkonchain.com', desc: 'Kraken L2', category: 'free', color: 'hsl(220,60%,50%)' },
  { id: 'soneium', initials: 'SN', name: 'Soneium', chain: 'OP Stack', type: 'TESTNET', status: 'live', reward: '$100–500', url: 'https://soneium.org', desc: 'Sony L2 Minato', category: 'free', color: 'hsl(190,50%,45%)' },
  { id: 'eclipse', initials: 'EC', name: 'Eclipse', chain: 'SVM L2', type: 'TESTNET', status: 'live', reward: '$200–1K', url: 'https://eclipse.xyz', desc: 'Solana VM on ETH', category: 'free', color: 'hsl(200,60%,50%)' },
  { id: 'fuel', initials: 'FL', name: 'Fuel Network', chain: 'Fuel', type: 'TESTNET', status: 'live', reward: '$100–600', url: 'https://fuel.network', desc: 'Modular execution', category: 'free', color: 'hsl(10,80%,55%)' },
  { id: 'grass', initials: 'GR', name: 'Grass', chain: 'Solana', type: 'DEPIN', status: 'live', reward: '$30–200', url: 'https://getgrass.io', desc: 'Bandwidth DePIN', category: 'free', color: 'hsl(140,55%,45%)' },
  { id: 'pipe', initials: 'PN', name: 'Pipe Network', chain: 'Solana', type: 'DEPIN', status: 'live', reward: '$50–400', url: 'https://pipenetwork.com', desc: 'CDN DePIN', category: 'free', color: 'hsl(260,60%,50%)' },
  { id: 'walletconnect', initials: 'WC', name: 'WalletConnect', chain: 'Multi', type: 'SOCIAL', status: 'live', reward: '$50–300', url: 'https://cloud.walletconnect.com', desc: 'WCT token rewards', category: 'free', color: 'hsl(220,70%,55%)' },
  { id: 'starknet-dapps', initials: 'ST', name: 'Starknet dApps', chain: 'Starknet', type: 'DEFI', status: 'live', reward: '$50–500', url: 'https://starknet.io', desc: 'Ecosystem incentives', category: 'free', color: 'hsl(280,55%,55%)' },
  { id: 'zora', initials: 'ZR', name: 'Zora', chain: 'Ethereum', type: 'SOCIAL', status: 'live', reward: '$50–300', url: 'https://zora.co', desc: 'NFT + social layer', category: 'free', color: 'hsl(0,0%,40%)' },

  // Paid
  { id: 'kinto', initials: 'KT', name: 'Kinto', chain: 'Ethereum', type: 'DEFI', status: 'live', reward: '$200–2K', url: 'https://kinto.xyz', desc: 'KYC L2 deposit needed', category: 'paid', color: 'hsl(210,65%,50%)' },
  { id: 'linea', initials: 'LN', name: 'Linea', chain: 'Ethereum L2', type: 'BRIDGE', status: 'live', reward: '$100–1K', url: 'https://linea.build', desc: 'Consensys zkEVM', category: 'paid', color: 'hsl(230,60%,50%)' },
  { id: 'scroll', initials: 'SC', name: 'Scroll', chain: 'Ethereum L2', type: 'BRIDGE', status: 'live', reward: '$100–800', url: 'https://scroll.io', desc: 'zkEVM bridge + dApps', category: 'paid', color: 'hsl(45,70%,50%)' },
  { id: 'zksync', initials: 'ZK', name: 'zkSync Era', chain: 'Ethereum L2', type: 'BRIDGE', status: 'claim', reward: '$100–500', url: 'https://zksync.io', desc: 'Claim live', category: 'paid', color: 'hsl(190,65%,48%)' },

  // Ended
  { id: 'layerzero', initials: 'LZ', name: 'LayerZero', chain: 'Multi-chain', type: 'BRIDGE', status: 'ended', reward: '$100–10K', url: 'https://layerzero.network', desc: 'ZRO distributed', category: 'ended', color: 'hsl(220,50%,45%)' },
  { id: 'starknet', initials: 'ST', name: 'Starknet', chain: 'Starknet', type: 'TESTNET', status: 'ended', reward: '$200–5K', url: 'https://starknet.io', desc: 'STRK distributed', category: 'ended', color: 'hsl(280,55%,55%)' },
  { id: 'wormhole', initials: 'WH', name: 'Wormhole', chain: 'Multi-chain', type: 'BRIDGE', status: 'ended', reward: '$50–2K', url: 'https://wormhole.com', desc: 'W distributed', category: 'ended', color: 'hsl(30,70%,50%)' },
  { id: 'jupiter', initials: 'JP', name: 'Jupiter', chain: 'Solana', type: 'DEFI', status: 'ended', reward: '$200–5K', url: 'https://jup.ag', desc: 'JUP airdrop Jan 2024', category: 'ended', color: 'hsl(150,55%,45%)' },
  { id: 'eigenlayer', initials: 'EL', name: 'Eigenlayer', chain: 'Ethereum', type: 'DEFI', status: 'ended', reward: '$100–3K', url: 'https://eigenlayer.xyz', desc: 'EIGEN distributed', category: 'ended', color: 'hsl(200,50%,50%)' },
  { id: 'arbitrum', initials: 'AR', name: 'Arbitrum', chain: 'Ethereum L2', type: 'TESTNET', status: 'ended', reward: '$500–10K', url: 'https://arbitrum.io', desc: 'ARB Mar 2023', category: 'ended', color: 'hsl(220,65%,55%)' },
];

// --- State ---
let currentTab = 'free';
let currentFilter = 'all';
let currentSort = 'name';
let searchQuery = '';

// --- DOM Refs ---
const cardsGrid = document.getElementById('cardsGrid');
const emptyState = document.getElementById('emptyState');
const globalSearch = document.getElementById('globalSearch');
const sortSelect = document.getElementById('sortSelect');
const themeToggle = document.getElementById('themeToggle');
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const sidebarClose = document.getElementById('sidebarClose');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const lastUpdatedEl = document.getElementById('lastUpdated');

// --- Init ---
function init() {
  // Set last updated timestamp
  const now = new Date();
  lastUpdatedEl.textContent = now.toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit'
  });

  // Theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  // Render
  renderCards();

  // Events
  bindEvents();
}

// --- Render Cards ---
function renderCards() {
  let items = airdrops.filter(a => a.category === currentTab);

  // Search filter
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    items = airdrops.filter(a =>
      a.name.toLowerCase().includes(q) ||
      a.chain.toLowerCase().includes(q) ||
      a.type.toLowerCase().includes(q) ||
      a.desc.toLowerCase().includes(q)
    );
  }

  // Type filter
  if (currentFilter !== 'all') {
    items = items.filter(a => a.type === currentFilter);
  }

  // Sort
  items = [...items].sort((a, b) => {
    if (currentSort === 'name') return a.name.localeCompare(b.name);
    if (currentSort === 'reward') {
      const parseReward = s => {
        const match = s.match(/\$?([\d.]+)K?/);
        if (!match) return 0;
        let val = parseFloat(match[1]);
        if (s.includes('K')) val *= 1000;
        return val;
      };
      return parseReward(b.reward) - parseReward(a.reward);
    }
    if (currentSort === 'status') {
      const order = { live: 0, claim: 1, ended: 2 };
      return (order[a.status] ?? 3) - (order[b.status] ?? 3);
    }
    return 0;
  });

  // Empty state
  if (items.length === 0) {
    cardsGrid.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  cardsGrid.style.display = 'grid';
  emptyState.style.display = 'none';

  cardsGrid.innerHTML = items.map(a => {
    const statusClass = a.status === 'live' ? 'status-live'
      : a.status === 'soon' ? 'status-soon'
      : a.status === 'claim' ? 'status-claim'
      : 'status-ended';

    const statusLabel = a.status === 'live' ? 'Live'
      : a.status === 'soon' ? 'Soon'
      : a.status === 'claim' ? 'Claim'
      : 'Ended';

    const endedClass = a.status === 'ended' ? ' ended-card' : '';

    return `
      <div class="project-card${endedClass}" data-type="${a.type}">
        <div class="card-top">
          <div class="card-logo" style="background:${a.color}">${a.initials}</div>
          <div class="card-title-wrap">
            <div class="card-title">${a.name}</div>
            <div class="card-desc">${a.desc}</div>
          </div>
        </div>
        <div class="card-badges">
          <span class="badge badge-chain">${a.chain}</span>
          <span class="badge badge-type" data-type="${a.type}">${a.type}</span>
        </div>
        <div class="card-meta">
          <span class="status-badge ${statusClass}">
            <span class="status-dot"></span>
            ${statusLabel}
          </span>
          <span class="reward-range">${a.reward}</span>
        </div>
        <div class="card-bottom">
          <span class="card-chain-full">${a.chain}</span>
          <a href="${a.url}" target="_blank" rel="noopener" class="btn-visit">
            Visit
            <svg viewBox="0 0 12 12" fill="none"><path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// --- Events ---
function bindEvents() {
  // Tabs
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelector('.tab.active')?.classList.remove('active');
      tab.classList.add('active');
      currentTab = tab.dataset.tab;
      currentFilter = 'all';
      document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      document.querySelector('.chip[data-filter="all"]')?.classList.add('active');
      renderCards();
    });
  });

  // Filter chips
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelector('.chip.active')?.classList.remove('active');
      chip.classList.add('active');
      currentFilter = chip.dataset.filter;
      renderCards();
    });
  });

  // Sort
  sortSelect.addEventListener('change', () => {
    currentSort = sortSelect.value;
    renderCards();
  });

  // Search
  globalSearch.addEventListener('input', () => {
    searchQuery = globalSearch.value.trim();
    renderCards();
  });

  // Keyboard shortcut for search
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== globalSearch) {
      e.preventDefault();
      globalSearch.focus();
    }
    if (e.key === 'Escape') {
      globalSearch.blur();
      closeSidebar();
    }
  });

  // Theme toggle
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  // Mobile sidebar
  hamburger.addEventListener('click', openSidebar);
  sidebarClose.addEventListener('click', closeSidebar);
  sidebarOverlay.addEventListener('click', closeSidebar);

  // Nav items (update active tab)
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('.nav-item.active')?.classList.remove('active');
      item.classList.add('active');

      const page = item.dataset.page;
      const tabMap = { dashboard: 'free', free: 'free', paid: 'paid', ended: 'ended', watchlist: 'watchlist' };
      const targetTab = tabMap[page] || 'free';

      // Activate the corresponding tab button
      const tabBtn = document.querySelector(`.tab[data-tab="${targetTab}"]`);
      if (tabBtn) {
        document.querySelector('.tab.active')?.classList.remove('active');
        tabBtn.classList.add('active');
        currentTab = targetTab;
        currentFilter = 'all';
        document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
        document.querySelector('.chip[data-filter="all"]')?.classList.add('active');
        renderCards();
      }

      closeSidebar();
    });
  });
}

function openSidebar() {
  sidebar.classList.add('open');
  sidebarOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSidebar() {
  sidebar.classList.remove('open');
  sidebarOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// --- Start ---
init();
