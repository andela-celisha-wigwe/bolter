import axios from "axios";

// increment
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

export function getVideos() {
	return (dispatch) => {


		dispatch({ type: "GET_VIDEOS_PENDING" })

		const searchEndpoint = 'http://localhost:8888/api/v1/videos';

		axios.get(searchEndpoint).then( (data) => {
			var { data } = data
			dispatch({
				type: 'GET_VIDEOS_DONE',
				data
			})
		}).catch( (err) => {
			console.log("THERE WAS A PROBELM GETTING THE VIDEOS", err);
			dispatch({
				type: "GET_VIDEOS_FAILED"
			})
		})
	}
}

export function requestForVideos() {
	return {
		type: 'REQUEST_FOR_VIDEOS'
	}
}

export function searchVideo(query) {
	return {
		type: 'SEARCH_VIDEOS',
		query
	}
}

export function show(index) {
	return {
		type: 'SHOW_DETAILS',
		index
	}
}

export function hide(index) {
	return {
		type: 'HIDE_DETAILS',
		index
	}
}