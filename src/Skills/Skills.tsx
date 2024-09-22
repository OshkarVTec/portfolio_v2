import Subtitle from "../common/Subtitle";
import { skillsData } from "../data/skills.tsx";

export default function Skills() {
	return (
		<section id="skills" className="flex flex-col items-center lg:block">
			<Subtitle>Skills</Subtitle>

			<div className="flex flex-wrap justify-around lg:m-6">
				{skillsData.map((skill) => {
					return (
						<div key={skill.name} className="m-4 lg:m-10 w-40 h-40 group">
							<p className="text-wrap lg:opacity-0 group-hover:opacity-100">
								{skill.name}
							</p>
							<div className="border-2 border-black p-4 text-black flex justify-center hover:bg-black hover:text-white">
								{skill.icon}
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
