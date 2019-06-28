'use strict';

exports.__esModule = true;
exports.default = exports.FEEDBACK_LEVELS = undefined;

var _preact = require('preact');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _index = require('./../components/Navigation/index');

var _index2 = _interopRequireDefault(_index);

var _scMixins = require('../components/common/scMixins');

var _polished = require('polished');

var _Cookie = require('../utils/Cookie');

var _Cookie2 = _interopRequireDefault(_Cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StyledContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Layout__StyledContainer'
})(['max-width:1200px;width:90%;margin:106px auto 64px auto;background-color:white;font-family:\'Montserrat\',sans-serif;']),
    StyledBigContainer = _styledComponents2.default.div.withConfig({
    displayName: 'Layout__StyledBigContainer'
})(['margin:64px auto;background-color:white;margin-top:42px;width:100%;max-width:100%;font-family:\'Montserrat\',sans-serif;']),
    FeedbackArea = _styledComponents2.default.div.withConfig({
    displayName: 'Layout__FeedbackArea'
})(['display:flex;flex-direction:column;& > div{margin:16px 0;}']),
    Feedback = _styledComponents2.default.div.withConfig({
    displayName: 'Layout__Feedback'
})(['background-color:', ';'], function (props) {
    switch (props.level) {
        case FEEDBACK_LEVELS.ERROR:
            return (0, _polished.desaturate)(0.25, _scMixins.colors.red);
        case FEEDBACK_LEVELS.WARNING:
            return (0, _polished.desaturate)(0.25, _scMixins.colors.orange);
        case FEEDBACK_LEVELS.SUCCESS:
            return (0, _polished.desaturate)(0.25, _scMixins.colors.green);
    }
}),
    FeedbackTitle = _styledComponents2.default.div.withConfig({
    displayName: 'Layout__FeedbackTitle'
})(['padding:4px;font-size:18px;font-weight:bold;border-bottom:2px solid ', ';color:', ';'], function (props) {
    switch (props.level) {
        case FEEDBACK_LEVELS.ERROR:
            return (0, _polished.darken)(0.5, _scMixins.colors.red);
        case FEEDBACK_LEVELS.WARNING:
            return (0, _polished.darken)(0.5, _scMixins.colors.orange);
        case FEEDBACK_LEVELS.SUCCESS:
            return (0, _polished.darken)(0.5, _scMixins.colors.green);
    }
}, function (props) {
    switch (props.level) {
        case FEEDBACK_LEVELS.ERROR:
            return (0, _polished.darken)(0.5, _scMixins.colors.red);
        case FEEDBACK_LEVELS.WARNING:
            return (0, _polished.darken)(0.5, _scMixins.colors.orange);
        case FEEDBACK_LEVELS.SUCCESS:
            return (0, _polished.darken)(0.5, _scMixins.colors.green);
    }
}),
    FeedbackMessage = _styledComponents2.default.div.withConfig({
    displayName: 'Layout__FeedbackMessage'
})(['padding:4px;margin-top:8px;color:', ';'], function (props) {
    switch (props.level) {
        case FEEDBACK_LEVELS.ERROR:
            return (0, _polished.darken)(0.5, _scMixins.colors.red);
        case FEEDBACK_LEVELS.WARNING:
            return (0, _polished.darken)(0.5, _scMixins.colors.orange);
        case FEEDBACK_LEVELS.SUCCESS:
            return (0, _polished.darken)(0.5, _scMixins.colors.green);
    }
}),
    data = {
    tabs: [{
        "ID": 1,
        "TITLE": "Info",
        "URL": "/brands/brand-details/1126061000019254072/info",
        "TITLE_TRANSLATION_LABEL": "INFO",
        "DYNAMIC_URL": "/brands/brand-details/:accountid/info",
        "IS_ALLOWED": [21, 31, 41, 51, 61]
    }, {
        "ID": 2,
        "TITLE": "Notities",
        "TITLE_TRANSLATION_LABEL": "NOTES",
        "URL": "#/brands/brand-details/1126061000019254072/notities",
        "DYNAMIC_URL": "/brands/brand-details/:accountid/notities",
        "IS_ALLOWED": [21, 31, 41, 61]
    }, {
        "ID": 3,
        "TITLE": "Verkoopkansen",
        "TITLE_TRANSLATION_LABEL": "OPPORTUNITIES",
        "URL": "#/brands/brand-details/1126061000019254072/verkoopkansen/lijst",
        "DYNAMIC_URL": "/brands/brand-details/:accountid/verkoopkansen/lijst",
        "IS_ALLOWED": [21, 31, 41, 61, 81]
    }, {
        "ID": 4,
        "TITLE": "Onboarding",
        "TITLE_TRANSLATION_LABEL": "ONBOARDING",
        "URL": "#/brands/brand-details/1126061000019254072/producten/on-boarding/overzicht",
        "DYNAMIC_URL": "/brands/brand-details/:accountid/producten/on-boarding/overzicht",
        "IS_ALLOWED": [21, 31, 41, 61],
        "$$hashKey": "object:87"
    }, {
        "ID": 5,
        "TITLE": "AHA planning",
        "TITLE_TRANSLATION_LABEL": "AHA_PLANNING",
        "URL": "#/brands/brand-details/1126061000019254072/aha-feedback/planning",
        "DYNAMIC_URL": "/brands/brand-details/:accountid/aha-feedback/planning",
        "IS_ALLOWED": [21, 61]
    }, {
        "ID": 6,
        "TITLE": "Rapportages",
        "TITLE_TRANSLATION_LABEL": "REPORTS",
        "URL": "#/brands/brand-details/1126061000019254072/rapportages/maandelijks",
        "DYNAMIC_URL": "/brands/brand-details/:accountid/rapportages/maandelijks"
    }, {
        "ID": 7,
        "TITLE": "FormGen",
        "TITLE_TRANSLATION_LABEL": "FORMGEN",
        "URL": "#/brands/brand-details/1126061000019254072/formgen",
        "DYNAMIC_URL": "/brands/brand-details/:accountid/formgen",
        "IS_ALLOWED": [21, 31, 41]
    }, {
        "ID": 8,
        "TITLE": "Bestanden",
        "TITLE_TRANSLATION_LABEL": "FILES",
        "URL": "#/brands/brand-details/1126061000019254072/file-manager",
        "DYNAMIC_URL": "/brands/brand-details/:accountid/file-manager",
        "IS_ALLOWED": [21, 31, 41, 61],
        "$$hashKey": "object:91"
    }, {
        "ID": 9,
        "TITLE": "MAQL",
        "URL": "#/brands/brand-details/1126061000019254072/maql",
        "DYNAMIC_URL": "/brands/brand-details/:accountid/maql",
        "IS_ALLOWED": [21, 31, 41],
        "IS_MICROSOFT": true
    }, {
        "ID": 10,
        "TITLE": "SAQL",
        "URL": "#/brands/brand-details/1126061000019254072/saql",
        "DYNAMIC_URL": "/brands/brand-details/:accountid/saql",
        "IS_ALLOWED": [21, 31, 41, 61],
        "IS_MICROSOFT": true
    }]
};

