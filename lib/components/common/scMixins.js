'use strict';

exports.__esModule = true;

var _styledComponents = require('styled-components');

var sizes = {
    mobile: 600

    // Iterate through the sizes and create a media template
};exports.default = {
    media: Object.keys(sizes).reduce(function (acc, label) {
        acc[label] = function () {
            return (0, _styledComponents.css)(['@media (max-width:', 'em){', '}'], sizes[label] / 16, _styledComponents.css.apply(undefined, arguments));
        };

        return acc;
    }, {})
};