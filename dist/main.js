var $47i4k$stripansi = require("strip-ansi");
var $47i4k$wcwidth = require("wcwidth");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", () => $56fe040b4fb032b6$export$2e2bcd8739ae039);


function $7349b565d1bdb7e3$export$2e2bcd8739ae039(str) {
    return ($parcel$interopDefault($47i4k$wcwidth))(($parcel$interopDefault($47i4k$stripansi))(str));
}



"use strict";
/**
 * repeat string `str` up to total length of `len`
 *
 * @param String str string to repeat
 * @param Number len total length of output string
 */ function $3b27a687566e534c$var$repeatString(str, len) {
    return Array.apply(null, {
        length: len + 1
    }).join(str).slice(0, len);
}
/**
 * Pad `str` up to total length `max` with `chr`.
 * If `str` is longer than `max`, padRight will return `str` unaltered.
 *
 * @param String str string to pad
 * @param Number max total length of output string
 * @param String chr optional. Character to pad with. default: ' '
 * @return String padded str
 */ function $3b27a687566e534c$var$padRight(str, max, chr) {
    str = str != null ? str : '';
    str = String(str);
    var length = max - $7349b565d1bdb7e3$export$2e2bcd8739ae039(str);
    if (length <= 0) return str;
    return str + $3b27a687566e534c$var$repeatString(chr || ' ', length);
}
/**
 * Pad `str` up to total length `max` with `chr`.
 * If `str` is longer than `max`, padCenter will return `str` unaltered.
 *
 * @param String str string to pad
 * @param Number max total length of output string
 * @param String chr optional. Character to pad with. default: ' '
 * @return String padded str
 */ function $3b27a687566e534c$var$padCenter(str, max, chr) {
    str = str != null ? str : '';
    str = String(str);
    var length = max - $7349b565d1bdb7e3$export$2e2bcd8739ae039(str);
    if (length <= 0) return str;
    var lengthLeft = Math.floor(length / 2);
    var lengthRight = length - lengthLeft;
    return $3b27a687566e534c$var$repeatString(chr || ' ', lengthLeft) + str + $3b27a687566e534c$var$repeatString(chr || ' ', lengthRight);
}
/**
 * Pad `str` up to total length `max` with `chr`, on the left.
 * If `str` is longer than `max`, padRight will return `str` unaltered.
 *
 * @param String str string to pad
 * @param Number max total length of output string
 * @param String chr optional. Character to pad with. default: ' '
 * @return String padded str
 */ function $3b27a687566e534c$var$padLeft(str, max, chr) {
    str = str != null ? str : '';
    str = String(str);
    var length = max - $7349b565d1bdb7e3$export$2e2bcd8739ae039(str);
    if (length <= 0) return str;
    return $3b27a687566e534c$var$repeatString(chr || ' ', length) + str;
}
/**
 * Split a String `str` into lines of maxiumum length `max`.
 * Splits on word boundaries. Preserves existing new lines.
 *
 * @param String str string to split
 * @param Number max length of each line
 * @return Array Array containing lines.
 */ function $3b27a687566e534c$var$splitIntoLines(str1, max1) {
    function _splitIntoLines(str, max) {
        return str.trim().split(' ').reduce(function(lines, word) {
            var line = lines[lines.length - 1];
            if (line && $7349b565d1bdb7e3$export$2e2bcd8739ae039(line.join(' ')) + $7349b565d1bdb7e3$export$2e2bcd8739ae039(word) < max) lines[lines.length - 1].push(word) // add to line
            ;
            else lines.push([
                word
            ]) // new line
            ;
            return lines;
        }, []).map(function(l) {
            return l.join(' ');
        });
    }
    return str1.split('\n').map(function(str) {
        return _splitIntoLines(str, max1);
    }).reduce(function(lines, line) {
        return lines.concat(line);
    }, []);
}
/**
 * Add spaces and `truncationChar` between words of
 * `str` which are longer than `max`.
 *
 * @param String str string to split
 * @param Number max length of each line
 * @param Number truncationChar character to append to split words
 * @return String
 */ function $3b27a687566e534c$var$splitLongWords(str, max, truncationChar) {
    str = str.trim();
    var result = [];
    var words = str.split(' ');
    var remainder = '';
    var truncationWidth = $7349b565d1bdb7e3$export$2e2bcd8739ae039(truncationChar);
    while(remainder || words.length){
        if (remainder) {
            var word = remainder;
            remainder = '';
        } else var word = words.shift();
        if ($7349b565d1bdb7e3$export$2e2bcd8739ae039(word) > max) {
            // slice is based on length no wcwidth
            var i = 0;
            var wwidth = 0;
            var limit = max - truncationWidth;
            while(i < word.length){
                var w = $7349b565d1bdb7e3$export$2e2bcd8739ae039(word.charAt(i));
                if (w + wwidth > limit) break;
                wwidth += w;
                ++i;
            }
            remainder = word.slice(i) // get remainder
            ;
            // save remainder for next loop
            word = word.slice(0, i) // grab truncated word
            ;
            word += truncationChar // add trailing … or whatever
            ;
        }
        result.push(word);
    }
    return result.join(' ');
}
/**
 * Truncate `str` into total width `max`
 * If `str` is shorter than `max`,  will return `str` unaltered.
 *
 * @param String str string to truncated
 * @param Number max total wcwidth of output string
 * @return String truncated str
 */ function $3b27a687566e534c$var$truncateString(str, max) {
    str = str != null ? str : '';
    str = String(str);
    if (max == Infinity) return str;
    var i = 0;
    var wwidth = 0;
    while(i < str.length){
        var w = $7349b565d1bdb7e3$export$2e2bcd8739ae039(str.charAt(i));
        if (w + wwidth > max) break;
        wwidth += w;
        ++i;
    }
    return str.slice(0, i);
}
/**
 * Exports
 */ const $3b27a687566e534c$export$7e24a29324041c48 = $3b27a687566e534c$var$padRight;
