import $gSn7v$stripansi from "strip-ansi";
import $gSn7v$wcwidth from "wcwidth";



function $00bb428dac94474a$export$2e2bcd8739ae039(str) {
    return $gSn7v$wcwidth($gSn7v$stripansi(str));
}



"use strict";
/**
 * repeat string `str` up to total length of `len`
 *
 * @param String str string to repeat
 * @param Number len total length of output string
 */ function $4cd7cdbf665676b6$var$repeatString(str, len) {
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
 */ function $4cd7cdbf665676b6$var$padRight(str, max, chr) {
    str = str != null ? str : '';
    str = String(str);
    var length = max - $00bb428dac94474a$export$2e2bcd8739ae039(str);
    if (length <= 0) return str;
    return str + $4cd7cdbf665676b6$var$repeatString(chr || ' ', length);
}
/**
 * Pad `str` up to total length `max` with `chr`.
 * If `str` is longer than `max`, padCenter will return `str` unaltered.
 *
 * @param String str string to pad
 * @param Number max total length of output string
 * @param String chr optional. Character to pad with. default: ' '
 * @return String padded str
 */ function $4cd7cdbf665676b6$var$padCenter(str, max, chr) {
    str = str != null ? str : '';
    str = String(str);
    var length = max - $00bb428dac94474a$export$2e2bcd8739ae039(str);
    if (length <= 0) return str;
    var lengthLeft = Math.floor(length / 2);
    var lengthRight = length - lengthLeft;
    return $4cd7cdbf665676b6$var$repeatString(chr || ' ', lengthLeft) + str + $4cd7cdbf665676b6$var$repeatString(chr || ' ', lengthRight);
}
/**
 * Pad `str` up to total length `max` with `chr`, on the left.
 * If `str` is longer than `max`, padRight will return `str` unaltered.
 *
 * @param String str string to pad
 * @param Number max total length of output string
 * @param String chr optional. Character to pad with. default: ' '
 * @return String padded str
 */ function $4cd7cdbf665676b6$var$padLeft(str, max, chr) {
    str = str != null ? str : '';
    str = String(str);
    var length = max - $00bb428dac94474a$export$2e2bcd8739ae039(str);
    if (length <= 0) return str;
    return $4cd7cdbf665676b6$var$repeatString(chr || ' ', length) + str;
}
/**
 * Split a String `str` into lines of maxiumum length `max`.
 * Splits on word boundaries. Preserves existing new lines.
 *
 * @param String str string to split
 * @param Number max length of each line
 * @return Array Array containing lines.
 */ function $4cd7cdbf665676b6$var$splitIntoLines(str1, max1) {
    function _splitIntoLines(str, max) {
        return str.trim().split(' ').reduce(function(lines, word) {
            var line = lines[lines.length - 1];
            if (line && $00bb428dac94474a$export$2e2bcd8739ae039(line.join(' ')) + $00bb428dac94474a$export$2e2bcd8739ae039(word) < max) lines[lines.length - 1].push(word) // add to line
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
 */ function $4cd7cdbf665676b6$var$splitLongWords(str, max, truncationChar) {
    str = str.trim();
    var result = [];
    var words = str.split(' ');
    var remainder = '';
    var truncationWidth = $00bb428dac94474a$export$2e2bcd8739ae039(truncationChar);
    while(remainder || words.length){
        if (remainder) {
            var word = remainder;
            remainder = '';
        } else var word = words.shift();
        if ($00bb428dac94474a$export$2e2bcd8739ae039(word) > max) {
            // slice is based on length no wcwidth
            var i = 0;
            var wwidth = 0;
            var limit = max - truncationWidth;
            while(i < word.length){
                var w = $00bb428dac94474a$export$2e2bcd8739ae039(word.charAt(i));
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
 */ function $4cd7cdbf665676b6$var$truncateString(str, max) {
    str = str != null ? str : '';
    str = String(str);
    if (max == Infinity) return str;
    var i = 0;
    var wwidth = 0;
    while(i < str.length){
        var w = $00bb428dac94474a$export$2e2bcd8739ae039(str.charAt(i));
        if (w + wwidth > max) break;
        wwidth += w;
        ++i;
    }
    return str.slice(0, i);
}
/**
 * Exports
 */ const $4cd7cdbf665676b6$export$7e24a29324041c48 = $4cd7cdbf665676b6$var$padRight;
const $4cd7cdbf665676b6$export$7fd96f818dd6e623 = $4cd7cdbf665676b6$var$padCenter;
const $4cd7cdbf665676b6$export$bc3bea8325045070 = $4cd7cdbf665676b6$var$padLeft;
const $4cd7cdbf665676b6$export$bbcc909de88cc4be = $4cd7cdbf665676b6$var$splitIntoLines;
const $4cd7cdbf665676b6$export$68df2348d77e9205 = $4cd7cdbf665676b6$var$splitLongWords;
const $4cd7cdbf665676b6$export$88f68187db5ede92 = $4cd7cdbf665676b6$var$truncateString;


"use strict";
const $fca864283bf93d2b$var$DEFAULT_HEADING_TRANSFORM = (key)=>key.toUpperCase()
;
const $fca864283bf93d2b$var$DEFAULT_DATA_TRANSFORM = (cell, column, index)=>cell
;
const $fca864283bf93d2b$var$DEFAULTS = Object.freeze({
    maxWidth: Infinity,
    minWidth: 0,
    columnSplitter: ' ',
    truncate: false,
    truncateMarker: '…',
    preserveNewLines: false,
    paddingChr: ' ',
    showHeaders: true,
    headingTransform: $fca864283bf93d2b$var$DEFAULT_HEADING_TRANSFORM,
    dataTransform: $fca864283bf93d2b$var$DEFAULT_DATA_TRANSFORM
});
function $fca864283bf93d2b$export$2e2bcd8739ae039(items, options = {
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
    options = $fca864283bf93d2b$var$mixin({
    }, $fca864283bf93d2b$var$DEFAULTS, options);
    options.config = options.config || Object.create(null);
    options.spacing = options.spacing || '\n' // probably useless
    ;
    options.preserveNewLines = !!options.preserveNewLines;
    options.showHeaders = !!options.showHeaders;
    options.columns = options.columns || options.include // alias include/columns, prefer columns if supplied
    ;
    let columnNames = options.columns || [] // optional user-supplied columns to include
    ;
    items = $fca864283bf93d2b$var$toArray(items, columnNames);
    // if not suppled column names, automatically determine columns from data keys
    if (!columnNames.length) items.forEach(function(item) {
        for(let columnName in item)if (columnNames.indexOf(columnName) === -1) columnNames.push(columnName);
    });
    // initialize column defaults (each column inherits from options.config)
    let columns1 = columnNames.reduce((columns, columnName)=>{
        let column = Object.create(options);
        columns[columnName] = $fca864283bf93d2b$var$mixin(column, columnConfigs[columnName]);
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
                if (column.headingTransform !== $fca864283bf93d2b$var$DEFAULT_HEADING_TRANSFORM) return;
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
            return Math.max(min, Math.min(column.maxWidth, Math.max(column.minWidth, $00bb428dac94474a$export$2e2bcd8739ae039(cur))));
        }, 0);
    });
    // split long words so they can break onto multiple lines
    columnNames.forEach((columnName)=>{
        let column = columns1[columnName];
        items = items.map((item)=>{
            item[columnName] = $4cd7cdbf665676b6$export$68df2348d77e9205(item[columnName], column.width, column.truncateMarker);
            return item;
        });
    });
    // wrap long lines. each item is now an array of lines.
    columnNames.forEach((columnName)=>{
        let column = columns1[columnName];
        items = items.map((item, index)=>{
            let cell = item[columnName];
            item[columnName] = $4cd7cdbf665676b6$export$bbcc909de88cc4be(cell, column.width);
            // if truncating required, only include first line + add truncation char
            if (column.truncate && item[columnName].length > 1) {
                item[columnName] = $4cd7cdbf665676b6$export$bbcc909de88cc4be(cell, column.width - $00bb428dac94474a$export$2e2bcd8739ae039(column.truncateMarker));
                let firstLine = item[columnName][0];
                if (!$fca864283bf93d2b$var$endsWith(firstLine, column.truncateMarker)) item[columnName][0] += column.truncateMarker;
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
                return Math.max(min, Math.min(column.maxWidth, Math.max(column.minWidth, $00bb428dac94474a$export$2e2bcd8739ae039(cur))));
            }, 0);
        }).reduce((min, cur)=>{
            if (min >= column.maxWidth) return min;
            return Math.max(min, Math.min(column.maxWidth, Math.max(column.minWidth, cur)));
        }, 0);
    });
    let rows = $fca864283bf93d2b$var$createRows(items, columns1, columnNames, options.paddingChr) // merge lines into rows
    ;
    // conceive output
    return rows.reduce((output, row)=>{
        return output.concat(row.reduce((rowOut, line)=>{
            return rowOut.concat(line.join(options.columnSplitter));
        }, []));
    }, []).map((line)=>$4cd7cdbf665676b6$export$88f68187db5ede92(line, maxLineWidth)
    ).join(options.spacing);
}
/**
 * Convert wrapped lines into rows with padded values.
 *
 * @param Array items data to process
 * @param Array columns column width settings for wrapping
 * @param Array columnNames column ordering
 * @return Array items wrapped in arrays, corresponding to lines
 */ function $fca864283bf93d2b$var$createRows(items, columns, columnNames, paddingChr) {
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
                if (column.align === 'right') row[i].push($4cd7cdbf665676b6$export$bc3bea8325045070(val, column.width, paddingChr));
                else if (column.align === 'center' || column.align === 'centre') row[i].push($4cd7cdbf665676b6$export$7fd96f818dd6e623(val, column.width, paddingChr));
                else row[i].push($4cd7cdbf665676b6$export$7e24a29324041c48(val, column.width, paddingChr));
            });
        }
        return row;
    });
}
/**
 * Object.assign
 *
 * @return Object Object with properties mixed in.
 */ function $fca864283bf93d2b$var$mixin(...args) {
    if (Object.assign) return Object.assign(...args);
    return $fca864283bf93d2b$var$ObjectAssign(...args);
}
function $fca864283bf93d2b$var$ObjectAssign(target, firstSource) {
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
 */ function $fca864283bf93d2b$var$endsWith(target, searchString, position) {
    position = position || target.length;
    position = position - searchString.length;
    let lastIndex = target.lastIndexOf(searchString);
    return lastIndex !== -1 && lastIndex === position;
}
function $fca864283bf93d2b$var$toArray(items, columnNames) {
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


export {$fca864283bf93d2b$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=module.js.map
