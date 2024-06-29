import { ReactNode } from "react";

export default function Subtitle({ children }: SubtitleProps) {
	return <h2 className="m-14 p-4 text-black font-bold text-5xl">{children}</h2>;
}

interface SubtitleProps {
	children: ReactNode;
}
