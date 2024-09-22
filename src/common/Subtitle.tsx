import { ReactNode } from "react";

export default function Subtitle({ children }: SubtitleProps) {
	return (
		<h2 className="m-5 lg:m-14 p-4 text-black font-bold text-4xl lg:text-5xl">
			{children}
		</h2>
	);
}

interface SubtitleProps {
	children: ReactNode;
}
