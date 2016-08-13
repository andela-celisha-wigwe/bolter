var React = require('react');
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var Main = React.createClass({

	render() {
		return (
			<div>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}

});

export default Main;