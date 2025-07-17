const persons = [
  {
    index: 1,
    fullName: "Johanna Sandoval",
    position: "SVP, Head of Product and Design",
    image: "images/person-1.jpg",
  },
  {
    index: 2,
    fullName: "Molly Dixon",
    position: "Chief Revenue Officer",
    image: "images/person-2.jpg",
  },
  {
    index: 3,
    fullName: "Alexis Murray",
    position: "Head of Commerce",
    image: "images/person-3.jpg",
  },
  {
    index: 4,
    fullName: "Lennon Sawyer",
    position: "Cofounder and President",
    image: "images/person-4.jpg",
  },
  {
    index: 5,
    fullName: "Jullianna Wallace",
    position: "Head of Design",
    image: "images/person-5.jpg",
  },
  {
    index: 6,
    fullName: "Maximo Barton",
    position: "Founder, President and CEO",
    image: "images/person-6.jpg",
  },
  {
    index: 7,
    fullName: "Abram Curtis",
    position: "Head of Information",
    image: "images/person-7.jpg",
  },
  {
    index: 8,
    fullName: "Hassan Hering",
    position: "Head of Digital Commerce Platform",
    image: "images/person-8.jpg",
  },
  {
    index: 9,
    fullName: "Nick Brown",
    position: "President, Product and Business",
    image: "images/person-9.jpg",
  },
  {
    index: 10,
    fullName: "Gary Montgomery",
    position: "President and Cofounder",
    image: "images/person-10.jpg",
  },
];

// const slider = document.querySelector('.slider')
const slider = document.querySelector(".slider");

persons.forEach(({ index, fullName, position, image }) => {
  slider.insertAdjacentHTML(
    "beforeend",
    `
    <div class="slide" data-index=${index} title = "Make Active">
      <i class="bx bxl-linkedin icon"></i>
      <img src=${image} alt=${image.split("/")[1].split(".")[0]}/>
      <h2 class="full-name">${fullName}</h2>
      <h3 class="position">${position}</h3>
    </div>`
  );
});
const elements = {
  slider,
  slides: [...document.querySelectorAll('.slide')],
  progress: document.querySelector('.progress'),
}
export default elements
