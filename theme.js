const themeBtn = document.getElementById("themeBtn");

// Tema değiştirme
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeBtn.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
  });
}

// Sayfa geçiş animasyonu
document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  if (main) {
    main.classList.add("fade-in");
  }

  // Linklere tıklandığında çıkış animasyonu
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", e => {
        e.preventDefault();
        const href = link.getAttribute("href");
        if (main) {
          main.classList.remove("fade-in");
          main.classList.add("fade-out");
          setTimeout(() => {
            window.location.href = href;
          }, 400); // animasyon süresine göre
        }
      });
    }
  });
});
//sayfa geçşlerinde karanlık mod bozuluyor aycı icon bazen guncellenmıyor.