'use strict';

exports.__esModule = true;
exports.replaceStrip = exports.ParsedHtmlClass = exports.stripWhitespaceSurroundingHtmlTags = exports.stripWhitespaceBeforeHtmlTags = exports.stripWhitespaceAfterHtmlTags = exports.convertHtmlCodesToSymbols = exports.getAllHtml = undefined;

var _class, _temp, _initialiseProps; /* File: ./app/components/html/html-service.ts */


var _reactHtmlParser = require('react-html-parser');

var _reactHtmlParser2 = _interopRequireDefault(_reactHtmlParser);

var _Annotator = require('../Annotator');

var _preact = require('preact');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* Private constants */
/** @constant {RegExp} */
var NEWLINES_REGEX = /\r?\n|\r/g;

/** @constant {RegExp} */
var ALL_WHITESPACE = /\s/g;

/** @constant {RegExp} */
var ALL_WHITESPACE_START = /^\s+/g;

/** @constant {RegExp} */
var ALL_WHITESPACE_END = /\s+$/g;
var REGEX_TEST = '<!--.*?-->|<.+?>'; /* Note: Comments get a special treatment! */
var BLOCK_TEXT_OPEN = '<(p|h[1-6]).*?>'; /* Get all opening block-like tags */
var BLOCK_TEXT_CLOSE = '<\\/(p|h[1-6]).*?>'; /* Get all closing block-like tags */

/* Private functions */

var replaceStrip = function replaceStrip(source, target, start, end) {
    return source.slice(0, start) + target + source.slice(end);
};

var getAllHtml = function getAllHtml(string) {
    return getAllRegex(string, new RegExp(REGEX_TEST, 'g'));
};

var removeWhitespaceFromStart = function removeWhitespaceFromStart(string) {
    return string.replace(ALL_WHITESPACE_START, '');
};

var removeWhitespaceFromEnd = function removeWhitespaceFromEnd(string) {
    return string.replace(ALL_WHITESPACE_END, '');
};

var getAllRegex = function getAllRegex(string, regex) {

    var result;
    var allRegex = [];

    while ((result = regex.exec(string)) !== null) {
        allRegex.push(result);
    }

    return allRegex;
};

var removeString = function removeString(string, index, length) {
    return string.substring(0, index) + string.substring(index + length);
};

var stripNewlines = function stripNewlines(string) {
    return string.replace(NEWLINES_REGEX, '');
};

var insertString = function insertString(source, target, index) {
    return source.slice(0, index) + target + source.slice(index);
};

var convertHtmlCodesToSymbols = function convertHtmlCodesToSymbols(string) {

    /* From: https://stackoverflow.com/questions/4338963/convert-html-character-entities-back-to-regular-text-using-javascript */
    var map = { "gt": ">" };

    string = string.replace(/&(#(?:x[0-9a-f]+|\d+)|[a-z]+);?/gi, function (a, b) {
        if (b[0] === "#") {
            return String.fromCharCode(b[1].toLowerCase() === "x" ? parseInt(b.substr(2), 16) : parseInt(b.substr(1), 10));
        } else {
            return map.hasOwnProperty(b) ? map[b] : a;
        }
    });

    return string;
};

/**
* Remove all the whitespace that follows an html tag (opening or closing)
*
* @param {string} string
* @return {string}
*/
var stripWhitespaceAfterHtmlTags = function stripWhitespaceAfterHtmlTags(string) {
    var splitSource = [];
    var index = 0;
    var prevIndex = 0;
    var element = null;
    var myBlockTextOpen = new RegExp(BLOCK_TEXT_OPEN, 'g');
    var myBlockTextClose = new RegExp(BLOCK_TEXT_CLOSE, 'g');

    /* Do this while we can find a block element */
    while (element = myBlockTextOpen.exec(string)) {
        /* Push the substring of zero up to and including found element */
        index = element.index + element[0].length;
        splitSource.push(string.substring(prevIndex, index));
        prevIndex = index;
    }

    /* Push what is left of the string in with the splitSource */
    splitSource.push(string.substring(prevIndex));

    /* Then, destroy all the whitespace at the beginning of each string
    * in splitSource and reconstruct the source string */
    string = '';
    for (var i = 0; i < splitSource.length; i++) {
        splitSource[i] = removeWhitespaceFromStart(splitSource[i]);
        string += splitSource[i];
    }

    return string;
};

var stripWhitespaceBeforeHtmlTags = function stripWhitespaceBeforeHtmlTags(string) {
    /* Finally, kill all the whitespace that precedes a closing block tag */

    /* Do this while we can find a block element */
    var splitSource = [];
    var index = 0;
    var prevIndex = 0;
    var element = null;
    var myBlockTextOpen = new RegExp(BLOCK_TEXT_OPEN, 'g');
    var myBlockTextClose = new RegExp(BLOCK_TEXT_CLOSE, 'g');

    while (element = myBlockTextClose.exec(string)) {
        /* Push the substring of zero up to and including found element */
        index = element.index;
        splitSource.push(string.substring(prevIndex, index));
        prevIndex = index;
    }
    /* Push what is left of the string in with the splitSource */
    splitSource.push(string.substring(prevIndex));

    /* Then, destroy all the whitespace at the end of each string in splitSource
    * and reconstruct the source string */
    string = '';
    for (var i = 0; i < splitSource.length; i++) {
        splitSource[i] = removeWhitespaceFromEnd(splitSource[i]);
        string += splitSource[i];
    }

    return string;
};

