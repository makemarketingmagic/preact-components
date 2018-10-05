'use strict';

exports.__esModule = true;
exports.default = undefined;

var _preact = require('preact');

var _Typography = require('../../components/Demo/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _index = require('./../../components/Papers/index');

var _index2 = _interopRequireDefault(_index);

var _Demo = require('./Demo.less');

var _Demo2 = _interopRequireDefault(_Demo);

var _Inputs = require('./../../components/Demo/Inputs');

var _Inputs2 = _interopRequireDefault(_Inputs);

var _index3 = require('./../../components/Navigation/index');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('./../../components/recommendedLead/index');

var _index6 = _interopRequireDefault(_index5);

var _Onboarding = require('./../../components/Onboarding');

var _Onboarding2 = _interopRequireDefault(_Onboarding);

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

    Demo.prototype.render = function render() {
        return (0, _preact.h)(
            'div',
            { id: 'demo' },
            (0, _preact.h)(_index4.default, null),
            (0, _preact.h)(
                'div',
                { 'class': _Demo2.default.demoGrid },
                (0, _preact.h)(_index2.default, { pages: [{ component: _Typography2.default, props: {} }] }),
                (0, _preact.h)(_index2.default, { pages: [{ component: _Inputs2.default, props: {} }] })
            ),
            (0, _preact.h)(_Onboarding2.default, null),
            (0, _preact.h)(_index6.default, null)
        );
    };

    return Demo;
}(_preact.Component);

exports.default = Demo;