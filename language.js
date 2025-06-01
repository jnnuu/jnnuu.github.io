function switchLang(lang) {
    document.querySelectorAll('[data-lang]').forEach(el => {
        el.style.display = (el.getAttribute('data-lang') === lang) ? '' : 'none';
    });

    localStorage.setItem('preferredLang', lang);
}

// Load saved language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    switchLang(savedLang);
});