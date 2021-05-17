let internalExpression = '0b';
let resultField = document.getElementById('res');

var b0 = document.getElementById('btn0');
var b1 = document.getElementById('btn1');
var bClr = document.getElementById('btnClr');
var bEql = document.getElementById('btnEql');

var bSum = document.getElementById('btnSum');
var bSub = document.getElementById('btnSub');
var bMul = document.getElementById('btnMul');
var bDiv = document.getElementById('btnDiv');


b0.addEventListener("click", function() {
	resultField.innerHTML += '0';
	internalExpression += '0';
});

b1.addEventListener("click", function() {
	resultField.innerHTML += '1';
	internalExpression += '1';
});

bClr.addEventListener("click", function() {
	resultField.innerHTML = '';
	internalExpression = '0b';
});

bEql.addEventListener("click", function() {
	let result = eval(internalExpression);
	resultField.innerHTML = Number(result).toString(2);
	internalExpression = '0b'
});

bSum.addEventListener("click", function() {
	resultField.innerHTML += '+';
	internalExpression += '+0b';
});

bSub.addEventListener("click", function() {
	resultField.innerHTML += '-';
	internalExpression += '-0b';
});

bMul.addEventListener("click", function() {
	resultField.innerHTML += '*';
	internalExpression += '*0b';
});

bDiv.addEventListener("click", function() {
	resultField.innerHTML += '/';
	internalExpression += '/0b';
});