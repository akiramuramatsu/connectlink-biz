changeColor();

function changeColor(color) {
		var newStyle = document.createElement('style');
		newStyle.type = "text/css";
		newStyle.id = "myrule";
		document.getElementsByTagName('head').item(0).appendChild(newStyle);
		newStyle.sheet.insertRule(".audio-button { background:transparent url(http://compbio.mit.edu/teaching/audio.jpg) no-repeat 0 0; width:47px; height:47px; }",0);
}