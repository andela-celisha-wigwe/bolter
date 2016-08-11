import React from 'react';
import axios from 'axios';
import Video from '../components/Video';
import { Link } from 'react-router';


var style = {
	overlay: {
		position: "fixed",
		height: "100%",
		top: "0",
		left: "0",
		width: "100%",
		zIndex: "10",
		backgroundColor: "rgba(0,0,0,0.5)"
	},

	frame: {
		width: "100%",
		height: "100%",
		padding: "10px",
		border: "none"
	},

	modal: {
	    lineHeight: "200px",
	    position: "fixed",
	    top: "10%",
	    left: "10%",
	    right: "10%",
	    bottom: "10%",
	    marginTop: "-10px",
	    marginLeft: "-10px",
	    backgroundColor: "#434343",
	    borderRadius: "3px",
	    textAlign: "center",
	    zIndex: "11"
	}
}

var VideosContainer = React.createClass({

	getInitialState() {
	    return {
	        videos: [],
	        loading: true,
	        play: false,
	        url: ''
	    };
	},

	componentWillMount() {
		const { videos } = this.props
		this.setState({
			videos: videos,
			loading: false
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

	render() {

		const videos = this.state.loading
		? (<div>LOADING...</div>)
		: this.state.videos.map( (video) => {
			return <Video {...this.props} handlePlay={this.handlePlay} showDetails={this.showDetails} hideDetails={this.hideDetails} video={video} key={video.id} />
		});
		const play = this.state.play ?
			(<div>
				<div className="overlay" style={style.overlay} onKeyPress={this.turnOffPlay} onClick={this.turnOffPlay}></div>
				 <div className="modal" style={style.modal}>
					<iframe style={style.frame} src={"https://www.youtube.com/embed/" + this.state.url.slice(-11)}></iframe>
				 </div>
			</div>)
		: null

		return (
			<div>
				<h1><Link to="/">Vistagram</Link></h1>
				{ play }
				<div className="photo-grid">{videos}</div>
			</div>
		)
	}

});

module.exports = VideosContainer;