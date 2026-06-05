/* =========================
   MOBILE MENU
========================= */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

/* =========================
   HERO SLIDER
========================= */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  if (slides.length === 0) return;

  slides.forEach(slide => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

if (slides.length > 0) {
  setInterval(() => {
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);
  }, 4000);
}

/* =========================
   ACCORDION TIPS
========================= */
const tipCards = document.querySelectorAll(".tip-card");

tipCards.forEach(card => {
  const btn = card.querySelector(".show-btn");

  if (btn) {
    btn.addEventListener("click", () => {

      tipCards.forEach(item => {
        const itemBtn = item.querySelector(".show-btn");

        if (item !== card) {
          item.classList.remove("active");

          if (itemBtn) {
            itemBtn.innerHTML = "Lihat Penjelasan";
          }
        }
      });

      card.classList.toggle("active");

      if (card.classList.contains("active")) {
        btn.innerHTML = "Tutup Penjelasan";
      } else {
        btn.innerHTML = "Lihat Penjelasan";
      }

    });
  }
});

/* =========================
   ACCORDION PENYAKIT
========================= */
const accordionCards = document.querySelectorAll(".accordion-card");

accordionCards.forEach(card => {
  const btn = card.querySelector(".accordion-btn");
  const icon = btn ? btn.querySelector("span") : null;

  if (btn) {
    btn.addEventListener("click", () => {

      accordionCards.forEach(item => {
        const itemBtn = item.querySelector(".accordion-btn");
        const itemIcon = itemBtn ? itemBtn.querySelector("span") : null;

        if (item !== card) {
          item.classList.remove("active");

          if (itemIcon) {
            itemIcon.innerHTML = "+";
          }
        }
      });

      card.classList.toggle("active");

      if (icon) {
        icon.innerHTML = card.classList.contains("active") ? "−" : "+";
      }

    });
  }
});

/* =========================
   CEK REKOMENDASI SIMULASI
========================= */
function cekSimulasi() {
  const umurInput = document.getElementById("umurAyam");
  const suhuInput = document.getElementById("suhu");
  const kelembabanInput = document.getElementById("kelembaban");
  const jumlahInput = document.getElementById("jumlah");
  const hasil = document.getElementById("hasilRekomendasi");

  if (!hasil) return;

  const umur = Number(umurInput?.value || 0);
  const suhu = Number(suhuInput?.value || 0);
  const kelembaban = Number(kelembabanInput?.value || 0);
  const jumlah = Number(jumlahInput?.value || 0);

  let teks = "";

  if (umur <= 0) {
    teks += "Masukkan umur ayam terlebih dahulu. ";
  } else if (umur <= 7) {
    teks += "Ayam masih fase awal, lampu disarankan menyala 24 jam. ";
  } else if (umur <= 14) {
    teks += "Lampu disarankan menyala sekitar 20 jam per hari. ";
  } else if (umur <= 21) {
    teks += "Lampu disarankan menyala sekitar 16 jam per hari. ";
  } else {
    teks += "Lampu disarankan menyala sekitar 12 jam per hari. ";
  }

  if (suhu > 0) {
    if (suhu >= 34) {
      teks += "Suhu kandang terlalu panas, blower/kipas sebaiknya dinyalakan. ";
    } else if (suhu <= 28) {
      teks += "Suhu kandang cukup dingin, lampu pemanas perlu diperhatikan. ";
    } else {
      teks += "Suhu kandang cukup ideal. ";
    }
  }

  if (kelembaban > 0) {
    if (kelembaban >= 80) {
      teks += "Kelembaban terlalu tinggi, perbaiki sirkulasi udara. ";
    } else if (kelembaban <= 50) {
      teks += "Kelembaban cukup rendah, pastikan kandang tidak terlalu kering. ";
    } else {
      teks += "Kelembaban kandang cukup baik. ";
    }
  }

  if (jumlah > 0) {
    teks += `Jumlah ayam tercatat ${jumlah} ekor. `;
  }

  hasil.innerHTML = teks;
}

/* =========================
   LAMPU CONTROL
========================= */
function lampuOn() {
  const lamp = document.getElementById("lamp");
  const hasil = document.getElementById("hasilSimulasi");
  const statusLampu = document.getElementById("statusLampu");

  if (lamp) {
    lamp.classList.add("active");
  }

  if (hasil) {
    hasil.innerHTML = "Lampu kandang sedang menyala";
  }

  if (statusLampu) {
    statusLampu.innerHTML = "Lampu menyala";
  }
}

