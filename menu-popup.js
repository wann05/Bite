function togglePopup() {
  const popup = document.getElementById("popupMenu");
  const hamburger = document.getElementById("hamburgerBtn");

  popup.classList.toggle("active");
  hamburger.classList.toggle("active");

  //  Jika menu baru saja muncul , tampilkan animasi lembut: animasi aipon
  if (popup.classList.contains("active")) {
    popup.animate(
      [
        { transform: "translateY(-20px) scale(0.9)", opacity: 0 },
        { transform: "translateY(5px) scale(1.03)", opacity: 1 },
        { transform: "translateY(0) scale(1)" },
      ],
      {
        duration: 500,
        easing: "cubic-bezier(0.25, 1.25, 0.5, 1)",
      }
    );
  }
}

// menutup popup kalo di klik di luar areanya
document.addEventListener("click", (event) => {
  const popup = document.getElementById("popupMenu");
  const hamburger = document.getElementById("hamburgerBtn");

  // Cek apakah klik terjadi di luar pop-up dan tombol hamburger
  if (!popup.contains(event.target) && !hamburger.contains(event.target)) {
    // Jika ya, tutup pop-up
    if (popup.classList.contains("active")) {
      togglePopup();
    }
  }
});

// tombol kembali ke atas
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("visible");
  } else {
    backToTopBtn.classList.remove("visible");Nikmati 
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  // Fungsi untuk cek ukuran layar dan tambahkan kelas animasi
  function handleResize() {
    if (window.innerWidth <= 768) {
      hamburger.classList.add('slide-in');
      navLinks.classList.remove('slide-in'); // atau kamu aktifkan hanya saat klik menu
    } else {
      hamburger.classList.remove('slide-in');
      navLinks.classList.remove('slide-in');
    }
  }

  // Cek saat pertama kali
  handleResize();

  // Cek ulang saat resize
  window.addEventListener('resize', handleResize);
