const menu = document.querySelector(".menu");
const menuText = document.querySelector(".menu p");
const socialList = document.querySelector(".social-list");
const liEl = document.querySelectorAll(".social-list li");

menu.addEventListener("click", () => {
  menu.classList.toggle("rotate");
  socialList.classList.toggle("hide");
});

liEl.forEach((li)=>{
  li.addEventListener("click", ()=>{
    menuText.innerHTML = li.innerHTML;
    socialList.classList.add("hide");
    menu.classList.remove("rotate");
  })
})
