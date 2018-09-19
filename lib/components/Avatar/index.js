'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _scMixins = require('../common/scMixins');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvatarContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Avatar__AvatarContainer'
})(['height:128px;width:128px;border:16px transparent solid;overflow:hidden;border-radius:50%;border-color:', ';', ''], function (props) {
    return _scMixins.colors[props.color];
}, _scMixins.media.mobile('margin-bottom: 8px;')),
    Image = _styledComponents2.default.img.withConfig({
    displayName: 'Avatar__Image'
})(['height:100%;width:100%;']);

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
            AvatarContainer,
            { color: color },
            (0, _preact.h)(Image, { src: imageUrl, alt: name })
        );
    };

    return Avatar;
}(_preact.Component);

exports.default = Avatar;