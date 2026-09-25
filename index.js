 
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
  import { getDatabase, ref, onValue, get} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB0HdY9mQuigeKYOAC4ZEDmTKPJ-s2BOQw",
    authDomain: "varshnay-gallery-db177.firebaseapp.com",
    databaseURL: "https://varshnay-gallery-db177-default-rtdb.firebaseio.com",
    projectId: "varshnay-gallery-db177",
    storageBucket: "varshnay-gallery-db177.firebasestorage.app",
    messagingSenderId: "974095088702",
    appId: "1:974095088702:web:ed0e0ef3d7eaa93d71e56f"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

const paintingsketch = document.getElementById("painting-sketch");
const sublimation = document.getElementById("sublimation");
const resin = document.getElementById("resin");
const painting = document.getElementById("painting");
 

const dataref = ref(db,"varshnay gallery");

onValue(dataref, (snapshort)=>{
  const data = snapshort.val();
  // console.log(data);
 paintingsketch.innerHTML = "";
  sublimation.innerHTML = "";
  resin.innerHTML = " ";
  painting.innerHTML = "";



  for (let key in data){
    let item = data[key];

    if(item.category === "painting-sketch"){
      let img = document.createElement("img");
      img.src = item.photo;
      img.style.width = "150px";
paintingsketch.appendChild(img);
    }
     
     if(item.category === "sublimation"){
      let img = document.createElement("img");
      img.src = item.photo;
      img.style.width = "150px";
      sublimation.appendChild(img);
    }
    
    if(item.category === "resin"){
      let img = document.createElement("img");
      img.src = item.photo;
      img.style.width = "150px";
      resin.appendChild(img);
    }

     if(item.category === "painting"){
      let img = document.createElement("img");
      img.src = item.photo;
      img.style.width = "150px";
      painting.appendChild(img);
    }


  }
})


 //popup

let xyz= document.getElementById("xyz");  
let acb = document.getElementById("acb");

[xyz, acb].forEach(btn =>{ 
  if (!btn) return;
btn.onclick = function (e) {
  e.preventDefault();
  let div = document.createElement("div")
  
  div.id = "popupz";
  document.body.style.overflow = "hidden";
 
  div.innerHTML = `
   <ul>
    <li><a href="index.html" id="about-close">X</a></li>
   </ul>
  <div id="about";>

   
  <p>
  About Us
Here is a short, clean, and highly readable About Us section styled with professional headings for your website:

About Pratishtha Creations
Pratishtha Creations is a premium personalised gifting and creative printing brand. We turn your beautiful art, memories, and ideas into thoughtful gifts. From custom hampers to professional printing solutions, we design everything according to your photos, themes, and personal requirements to make every occasion memorable.

What We Offer

* Customised Gifts: Personalised hampers, photo frames, resin art, sketches, paintings, custom mugs, keychains, and diaries.
* Printing Solutions: Sublimation & laser printing on pens/stationery, product stickers, custom labels, visiting cards, and invitation cards.
* Bespoke Packaging: Custom gift boxes and unique packaging designs tailored for individuals and corporate needs.

Store Location & Shipping

*  Physical Store: Pratishtha Photo Point, Purani Mandi, Anupshahar, Uttar Pradesh.
*  Delivery: We safely ship our products across all of India.

## Important Policy
⚠️ Note: Since all our products are custom-made according to individual orders, they are non-returnable and non-refundable. Please double-check your custom details before finalising the order.
Would you like me to make this summary even shorter, or do you want to add details like a WhatsApp contact number or email address to the location section?


Get in Touch
Call / WhatsApp:9058116902
Instagram: Pratishtha Photo Point
Store: Pratishtha Photo Point, Purani Mandi, Anupshahr , Uttar Pradesh

Pratishtha Creations

Personalised Gifts • Art • Printing • Memories

  </p>
  
  </div>
  

`;
  document.body.appendChild(div);

}
 }) 



 //popup




window.openWhatsApp = function(name, price) {
    const myNumber = "919058116902";
    const message = `Hello, I want to buy this item:\n\n*Name:* ${name}\n*Price:* ₹${price}`;
   let iurl = `https://wa.me/${myNumber}?text=${encodeURIComponent(message)}`;
    window.open(iurl, "-blank");
}



