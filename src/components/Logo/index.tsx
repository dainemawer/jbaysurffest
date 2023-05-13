/*
 * Logo
 *
 * Wave Logo
 *
 * @param {ReactNode} children
 * @returns {JSX.Element}
*/

export default function Logo(): JSX.Element {
	return (
		<div>
			<svg className="mt-12 lg:mt-0" width="48" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 40">
				<path d="M47.99 12.334c-.075-4.342-2.34-7.567-5.915-9.81C38.368.2 34.157-.187 29.749.07c-4.97.29-8.615 2.406-11.58 6.142-2.9 3.651-5.28 7.563-7.011 11.836-1 2.467-1.744 5.032-2.74 7.5C6.458 30.395 4.59 35.321 0 38.58c3.654 1.422 39.625 2.037 44.896.604-1.36-.768-2.377-1.222-3.25-1.862-1.329-.975-2.909-1.86-3.768-3.166-3.29-4.994-4.781-10.449-3.406-16.39.722-3.12 3.523-6.597 8.006-5.189 1.221.384 2.286 1.255 3.399 1.939.652.401 1.257.873 2.117 1.477 0-1.508.016-2.584-.003-3.66Z" fill="#000" />
				<path d="M22.866 37.541c-.818 1.172-2.736.957-4.032.913a.48.48 0 0 1-.154-.004l-.075-.002a.547.547 0 0 1-.245-.059c-.465.564-1.387-.106-.92-.676 1.032-1.264 1.12-3.431 1.55-4.983.529-1.906.959-3.836 1.458-5.75.42-1.612 1.005-3.17 1.605-4.724l.272-1.004c.572-2.122 1.463-4.138 2.012-6.26.052-.2.174-.307.317-.346 1.854-7.42 10.236-9.901 15.554-7.665-2.337-.47-4.618-.518-6.816.56-1.8.883-3.386 1.99-4.289 3.782-.967 1.92-1.867 3.867-2.75 5.736-.333.984-.466 2.017-.603 3.055-.172 1.3-.45 2.569-.701 3.855-.538 2.755-.997 5.525-1.473 8.292-.184 1.075-.368 2.107-.375 3.198-.005.666.068 1.506-.335 2.082Z" fill="#fff" />
				<path d="M33.561 16.682a7.445 7.445 0 0 0-.088-.278c-.03.088-.058.177-.086.267a45.202 45.202 0 0 0-.4 1.573c-.521 2.627-.4 5.396-.342 8.097.298 1.08.444 2.21.62 3.331a.459.459 0 0 1 .167.26c.381 1.762 1.303 3.546 2.564 5.015 1.143 1.012 2.548 1.78 3.841 2.611.165.106.21.319.16.5.071.311-.195.69-.572.556a.371.371 0 0 1-.42.19c-2.225-.436-4.667-.536-5.526-2.9-.034-.053-.064-.113-.096-.171a6.941 6.941 0 0 1-.307-.515.426.426 0 0 1-.053-.234c-.874-1.967-1.383-4.202-1.653-6.3-.37-2.882-.196-5.755.31-8.583a.475.475 0 0 1-.096-.278c-.053-2.026.452-4.054 1.712-5.672a.445.445 0 0 1 .234-.163c.904-1.56 2.171-2.738 4.25-2.994 2.083-.255 4.172-.748 6.113.517.175.113.366.208.525.338.102.083.16.216.53.743-5.247-2.4-8.684-.664-11.387 4.09Z" fill="#fff" />
				<path d="M38.623 9.877c-2.426.308-3.948 1.671-5.756 3.029-1.935 1.454-1.55 3.577-2.18 5.21-.252 3.252-.531 6.514-.413 9.78.121 3.363.608 6.922 2.456 9.817.182.285.127.596-.081.775-.078.282-.315.423-.61.428-1.164.022-2.33-.353-3.471-.55-1.062-.183-2.85-.585-3.54.506-.354.558-1.227.04-.995-.545 1.334-3.359 1.513-6.997 1.678-10.564.178-3.839 1.092-7.48 1.82-11.236a.57.57 0 0 1 .363-.437c.756-1.631 1.48-3.284 2.378-4.84 1.634-2.834 5.404-4.244 8.997-3.426 2.215.505 4.15 1.557 5.746 3.235-1.985-1.254-4.065-1.478-6.392-1.182Z" fill="#fff" />
				<path d="M43.85 8.364c-2.488-2.64-5.567-3.431-9.148-2.93-2.995.419-5.74 1.319-7.82 3.531-.883.938-1.638 2.026-2.268 3.142-.89 1.577-1.616 3.24-2.41 4.869-2.173 6.792-4.28 13.614-5.803 20.584-.058.267-.306.585-.629.507-1.527-.368-2.986-.27-4.522-.004-.534.093-.787-.492-.554-.9 1.988-3.482 3.778-7.123 4.641-11.058.63-2.866 1.052-6.007 2.94-8.36.08-.244.29-.486.512-.727l-.013.005.041-.035-.028.03.188-.248.103-.159-.034-.558c.309-.644.525-1.354.944-1.923 1.665-2.266 3.492-4.423 5.08-6.737 4.69-6.835 14.838-4.962 18.634-.312.559.685 1.099 1.386 1.399 2.352-.42-.355-.88-.673-1.252-1.069Z" fill="#fff" />
				<path d="M45.127 7.591c-.32-.363-.624-.739-.951-1.095-1.87-2.034-4.05-3.477-6.923-3.944-1.861-.302-3.602-.82-5.576-.381-3.051.679-5.45 2.282-7.298 4.548-2.81 3.443-5.728 6.845-7.513 10.968-.08.185-.27.325-.481.456-2.237 6.27-2.378 13.696-7.105 18.677a.765.765 0 0 1-.068.062c-.057.293-.343.532-.748.422-1.314-.36-2.527-.31-3.667.493-.598.422-1.29-.409-.72-.885 2.607-2.181 4.175-5.343 5.345-8.468 1.145-3.056 1.918-6.234 2.558-9.429-.29-.457.011-.756.916-1.618.544-1.434 1.037-2.89 1.657-4.291.24-.541.317-1.44 1.355-1.237.158-.572.167-1.247.499-1.699 1.382-1.88 2.737-3.805 4.336-5.507 2.165-2.305 4.977-3.368 8.22-3.614 2.107-.159 4.166-.22 6.276 0 5.033.52 8.58 3 10.718 7.468-.277-.308-.557-.615-.83-.926Z" fill="#fff" />
			</svg>
		</div>
	)
}
