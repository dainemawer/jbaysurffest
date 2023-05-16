/*
 * Header
 *
 * Global Site Header
 *
 * @returns {JSX.Element}
*/
import { useState, useRef, useEffect } from "react"
import Image from 'next/image';
import Navigation from '@components/Navigation';

export default function Header(): JSX.Element {
	const [stickyClass, setStickyClass] = useState('absolute');
	const figure = useRef<HTMLDivElement>(null);

	const stickNavbar = () => {
		if (window !== undefined) {
			let windowHeight = window.scrollY;
			if(figure.current !== null) {
				windowHeight > figure.current.clientHeight ? setStickyClass('fixed top-0 left-0 z-50 is-sticky') : setStickyClass('absolute');
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', stickNavbar);

		return () => {
			window.removeEventListener('scroll', stickNavbar);
		};
	}, []);

	return (
		<header className="mb-52" id="site-header" role="banner" aria-label="Site Header">
			<div className="container mx-auto max-w-full">
				<figure ref={figure}>
					<Image
						className="mx-auto"
						src="/banner.png"
						sizes="(min-width: 2040px) 1920px, calc(94.19vw + 17px)"
						alt="JBSF Logo"
						width={1920}
						height={1080}
						quality={100}
						priority
					/>
				</figure>
			</div>
			<Navigation id="site-navigation" label="Site Navigation" className={stickyClass} />
		</header>
	)
}
