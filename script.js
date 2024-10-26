// dark mode & light mode
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-switch');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if(currentTheme) {
        body.classList.add(currentTheme);

        if(currentTheme === 'light-mode') {
            toggleButton.textContent = 'switch to dark mode';
        }
    }

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('light-mode');

        if(body.classList.contains('light-mode')) {
            toggleButton.textContent = 'switch to dark mode';
            localStorage.setItem('theme', 'light-mode');
        } else {
            toggleButton.textContent = 'switch to light mode';
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});

// scroll to top
const scrollToTop = document.getElementById('scrollToTopId');

document.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY  || document.documentElement.scrollTop;

    if(scrollPosition > 200) {
        scrollToTopId.style.display = 'block';
    } else {
        scrollToTopId.style.display = 'none';
    }

    console.log(scrollPosition);
})

document.addEventListener('DOMContentLoaded',function() {
    scrollToTopId.style.display = 'none';
})

function scrollToTopClick() {
    window.scrollTo({ top: 0, behavior: 'smooth'});
};

