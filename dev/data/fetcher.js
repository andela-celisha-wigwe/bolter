import axios from 'axios'

var request = new XMLHttpRequest();

function getVideos() {
	return '[1,2,3,4,5]'
	var endpoint = 'http://localhost:8888/api/v1/videos';
	request.open('GET', endpoint, false);
	request.send();
	return request.responseText;
}

var videos = JSON.parse(getVideos())
export default videos