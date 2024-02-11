(() => {
    "use strict";

    function e() {
        const e = document.getElementById("content"),
            t = document.createElement("img");
        t.src = "images/img1.jpg", e.appendChild(t);
        const n = document.createElement("h1");
        n.textContent = "Welcome to Our Restaurant!", e.appendChild(n);
        const o = document.createElement("p");
        o.textContent = "Discover the finest cuisine and experience a wonderful dining atmosphere at our restaurant.", e.appendChild(o)
    }

    function t() {
        document.getElementById("content").innerHTML = ""
    }
    window.addEventListener("DOMContentLoaded", (() => {
        e();
        const n = document.getElementById("home-button"),
            o = document.getElementById("contact-button"),
            c = document.getElementById("menu-button");
        n.addEventListener("click", (() => {
            t(), e()
        })), o.addEventListener("click", (() => {
            t(),
                function () {
                    const e = document.getElementById("content"),
                        t = document.createElement("h1");
                    t.textContent = "Contact Us", e.appendChild(t);
                    const n = document.createElement("p");
                    n.textContent = "123 Restaurant Street, City, Country", e.appendChild(n);
                    const o = document.createElement("p");
                    o.textContent = "Phone: +123 456 7890", e.appendChild(o);
                    const c = document.createElement("p");
                    c.textContent = "Email: info@example.com", e.appendChild(c)
                }()
        })), c.addEventListener("click", (() => {
            t(),
                function () {
                    const e = document.getElementById("content"),
                        t = document.createElement("h1");
                    t.textContent = "Our Menu", e.appendChild(t);
                    const n = document.createElement("ul"),
                        o = document.createElement("li");
                    o.textContent = "Appetizers", n.appendChild(o);
                    const c = document.createElement("li");
                    c.textContent = "Main Courses", n.appendChild(c);
                    const d = document.createElement("li");
                    d.textContent = "Desserts", n.appendChild(d), e.appendChild(n)
                }()
        }))
    }))
})();