const navber = document.getElementById("navber");
const btn = document.querySelector(".cv-btn");
const links = document.querySelectorAll("nav ul a");
const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");
const alllinks = document.querySelectorAll("#navlinks a");
const navanchors = document.querySelectorAll('a[href^="#"]');
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navber.classList.add("scrolled");
  } else {
    navber.classList.remove("scrolled");
  }
});
btn.addEventListener("click", function () {});
hamburger.addEventListener("click", function () {
  navlinks.classList.toggle("open");
  hamburger.classList.toggle("active");
});
alllinks.forEach(function (links) {
  links.addEventListener("click", function () {
    navlinks.classList.remove("open");
    hamburger.classList.remove("active");
  });
});

function updateActiveLink() {
  const sections = document.querySelectorAll("section[id]");

  const scrollPosition = window.scrollY + 100;

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");
    const matchingLink = document.querySelector(
      '#navlinks a[href="#' + sectionId + '"]',
    );

    if (matchingLink) {
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        alllinks.forEach(function (l) {
          l.classList.remove("active");
        });

        matchingLink.classList.add("active");
      }
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

updateActiveLink();
navanchors.forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
const words = [
  "Frontend Developer",
  "UI/UX Designer",
  "Web Designer",
  "Freelancer",
];

let wordindex = 0;
let charindex = 0;
let isdeleting = false;
const telement = document.getElementById("typed");
function type() {
  const current = words[wordindex];
  if (isdeleting) {
    telement.textContent = current.substring(0, charindex - 1);
    charindex--;
  } else {
    telement.textContent = current.substring(0, charindex + 1);
    charindex++;
  }
  if (!isdeleting && charindex === current.length) {
    setTimeout(function () {
      isdeleting = true;
    }, 1500);
  }
  if (isdeleting && charindex === 0) {
    isdeleting = false;

    wordindex = (wordindex + 1) % words.length;
  }

  const speed = isdeleting ? 60 : 100;

  setTimeout(type, speed);
}
type();
const observer = new IntersectionObserver(callback, options);
observer.observe(element);
const revelelement = document.querySelectorAll(
  '.htext, .himage,.simage, .stext,.scard, .pitem, .form, #cform '
);
// Debugging: Log selected elements
console.log('Selected elements:', revelelement);

revelelement.forEach(function (el) {
  console.log('Observing element:', el);
  revealobserver.observe(el);
});

const revealobserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry, index) {
      console.log('Intersection entry:', entry);
      if (entry.isIntersecting) {
        console.log('Element is intersecting:', entry.target);
        setTimeout(function () {
          entry.target.classList.add("visible");
          console.log('Added visible class to:', entry.target);
        }, index * 100);
      }
    });
  },

  {
    threshold: 0.1,
  }
);
revelelement.forEach(function (el) {
   revealobserver.observe(el);
})


