/*
 * Navigation
 *
 * Navigation Component
 *
 * @returns {JSX.Element}
*/

interface NavigationProps {
	id: string,
	label: string
}

export default function Navigation({ id, label }: NavigationProps): JSX.Element {
	return (
		<nav className="site-navigation" id={id} role="navigation" aria-label={label} />
	)
}
