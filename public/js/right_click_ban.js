window.onload = () => {
	document.addEventListener("contextmenu", (e) => e.preventDefault(), false);
	document.addEventListener(
		"keydown",
		(e) => {
			if (e.ctrlKey) {
				if (e.shiftKey && (e.keyCode == 73 || e.keyCode == 74))
					disabledEvent(e);
				if (e.keyCode == 85 || e.keyCode == 123) disabledEvent(e);
				if (
					e.keyCode == 83 &&
					(navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
				)
					disabledEvent(e);
			}
		},
		false,
	);

	function disabledEvent(e) {
		if (e.stopPropagation) e.stopPropagation();
		else if (window.event) window.event.cancelBubble = true;
		e.preventDefault();
		return false;
	}
};
