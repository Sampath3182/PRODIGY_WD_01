const navbar = document.getElementById('navbar');
const navItems = document.getElementsByClassName('nav-item');

// Function to update the background color
function updateNavbarColor() {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Change style on scroll
window.onscroll = updateNavbarColor;

// Change background color of the navbar on window resize
window.onresize = updateNavbarColor;

// Change background color of the navbar on hover
for (let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('mouseenter', function() {
        navbar.style.backgroundColor = '#2c3e50'; /* Change the navbar background color on hover */
    });

    navItems[i].addEventListener('mouseleave', function() {
        updateNavbarColor(); // Restore the background color based on scroll position
    });
}
