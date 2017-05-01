import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import {
    DateTimePickerPlayground,
    DatePickerPlayground,
    TimePickerPlayground,
    DateTimePickerWithTranslations,
    InputStyleExample,
    TimePanelStyleExample,
    DatePanelStyleExample,
    DateTimePanelStyleExample,
} from './documentation'

if(process.env.NODE_ENV === "development") {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

if(process.env.NODE_ENV !== "development") {

    window.renderGettingStartedComponents = (id, props) => {
        ReactDOM.render(
            <App {...props}/>,
            document.getElementById(id)
        );
    }

    window.renderDate = (id, props) => {
        ReactDOM.render(
            <DatePickerPlayground {...{props}} />,
            document.getElementById(id)
        );
    }

    window.renderTime = (id, props) => {
        ReactDOM.render(
            <TimePickerPlayground {...{props}} />,
            document.getElementById(id)
        );
    }

    window.renderDateTime = (id, props) => {
        ReactDOM.render(
            <DateTimePickerPlayground {...{props}} />,
            document.getElementById(id)
        );
    }

    window.renderDateTimeWithTranslations = (id, props) => {
        ReactDOM.render(
            <DateTimePickerWithTranslations {...{props}} />,
            document.getElementById(id)
        );
    }

    window.renderInputStyleExample = (id, props) => {
        ReactDOM.render(
            <InputStyleExample {...{props}} />,
            document.getElementById(id)
        );
    }

    window.renderTimePanelStyleExample = (id, props) => {
        ReactDOM.render(
            <TimePanelStyleExample {...{props}} />,
            document.getElementById(id)
        );
    }

    window.renderDatePanelStyleExample = (id, props) => {
        ReactDOM.render(
            <DatePanelStyleExample {...{props}} />,
            document.getElementById(id)
        );
    }

    window.renderDateTimePanelStyleExample = (id, props) => {
        ReactDOM.render(
            <DateTimePanelStyleExample {...{props}} />,
            document.getElementById(id)
        );
    }
}
