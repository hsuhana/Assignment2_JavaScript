
const pinkSmall = document.getElementById("pink");
const purpleSmall = document.getElementById("purple");
const redSmall = document.getElementById("red");
const whiteSmall = document.getElementById("white");
const yellowSmall = document.getElementById("yellow");

const mainImageSrc = document.getElementById("mainImage");
const captionsText = document.querySelector("figcaption");
const bodyTag = document.querySelector("body");


pinkSmall.addEventListener("click", function(){
    const pinkId = pinkSmall.id;
    mainImageSrc.src = `images/flowers-${pinkId}-large.jpg`;
    captionsText.textContent = "Market in Münster, North Rhine-Westphalia, Germany";
    bodyTag.style.background = "#676682";
    captionsText.style.color = "#f2c0e5";
});

purpleSmall.addEventListener("click", function(){
    const purpleId = purpleSmall.id;
    mainImageSrc.src = `images/flowers-${purpleId}-large.jpg`;
    captionsText.textContent = "Sentmaring Park, Münster, North Rhine-Westphalia, Germany";
    bodyTag.style.background = "rgb(110 89 108)";
    captionsText.style.color = "#cdccf8";
});

redSmall.addEventListener("click", function(){
    const redId = redSmall.id;
    mainImageSrc.src = `images/flowers-${redId}-large.jpg`;
    captionsText.textContent = "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany";
    bodyTag.style.background = "rgb(113 125 151)";
    captionsText.style.color = "rgb(255 194 194)";
});

whiteSmall.addEventListener("click", function(){
    const whiteId = whiteSmall.id;
    mainImageSrc.src = `images/flowers-${whiteId}-large.jpg`;
    captionsText.textContent = "Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany";
    bodyTag.style.background = "rgb(129 117 117)";
    captionsText.style.color = "rgb(234 234 234)";
});

yellowSmall.addEventListener("click", function(){
    const yellowId = yellowSmall.id;
    mainImageSrc.src = `images/flowers-${yellowId}-large.jpg`;
    captionsText.textContent = "Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany"; 
    bodyTag.style.background = "rgb(92 121 120)";
    captionsText.style.color = "rgb(255 246 190)";
});