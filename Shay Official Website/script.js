let menuIco = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                const linkId = link.getAttribute('href').substring(1); // Remove the '#' from href
                if (linkId === id) {
                    const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }
    });
};


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    menuIcon.classList.toggle('active');
}