import { createContext, useContext } from 'react';

export const SiteContext = createContext({});
export const store = {
	site: {
		title: 'J-Bay Surf Festival',
	}
}

export const useSiteContext = () => useContext(SiteContext);
