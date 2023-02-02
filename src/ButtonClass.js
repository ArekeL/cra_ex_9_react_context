import React, { PureComponent } from "react";

import { AppClassContext } from "./AppClassContext";

class ButtonClass extends PureComponent {
	state = {};
	render() {
		return (
			<AppClassContext.Consumer>
				{(props) => (
					<button onClick={props.toggleLoggedState}>Switch Status</button>
				)}
			</AppClassContext.Consumer>
		);
	}
}

export default ButtonClass;
