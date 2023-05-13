/*
 * Section
 *
 * Section Component
 *
 * @returns {JSX.Element}
*/

interface HeadingProps {
	title: string;
	items: string[];
}

export default function Terms({ title, items }: HeadingProps): JSX.Element {
	return (
		<>
			<h3 className="terms-heading">
				{title && title}
			</h3>
			<ol className="list-decimal">
				{items && items.map((item, index) => (
					<li key={`terms-${index}`} className="mb-4 last:mb-0 ml-4 text-lg">{item}</li>
				))}
			</ol>
		</>

	)
}
