/*
 * Menus
 *
 * Menus present in the Footer.
 *
 * @param {ReactNode} children
 * @returns {JSX.Element}
*/
import Link from "next/link"

interface MenuItemProps {
	id: string;
	title: string;
	link: string;
	type: string;
}

interface MenuProps {
	id: string;
	title: string;
	menu: MenuItemProps[];
}

interface MenusProps {
	menus: MenuProps[];
}

export default function Menus({ menus }): JSX.Element {
	return (
		<>
			{menus.map((menu: MenuProps) => (
				<div key={`menu-${menu.id}`}>
					<nav id={`footer-navigation-${menu.id}`} aria-label={`Navigation - ${menu.title}`}>
						<h2 className="uppercase font-semibold mt-12 mb-4 lg:mt-0 lg:mb-8 text-xl">{menu.title}</h2>
						<ul key={`menu-${menu.id}`}>
							{menu.menu.map((item) => (
								<li className="uppercase font-medium leading-loose text-lg" key={`menu-item-${item.id}`}>
									{item.type === 'external' ? (
										<a className="hover:bg-highlight-transparent" href={item.link} rel="noreferrer" target="_blank">{item.title}</a>
									) : (
										<Link className="hover:bg-highlight-transparent" href={item.link}>{item.title}</Link>
									)}
								</li>
							))}
						</ul>
					</nav>
				</div>
			))}
		</>
	)
}
