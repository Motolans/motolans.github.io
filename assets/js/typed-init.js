window.addEventListener("load", function() {
  new Typed(".hero-intro #typed-text", {
    strings: [
      "Data into stories",
      "Stories into systems",
      "Patterns in the noise"
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    loop: true
  });
});
document.getElementById('typed-text').style.visibility = 'visible';
