'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _Annotator = require('../../components/Annotator');

var _Annotator2 = _interopRequireDefault(_Annotator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo = function (_Component) {
    _inherits(Demo, _Component);

    function Demo() {
        _classCallCheck(this, Demo);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    Demo.prototype.onDrop = function onDrop(acceptedFiles, rejectedFiles) {
        console.log('Accepted files: ', acceptedFiles);
        console.log('Rejected files: ', rejectedFiles);
    };

    Demo.prototype.render = function render() {
        return (0, _preact.h)(
            'div',
            { id: 'demo', style: { width: '75%', margin: 'auto' } },
            (0, _preact.h)(_Annotator2.default, { readOnly: false })
        );
    };

    return Demo;
}(_preact.Component);

exports.default = Demo;