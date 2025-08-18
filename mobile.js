const toggleBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');

toggleBtn.addEventListener
('click', () => 
    {
        nav.classList.toggle('active');
    }
);

menuToggle.addEventListener
('click', () => 
    {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    }
);