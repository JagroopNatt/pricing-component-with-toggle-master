const toggleBtn = document.getElementById("checkbox");

const pricesAnnually = document.querySelectorAll(".anually");

const pricesMonthly = document.querySelectorAll(".monthly");

toggleBtn.addEventListener("change", function () {
  if (this.checked) {
    pricesAnnually.forEach((price) => (price.style.display = "none"));
    pricesMonthly.forEach((price) => (price.style.display = "block"));
  } else {
    pricesAnnually.forEach((price) => (price.style.display = "block"));
    pricesMonthly.forEach((price) => (price.style.display = "none"));
  }
});
