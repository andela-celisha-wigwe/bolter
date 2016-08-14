var React = require('react');

var style = {

	main: {
		position: "relative",
	},

	child: {
		position: "absolute",
		bottom: "0",
		top: "0",
		left: "0",
		right: "0",
		backgroundColor: "#ffffff",
		padding: "10px",
		width: "100%"
	},

	arrow: {
		textAlign: "center",
		cursor: "pointer",
		backgroundColor: "#dddddd"
	}
}

var Video = React.createClass({

	thumbnail(id) {
		return 'http://img.youtube.com/vi/' + id + '/2.jpg'
	},

	propTypes: {
	    video: React.PropTypes.object.isRequired,
	    showDetails: React.PropTypes.func.isRequired,
	    hideDetails: React.PropTypes.func.isRequired,
	    handlePlay: React.PropTypes.func.isRequired
	},

	getInitialState() {
	    return {
	        video: [],
	        isShowing: false  
	    };
	},

	hide() {
		this.setState({
			isShowing: false
		})
	},

	toggleDisplay() {
		this.setState({
			isShowing: !this.state.isShowing
		})
	},

	show() {
		this.setState({
			isShowing: true
		})
	},

	componentWillMount() {
		var { video } = this.props
	    this.setState({
	    	video: video
	    })  
	},

	render() {
		const { video } = this.state;
		var details = this.state.isShowing ? (<p>{video.description}</p>) : null
		return (
			<figure className="grid-figure">
				<div className="grid-photo-wrap" onClick={(this.props.handlePlay).bind(null, video)} style={style.main}>
					<img src={this.thumbnail(video.url.slice(-11))} alt={video.title} className="grid-photo" />
				</div>

				<figcaption>
					<p>{video.title}</p>
					<p onClick={this.toggleDisplay} style={style.arrow}><i className="fa fa-arrow-down"></i></p>
					{ details }
				</figcaption>
			</figure>
		);
	}

});

module.exports = Video;