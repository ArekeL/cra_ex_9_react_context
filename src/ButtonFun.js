import React, { useContext } from "react";

import { AppFunContext } from "./AppFunContext";

const ButtonFun = () => {
	const { toggleLoggedState } = useContext(AppFunContext);

	return <button onClick={toggleLoggedState}>Switch Status</button>;
};

export default ButtonFun;
