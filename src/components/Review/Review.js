import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';



class Review extends Component {

    handleSubmit = () => {
        this.props.history.push('/');
        this.props.handleSubmit();
    }

    render() {
    if (this.props.reduxState.flipReviewReducer===true){
         if (Boolean(this.props.reduxState.commentsReducer) === Boolean(1)){
            return (
                <div>
                    <h2>Review Your Feelings</h2>
                    <h3>Feelings: {this.props.reduxState.feelingsReducer} </h3>
                    <h3>Understanding: {this.props.reduxState.understandingReducer}</h3>
                    <h3>Support: {this.props.reduxState.supportReducer}</h3>
                    <h3>Comments: {this.props.reduxState.commentsReducer}</h3>
                    <Button onClick={this.handleSubmit} variant="contained" color='primary'>Submit</Button>
                </div>
            )} else{
            return(
                 <div>
                    <h2>Review Your Feelings</h2>
                    <h3>Feelings: {this.props.reduxState.feelingsReducer} </h3>
                    <h3>Understanding: {this.props.reduxState.understandingReducer}</h3>
                    <h3>Support: {this.props.reduxState.supportReducer}</h3>
                    <h3>Comments: {this.props.reduxState.commentsReducer}</h3>
                    <Button variant="contained" color='primary' disabled>Incomplete</Button>
                </div>
            )};
    } else if (this.props.reduxState.flipReviewReducer === false) {
            return null
        }   
    }
  }

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Review);

