const add = document.getElementById("add");
const list = document.getElementById("list");

function addtask(){
	if(add.value== '' ){
		alert("you must write something!");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML=add.value;
        list.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML ="\u00d7";
		li.appendChild(span);
	}
	add.value ="";
	saveData();
}
list.addEventListener("click",function(e){
	if(e.target.tagName ==="LI"){
		e.target.classList.toggle("tick");
		saveData();
	}
	else if (e.target.tagName==="SPAN"){
		e.target.parentElement.remove();
		saveData();
	}
}, false);
function saveData(){
	localStorage.setItem("data",list.innerHTML);
}

	function showTask(){
	list.innerHTML = localStorage.getItem("data");
}
showTask();