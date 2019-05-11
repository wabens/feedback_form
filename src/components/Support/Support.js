import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import Selection from '../Selection/Selection';



class Support extends Component {
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
            <h2>How well were you supported?</h2>
            <Selection current='SUPPORT' history={this.props.history} next='/comments'/>
        </div>
        );
  }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Support);

