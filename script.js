// Change main product image
function changeImage(src) {
  document.getElementById("mainImage").src = src;

  // Remove active class from all thumbnails
  const thumbnails = document.querySelectorAll(".img-thumbnail");
  thumbnails.forEach((thumb) => thumb.classList.remove("active"));

  // Add active class to clicked thumbnail
  event.target.classList.add("active");
}

// Quantity controls
document.getElementById("increaseQty").addEventListener("click", function () {
  const qtyInput = document.getElementById("quantity");
  qtyInput.value = parseInt(qtyInput.value) + 1;
});

document.getElementById("decreaseQty").addEventListener("click", function () {
  const qtyInput = document.getElementById("quantity");
  if (qtyInput.value > 1) {
    qtyInput.value = parseInt(qtyInput.value) - 1;
  }
});

// Initialize first thumbnail as active
document.querySelector(".img-thumbnail").classList.add("active");
