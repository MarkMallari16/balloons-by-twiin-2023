function showProductModal({ title, imgSrc, price, detailsHtml }) {
  document.getElementById('productModalTitle').textContent = title;
  document.getElementById('productModalImg').src = imgSrc;
  document.getElementById('productModalImg').alt = title;
  document.getElementById('productModalPrice').textContent = price;
  document.getElementById('productModalDetails').innerHTML = detailsHtml;
  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
}

// All product modal details
const productModalDetails = {
  "Organic Full Balloon Arch": {
    price: "Price: ₱2,600",
    detailsHtml: `
          <p class="fs-6">Choice of 1-4 Colors</p>
          <ul class="fs-6">
            <li>Organic Shape: The arch features a unique organic shape, giving it a natural and flowing appearance. It adds a whimsical and artistic touch to your event decor.</li>
            <li>High-Quality Materials: Crafted from premium-quality materials, the Organic Full Round Arch is durable and long-lasting. It ensures that your arch remains intact throughout your event.</li>
          </ul>
              `
  },
  "Custom Balloon Bouquet": {
    price: "Price: ₱500",
    detailsHtml: `
          <p class="fs-6">Price starts at ₱500. Price varies depending on the design.<br>Choice of 1-4 Colors</p>
          <div id="modal-carousel" class="carousel slide mb-3">
            <div class="carousel-inner">
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#modal-carousel" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#modal-carousel" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
              `
  },
  "Basic Hug Balloon": {
    price: "Price: ₱670",
    detailsHtml: `
          <p class="fs-6">Choice of 1-4 Colors</p>
              `
  },
  "Basic Number Standee": {
    price: "Price: ₱200",
    detailsHtml: `
          <p class="fs-6">Width: 6ft Height 6ft</p>
              `
  },
  "Basic Table Topper": {
    price: "Price: ₱130",
    detailsHtml: `
          <p class="fs-6">Can choose any 18&quot; foil balloon<br>Choice of 1-4 Colors</p>
              `
  },
  "Dedication Balloon Wrap": {
    price: "Price: ₱560",
    detailsHtml: `
          <ul class="fs-6">
            <li>Suitable for birthdays, anniversaries, and corporate events.</li>
          </ul>
          <p>Choice of 1-4 Colors</p>
              `
  },
  "3ft Organic Single Row Garland": {
    price: "Price: ₱615",
    detailsHtml: `
          <p class="fs-6">Choice of 1-4 Colors</p>
          <ul class="fs-6">
            <li>Suitable for kids birthdays.</li>
          </ul>
              `
  },
  "6ft Organic Single Row Garland": {
    price: "Price: ₱860",
    detailsHtml: `
          <p class="fs-6">Choice of 1-4 Colors</p>
              `
  },
  "12ft Organic Single Row Garland": {
    price: "Price: ₱1,480",
    detailsHtml: `
          <p class="fs-6">Choice of 1-4 Colors</p>
              `
  },
  "Full Round Arch - Basic": {
    price: "Price: ₱1,900",
    detailsHtml: `
          <p class="fs-6">Choice of 1-4 Colors</p>
              `
  },
  "Welcome Board w/Garland": {
    price: "Price: ₱1,200",
    detailsHtml: `
          <p class="fs-6">Choice of 1-4 Colors</p>
              `
  },
  "Full Arch + Half Arch Backdrop": {
    price: "Price: ₱6,000",
    detailsHtml: `
          <p class="fs-6">Width: 8 Feet | Height: 8 Feet</p>
          <p class="fs-6">This setup requires a minimum 2 hours (ingress) and at least 1 hour of egress. Ingress and egress time will still depend on the extremity of chosen setup.</p>
          <ul class="fs-6"><li>Suitable for kids birthdays.</li></ul>
              `
  },
  "Full One-Panel Backdrop": {
    price: "Price: ₱5,500",
    detailsHtml: `
          <p class="fs-6">Width: 6 Feet | Height: 8 Feet</p>
          <p class="fs-6">This setup requires a minimum 2 hours (ingress) and at least an hour of egress. Ingress and egress time will still depend on the extremity of chosen setup.</p>
          <ul class="fs-6"><li>Suitable for kids birthdays.</li></ul>
              `
  },
  "Rectangular Backdrop": {
    price: "Price: ₱10,000",
    detailsHtml: `
          <p class="fs-6">Width: 14 Feet | Height: 8 Feet</p>
          <p class="fs-6">This setup requires a minimum 3 hours (ingress) and at least an hour of egress. Ingress and egress time will still depend on the extremity of chosen setup.</p>
          <ul class="fs-6"><li>Suitable for kids birthdays.</li></ul>
              `
  },
  "Simple One-Panel Backdrop": {
    price: "Price: ₱4,000",
    detailsHtml: `
          <p class="fs-6">Width: 6 Feet | Height: 8 Feet</p>
          <p class="fs-6">This setup requires a minimum 2 hours (ingress) and at least an hour of egress. Ingress and egress time will still depend on the extremity of chosen setup.</p>
          <ul class="fs-6"><li>Suitable for kids birthdays.</li></ul>
              `
  },
  "2-Arch & 1-Round Panels": {
    price: "Price: ₱10,000",
    detailsHtml: `
          <p class="fs-6">Width: 15 Feet | Height: 9 Feet</p>
          <p class="fs-6">This setup requires a minimum 3 hours (ingress) and at least an hour of egress. Ingress and egress time will still depend on the extremity of chosen setup.</p>
          <ul class="fs-6"><li>Suitable for kids birthdays.</li></ul>
              `
  },
  "Two Panel Backdrop": {
    price: "Price: ₱7,500",
    detailsHtml: `
          <p class="fs-6">Width: 10 Feet | Height: 8 Feet</p>
          <p class="fs-6">This setup requires a minimum 2 hours (ingress) and at least an hour of egress. Ingress and egress time will still depend on the extremity of chosen setup.</p>
          <ul class="fs-6"><li>Suitable for kids birthdays.</li></ul>
              `
  },
  "Three-Panel Backdrop": {
    price: "Price: ₱8,500",
    detailsHtml: `
          <p class="fs-6">Width: 10 Feet | Height: 8 Feet</p>
          <p class="fs-6">This setup requires a minimum 3 hours (ingress) and at least 1 hour of egress. Ingress and egress time will still depend on the extremity of chosen setup.</p>
          <p class="fs-6">Suitable for birthdays, anniversaries, and corporate events.</p>
              `
  },
  "Five-Panel Backdrop": {
    price: "Price: ₱15,000",
    detailsHtml: `
          <p class="fs-6">Width: 28 Feet | Height: 9 Feet</p>
          <ul class="fs-6"><li>Suitable for kids birthdays.</li></ul>
              `
  }
};

// Attach click event to all product cards for modal
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.product-list .card').forEach(card => {
    card.addEventListener('click', function () {
      const title = this.querySelector('.card-title').textContent.trim();
      const imgSrc = this.querySelector('.card-img-top').src;
      const details = productModalDetails[title];

      if (details) {
        showProductModal({
          title,
          imgSrc,
          price: details.price,
          detailsHtml: details.detailsHtml
        });
        // If carousel exists in modal, re-init Bootstrap carousel
        setTimeout(() => {
          if (document.getElementById('modal-carousel')) {
            new bootstrap.Carousel(document.getElementById('modal-carousel'));
          }
        }, 300);
      }
    });
  });
});
