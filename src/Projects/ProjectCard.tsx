export default function ProjectCard({ projectDetails }: ProjectCardProps) {
	const handleClick = () => {
		window.open(projectDetails.github, "_blank");
	};
	return (
		<div
			className="text-white p-4 text-sm w-full justify-center items-center cursor-pointer"
			onClick={handleClick}
		>
			<p className="font-bold">{projectDetails.title}</p>
			<img
				src={projectDetails.image}
				className="w-[100%] md:w-[80%] object-cover "
			/>
		</div>
	);
}

interface ProjectCardProps {
	projectDetails: ProjectDetails;
}

interface ProjectDetails {
	id: number;
	title: string;
	body: string;
	tags: string[];
	image: string;
	github?: string;
}
