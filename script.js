function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// add an event lister to close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    var menu = document.querySelector('.menu');
    if (event.target !== menu && ! menu.contains(event.target)) {
        menu.style.display = 'none';
    }
});


var dashboardContent;

loadDashboardContent();

function loadDashboardContent() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            dashboardContent = this.responseText;
        }
    };
    xhttp.open("GET", 'dashboard.php', true);
    xhttp.send();
}

function loadContent(url) {
    var contentContainer = document.getElementById('content');
    var dashboardContent = document.getElementById('dashboardContainer');
    var header = document.querySelector('header');
    var footer = document.querySelector('footer');
    var menu = document.querySelector('.menu'); // Correct variable name

    if (url === 'dashboard.php') {
        contentContainer.style.display = 'none';
        dashboardContainer.innerHTML = dashboardContent; // Correct variable name
        dashboardContent.style.display = 'block';
    } else {
        dashboardContainer.style.display = 'none';
        contentContainer.innerHTML = '';
        contentContainer.style.display = 'block';
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {

                contentContainer.innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    // Close the menu after loading content
    menu.style.display = 'none';
}


function refreshContent() {
    // Assuming 'refresh.php' is a PHP file that returns updated content
    loadContent('refresh.php');
}

// Optional, you can set up a timer to refresh the content periodically
// setInterval(refreshContent, 60000); 
// Refresh every 60 seconds (adjust as needed)