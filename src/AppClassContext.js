import { createContext } from "react";

export const defoultClassOject = {
	isUserLogged: true,
	toggleLoggedState: () => {},
};

export const AppClassContext = createContext(defoultClassOject);
