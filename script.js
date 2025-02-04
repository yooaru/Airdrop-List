function showTab(tabId) {
    document.querySelectorAll('.airdrop-list').forEach(list => {
        list.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`.tab[onclick="showTab('${tabId}')"]`).classList.add('active');
}
