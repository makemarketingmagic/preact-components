'use strict';

var _runtime = require('offline-plugin/runtime');

var _runtime2 = _interopRequireDefault(_runtime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_runtime2.default.install({
    // When an update is ready, tell ServiceWorker to take control immediately:
    onUpdateReady: function onUpdateReady() {
        console.log('update ready');
        _runtime2.default.applyUpdate();
    },


    // Reload to get the new version:
    onUpdated: function onUpdated() {
        console.log('updated');
        location.reload();
    }
});