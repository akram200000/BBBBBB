var clicked = false;
var submit = document.querySelector('.submit');
submit.addEventListener("click", function(){
  // Make sure user cannot click button again until it has been reset
  if( !clicked ){
    clicked = true;
    submit.classList.remove("return");
    submit.blur();
    document.querySelector('.loading-dock').classList.add('loaded');
    document.getElementById('load').style.display= 'initial';
    document.getElementById('load-b').style.display= 'initial';
    setTimeout(function(){
      document.getElementById('load').style.opacity = 1;
    }, 750);
    setTimeout(function(){
      document.getElementById('load-b').style.opacity = 1;
    }, 900);
    setTimeout(function(){
      document.querySelector('.loading-dock').classList.remove('loaded');
      document.getElementById('load').style.display = 'none';
      document.getElementById('load-b').style.display = 'none';
      document.getElementById('load').style.opacity = 0;
      document.getElementById('load-b').style.opacity = 0;
      let submit = document.querySelector('.submit');
      submit.classList.add("popout");
      submit.innerHTML = "";
      setTimeout(function(){
      document.getElementById('check').style.display = "block";
      }, 300);
    }, 3600);

    //reset all
    setTimeout(function(){
      submit.classList.remove("popout");
      submit.classList.add("return");
      submit.innerHTML = "Submit";
      document.getElementById('check').style.display = "none";
      clicked = false;
    }, 5300);
  }
})

var input = document.getElementById('myInput');

// Set a delay before applying the outline
var delay = 500; // 500 milliseconds

input.addEventListener('focus', function() {
    // Clear any existing timeout
    clearTimeout(input.timeoutId);

    // Set a new timeout to apply the outline after the delay
    input.timeoutId = setTimeout(function() {
        input.classList.add('outlined-input');
    }, delay);
});

input.addEventListener('blur', function() {
    // Clear any existing timeout
    clearTimeout(input.timeoutId);

    // Remove the outline class immediately on blur
    input.classList.remove('outlined-input');
});


