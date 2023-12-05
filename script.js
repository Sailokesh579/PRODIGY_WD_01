document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#555';
        } else {
            navbar.style.backgroundColor = '#333';
        }
    });

    var menuItems = document.querySelectorAll('.navbar a');

    menuItems.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#555';
            this.style.color = 'white';
        });

        item.addEventListener('mouseout', function () {
            this.style.backgroundColor = '';
            this.style.color = 'white';
        });
    });
});