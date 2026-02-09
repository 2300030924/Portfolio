// Typing Effect
const roles = [
  "AI Engineer",
  "Computer Vision Developer",
  "Backend Developer",
  "Cloud Enthusiast"
];

let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function type() {
  if (charIndex < roles[index].length) {
    typingElement.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(type, 500);
  }
}

type();

// Counter Animation
const counters = document.querySelectorAll("[data-count]");

counters.forEach(counter => {
  let start = 0;
  const end = +counter.dataset.count;
  const increment = end / 100;

  const updateCounter = () => {
    start += increment;
    if (start < end) {
      counter.innerText = start.toFixed(2);
      requestAnimationFrame(updateCounter);
    } else {
      counter.innerText = end;
    }
  };

  updateCounter();
});
// Project Filter Logic
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach(card => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
