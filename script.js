// ===== AIRDROP DATA =====
const airdrops = {
    free: [
        { name: "Monad", initial: "MO", chain: "Monad", type: "TESTNET", status: "live", reward: "$500-5K", url: "https://testnet.monad.xyz", desc: "EVM L1 testnet" },
        { name: "Berachain", initial: "BR", chain: "Berachain", type: "TESTNET", status: "live", reward: "$200-2K", url: "https://bartio.berachain.com", desc: "PoL consensus L1" },
        { name: "Abstract", initial: "AB", chain: "zkSync L2", type: "TESTNET", status: "live", reward: "$100-1K", url: "https://abs.xyz", desc: "Consumer L2 by Igloo" },
        { name: "Corn Network", initial: "CN", chain: "L2", type: "TESTNET", status: "live", reward: "$50-500", url: "https://usecorn.com", desc: "BTC-powered L2" },
        { name: "Hana", initial: "HN", chain: "Multi", type: "DEPIN", status: "live", reward: "$50-300", url: "https://hana.network", desc: "DePIN + AA wallet" },
        { name: "Ink Chain", initial: "IK", chain: "OP Stack", type: "TESTNET", status: "live", reward: "$100-800", url: "https://inkonchain.com", desc: "Kraken L2" },
        { name: "Soneium", initial: "SN", chain: "OP Stack", type: "TESTNET", status: "live", reward: "$100-500", url: "https://soneium.org", desc: "Sony L2 - Minato" },
        { name: "Eclipse", initial: "EC", chain: "SVM L2", type: "TESTNET", status: "live", reward: "$200-1K", url: "https://eclipse.xyz", desc: "Solana VM on ETH" },
        { name: "Fuel Network", initial: "FL", chain: "Fuel", type: "TESTNET", status: "live", reward: "$100-600", url: "https://fuel.network", desc: "Modular execution" },
        { name: "Grass", initial: "GR", chain: "Solana", type: "DEPIN", status: "live", reward: "$30-200", url: "https://getgrass.io", desc: "Bandwidth DePIN" },
        { name: "Pipe Network", initial: "PN", chain: "Solana", type: "DEPIN", status: "live", reward: "$50-400", url: "https://pipenetwork.com", desc: "CDN DePIN" },
        { name: "WalletConnect", initial: "WC", chain: "Multi", type: "SOCIAL", status: "live", reward: "$50-300", url: "https://cloud.walletconnect.com", desc: "WCT token rewards" },
        { name: "Starknet dApps", initial: "ST", chain: "Starknet", type: "DEFI", status: "live", reward: "$50-500", url: "https://starknet.io", desc: "Ecosystem incentives" },
        { name: "Zora", initial: "ZR", chain: "Ethereum", type: "SOCIAL", status: "live", reward: "$50-300", url: "https://zora.co", desc: "NFT + social layer" }
    ],
    paid: [
        { name: "Kinto", initial: "KT", chain: "Ethereum", type: "DEFI", status: "live", reward: "$200-2K", url: "https://kinto.xyz", desc: "KYC L2 - deposit needed" },
        { name: "Linea", initial: "LN", chain: "Ethereum L2", type: "BRIDGE", status: "live", reward: "$100-1K", url: "https://linea.build", desc: "Consensys zkEVM" },
        { name: "Scroll", initial: "SC", chain: "Ethereum L2", type: "BRIDGE", status: "live", reward: "$100-800", url: "https://scroll.io", desc: "zkEVM - bridge + dApps" },
        { name: "zkSync Era", initial: "ZK", chain: "Ethereum L2", type: "BRIDGE", status: "ended-claim", reward: "$100-500", url: "https://zksync.io", desc: "Claim live - check eligibility" }
    ],
    ended: [
        { name: "LayerZero", initial: "LZ", chain: "Multi-chain", type: "BRIDGE", status: "ended", reward: "$100-10K", url: "https://layerzero.network", desc: "ZRO distributed" },
        { name: "Starknet", initial: "ST", chain: "Starknet", type: "TESTNET", status: "ended", reward: "$200-5K", url: "https://starknet.io", desc: "STRK distributed" },
        { name: "Wormhole", initial: "WH", chain: "Multi-chain", type: "BRIDGE", status: "ended", reward: "$50-2K", url: "https://wormhole.com", desc: "W distributed" },
        { name: "Jupiter", initial: "JP", chain: "Solana", type: "DEFI", status: "ended", reward: "$200-5K", url: "https://jup.ag", desc: "JUP airdrop Jan 2024" },
        { name: "Eigenlayer", initial: "EL", chain: "Ethereum", type: "DEFI", status: "ended", reward: "$100-3K", url: "https://eigenlayer.xyz", desc: "EIGEN distributed" },
        { name: "Arbitrum", initial: "AR", chain: "Ethereum L2", type: "TESTNET", status: "ended", reward: "$500-10K", url: "https://arbitrum.io", desc: "ARB Mar 2023" }
    ]
};

