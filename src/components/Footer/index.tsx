/*
 * Footer
 *
 * Global Site Footer
 *
 * @returns {JSX.Element}
*/
import { menus } from "data"
import Menus from "@components/Menus"
import Logo from "@components/Logo"
import Colophon from "@components/Colophon"

export default function Footer(): JSX.Element {
	return (
		<footer className="footer" id="site-footer" role="contentinfo" aria-label="Site Footer">
			<div className="container mx-auto max-w-7xl">
				<div className="footer-navigation">
					<Logo />
					<Menus menus={menus} />
				</div>
				<Colophon />
			</div>
		</footer>
	)
}
