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
		const endpoint = 'http://localhost:8888/api/v1/videos';

		axios.get(endpoint).then( (data) => {
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
	return (dispatch) => {
		dispatch({type: 'SEARCHING'})
		const endpoint = 'http://localhost:8888/api/v1/search/videos/' + query
		axios.get(endpoint).then( (data) => {
			var { data } = data
			dispatch({
				type: 'SEARCH_VIDEOS_DONE',
				data
			})
		})
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