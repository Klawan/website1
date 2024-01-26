var indexContent;

loadIndexContent();

function loadIndexContent() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            indexContent = this.responseText;
        }
    };
    xhttp.open("GET", 'index.html',true);
    xhttp.send();
}

function loadContent(url) {
    var container = document.querySelector('.container');
    var menu = document.querySelector('.menu');
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            container.innerHTML = this.responseText;
            menu.style.display = 'none'; // Close the menu after loading content
            header.style.display = 'block'; // Ensure header is displayed content
            footer.style.display = 'block'; // Ensure footer is displayed
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

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

function updateDateTime() {
    var currentDate = new Date();
    var option = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true};
    var formattedDateTime = currentDate.toLocaleDateString('en-US', option);

    document.getElementById('datetime').innerText = formattedDateTime;
}

// update every seconds
setInterval(updateDateTime,1000);

// initial update
updateDateTime();