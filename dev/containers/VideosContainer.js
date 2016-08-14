import React from 'react';
import axios from 'axios';
import Video from '../components/Video';
import { Link } from 'react-router';
import styles from '../data/styles';

var VideosContainer = React.createClass({

	getInitialState() {
	    return {
	        videos: [],
	        loading: true,
	        status: null,
	        play: false,
	        url: ''
	    };
	},

	contextTypes: {
		router: React.PropTypes.object.isRequired
	},

	componentWillMount() {
		this.props.getVideos()
	},

	componentWillReceiveProps(nextProps) {
    	const { videos } = nextProps
		this.setState({
			videos: videos.data,
			status: videos.status,
			loading: videos.loading
		})
	},

	showDetails(id) {
		this.props.show(id)
	},

	hideDetails(id) {
		this.props.hide(id)
	},

	setUrl() {

	},

	turnOffPlay() {
		this.setState({
			play: false,
			url: ''
		})
	},

	handlePlay(video) {
		this.setState({
			play: true,
			url: video.url
		})
	},

	handleSearch(e) {
		e.preventDefault();
		const query = this.refs.search.value
		if (!query.isEmpty()) {
			this.props.searchVideo(query.trim().replace(/\s+/g,'_'))
		} else {
			this.props.getVideos()
		}
	},

	render() {
		const videos = this.state.loading
		? <div>LOADING...</div>
		: this.state.videos.map( (video) => {
			return <Video {...this.props} key={video.id} handlePlay={this.handlePlay} showDetails={this.showDetails} hideDetails={this.hideDetails} video={video} />
		} )
		const play = this.state.play ?
			(<div>
				<div className="overlay" style={styles.overlay} onKeyPress={this.turnOffPlay} onClick={this.turnOffPlay}></div>
				 <div className="modal" style={styles.modal}>
					<iframe style={styles.frame} src={"https://www.youtube.com/embed/" + this.state.url.slice(-11)}></iframe>
				 </div>
			</div>)
		: null

		return (
			<div>
				<h1><Link to="/">Vistagram</Link></h1>
				{ play }
					<form ref="searchForm" onSubmit={this.handleSearch} style={styles.form} className="comment-form">
						<input onChange={this.handleSearch} type="search" style={styles.searchInput} ref="search" placeholder="type to filter" />
						<input type="submit" hidden />
					</form>
				<div className="photo-grid">{videos}</div>
			</div>
		)
	}

});

module.exports = VideosContainer;