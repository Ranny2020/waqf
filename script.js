// Example JavaScript code for future interactivity
document.addEventListener("DOMContentLoaded", () => {
  console.log("Header loaded");
});
document.getElementById("mobile-menu").addEventListener("click", function () {
  const navbar = document.getElementById("nav-list");
  navbar.classList.toggle("active");
});
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 5 seconds
}
// Static values for supporters, funds, and charities
const supporters = 150; // Set a static number of supporters
const funds = 25000; // Set a static amount of funds raised
const charities = 10; // Set a static number of charities funded

// Display the static values in the HTML
document.getElementById("supporters-count").innerText = supporters;
document.getElementById(
  "funds-raised"
).innerText = `$${funds.toLocaleString()}`;
document.getElementById("charities-funded").innerText = charities;

// Carousel functionality remains unchanged
let currentIndex = 0; // Track the current index of the carousel items
const items = document.querySelectorAll(".carousel-item");
const totalItems = items.length;

function scrollCarousel(direction) {
  currentIndex += direction;

  // Loop back to the start or end
  if (currentIndex < 0) {
    currentIndex = totalItems - 1; // Go to the last item
  } else if (currentIndex >= totalItems) {
    currentIndex = 0; // Go back to the first item
  }

  const carouselItems = document.getElementById("carousel-items");
  const offset = -currentIndex * 320; // Adjust this value based on item width
  carouselItems.style.transform = `translateX(${offset}px)`; // Move the items
}

// Function to handle scroll events
const policyBlocks = document.querySelectorAll(".policy-block");

const showBlocksOnScroll = () => {
  const triggerBottom = (window.innerHeight / 5) * 4; // Trigger when 80% of the viewport is reached

  policyBlocks.forEach((block) => {
    const blockTop = block.getBoundingClientRect().top;

    if (blockTop < triggerBottom) {
      block.classList.add("visible"); // Add 'visible' class to show the block
    } else {
      block.classList.remove("visible"); // Remove 'visible' class to hide the block
    }
  });
};

window.addEventListener("scroll", showBlocksOnScroll);
showBlocksOnScroll(); // Initial call to show blocks on page load

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation (you can expand this)
    if (firstName && lastName && email && message) {
      alert(`Thank you for your message, ${firstName} ${lastName}!`);
      // Here you would typically send the data to a server
      // Reset the form
      document.getElementById("contactForm").reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
