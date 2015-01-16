// 1 – SWAP GREETING
function a() {
	var swapGreeting = document.getElementById("greeting").innerHTML = "Hello, Planet Earth!";
	console.log("test1", swapGreeting);
}

// 2 – CHANGE LI BACKGROUND TO YELLOW
function b() {
	var swapList = document.getElementsByTagName("li");
	for (i = 0; i < swapList.length; i++) {
		swapList[i].style.backgroundColor = "yellow";
	}
	console.log("test2", swapList);
}

// 3 – ON CLICK, ADD LI ITEMS TO SELECTED CLASS (STRIKE THROUGH IN HTML)
// 4 – LAST CLICKED ITEM SHOULD SWAP IMAGE TO LAST CLICKED IMAGE
function cd() {
	var liItems = document.getElementsByTagName("li");
	for (i = 0; i < liItems.length; i++) {
		liItems[i].addEventListener("click", clickClack);	
	}
	console.log("test3", liItems);	
}
	
function clickClack(event) {
		// SWAP LI CLASS TO SELECTED
		event.target.className = "selected";
		console.log("test4");
		// SWAP IMAGES TO LAST CLASS SELECTED
		document.querySelector("img").setAttribute("src", "./images/"+event.target.innerHTML+".jpeg");
		console.log("test5");
}

// 5 – RESET BUTTON REMOVES SELECTED CLASS, CHANGES IMAGES TO PANICKED BRO
function e() {
	var lulz = document.getElementsByTagName("li");
		for (i = 0; i < lulz.length; i++) {
			lulz[i].className = "reset";
		}
	document.querySelector("img").setAttribute("src", "./images/panic.jpeg");
	console.log("test6");
}

var initialize = function () {
	a();
	b();
	cd();
	document.getElementById("reset").addEventListener("click", e);
};

window.onload = initialize;