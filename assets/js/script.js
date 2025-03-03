'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// experience variables
const experienceItem = document.querySelectorAll("[data-experience-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const experienceModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < experienceItem.length; i++) {

  experienceItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-experience-avatar]").src;
    modalImg.alt = this.querySelector("[data-experience-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-experience-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-experience-text]").innerHTML;

    experienceModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", experienceModalFunc);
overlay.addEventListener("click", experienceModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Scroll dots for Certifications Section
const certificationsList = document.querySelector('.certifications-list');
const carouselDots = document.querySelector('.carousel-dots');
const certificationsItems = document.querySelectorAll('.certifications-item');

// Generate dots for Certifications
certificationsItems.forEach((item, index) => {
  const dot = document.createElement('button');
  dot.classList.add('carousel-dot');
  if (index === 0) dot.classList.add('active'); // Activate the first dot by default
  dot.addEventListener('click', () => {
    certificationsList.scrollTo({
      left: item.offsetLeft,
      behavior: 'smooth'
    });
  });
  carouselDots.appendChild(dot);
});

// Update active dot on scroll for Certifications using the container's center
certificationsList.addEventListener('scroll', () => {
  const containerCenter = certificationsList.scrollLeft + (certificationsList.clientWidth / 2);
  let activeIndex = 0;
  
  certificationsItems.forEach((item, index) => {
    const itemStart = item.offsetLeft;
    const itemEnd = itemStart + item.offsetWidth;
    
    if (containerCenter >= itemStart && containerCenter <= itemEnd) {
      activeIndex = index;
    }
  });
  
  Array.from(carouselDots.children).forEach((dot, index) => {
    dot.classList.toggle('active', index === activeIndex);
  });
});


// Scroll dots for Experience Section
// Ensure you have a container for the dots in your HTML, for example:
// <div class="experience-dots"></div>
const experienceList = document.querySelector('.experience-list');
const experience-DotsContainer = document.querySelector('.experience-dots');
const experienceItems = document.querySelectorAll('.experience-item');

// Generate dots for Experience
experienceItems.forEach((item, index) => {
  const dot = document.createElement('button');
  dot.classList.add('carousel-dot');
  if (index === 0) dot.classList.add('active'); // Activate the first dot by default
  dot.addEventListener('click', () => {
    experienceList.scrollTo({
      left: item.offsetLeft,
      behavior: 'smooth'
    });
  });
  experience-DotsContainer.appendChild(dot);
});

// Update active dot on scroll for Experience using the container's center
experienceList.addEventListener('scroll', () => {
  const containerCenter = experienceList.scrollLeft + (experienceList.clientWidth / 2);
  let activeIndex = 0;
  
  experienceItems.forEach((item, index) => {
    const itemStart = item.offsetLeft;
    const itemEnd = itemStart + item.offsetWidth;
    
    if (containerCenter >= itemStart && containerCenter <= itemEnd) {
      activeIndex = index;
    }
  });
  
  Array.from(experience-DotsContainer.children).forEach((dot, index) => {
    dot.classList.toggle('active', index === activeIndex);
  });
});