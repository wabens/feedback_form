import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';

const flipReviewReducer = (state=false, action) => {
     if (action.type === "FLIP_REVIEW") {
         return action.payload
     } 
    return state
}

const disableSubmit = (state=false, action) => {
    if (action.type === "ENABLE_BUTTON") {
        return action.payload
    }
    return state
}

const feelingsReducer = ( state='', action) => {
    if(action.type==="FEELINGS"){
        return action.payload
    } else if (action.type === "CLEAR"){
        return action.payload
    }
    return state;
}

const understandingReducer = (state = '', action) => {
    if (action.type === "UNDERSTANDING") {
        return action.payload
    } else if (action.type === "CLEAR") {
        return action.payload
    }
    return state;
}
const supportReducer = (state = '', action) => {
    if (action.type === "SUPPORT") {
        return action.payload
    } else if (action.type === "CLEAR") {
        return action.payload
    }
    return state;
}
const commentsReducer = (state = '', action) => {
    if (action.type === "COMMENTS") {
        return action.payload
    } else if (action.type === "CLEAR") {
        return action.payload
    }
    return state;
}

const adminReducer = (state = [], action) => {
    if (action.type==="GET_FEEDBACK") {
        return action.payload
    } else{
        return state
    }
}


let storeInstance = createStore(
        combineReducers({
            flipReviewReducer,
            feelingsReducer,
            understandingReducer,
            supportReducer,
            commentsReducer,
            disableSubmit,
            adminReducer,

        }),
        applyMiddleware(logger)
)

ReactDOM.render(<Provider store = {storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
