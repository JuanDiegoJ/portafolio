/*==================== MENU SHOW & HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}
/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav-link')
const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}

navLink.forEach((n) => n.addEventListener('click', linkAction))
/*==================== CHANGE BACKGROUND HEADER ====================*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  this.scrollY > 20
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};

window.addEventListener('scroll', scrollHeader)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
  const scrollY = window.pageYOffset
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute('id'),
    sectionClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link')
    } else {
      sectionClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)
/*==================== SCROLL ABOUT ANIMATION ====================*/
gsap.registerPlugin(ScrollTrigger);

let targets = gsap.utils.toArray(".text-gradient").forEach((span) => {
  gsap.to(span, {
    backgroundSize: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: span,
      start: "top bottom",
      end: "top center",
      scrub: true,
    },
  });
});
/*==================== DARK LIGHT THEME ====================*/

window.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('theme-toggle')
  function applyTheme(theme) {
    if (theme === 'light') {
      document.body.classList.add('light-theme')
      toggleBtn.classList.remove('ri-sun-line')
      toggleBtn.classList.add('ri-moon-line')
    }else {
      document.body.classList.remove('light-theme')
      toggleBtn.classList.add('ri-sun-line')
      toggleBtn.classList.remove('ri-moon-line')
    }

    localStorage.setItem('theme', theme)
  }

  const savedTheme = localStorage.getItem('theme') || 'dark'
  applyTheme(savedTheme)

  toggleBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-theme')
    applyTheme(isLight ? 'dark': 'light')
  })
})

/*==================== MIXITUP FILTER PORTFOLIO ====================*/

var mixer = mixitup(".work-container", {
  selectors: {
    target: ".mixW",
  },
  animation: {
    duration: 300,
  },
});

/* Active work */

const linkWork = document.querySelectorAll(".work-item");

function activeWork() {
  linkWork.forEach((a) => {
    a.classList.remove("active-work");
  });
  this.classList.add("active-work");
}

linkWork.forEach((a) => a.addEventListener("click", activeWork));

/*==================== EMAIL JS ====================*/
const contactForm = document.getElementById("contact-form"),
  contactName = document.getElementById("contact-name"),
  contactEmail = document.getElementById("contact-email"),
  contactMessage = document.getElementById("contact-message"),
  message = document.getElementById("message");

const sendEmail = (e) => {
  e.preventDefault();
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactMessage.value === ""
  ) {
    message.textContent = "Por favor diligencie todos los campos";
    setTimeout(() => {
      message.textContent = "";
    }, 3000);
  } else {
    emailjs
      .sendForm(
        "service_o0su2sv",
        "template_8tx5uc7",
        "#contact-form",
        "b4LNFjdx7FKolQYkX"
      )
      .then(
        () => {
          message.textContent = "Mensaje enviado";
          setTimeout(() => {
            message.textContent = "";
          }, 5000);
        },
        () => {
          message.textContent = "Hubo un problema al enviar su mensaje";
          setTimeout(() => {
            message.textContent = "";
          }, 5000);
        }
      );
    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
  }
};

contactForm.addEventListener("submit", sendEmail);
/*==================== SCROLL REVEAL ANIMATION ====================*/

/*==================== HOME ====================================== */
const hero = document.querySelector(".home");
const intro = document.getElementById("introHola");
intro.addEventListener("animationend", () => hero.classList.add("ready"));
