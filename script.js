const navber = document.getElementById('navber')
const btn = document.querySelector('.cv-btn')
const links = document.querySelectorAll('nav ul a')
const hamburger = document.getElementById('hamburger')
const navlinks = document.getElementById('navlinks')
const alllinks = document.querySelectorAll('#navlinks a')
const navanchors = document.querySelectorAll('a[href^="#"]');
window.addEventListener('scroll', function () {
    if (window.scroll > 50) {
        navber.classList.add('scrolled')
    }
    else {
        navber.classList.remove('scrolled')
    }
})
btn.addEventListener('click', function () {
    
})
hamburger.addEventListener('click', function() {
    navlinks.classList.toggle('open')
    hamburger.classList.toggle('active')
})
alllinks.forEach(function (links) {
    links.addEventListener('click', function () {
        navlinks.classList.remove('open')
        hamburger.classList.remove('active')
    })
})



function updateActiveLink() {
    
  const sections = document.querySelectorAll('section[id]');

 
  const scrollPosition = window.scrollY + 100;

  sections.forEach(function(section) {
    const sectionTop = section.offsetTop;  
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const matchingLink = document.querySelector(
      '#navLinks a[href="#' + sectionId + '"]'
    );

    if (matchingLink) {
     
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
       
        allLinks.forEach(function(l) {
          l.classList.remove('active');
        });
      
        matchingLink.classList.add('active');
      }
    }

  });
}

window.addEventListener('scroll', updateActiveLink);

updateActiveLink();
navanchors.forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
            const targetId = this.getAttribute("href"); 
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
              targetSection.scrollIntoView({
                behavior: "smooth", 
              });
            }
     })
})
   
