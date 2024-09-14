
// NAVBAR
let list = document.querySelector('ul');
const navList = document.getElementById('list-nav');


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var links = document.querySelectorAll('#navlink a');
    var logo = document.getElementById('logo');
    console.log(links);

    if (window.scrollY > 50) {
        navbar.classList.add('bg-gray-700', 'text-white', 'shadow', 'z-10');
        navbar.classList.remove('bg-transparent', 'text-black', 'shadow');
        logo.classList.add('text-white');
        logo.classList.remove('text-black');

        links.forEach(function(link) {
            link.classList.add('text-white');
            link.classList.remove('text-black');
        });
    } else {
        navbar.classList.add('bg-transparent', 'text-black');
        navbar.classList.remove('bg-gray-700', 'text-white');
        logo.classList.add('text-black');
        logo.classList.remove('text-white');

        links.forEach(function(link) {
            link.classList.add('text-black');
            link.classList.remove('text-white');
        });
    }
});



function Menu(e) {
    if (e.name === 'menu') {
        e.name = 'close';
        list.classList.add('top-[80px]');
        list.style.opacity = '100';
        // list.classList.add('opacity-100');
    } else {
        e.name = 'menu';
        list.classList.remove('top-[80px]');
        list.style.opacity = '0';
        // list.classList.remove('opacity-100');
    }
}


  