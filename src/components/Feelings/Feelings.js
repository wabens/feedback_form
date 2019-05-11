import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import Selection from '../Selection/Selection';



class Feelings extends Component {
   
    hideReview = () => {
        this.props.dispatch({type: 'FLIP_REVIEW', payload: true});
    };

    componentDidMount(){
        this.hideReview();
    };

    render() {
        return (
        <div>
            <h2>How do you feel today?</h2>
            <Selection current='FEELINGS' history={this.props.history} next='/understanding'/>
        </div>
        );
  }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Feelings);

