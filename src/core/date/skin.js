import { deepAssign } from '../common/utils'
import {
    footer, field, fontFamily, backgroundTransition, colorTransition
} from '../common/skin'

export default {
    field,
    panel: panel()
}

function panel(){
    return {
        backgroundColor: '#fff',
        borderColor: '#e9e9e9',
        borderRadius: '3px',
        borderStyle: 'solid',
        borderWidth: 1,
        boxSizing: 'border-box',
        boxShadow: '0 1px 5px #e9e9e9',
        picker: picker(),
        footer: deepAssign(
            footer,
            {
                textAlign: 'center',
                now: {
                    position: 'auto',
                    left: null,
                    right: null,
                    top: null,
                    bottom: null
                }
            }
        )
    }
}

function picker(){
    return {
        day: {
            fontFamily,
            fontSize: 12,
            header: header(),
            body: body(),
        },
        month: {
            fontFamily,
            fontSize: 12,
            header: {},
            body: {},
        },
        year: {
            fontFamily,
            fontSize: 12,
            header: {},
            body: {},
        },
    }
}

function header(){
    const headerBtn = {
        color: '#999',
        fontFamily: 'Arial, "Hiragino Sans GB"',
        WebkitFontSmoothing: 'antialiased',
        transition: colorTransition,
        fontSize: 16,
        ':hover': {
            color: '#23c0fa',
        }
    }

    return {
        borderBottomColor: '#e9e9e9',
        prevMonthBtn: headerBtn,
        nextMonthBtn: headerBtn,
        nextYearBtn: headerBtn,
        prevYearBtn: headerBtn,
        selectBtn: {
            fontSize: '12px',
            fontWeight: 'bold',
            fontFamily,
            WebkitFontSmoothing: 'antialiased',
            transition: colorTransition,
            color: '#666',
            cursor: 'pointer',
            ':hover': {
                color: '#23c0fa'
            }
        }
    }
}

function body() {
    return {
        padding: '4px 8px',
        weekdayCell: {
            fontFamily,
            fontWeight: 400,
            lineHeight: '18px',
            padding: '6px 0',
            WebkitFontSmoothing: 'antialiased',
        },
        dayCell: dayCell()
    }
}

function dayCell(){
    return {
        background: 'transparent',
        borderRadius: '2px',
        color: '#666',
        fontFamily,
        fontSize: 12,
        height: 20,
        lineHeight: '20px',
        margin: '0 auto',
        transition: backgroundTransition,
        width: 20,
        WebkitFontSmoothing: 'antialiased',
        ':hover': {
            background: '#ebfaff',
            cursor: 'pointer',
            selectedDay: {
                background: '#3fc7fa',
            },
            disabled: {
                background: '#f3f3f3',
            }
        },
        shadowSelectedDay: {
            background: '#108ee9',
            color: '#fff',
        },
        selectedDay: {
            // background: '#3fc7fa',
        },
        disabled: {
            cursor: 'not-allowed',
            color: '#bcbcbc',
            background: '#f3f3f3',
            borderRadius: '0',
            width: 'auto',
        },
        today: {
            border: '1px solid #3fc7fa',
            color: '#108ee9',
            fontWeight: 'bold',
        },
        prevMonthCell: {
            color: '#bbb',
        },
        nextMonthCell: {
            color: '#bbb',
        }
    }
}
