import Subtitle from "../common/Subtitle.tsx";
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
		responsive: [
			{
				breakpoint: 1024, // For screens smaller than 1024px
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768, // For screens smaller than 768px
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 480, // For screens smaller than 480px
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	const slider = React.useRef<Slider | null>(null);

	const leftArrow = () => {
		slider?.current?.slickPrev();
	};

	const rightArrow = () => {
		slider?.current?.slickNext();
	};
	return (
		<section
			id="projects"
			className="flex flex-col items-center lg:h-screen lg:block overflow-hidden"
		>
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
						className=" border-white h-40 sm:h-80  w-full bg-black shadow-lg shadow-white"
					>
						<ProjectCard projectDetails={project} />
					</div>
				))}
			</Slider>
		</section>
	);
}
