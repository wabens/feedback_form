import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import Selection from '../Selection/Selection';



class Understanding extends Component {
    hideReview = () => {
        this.props.dispatch({
            type: 'FLIP_REVIEW',
            payload: true
        });
    };

    componentDidMount() {
        this.hideReview();
    };
 
    render() {
        return (
        <div>
            <h2>How would you rate your understanding?</h2>
            <Selection current='UNDERSTANDING' history={this.props.history} next='/support'/>
        </div>
        );
  }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Understanding);

