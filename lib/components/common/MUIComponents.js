'use strict';

exports.__esModule = true;
exports.MUIButton = exports.MaterialComponent = exports.options = undefined;

var _preact = require('preact');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var options = exports.options = {};

function mdl() {
    return options.mdl || options.componentHandler || window.componentHandler;
}

var RIPPLE_CLASS = 'js-ripple-effect';

var MDL_PREFIX = function MDL_PREFIX(s) {
    return MDL_NO_PREFIX[s] ? s : 'mdl-' + s;
};

var MDL_NO_PREFIX = { 'is-active': true };

function setClass(attributes, value, append) {
    var cl = getClass(attributes);
    if (attributes.className) delete attributes.className;
    if (append) value = cl ? cl + ' ' + value : value;
    attributes.class = value;
}

function getClass(attributes) {
    return attributes.class || attributes.className;
}

var propMaps = {
    disabled: function disabled(_ref) {
        var attributes = _ref.attributes;

        if (attributes.hasOwnProperty('disabled') && !attributes.disabled) {
            attributes.disabled = null;
        }
    },
    badge: function badge(_ref2) {
        var attributes = _ref2.attributes;

        attributes['data-badge'] = attributes.badge;
        delete attributes.badge;
        setClass(attributes, 'mdl-badge', true);
    },
    active: function active(_ref3) {
        var attributes = _ref3.attributes;

        if (attributes.active) {
            setClass(attributes, 'is-active', true);
        }
    },
    shadow: function shadow(_ref4) {
        var attributes = _ref4.attributes;

        var d = parseFloat(attributes.shadow) | 0,
            c = getClass(attributes).replace(/\smdl-[^ ]+--shadow\b/g, '');
        setClass(attributes, c + (c ? ' ' : '') + ('mdl-shadow--' + d + 'dp'));
    }
};

var MaterialComponent = exports.MaterialComponent = function (_Component) {
    _inherits(MaterialComponent, _Component);

    function MaterialComponent() {
        var _temp, _this, _ret;

        _classCallCheck(this, MaterialComponent);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.component = 'none', _this.js = false, _this.ripple = false, _this.mdlClasses = null, _this.upgradedBase = null, _temp), _possibleConstructorReturn(_this, _ret);
    }

    MaterialComponent.prototype.mdlRender = function mdlRender(props) {
        return (0, _preact.h)(
            'div',
            props,
            props.children
        );
    };

    MaterialComponent.prototype.render = function render(props, state) {
        var r = this.mdlRender(props, state);
        if (this.nodeName) r.nodeName = this.nodeName;
        if (!r.attributes) r.attributes = {};
        r.attributes.class = this.createMdlClasses(props).concat(r.attributes.class || [], r.attributes.className || []).join(' ');
        for (var i in propMaps) {
            if (propMaps.hasOwnProperty(i)) {
                if (props.hasOwnProperty(i)) {
                    propMaps[i](r);
                }
            }
        }if (this.base && this.upgradedBase) {
            this.preserveMdlDom(this.base, r);
        }
        return r;
    };

    // Copy some transient properties back out of the DOM into VDOM prior to diffing so they don't get overwritten


    MaterialComponent.prototype.preserveMdlDom = function preserveMdlDom(base, r) {
        if (!base || !base.hasAttribute || !r) return;

        var persist = ['mdl-js-ripple-effect--ignore-events', 'mdl-js-ripple-effect', 'is-upgraded', 'is-dirty'],
            v = base.getAttribute('data-upgraded'),
            a = r.attributes,
            cl = getClass(a) || '';

        if (!a) a = {};

        if (v) {
            a['data-upgraded'] = v;
            upgradeQueue.add(base);
        }

        if (base.hasAttribute('ink-enabled')) {
            if (!r.attributes) r.attributes = {};
            r.attributes['ink-enabled'] = 'true';
        }

        for (var i = 0; i < persist.length; i++) {
            if (base.classList.contains(persist[i])) {
                if (typeof a.class === 'string') {
                    if (cl.indexOf(persist[i]) === -1) {
                        cl += ' ' + persist[i];
                    }
                } else {
                    (cl || (cl = {}))[persist[i]] = true;
                }
            }
        }

        setClass(a, cl);
    };

    MaterialComponent.prototype.createMdlClasses = function createMdlClasses(props) {
        var name = this.component,
            c = [],
            mapping = this.propClassMapping || {},
            js = props.js !== false && (this.js || this.ripple);
        if (name) c.push(name);
        if (this.mdlClasses) c.push.apply(c, this.mdlClasses);
        if (this.ripple && props.ripple !== false) {
            c.push(RIPPLE_CLASS);
        }
        if (js) c.push('js-' + name);
        for (var i in props) {
            if (props.hasOwnProperty(i) && props[i] === true) {
                c.push(MDL_NO_PREFIX[i] ? i : mapping[i] || name + '--' + i);
            }
        }
        return c.map(MDL_PREFIX);
    };

    MaterialComponent.prototype.componentDidMount = function componentDidMount() {
        if (this.base !== this.upgradedBase) {
            if (this.upgradedBase) {
                mdl().downgradeElements(this.upgradedBase);
            }
            this.upgradedBase = null;
            if (this.base && this.base.parentElement) {
                this.upgradedBase = this.base;
                mdl().upgradeElement(this.base);
            }
        }
    };

    MaterialComponent.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.upgradedBase) {
            mdl().downgradeElements(this.upgradedBase);
            this.upgradedBase = null;
        }
    };

    return MaterialComponent;
}(_preact.Component);

var upgradeQueue = {
    items: [],
    add: function add(base) {
        if (upgradeQueue.items.push(base) === 1) {
            requestAnimationFrame(upgradeQueue.process);
            // setTimeout(upgradeQueue.process, 1);
        }
    },
    process: function process() {
        var p = upgradeQueue.items;
        for (var i = p.length; i--;) {
            var el = p[i],
                v = el.getAttribute('data-upgraded'),
                u = v && v.split(',');
            if (!u) continue;
            for (var j = u.length; j--;) {
                var c = u[j],
                    a = c && el[c];
                if (a) {
                    if (a.updateClasses_) {
                        a.updateClasses_();
                    }
                    if (a.onFocus_ && a.input_ && a.input_.matches && a.input_.matches(':focus')) {
                        a.onFocus_();
                    }
                }
            }
        }
        p.length = 0;
    }
};

/** @class Button
 *  @desc A material button
 *
 *  @example
 *  <Button onClick={this.handleClick}>Hello World</Button>
 *
 *  @param primary = false
 *	@param accent = false
 *	@param colored = false
 *	@param raised = false
 *	@param icon = false
 *	@param fab = false
 *	@param mini-fab = false
 *	@param disabled = false
 */

var MUIButton = exports.MUIButton = function (_MaterialComponent) {
    _inherits(MUIButton, _MaterialComponent);

    function MUIButton() {
        var _temp2, _this2, _ret2;

        _classCallCheck(this, MUIButton);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _MaterialComponent.call.apply(_MaterialComponent, [this].concat(args))), _this2), _this2.component = 'button', _this2.nodeName = 'button', _this2.js = true, _this2.ripple = true, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    return MUIButton;
}(MaterialComponent);

exports.default = {
    options: options,
    MUIButton: MUIButton
};