import Subtitle from "../common/Subtitle.tsx";
import { educationData } from "../data/education.ts";

export default function Education() {
	return (
		<section id="education" className="flex flex-col items-center lg:block">
			<Subtitle>Education</Subtitle>
			<div className="flex flex-wrap justify-around">
				{educationData.map((educationItem) => (
					<div
						className="border-2 border-black w-[80%] lg:w-[45%] m-4 p-4"
						key={educationItem.name}
					>
						<div className="my-4">
							<div className="flex flex-col items-start lg:flex-row lg:justify-between lg:items-center">
								<h3 className="text-lg font-bold">{educationItem.name}</h3>
								<p className="text-sm">{educationItem.date}</p>
							</div>
							<h4 className="text-md">{educationItem.school}</h4>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
