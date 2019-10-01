document.addEventListener("DOMContenetLoaded", () => {
	let x = 0;
	console.log("started...");
	let user = document.querySelector("#user")
	document.querySelector("#user").addEventListener("input", (e) =>{
		x = user.value;
		document.querySelector("#result").innerText = x;
	})
})
let password = function(){
	var x = String(document.getElementById('x').value);
	var y = String(document.getElementById('y').value);
	if(x.length < 8 || y.length < 8){
	    document.getElementById("#result").innerHTML = "The password is too short!";
	}
	else if(x == y && x == "aij4in3a"){
	    document.getElementById("#result").innerHTML = "Accepted!";
	}
	else{
		document.getElementById("#result").innerHTML = "The passwords do not match!";
	}
}
document.getElementById('validate').addEventListener('click', password);
