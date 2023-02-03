import React, { PureComponent } from "react";

import { AppClassContext } from "./AppClassContext";

class ButtonClass extends PureComponent {
	static contextType = AppClassContext;

	render() {
		return (
			<button onClick={this.context.toggleLoggedState}>Switch Status</button>
		);
	}
}

export default ButtonClass;
