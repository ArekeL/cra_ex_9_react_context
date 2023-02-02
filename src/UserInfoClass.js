import React, { PureComponent } from "react";

import { AppClassContext } from "./AppClassContext";

class UserInfoClass extends PureComponent {
	render() {
		return (
			<AppClassContext.Consumer>
				{(props) => (
					<div>
						<p>
							Is user logged:{" "}
							{props.isUserLogged ? "Yes he is" : "No he is not"}
						</p>
					</div>
				)}
			</AppClassContext.Consumer>
		);
	}
}

export default UserInfoClass;
