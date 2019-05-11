import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




class Comments extends Component {

    state={
        value: ''
    }
    hideReview = () => {
        this.props.dispatch({
            type: 'FLIP_REVIEW',
            payload: true
        });
    };

    componentDidMount() {
        this.hideReview();
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    onNext = () => {
        this.props.dispatch({ type: 'ENABLE_SUBMIT', payload: false})
        this.props.dispatch({ type: `COMMENTS`, payload: this.state.value})
    }

    render() {
        return (
        <div>
            <h2>What do you have to say?</h2>
            <div className='comment-width'>
                <TextField multiline fullWidth onChange={this.handleChange} label = 'Comments...' > </TextField>
                <p>&nbsp; &nbsp; &nbsp; &nbsp;</p>
                <Button onClick = {this.onNext} variant="contained" color="primary">Add</Button>
            </div>
            
        </div>
        );
  }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Comments);

