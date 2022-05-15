let localVideo = localStorage.getItem('list')
let videos = ["rdBkym-eyIc", "De-pksZy6a0", "avkcvzrvPhM", localVideo]; // M4GkNCHYcvk
let currentOrder = 0;

function getMaxVideo() {
	return videos.length - 1;
}

function prev() {
	currentOrder = (currentOrder == 0) ? getMaxVideo() : currentOrder - 1;
	changeVideo();
}

function next() {
	currentOrder = (currentOrder == getMaxVideo()) ? 0 : currentOrder + 1;
	changeVideo();
}

function changeVideo() {
	document.querySelector('iframe')
		.setAttribute('src', 'https://www.youtube.com/embed/' + videos[currentOrder]);
}

function random() {
	currentOrder = Math.floor(Math.random() * videos.length);
	changeVideo();
}

function addNew() {
	let inputValue = document.getElementById('inputValue').value;
	videos.push(inputValue);
	localStorage.setItem('list', inputValue);
	
}

if(localStorage.getItem('list') == null)
{
	videos.pop();
}

console.log(videos)