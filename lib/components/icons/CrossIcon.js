'use strict';

exports.__esModule = true;
exports.default = CrossIcon;

var _preact = require('preact');

function CrossIcon(props) {
    var _props$width = props.width,
        width = _props$width === undefined ? 8 : _props$width,
        _props$height = props.height,
        height = _props$height === undefined ? 8 : _props$height,
        _props$color = props.color,
        color = _props$color === undefined ? '#000' : _props$color;

    return (0, _preact.h)(
        'svg',
        { width: width, height: height, viewBox: '0 0 8 8' },
        (0, _preact.h)('path', { stroke: color, d: 'M1 1L7 7', 'stroke-linecap': 'round' }),
        (0, _preact.h)('path', { stroke: color, d: 'M1 7L7 1', 'stroke-linecap': 'round' })
    );
}