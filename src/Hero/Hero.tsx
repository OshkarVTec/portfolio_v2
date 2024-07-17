import { Link } from "react-scroll";

export default function Hero() {
	return (
		<div className="flex">
			<div className="w-1/2 h-screen flex justify-center items-center">
				<ul className="list-none text-3xl font-bold h-auto animate-slideInRight">
					<li className="my-1 p-2 hover:bg-black hover:text-white">
						<Link to="projects" smooth={true} duration={500}>
							Projects
						</Link>
					</li>
					<li className="my-1 p-2 hover:bg-black hover:text-white">
						<Link to="experience" smooth={true} duration={500}>
							Experience
						</Link>
					</li>
					<li className="my-1 p-2 hover:bg-black hover:text-white">
						<Link to="skills" smooth={true} duration={500}>
							Skills
						</Link>
					</li>
					<li className="my-1 p-2 hover:bg-black hover:text-white">
						<Link to="education" smooth={true} duration={500}>
							Education
						</Link>
					</li>
					<li className="my-1 p-2 hover:bg-black hover:text-white">
						<Link to="contact" smooth={true} duration={500}>
							Contact
						</Link>
					</li>
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
