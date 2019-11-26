import * as React from "react";
import YouTube from 'react-youtube-typescript';

export default class YTPlayer extends React.Component<{url:string}> {
	render() {
		return (
			<YouTube opts={{playerVars: {autoplay: 1}}}/>
		);
	}
}