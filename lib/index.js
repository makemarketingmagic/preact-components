'use strict';

var _preact = require('preact');

require('./style');

// import 'promise-polyfill';
// import 'isomorphic-fetch';
var root = void 0;
function init() {
    var App = require('./containers/demo').default;
    root = (0, _preact.render)((0, _preact.h)(App, null), document.body, root);
}

// in development, set up HMR:
if (module.hot) {
    require('preact/devtools'); // turn this on if you want to enable React DevTools!
    module.hot.accept('./components/recommendedLead', function () {
        return requestAnimationFrame(init);
    });
}

init();