let paintingsketch1 = document.getElementById("painting-sketch1");
let sublimation1 = document.getElementById("sublimation1");
let resin1 = document.getElementById("resin1");
let painting1 = document.getElementById("painting1");

onValue(ref(db, "varshnay gallery" ), (snapshot)=>{
 
  paintingsketch1.innerHTML = "";
   let data = snapshot.val();
 
 for (let key in data){
    let item = data[key];

  if(item.category === "painting-sketch"){

    let cardWrapper = document.createElement("div");
      cardWrapper.className = "product-card"; 


      let img = document.createElement("img"); 
      img.src = item.photo;

      let dataDiv = document.createElement("div");
      dataDiv.className = "card-data"; 


      let name = document.createElement("h3");
      name.id ="name";
      name.innerText = item.name;
      let price = document.createElement("p");
      price.id ="price";
      price.innerText = "₹ " +item.price;
cardWrapper.append(img, dataDiv, name, price);
paintingsketch1.appendChild(cardWrapper);

cardWrapper.addEventListener("click", function () {
          const popup1 = document.getElementById("custom-popup");
          const popupData = document.getElementById("popup-data");
          popup1.style.display = "flex";
           popupData.innerHTML =`
           <div class="popup-layout">
      <img src="${item.photo}" alt="${item.name}" class="popup-img">

      <h2 class="popup-title">${item.name}</h2>
      
      <p class="popup-price">₹ ${item.price}</p>
      <p class="ret">${item.return}</p>
      
      <p class="popup-desc">
        ${item.desc}
      </p>
      
      
      <button class="popup-buy-btn" onclick="window.openWhatsApp('${item.name.replace(/'/g, "\\'")}', '${item.price}')">
        Buy Now
      </button>

    </div>`;
 

});
  
    }
  }
});




onValue(ref(db, "varshnay gallery" ), (snapshot)=>{
 
  sublimation1.innerHTML = "";
   let data = snapshot.val();
  
 for (let key in data){
    let item = data[key];

if (item.category === "sublimation"){

 let cardWrapper = document.createElement("div");
      cardWrapper.className = "product-card"; 


  let img = document.createElement("img"); 
      img.src = item.photo;

let dataDiv = document.createElement("div");
      dataDiv.className = "card-data"; 

     let name = document.createElement("h3");
      name.id ="name";
      name.innerText = item.name;
      let price = document.createElement("p");
      price.id ="price";
      price.innerText = "₹ " +item.price;
      cardWrapper.append(img, dataDiv, name, price);
      sublimation1.append(cardWrapper);

cardWrapper.addEventListener("click", function () {
          const popup1 = document.getElementById("custom-popup");
          const popupData = document.getElementById("popup-data");
          
          popup1.style.display = "flex";
          popupData.innerHTML =`
           <div class="popup-layout">
      <img src="${item.photo}" alt="${item.name}" class="popup-img">

      <h2 class="popup-title">${item.name}</h2>
      
      <p class="popup-price">₹ ${item.price}</p>
      
      <p class="popup-desc">
        ${item.desc}
      </p>
      
      <button class="popup-buy-btn" onclick="window.openWhatsApp('${item.name.replace(/'/g, "\\'")}', '${item.price}')">
        Buy Now
      </button>

    </div>`;
 

});
}
}
})


onValue(ref(db, "varshnay gallery" ), (snapshot)=>{
 
  resin1.innerHTML = "";
   let data = snapshot.val();
  
 for (let key in data){
    let item = data[key];

if (item.category === "resin"){

 let cardWrapper = document.createElement("div");
      cardWrapper.className = "product-card";
      

  let img = document.createElement("img"); 
      img.src = item.photo;

let dataDiv = document.createElement("div");
      dataDiv.className = "card-data"; 

     let name = document.createElement("h3");
      name.id ="name";
      name.innerText = item.name;
      let price = document.createElement("p");
      price.id ="price";
      price.innerText = "₹ " +item.price;
      cardWrapper.append(img, dataDiv, name, price);
      resin1.append(cardWrapper);

cardWrapper.addEventListener("click", function () {
          const popup1 = document.getElementById("custom-popup");
          const popupData = document.getElementById("popup-data");
          
          popup1.style.display = "flex";
          popupData.innerHTML =`
           <div class="popup-layout">
      <img src="${item.photo}" alt="${item.name}" class="popup-img">

      <h2 class="popup-title">${item.name}</h2>
      
      <p class="popup-price">₹ ${item.price}</p>
      
      <p class="popup-desc">
        ${item.desc}
      </p>
      
      <button class="popup-buy-btn" onclick="window.openWhatsApp('${item.name.replace(/'/g, "\\'")}', '${item.price}')">
        Buy Now
      </button>

    </div>`;
 

});
}
}
})

