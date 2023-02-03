import React, { useState } from "react";

import ButtonFun from "./ButtonFun";
import UserInfoFun from "./UserInfoFun";

import { AppFunContext, defoultFunObject } from "./AppFunContext";

const AppFunComp = () => {
	const [isUserLogged, setIsUserLogged] = useState(
		defoultFunObject.isUserLogged
	);

	const toggleLoggedState = () => setIsUserLogged((value) => !value);

	return (
		<div className='box'>
			<h3>Function components</h3>
			<AppFunContext.Provider
				value={{
					isUserLogged,
					toggleLoggedState,
				}}>
				<UserInfoFun />
				<ButtonFun />
			</AppFunContext.Provider>
		</div>
	);
};

export default AppFunComp;
