const scrollButton = document.getElementById('jawir');
const portfolioSection = document.getElementById('asu');

// Tambahkan event listener pada tombol
scrollButton.addEventListener('click', () => {
    portfolioSection.scrollIntoView({
    behavior: 'smooth' // Animasi scroll halus
    });
});


const AbousButton = document.getElementById('AboutB');
const AboutSection = document.getElementById('AboutS');

// Tambahkan event listener pada tombol
AbousButton.addEventListener('click', () => {
    AboutSection.scrollIntoView({
    behavior: 'smooth' // Animasi scroll halus
    });
});
