import React, { useContext } from "react";

import { AppFunContext } from "./AppFunContext";

const UserInfoFun = () => {
	const { isUserLogged } = useContext(AppFunContext);
	const userLoggedInfo = isUserLogged
		? "Yes he is (sfc)"
		: "No he is not (sfc)";

	return (
		<div>
			<p>Is user logged: {userLoggedInfo}</p>
		</div>
	);
};

export default UserInfoFun;
