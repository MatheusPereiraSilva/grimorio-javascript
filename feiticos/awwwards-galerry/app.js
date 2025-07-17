const navItems = document.querySelectorAll(".nav-item");
const gallery = document.querySelector(".gallery");
const images = document.querySelector(".images");
const galleryBtn = document.querySelector(".gallery-btn");

navItems.forEach((navItem, i) => {
  navItem.addEventListener("mousemove", (e) => {
    images.style.transform = `translateY(-${i * 25}%)`;
    const color = navItem.getAttribute("data-color");
    gallery.style.backgroundColor = `#${color}`;

    let top = e.clientY;
    let left = e.clientX;

    gallery.style.top = `${top}px`;
    gallery.style.left = `${left}px`;
    galleryBtn.style.top = `${top}px`;
    galleryBtn.style.left = `${left}px`;
  });
  navItem.addEventListener("mouseover", () => {
    gallery.style.transform = `translate(-50%, -50%) scale(1)`;
    galleryBtn.style.transform = `translate(-50%, -50%) scale(1)`;
  });
  navItem.addEventListener("mouseleave", () => {
    gallery.style.transform = `translate(-50%, -50%) scale(0)`;
    galleryBtn.style.transform = `translate(-50%, -50%) scale(0)`;
  });
});
