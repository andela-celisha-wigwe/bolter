import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

function videos(state = [], action) {
	switch (action.type) {
		case 'GET_VIDEOS_PENDING' :
			// console.log(state)
			// console.log({
			// 	fetchingVideos: true,
			// 	fetchingSuccess: null,
			// 	videos: state
			// })
			return {
				fetchingVideos: true,
				fetchingSuccess: null,
				videos: state
			}
		case 'GET_VIDEOS_DONE' :
			console.log(state)
			// console.log({
			// 	fetchingVideos: false,
			// 	fetchingSuccess: true,
			// 	videos: action.data
			// })
			return {
				fetchingVideos: false,
				fetchingSuccess: true,
				videos: action.data
			}
		case 'GET_VIDEOS_FAILED' :
			return {
				fetchingVideos: false,
				fetchingSuccess: false,
				videos: state
			}
		default :
			return state
	}
}

function like(state =[], action) {
	switch (action.type) {
		case 'LIKE_VIDEO' :
			return state;
		default :
			return state;
	}
	return state;
}

function search(state = [], action) {
	switch (action.type) {
		case 'SEARCH_VIDEOS' :
			return state;
		default :
			return state;
	}
}

function show(state =[], action) {
	switch (action.type) {
		case 'SHOW_DETAILS' :
			return {
			}
		default :
			return state;
	}
	return state;
}

const mainReducer = combineReducers({videos, like, search, routing: routerReducer  })

export default mainReducer