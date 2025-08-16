// Toggle icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=>{
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
}

// Scroll Section active link

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset+height){
      navlinks.forEach.apply(links=>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' +id + ']').classList.add('active');
      });
    };
  });

  // sticky navbar
  let header = document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY >100);
  
  
  // remove toggle icon and navbar
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

// scroll reveal

ScrollReveal({
  distance:'80px',
  duration:2000,
  display:200,
});

ScrollReveal().reveal('.home-content, heading', { origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form, .title, .progress-bar', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });

// typed js

const typed = new Typed('.multiple-text', {
  strings:['Frontend Developer', 'Software Developer'],
  typeSpeed:70,
  backSpeed:70,
  backDelay:1000,
  loop:true,
});



// script.js

document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = ""; // Path to your resume file (make sure it's in the same folder)
  link.download = "Resume.pdf"; // Name for the downloaded file
  link.click();
});

