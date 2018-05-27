function expandSection() {
	var tag = event.target.getAttribute("data-info");
	var section = document.getElementById(tag);
	var temp = document.getElementsByClassName("section");
	section.style.width = "96.3vw";
	for (var i = 0; i < temp.length; i++) {
		if (temp[i].id != tag) {
			var otherTag = temp[i].id;
		}
	}
	var otherSection = document.getElementById(otherTag);
	otherSection.style.width = "3.7vw";
}
