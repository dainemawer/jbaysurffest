import { createContext, useContext } from 'react';

export const SiteContext = createContext({});
export const store = {
	site: {
		title: 'My Site',
	}
}

export const useSiteContext = () => useContext(SiteContext);
