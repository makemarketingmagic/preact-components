'use strict';

exports.__esModule = true;
var employeeRanges = [{ id: 1, description: 'oneToFour', string: '1 - 4', min: 1, max: 4 }, { id: 2, description: 'fiveToNine', string: '5 - 9', min: 5, max: 9 }, { id: 3, description: 'tenToNineteen', string: '10 - 19', min: 10, max: 19 }, { id: 4, description: 'twentyToFourtyNine', string: '20 - 49', min: 20, max: 49 }, { id: 5, description: 'fiftyToNinetyNine', string: '50 - 99', min: 50, max: 99 }, { id: 6, description: 'oneHundredToOneHundredAndNinetyNine', string: '100 - 199', min: 100, max: 199 }, { id: 7, description: 'twoHundredToFourHundredAndNinetyNine', string: '200 - 499', min: 200, max: 499 }, { id: 8, description: 'fiveHundredToNineHundredAndNinetyNine', string: '500 - 999', min: 500, max: 999 }, { id: 9, description: 'moreThanAThousand', string: '1000+', min: 1000, max: Infinity }];

var defaultLabels = [{ data: -1, label: 'Geen label', selected: true }, { data: 1, label: 'Klant', selected: true }, { data: 7, label: 'Voormalig klant', selected: true }, { data: 4, label: 'Prospect met offerte', selected: true }, { data: 2, label: 'Prospect mee in gesprek', selected: true }, { data: 3, label: 'Prospect in de doelgroep', selected: true }, { data: 5, label: 'Prospect verloren', selected: true }, { data: 0, label: 'Vrienden & collega\'s', selected: true }, { data: 6, label: 'Niet interessant', selected: true }, { data: 8, label: 'Concurrent', selected: true }];

var AHA_SENDING_STATES_NAMES = {
    ACTIVE: 1,
    INACTIVE: 2,
    SUBMITTED: 3,
    FEEDBACK: 4,
    APPROVED: 5,
    PLANNED: 6,
    SENT: 7,
    CANCELLED: 8,
    SMR_SENT: 9
};

var AHA_SENDING_STATES = [{ ID: AHA_SENDING_STATES_NAMES.ACTIVE, TITLE: 'Actief', TITLE_TRANSLATION_LABEL: 'ACTIVE' }, { ID: AHA_SENDING_STATES_NAMES.INACTIVE, TITLE: 'Inactief', TITLE_TRANSLATION_LABEL: 'INACTIVE' }, { ID: AHA_SENDING_STATES_NAMES.SUBMITTED, TITLE: 'Ingeleverd', TITLE_TRANSLATION_LABEL: 'SUBMITTED' }, { ID: AHA_SENDING_STATES_NAMES.FEEDBACK, TITLE: 'Feedback', TITLE_TRANSLATION_LABEL: 'FEEDBACK' }, { ID: AHA_SENDING_STATES_NAMES.APPROVED, TITLE: 'Goedgekeurd', TITLE_TRANSLATION_LABEL: 'APPROVED' }, { ID: AHA_SENDING_STATES_NAMES.PLANNED, TITLE: 'Ingepland', TITLE_TRANSLATION_LABEL: 'PLANNED' }, { ID: AHA_SENDING_STATES_NAMES.SENT, TITLE: 'Verzonden', TITLE_TRANSLATION_LABEL: 'SENT' }, { ID: AHA_SENDING_STATES_NAMES.CANCELLED, TITLE: 'Geannuleerd', TITLE_TRANSLATION_LABEL: 'CANCELLED' }, { ID: AHA_SENDING_STATES_NAMES.SMR_SENT, TITLE: 'SMR verstuurd', TITLE_TRANSLATION_LABEL: 'SMR_SENT' }];

var returnAhaStateName = function returnAhaStateName(state, translations) {
    var row = findRowWithAttr(AHA_SENDING_STATES, 'ID', parseInt(state));
    return translations.getLL(row.TITLE_TRANSLATION_LABEL, row.TITLE);
};

var getLabelTitle = function getLabelTitle(num) {
    num = parseInt(num);
    labels.find(function (label) {
        return label.id === num;
    });
};

var findRowWithAttr = function findRowWithAttr(sourceArray, attr, value) {
    var index = findWithAttr(sourceArray, attr, value);
    return index == -1 ? -1 : sourceArray[index];
};

var findWithAttr = function findWithAttr(sourceArray, attr, value) {
    for (var i = 0; i < sourceArray.length; i += 1) {
        if (sourceArray[i][attr] === value) {
            return i;
        }
    }

    return -1;
};

var getEmployeeRange = function getEmployeeRange(num) {
    num = parseInt(num);
    for (var index in employeeRanges) {
        var range = employeeRanges[index];
        if (num >= range.min && num <= range.max) return range.string;
    }
    return 'Unknown';
};

exports.defaultLabels = defaultLabels;
exports.getEmployeeRange = getEmployeeRange;
exports.getLabelTitle = getLabelTitle;
exports.returnAhaStateName = returnAhaStateName;
exports.AHA_SENDING_STATES = AHA_SENDING_STATES;