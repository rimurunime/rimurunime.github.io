// dark mode & light mode with text
// document.addEventListener('DOMContentLoaded', function() {
//     const toggleButton = document.getElementById('theme-switch');
//     const body = document.body;

//     const currentTheme = localStorage.getItem('theme');
//     if(currentTheme) {
//         body.classList.add(currentTheme);

//         if(currentTheme === 'light-mode') {
//             toggleButton.textContent = 'switch to dark mode';
//         }
//     }

//     toggleButton.addEventListener('click', function() {
//         body.classList.toggle('light-mode');

//         if(body.classList.contains('light-mode')) {
//             toggleButton.textContent = 'switch to dark mode';
//             localStorage.setItem('theme', 'light-mode');
//         } else {
//             toggleButton.textContent = 'switch to light mode';
//             localStorage.setItem('theme', 'dark-mode');
//         }
//     });
// });

// dark mode & light mode with icon
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-switch');
    const icon = toggleButton.querySelector('i');
    const body = document.body;

    // set theme based on local storage
    const currentTheme = localStorage.getItem('theme');
    if(currentTheme) {
        body.classList.add(currentTheme);

        if(currentTheme === 'light-mode') {
            icon.classList.replace('fa-sun', 'fa-moon');
        };
    };

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('light-mode');

        if(body.classList.contains('light-mode')) {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light-mode');
        } else {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark-mode');
        };
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

// 
// function showInfo() {
//     document.getElementById('info-description').classList.add('active');
//     document.getElementById('synopsis-description').classList.remove('active');
//     document.querySelector('.tab-button .active').classList.remove('active');
//     document.querySelectorAll('.tab-button')[0].classList.add('active');
// }

// function showSynopsis() {
//     document.getElementById('synopsis-description').classList.add('active');
//     document.getElementById('info-description').classList.remove('active');
//     document.querySelector('.tab-button .active').classList.remove('active');
//     document.querySelectorAll('.tab-button')[1].classList.add('active');
// }

// function showInfo() {
//     document.getElementById('info-description').classList.add('active');
//     document.getElementById('synopsis-description').classList.remove('active');

//     // Hapus kelas 'active' dari tombol aktif sebelumnya
//     document.querySelector('.tab-button.active').classList.remove('active');

//     // Tambahkan kelas 'active' pada tombol Info
//     document.querySelectorAll('.tab-button')[0].classList.add('active');
// }

// function showSynopsis() {
//     document.getElementById('synopsis-description').classList.add('active');
//     document.getElementById('info-description').classList.remove('active');

//     // Hapus kelas 'active' dari tombol aktif sebelumnya
//     document.querySelector('.tab-button.active').classList.remove('active');

//     // Tambahkan kelas 'active' pada tombol Sinopsis
//     document.querySelectorAll('.tab-button')[1].classList.add('active');
// }

// 
function showInfo() {
    console.log("Info button clicked");
    const infoDescription = document.getElementById('info-description');
    const synopsisDescription = document.getElementById('synopsis-description');

    infoDescription.classList.add('active');
    synopsisDescription.classList.remove('active');

    // Hapus kelas 'active' dari tombol aktif sebelumnya
    document.querySelector('.tab-button.active').classList.remove('active');
     // Tambahkan kelas 'active' pada tombol Info
    document.querySelectorAll('.tab-button')[0].classList.add('active');

    // Forcing a style update
    infoDescription.style.display = 'block';
    synopsisDescription.style.display = 'none';
}

function showSynopsis() {
    console.log("Synopsis button clicked");
    const infoDescription = document.getElementById('info-description');
    const synopsisDescription = document.getElementById('synopsis-description');

    synopsisDescription.classList.add('active');
    infoDescription.classList.remove('active');

    // Hapus kelas 'active' dari tombol aktif sebelumnya
    document.querySelector('.tab-button.active').classList.remove('active');

    // Tambahkan kelas 'active' pada tombol Sinopsis
    document.querySelectorAll('.tab-button')[1].classList.add('active');

    // Forcing a style update
    synopsisDescription.style.display = 'block';
    infoDescription.style.display = 'none';
}



// search chapter
// Select the search input and add an event listener
document.getElementById("chapterSearch").addEventListener("input", function() {
    const searchValue = this.value.toLowerCase();
    const chapters = document.querySelectorAll(".chapter-list .chapter-item");

    chapters.forEach(chapter => {
        const chapterText = chapter.querySelector("span").textContent.toLowerCase();
        if (chapterText.includes(searchValue)) {
            chapter.style.display = "flex"; // Ensure it displays in 'flex' mode to keep the layout
        } else {
            chapter.style.display = "none";
        }
    });
});



