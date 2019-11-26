import * as React from "react";
import SymbolFrame from "./SymbolFrame";
import YTPlayer from "./YTPlayer";
import {getYtInfo} from "./utils";

interface iProps {
	preload?: boolean;
	url: string;
}

const dProps = {
	preload: false
};

export default class AllPlayer extends React.Component<iProps> {
	static defaultProps = dProps;

	constructor(props: any) {
		super(props);
		getYtInfo(props.url).then(() => {
			this.setState({state: 'urlGood'});
		}).catch(() => {
			this.setState({state: 'errorUrl'});
			this.setState({msg: "Video URL not valid!"})
		});
		this.props.preload && this.loadPlayer(this.props.url);
	}

	state = {
		player: <></>,
		playerReady: false,
		msg: "",
		state: 'pre' // 'errorUrl', 'urlGood'
	};

	private loadPlayer = (url: string) => {
		this.setState({player: <YTPlayer url={url}/>});
	};

	render() {
		const plBtn = (this.state.state === 'pre') ? <SymbolFrame onClick={this.loadPlayer} symbol={"play"}/>
					: (this.state.state === 'errorUrl') && <SymbolFrame symbol={"error"} msg={"Video URL not valid!"}/>;
		return (
			<div>
				{this.state.player}
				{plBtn}
			</div>
		);
	}
}