/*
 * Navigation
 *
 * Navigation Component
 *
 * @returns {JSX.Element}
*/
import { navigation } from "data"
import { useRouter } from "next/router";
import Link from 'next/link';
import { ScrollLink, animateScroll as scroll } from "react-scroll";

interface NavigationProps {
	id: string,
	className: string;
	label: string;
}

const Anchor = ScrollLink((props) => {
	return (
		<a href={props.href} {...props}>
			{props.children}
		</a>
	)
});

export default function Navigation({ className, id, label }: NavigationProps): JSX.Element {
	const { asPath } = useRouter();
	const origin =
		typeof window !== 'undefined' && window.location.origin
			? window.location.origin
			: '';

	const URL = `${origin}${asPath}`;

	return (
		<>
			<nav className={`navigation ${className}`} id={id} role="navigation" aria-label={label}>
				<div className="container mx-auto max-w-7xl">
					<ul className="flex justify-center items-center">
						{navigation.map((item, index) => {
							return (
								<li key={`navigation-${item.id}`} className="mr-6 last:mr-0">
									{asPath !== '/' ? (
										<Link href={`${origin}/#${item.link}`} className="navigation-link">{item.title}</Link>
									) : (
										<Anchor href = {`${URL}#${item.link}`} className="navigation-link" spy={true} smooth={true} to={item.link}>{item.title}</Anchor>
									)}
								</li>
							)
						})}
					</ul>
				</div>
			</nav>
		</>
	)
}
