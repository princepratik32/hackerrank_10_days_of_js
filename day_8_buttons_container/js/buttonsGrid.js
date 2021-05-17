var b1 = document.getElementById('btn1');
var b2 = document.getElementById('btn2');
var b3 = document.getElementById('btn3');
var b4 = document.getElementById('btn4');
var b5 = document.getElementById('btn5');
var b6 = document.getElementById('btn6');
var b7 = document.getElementById('btn7');
var b8 = document.getElementById('btn8');
var b9 = document.getElementById('btn9');

b5.addEventListener("click", function() {
	let temp = btn1.innerHTML;
	btn1.innerHTML = btn4.innerHTML;
	btn4.innerHTML = btn7.innerHTML;
	btn7.innerHTML = btn8.innerHTML;
	btn8.innerHTML = btn9.innerHTML;
	btn9.innerHTML = btn6.innerHTML;
	btn6.innerHTML = btn3.innerHTML;
	btn3.innerHTML = btn2.innerHTML;
	btn2.innerHTML = temp;
});