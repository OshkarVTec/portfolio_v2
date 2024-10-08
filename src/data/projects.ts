import donacionesImage from "../assets/donaciones.png";
export const projects = [
	{
		id: 9,
		title: "Donations Manager",
		body: "A web app developed for Albergue del Hospital del Niño Poblano (Poblano Children's Hospital Shelter) to manage their donations. You can add donations and see reports of past transactions, as well as download the information in a CSV file. Built on React and Django. The web supports different user roles.",
		tags: ["ReactJS", "Django", "Web Development"],
		github: "https://github.com/OshkarVTec/donaciones_front",
		image: donacionesImage,
	},
	{
		id: 2,
		title: "Accelerometer controlled videogame",
		body: "This is a 2D collaborative game, developed by me and my teammate, which is inspired by the Hollow Knight game. The objective is to capture the 3 masks that appear on top of the map. The first player moves the character and has the ability to transform it through the movement of an accelerometer connected to an FPGA Arty board. The second player uses the mouse to create platforms that the character uses to reach the masks. There is a 7-segment display attached to the Arty, which displays the current score. There are 4 LED indicators on the Arty, which show the state of the movement (left, right, still) on red, and the transformation on green.",
		tags: ["Embedded Systems", "Videogames", "Assembly code"],
		github:
			"https://github.com/OshkarVTec/2D-accelerometer-controlled-videogame",
		image:
			"https://raw.githubusercontent.com/OshkarVTec/2D-accelerometer-controlled-videogame/main/Hollow_Knight_test/title.jpg",
	},
	{
		id: 3,
		title: "Raspberry Pi Music Player",
		body: "I worked on a project to develop an MP3 music player with a graphical interface using Python. The goal was to simulate the entertainment interface of a car with a display screen. The project was implemented on a Raspberry Pi4 and included a connection with an Arduino to read user inputs from buttons. Through this project, I gained experience programming with consideration for hardware and embedded systems. It was an exciting opportunity to work on a project that involved both software and hardware development, and it helped me to develop my problem-solving and critical thinking skills.",
		tags: ["Embedded Systems", "Python", "UI"],
		github: "https://github.com/OshkarVTec/Raspberry-Pi-4-music-player",
		image:
			"https://raw.githubusercontent.com/OshkarVTec/Raspberry-Pi-4-music-player/main/Screenshot%20from%202023-07-25%2012-17-05.png",
	},
	{
		id: 4,
		title: "Engineering Expo Website",
		body: "I worked on a project to develop a website for the administration of the Engineering Expo at Tec de Monterrey in Puebla. As a part of the project, I was responsible for developing the database, as well as working on the backend and frontend development of the site. I was involved in the entire process of creating the website, from the initial planning to the final implementation. This project allowed me to gain valuable experience in web development, project management, and teamwork.",
		tags: ["Web Development", "JavaScript", "CSS", "Data Base", "PHP"],
		github: "https://github.com/OshkarVTec/ExpoIngenieriasWeb",
		image:
			"https://raw.githubusercontent.com/OshkarVTec/ExpoIngenieriasWeb/main/Screenshot from 2023-07-25 14-54-12.png",
	},
	{
		id: 5,
		title: "Syntax Highlighter",
		body: "I developed a syntax highlither that takes a Python script and generates an output HTML file. The HTML file, paired with a CSS sylesheet, displays the code with a correct syntax highlighting. The code is written in Elixir, and contains some Erlang code with the Leex library.",
		tags: ["Elixir", "Erlang", "CSS"],
		github: "https://github.com/OshkarVTec/python-syntax-highlighter",
		image:
			"https://raw.githubusercontent.com/OshkarVTec/python-syntax-highlighter/main/Screenshot%20from%202023-07-26%2010-07-25.png?token=GHSAT0AAAAAACE33CC37NSLB3IMYTT6VMVKZGBJB5Q",
	},
	{
		id: 6,
		title: "Fruit Data API Search",
		body: "A web app where you can search for fruit data and download a csv file. It uses FruityVice API. Built on React and Node.js",
		tags: ["Node.js", "ReactJS"],
		github: "https://github.com/OshkarVTec/apiConnectionExcercise",
		image:
			"https://raw.githubusercontent.com/OshkarVTec/apiConnectionExcercise/main/example.png",
	},
	{
		id: 8,
		title: "Data Search Web Page ",
		body: "A web app where you can search for scholarships, aplying filters and using a text search. Built on React using Vite. Deployed on GithubPages.",
		tags: ["ReactJS"],
		github: "https://github.com/OshkarVTec/webBecas",
		image:
			"https://raw.githubusercontent.com/OshkarVTec/webBecas/main/example.png",
	},
];
