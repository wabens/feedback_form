import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

class Start extends Component {

    hideReview = () => {
        this.props.dispatch({type: 'FLIP_REVIEW', payload: false});
    };

    componentDidMount(){
        this.hideReview();
    };

    handleClick= () => {
        this.props.history.push('/feelings');
    };

    render() {
        return (
            <section>
                <h1>Give us your feedback!</h1>
                <p>Rate how you felt today, your understanding of the material and how well you were supported.</p>
                <p>Ratings are on a scale of 1-5, where 1 is bad and 5 is good.</p>
                <Button onClick={this.handleClick}variant='contained' color='primary'>Start</Button>
            </section>
        );
  }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Start);

