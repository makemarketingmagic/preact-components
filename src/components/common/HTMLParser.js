/* File: ./app/components/html/html-service.ts */
import ReactHtmlParser from 'react-html-parser'
import { Annotation } from '../Annotator';
import { h } from 'preact'

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

const replaceStrip = (source, target, start, end) => {
    return source.slice(0, start) + target + source.slice(end);
}

const getAllHtml = (string) => {
    return getAllRegex(string, new RegExp(REGEX_TEST, 'g'));
}

const removeWhitespaceFromStart = (string) => {
    return string.replace(ALL_WHITESPACE_START, '');
}

const removeWhitespaceFromEnd = (string) => {
    return string.replace(ALL_WHITESPACE_END, '');
}

const getAllRegex = (string, regex) => {

    var result;
    var allRegex = [];

    while ((result = regex.exec(string)) !== null) {
        allRegex.push(result);
    }

    return allRegex;

}

const removeString = (string, index, length) => {
    return string.substring(0, index) + string.substring(index + length);
}

const stripNewlines = (string) => {
    return string.replace(NEWLINES_REGEX, '');
}

const insertString = (source, target, index) => {
    return source.slice(0, index) + target + source.slice(index);
}

const convertHtmlCodesToSymbols = (string) => {

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
}

/**
* Remove all the whitespace that follows an html tag (opening or closing)
*
* @param {string} string
* @return {string}
*/
const stripWhitespaceAfterHtmlTags = (string) => {
    var splitSource = [];
    var index = 0;
    var prevIndex = 0;
    var element = null;
    var myBlockTextOpen = new RegExp(BLOCK_TEXT_OPEN, 'g');
    var myBlockTextClose = new RegExp(BLOCK_TEXT_CLOSE, 'g');

    /* Do this while we can find a block element */
    while ((element = myBlockTextOpen.exec(string))) {
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
}

const stripWhitespaceBeforeHtmlTags = (string) => {
    /* Finally, kill all the whitespace that precedes a closing block tag */

    /* Do this while we can find a block element */
    var splitSource = [];
    var index = 0;
    var prevIndex = 0;
    var element = null;
    var myBlockTextOpen = new RegExp(BLOCK_TEXT_OPEN, 'g');
    var myBlockTextClose = new RegExp(BLOCK_TEXT_CLOSE, 'g');

    while ((element = myBlockTextClose.exec(string))) {
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
}

const stripWhitespaceSurroundingHtmlTags = (string) => {
    return stripWhitespaceAfterHtmlTags(
        stripWhitespaceBeforeHtmlTags(string)
    );
}

/* Private classes */

class ParsedHtmlClass {

    /* Public variables */

    text = '';
    html = '';
    react = []
    tagCount = 0;
    tags = [];

    /* Public functions */

    startCompilingReact = () => {
        this.react = ReactHtmlParser(this.html, {
            transform: (node, index) => {
                if (node.name === 'annotation') {
                    return (<Annotation {...node.attribs}
                    // secondaryHighlight={secondaryHighlight}
                    // index={i}
                    // readOnly={readOnly}
                    // comment={comment}
                    // position={{ clickX, clickY }}
                    // open={this.state.open === index}
                    // updateHighlight={updateHighlight}
                    // deleteHighlight={deleteHighlight}
                    // onSelect={(e) => this.selectAnnotation(index, e, i)}
                    // onDone={this.onDone}
                    // content={content}
                    />)
                }
            }
        })
    }

    compileReact = () => {
        this.startCompilingReact()
        return this.react
    }

    compileParsedHtml = (html) => {

        var index = 0;
        var content = '';
        var tagIndex = 0;
        var allTags = getAllHtml(html);

        /* Put the html into the public html member */
        this.html = html;

        /* Do this for all html tags */
        /* NOTE: We must go last-to-first otherwise the index will get corrupted during inventarisation */
        for (var i = allTags.length - 1; i >= 0; i--) {

            /* Get the start of the html tag */
            index = allTags[i].index;

            /* Get the html tag itself */
            content = allTags[i][0];

            /* Save the index position and the content to a new ParsedElementClass instance */
            this.tags.push(
                new ParsedTagClass(index, content)
            );

            /* Slice the string from the html */
            html = removeString(html, index, content.length);

        }

        /* Since we got back-to-front on the tags, we need to reverse the order */
        this.tags.reverse();

        /* Save what is left, stripped from the html tags, as text */
        // this.text = stripNewlines(html); /* Make sure to strip the newlines */
        this.text = html
    };

    reconstructHtml = () => {
        var newHtml = this.text;

        for (var i = 0; i < that.tags.length; i++) {
            newHtml = insertString(newHtml, that.tags[i].content, that.tags[i].position);
        }

        return newHtml;
    };

    reconstructPartOfHtml = (start, end) => {
        var htmlStart = this.getIndexInHtml(start);
        var htmlEnd = this.getIndexInHtml(end);
        return this.html.substring(htmlStart, htmlEnd);
    };

    getNumberOfTags = () => {
        return this.tags.length;
    };

    /* This function must translate a given position in the plain text to the corresponding position
    in the html, so that we can insert a new highlighting <span> class at the appropriate location. */
    getIndexInHtml = (index) => {

        var htmlIndex = index;
        var i;

        /* Once the htmlPosition is greater than the next html tag we need to consider, we don't have
        to keep looking. */
        for (i = 0; i < this.tags.length && htmlIndex > this.tags[i].position; i++) {
            htmlIndex += this.tags[i].content.length;
        }

        /* Give back the found index */
        return htmlIndex;

    };

    /* Constructor */

    constructor(html) {
        this.compileParsedHtml(html);
        // this.startCompilingReact()
    }

    /* Private classes */
    getAllHtml = getAllHtml
    convertHtmlCodesToSymbols = convertHtmlCodesToSymbols
    stripWhitespaceAfterHtmlTags = stripWhitespaceAfterHtmlTags
    stripWhitespaceBeforeHtmlTags = stripWhitespaceBeforeHtmlTags
    stripWhitespaceSurroundingHtmlTags = stripWhitespaceSurroundingHtmlTags
    replaceStrip = replaceStrip

} /* End class */

function ParsedTagClass(position, content) {
    this.position = position;
    this.content = content;
}

export {
    getAllHtml,
    convertHtmlCodesToSymbols,
    stripWhitespaceAfterHtmlTags,
    stripWhitespaceBeforeHtmlTags,
    stripWhitespaceSurroundingHtmlTags,
    ParsedHtmlClass,
    replaceStrip
};
