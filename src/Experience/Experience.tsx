import Subtitle from "../common/Subtitle";

export default function Experience() {
	return (
		<section id="experience">
			<Subtitle>Experience</Subtitle>
			<div className="flex flex-wrap justify-around">
				<div className="border-2 border-black w-[45%] m-4">1</div>
				<div className="border-2 border-black w-[45%] m-4">2</div>
				<div className="border-2 border-black w-[45%] m-4">3</div>
			</div>
		</section>
	);
}
