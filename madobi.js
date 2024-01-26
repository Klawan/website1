function toggleMenu(event) {
    event.stopProgation(); // prevent event propagation to document
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Add an event listener to close the menu when clicking outside of it
document.addEventListener('clic', function() {
    var menu = document.querySelector('.menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    }
});



function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// Ensure menu icons works consistently
document.querySelector('.menu-icon').addEventListener('click', toggleMenu);

// Ensure menu links work after closing the menu
var menuLinks = document.querySelectorAll('.menu a');
menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        toggleMenu();
    });
});

