import React from "react";
import { Icon, InlineIcon } from '@iconify/react';
import startIcon from '@iconify/icons-flat-color-icons/start';

export default class PlayButton extends React.Component {
	render() {
		return (
			<div style={{backgroundColor:"darkslategray",height:"100%",width:"100%",display:"flex",justifyContent:"center"}}>
				<Icon icon={startIcon} />
			</div>
		);
	}
}