var header = document.getElementById('main'); // accessing the element with id='main'
var time = 5; // counter = 5;
var countdown = document.createElement('h1'); // created an element h1;
var image = document.getElementById('hplogo');



// using setInterval so as to implement the timer and adding the timer to DOM
var x = setInterval(function() {
    countdown.innerHTML = `   <div style="color:red; text-align:center; font-size:40px; margin-left:300px;">Count down</div>
                   <div style="color:red; text-align:center; font-size:30px;">${time}</div>
                  <div style="color:red; text-align:center; font-size:15px;">Sec</div>
              `;
    image.style.paddingTop = "10px";
    header.insertBefore(countdown, header.firstChild);
    time = time - 1;
    if (time == 0) {
        /* When time equals zero we just the clear the interval*/
        clearInterval(x);
        countdown.innerHTML = "";
        image.style.paddingTop = "109px";
        window.location.href = "https://news.google.com/";
    }
}, 1000);