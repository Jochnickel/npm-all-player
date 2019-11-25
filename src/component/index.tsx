import * as React from "react";
import PlayButton from "./PlayButton";

export default class AllPlayer extends React.Component {
	render() {
		return (
			<div>
				<h1>hi</h1>
				<PlayButton onClick={()=>alert("hi")}/>
			</div>
		);
	}
}