'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fontFamily = exports.fontFamily = '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif';
var backgroundTransition = exports.backgroundTransition = 'background .3s ease';
var colorTransition = exports.colorTransition = 'color .3s ease';

var commonFooterBtn = {
    display: 'inline-block',
    textAlign: 'center',
    color: '#108ee9',
    fontFamily: fontFamily,
    WebkitFontSmoothing: 'antialiased',
    transition: colorTransition,
    fontSize: '14px',
    lineHeight: '18px',
    cursor: 'pointer',
    ':hover': {
        color: '#49a9ee'
    },
    disabled: {
        color: '#bbb',
        ':hover': {
            color: '#bbb'
        }
    }
};

var footer = exports.footer = {
    borderTop: '1px solid #e9e9e9',
    fontSize: 12,
    padding: '10px 0',
    position: 'relative',
    nowBtn: _extends({}, commonFooterBtn, {
        paddingLeft: 12
    }),
    okBtn: _extends({}, commonFooterBtn, {
        backgroundColor: '#108ee9',
        borderRadius: 4,
        lineHeight: '1.5',
        padding: '1px 7px',
        border: '1px solid transparent',
        color: '#fff',
        fontWeight: '500',
        textAlign: 'center',
        transition: backgroundTransition,
        ':hover': {
            backgroundColor: '#49a9ee'
        }
    })
};

var input = exports.input = {
    border: '1px solid #eee',
    boxSizing: 'border-box',
    width: '100%',
    cursor: 'auto',
    lineHeight: '1.5',
    margin: 0,
    outline: 0,
    padding: 5,
    clearBtn: {
        cursor: 'pointer',
        fontSize: 12,
        lineHeight: '200%',
        opacity: '0.5',
        position: 'absolute',
        textAlign: 'center',
        top: 0,
        right: 0,
        width: '10%',
        ':hover': {
            color: '#666'
        }
    }
};
//# sourceMappingURL=skin.js.map