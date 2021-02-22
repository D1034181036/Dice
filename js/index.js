function roll(){
	var dice1 = Math.floor(Math.random()*6)+1;
	var dice2 = Math.floor(Math.random()*6)+1;

	document.querySelectorAll(".dice img")[0].setAttribute("src", "images/dice"+dice1+".png");
	document.querySelectorAll(".dice img")[1].setAttribute("src", "images/dice"+dice2+".png");

	var result;
	if(dice1>dice2){
		result = "Player 1 Win!";
	}else if(dice2>dice1){
		result = "Player 2 Win!";
	}else{
		result = "Draw !";
	}

	document.querySelector("h1").textContent = result;
}