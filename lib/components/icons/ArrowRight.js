'use strict';

exports.__esModule = true;
exports.default = ArrowRightIcon;

var _preact = require('preact');

function ArrowRightIcon(props) {
    var _props$width = props.width,
        width = _props$width === undefined ? 16 : _props$width,
        _props$height = props.height,
        height = _props$height === undefined ? 16 : _props$height,
        _props$color = props.color,
        color = _props$color === undefined ? '#fff' : _props$color;


    return (0, _preact.h)(
        'svg',
        { width: width, height: height, viewBox: '0 0 16 16', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' },
        (0, _preact.h)('path', { d: 'M1 8H15', stroke: color, 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }),
        (0, _preact.h)('path', { d: 'M11 12L15 8L11 4', stroke: color, 'stroke-width': '2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
    );
}