const $3b27a687566e534c$export$7fd96f818dd6e623 = $3b27a687566e534c$var$padCenter;
const $3b27a687566e534c$export$bc3bea8325045070 = $3b27a687566e534c$var$padLeft;
const $3b27a687566e534c$export$bbcc909de88cc4be = $3b27a687566e534c$var$splitIntoLines;
const $3b27a687566e534c$export$68df2348d77e9205 = $3b27a687566e534c$var$splitLongWords;
const $3b27a687566e534c$export$88f68187db5ede92 = $3b27a687566e534c$var$truncateString;


"use strict";
const $56fe040b4fb032b6$var$DEFAULT_HEADING_TRANSFORM = (key)=>key.toUpperCase()
;
const $56fe040b4fb032b6$var$DEFAULT_DATA_TRANSFORM = (cell, column, index)=>cell
;
const $56fe040b4fb032b6$var$DEFAULTS = Object.freeze({
    maxWidth: Infinity,
    minWidth: 0,
    columnSplitter: ' ',
    truncate: false,
    truncateMarker: '…',
    preserveNewLines: false,
    paddingChr: ' ',
    showHeaders: true,
    headingTransform: $56fe040b4fb032b6$var$DEFAULT_HEADING_TRANSFORM,
    dataTransform: $56fe040b4fb032b6$var$DEFAULT_DATA_TRANSFORM
});
function $56fe040b4fb032b6$export$2e2bcd8739ae039(items, options = {
}) {
    let columnConfigs = options.config || {
    };
    delete options.config // remove config so doesn't appear on every column.
    ;
    let maxLineWidth = options.maxLineWidth || Infinity;
    if (maxLineWidth === 'auto') maxLineWidth = process.stdout.columns || Infinity;
    delete options.maxLineWidth // this is a line control option, don't pass it to column
    ;
    // Option defaults inheritance:
    // options.config[columnName] => options => DEFAULTS
    options = $56fe040b4fb032b6$var$mixin({
    }, $56fe040b4fb032b6$var$DEFAULTS, options);
    options.config = options.config || Object.create(null);
    options.spacing = options.spacing || '\n' // probably useless
    ;
    options.preserveNewLines = !!options.preserveNewLines;
    options.showHeaders = !!options.showHeaders;
    options.columns = options.columns || options.include // alias include/columns, prefer columns if supplied
    ;
    let columnNames = options.columns || [] // optional user-supplied columns to include
    ;
    items = $56fe040b4fb032b6$var$toArray(items, columnNames);
    // if not suppled column names, automatically determine columns from data keys
    if (!columnNames.length) items.forEach(function(item) {
        for(let columnName in item)if (columnNames.indexOf(columnName) === -1) columnNames.push(columnName);
    });
    // initialize column defaults (each column inherits from options.config)
    let columns1 = columnNames.reduce((columns, columnName)=>{
        let column = Object.create(options);
        columns[columnName] = $56fe040b4fb032b6$var$mixin(column, columnConfigs[columnName]);
        return columns;
    }, Object.create(null));
    // sanitize column settings
    columnNames.forEach((columnName)=>{
        let column = columns1[columnName];
        column.name = columnName;
        column.maxWidth = Math.ceil(column.maxWidth);
        column.minWidth = Math.ceil(column.minWidth);
        column.truncate = !!column.truncate;
        column.align = column.align || 'left';
    });
    // sanitize data
    items = items.map((item)=>{
        let result = Object.create(null);
        columnNames.forEach((columnName)=>{
            // null/undefined -> ''
            result[columnName] = item[columnName] != null ? item[columnName] : '';
            // toString everything
            result[columnName] = '' + result[columnName];
            if (columns1[columnName].preserveNewLines) // merge non-newline whitespace chars
            result[columnName] = result[columnName].replace(/[^\S\n]/gmi, ' ');
            else // merge all whitespace chars
            result[columnName] = result[columnName].replace(/\s/gmi, ' ');
        });
        return result;
    });
    // transform data cells
    columnNames.forEach((columnName)=>{
        let column = columns1[columnName];
        items = items.map((item, index)=>{
            let col = Object.create(column);
            item[columnName] = column.dataTransform(item[columnName], col, index);
            let changedKeys = Object.keys(col);
            // disable default heading transform if we wrote to column.name
            if (changedKeys.indexOf('name') !== -1) {
                if (column.headingTransform !== $56fe040b4fb032b6$var$DEFAULT_HEADING_TRANSFORM) return;
                column.headingTransform = (heading)=>heading
                ;
            }
            changedKeys.forEach((key)=>column[key] = col[key]
            );
            return item;
        });
    });
    // add headers
    let headers = {
    };
    if (options.showHeaders) {
        columnNames.forEach((columnName)=>{
            let column = columns1[columnName];
            if (!column.showHeaders) {
                headers[columnName] = '';
                return;
            }
            headers[columnName] = column.headingTransform(column.name);
        });
        items.unshift(headers);
    }
    // get actual max-width between min & max
    // based on length of data in columns
    columnNames.forEach((columnName)=>{
        let column = columns1[columnName];
        column.width = items.map((item)=>item[columnName]
        ).reduce((min, cur)=>{
            // if already at maxWidth don't bother testing
            if (min >= column.maxWidth) return min;
            return Math.max(min, Math.min(column.maxWidth, Math.max(column.minWidth, $7349b565d1bdb7e3$export$2e2bcd8739ae039(cur))));
        }, 0);
    });
    // split long words so they can break onto multiple lines
    columnNames.forEach((columnName)=>{
        let column = columns1[columnName];
        items = items.map((item)=>{
            item[columnName] = $3b27a687566e534c$export$68df2348d77e9205(item[columnName], column.width, column.truncateMarker);
            return item;
        });
    });
    // wrap long lines. each item is now an array of lines.
    columnNames.forEach((columnName)=>{
        let column = columns1[columnName];
        items = items.map((item, index)=>{
            let cell = item[columnName];
            item[columnName] = $3b27a687566e534c$export$bbcc909de88cc4be(cell, column.width);
            // if truncating required, only include first line + add truncation char
            if (column.truncate && item[columnName].length > 1) {
                item[columnName] = $3b27a687566e534c$export$bbcc909de88cc4be(cell, column.width - $7349b565d1bdb7e3$export$2e2bcd8739ae039(column.truncateMarker));
                let firstLine = item[columnName][0];
                if (!$56fe040b4fb032b6$var$endsWith(firstLine, column.truncateMarker)) item[columnName][0] += column.truncateMarker;
                item[columnName] = item[columnName].slice(0, 1);
            }
            return item;
        });
    });
    // recalculate column widths from truncated output/lines
    columnNames.forEach((columnName)=>{
        let column = columns1[columnName];
        column.width = items.map((item)=>{
            return item[columnName].reduce((min, cur)=>{
                if (min >= column.maxWidth) return min;
                return Math.max(min, Math.min(column.maxWidth, Math.max(column.minWidth, $7349b565d1bdb7e3$export$2e2bcd8739ae039(cur))));
            }, 0);
        }).reduce((min, cur)=>{
            if (min >= column.maxWidth) return min;
            return Math.max(min, Math.min(column.maxWidth, Math.max(column.minWidth, cur)));
        }, 0);
    });
    let rows = $56fe040b4fb032b6$var$createRows(items, columns1, columnNames, options.paddingChr) // merge lines into rows
    ;
    // conceive output
    return rows.reduce((output, row)=>{
        return output.concat(row.reduce((rowOut, line)=>{
            return rowOut.concat(line.join(options.columnSplitter));
        }, []));
    }, []).map((line)=>$3b27a687566e534c$export$88f68187db5ede92(line, maxLineWidth)
    ).join(options.spacing);
}
/**
 * Convert wrapped lines into rows with padded values.
 *
 * @param Array items data to process
 * @param Array columns column width settings for wrapping
 * @param Array columnNames column ordering
 * @return Array items wrapped in arrays, corresponding to lines
 */ function $56fe040b4fb032b6$var$createRows(items, columns, columnNames, paddingChr) {
    return items.map((item)=>{
        let row = [];
        let numLines = 0;
        columnNames.forEach((columnName)=>{
            numLines = Math.max(numLines, item[columnName].length);
        });
        // combine matching lines of each rows
        for(let i = 0; i < numLines; i++){
            row[i] = row[i] || [];
            columnNames.forEach((columnName)=>{
                let column = columns[columnName];
                let val = item[columnName][i] || '' // || '' ensures empty columns get padded
                ;
                if (column.align === 'right') row[i].push($3b27a687566e534c$export$bc3bea8325045070(val, column.width, paddingChr));
                else if (column.align === 'center' || column.align === 'centre') row[i].push($3b27a687566e534c$export$7fd96f818dd6e623(val, column.width, paddingChr));
                else row[i].push($3b27a687566e534c$export$7e24a29324041c48(val, column.width, paddingChr));
            });
        }
        return row;
    });
}
/**
 * Object.assign
 *
 * @return Object Object with properties mixed in.
 */ function $56fe040b4fb032b6$var$mixin(...args) {
    if (Object.assign) return Object.assign(...args);
    return $56fe040b4fb032b6$var$ObjectAssign(...args);
}
function $56fe040b4fb032b6$var$ObjectAssign(target, firstSource) {
    if (target === undefined || target === null) throw new TypeError("Cannot convert first argument to object");
    var to = Object(target);
    var hasPendingException = false;
    var pendingException;
    for(var i = 1; i < arguments.length; i++){
        var nextSource = arguments[i];
        if (nextSource === undefined || nextSource === null) continue;
        var keysArray = Object.keys(Object(nextSource));
        for(var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++){
            var nextKey = keysArray[nextIndex];
            try {
                var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                if (desc !== undefined && desc.enumerable) to[nextKey] = nextSource[nextKey];
            } catch (e) {
                if (!hasPendingException) {
                    hasPendingException = true;
                    pendingException = e;
                }
            }
        }
        if (hasPendingException) throw pendingException;
    }
    return to;
}
/**
 * Adapted from String.prototype.endsWith polyfill.
 */ function $56fe040b4fb032b6$var$endsWith(target, searchString, position) {
    position = position || target.length;
    position = position - searchString.length;
    let lastIndex = target.lastIndexOf(searchString);
    return lastIndex !== -1 && lastIndex === position;
}
function $56fe040b4fb032b6$var$toArray(items, columnNames) {
    if (Array.isArray(items)) return items;
    let rows = [];
    for(let key in items){
        let item = {
        };
        item[columnNames[0] || 'key'] = key;
        item[columnNames[1] || 'value'] = items[key];
        rows.push(item);
    }
    return rows;
}


//# sourceMappingURL=main.js.map
