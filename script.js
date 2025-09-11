// Toggle Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Highlight Active Section on Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
      });
    }
  });
};

// Typing Effect
const roles = ["Web Developer", "YouTuber", "Editor", "Cinematographer"];
let roleIndex = 0;
let charIndex = 0;
let typingSpan = document.querySelector(".typing");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typingSpan.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingSpan.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 60);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (roles.length) typeEffect();
});
