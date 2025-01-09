function toggleMenu() {
    var navbarLinks = document.querySelector('.navbar-links.vertical-menu');
    navbarLinks.classList.toggle('active'); // Ajoute/retire la classe 'active' pour afficher/masquer le menu
}

function unToggleMenu() {
    var navbarLinks = document.querySelector('.navbar-links.vertical-menu');
    navbarLinks.classList.remove('active'); // Ajoute/retire la classe 'active' pour afficher/masquer le menu vertical
}