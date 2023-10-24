// Sticky Navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("bottom-nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Typing effect
new TypeIt("#type1", {
  speed: 100,
  loop: true,
  waitUntilVisible: true,
})
  .type("Web Developer", { delay: 400 })
  .pause(500)
  .delete(13)
  .type("React Developer", { delay: 400 })
  .pause(500)
  .delete(14)
  .go();


//----------Horizontal Progressbar-----------

// Get the progress line element             
const progressLine = document.querySelector(".progress-line");
// Function to update the progress line based on scroll position
function updateProgressLine() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  const scrollPercent = (scrollTop / (scrollHeight - window.innerHeight)) * 100;
  progressLine.style.width = scrollPercent + "%";
}
// Listen for scroll events and update the progress line
window.addEventListener("scroll", updateProgressLine);
// Listen for page load to set the initial progress line
window.addEventListener("load", updateProgressLine);


//----------- Tab nagigation------------

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

// Mobile Menu
var mobileBtn = document.getElementById("mobile-btn");
var mainMenu = document.getElementById("main-menu");
var menuVisible = false;

mobileBtn.addEventListener("click", function () {

    if (menuVisible) {
        mainMenu.style.display = "none";
        mobileBtn.className = "ri-menu-line";
        
    } else {
        mainMenu.style.display = "block";
        mobileBtn.className = "ri-close-fill";    
    }

    // Toggle the menu visibility flag
    menuVisible = !menuVisible;
});