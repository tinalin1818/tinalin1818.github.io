// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");

// Get the <span> element that closes the modal
var exit1 = document.getElementsByClassName("close1")[0];
var exit2 = document.getElementsByClassName("close2")[0];
var exit3 = document.getElementsByClassName("close3")[0];
var exit4 = document.getElementsByClassName("close4")[0];
var exit5 = document.getElementsByClassName("close5")[0];
var exit6 = document.getElementsByClassName("close6")[0];

var btnClicks = [btn1, btn2, btn3, btn4, btn5, btn6];
var modals = [modal1, modal2, modal3, modal4, modal5, modal6];
var exits = [exit1, exit2, exit3, exit4, exit5, exit6];

// When the user clicks on the button, open the modal
for (let i = 0; i < btnClicks.length; i++) {
    btnClicks[i].onclick = function() {
        modals[i].style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
for (let i = 0; i < exits.length; i++) {
    exits[i].onclick = function() {
        modals[i].style.display = "none";
    }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}