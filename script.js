const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
filterButtons.forEach(button=>{
button.addEventListener('click', () =>{
filterButtons.forEach(btn => btn.classList.remove('active'));
button.classList.add('active');
const filterValue = button.getAttribute('data-filter');
cards.forEach(card=>{
    const cardTag = card.getAttribute('data-tag');

        if (filterValue === 'all' || cardTag === filterValue) {
            card.style.display = 'block'; 
            card.style.animation = 'fadeInUp 0.5s ease forwards'; 
        }
        else {
            card.style.display = 'none'; }
});
});
});
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click',() =>{
    document.body.classList.toggle('dark');
});
const toTopBtn = document.getElementById('to-top');
window.addEventListener('scroll', () => {
    if(window.scrollY > 500)
    {
        toTopBtn.classList.add('visible');
    }
    else
    {
        toTopBtn.classList.remove('visible');
    }
});
toTopBtn.addEventListener('click',() => {
    window.scroll({top:0,
        behavior: 'smooth'
    });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});