import Subtitle from "../common/Subtitle";
import Slider from "react-slick";
import "./Projects.css";

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
	return (
		<div className="h-screen">
			<div>
				<Subtitle>Projects</Subtitle>
			</div>
			<Slider {...settings}>
				<div>
					<div className="border-2 border-black h-96 w-full bg-red-100">
						<h3>1</h3>
					</div>
				</div>
				<div>
					<div className="border-2 border-black h-96 w-full bg-white">
						<h3>2</h3>
					</div>
				</div>
				<div>
					<div className="border-2 border-black h-96 w-full bg-white">
						<h3>3</h3>
					</div>
				</div>
				<div>
					<div className="border-2 border-black h-96 w-full bg-white">
						<h3>4</h3>
					</div>
				</div>
				<div>
					<div className="border-2 border-black h-96 w-full bg-white">
						<h3>5</h3>
					</div>
				</div>
			</Slider>
		</div>
	);
}
