import { h, Component } from 'preact';

export const options = {};

function mdl() {
    return options.mdl || options.componentHandler || window.componentHandler;
}

const RIPPLE_CLASS = 'js-ripple-effect';

const MDL_PREFIX = s => MDL_NO_PREFIX[s] ? s : `mdl-${s}`;

const MDL_NO_PREFIX = { 'is-active': true };

function setClass(attributes, value, append) {
    let cl = getClass(attributes);
    if (attributes.className) delete attributes.className;
    if (append) value = cl ? (cl + ' ' + value) : value;
    attributes.class = value;
}

function getClass(attributes) {
    return attributes.class || attributes.className;
}

let propMaps = {
    disabled({ attributes }) {
        if (attributes.hasOwnProperty('disabled') && !attributes.disabled) {
            attributes.disabled = null;
        }
    },
    badge({ attributes }) {
        attributes['data-badge'] = attributes.badge;
        delete attributes.badge;
        setClass(attributes, 'mdl-badge', true);
    },
    active({ attributes }) {
        if (attributes.active) {
            setClass(attributes, 'is-active', true);
        }
    },
    shadow({ attributes }) {
        let d = parseFloat(attributes.shadow) | 0,
            c = getClass(attributes).replace(/\smdl-[^ ]+--shadow\b/g, '');
        setClass(attributes, c + (c ? ' ' : '') + `mdl-shadow--${d}dp`);
    }
};

export class MaterialComponent extends Component {
    component = 'none';
    js = false;
    ripple = false;
    mdlClasses = null;
    upgradedBase = null;

    mdlRender(props) {
        return <div {...props}>{props.children}</div>;
    }

    render(props, state) {
        let r = this.mdlRender(props, state);
        if (this.nodeName) r.nodeName = this.nodeName;
        if (!r.attributes) r.attributes = {};
        r.attributes.class = this.createMdlClasses(props).concat(r.attributes.class || [], r.attributes.className || []).join(' ');
        for (let i in propMaps) if (propMaps.hasOwnProperty(i)) {
            if (props.hasOwnProperty(i)) {
                propMaps[i](r);
            }
        }
        if (this.base && this.upgradedBase) {
            this.preserveMdlDom(this.base, r);
        }
        return r;
    }

    // Copy some transient properties back out of the DOM into VDOM prior to diffing so they don't get overwritten
    preserveMdlDom(base, r) {
        if (!base || !base.hasAttribute || !r) return;

        let persist = [
            'mdl-js-ripple-effect--ignore-events',
            'mdl-js-ripple-effect',
            'is-upgraded',
            'is-dirty'
        ],
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

        for (let i = 0; i < persist.length; i++) {
            if (base.classList.contains(persist[i])) {
                if (typeof a.class === 'string') {
                    if (cl.indexOf(persist[i]) === -1) {
                        cl += ' ' + persist[i];
                    }
                }
                else {
                    (cl || (cl = {}))[persist[i]] = true;
                }
            }
        }

        setClass(a, cl);
    }

    createMdlClasses(props) {
        let name = this.component,
            c = [],
            mapping = this.propClassMapping || {},
            js = props.js !== false && (this.js || this.ripple);
        if (name) c.push(name);
        if (this.mdlClasses) c.push(...this.mdlClasses);
        if (this.ripple && props.ripple !== false) {
            c.push(RIPPLE_CLASS);
        }
        if (js) c.push(`js-${name}`);
        for (let i in props) {
            if (props.hasOwnProperty(i) && props[i] === true) {
                c.push(MDL_NO_PREFIX[i] ? i : (mapping[i] || `${name}--${i}`));
            }
        }
        return c.map(MDL_PREFIX);
    }

    componentDidMount() {
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
    }

    componentWillUnmount() {
        if (this.upgradedBase) {
            mdl().downgradeElements(this.upgradedBase);
            this.upgradedBase = null;
        }
    }
}


let upgradeQueue = {
    items: [],
    add(base) {
        if (upgradeQueue.items.push(base) === 1) {
            requestAnimationFrame(upgradeQueue.process);
            // setTimeout(upgradeQueue.process, 1);
        }
    },
    process() {
        let p = upgradeQueue.items;
        for (let i = p.length; i--;) {
            let el = p[i],
                v = el.getAttribute('data-upgraded'),
                u = v && v.split(',');
            if (!u) continue;
            for (let j = u.length; j--;) {
                let c = u[j],
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
export class MUIButton extends MaterialComponent {
    component = 'button';
    nodeName = 'button';
    js = true;
    ripple = true;
}



export default {
    options,
    MUIButton
};