var stripWhitespaceSurroundingHtmlTags = function stripWhitespaceSurroundingHtmlTags(string) {
    return stripWhitespaceAfterHtmlTags(stripWhitespaceBeforeHtmlTags(string));
};

/* Private classes */

var ParsedHtmlClass = (_temp = _class =

/* Constructor */

/* Public variables */

function ParsedHtmlClass(html) {
    _classCallCheck(this, ParsedHtmlClass);

    _initialiseProps.call(this);

    this.compileParsedHtml(html);
    // this.startCompilingReact()
}

/* Private classes */


/* This function must translate a given position in the plain text to the corresponding position
in the html, so that we can insert a new highlighting <span> class at the appropriate location. */


/* Public functions */

, _initialiseProps = function _initialiseProps() {
    var _this = this;

    this.text = '';
    this.html = '';
    this.react = [];
    this.tagCount = 0;
    this.tags = [];

    this.startCompilingReact = function () {
        _this.react = (0, _reactHtmlParser2.default)(_this.html, {
            transform: function transform(node, index) {
                if (node.name === 'annotation') {
                    return (0, _preact.h)(_Annotator.Annotation, node.attribs);
                }
            }
        });
    };

    this.compileReact = function () {
        _this.startCompilingReact();
        return _this.react;
    };

    this.compileParsedHtml = function (html) {

        var index = 0;
        var content = '';
        var tagIndex = 0;
        var allTags = getAllHtml(html);

        /* Put the html into the public html member */
        _this.html = html;

        /* Do this for all html tags */
        /* NOTE: We must go last-to-first otherwise the index will get corrupted during inventarisation */
        for (var i = allTags.length - 1; i >= 0; i--) {

            /* Get the start of the html tag */
            index = allTags[i].index;

            /* Get the html tag itself */
            content = allTags[i][0];

            /* Save the index position and the content to a new ParsedElementClass instance */
            _this.tags.push(new ParsedTagClass(index, content));

            /* Slice the string from the html */
            html = removeString(html, index, content.length);
        }

        /* Since we got back-to-front on the tags, we need to reverse the order */
        _this.tags.reverse();

        /* Save what is left, stripped from the html tags, as text */
        // this.text = stripNewlines(html); /* Make sure to strip the newlines */
        _this.text = html;
    };

    this.reconstructHtml = function () {
        var newHtml = _this.text;

        for (var i = 0; i < that.tags.length; i++) {
            newHtml = insertString(newHtml, that.tags[i].content, that.tags[i].position);
        }

        return newHtml;
    };

    this.reconstructPartOfHtml = function (start, end) {
        var htmlStart = _this.getIndexInHtml(start);
        var htmlEnd = _this.getIndexInHtml(end);
        return _this.html.substring(htmlStart, htmlEnd);
    };

    this.getNumberOfTags = function () {
        return _this.tags.length;
    };

    this.getIndexInHtml = function (index) {

        var htmlIndex = index;
        var i;

        /* Once the htmlPosition is greater than the next html tag we need to consider, we don't have
        to keep looking. */
        for (i = 0; i < _this.tags.length && htmlIndex > _this.tags[i].position; i++) {
            htmlIndex += _this.tags[i].content.length;
        }

        /* Give back the found index */
        return htmlIndex;
    };

    this.getAllHtml = getAllHtml;
    this.convertHtmlCodesToSymbols = convertHtmlCodesToSymbols;
    this.stripWhitespaceAfterHtmlTags = stripWhitespaceAfterHtmlTags;
    this.stripWhitespaceBeforeHtmlTags = stripWhitespaceBeforeHtmlTags;
    this.stripWhitespaceSurroundingHtmlTags = stripWhitespaceSurroundingHtmlTags;
    this.replaceStrip = replaceStrip;
}, _temp); /* End class */

function ParsedTagClass(position, content) {
    this.position = position;
    this.content = content;
}

exports.getAllHtml = getAllHtml;
exports.convertHtmlCodesToSymbols = convertHtmlCodesToSymbols;
exports.stripWhitespaceAfterHtmlTags = stripWhitespaceAfterHtmlTags;
exports.stripWhitespaceBeforeHtmlTags = stripWhitespaceBeforeHtmlTags;
exports.stripWhitespaceSurroundingHtmlTags = stripWhitespaceSurroundingHtmlTags;
exports.ParsedHtmlClass = ParsedHtmlClass;
exports.replaceStrip = replaceStrip;