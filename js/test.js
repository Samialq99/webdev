var today = new Date();
var hourNow = today.getHours();
var greeting = "Good evening";
console.log(greeting);
console.log(today);

var title;
var message2;
title = "Molly String Text";
message2 = 'hello this link <a href="test.html">click</a>';
var eltitle = document.getElementById("title");
eltitle.innerHTML = title;
var elnote = document.getElementById("note");
elnote.innerHTML = message2;

//class athelete:

var instock;
var shipping;
instock = true;
shipping = false;

var elStock = document.getElementById("stock");
elStock.className = instock;
var elShip = document.getElementById("shipping");
elShip.className = shipping;
