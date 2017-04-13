import React from 'react';
import ReactDOM from 'react-dom';
import Timepicker from './core/time'
import DatePicker from './core/date'
import DateTimePicker from './core/date-time'
import App from './App';
import './index.css';

var baseUrl = window.location.href

if(process.env.NODE_ENV === "development") {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

if(process.env.IS_DOCUMENTATION) {

    window.renderGettingStartedComponents = (id, props) => {
        ReactDOM.render(
            <App {...props}/>,
            document.getElementById(id)
        );
    }

    window.renderDate = (id, props) => {
        ReactDOM.render(
            <DatePicker {...{props}} />,
            document.getElementById(id)
        );
    }

    window.renderTime = (id, props) => {
        ReactDOM.render(
            <Timepicker {...{props}} />,
            document.getElementById(id)
        );
    }

    window.renderDateTime = (id, props) => {
        ReactDOM.render(
            <DateTimePicker {...{props}} />,
            document.getElementById(id)
        );
    }

}
