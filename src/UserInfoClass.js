import React, { PureComponent } from "react";

import { AppClassContext } from "./AppClassContext";

class UserInfoClass extends PureComponent {
	static contextType = AppClassContext;

	render() {
		const { isUserLogged } = this.context;
		const userLoggedInfo = isUserLogged
			? "Yes he is (cc)"
			: "No he is not (cc)";
		return (
			<div>
				<p>Is user logged: {userLoggedInfo}</p>
			</div>
		);
	}
}

export default UserInfoClass;
