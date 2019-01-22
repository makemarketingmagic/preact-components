'use strict';

exports.__esModule = true;
var employeeRanges = [{ id: 1, description: 'oneToFour', string: '1 - 4', min: 1, max: 4 }, { id: 2, description: 'fiveToNine', string: '5 - 9', min: 5, max: 9 }, { id: 3, description: 'tenToNineteen', string: '10 - 19', min: 10, max: 19 }, { id: 4, description: 'twentyToFourtyNine', string: '20 - 49', min: 20, max: 49 }, { id: 5, description: 'fiftyToNinetyNine', string: '50 - 99', min: 50, max: 99 }, { id: 6, description: 'oneHundredToOneHundredAndNinetyNine', string: '100 - 199', min: 100, max: 199 }, { id: 7, description: 'twoHundredToFourHundredAndNinetyNine', string: '200 - 499', min: 200, max: 499 }, { id: 8, description: 'fiveHundredToNineHundredAndNinetyNine', string: '500 - 999', min: 500, max: 999 }, { id: 9, description: 'moreThanAThousand', string: '1000+', min: 1000, max: Infinity }];

var defaultLabels = [{ data: -1, label: 'Geen label', selected: true }, { data: 1, label: 'Klant', selected: true }, { data: 7, label: 'Voormalig klant', selected: true }, { data: 4, label: 'Prospect met offerte', selected: true }, { data: 2, label: 'Prospect mee in gesprek', selected: true }, { data: 3, label: 'Prospect in de doelgroep', selected: true }, { data: 5, label: 'Prospect verloren', selected: true }, { data: 0, label: 'Vrienden & collega\'s', selected: true }, { data: 6, label: 'Niet interessant', selected: true }, { data: 8, label: 'Concurrent', selected: true }];

var getLabelTitle = function getLabelTitle(num) {
    num = parseInt(num);
    labels.find(function (label) {
        return label.id === num;
    });
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