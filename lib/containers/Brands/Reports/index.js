'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reports = function (_Component) {
    _inherits(Reports, _Component);

    function Reports() {
        _classCallCheck(this, Reports);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Reports.prototype.render = function render() {
        return (0, _preact.h)(
            'div',
            null,
            'Coming Soon!'
        );
    };

    return Reports;
}(_preact.Component);

exports.default = Reports;