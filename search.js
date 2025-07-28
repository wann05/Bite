window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 0);
});

// tombol pwncarian
function filterMenu() {
  const filter = document.getElementById("searchInput").value.toLowerCase();
  const showMakanan = document.getElementById("filterMakanan").checked;
  const showMinuman = document.getElementById("filterMinuman").checked;

  const makananSection = document.querySelector(".makanan-section");
  const minumanSection = document.querySelector(".minuman-section");
  const makananItems = makananSection.querySelectorAll(".menu-item");
  const minumanItems = minumanSection.querySelectorAll(".menu-item");
  const noResultMessage = document.getElementById("noResultMessage");

  let makananFound = false,
    minumanFound = false;

  makananItems.forEach((item) => {
    const name = item.querySelector("h4").textContent.toLowerCase();
    const match = name.includes(filter) && showMakanan;
    item.classList.add("fade");
    item.style.display = match ? "block" : "none";
    if (match) makananFound = true;
    if (match) setTimeout(() => item.classList.add("fade-in"), 10);
    else item.classList.remove("fade-in");
  });

  minumanItems.forEach((item) => {
    const name = item.querySelector("h4").textContent.toLowerCase();
    const match = name.includes(filter) && showMinuman;
    item.classList.add("fade");
    item.style.display = match ? "block" : "none";
    if (match) minumanFound = true;
    if (match) setTimeout(() => item.classList.add("fade-in"), 10);
    else item.classList.remove("fade-in");
  });

  makananSection.style.display = makananFound ? "block" : "none";
  minumanSection.style.display = minumanFound ? "block" : "none";
  noResultMessage.style.display =
    makananFound || minumanFound ? "none" : "block";
}

document.getElementById("searchButton").addEventListener("click", filterMenu);
document.getElementById("searchInput").addEventListener("input", filterMenu);
document.getElementById("resetButton").addEventListener("click", () => {
  document.getElementById("searchInput").value = "";
  document.getElementById("filterMakanan").checked = true;
  document.getElementById("filterMinuman").checked = true;
  filterMenu();
});
document.getElementById("filterMakanan").addEventListener("change", filterMenu);
document.getElementById("filterMinuman").addEventListener("change", filterMenu);

// Jalankan sekali saat mulai
filterMenu();

// Tangkap elemen pop-up
const popup = document.getElementById("menuPopup");
const closeBtn = document.getElementById("closePopup");
const orderBtn = document.getElementById("orderButton");

// Isi konten popup saat item diklik
document.querySelectorAll(".menu-item").forEach((item) => {
  item.addEventListener("click", () => {
    const title = item.querySelector("h4").textContent;
    const price = item.querySelector(".item-price")?.textContent || "Rp 0";
    const desc =
      item.querySelector(".item-description")?.textContent ||
      "Deskripsi belum tersedia.";

    document.getElementById("popupTitle").textContent = title;
    document.getElementById("popupPrice").textContent = price;
    document.getElementById("popupDesc").textContent = desc;

    popup.classList.add("show");
  });
});

// Tutup popup
closeBtn.addEventListener("click", () => {
  popup.classList.remove("show");
});




