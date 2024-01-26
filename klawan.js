document.getElementById('aboutLink').addEventListener('click', function() {
    loadContent('about.html');
});

document.getElementById('schoolsLink').addEventListener('click', function() {
    loadContent('schools.html');
});

document.getElementById('friendsLink').addEventListener('click', function() {
    loadContent('friends.html');
});

document.getElementById('familyLink').addEventListener('click', function() {
    loadContent('family.html');
});

function loadContent(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200){
            document.getElementById('content').innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}






function loadContent(url) {
    var contentContainer = document.getElementById('content');
    var dashboardContainer = document.getElementById('dashboardContainer');
    var menu = document.querySelector('.menu');
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');

    if (url === 'index.html') {
        // Hide other elements when loading the index 
        contentContainer.style.display = 'none';
        header.style.display = 'none';
        footer.style.display ='none';

        // Show the index container
        dashboardContainer.innerHTML = indexContent;
        dashboardContainer.style.display = 'block';
    } else {
        // Show other elements when loading non-index content
        header.style.display = 'block';
        dashboardContainer.style.display = 'none';
        footer.style.display = 'block';
        contentContainer.style.display = 'block';

        var xhttp = new XMLHttpRequestRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                contentContainer.innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }

    // Close the menu after laoding content
    menu.style.display = 'none';
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