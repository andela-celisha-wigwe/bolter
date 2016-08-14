import React from 'react';
import axios from 'axios';
import Video from '../components/Video';
import { Link } from 'react-router';
import styles from '../data/styles';

var SearchContainer = React.createClass({

	getInitialState() {
	    return {
	        videos: [],
	        loading: true,
	        play: false,
	        url: ''
	    };
	},

	componentWillMount() {
		var {query} = this.props.params
		this.props.searchVideo(query)
	},

	componentWillReceiveProps(nextProps) {
    	const { videos } = nextProps
		this.setState({
			videos: videos,
			loading: false
		})
	},

	render: function() {
		console.log(this.props)
		return (
			<div />
		);
	}

});

module.exports = SearchContainer;