const pages = document.querySelectorAll('.page');
let currentPage = 0;

function showPage(index) {
    // Ukloni aktivnu klasu sa svih stranica
    pages.forEach(page => page.classList.remove('active'));
    // Dodaj aktivnu klasu na trenutnu
    pages[index].classList.add('active');
    
    // Vrati scroll na vrh stranice u slučaju da je čitala dug tekst
    pages[index].scrollTop = 0; 
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
    }
}