import Subtitle from "../common/Subtitle.tsx";
import { SocialData } from "../data/social.tsx";

export default function Contact() {
	return (
		<section id="contact" className="flex flex-col items-center lg:block h-80">
			<Subtitle>Contact</Subtitle>
			<ul className="flex justify-around gap-6">
				{SocialData.map((social) => (
					<li
						key={social.platform}
						className="flex flex-col items-center justify-center"
					>
						<a href={social.link}>{social.icon}</a>
						<h3>{social.platform}</h3>
					</li>
				))}
			</ul>
		</section>
	);
}
