const colors = ["orange", "darkgreen", "cyan", "violet", "yellow"];

export const randomColor = () =>
	colors[Math.floor(Math.random() * colors.length)];
