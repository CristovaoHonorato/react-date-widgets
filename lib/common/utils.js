"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.omit = omit;
exports.range = range;
exports.extendStyle = extendStyle;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function omit(obj) {
    for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        keys[_key - 1] = arguments[_key];
    }

    if (!keys.every(function (key) {
        return typeof key === 'string';
    })) {
        throw new Error("Key should be of type string");
    }

    return Object.keys(obj).reduce(function (result, key) {
        return keys.includes(key) ? result : _extends({}, result, _defineProperty({}, key, obj[key]));
    }, {});
}

function range(length) {
    return Array.from({ length: length }, function (v, i) {
        return i;
    });
}

// Use this only for styles
function extendStyle() {
    var base = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var extension = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var keys = Object.keys(base);
    return Object.keys(extension).reduce(function (result, property) {
        return _extends({}, result, _defineProperty({}, property, keys.includes(property) && isObject(base[property]) ? extendStyle(base[property], extension[property]) : extension[property]));
    }, base);
}

function isObject(obj) {
    return obj === Object(obj);
}
//# sourceMappingURL=utils.js.map