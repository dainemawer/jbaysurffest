import { AccordionItem } from "./AccordionItem";
import { useState } from "react";

const Accordion = ({ faqs }) => {
	const [clicked, setClicked] = useState("0");

	const handleToggle = (index: string) => {
		if (clicked === index) {
			return setClicked("0");
		}
		setClicked(index);
	};

	return(
		<ul>
			{faqs.map((faq: string, index: string) => (
				<AccordionItem onToggle={() => handleToggle(index)} active={clicked === index}  key={index} faq={faq} />
			))}
		</ul>
	);
}

export default Accordion;
