function App() {
	return (
		<>
			<div className="flex">
				<div className="w-1/2 h-screen flex justify-center items-center">
					<ul className="list-none text-3xl font-bold h-auto">
						<li className="py-2">Portfolio</li>
						<li className="py-2">Projects</li>
						<li className="py-2">Experience</li>
						<li className="py-2">Skills</li>
						<li className="py-2">Education</li>
						<li className="py-2">Contact</li>
					</ul>
				</div>
				<div className="w-1/2 h-screen bg-black animate-slideInLeft flex justify-center items-center">
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