// ===== SVG ICONS =====
const icons = {
    external: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>'
};

// ===== STATE =====
let currentTab = 'free-airdrop';
let currentFilter = 'all';
let searchTerm = '';

// ===== RENDER =====
function renderAirdrops() {
    const lists = {
        'free-airdrop': airdrops.free,
        'paid-airdrop': airdrops.paid,
        'ended': airdrops.ended
    };

    Object.entries(lists).forEach(([tabId, items]) => {
        const container = document.getElementById(tabId);
        if (!container) return;

        let filtered = items.filter(item => {
            const matchSearch = !searchTerm ||
                item.name.toLowerCase().includes(searchTerm) ||
                item.chain.toLowerCase().includes(searchTerm) ||
                item.type.toLowerCase().includes(searchTerm) ||
                item.desc.toLowerCase().includes(searchTerm);
            const matchTag = currentFilter === 'all' || item.type === currentFilter;
            return matchSearch && matchTag;
        });

        if (filtered.length === 0) {
            container.innerHTML = '<div class="empty-state"><div class="empty-icon">&#128270;</div><p>No airdrops found</p></div>';
            return;
        }

        container.innerHTML = filtered.map(item => {
            const statusLabel = item.status === 'live' ? 'Live' :
                               item.status === 'upcoming' ? 'Soon' :
                               item.status === 'ended-claim' ? 'Claim' : 'Ended';
            const badgesStr = item.chain + ' | ' + item.type + ' | ' + statusLabel + ' | ' + item.reward;
            return '<div class="airdrop-item" data-type="' + item.type + '" data-badges="' + badgesStr + '">' +
                '<div class="project-name">' +
                    '<div class="project-logo">' + item.initial + '</div>' +
                    '<div><div>' + item.name + '</div><div class="project-meta">' + item.desc + '</div></div>' +
                '</div>' +
                '<span class="chain-badge">' + item.chain + '</span>' +
                '<span class="type-badge ' + item.type + '">' + item.type + '</span>' +
                '<span class="status-badge ' + item.status + '"><span class="status-dot-sm ' + item.status + '"></span> ' + statusLabel + '</span>' +
                '<span class="reward-est">' + item.reward + '</span>' +
                '<a href="' + item.url + '" target="_blank" rel="noopener" class="visit-btn">Visit ' + icons.external + '</a>' +
            '</div>';
        }).join('');
    });

    updateCounts();
}

function updateCounts() {
    const total = airdrops.free.length + airdrops.paid.length + airdrops.ended.length;
    const active = airdrops.free.length + airdrops.paid.filter(a => a.status !== 'ended').length;
    const endedCount = airdrops.ended.length;

    document.getElementById('total-count').textContent = total;
    document.getElementById('active-count').textContent = active;
    document.getElementById('ended-count').textContent = endedCount;
    document.getElementById('free-count').textContent = airdrops.free.length;
    document.getElementById('paid-count').textContent = airdrops.paid.length;
    document.getElementById('ended-tab-count').textContent = airdrops.ended.length;
}

// ===== TAB SWITCHING =====
function showTab(tabId) {
    currentTab = tabId;
    document.querySelectorAll('.airdrop-list').forEach(list => { list.style.display = 'none'; });
    document.getElementById(tabId).style.display = 'block';
    document.querySelectorAll('.tab').forEach(tab => { tab.classList.remove('active'); });
    document.querySelector('.tab[data-tab="' + tabId + '"]').classList.add('active');
    renderAirdrops();
}

// ===== SEARCH =====
function filterAirdrops() {
    searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();
    renderAirdrops();
}

// ===== TAG FILTER =====
function filterByTag(tag) {
    currentFilter = tag;
    document.querySelectorAll('.filter-tag').forEach(btn => { btn.classList.remove('active'); });
    event.target.classList.add('active');
    renderAirdrops();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', function() {
    renderAirdrops();
    var now = new Date();
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    document.getElementById('last-updated').textContent = months[now.getMonth()] + ' ' + now.getDate() + ', ' + now.getFullYear();
});
