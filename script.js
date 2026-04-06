//your JS code here. If required.
let btn = document.getElementById('enterBtn');
let curr = document.getElementById('status');

function enterMeta(event){
	console.log("Entered Metaverse");
	curr.innerHTML = "<h1>Entered Metaverse</h1>";
}
btn.addEventListener('click',enterMeta);