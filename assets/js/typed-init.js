const typedEl = document.getElementById('typed-text');
typedEl.style.visibility = 'hidden';

const typed = new Typed('#typed-text', {
  strings: ["Data into stories", "Stories into systems", "Patterns in the noise"],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1000,
  loop: true,
  showCursor: true,
  cursorChar: '|'
});


      
