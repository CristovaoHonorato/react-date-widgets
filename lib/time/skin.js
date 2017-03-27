'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _skin = require('../common/skin');

var headerBtn = {
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#666'
};

var header = {
    borderBottomColor: '#e9e9e9',
    headerBtn: headerBtn
};

var column = {
    fontSize: '12px',
    borderColor: '#e9e9e9',
    height: '100%',
    entry: {
        transition: _skin.backgroundTransition,
        height: '24px',
        lineHeight: '24px',
        ':hover': {
            background: '#ecf6fd'
        },
        ':selected': {
            // background: '#edfaff',
            background: '#f7f7f7',
            color: 'black'
        },
        ':disabled': {}
    }
};

var picker = {
    column: column,
    header: header
};

var skin = {
    input: _skin.input,
    panel: {
        backgroundClip: 'padding-box',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 3,
        boxShadow: '0 1px 5px #ccc',
        outline: 'none',
        width: '100%',
        picker: picker,
        footer: _extends({}, _skin.footer, {
            okBtn: _extends({}, _skin.footer.okBtn, {
                marginLeft: 12
            })
        })
    }
};

exports.default = skin;
//# sourceMappingURL=skin.js.map