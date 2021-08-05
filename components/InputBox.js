import { Input } from "native-base";
import React from "react";

export default class InputBox extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		this.state = { ...props };
	}

	render() {
		return (
			<>
				<Input
					placeholder={this.state.placeholder}
				>

				</Input>
			</>
		);
	}
}