function RegularContainer(props) {
    var children = props.children,
        matches = props.matches,
        path = props.path,
        url = props.url;

    return (0, _preact.h)(
        StyledContainer,
        null,
        children.map(function (child) {
            return (0, _preact.cloneElement)(child, {
                matches: matches,
                path: path,
                url: url
            });
        })
    );
}

function BigContainer(props) {
    var children = props.children,
        matches = props.matches,
        path = props.path,
        url = props.url;

    return (0, _preact.h)(
        StyledBigContainer,
        null,
        children.map(function (child) {
            return (0, _preact.cloneElement)(child, {
                matches: matches,
                path: path,
                url: url
            });
        })
    );
}

var FEEDBACK_LEVELS = exports.FEEDBACK_LEVELS = {
    NONE: 0,
    WARNING: 1,
    SUCCESS: 2,
    ERROR: 3
};

var Layout = function (_Component) {
    _inherits(Layout, _Component);

    function Layout(props) {
        _classCallCheck(this, Layout);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.clearCurrentFeedback = function () {
            var feedback = _this.state.feedback,
                currentFeedback = feedback.pop();

            _this.setState({ feedback: feedback });
        };

        _this.addFeedback = function (title, message, feedbackLevel) {
            var feedback = _this.state.feedback;

            feedback.push({ feedbackTitle: title, feedbackMessage: message, feedbackLevel: feedbackLevel });
            feedback = feedback.sort(function (a, b) {
                return a.feedbackLevel - b.feedbackLevel;
            });
            _this.setState({ feedback: feedback });
        };

        _this.state = {
            feedback: []
        };
        _Cookie2.default.set('redesign', true, { days: 31 });
        return _this;
    }

    Layout.prototype.render = function render() {
        var _props = this.props,
            _props$isMicrosoft = _props.isMicrosoft,
            isMicrosoft = _props$isMicrosoft === undefined ? false : _props$isMicrosoft,
            Component = _props.Component,
            componentProps = _props.componentProps,
            user = _props.user,
            $location = _props.$location,
            accountId = _props.accountId,
            _props$tabs = _props.tabs,
            tabs = _props$tabs === undefined ? data.tabs : _props$tabs,
            _props$big = _props.big,
            big = _props$big === undefined ? false : _props$big;

        var Container = big ? BigContainer : RegularContainer;
        var feedback = this.state.feedback;

        return (0, _preact.h)(
            'div',
            null,
            (0, _preact.h)(_index2.default, { isMicrosoft: isMicrosoft, $location: $location, accountId: accountId, user: user, tabs: tabs, translations: componentProps.translations }),
            (0, _preact.h)(
                Container,
                null,
                (0, _preact.h)(
                    FeedbackArea,
                    null,
                    feedback.map(function (feedback) {
                        return (0, _preact.h)(
                            Feedback,
                            { level: feedback.feedbackLevel },
                            (0, _preact.h)(
                                FeedbackTitle,
                                { level: feedback.feedbackLevel },
                                feedback.feedbackTitle
                            ),
                            (0, _preact.h)(
                                FeedbackMessage,
                                { level: feedback.feedbackLevel },
                                feedback.feedbackMessage
                            )
                        );
                    })
                ),
                (0, _preact.h)(Component, componentProps)
            )
        );
    };

    return Layout;
}(_preact.Component);

exports.default = Layout;