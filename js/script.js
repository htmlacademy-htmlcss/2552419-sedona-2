"use strict";

const body = document.body;
const modal = document.querySelector(".modal-container");
const hotelSearchBtn = document.querySelector(".hotel-search-button");
const modalCloseBtn = document.querySelector(".modal-close-button");

function toggleModal(show) {
  if (show) {
    modal.classList.remove("is-hidden");
    body.classList.add("modal-open"); //
  } else {
    modal.classList.add("is-hidden");
    body.classList.remove("modal-open");
  }
}

hotelSearchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  toggleModal(true);
});

modalCloseBtn.addEventListener("click", function () {
  toggleModal(false);
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    toggleModal(false);
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("is-hidden")) {
    toggleModal(false);
  }
});