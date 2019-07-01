var link = document.querySelector(".search-booking-link");
var popup = document.querySelector(".modal-booking");
var close = popup.querySelector(".modal-hidden");

var form = popup.querySelector("form");
var checkin = popup.querySelector("[name=checkin]");
var checkout = popup.querySelector("[name=check-out]");
var adult = popup.querySelector("[name=number-adult]");
var children = popup.querySelector("[name=number-children]");

var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("checkin");
  } catch (err) {
    isStorageSupport = false;
  }

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");

  if (storage) {
    checkin.value = storage;
    checkout.value = storage;
  } else {
    checkin.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!checkin.value || !checkout.value || !adult.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("checkin", checkin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      popup.classList.toggle("modal-hidden");
    }
  }
});



