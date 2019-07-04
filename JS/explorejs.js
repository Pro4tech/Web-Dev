// anomious Function call
var f1=function(){
    console.log('Button Clicked');
};

// Window Onload-Once only when 1st load
window.onload =function(){
    document.getElementById('p1').innerHTML="Refreshed";
};

// Self-Invoking Functions
(function(){console.log('Hello');})();