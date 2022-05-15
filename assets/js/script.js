let videos = ["rdBkym-eyIc", "De-pksZy6a0", "avkcvzrvPhM", "M4GkNCHYcvk"];
let currentOrder = 0;
let maxVideo = videos.length - 1;

function prev() {
	currentOrder = (currentOrder == 0) ? 0 : currentOrder - 1;
	changeVideo();
}

function next() {
	currentOrder = (currentOrder == maxVideo) ? maxVideo : currentOrder + 1;
	changeVideo();
}

function changeVideo() {
	document.querySelector('iframe')
		.setAttribute('src', 'https://www.youtube.com/embed/' + videos[currentOrder]);
}