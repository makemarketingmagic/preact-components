'use strict';

exports.__esModule = true;
exports.default = LaterIcon;

var _preact = require('preact');

function LaterIcon(props) {
    var _props$width = props.width,
        width = _props$width === undefined ? 16 : _props$width,
        _props$height = props.height,
        height = _props$height === undefined ? 16 : _props$height,
        _props$color = props.color,
        color = _props$color === undefined ? '#FFF' : _props$color;

    return (0, _preact.h)(
        'svg',
        { width: width, height: height, viewBox: '0 0 16 16' },
        (0, _preact.h)(
            'g',
            { fill: color, 'fill-rule': 'evenodd' },
            (0, _preact.h)('path', { 'fill-rule': 'nonzero', d: 'M8 0a8 8 0 1 0 5.054 1.798 1 1 0 0 0-1.264 1.55A6 6 0 1 1 8 2a1 1 0 1 0 0-2z' }),
            (0, _preact.h)('path', { 'fill-rule': 'nonzero', d: 'M12 2h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2z' }),
            (0, _preact.h)('path', { 'fill-rule': 'nonzero', d: 'M10 2v3a1 1 0 0 0 2 0V2a1 1 0 0 0-2 0z' }),
            (0, _preact.h)('path', { d: 'M14 2h-2v2a2 2 0 1 1 2-2z' })
        )
    );
}