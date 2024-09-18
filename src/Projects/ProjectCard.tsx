export default function ProjectCard({ projectDetails }: ProjectCardProps) {
	return (
		<div className="text-white p-4 text-sm w-full justify-center items-center">
			<p className="font-bold">{projectDetails.title}</p>
			<img
				src={projectDetails.image}
				className="w-[80%] object-cover aspect-video"
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
}
