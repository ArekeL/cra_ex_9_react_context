import { createContext } from "react";

export const defoultFunObject = {
	isUserLogged: true,
	toggleLoggedState: () => {},
};

export const AppFunContext = createContext(defoultFunObject);
