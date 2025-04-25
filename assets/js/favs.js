document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn-megusta");

    buttons.forEach((btn, index) => {
        const slide = btn.closest(".swiper-slide");
        const product = {
            name: slide.querySelector("h4").textContent,
            price: parseFloat(slide.querySelector("p").textContent.replace("$", "").replace(" MXN", "")),
            image: new URL(slide.querySelector("img").getAttribute("src"), window.location.href).pathname
        };

        const favs = JSON.parse(localStorage.getItem("meGusta") || "[]");
        const isFav = favs.some(p => p.name === product.name);
        if (isFav) {
            btn.classList.add("activo");
        }

        btn.addEventListener("click", () => {
            let favs = JSON.parse(localStorage.getItem("meGusta") || "[]");
            const exists = favs.some(p => p.name === product.name);

            if (!exists) {
                favs.push(product);
                btn.classList.add("activo");
            } else {
                favs = favs.filter(p => p.name !== product.name);
                btn.classList.remove("activo");
            }

            localStorage.setItem("meGusta", JSON.stringify(favs));
        });
    });
});
