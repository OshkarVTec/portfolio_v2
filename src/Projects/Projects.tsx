import Subtitle from "../common/Subtitle";
import Slider from "react-slick";
import "./Projects.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import React from "react";
import { projects } from "../data/projects.ts";
import ProjectCard from "./ProjectCard.tsx";

export default function Projects() {
	const settings = {
		arrows: false,
		dots: false,
		infinite: true,
		centerMode: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		className: "center",
		centerPadding: "100px",
	};

	const slider = React.useRef<Slider | null>(null);

	const leftArrow = () => {
		console.log(slider?.current?.slickPrev());
		slider?.current?.slickPrev();
	};

	const rightArrow = () => {
		slider?.current?.slickNext();
	};
	return (
		<section id="projects" className="h-screen">
			<div>
				<Subtitle>Projects</Subtitle>
			</div>
			<div className="flex justify-between px-96 z-[904] ">
				<button onClick={leftArrow} className="z-[910]">
					<AiOutlineLeft size={50} />
				</button>
				<button onClick={rightArrow} className="z-[910]">
					<AiOutlineRight size={50} />
				</button>
			</div>
			<Slider ref={slider} {...settings} className="z-[800]">
				{projects.map((project) => (
					<div
						key={project.id}
						className=" border-white h-96 w-full bg-black shadow-lg shadow-white"
					>
						<ProjectCard projectDetails={project} />
					</div>
				))}
			</Slider>
		</section>
	);
}
