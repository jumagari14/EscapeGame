function setupListeners(){
	getById("intro").addEventListener("click",startGame);
}

function startGame(){
	hideObject("intro");
	showObject("game");

}

/* function loadGameBoard(){
	getById("accueil").style.display="block";
	getById("sonette").style.display="block";
}
 */


function callReceptionist(){
	console.log("ping");
	let bell=getById("ding");
	bell.play();
	
	let num=Math.floor(Math.random()*99)+1;
	console.log(num);

	if (95<=num && 100>=num){
		window.alert("Il y a quelqu'un qui arrive...");
		let recept=document.createElement("img");
		recept.id="recept";
		recept.src="./reception-clipart-2.png";
		getById("game").appendChild(recept);
	}
	
}

function deskGame(){
	let coordinates=getClickPosition(event);
	console.log(coordinates);
	if (543<=coordinates[0] && coordinates[0]<=785 && 455<=coordinates[1] && 581>=coordinates[1]){
		spyonLaptop();
	}

}

function spyonLaptop(){
	window.alert("Au pire, on trouvera quelque chose d'utile sur cet ordinateur...");
}
function getClickPosition(e){
	return [e.clientX,e.clientY];	
	//541-784 281 398  
}
function getById(id_){
	return document.getElementById(id_);
}

function hideObject(sId){
	var b=getById(sId);
	if(b){
		b.style.display='none';
	}
}

function showObject(sId){
		var b=getById(sId);
		if(b){
			b.style.display='block';
		}
}


document.addEventListener("onload",setupListeners);