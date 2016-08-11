// increment
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	}
}

export function requestForVideos() {
	return {
		type: 'REQUEST_FOR_VIDEOS'
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