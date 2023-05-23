/*
 * Section
 *
 * Section Component
 *
 * @returns {JSX.Element}
*/

import Heading from '../Heading';

interface SectionProps {
	children: React.ReactNode;
	id: string;
	label: string;
	title: string;
	rotate: string;
}

export default function Section({ id, children, label, title, rotate }: SectionProps): JSX.Element {
	return (
		<section className="py-6 lg:py-16" id={id} aria-label={label}>
			{title && <Heading title={title} />}
			<hr className={`bg-secondary h-2 rounded ${rotate}`} />
			{children && children}
		</section>
	)
}
