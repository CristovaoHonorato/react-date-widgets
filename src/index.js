import React from 'react';
import ReactDOM from 'react-dom';
import Timepicker from './core/time'
import DatePicker from './core/date'
import DateTimePicker from './core/date-time'
// import App from './App';
import './index.css';

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

// what!? no! nooo
window.renderDate = (id, props) => {
    ReactDOM.render(
        <DatePicker {...{props}} />,
        document.getElementById(id)
    );
}

// aghhh
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
