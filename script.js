"use strict";
const btn = document.querySelector(".share-image");
const share = document.querySelector(".share-block");
console.log(btn, share);

btn.addEventListener("click", function (e) {
  e.preventDefault();
  share.classList.toggle("hidden");
});