function lampuOff() {
  const lamp = document.getElementById("lamp");
  const hasil = document.getElementById("hasilSimulasi");
  const statusLampu = document.getElementById("statusLampu");

  if (lamp) {
    lamp.classList.remove("active");
  }

  if (hasil) {
    hasil.innerHTML = "Lampu kandang sedang mati";
  }

  if (statusLampu) {
    statusLampu.innerHTML = "Lampu mati";
  }
}

/* =========================
   KIPAS / BLOWER CONTROL
========================= */
function kipasOn() {
  const fan = document.getElementById("fan");
  const statusKipas = document.getElementById("statusKipas");

  if (fan) {
    fan.classList.add("active");
  }

  if (statusKipas) {
    statusKipas.innerHTML = "Kipas / blower menyala";
  }
}

function kipasOff() {
  const fan = document.getElementById("fan");
  const statusKipas = document.getElementById("statusKipas");

  if (fan) {
    fan.classList.remove("active");
  }

  if (statusKipas) {
    statusKipas.innerHTML = "Kipas / blower mati";
  }
}

/* =========================
   PAKAN OTOMATIS CONTROL
========================= */
function pakanOn() {
  const feedBox = document.getElementById("feedBox");
  const statusPakan = document.getElementById("statusPakan");

  if (feedBox) {
    feedBox.classList.add("active");
  }

  if (statusPakan) {
    statusPakan.innerHTML = "Pakan otomatis aktif";
  }
}

function pakanOff() {
  const feedBox = document.getElementById("feedBox");
  const statusPakan = document.getElementById("statusPakan");

  if (feedBox) {
    feedBox.classList.remove("active");
  }

  if (statusPakan) {
    statusPakan.innerHTML = "Pakan otomatis nonaktif";
  }
}

/* =========================
   PAGE TRANSITION KOTAK
========================= */
const transition = document.querySelector(".page-transition");

if (transition) {
  for (let i = 0; i < 48; i++) {
    const tile = document.createElement("div");
    tile.style.animationDelay = `${i * 0.02}s`;
    transition.appendChild(tile);
  }

  window.addEventListener("load", () => {
    transition.classList.add("active");

    setTimeout(() => {
      transition.classList.add("hide");
    }, 600);
  });

  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href && !href.startsWith("#") && !href.startsWith("javascript")) {
        e.preventDefault();

        transition.classList.remove("hide");
        transition.classList.add("active");

        setTimeout(() => {
          window.location.href = href;
        }, 700);
      }
    });
  });
}

/* =========================
   SPLASH SCREEN
========================= */
const splashScreen = document.getElementById("splashScreen");
const closeSplash = document.getElementById("closeSplash");

if (splashScreen) {
  setTimeout(() => {
    splashScreen.classList.add("hide");
  }, 5000);
}

if (closeSplash && splashScreen) {
  closeSplash.addEventListener("click", () => {
    splashScreen.classList.add("hide");
  });
}

/* =========================
   KIPAS / BLOWER CONTROL
========================= */
function kipasOn() {
  const iconKipas = document.getElementById("iconKipas");
  const statusKipas = document.getElementById("statusKipas");

  if (iconKipas) {
    iconKipas.classList.add("kipas-aktif");
  }

  if (statusKipas) {
    statusKipas.innerHTML = "Kipas / blower menyala";
  }
}

function kipasOff() {
  const iconKipas = document.getElementById("iconKipas");
  const statusKipas = document.getElementById("statusKipas");

  if (iconKipas) {
    iconKipas.classList.remove("kipas-aktif");
  }

  if (statusKipas) {
    statusKipas.innerHTML = "Kipas / blower mati";
  }
}

/* =========================
   PAKAN OTOMATIS CONTROL
========================= */
function pakanOn() {
  const containerPakan = document.getElementById("containerPakan");
  const statusPakan = document.getElementById("statusPakan");

  if (containerPakan) {
    containerPakan.classList.add("aktif");
  }

  if (statusPakan) {
    statusPakan.innerHTML = "Pakan otomatis aktif";
  }
}

function pakanOff() {
  const containerPakan = document.getElementById("containerPakan");
  const statusPakan = document.getElementById("statusPakan");

  if (containerPakan) {
    containerPakan.classList.remove("aktif");
  }

  if (statusPakan) {
    statusPakan.innerHTML = "Pakan otomatis nonaktif";
  }
}

function toggleNavbar(){
  const navbar = document.querySelector(".navbar");
  const btn = document.querySelector(".navbar-hide-btn");

  navbar.classList.toggle("hide-navbar");

  if(navbar.classList.contains("hide-navbar")){
    btn.innerHTML = "▼";
  }else{
    btn.innerHTML = "▲";
  }
}

function toggleDesktopMenu(){

  const navLinks =
  document.getElementById("navLinks");

  navLinks.classList.toggle("show");

}