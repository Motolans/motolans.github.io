document.addEventListener('DOMContentLoaded', () =>{
  new Typed('#typed-text', {
    strings: ["Data into stories", "Stories into systems", "Patterns in the noise"],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: false,  // disable smart backspace
    shuffle: false,         // optional, keeps string order consistent
    onStringTyped: () => {
      const cursor = document.querySelector('.typed-cursor');
      if (cursor) {
        cursor.style.display = 'none';
        setTimeout(() => {
          cursor.style.display = 'inline';
        }, 50);
    }
  });
});



      
