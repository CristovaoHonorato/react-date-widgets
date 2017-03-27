import {
    footer, input, fontFamily, backgroundTransition, colorTransition
} from '../common/skin'

// body for dayPanel
const innerCell = {
    background: 'transparent',
    borderRadius: '2px',
    color: '#666',
    fontSize: 13,
    height: 22,
    width: 20,
    lineHeight: '20px',
    margin: '0 auto',
    transition: backgroundTransition,
    fontFamily,
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
    disabledCellFirstOfRow: {
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px',
    },
    disabledCellLastOfRow: {
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px',
    },
    lastMonthCell: {
        color: '#bbb',
    },
    nextMonthBtnDay: {
        color: '#bbb',
    }
}

const body = {
    cell: {
        inner: innerCell
    }
}

const bodyHeader = {
    columnHeader: {
        fontSize: 12,
        lineHeight: '18px',
        fontFamily,
        WebkitFontSmoothing: 'antialiased',
        fontWeight: 400,
        padding: '6px 0',
    }
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
    fontFamily: 'Arial, "Hiragino Sans GB", "Microsoft Yahei", "Microsoft Sans Serif", "WenQuanYi Micro Hei", sans-serif',
    fontSize: '12px',
    day: {
        body,
        bodyHeader,
        header,
        outer: {
            padding: '9px 10px 10px',
            height: '217px',
        }
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
