// Check local Storage
let mainColors = localStorage.getItem("color_option");
console.log(mainColors);
// Random Background option
let backGroundoption = true;
// variable for interval
let BackgroundInterval;
// Check if there's data in local storage
let mainBackground = localStorage.getItem("background_option");
// check if local storage not empty
if (mainBackground !== null) {
  console.log("local storage for background not empty");
  if (mainBackground === "true") {
    backGroundoption = true;
  } else {
    backGroundoption = false;
  }
  console.log(mainBackground);
  document.querySelectorAll(".random-background span").forEach((element) => {
    element.classList.remove("active");
  });
  if (mainBackground === "true") {
    document.querySelector(".random-background .yes").classList.add("active");
  } else
    document.querySelector(".random-background .no").classList.add("active");
}

// function to random images

if (mainColors !== null) {
  console.log("local storage not empty");

  document.documentElement.style.setProperty(
    "--Main-color",
    localStorage.getItem("color_option")
  );
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");
    if (element.dataset.color === mainColors) {
      element.classList.add("active");
    }
  });
}

// Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop on Colors

colorsLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Set Color on Root
    document.documentElement.style.setProperty(
      "--Main-color",
      e.target.dataset.color
    );
    // Set color on local storage

    localStorage.setItem("color_option", e.target.dataset.color);
    // remove active class

    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});

// Switch Background
const randomBackgrounds = document.querySelectorAll(".random-background span");

// Loop on all spans

randomBackgrounds.forEach((span) => {
  // Click on evryspan
  span.addEventListener("click", (e) => {
    // remove active class

    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.dataset.background === "yes") {
      backGroundoption = true;
      localStorage.setItem("background_option", true);
      randomImage();
    } else {
      backGroundoption = false;
      localStorage.setItem("background_option", false);
      clearInterval(BackgroundInterval);
    }
  });
});
// Color End
// Toggle Spin Class On Icon
document.querySelector(".toggle-setting .fa-gear").onclick = function () {
  // add spin
  this.classList.toggle("fa-spin");
  // Toggle class open
  document.querySelector(".setting-box").classList.toggle("open");
};
// ======================================================================================

// Select Landing Page
let landingPage = document.querySelector(".landing-page");
//Get Array of img

let imgsArray = ["1.jpg", "2.jpg", "3.png", "4.jpg", "2.jpeg"];
// Change background Image url
landingPage.style.backgroundImage = 'url("Images/3.png")';

// Get Randomnumber

let RandomNumber = Math.floor(Math.random() * imgsArray.length);

function randomImage() {
  if (backGroundoption === true) {
    BackgroundInterval = setInterval(() => {
      let RandomNumber = Math.floor(Math.random() * imgsArray.length);
      landingPage.style.backgroundImage =
        'url("Images/' + imgsArray[RandomNumber] + '")';
    }, 10000);
  }
}

randomImage();

// skills

let ourskills = document.querySelector(".skills");

window.onscroll = function () {
  // skills offset top

  let skillsOffsetTop = ourskills.offsetTop;

  // skills outer height

  let skillsOuterHeight = ourskills.offsetHeight;

  // window Height

  let windowHeight = this.innerHeight;

  // window scroll top

  let windowScrollTop = this.pageYOffset;
  //pageYOffset --- scrollY : it's need to research

  // this.console.log(windowScrollTop);
  if (windowScrollTop >= skillsOffsetTop + skillsOuterHeight - windowHeight) {
    this.console.log("skills selection reached");
    let allSkills = document.querySelectorAll(
      ".skill-box .skill-progress span"
    );
    allSkills.forEach((skill) => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// Create pop up with Images

let ourGallery = document.querySelectorAll(".gallery img");
ourGallery.forEach((img) => {
  img.addEventListener("click", (e) => {
    // Create overlay element
    let overlay = document.createElement("div");
    // add class to overlay
    overlay.className = "popup-overlay";
    // Append overlay to body
    document.body.appendChild(overlay);
    // Create popup
    let popupbox = document.createElement("div");
    // Add class to popbox
    popupbox.className = "popup-box";
    if (img.alt !== null) {
      // Create heading
      let imgHeading = document.createElement("h3");
      // Create text for heading
      let imgText = document.createTextNode(img.alt);
      // append text to heading
      imgHeading.appendChild(imgText);
      // append to popup box
      popupbox.appendChild(imgHeading);
    }
    // Create image
    let popupImage = document.createElement("img");
    // set image src
    popupImage.src = img.src;
    // add image to popup box
    popupbox.appendChild(popupImage);
    // append to body
    document.body.appendChild(popupbox);
    // Create Close Span

    let CloseButton = document.createElement("span");
    // Create Close buttom text
    let ClosebuttonText = document.createTextNode("X");
    // append to close button
    CloseButton.appendChild(ClosebuttonText);
    // add class to close button
    CloseButton.className = "close-button";
    // add close button to popup box
    popupbox.appendChild(CloseButton);
  });
});

// close popup
document.addEventListener("click", (e) => {
  if (e.target.className === "close-button") {
    // Remove the current element
    e.target.parentElement.remove();
    // Remove Overlay
    document.querySelector(".popup-overlay").remove();
  }
});

// toggle span icon
let toggleMenu = document.querySelector(".toggle-menu");
let Links = document.querySelector(".links");
toggleMenu.onclick = function () {
  this.classList.toggle("menu-active");
  Links.classList.toggle("open");
};
