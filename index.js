
const switchElement = document.querySelector(".switch")
 switchElement.addEventListener("click", () => {
     document.body.classList.toggle("dark")  
})



 let menu = document.querySelector("#menu");
 let header = document.querySelector("header");
  
 menu.onclick = () =>{
     menu.classList.toggle("fa-times");
     header.classList.toggle("active");
}

























