/*
 * Countdown
 *
 * Countdown Component.
 *
 * @param {ReactNode} children
 * @returns {JSX.Element}
*/
import Countdown from 'react-countdown';

export default function CountDownTimer(): JSX.Element {
	return (
		<Countdown
			date={new Date("13 July 2023")}
			renderer={({ days, hours, minutes, seconds }) => (
				<div>
					<span className="text-2xl lg:text-[2.5rem] inline-block mr-2">{days}</span> <span className="uppercase text-2xl lg:text-[2rem] inline-block mr-4">days</span> <span className="text-2xl lg:text-[2.5rem] inline-block mr-2">{hours}</span> <span className="uppercase text-2xl lg:text-[2rem] inline-block mr-4">hrs</span> <span className="text-2xl lg:text-[2.5rem] inline-block mr-2">{minutes}</span> <span className="uppercase text-2xl lg:text-[2rem] inline-block mr-4">mins</span> <span className="text-2xl lg:text-[2.5rem] inline-block mr-2">{seconds}</span> <span className="uppercase text-2xl lg:text-[2rem]">secs</span>
				</div>
			)}
		/>
	)
}
