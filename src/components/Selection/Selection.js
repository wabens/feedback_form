import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../App/App.css'

import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';


class Selection extends Component {

    // selection recieves the current page through props,
    // when the next button is hit it dispatches the action based on its current page
    // the next button also pushes it to the next page

    state={
        value: 3
    }

    handleChange = (event) =>{
        this.setState({
            value: event.target.value
        })
    }

    onNext = () => {

        this.props.dispatch({ type: `${this.props.current}`, payload: this.state.value});
        this.props.history.push(this.props.next);

    }

    render() {
        console.log(`state on render`, this.state.value);
        
        return (
            <section className='selection-section'>
                < section className = 'selection-section' >
                    <div className='radio-group'>
                        <label>1</label>
                        <Radio checked={this.state.value === '1'} onChange={this.handleChange} value='1'/>
                    </div>
                    <div className='radio-group'>
                        <label>2</label>
                        <Radio checked={this.state.value === '2'} onChange={this.handleChange} value='2'/>
                    </div>  
                    < div className = 'radio-group' >
                        <label>3</label>
                        <Radio checked={this.state.value === '3'} onChange={this.handleChange} value='3'/>
                    </div>
                    < div className = 'radio-group' >
                        <label>4</label>
                        <Radio checked={this.state.value === '4'} onChange={this.handleChange} value='4'/>
                    </div>
                    < div className = 'radio-group' >
                        <label>5</label>
                        <Radio checked={this.state.value === '5'} onChange={this.handleChange}  value='5'/>
                    </div>
            </section>
                <Button onClick = {this.onNext} variant="contained" color="primary">Next</Button>
            </section>

        );
    }
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
})

export default connect(mapReduxStateToProps)(Selection);
