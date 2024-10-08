import { Link } from "react-scroll";

export default function Hero() {
	return (
		<div className="flex">
			<div className="w-1/2 h-screen justify-center items-center hidden lg:flex">
				<ul className="list-none text-3xl font-bold h-auto animate-slideInRight">
					<li className="my-6">
						<Link
							to="experience"
							smooth={true}
							duration={500}
							className="p-2 hover:bg-black hover:text-white"
						>
							Experience
						</Link>
					</li>
					<li className="my-6">
						<Link
							to="skills"
							smooth={true}
							duration={500}
							className="p-2 hover:bg-black hover:text-white"
						>
							Skills
						</Link>
					</li>
					<li className="my-6">
						<Link
							to="projects"
							smooth={true}
							duration={500}
							className="p-2 hover:bg-black hover:text-white"
						>
							Projects
						</Link>
					</li>
					<li className="my-6">
						<Link
							to="education"
							smooth={true}
							duration={500}
							className="p-2 hover:bg-black hover:text-white"
						>
							Education
						</Link>
					</li>
					<li className="my-6">
						<Link
							to="contact"
							smooth={true}
							duration={500}
							className="p-2 hover:bg-black hover:text-white"
						>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className="w-full lg:w-1/2 lg:h-screen bg-black animate-slideInLeft flex justify-center items-center">
				<div className="flex items-start flex-col p-10">
					<p className="text-7xl text-white font-bold">
						Oskar <br /> Villa
					</p>
					<p className="text-3xl text-white">Software Developer</p>
				</div>
			</div>
		</div>
	);
}
