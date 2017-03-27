'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _skin = require('../common/skin');

// body for dayPanel
var innerCell = {
    background: 'transparent',
    borderRadius: '2px',
    color: '#666',
    fontSize: 13,
    height: 22,
    width: 20,
    lineHeight: '20px',
    margin: '0 auto',
    transition: _skin.backgroundTransition,
    fontFamily: _skin.fontFamily,
    WebkitFontSmoothing: 'antialiased',
    ':hover': {
        background: '#ebfaff',
        cursor: 'pointer',
        selectedDay: {
            background: '#3fc7fa'
        },
        disabled: {
            background: '#f3f3f3'
        }
    },
    shadowSelectedDay: {
        background: '#108ee9',
        color: '#fff'
    },
    selectedDay: {
        // background: '#3fc7fa',
    },
    disabled: {
        cursor: 'not-allowed',
        color: '#bcbcbc',
        background: '#f3f3f3',
        borderRadius: '0',
        width: 'auto'
    },
    today: {
        border: '1px solid #3fc7fa',
        color: '#108ee9',
        fontWeight: 'bold'
    },
    disabledCellFirstOfRow: {
        borderTopLeftRadius: '4px',
        borderBottomLeftRadius: '4px'
    },
    disabledCellLastOfRow: {
        borderTopRightRadius: '4px',
        borderBottomRightRadius: '4px'
    },
    lastMonthCell: {
        color: '#bbb'
    },
    nextMonthBtnDay: {
        color: '#bbb'
    }
};

var body = {
    cell: {
        inner: innerCell
    }
};

var bodyHeader = {
    columnHeader: {
        fontSize: 12,
        lineHeight: '18px',
        fontFamily: _skin.fontFamily,
        WebkitFontSmoothing: 'antialiased',
        fontWeight: 400,
        padding: '6px 0'
    }
};

var commonHeaderBtn = {
    color: '#999',
    fontFamily: 'Arial, "Hiragino Sans GB", "Microsoft Yahei", "Microsoft Sans Serif", sans-serif',
    WebkitFontSmoothing: 'antialiased',
    transition: _skin.colorTransition,
    fontSize: 16,
    ':hover': {
        color: '#23c0fa'
    }
};

var selectBtn = {
    fontSize: '12px',
    fontWeight: 'bold',
    fontFamily: _skin.fontFamily,
    WebkitFontSmoothing: 'antialiased',
    transition: _skin.colorTransition,
    color: '#666',
    cursor: 'pointer',
    ':hover': {
        color: '#23c0fa'
    }
};

var header = {
    borderBottomColor: '#e9e9e9',
    prevMonthBtn: commonHeaderBtn,
    nextMonthBtn: commonHeaderBtn,
    nextYearBtn: commonHeaderBtn,
    prevYearBtn: commonHeaderBtn,
    selectBtn: selectBtn
};

var picker = {
    fontFamily: 'Arial, "Hiragino Sans GB", "Microsoft Yahei", "Microsoft Sans Serif", "WenQuanYi Micro Hei", sans-serif',
    fontSize: '12px',
    day: {
        body: body,
        bodyHeader: bodyHeader,
        header: header,
        outer: {
            padding: '9px 10px 10px',
            height: '217px'
        }
    },
    month: {},
    year: {}
};

var date = {
    input: _skin.input,
    panel: {
        backgroundColor: '#fff',
        borderRadius: '3px',
        boxShadow: '0 1px 5px #e9e9e9',
        backgroundClip: 'padding-box',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#e9e9e9',
        picker: picker,
        footer: _skin.footer
    }
};

exports.default = date;
//# sourceMappingURL=skin.js.map