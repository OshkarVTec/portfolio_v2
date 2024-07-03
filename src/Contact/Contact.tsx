import Subtitle from "../common/Subtitle.tsx";
import { SocialData } from "../data/social.tsx";

export default function Contact() {
	return (
		<section id="contact">
			<Subtitle>Contact</Subtitle>
			<ul className="flex justify-around">
				{SocialData.map((social) => (
					<li key={social.platform}>
						<a href={social.link}>{social.icon}</a>
						<h3>{social.platform}</h3>
					</li>
				))}
			</ul>
		</section>
	);
}