onValue(ref(db, "varshnay gallery" ), (snapshot)=>{
 
  painting1.innerHTML = "";
   let data = snapshot.val();
  
 for (let key in data){
    let item = data[key];

if (item.category === "painting"){

 let cardWrapper = document.createElement("div");
      cardWrapper.className = "product-card"; 
      



  let img = document.createElement("img"); 
      img.src = item.photo;

let dataDiv = document.createElement("div");
      dataDiv.className = "card-data"; 

     let name = document.createElement("h3");
      name.id ="name";
      name.innerText = item.name;
      let price = document.createElement("p");
      price.id ="price";
      price.innerText = "₹ " +item.price;
      cardWrapper.append(img, dataDiv, name, price);
      painting1.append(cardWrapper);

cardWrapper.addEventListener("click", function () {
          const popup1 = document.getElementById("custom-popup");
          const popupData = document.getElementById("popup-data");
          popup1.style.display = "flex";
          popupData.innerHTML =`
           <div class="popup-layout">
      <img src="${item.photo}" alt="${item.name}" class="popup-img">

      <h2 class="popup-title">${item.name}</h2>
      
      <p class="popup-price">₹ ${item.price}</p>
      
      <p class="popup-desc">
        ${item.desc}
      </p>
      
      <button class="popup-buy-btn" onclick="window.openWhatsApp('${item.name.replace(/'/g, "\\'")}', '${item.price}')">
        Buy Now
      </button>

    </div>`;
 
});
}
}
})
  

// Popup band karne ke liye (X button aur outside click)
 const popup = document.getElementById("custom-popup");
 const closeBtn = document.querySelector(".close-btn");

if (closeBtn) {
     closeBtn.onclick = function() {
         popup.style.display = "none";
     }
 }

window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
     }
 }




let search4 = document.getElementById("search");
let glass4 = document.getElementById("glass");

let allproduct = [];


async function loadproduct() {
  try {
    const snapshot = await get(ref(db, "varshnay gallery"));
    const data = snapshot.val();

    if (data) {
      allproduct = Object.keys(data).map(key => data[key]);
      // console.log("Total Products Loaded:", allproduct.length);
    }
  } catch (err) {
    console.log("Database Error:", err.message);
  }
}

loadproduct();

function performSearch() {
  let query = search4.value.toLowerCase().trim();


  let oldContainer = document.getElementById("search-results-container");
  if (oldContainer) {
    oldContainer.remove();
  }

  if (query === "") return;

  
  let filteredProducts = allproduct.filter(product => {
    let nameMatch = product.name ? product.name.toLowerCase().includes(query) : false;
    let categoryMatch = product.category ? product.category.toLowerCase().includes(query) : false;
    return nameMatch || categoryMatch;
  });


  let searchResultsContainer = document.createElement("div");
  searchResultsContainer.id = "search-results-container";

  if (filteredProducts.length > 0) {
    filteredProducts.forEach(product => {
      
      let card = document.createElement("div");
      card.className = "product-card2"; 

      let img = document.createElement("img");
      img.id ="img2";
      img.src = product.photo;
      img.alt = product.name;

      let name = document.createElement("h3");
      name.id = "name2";
      name.innerText = product.name;

      let price = document.createElement("p");
      price.id = "price2";
      price.innerText = "RS " + product.price;
let btn = document.createElement("button");
btn.id = "popup-buy-btn";
btn.innerText = "Going Product";

btn.onclick = function(event) {
    
    event.stopPropagation(); 
    
    if (typeof item !== 'undefined' && item && item.id) {
        // console.log("Navigating to product ID:", item.id);
        window.location.href = "shop.html?prodId=" + item.id; 
    } 
    
    else if (typeof item !== 'undefined' && item && item.name) {
        // console.log("Navigating to product Name:", item.name);
        window.location.href = "shop.html?prodName=" + encodeURIComponent(item.name);
    } 
    
    else {
        console.error("Warning: 'item' object is missing! Opening direct shop page.");
        window.location.href = "shop.html"; 
    }
};

      card.append(img, name, price,btn);
      
    
      searchResultsContainer.appendChild(card);
    });
  } else {
    searchResultsContainer.innerHTML = "<p style='width:100%; color:#999;'>Koi product nahi mila!</p>";
  }


  search4.parentNode.insertBefore(searchResultsContainer, search4.nextSibling);
}


