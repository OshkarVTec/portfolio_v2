export default function Hero() {
	return (
		<div className="flex">
			<div className="w-1/2 h-screen flex justify-center items-center">
				<ul className="list-none text-3xl font-bold h-auto">
					<li className="my-1 p-2 hover:bg-black hover:text-white">Projects</li>
					<li className="my-1 p-2 hover:bg-black hover:text-white">
						Experience
					</li>
					<li className="my-1 p-2 hover:bg-black hover:text-white">Skills</li>
					<li className="my-1 p-2 hover:bg-black hover:text-white">
						Education
					</li>
					<li className="my-1 p-2 hover:bg-black hover:text-white">Contact</li>
				</ul>
			</div>
			<div className="w-1/2 h-screen bg-black animate-slideInLeft flex justify-center items-center">
				<div>
					<p className="text-7xl text-white font-bold">Oskar Villa</p>
					<p className="text-3xl text-white">Software Developer</p>
				</div>
			</div>
		</div>
	);
}
