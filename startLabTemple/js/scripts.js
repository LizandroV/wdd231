import {temples} from "../data/temples.js";
import {url} from "../data/temples.js";

const showHere = document.querySelector("#showHere");
const mydialog = document.querySelector("#mydialog");
const mytitle = document.querySelector("#mydialog h2");
const myclose = document.querySelector("#mydialog button");
const myinfo = document.querySelector("#mydialog p");

myclose.addEventListener("click", () => mydialog.close());

// Create a function to display the temple information
function displayItems(data){
    data.forEach(item => {
        let article = document.createElement("article");
        let h2 = document.createElement("h2");
        let img = document.createElement("img");
        let p = document.createElement("p");

        h2.textContent = item.name;
        img.src = url + item.path;
        img.alt = item.name;
        p.textContent = `Dedicated: ${item.dedicated} by ${item.person}`;

        img.addEventListener("click", () => {
            mytitle.textContent = item.name;
            myinfo.textContent = `The ${item.name} was dedicated in ${item.dedicated} by ${item.person}.`;
            mydialog.showModal();
        });

        article.appendChild(h2);
        article.appendChild(img);
        article.appendChild(p);
        showHere.appendChild(article);
    });

}

displayItems(temples);