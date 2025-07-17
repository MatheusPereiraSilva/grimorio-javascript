const testimonials = [
  {
    name: "Joaquin Renato",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum esse cupiditate laborum ipsam odio mollitia possimus tempora cumque illum animi nostrum ipsum beatae a voluptatibus, consequatur excepturi quaerat, reiciendis perspiciatis.",
    image:
      "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Lucia Georgia",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum esse cupiditate laborum ipsam odio mollitia possimus tempora cumque illum animi nostrum ipsum beatae a voluptatibus, consequatur excepturi quaerat",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Mario João",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum esse cupiditate laborum ipsam odio mollitia possimus tempora cumque illum animi nostrum ipsum beatae a voluptatibus, consequatur excepturi quaerat, reiciendis perspiciatis. Com muito bacon",
    image:
      "https://images.unsplash.com/photo-1678286742832-26543bb49959?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Maria Renata",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum esse cupiditate laborum ipsam odio mollitia possimus temperos baianos, com bastante sardinha e com mmuito ketchup por que é muito bom e todo mundo gosta não é verdade hehehe",
    image:
      "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const img = document.querySelector(".img");
const textEl = document.querySelector(".text");
const user = document.querySelector(".username");
let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, image, text } = testimonials[idx];
  img.src = image;
  textEl.innerText = text;
  user.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 5000);
}
