/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("mobile-open");

        const menuIsOpen =
            navLinks.classList.contains("mobile-open");

        menuToggle.textContent =
            menuIsOpen ? "×" : "☰";

        menuToggle.setAttribute(
            "aria-label",
            menuIsOpen
                ? "Close navigation menu"
                : "Open navigation menu"
        );

    });


    /* Close menu when a link is clicked */

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            navLinks.classList.remove("mobile-open");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
    ".service-card, .industry-card, .process-step, .why-grid > div, .feature"
);


revealElements.forEach(element => {

    element.classList.add("reveal");

});


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    revealElements.forEach(element => {

        observer.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("visible");

    });

}


/* =========================
   QUOTE FORM
========================= */

const quoteForm = document.querySelector(".quote form");


if (quoteForm) {

    quoteForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.querySelector("#name").value.trim();

        const company =
            document.querySelector("#company").value.trim();

        const email =
            document.querySelector("#email").value.trim();

        const phone =
            document.querySelector("#phone").value.trim();

        const origin =
            document.querySelector("#origin").value.trim();

        const destination =
            document.querySelector("#destination").value.trim();

        const cargo =
            document.querySelector("#cargo").value.trim();

        const container =
            document.querySelector("#container").value.trim();

        const message =
            document.querySelector("#message").value.trim();


        if (
            !name ||
            !company ||
            !email ||
            !phone ||
            !origin ||
            !destination
        ) {

            alert(
                "Please fill in all required fields."
            );

            return;

        }


        const subject = encodeURIComponent(
            `Freight Quote Request - ${company}`
        );


        const body = encodeURIComponent(
`Name: ${name}

Company: ${company}

Email: ${email}

Phone: ${phone}

Origin: ${origin}

Destination: ${destination}

Cargo / Commodity: ${cargo}

Container Type: ${container}

Additional Information:
${message}`
        );


        /*
         * CHANGE THIS EMAIL ADDRESS
         * to your actual BlueRoute email.
         */

        window.location.href =
            `mailto:sales@blueroutelogistics.com?subject=${subject}&body=${body}`;

    });

}