glass4.addEventListener("click", performSearch);
search4.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});

window.addEventListener('click', function(event) {
    let result = document.getElementById("search-results-container");
    if (result && !result.contains(event.target)) {
        result.style.display = "none";
    }
});



// let choose = document.getElementById("Choose-product");
// let bn = document.getElementById("banner7");

// choose.onclick = function(){
//   if(window.location.href.includes("shop.html")){
//     bn.scrollIntoView({behavior:"smooth",block:"start"});
//   }else{
//     window.location.href ="shop.html#banner7";
//   }
// }

// function showProduct(product){
//   let container = document.getElementById("banner7")
//   container.innerHTML = "";

//   product.forEach((p) =>{
//     let card = document.createElement("div");
//     card.className = "products-card";
//     card.innerHTML = '<h4>${p.name || p.title}</4>';
//     container.appendChild(card);
//   });

//   if(window.location.hash === "#banner7"){
//     setTimeout(() => {
//       container.scrollIntoView({behavior: "smooth",block: "start"});
//     }, 500);
//   }
// }




function show(categoryName){

onValue(ref(db, "varshnay gallery" ), (snapshot)=>{
   let product = document.getElementById("product");
   product.innerHTML = "";
   let data = snapshot.val();

   for (let key in data){
    let item = data[key];

    if(item.category === "sublimation"){
      let img = document.createElement("img");
      img.src = item.photo;     

product.appendChild(img);
    }
  }

})
}

 show("sublimation")


const uploadArea = document.querySelector(".upload-box");
const previewha = document.getElementById("previewha");
const custid = document.getElementById("custid");
let myFile = null;


if (uploadArea) {
    uploadArea.addEventListener('click', function() {
      custid.click();
    });

  custid.addEventListener("change", (e)=>{
    let file = e.target.files[0];
    if(file){
      myFile = file;

      let reader = new FileReader();
      reader.onload = function(event){
     let previewImg = previewha.querySelector("img");
       if (previewImg) {
        previewImg.src = event.target.result;
        previewha.style.display = "block";
      }
    }
      reader.readAsDataURL(file);
      

 
function base64ToFile(base64, fileName){
  let arr = base64.split(',');
  let mime = arr[0].match(/:(.*?);/)[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while(n--){ u8arr[n] = bstr.charCodeAt(n);}
  return new File([u8arr], fileName, {type:mime});
}

async function sendBothPhotos(){
  let productFile = base64ToFile(clickedImgSrc, "product.png");
  let fileToShare = [productFile, clientFile];
  
}


if (navigation.canShare && navigator.canShare({files:[file]})){
  setTimeout(async ()=>{
    try{
      await navigator.share({
        files: [file],
        text: `Grid Image: ${localStorage.getItem("mySelectedImg") || ""}`,
        title: "Order Image"
      })
    } catch (err) {}
  },500);
}

    }
  });
}



let imggrid = document.querySelector(".img-grid");
let previewbox = document.querySelector(".preview-box");
let clickedImgSrc = "";
imggrid.onclick = function(e) {
  if (e.target.tagName === 'IMG') {
    clickedImgSrc = e.target.src;
    // console.log("Mil gaya target image link:", clickedImgSrc);
    let previewImg = previewbox.querySelector("img");
    if (previewImg) { 
      previewImg.src = clickedImgSrc;
      previewbox.style.display = "block";
    }
  }
}



let btnk = document.getElementById("btnk");

btnk.addEventListener("click",function(){
let love = document.getElementById("love").value;
let message = document.getElementById("message").value;
let instruction = document.getElementById("instruction").value;

let finalText = `Love:${love}%0AMessage:${message}%0AInstruction:${instruction}%AItem:${clickedImgSrc}%AmyFile? myFile.name`;
let myNumber = "919058116902";
let url = `https://wa.me/${myNumber}?text=${encodeURIComponent(finalText)}`;

window.open(url, "-blank");
});

