const products = [
    {
        classes: "featured card col-md-6 col-lg-4 col-xl-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/featured-products/f1.jpg",
            alt: "product",
            modal: "#modal1"
        },
        name: "Organic Full Balloon Arch",
        price: 2600,
        priceDisplay: "₱2,600"
    },
    {
        classes: "featured bouquet card col-md-6 col-lg-4 col-xl-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/featured-products/f2.png",
            alt: "product",
            modal: "#modal2"
        },
        name: "Custom Balloon Bouquet",
        price: 500,
        priceDisplay: "₱500"
    },
    {
        classes: "featured bouquet card col-md-6 col-lg-4 col-xl-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/featured-products/f3.jpg",
            alt: "product",
            modal: "#modal3"
        },
        name: "Basic Hug Balloon",
        price: 670,
        priceDisplay: "₱670"
    },
    {
        classes: "featured bouquet card col-md-6 col-lg-4 col-xl-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/featured-products/f5.png",
            alt: "product",
            modal: "#modal4"
        },
        name: "Basic Number Standee",
        price: 200,
        priceDisplay: "₱200"
    },
    {
        classes: "bouquet card col-md-6 col-lg-4 col-xl-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/all-products/basic-table_topper.jpg",
            alt: "product",
            modal: "#modal5"
        },
        name: "Basic Table Topper",
        price: 130,
        priceDisplay: "₱130"
    },
    {
        classes: "bouquet card col-md-6 col-lg-4 col-xl-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/bouquet/dedication-balloon-Wrap.png",
            alt: "product",
            modal: "#modal6"
        },
        name: "Dedication Balloon Wrap",
        price: 560,
        priceDisplay: "₱560"
    },
    {
        classes: "garland card col-md-6 col-lg-4 col-xl-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/garland/organic-single-garland2.png",
            alt: "product",
            modal: "#modal7"
        },
        name: "3ft Organic Single Row Garland",
        price: 615,
        priceDisplay: "₱615"
    },
    {
        classes: "garland card col-md-6 col-lg-4 col-xl-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/garland/organic-single-garland3.png",
            alt: "product",
            modal: "#modal8"
        },
        name: "6ft Organic Single Row Garland",
        price: 860,
        priceDisplay: "₱860"
    },
    {
        classes: "garland card col-md-6 col-lg-4 col-xl-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/garland/organic-single-garland.png",
            alt: "product",
            modal: "#modal9"
        },
        name: "12ft Organic Single Row Garland",
        price: 1480,
        priceDisplay: "₱1,480"
    },
    {
        classes: "garland card col-md-6 col-lg-4 col-xl-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/garland/full-round-arch.png",
            alt: "product",
            modal: "#modal10"
        },
        name: "Full Round Arch - Basic",
        price: 1900,
        priceDisplay: "₱1,900"
    },
    {
        classes: "garland card col-md-6 col-lg-4 col-xl-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/garland/welcome-board-wgarland.jpg",
            alt: "product",
            modal: "#modal11"
        },
        name: "Welcome Board w/Garland",
        price: 1200,
        priceDisplay: "₱1,200"
    },
    {
        classes: "backdrop card col-md-6 col-lg-4 col-xl-3 mb-3 mt-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/panel-backdrop/full-arch-half-arch-backdrop.jpg",
            alt: "product",
            modal: "#modal12"
        },
        name: "Full Arch + Half Arch Backdrop",
        price: 6000,
        priceDisplay: "₱6,000"
    },
    {
        classes: "backdrop card col-md-6 col-lg-4 col-xl-3 justify-content-center mb-3 mt-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/panel-backdrop/full-one-panel-backdrop.jpg",
            alt: "product",
            modal: "#modal13"
        },
        name: "Full One-Panel Backdrop",
        price: 5500,
        priceDisplay: "₱5,500"
    },
    {
        classes: "backdrop card col-md-6 col-lg-4 col-xl-3 justify-content-center  mb-3 mt-3",
        style: "width: 18rem;",
        img: {
            src: "../assets/products/panel-backdrop/rectangular-bd.jpg",
            alt: "product",
            modal: "#modal14"
        },
        name: "Rectangular Backdrop",
        price: 10000,
        priceDisplay: "₱10,000"
    },
    {
        classes: "backdrop card col-md-6 col-lg-4 col-xl-3 justify-content-center mb-3 mt-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/panel-backdrop/simpleone-panelbackdrop.jpg",
            alt: "product",
            modal: "#modal15"
        },
        name: "Simple One-Panel Backdrop",
        price: 4000,
        priceDisplay: "₱4,000"
    },
    {
        classes: "backdrop card col-md-6 col-lg-4 col-xl-3 justify-content-center mb-3 mt-3",
        style: "width: 18rem;margin-top: 20px;",
        img: {
            src: "../assets/products/panel-backdrop/two-arch-one-round-panels-bd.jpg",
            alt: "product",
            modal: "#modal16"
        },
        name: "2-Arch & 1-Round Panels",
        price: 10000,
        priceDisplay: "₱10,000"
    },
    {
        classes: "backdrop card col-md-6 col-lg-4 col-xl-3 justify-content-center mb-3 mt-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/panel-backdrop/two-panel-bd.jpg",
            alt: "product",
            modal: "#modal17"
        },
        name: "Two Panel Backdrop",
        price: 7500,
        priceDisplay: "₱7,500"
    },
    {
        classes: "backdrop card col-md-6 col-lg-4 col-xl-3 justify-content-center mb-3 mt-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/panel-backdrop/three-panel_bd.jpg",
            alt: "product",
            modal: "#modal18"
        },
        name: "Three-Panel Backdrop",
        price: 8500,
        priceDisplay: "₱8,500"
    },
    {
        classes: "backdrop card col-md-6 col-lg-4 col-xl-3 justify-content-center mb-3 mt-3",
        style: "width: 18rem",
        img: {
            src: "../assets/products/panel-backdrop/five-panel-bd.jpg",
            alt: "product",
            modal: "#modal19"
        },
        name: "Five-Panel Backdrop",
        price: 15000,
        priceDisplay: "₱15,000"
    }
];

// Render products
document.addEventListener("DOMContentLoaded", function () {
    const productList = document.querySelector('.product-list');
    if (!productList) return;
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = product.classes;
        div.style = product.style;
        div.innerHTML = `
                <img src="${product.img.src}" class="py-5 card-img-top" alt="${product.img.alt}"
                  data-bs-toggle="modal" data-bs-target="${product.img.modal}">
                <div class="card-body">
                  <h5 class="card-title" data-name="${product.name}">${product.name}</h5>
                  <p class="card-text fw-bold" data-price="${product.price}">${product.priceDisplay}</p>
                </div>
              `;
        productList.appendChild(div);
    });
});

//modals
document.querySelectorAll('.card-img-top').forEach(img => {
    img.addEventListener('click', function () {
        const modalId = this.getAttribute('data-bs-target');
        const modal = document.querySelector(modalId);
        if (modal) {
            const modalTitle = modal.querySelector('.modal-header h5');
            const modalImg = modal.querySelector('.modal-body img');
            const cardTitle = this.closest('.card').querySelector('.card-title');
            const cardPrice = this.closest('.card').querySelector('.card-text');

            modalTitle.textContent = cardTitle.textContent;
            modalImg.src = this.src;
            modalImg.alt = this.alt;

            // Show the modal
            const bsModal = new bootstrap.Modal(modal);
            bsModal.show();
        }
    });
});
