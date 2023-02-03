import React, { PureComponent } from "react";

import { AppClassContext } from "./AppClassContext";

class UserInfoClass extends PureComponent {
	static contextType = AppClassContext;

	render() {
		const { isUserLogged } = this.context;
		const userLoggedInfo = isUserLogged ? "Yes he is" : "No he is not";
		return (
			<div>
				<p>Is user logged: {userLoggedInfo}</p>
			</div>
		);
	}
}

export default UserInfoClass;
