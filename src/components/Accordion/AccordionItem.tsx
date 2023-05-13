export const AccordionItem = ({ faq, active, onToggle }) => {
	const { question, answer } = faq;
	return (
		<li className={active ? "active" : ""}>
			<button className="flex items-center uppercase text-left py-4 font-medium text-lg lg:text-2xl border-b border-tertiary w-full" onClick={onToggle}>
				<hr className={`w-7 bg- h-2 rounded bg-none rotate-12 ${active ? 'bg-secondary -rotate-12' : 'bg-primary rotate-12'}`} />
				<span className="inline-block ml-4">{question}</span>
			</button>
			<div className={`answer_wrapper transition-all h-0 h- overflow-hidden ${active ? "h-32" : ""}`}>
				<div className="answer py-7 text-base lg:text-xl font-medium leading-normal">{answer}</div>
			</div>
		</li>
	);
};
