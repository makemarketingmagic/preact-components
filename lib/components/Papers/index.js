'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _preact = require('preact');

var _Papers = require('./Papers.less');

var _Papers2 = _interopRequireDefault(_Papers);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Papers = function (_Component) {
    _inherits(Papers, _Component);

    function Papers(props) {
        _classCallCheck(this, Papers);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.nextPage = function () {
            var pages = _this.props.pages,
                nextPage = _this.state.currentPage + 1 > pages.length ? 0 : _this.state.currentPage + 1;

            _this.setState({ currentPage: nextPage });
        };

        _this.pageRefs = [];
        _this.state = {
            currentPage: 0,
            totalPages: 0
        };
        return _this;
    }

    Papers.prototype.componentDidMount = function componentDidMount() {
        var _props$pages = this.props.pages,
            pages = _props$pages === undefined ? [] : _props$pages,
            papers = pages.length >= 2 ? 2 : pages.length - 1;

        this.setState({ papers: papers, totalPages: this.props.pages.length });
    };

    Papers.prototype.render = function render() {
        var _this2 = this;

        var pages = this.props.pages;

        return (0, _preact.h)(
            'div',
            { style: {
                    overflow: 'hidden',
                    paddingBottom: 16
                } },
            (0, _preact.h)(
                'div',
                { style: {
                        position: 'relative'
                    } },
                pages.map(function (_ref, key) {
                    var Component = _ref.component,
                        props = _ref.props;

                    var classes = [];
                    if (key === _this2.state.currentPage) {
                        classes.push(_Papers2.default.papers);
                    } else if (key > _this2.state.currentPage) {
                        classes.push(_Papers2.default.papersBack);
                    } else {
                        classes.push(_Papers2.default.papersDismissed);
                    }
                    if (_this2.state.currentPage + 1 === key) {
                        classes.push(_Papers2.default['paperLevel-1']);
                    } else if (_this2.state.currentPage + 2 === key) {
                        classes.push(_Papers2.default['paperLevel-2']);
                    }
                    return (0, _preact.h)(
                        'div',
                        {
                            ref: function ref(_ref2) {
                                return _this2.pageRefs[key] = _ref2;
                            },
                            'class': _classnames2.default.apply(undefined, classes),
                            style: { zIndex: _this2.state.totalPages - key }
                        },
                        (0, _preact.h)(
                            'div',
                            { 'class': _Papers2.default.container },
                            (0, _preact.h)(Component, _extends({ nextPage: _this2.nextPage }, props))
                        )
                    );
                })
            )
        );
    };

    return Papers;
}(_preact.Component);

exports.default = Papers;