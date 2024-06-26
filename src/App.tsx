function App() {
	return (
		<>
			<div className="flex">
				<div className="w-1/2 h-screen flex justify-center p-96">
					<ul className="list-none text-3xl flex flex-col gap-4 font-bold">
						<li>Portfolio</li>
						<li>Projects</li>
						<li>Experience</li>
						<li>Skills</li>
						<li>Education</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="w-1/2 h-screen bg-black animate-slideInLeft flex flex-col justify-center items-center">
					<div>
						<p className="text-7xl text-white font-bold">Oskar Villa</p>
						<p className="text-3xl text-white">Software Developer</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
