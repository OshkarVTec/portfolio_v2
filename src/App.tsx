import Contact from "./Contact/Contact.tsx";
import Education from "./Education/Education.tsx";
import Experience from "./Experience/Experience.tsx";
import Hero from "./Hero/Hero.tsx";
import Projects from "./Projects/Projects.tsx";
import Skills from "./Skills/Skills.tsx";

function App() {
	return (
		<>
			<Hero />
			<Experience />
			<Skills />
			<Projects />
			<Education />
			<Contact />
		</>
	);
}

export default App;
