import Subtitle from "../common/Subtitle.tsx";
import { experienceData } from "../data/experience.ts";

export default function Experience() {
	return (
		<section id="experience" className="flex flex-col items-center lg:block">
			<Subtitle>Experience</Subtitle>
			<div className="flex flex-wrap justify-around">
				{experienceData.map((experienceItem) => (
					<div
						className="border-2 border-black w-[80%] lg:w-[45%] m-4 p-4"
						key={experienceItem.name}
					>
						<div className="my-4">
							<div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center">
								<h3 className="text-lg font-bold">{experienceItem.name}</h3>
								<p className="text-sm">{experienceItem.date}</p>
							</div>
							<h4 className="text-md">{experienceItem.position}</h4>
						</div>
						<p className="text-sm">{experienceItem.description}</p>

						<ul className="list-disc py-4 px-8">
							{experienceItem.bullets.map((bullet) => (
								<li key={bullet} className="text-sm ">
									{bullet}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
