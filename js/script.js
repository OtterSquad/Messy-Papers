// Keypress Enter key on file name textbox
document.querySelector("#filename").addEventListener("keypress", function (e) {
	var key = e.which || e.keyCode;
	if (key === 13) {
		saveText();
	}
});
// Start pests
function startPest() {
	Pestilence.initialize({
		audio_pest: true,
		mouse_pest: true,
		keyboard_pest: true,
		accessibility_pest: false
	});
	title = document.getElementById("title");
	title.innerHTML = "O H S H I T"
}
// Save text
function saveText() {
	var text = document.getElementById("document").value;
	var fileName = document.getElementById("filename").value;
	text = text.replace(/\r?\n/g, '	');
	if (fileName === "") {
		fileName = "document";
	}
	var file = new File([text], fileName + ".txt", {type: "text/plain;charset=utf-8"});
	saveAs(file);
}
