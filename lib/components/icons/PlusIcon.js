'use strict';

exports.__esModule = true;
exports.default = PlusIcon;

var _preact = require('preact');

function PlusIcon(props) {
    var _props$width = props.width,
        width = _props$width === undefined ? 16 : _props$width,
        _props$height = props.height,
        height = _props$height === undefined ? 16 : _props$height,
        _props$color = props.color,
        color = _props$color === undefined ? '#EE4055' : _props$color;

    return (0, _preact.h)(
        'svg',
        { width: width, height: height, viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        (0, _preact.h)('rect', { x: '2', y: '7', width: '12', height: '2', rx: '1', fill: color }),
        (0, _preact.h)('rect', { x: '7', y: '2', width: '2', height: '12', rx: '1', fill: color })
    );
}