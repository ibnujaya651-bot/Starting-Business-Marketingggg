function login() {
  if (username.value === "admin" && password.value === "1234") {
    loginBox.classList.add("hidden");
    dashboard.classList.remove("hidden");
  } else {
    error.innerText = "Username atau password salah";
  }
}

function logout() {
  dashboard.classList.add("hidden");
  loginBox.classList.remove("hidden");
}

// SEARCH PRODUK
function searchProduct() {
  let keyword = searchInput.value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(keyword)
      ? "block"
      : "none";
  });
}

// DETAIL PRODUK
function showDetail(type) {
  let title = "";
  let desc = "";
  let price = "";

  if (type === "ebook") {
    title = "E-Book Digital Marketing";
    desc = "E-book ini membahas strategi pemasaran digital, media sosial, dan iklan online untuk pemula.";
    price = "Harga: Rp50.000";
  } else if (type === "template") {
    title = "Template Konten Instagram";
    desc = "Template desain siap pakai untuk promosi produk di Instagram.";
    price = "Harga: Rp30.000";
  } else if (type === "kelas") {
    title = "Kelas Online Digital Marketing";
    desc = "Kelas online untuk belajar digital marketing dari dasar sampai mahir.";
    price = "Harga: Rp150.000";
  }

  detailTitle.innerText = title;
  detailDesc.innerText = desc;
  detailPrice.innerText = price;

  detailBox.classList.remove("hidden");
}

function closeDetail() {
  detailBox.classList.add("hidden");
}
