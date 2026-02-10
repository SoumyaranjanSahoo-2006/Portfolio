 /* ===============================
   THEME TOGGLE (LIGHT / DARK)
================================ */

const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const themeIcon = themeToggle.querySelector("i");

/* Load saved theme */
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

/* Toggle theme */
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "dark");
  }
});

 
 
 
 
 
 const menuToggle = document.getElementById("menuToggle");
  const navItem = document.querySelector(".nav-item");
  const icon = menuToggle.querySelector("i");

  menuToggle.addEventListener("click", () => {
    navItem.classList.toggle("active");

    if (navItem.classList.contains("active")) {
      icon.classList.replace("fa-bars", "fa-xmark");
    } else {
      icon.classList.replace("fa-xmark", "fa-bars");
    }
  });






  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.innerText = "Sending...";

    emailjs
      .sendForm(
        "service_jd3anl7",
        "template_r9xpxnt",
        this
      )
      .then(
        function () {
          status.innerText = "Message sent successfully ✅";
          status.style.color = "lightgreen";
          form.reset();
        },
        function (error) {
          status.innerText = "Failed to send message ❌";
          status.style.color = "red";
          console.error(error);
        }
      );
  });
