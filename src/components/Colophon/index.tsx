/*
 * Colophon
 *
 * Colophon component that exists in the footer.
 *
 * @param {ReactNode} children
 * @returns {JSX.Element}
*/
import Link from "next/link"

export default function Colophon(): JSX.Element {
	return (
		<div className="colophon">
			<p className="uppercase mb-2 lg:mb-0 font-medium">
				&copy; Copyright 2023. J-Bay Surf Festival. All Rights Reserved
			</p>
			<ul>
				<li>
					<Link href="/terms-conditions" className="uppercase font-medium hover:bg-highlight-transparent">
						Terms and Conditions
					</Link>
				</li>
			</ul>
		</div>
	)
}
