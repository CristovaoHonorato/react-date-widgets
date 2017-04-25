import {
    footer, input, fontFamily, backgroundTransition, colorTransition
} from '../common/skin'

// body for dayPanel
const cell = {
    background: 'transparent',
    borderRadius: '2px',
    color: '#666',
    fontFamily,
    fontSize: 13,
    height: 22,
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

const bodyHeader = {
    fontSize: 12,
    lineHeight: '18px',
    fontFamily,
    WebkitFontSmoothing: 'antialiased',
    fontWeight: 400,
    padding: '6px 0',
}

const body = {
    bodyHeader,
    cell
}

const commonHeaderBtn = {
    color: '#999',
    fontFamily: 'Arial, "Hiragino Sans GB", "Microsoft Yahei", "Microsoft Sans Serif", sans-serif',
    WebkitFontSmoothing: 'antialiased',
    transition: colorTransition,
    fontSize: 16,
    ':hover': {
      color: '#23c0fa',
    }
}

const selectBtn = {
    fontSize: '12px',
    fontWeight: 'bold',
    fontFamily,
    WebkitFontSmoothing: 'antialiased',
    transition: colorTransition,
    color: '#666',
    cursor: 'pointer',
    ':hover': {
      color: '#23c0fa',
    }
}

const header = {
    borderBottomColor: '#e9e9e9',
    prevMonthBtn: commonHeaderBtn,
    nextMonthBtn: commonHeaderBtn,
    nextYearBtn: commonHeaderBtn,
    prevYearBtn: commonHeaderBtn,
    selectBtn
}

const picker = {
    day: {
        fontFamily: 'Arial, "Hiragino Sans GB", "Microsoft Yahei", "Microsoft Sans Serif", "WenQuanYi Micro Hei", sans-serif',
        fontSize: '12px',
        body,
        header,
    },
    month: {},
    year: {},
}

const date = {
    input,
    panel: {
        backgroundColor: '#fff',
        borderRadius: '3px',
        boxShadow: '0 1px 5px #e9e9e9',
        backgroundClip: 'padding-box',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e9e9e9',
        picker,
        footer
    }
}

export default date
