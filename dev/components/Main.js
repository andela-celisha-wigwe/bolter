var React = require('react');
import { Link } from 'react-router'

var Main = React.createClass({

	render: function() {
		return (
			<div>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}

});

module.exports = Main;