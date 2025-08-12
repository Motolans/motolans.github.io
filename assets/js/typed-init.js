const typedEl = document.getElementById('typed-text');
typedEl.style.visibility = 'hidden';

const typed = new Typed('#typed-text', {
  strings: ["Data into stories", "Stories into systems"],
  typeSpeed: 50,
  backSpeed: 25,
  backDelay: 1000,
  loop: true
});

// Show it immediately after initialization
typedEl.style.visibility = 'visible'

      
