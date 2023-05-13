/*
 * Section
 *
 * Section Component
 *
 * @returns {JSX.Element}
*/

interface HeadingProps {
	title: string;
}

export default function Section({ title }: HeadingProps): JSX.Element {

	return (
		<h2 className="section-heading">
			{title && title}
		</h2>
	)
}
