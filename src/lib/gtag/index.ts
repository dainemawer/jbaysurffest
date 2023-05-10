interface sendEventProps {
	action: string,
	category: string,
	label: string,
	value: string | number
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const sendPageView = (url: string) => {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url,
	})
}

export const sendEvent = ({ action, category, label, value }: sendEventProps) => {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value: value,
	})
}
