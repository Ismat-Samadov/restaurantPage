(()=>{"use strict";function e(){const e=document.getElementById("content"),t=document.createElement("div");t.textContent="Welcome to our restaurant! Enjoy our delicious meals.",e.appendChild(t)}e();const t=document.getElementById("home-tab"),n=document.getElementById("menu-tab"),c=document.getElementById("contact-tab");t.addEventListener("click",e),n.addEventListener("click",(function(){const e=document.getElementById("content"),t=document.createElement("div");t.textContent="Check out our menu:",e.appendChild(t)})),c.addEventListener("click",(function(){const e=document.getElementById("content"),t=document.createElement("div");t.textContent="Contact us at: example@example.com",e.appendChild(t)}))})();