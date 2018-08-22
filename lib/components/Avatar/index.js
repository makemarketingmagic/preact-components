'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _Avatar = require('./Avatar.less');

var _Avatar2 = _interopRequireDefault(_Avatar);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Avatar = function (_Component) {
    _inherits(Avatar, _Component);

    function Avatar() {
        _classCallCheck(this, Avatar);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Avatar.prototype.render = function render() {
        var _props = this.props,
            imageUrl = _props.imageUrl,
            name = _props.name,
            color = _props.color;

        return (0, _preact.h)(
            'div',
            { className: (0, _classnames2.default)(_Avatar2.default.avatar, _Avatar2.default['avatar--' + color]) },
            (0, _preact.h)('img', { 'class': _Avatar2.default.avatarImage, src: imageUrl, alt: name })
        );
    };

    return Avatar;
}(_preact.Component);

exports.default = Avatar;