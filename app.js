/*const toggleBtn = document.querySelector(".toggle_btn")
const links = document.querySelector(".links")


toggleBtn.addEventListener("click" , ()=>{
    links.classList.toggle("show_links")
})*/
const btn = document.querySelector(".btn");
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links_container");
btn.addEventListener("click",()=>{
   // links.classList.toggle("show_links")
   const linksContainerHeight = linksContainer.getBoundingClientRect().height;
   const linksHeight = links.getBoundingClientRect().height;
   if(linksContainerHeight === 0){
    linksContainer.style.height = `${linksHeight}px`;
   }
   else{
    linksContainer.style.height = 0;
   }
})