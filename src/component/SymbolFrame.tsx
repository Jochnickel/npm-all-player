import * as React from "react";
import {Icon} from '@iconify/react';
import playCircle from '@iconify/icons-ion/play-circle';
import closeCircle from '@iconify/icons-ion/close-circle';
import ellipsisHorizontalCircleSharp from '@iconify/icons-ion/ellipsis-horizontal-circle-sharp';

interface iProps {
	symbol: 'play' | 'error' | 'loading',
	width?: number,
	height?: number,
	onClick?: any,
	msg?: string
}

export default class SymbolFrame extends React.Component<iProps> {
	render() {
		const w = this.props.width || 600;
		const h = this.props.height || 400;
		const icon = (this.props.symbol === 'play')
			? <Icon width={h * 0.2} icon={playCircle} style={{color: "yellowgreen"}}/>
			: (this.props.symbol === 'error')
				? <Icon width={h * 0.2} icon={closeCircle} style={{color: "lightcoral"}}/>
				: <Icon width={h * 0.2} icon={ellipsisHorizontalCircleSharp} style={{color:"lightskyblue"}}/>;
		const text = this.props.msg || "";
		return (
			<div onClick={this.props.onClick} style={{
				backgroundColor: "dimgray",
				height: h,
				width: w,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				cursor: this.props.onClick ? "pointer" : "",
				flexDirection: "column"
			}}>
				{icon}
				<h3 style={{margin: 0}}>{text}</h3>
			</div>
		);
	}
}
