import elements from "./persons.js";

const { slider, slides, progress } = elements;
progress.firstElementChild.textContent = slider.children[2].dataset.index;
let interval;
let timeOut;
let progressInt;

progress.children[1].textContent = `- ${slider.children.length}`;

const intervalFn = () => {
  interval = setInterval(() => {
    rightMove(false);
  }, 3000);
};
intervalFn();

const timeOutFn = (bool) => {
  if (bool) {
    clearInterval(interval);
    clearTimeout(timeOut);
    clearInterval(progressInt);
    progressFn(10);
    timeOut = setTimeout(() => {
      intervalFn();
    }, 3000);
  }
  progress.firstElementChild.textContent = slider.children[2].dataset.index;
};

const progressFn = (indexPlus) => {
  let i = 10;
  progressInt = setInterval(() => {
    progress.lastElementChild.style.width = `${(i += indexPlus)}%`;
    if (i === 110) {
      clearInterval(progressInt);
      i = 0;
      progress.lastElementChild.style.width = i;
    }
  }, 600);
};

const rightMove = (boolVal = true) => {
  const firstSlide = slider.removeChild(slider.firstElementChild);
  slider.appendChild(firstSlide);
  slider.children[4].classList.add("fade-in");
  slider.style.justifyContent = "flex-end";
  timeOutFn(boolVal);
};

const leftMove = (boolVal = true) => {
  const lastSlide = slider.removeChild(slider.lastElementChild);
  slider.insertBefore(lastSlide, slider.firstChild);
  lastSlide.classList.add("fade-in");
  slider.style.justifyContent = "flex-start";
  timeOutFn(boolVal);
};
slides.forEach((slide) => {
  slide.addEventListener("click", () => {
    const slideIndex = [...slider.children].indexOf(slide);
    switch (slideIndex) {
      case 0:
        leftMove();
        setTimeout(() => {
          leftMove();
        }, 500);
        break;
      case 1:
        leftMove();
        break;
      case 3:
        rightMove();
        break;
      case 4:
        rightMove();
        setTimeout(() => {
          rightMove();
        }, 500);
        break;
      default:
        break;
    }
  });
});

const leftControl = document.querySelector(".left-control");
leftControl.addEventListener("click", leftMove);
const rightControl = document.querySelector(".right-control");
rightControl.addEventListener("click", rightMove);