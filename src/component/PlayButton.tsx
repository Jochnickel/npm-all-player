import * as React from "react";
import { Icon, InlineIcon } from '@iconify/react';
import playCircle from '@iconify/icons-ion/play-circle';

export default class PlayButton extends React.Component<{width?:number,height?:number, onClick?: any}>{
	render() {
		const w = this.props.width || 600;
		const h = this.props.height || 400;
		return (
			<div onClick={this.props.onClick} style={{backgroundColor:"dimgray",height:h,width:w,display:"flex",justifyContent:"center",alignItems:"center", cursor:"pointer"}}>
				<Icon width={h*0.2} icon={playCircle} style={{color:"yellowgreen"}}/>
			</div>
		);
	}
}