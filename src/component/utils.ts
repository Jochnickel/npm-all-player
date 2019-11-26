import getYouTubeID from "get-youtube-id-definately";

export const getYtInfo = (video: string) => {
	const videoID: string = getYouTubeID(video);
	return new Promise((y, n) => {
		if (videoID===getYouTubeID.ERROR_ID) {
			n("No Video Found");
			return;
		}
		fetch('https://noembed.com/embed?url=https://youtu.be/' + videoID).then(a => a.json()).then(r => {
			if (r.error) {
				n(r.error);
			} else {
				y(r);
			}
		})
	});
};