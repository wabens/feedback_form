import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';


import Admin from '../Admin/Admin'
import Start from '../Start/Start';
import Review from '../Review/Review';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments'

class App extends Component {

  getFeedback = () => {
    axios({
      method: 'GET',
      url: '/feedback/admin'
    })
    .then((response) => {
      console.log(`get tasks`, response);
      this.props.dispatch({type: 'GET_FEEDBACK', payload: response.data})
      
    })
    .catch((error) => {
      console.log(`error getting tasks `, error);
      alert('error getting tasks, try again later')
      
    })
  }

  handleSubmit = () => {
    axios({
      method: 'POST',
      url: '/feedback',
      data: {
        "feelings": this.props.reduxState.feelingsReducer,
        "understanding": this.props.reduxState.understandingReducer,
        "support": this.props.reduxState.supportReducer,
        "comments": this.props.reduxState.commentsReducer
      }
      })
      .then((response) => {
        console.log(`submitted`);
        alert('Thanks for the feedback!')
        this.props.dispatch({
          type: "CLEAR",
          payload: ''
        })

        
      })
      .catch((error) => {
        console.log(`error submitting feedback `, error);
        alert('error submitting feed back try again later!')
        
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Start}/>
          <Route exact path="/feelings" component={Feelings} />
          <Route exact path="/understanding" component={Understanding}/>
          <Route exact path ="/support" component={Support}/>
          <Route exact path ="/comments" component={Comments}/>
          <Route render={(routeProps) => 
              <Review {...routeProps} handleSubmit={this.handleSubmit} />}/>
          <Route exact path ="/admin" render={(routeProps) => 
              <Admin {...routeProps} getFeedback={this.getFeedback} />}/>
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
})

export default connect(mapReduxStateToProps)(App);


