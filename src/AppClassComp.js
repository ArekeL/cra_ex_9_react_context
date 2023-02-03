import React, { PureComponent } from "react";

import ButtonClass from "./ButtonClass";
import UserInfoClass from "./UserInfoClass";

import { AppClassContext, defoultClassOject } from "./AppClassContext";

class AppClassComp extends PureComponent {
	state = {
		isUserLogged: defoultClassOject.isUserLogged,
	};
	render() {
		return (
			<div className='box'>
				<h3>Class components</h3>
				<AppClassContext.Provider
					value={{
						isUserLogged: this.state.isUserLogged,
						toggleLoggedState: this.handleToggleStateIsLogged,
					}}>
					<UserInfoClass />
					<ButtonClass />
				</AppClassContext.Provider>
			</div>
		);
	}

	handleToggleStateIsLogged = () =>
		this.setState((state) => ({
			isUserLogged: !state.isUserLogged,
		}));
	// this.setState((state) => {
	// 	state.isUserLogged = !defoultClassOject.isUserLogged;
	// });
}

export default AppClassComp;
