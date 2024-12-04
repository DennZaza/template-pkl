const scrollButton = document.getElementById('jawir');
const portfolioSection = document.getElementById('asu');

// Tambahkan event listener pada tombol
scrollButton.addEventListener('click', () => {
    portfolioSection.scrollIntoView({
    behavior: 'smooth' // Animasi scroll halus
    });
});


const AboutButton = document.getElementById('AboutB');
const AboutSection = document.getElementById('AboutS');

// Tambahkan event listener pada tombol
AboutButton.addEventListener('click', () => {
    AboutSection.scrollIntoView({
    behavior: 'smooth' // Animasi scroll halus
    });
});

const ToolsButton = document.getElementById('ToolsB');
const ToolsSection = document.getElementById('ToolsS');

// Tambahkan event listener pada tombol
ToolsButton.addEventListener('click', () => {
    ToolsSection.scrollIntoView({
    behavior: 'smooth' // Animasi scroll halus
    });
});
