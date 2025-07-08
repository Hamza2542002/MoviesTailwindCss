// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();

let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector("#logo");

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});
window.onscroll = () => {
  navbar.classList.remove("bg-transparent");
}
window.addEventListener('scroll', () => {
  if(window.scrollY > 0) {
    header.classList.add("bg-light");
    header.classList.remove("bg-transparent");

    menuIcon.classList.add("text-dark");
    menuIcon.classList.remove("text-light");

    logo.classList.add("text-dark");
    logo.classList.remove("text-light");
  } else if(window.scrollY === 0) {
    header.classList.remove("bg-light");
    header.classList.add("bg-transparent");

    menuIcon.classList.remove("text-dark");
    menuIcon.classList.add("text-light");

    logo.classList.remove("text-dark");
    logo.classList.add("text-light");
  }
});

