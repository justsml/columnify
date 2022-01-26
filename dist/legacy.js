function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $26ca38a48d3d431a$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}


function $ad125052302c6195$export$2e2bcd8739ae039(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}


function $50632efbe6528b59$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}


function $33a313e6cbb50d41$export$2e2bcd8739ae039(arr) {
    return $26ca38a48d3d431a$export$2e2bcd8739ae039(arr) || $ad125052302c6195$export$2e2bcd8739ae039(arr) || $50632efbe6528b59$export$2e2bcd8739ae039();
}

function $dea54b42f8a1b096$export$2e2bcd8739ae039(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}




function $185e967c1e4d0c9b$export$2e2bcd8739ae039() {
    var ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
    }, _onlyFirst = ref.onlyFirst, onlyFirst = _onlyFirst === void 0 ? false : _onlyFirst;
    var pattern = [
        '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
        '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
    ].join('|');
    return new RegExp(pattern, onlyFirst ? undefined : 'g');
}


function $a681d09a532ba963$export$2e2bcd8739ae039(string) {
    if (typeof string !== 'string') throw new TypeError("Expected a `string`, got `".concat(typeof string === "undefined" ? "undefined" : $dea54b42f8a1b096$export$2e2bcd8739ae039(string), "`"));
    return string.replace($185e967c1e4d0c9b$export$2e2bcd8739ae039(), '');
}


var $3e6e7e3309708fef$exports = {};
"use strict";
var $a502ba5c8652aac8$exports = {};
var $7a3e4d02bb61b372$exports = {};

var $ed66258726130538$export$a143d493d941bafc;
var $ed66258726130538$export$e4cf37d7f6fb9e0a;
var $ed66258726130538$export$f99ded8fe4b79145;
var $ed66258726130538$export$599f31c3813fae4d;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
var $8b575575efedc441$export$a48f0734ac7c2329;
var $8b575575efedc441$export$d622b2ad8d90c771;
var $8b575575efedc441$export$6100ba28696e12de;
'use strict';
$8b575575efedc441$export$a48f0734ac7c2329 = $8b575575efedc441$var$byteLength;
$8b575575efedc441$export$d622b2ad8d90c771 = $8b575575efedc441$var$toByteArray;
$8b575575efedc441$export$6100ba28696e12de = $8b575575efedc441$var$fromByteArray;
var $8b575575efedc441$var$lookup = [];
var $8b575575efedc441$var$revLookup = [];
var $8b575575efedc441$var$Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var $8b575575efedc441$var$code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var $8b575575efedc441$var$i = 0, $8b575575efedc441$var$len = $8b575575efedc441$var$code.length; $8b575575efedc441$var$i < $8b575575efedc441$var$len; ++$8b575575efedc441$var$i){
    $8b575575efedc441$var$lookup[$8b575575efedc441$var$i] = $8b575575efedc441$var$code[$8b575575efedc441$var$i];
    $8b575575efedc441$var$revLookup[$8b575575efedc441$var$code.charCodeAt($8b575575efedc441$var$i)] = $8b575575efedc441$var$i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
$8b575575efedc441$var$revLookup['-'.charCodeAt(0)] = 62;
$8b575575efedc441$var$revLookup['_'.charCodeAt(0)] = 63;
function $8b575575efedc441$var$getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function $8b575575efedc441$var$byteLength(b64) {
    var lens = $8b575575efedc441$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function $8b575575efedc441$var$_byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function $8b575575efedc441$var$toByteArray(b64) {
    var tmp;
    var lens = $8b575575efedc441$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new $8b575575efedc441$var$Arr($8b575575efedc441$var$_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = $8b575575efedc441$var$revLookup[b64.charCodeAt(i)] << 18 | $8b575575efedc441$var$revLookup[b64.charCodeAt(i + 1)] << 12 | $8b575575efedc441$var$revLookup[b64.charCodeAt(i + 2)] << 6 | $8b575575efedc441$var$revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = $8b575575efedc441$var$revLookup[b64.charCodeAt(i)] << 2 | $8b575575efedc441$var$revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = $8b575575efedc441$var$revLookup[b64.charCodeAt(i)] << 10 | $8b575575efedc441$var$revLookup[b64.charCodeAt(i + 1)] << 4 | $8b575575efedc441$var$revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function $8b575575efedc441$var$tripletToBase64(num) {
    return $8b575575efedc441$var$lookup[num >> 18 & 63] + $8b575575efedc441$var$lookup[num >> 12 & 63] + $8b575575efedc441$var$lookup[num >> 6 & 63] + $8b575575efedc441$var$lookup[num & 63];
}
function $8b575575efedc441$var$encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 16711680) + (uint8[i + 1] << 8 & 65280) + (uint8[i + 2] & 255);
        output.push($8b575575efedc441$var$tripletToBase64(tmp));
    }
    return output.join('');
}
function $8b575575efedc441$var$fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push($8b575575efedc441$var$encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push($8b575575efedc441$var$lookup[tmp >> 2] + $8b575575efedc441$var$lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push($8b575575efedc441$var$lookup[tmp >> 10] + $8b575575efedc441$var$lookup[tmp >> 4 & 63] + $8b575575efedc441$var$lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}


/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var $da83dda8d9adee5e$export$aafa59e2e03f2942;
var $da83dda8d9adee5e$export$68d8715fc104d294;
$da83dda8d9adee5e$export$aafa59e2e03f2942 = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
$da83dda8d9adee5e$export$68d8715fc104d294 = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};


var $ed66258726130538$var$customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
$ed66258726130538$export$a143d493d941bafc = $ed66258726130538$var$Buffer;
$ed66258726130538$export$e4cf37d7f6fb9e0a = $ed66258726130538$var$SlowBuffer;
$ed66258726130538$export$f99ded8fe4b79145 = 50;
var $ed66258726130538$var$K_MAX_LENGTH = 2147483647;
$ed66258726130538$export$599f31c3813fae4d = $ed66258726130538$var$K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ $ed66258726130538$var$Buffer.TYPED_ARRAY_SUPPORT = $ed66258726130538$var$typedArraySupport();
if (!$ed66258726130538$var$Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function $ed66258726130538$var$typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function foo() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty($ed66258726130538$var$Buffer.prototype, 'parent', {
    enumerable: true,
    get: function get() {
        if (!$ed66258726130538$var$Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty($ed66258726130538$var$Buffer.prototype, 'offset', {
    enumerable: true,
    get: function get() {
        if (!$ed66258726130538$var$Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function $ed66258726130538$var$createBuffer(length) {
    if (length > $ed66258726130538$var$K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, $ed66258726130538$var$Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function $ed66258726130538$var$Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return $ed66258726130538$var$allocUnsafe(arg);
    }
    return $ed66258726130538$var$from(arg, encodingOrOffset, length);
}
$ed66258726130538$var$Buffer.poolSize = 8192 // not used by this implementation
;
function $ed66258726130538$var$from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return $ed66258726130538$var$fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return $ed66258726130538$var$fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (typeof value === "undefined" ? "undefined" : $dea54b42f8a1b096$export$2e2bcd8739ae039(value)));
    if ($ed66258726130538$var$isInstance(value, ArrayBuffer) || value && $ed66258726130538$var$isInstance(value.buffer, ArrayBuffer)) return $ed66258726130538$var$fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && ($ed66258726130538$var$isInstance(value, SharedArrayBuffer) || value && $ed66258726130538$var$isInstance(value.buffer, SharedArrayBuffer))) return $ed66258726130538$var$fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return $ed66258726130538$var$Buffer.from(valueOf, encodingOrOffset, length);
    var b = $ed66258726130538$var$fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return $ed66258726130538$var$Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (typeof value === "undefined" ? "undefined" : $dea54b42f8a1b096$export$2e2bcd8739ae039(value)));
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ $ed66258726130538$var$Buffer.from = function(value, encodingOrOffset, length) {
    return $ed66258726130538$var$from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf($ed66258726130538$var$Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf($ed66258726130538$var$Buffer, Uint8Array);
function $ed66258726130538$var$assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function $ed66258726130538$var$alloc(size, fill, encoding) {
    $ed66258726130538$var$assertSize(size);
    if (size <= 0) return $ed66258726130538$var$createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? $ed66258726130538$var$createBuffer(size).fill(fill, encoding) : $ed66258726130538$var$createBuffer(size).fill(fill);
    return $ed66258726130538$var$createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ $ed66258726130538$var$Buffer.alloc = function(size, fill, encoding) {
    return $ed66258726130538$var$alloc(size, fill, encoding);
};
function $ed66258726130538$var$allocUnsafe(size) {
    $ed66258726130538$var$assertSize(size);
    return $ed66258726130538$var$createBuffer(size < 0 ? 0 : $ed66258726130538$var$checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ $ed66258726130538$var$Buffer.allocUnsafe = function(size) {
    return $ed66258726130538$var$allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ $ed66258726130538$var$Buffer.allocUnsafeSlow = function(size) {
    return $ed66258726130538$var$allocUnsafe(size);
};
function $ed66258726130538$var$fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!$ed66258726130538$var$Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = $ed66258726130538$var$byteLength(string, encoding) | 0;
    var buf = $ed66258726130538$var$createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function $ed66258726130538$var$fromArrayLike(array) {
    var length = array.length < 0 ? 0 : $ed66258726130538$var$checked(array.length) | 0;
    var buf = $ed66258726130538$var$createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function $ed66258726130538$var$fromArrayView(arrayView) {
    if ($ed66258726130538$var$isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return $ed66258726130538$var$fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return $ed66258726130538$var$fromArrayLike(arrayView);
}
function $ed66258726130538$var$fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, $ed66258726130538$var$Buffer.prototype);
    return buf;
}
function $ed66258726130538$var$fromObject(obj) {
    if ($ed66258726130538$var$Buffer.isBuffer(obj)) {
        var len = $ed66258726130538$var$checked(obj.length) | 0;
        var buf = $ed66258726130538$var$createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || $ed66258726130538$var$numberIsNaN(obj.length)) return $ed66258726130538$var$createBuffer(0);
        return $ed66258726130538$var$fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return $ed66258726130538$var$fromArrayLike(obj.data);
}
function $ed66258726130538$var$checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= $ed66258726130538$var$K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + $ed66258726130538$var$K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function $ed66258726130538$var$SlowBuffer(length) {
    if (+length != length) length = 0;
    return $ed66258726130538$var$Buffer.alloc(+length);
}
$ed66258726130538$var$Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== $ed66258726130538$var$Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
$ed66258726130538$var$Buffer.compare = function compare(a, b) {
    if ($ed66258726130538$var$isInstance(a, Uint8Array)) a = $ed66258726130538$var$Buffer.from(a, a.offset, a.byteLength);
    if ($ed66258726130538$var$isInstance(b, Uint8Array)) b = $ed66258726130538$var$Buffer.from(b, b.offset, b.byteLength);
    if (!$ed66258726130538$var$Buffer.isBuffer(a) || !$ed66258726130538$var$Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
$ed66258726130538$var$Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
$ed66258726130538$var$Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return $ed66258726130538$var$Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = $ed66258726130538$var$Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if ($ed66258726130538$var$isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) $ed66258726130538$var$Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!$ed66258726130538$var$Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function $ed66258726130538$var$byteLength(string, encoding) {
    if ($ed66258726130538$var$Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || $ed66258726130538$var$isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + (typeof string === "undefined" ? "undefined" : $dea54b42f8a1b096$export$2e2bcd8739ae039(string)));
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return $ed66258726130538$var$utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return $ed66258726130538$var$base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : $ed66258726130538$var$utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
$ed66258726130538$var$Buffer.byteLength = $ed66258726130538$var$byteLength;
function $ed66258726130538$var$slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return $ed66258726130538$var$hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return $ed66258726130538$var$utf8Slice(this, start, end);
        case 'ascii':
            return $ed66258726130538$var$asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return $ed66258726130538$var$latin1Slice(this, start, end);
        case 'base64':
            return $ed66258726130538$var$base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return $ed66258726130538$var$utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
$ed66258726130538$var$Buffer.prototype._isBuffer = true;
function $ed66258726130538$var$swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
$ed66258726130538$var$Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)$ed66258726130538$var$swap(this, i, i + 1);
    return this;
};
$ed66258726130538$var$Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        $ed66258726130538$var$swap(this, i, i + 3);
        $ed66258726130538$var$swap(this, i + 1, i + 2);
    }
    return this;
};
$ed66258726130538$var$Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        $ed66258726130538$var$swap(this, i, i + 7);
        $ed66258726130538$var$swap(this, i + 1, i + 6);
        $ed66258726130538$var$swap(this, i + 2, i + 5);
        $ed66258726130538$var$swap(this, i + 3, i + 4);
    }
    return this;
};
$ed66258726130538$var$Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return $ed66258726130538$var$utf8Slice(this, 0, length);
    return $ed66258726130538$var$slowToString.apply(this, arguments);
};
$ed66258726130538$var$Buffer.prototype.toLocaleString = $ed66258726130538$var$Buffer.prototype.toString;
$ed66258726130538$var$Buffer.prototype.equals = function equals(b) {
    if (!$ed66258726130538$var$Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return $ed66258726130538$var$Buffer.compare(this, b) === 0;
};
$ed66258726130538$var$Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = $ed66258726130538$export$f99ded8fe4b79145;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if ($ed66258726130538$var$customInspectSymbol) $ed66258726130538$var$Buffer.prototype[$ed66258726130538$var$customInspectSymbol] = $ed66258726130538$var$Buffer.prototype.inspect;
$ed66258726130538$var$Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if ($ed66258726130538$var$isInstance(target, Uint8Array)) target = $ed66258726130538$var$Buffer.from(target, target.offset, target.byteLength);
    if (!$ed66258726130538$var$Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + (typeof target === "undefined" ? "undefined" : $dea54b42f8a1b096$export$2e2bcd8739ae039(target)));
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function $ed66258726130538$var$bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if ($ed66258726130538$var$numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = $ed66258726130538$var$Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if ($ed66258726130538$var$Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return $ed66258726130538$var$arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255 // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return $ed66258726130538$var$arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function $ed66258726130538$var$arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i1;
    if (dir) {
        var foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
$ed66258726130538$var$Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
$ed66258726130538$var$Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return $ed66258726130538$var$bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
$ed66258726130538$var$Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return $ed66258726130538$var$bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function $ed66258726130538$var$hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if ($ed66258726130538$var$numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function $ed66258726130538$var$utf8Write(buf, string, offset, length) {
    return $ed66258726130538$var$blitBuffer($ed66258726130538$var$utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function $ed66258726130538$var$asciiWrite(buf, string, offset, length) {
    return $ed66258726130538$var$blitBuffer($ed66258726130538$var$asciiToBytes(string), buf, offset, length);
}
function $ed66258726130538$var$base64Write(buf, string, offset, length) {
    return $ed66258726130538$var$blitBuffer($ed66258726130538$var$base64ToBytes(string), buf, offset, length);
}
function $ed66258726130538$var$ucs2Write(buf, string, offset, length) {
    return $ed66258726130538$var$blitBuffer($ed66258726130538$var$utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
$ed66258726130538$var$Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return $ed66258726130538$var$hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return $ed66258726130538$var$utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return $ed66258726130538$var$asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return $ed66258726130538$var$base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return $ed66258726130538$var$ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
$ed66258726130538$var$Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function $ed66258726130538$var$base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return $8b575575efedc441$export$6100ba28696e12de(buf);
    else return $8b575575efedc441$export$6100ba28696e12de(buf.slice(start, end));
}
function $ed66258726130538$var$utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return $ed66258726130538$var$decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var $ed66258726130538$var$MAX_ARGUMENTS_LENGTH = 4096;
function $ed66258726130538$var$decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= $ed66258726130538$var$MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += $ed66258726130538$var$MAX_ARGUMENTS_LENGTH));
    return res;
}
function $ed66258726130538$var$asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function $ed66258726130538$var$latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function $ed66258726130538$var$hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += $ed66258726130538$var$hexSliceLookupTable[buf[i]];
    return out;
}
function $ed66258726130538$var$utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
$ed66258726130538$var$Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, $ed66258726130538$var$Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function $ed66258726130538$var$checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
$ed66258726130538$var$Buffer.prototype.readUintLE = $ed66258726130538$var$Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
$ed66258726130538$var$Buffer.prototype.readUintBE = $ed66258726130538$var$Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 256))val += this[offset + --byteLength] * mul;
    return val;
};
$ed66258726130538$var$Buffer.prototype.readUint8 = $ed66258726130538$var$Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, 1, this.length);
    return this[offset];
};
$ed66258726130538$var$Buffer.prototype.readUint16LE = $ed66258726130538$var$Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
$ed66258726130538$var$Buffer.prototype.readUint16BE = $ed66258726130538$var$Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
$ed66258726130538$var$Buffer.prototype.readUint32LE = $ed66258726130538$var$Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
$ed66258726130538$var$Buffer.prototype.readUint32BE = $ed66258726130538$var$Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
$ed66258726130538$var$Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
$ed66258726130538$var$Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
$ed66258726130538$var$Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
$ed66258726130538$var$Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
$ed66258726130538$var$Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
$ed66258726130538$var$Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
$ed66258726130538$var$Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
$ed66258726130538$var$Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, 4, this.length);
    return $da83dda8d9adee5e$export$aafa59e2e03f2942(this, offset, true, 23, 4);
};
$ed66258726130538$var$Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, 4, this.length);
    return $da83dda8d9adee5e$export$aafa59e2e03f2942(this, offset, false, 23, 4);
};
$ed66258726130538$var$Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, 8, this.length);
    return $da83dda8d9adee5e$export$aafa59e2e03f2942(this, offset, true, 52, 8);
};
$ed66258726130538$var$Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkOffset(offset, 8, this.length);
    return $da83dda8d9adee5e$export$aafa59e2e03f2942(this, offset, false, 52, 8);
};
function $ed66258726130538$var$checkInt(buf, value, offset, ext, max, min) {
    if (!$ed66258726130538$var$Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
$ed66258726130538$var$Buffer.prototype.writeUintLE = $ed66258726130538$var$Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        $ed66258726130538$var$checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 255;
    while(++i < byteLength && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength;
};
$ed66258726130538$var$Buffer.prototype.writeUintBE = $ed66258726130538$var$Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        $ed66258726130538$var$checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength;
};
$ed66258726130538$var$Buffer.prototype.writeUint8 = $ed66258726130538$var$Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
$ed66258726130538$var$Buffer.prototype.writeUint16LE = $ed66258726130538$var$Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
$ed66258726130538$var$Buffer.prototype.writeUint16BE = $ed66258726130538$var$Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
$ed66258726130538$var$Buffer.prototype.writeUint32LE = $ed66258726130538$var$Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
$ed66258726130538$var$Buffer.prototype.writeUint32BE = $ed66258726130538$var$Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
$ed66258726130538$var$Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        $ed66258726130538$var$checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 255;
    while(++i < byteLength && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength;
};
$ed66258726130538$var$Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        $ed66258726130538$var$checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 255;
    while(--i >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength;
};
$ed66258726130538$var$Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
$ed66258726130538$var$Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
$ed66258726130538$var$Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
$ed66258726130538$var$Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
$ed66258726130538$var$Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function $ed66258726130538$var$checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function $ed66258726130538$var$writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkIEEE754(buf, value, offset, 4, 340282346638528860000000000000000000000, -340282346638528860000000000000000000000);
    $da83dda8d9adee5e$export$68d8715fc104d294(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
$ed66258726130538$var$Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return $ed66258726130538$var$writeFloat(this, value, offset, true, noAssert);
};
$ed66258726130538$var$Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return $ed66258726130538$var$writeFloat(this, value, offset, false, noAssert);
};
function $ed66258726130538$var$writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $ed66258726130538$var$checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    $da83dda8d9adee5e$export$68d8715fc104d294(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
$ed66258726130538$var$Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return $ed66258726130538$var$writeDouble(this, value, offset, true, noAssert);
};
$ed66258726130538$var$Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return $ed66258726130538$var$writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
$ed66258726130538$var$Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!$ed66258726130538$var$Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
$ed66258726130538$var$Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !$ed66258726130538$var$Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = $ed66258726130538$var$Buffer.isBuffer(val) ? val : $ed66258726130538$var$Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var $ed66258726130538$var$INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function $ed66258726130538$var$base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace($ed66258726130538$var$INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function $ed66258726130538$var$utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function $ed66258726130538$var$asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function $ed66258726130538$var$utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function $ed66258726130538$var$base64ToBytes(str) {
    return $8b575575efedc441$export$d622b2ad8d90c771($ed66258726130538$var$base64clean(str));
}
function $ed66258726130538$var$blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function $ed66258726130538$var$isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function $ed66258726130538$var$numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var $ed66258726130538$var$hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();


var $7a3e4d02bb61b372$require$Buffer = $ed66258726130538$export$a143d493d941bafc;
var $7a3e4d02bb61b372$var$clone = function() {
    /**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
*/ function clone(parent1, circular, depth1, prototype) {
        var filter;
        if (typeof circular === 'object') {
            depth1 = circular.depth;
            prototype = circular.prototype;
            filter = circular.filter;
            circular = circular.circular;
        }
        // maintain two arrays for circular references, where corresponding parents
        // and children have the same index
        var allParents = [];
        var allChildren = [];
        var useBuffer = typeof $7a3e4d02bb61b372$require$Buffer != 'undefined';
        if (typeof circular == 'undefined') circular = true;
        if (typeof depth1 == 'undefined') depth1 = Infinity;
        // recurse this function so we don't reset allParents and allChildren
        function _clone(parent, depth) {
            // cloning null always returns null
            if (parent === null) return null;
            if (depth == 0) return parent;
            var child;
            var proto;
            if (typeof parent != 'object') return parent;
            if (clone.__isArray(parent)) child = [];
            else if (clone.__isRegExp(parent)) {
                child = new RegExp(parent.source, __getRegExpFlags(parent));
                if (parent.lastIndex) child.lastIndex = parent.lastIndex;
            } else if (clone.__isDate(parent)) child = new Date(parent.getTime());
            else if (useBuffer && $7a3e4d02bb61b372$require$Buffer.isBuffer(parent)) {
                if ($7a3e4d02bb61b372$require$Buffer.allocUnsafe) // Node.js >= 4.5.0
                child = $7a3e4d02bb61b372$require$Buffer.allocUnsafe(parent.length);
                else // Older Node.js versions
                child = new $7a3e4d02bb61b372$require$Buffer(parent.length);
                parent.copy(child);
                return child;
            } else if (typeof prototype == 'undefined') {
                proto = Object.getPrototypeOf(parent);
                child = Object.create(proto);
            } else {
                child = Object.create(prototype);
                proto = prototype;
            }
            if (circular) {
                var index = allParents.indexOf(parent);
                if (index != -1) return allChildren[index];
                allParents.push(parent);
                allChildren.push(child);
            }
            for(var i in parent){
                var attrs;
                if (proto) attrs = Object.getOwnPropertyDescriptor(proto, i);
                if (attrs && attrs.set == null) continue;
                child[i] = _clone(parent[i], depth - 1);
            }
            return child;
        }
        return _clone(parent1, depth1);
    }
    /**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */ clone.clonePrototype = function clonePrototype(parent) {
        if (parent === null) return null;
        var c = function c() {
        };
        c.prototype = parent;
        return new c();
    };
    // private utility functions
    function __objToStr(o) {
        return Object.prototype.toString.call(o);
    }
    clone.__objToStr = __objToStr;
    function __isDate(o) {
        return typeof o === 'object' && __objToStr(o) === '[object Date]';
    }
    clone.__isDate = __isDate;
    function __isArray(o) {
        return typeof o === 'object' && __objToStr(o) === '[object Array]';
    }
    clone.__isArray = __isArray;
    function __isRegExp(o) {
        return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
    }
    clone.__isRegExp = __isRegExp;
    function __getRegExpFlags(re) {
        var flags = '';
        if (re.global) flags += 'g';
        if (re.ignoreCase) flags += 'i';
        if (re.multiline) flags += 'm';
        return flags;
    }
    clone.__getRegExpFlags = __getRegExpFlags;
    return clone;
}();
if ("object" === 'object' && $7a3e4d02bb61b372$exports) $7a3e4d02bb61b372$exports = $7a3e4d02bb61b372$var$clone;


$a502ba5c8652aac8$exports = function(options, defaults) {
    options = options || {
    };
    Object.keys(defaults).forEach(function(key) {
        if (typeof options[key] === 'undefined') options[key] = $7a3e4d02bb61b372$exports(defaults[key]);
    });
    return options;
};


var $cdd6c24f3206ce14$exports = {};
$cdd6c24f3206ce14$exports = [
    [
        768,
        879
    ],
    [
        1155,
        1158
    ],
    [
        1160,
        1161
    ],
    [
        1425,
        1469
    ],
    [
        1471,
        1471
    ],
    [
        1473,
        1474
    ],
    [
        1476,
        1477
    ],
    [
        1479,
        1479
    ],
    [
        1536,
        1539
    ],
    [
        1552,
        1557
    ],
    [
        1611,
        1630
    ],
    [
        1648,
        1648
    ],
    [
        1750,
        1764
    ],
    [
        1767,
        1768
    ],
    [
        1770,
        1773
    ],
    [
        1807,
        1807
    ],
    [
        1809,
        1809
    ],
    [
        1840,
        1866
    ],
    [
        1958,
        1968
    ],
    [
        2027,
        2035
    ],
    [
        2305,
        2306
    ],
    [
        2364,
        2364
    ],
    [
        2369,
        2376
    ],
    [
        2381,
        2381
    ],
    [
        2385,
        2388
    ],
    [
        2402,
        2403
    ],
    [
        2433,
        2433
    ],
    [
        2492,
        2492
    ],
    [
        2497,
        2500
    ],
    [
        2509,
        2509
    ],
    [
        2530,
        2531
    ],
    [
        2561,
        2562
    ],
    [
        2620,
        2620
    ],
    [
        2625,
        2626
    ],
    [
        2631,
        2632
    ],
    [
        2635,
        2637
    ],
    [
        2672,
        2673
    ],
    [
        2689,
        2690
    ],
    [
        2748,
        2748
    ],
    [
        2753,
        2757
    ],
    [
        2759,
        2760
    ],
    [
        2765,
        2765
    ],
    [
        2786,
        2787
    ],
    [
        2817,
        2817
    ],
    [
        2876,
        2876
    ],
    [
        2879,
        2879
    ],
    [
        2881,
        2883
    ],
    [
        2893,
        2893
    ],
    [
        2902,
        2902
    ],
    [
        2946,
        2946
    ],
    [
        3008,
        3008
    ],
    [
        3021,
        3021
    ],
    [
        3134,
        3136
    ],
    [
        3142,
        3144
    ],
    [
        3146,
        3149
    ],
    [
        3157,
        3158
    ],
    [
        3260,
        3260
    ],
    [
        3263,
        3263
    ],
    [
        3270,
        3270
    ],
    [
        3276,
        3277
    ],
    [
        3298,
        3299
    ],
    [
        3393,
        3395
    ],
    [
        3405,
        3405
    ],
    [
        3530,
        3530
    ],
    [
        3538,
        3540
    ],
    [
        3542,
        3542
    ],
    [
        3633,
        3633
    ],
    [
        3636,
        3642
    ],
    [
        3655,
        3662
    ],
    [
        3761,
        3761
    ],
    [
        3764,
        3769
    ],
    [
        3771,
        3772
    ],
    [
        3784,
        3789
    ],
    [
        3864,
        3865
    ],
    [
        3893,
        3893
    ],
    [
        3895,
        3895
    ],
    [
        3897,
        3897
    ],
    [
        3953,
        3966
    ],
    [
        3968,
        3972
    ],
    [
        3974,
        3975
    ],
    [
        3984,
        3991
    ],
    [
        3993,
        4028
    ],
    [
        4038,
        4038
    ],
    [
        4141,
        4144
    ],
    [
        4146,
        4146
    ],
    [
        4150,
        4151
    ],
    [
        4153,
        4153
    ],
    [
        4184,
        4185
    ],
    [
        4448,
        4607
    ],
    [
        4959,
        4959
    ],
    [
        5906,
        5908
    ],
    [
        5938,
        5940
    ],
    [
        5970,
        5971
    ],
    [
        6002,
        6003
    ],
    [
        6068,
        6069
    ],
    [
        6071,
        6077
    ],
    [
        6086,
        6086
    ],
    [
        6089,
        6099
    ],
    [
        6109,
        6109
    ],
    [
        6155,
        6157
    ],
    [
        6313,
        6313
    ],
    [
        6432,
        6434
    ],
    [
        6439,
        6440
    ],
    [
        6450,
        6450
    ],
    [
        6457,
        6459
    ],
    [
        6679,
        6680
    ],
    [
        6912,
        6915
    ],
    [
        6964,
        6964
    ],
    [
        6966,
        6970
    ],
    [
        6972,
        6972
    ],
    [
        6978,
        6978
    ],
    [
        7019,
        7027
    ],
    [
        7616,
        7626
    ],
    [
        7678,
        7679
    ],
    [
        8203,
        8207
    ],
    [
        8234,
        8238
    ],
    [
        8288,
        8291
    ],
    [
        8298,
        8303
    ],
    [
        8400,
        8431
    ],
    [
        12330,
        12335
    ],
    [
        12441,
        12442
    ],
    [
        43014,
        43014
    ],
    [
        43019,
        43019
    ],
    [
        43045,
        43046
    ],
    [
        64286,
        64286
    ],
    [
        65024,
        65039
    ],
    [
        65056,
        65059
    ],
    [
        65279,
        65279
    ],
    [
        65529,
        65531
    ],
    [
        68097,
        68099
    ],
    [
        68101,
        68102
    ],
    [
        68108,
        68111
    ],
    [
        68152,
        68154
    ],
    [
        68159,
        68159
    ],
    [
        119143,
        119145
    ],
    [
        119155,
        119170
    ],
    [
        119173,
        119179
    ],
    [
        119210,
        119213
    ],
    [
        119362,
        119364
    ],
    [
        917505,
        917505
    ],
    [
        917536,
        917631
    ],
    [
        917760,
        917999
    ]
];


var $3e6e7e3309708fef$var$DEFAULTS = {
    nul: 0,
    control: 0
};
$3e6e7e3309708fef$exports = function wcwidth(str) {
    return $3e6e7e3309708fef$var$wcswidth(str, $3e6e7e3309708fef$var$DEFAULTS);
};
$3e6e7e3309708fef$exports.config = function(opts) {
    opts = $a502ba5c8652aac8$exports(opts || {
    }, $3e6e7e3309708fef$var$DEFAULTS);
    return function wcwidth(str) {
        return $3e6e7e3309708fef$var$wcswidth(str, opts);
    };
};
/*
 *  The following functions define the column width of an ISO 10646
 *  character as follows:
 *  - The null character (U+0000) has a column width of 0.
 *  - Other C0/C1 control characters and DEL will lead to a return value
 *    of -1.
 *  - Non-spacing and enclosing combining characters (general category
 *    code Mn or Me in the
 *    Unicode database) have a column width of 0.
 *  - SOFT HYPHEN (U+00AD) has a column width of 1.
 *  - Other format characters (general category code Cf in the Unicode
 *    database) and ZERO WIDTH
 *    SPACE (U+200B) have a column width of 0.
 *  - Hangul Jamo medial vowels and final consonants (U+1160-U+11FF)
 *    have a column width of 0.
 *  - Spacing characters in the East Asian Wide (W) or East Asian
 *    Full-width (F) category as
 *    defined in Unicode Technical Report #11 have a column width of 2.
 *  - All remaining characters (including all printable ISO 8859-1 and
 *    WGL4 characters, Unicode control characters, etc.) have a column
 *    width of 1.
 *  This implementation assumes that characters are encoded in ISO 10646.
*/ function $3e6e7e3309708fef$var$wcswidth(str, opts) {
    if (typeof str !== 'string') return $3e6e7e3309708fef$var$wcwidth(str, opts);
    var s = 0;
    for(var i = 0; i < str.length; i++){
        var n = $3e6e7e3309708fef$var$wcwidth(str.charCodeAt(i), opts);
        if (n < 0) return -1;
        s += n;
    }
    return s;
}
function $3e6e7e3309708fef$var$wcwidth(ucs, opts) {
    // test for 8-bit control characters
    if (ucs === 0) return opts.nul;
    if (ucs < 32 || ucs >= 127 && ucs < 160) return opts.control;
    // binary search in table of non-spacing characters
    if ($3e6e7e3309708fef$var$bisearch(ucs)) return 0;
    // if we arrive here, ucs is not a combining or C0/C1 control character
    return 1 + (ucs >= 4352 && (ucs <= 4447 || ucs == 9001 || ucs == 9002 || ucs >= 11904 && ucs <= 42191 && ucs != 12351 || ucs >= 44032 && ucs <= 55203 || ucs >= 63744 && ucs <= 64255 || ucs >= 65040 && ucs <= 65049 || ucs >= 65072 && ucs <= 65135 || ucs >= 65280 && ucs <= 65376 || ucs >= 65504 && ucs <= 65510 || ucs >= 131072 && ucs <= 196605 || ucs >= 196608 && ucs <= 262141));
}
function $3e6e7e3309708fef$var$bisearch(ucs) {
    var min = 0;
    var max = $cdd6c24f3206ce14$exports.length - 1;
    var mid;
    if (ucs < $cdd6c24f3206ce14$exports[0][0] || ucs > $cdd6c24f3206ce14$exports[max][1]) return false;
    while(max >= min){
        mid = Math.floor((min + max) / 2);
        if (ucs > $cdd6c24f3206ce14$exports[mid][1]) min = mid + 1;
        else if (ucs < $cdd6c24f3206ce14$exports[mid][0]) max = mid - 1;
        else return true;
    }
    return false;
}


function $f1fb3ddb8f166f82$export$2e2bcd8739ae039(str) {
    return (/*@__PURE__*/$parcel$interopDefault($3e6e7e3309708fef$exports))($a681d09a532ba963$export$2e2bcd8739ae039(str));
}



"use strict";
/**
 * repeat string `str` up to total length of `len`
 *
 * @param String str string to repeat
 * @param Number len total length of output string
 */ function $edf9623364882673$var$repeatString(str, len) {
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
 */ function $edf9623364882673$var$padRight(str, max, chr) {
    str = str != null ? str : '';
    str = String(str);
    var length = max - $f1fb3ddb8f166f82$export$2e2bcd8739ae039(str);
    if (length <= 0) return str;
    return str + $edf9623364882673$var$repeatString(chr || ' ', length);
}
/**
 * Pad `str` up to total length `max` with `chr`.
 * If `str` is longer than `max`, padCenter will return `str` unaltered.
 *
 * @param String str string to pad
 * @param Number max total length of output string
 * @param String chr optional. Character to pad with. default: ' '
 * @return String padded str
 */ function $edf9623364882673$var$padCenter(str, max, chr) {
    str = str != null ? str : '';
    str = String(str);
    var length = max - $f1fb3ddb8f166f82$export$2e2bcd8739ae039(str);
    if (length <= 0) return str;
    var lengthLeft = Math.floor(length / 2);
    var lengthRight = length - lengthLeft;
    return $edf9623364882673$var$repeatString(chr || ' ', lengthLeft) + str + $edf9623364882673$var$repeatString(chr || ' ', lengthRight);
}
/**
 * Pad `str` up to total length `max` with `chr`, on the left.
 * If `str` is longer than `max`, padRight will return `str` unaltered.
 *
 * @param String str string to pad
 * @param Number max total length of output string
 * @param String chr optional. Character to pad with. default: ' '
 * @return String padded str
 */ function $edf9623364882673$var$padLeft(str, max, chr) {
    str = str != null ? str : '';
    str = String(str);
    var length = max - $f1fb3ddb8f166f82$export$2e2bcd8739ae039(str);
    if (length <= 0) return str;
    return $edf9623364882673$var$repeatString(chr || ' ', length) + str;
}
/**
 * Split a String `str` into lines of maxiumum length `max`.
 * Splits on word boundaries. Preserves existing new lines.
 *
 * @param String str string to split
 * @param Number max length of each line
 * @return Array Array containing lines.
 */ function $edf9623364882673$var$splitIntoLines(str1, max1) {
    function _splitIntoLines(str, max) {
        return str.trim().split(' ').reduce(function(lines, word) {
            var line = lines[lines.length - 1];
            if (line && $f1fb3ddb8f166f82$export$2e2bcd8739ae039(line.join(' ')) + $f1fb3ddb8f166f82$export$2e2bcd8739ae039(word) < max) lines[lines.length - 1].push(word) // add to line
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
 */ function $edf9623364882673$var$splitLongWords(str, max, truncationChar) {
    str = str.trim();
    var result = [];
    var words = str.split(' ');
    var remainder = '';
    var truncationWidth = $f1fb3ddb8f166f82$export$2e2bcd8739ae039(truncationChar);
    while(remainder || words.length){
        if (remainder) {
            var word = remainder;
            remainder = '';
        } else var word = words.shift();
        if ($f1fb3ddb8f166f82$export$2e2bcd8739ae039(word) > max) {
            // slice is based on length no wcwidth
            var i = 0;
            var wwidth = 0;
            var limit = max - truncationWidth;
            while(i < word.length){
                var w = $f1fb3ddb8f166f82$export$2e2bcd8739ae039(word.charAt(i));
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
 */ function $edf9623364882673$var$truncateString(str, max) {
    str = str != null ? str : '';
    str = String(str);
    if (max == Infinity) return str;
    var i = 0;
    var wwidth = 0;
    while(i < str.length){
        var w = $f1fb3ddb8f166f82$export$2e2bcd8739ae039(str.charAt(i));
        if (w + wwidth > max) break;
        wwidth += w;
        ++i;
    }
    return str.slice(0, i);
}
/**
 * Exports
 */ var $edf9623364882673$export$7e24a29324041c48 = $edf9623364882673$var$padRight;
var $edf9623364882673$export$7fd96f818dd6e623 = $edf9623364882673$var$padCenter;
var $edf9623364882673$export$bc3bea8325045070 = $edf9623364882673$var$padLeft;
var $edf9623364882673$export$bbcc909de88cc4be = $edf9623364882673$var$splitIntoLines;
var $edf9623364882673$export$68df2348d77e9205 = $edf9623364882673$var$splitLongWords;
var $edf9623364882673$export$88f68187db5ede92 = $edf9623364882673$var$truncateString;


"use strict";
var $dba075c75902271f$exports = {};
// shim for using process in browser
var $dba075c75902271f$var$process = $dba075c75902271f$exports = {
};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var $dba075c75902271f$var$cachedSetTimeout;
var $dba075c75902271f$var$cachedClearTimeout;
function $dba075c75902271f$var$defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function $dba075c75902271f$var$defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') $dba075c75902271f$var$cachedSetTimeout = setTimeout;
        else $dba075c75902271f$var$cachedSetTimeout = $dba075c75902271f$var$defaultSetTimout;
    } catch (e) {
        $dba075c75902271f$var$cachedSetTimeout = $dba075c75902271f$var$defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') $dba075c75902271f$var$cachedClearTimeout = clearTimeout;
        else $dba075c75902271f$var$cachedClearTimeout = $dba075c75902271f$var$defaultClearTimeout;
    } catch (e1) {
        $dba075c75902271f$var$cachedClearTimeout = $dba075c75902271f$var$defaultClearTimeout;
    }
})();
function $dba075c75902271f$var$runTimeout(fun) {
    if ($dba075c75902271f$var$cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if (($dba075c75902271f$var$cachedSetTimeout === $dba075c75902271f$var$defaultSetTimout || !$dba075c75902271f$var$cachedSetTimeout) && setTimeout) {
        $dba075c75902271f$var$cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $dba075c75902271f$var$cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return $dba075c75902271f$var$cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return $dba075c75902271f$var$cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function $dba075c75902271f$var$runClearTimeout(marker) {
    if ($dba075c75902271f$var$cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if (($dba075c75902271f$var$cachedClearTimeout === $dba075c75902271f$var$defaultClearTimeout || !$dba075c75902271f$var$cachedClearTimeout) && clearTimeout) {
        $dba075c75902271f$var$cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return $dba075c75902271f$var$cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return $dba075c75902271f$var$cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return $dba075c75902271f$var$cachedClearTimeout.call(this, marker);
        }
    }
}
var $dba075c75902271f$var$queue = [];
var $dba075c75902271f$var$draining = false;
var $dba075c75902271f$var$currentQueue;
var $dba075c75902271f$var$queueIndex = -1;
function $dba075c75902271f$var$cleanUpNextTick() {
    if (!$dba075c75902271f$var$draining || !$dba075c75902271f$var$currentQueue) return;
    $dba075c75902271f$var$draining = false;
    if ($dba075c75902271f$var$currentQueue.length) $dba075c75902271f$var$queue = $dba075c75902271f$var$currentQueue.concat($dba075c75902271f$var$queue);
    else $dba075c75902271f$var$queueIndex = -1;
    if ($dba075c75902271f$var$queue.length) $dba075c75902271f$var$drainQueue();
}
function $dba075c75902271f$var$drainQueue() {
    if ($dba075c75902271f$var$draining) return;
    var timeout = $dba075c75902271f$var$runTimeout($dba075c75902271f$var$cleanUpNextTick);
    $dba075c75902271f$var$draining = true;
    var len = $dba075c75902271f$var$queue.length;
    while(len){
        $dba075c75902271f$var$currentQueue = $dba075c75902271f$var$queue;
        $dba075c75902271f$var$queue = [];
        while(++$dba075c75902271f$var$queueIndex < len)if ($dba075c75902271f$var$currentQueue) $dba075c75902271f$var$currentQueue[$dba075c75902271f$var$queueIndex].run();
        $dba075c75902271f$var$queueIndex = -1;
        len = $dba075c75902271f$var$queue.length;
    }
    $dba075c75902271f$var$currentQueue = null;
    $dba075c75902271f$var$draining = false;
    $dba075c75902271f$var$runClearTimeout(timeout);
}
$dba075c75902271f$var$process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    $dba075c75902271f$var$queue.push(new $dba075c75902271f$var$Item(fun, args));
    if ($dba075c75902271f$var$queue.length === 1 && !$dba075c75902271f$var$draining) $dba075c75902271f$var$runTimeout($dba075c75902271f$var$drainQueue);
};
// v8 likes predictible objects
function $dba075c75902271f$var$Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
$dba075c75902271f$var$Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
$dba075c75902271f$var$process.title = 'browser';
$dba075c75902271f$var$process.browser = true;
$dba075c75902271f$var$process.env = {
};
$dba075c75902271f$var$process.argv = [];
$dba075c75902271f$var$process.version = ''; // empty string to avoid regexp issues
$dba075c75902271f$var$process.versions = {
};
function $dba075c75902271f$var$noop() {
}
$dba075c75902271f$var$process.on = $dba075c75902271f$var$noop;
$dba075c75902271f$var$process.addListener = $dba075c75902271f$var$noop;
$dba075c75902271f$var$process.once = $dba075c75902271f$var$noop;
$dba075c75902271f$var$process.off = $dba075c75902271f$var$noop;
$dba075c75902271f$var$process.removeListener = $dba075c75902271f$var$noop;
$dba075c75902271f$var$process.removeAllListeners = $dba075c75902271f$var$noop;
$dba075c75902271f$var$process.emit = $dba075c75902271f$var$noop;
$dba075c75902271f$var$process.prependListener = $dba075c75902271f$var$noop;
$dba075c75902271f$var$process.prependOnceListener = $dba075c75902271f$var$noop;
$dba075c75902271f$var$process.listeners = function(name) {
    return [];
};
$dba075c75902271f$var$process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
$dba075c75902271f$var$process.cwd = function() {
    return '/';
};
$dba075c75902271f$var$process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
$dba075c75902271f$var$process.umask = function() {
    return 0;
};


var $02efb75e88113d24$var$DEFAULT_HEADING_TRANSFORM = function(key) {
    return key.toUpperCase();
};
var $02efb75e88113d24$var$DEFAULT_DATA_TRANSFORM = function(cell, column, index) {
    return cell;
};
var $02efb75e88113d24$var$DEFAULTS = Object.freeze({
    maxWidth: Infinity,
    minWidth: 0,
    columnSplitter: ' ',
    truncate: false,
    truncateMarker: '…',
    preserveNewLines: false,
    paddingChr: ' ',
    showHeaders: true,
    headingTransform: $02efb75e88113d24$var$DEFAULT_HEADING_TRANSFORM,
    dataTransform: $02efb75e88113d24$var$DEFAULT_DATA_TRANSFORM
});
function $02efb75e88113d24$export$2e2bcd8739ae039(items) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    };
    var columnConfigs = options.config || {
    };
    delete options.config // remove config so doesn't appear on every column.
    ;
    var maxLineWidth = options.maxLineWidth || Infinity;
    if (maxLineWidth === 'auto') maxLineWidth = $dba075c75902271f$exports.stdout.columns || Infinity;
    delete options.maxLineWidth // this is a line control option, don't pass it to column
    ;
    // Option defaults inheritance:
    // options.config[columnName] => options => DEFAULTS
    options = $02efb75e88113d24$var$mixin({
    }, $02efb75e88113d24$var$DEFAULTS, options);
    options.config = options.config || Object.create(null);
    options.spacing = options.spacing || '\n' // probably useless
    ;
    options.preserveNewLines = !!options.preserveNewLines;
    options.showHeaders = !!options.showHeaders;
    options.columns = options.columns || options.include // alias include/columns, prefer columns if supplied
    ;
    var columnNames = options.columns || [] // optional user-supplied columns to include
    ;
    items = $02efb75e88113d24$var$toArray(items, columnNames);
    // if not suppled column names, automatically determine columns from data keys
    if (!columnNames.length) items.forEach(function(item) {
        for(var columnName in item)if (columnNames.indexOf(columnName) === -1) columnNames.push(columnName);
    });
    // initialize column defaults (each column inherits from options.config)
    var columns1 = columnNames.reduce(function(columns, columnName) {
        var column = Object.create(options);
        columns[columnName] = $02efb75e88113d24$var$mixin(column, columnConfigs[columnName]);
        return columns;
    }, Object.create(null));
    // sanitize column settings
    columnNames.forEach(function(columnName) {
        var column = columns1[columnName];
        column.name = columnName;
        column.maxWidth = Math.ceil(column.maxWidth);
        column.minWidth = Math.ceil(column.minWidth);
        column.truncate = !!column.truncate;
        column.align = column.align || 'left';
    });
    // sanitize data
    items = items.map(function(item) {
        var result = Object.create(null);
        columnNames.forEach(function(columnName) {
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
    columnNames.forEach(function(columnName) {
        var column = columns1[columnName];
        items = items.map(function(item, index) {
            var col = Object.create(column);
            item[columnName] = column.dataTransform(item[columnName], col, index);
            var changedKeys = Object.keys(col);
            // disable default heading transform if we wrote to column.name
            if (changedKeys.indexOf('name') !== -1) {
                if (column.headingTransform !== $02efb75e88113d24$var$DEFAULT_HEADING_TRANSFORM) return;
                column.headingTransform = function(heading) {
                    return heading;
                };
            }
            changedKeys.forEach(function(key) {
                return column[key] = col[key];
            });
            return item;
        });
    });
    // add headers
    var headers = {
    };
    if (options.showHeaders) {
        columnNames.forEach(function(columnName) {
            var column = columns1[columnName];
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
    columnNames.forEach(function(columnName) {
        var column = columns1[columnName];
        column.width = items.map(function(item) {
            return item[columnName];
        }).reduce(function(min, cur) {
            // if already at maxWidth don't bother testing
            if (min >= column.maxWidth) return min;
            return Math.max(min, Math.min(column.maxWidth, Math.max(column.minWidth, $f1fb3ddb8f166f82$export$2e2bcd8739ae039(cur))));
        }, 0);
    });
    // split long words so they can break onto multiple lines
    columnNames.forEach(function(columnName) {
        var column = columns1[columnName];
        items = items.map(function(item) {
            item[columnName] = $edf9623364882673$export$68df2348d77e9205(item[columnName], column.width, column.truncateMarker);
            return item;
        });
    });
    // wrap long lines. each item is now an array of lines.
    columnNames.forEach(function(columnName) {
        var column = columns1[columnName];
        items = items.map(function(item, index) {
            var cell = item[columnName];
            item[columnName] = $edf9623364882673$export$bbcc909de88cc4be(cell, column.width);
            // if truncating required, only include first line + add truncation char
            if (column.truncate && item[columnName].length > 1) {
                item[columnName] = $edf9623364882673$export$bbcc909de88cc4be(cell, column.width - $f1fb3ddb8f166f82$export$2e2bcd8739ae039(column.truncateMarker));
                var firstLine = item[columnName][0];
                if (!$02efb75e88113d24$var$endsWith(firstLine, column.truncateMarker)) item[columnName][0] += column.truncateMarker;
                item[columnName] = item[columnName].slice(0, 1);
            }
            return item;
        });
    });
    // recalculate column widths from truncated output/lines
    columnNames.forEach(function(columnName) {
        var column = columns1[columnName];
        column.width = items.map(function(item) {
            return item[columnName].reduce(function(min, cur) {
                if (min >= column.maxWidth) return min;
                return Math.max(min, Math.min(column.maxWidth, Math.max(column.minWidth, $f1fb3ddb8f166f82$export$2e2bcd8739ae039(cur))));
            }, 0);
        }).reduce(function(min, cur) {
            if (min >= column.maxWidth) return min;
            return Math.max(min, Math.min(column.maxWidth, Math.max(column.minWidth, cur)));
        }, 0);
    });
    var rows = $02efb75e88113d24$var$createRows(items, columns1, columnNames, options.paddingChr) // merge lines into rows
    ;
    // conceive output
    return rows.reduce(function(output, row) {
        return output.concat(row.reduce(function(rowOut, line) {
            return rowOut.concat(line.join(options.columnSplitter));
        }, []));
    }, []).map(function(line) {
        return $edf9623364882673$export$88f68187db5ede92(line, maxLineWidth);
    }).join(options.spacing);
}
/**
 * Convert wrapped lines into rows with padded values.
 *
 * @param Array items data to process
 * @param Array columns column width settings for wrapping
 * @param Array columnNames column ordering
 * @return Array items wrapped in arrays, corresponding to lines
 */ function $02efb75e88113d24$var$createRows(items, columns, columnNames, paddingChr) {
    return items.map(function(item) {
        var _loop = function(i) {
            row[i] = row[i] || [];
            columnNames.forEach(function(columnName) {
                var column = columns[columnName];
                var val = item[columnName][i] || '' // || '' ensures empty columns get padded
                ;
                if (column.align === 'right') row[i].push($edf9623364882673$export$bc3bea8325045070(val, column.width, paddingChr));
                else if (column.align === 'center' || column.align === 'centre') row[i].push($edf9623364882673$export$7fd96f818dd6e623(val, column.width, paddingChr));
                else row[i].push($edf9623364882673$export$7e24a29324041c48(val, column.width, paddingChr));
            });
        };
        var row = [];
        var numLines = 0;
        columnNames.forEach(function(columnName) {
            numLines = Math.max(numLines, item[columnName].length);
        });
        // combine matching lines of each rows
        for(var i = 0; i < numLines; i++)_loop(i);
        return row;
    });
}
/**
 * Object.assign
 *
 * @return Object Object with properties mixed in.
 */ function $02efb75e88113d24$var$mixin() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    var _Object;
    if (Object.assign) return (_Object = Object).assign.apply(_Object, $33a313e6cbb50d41$export$2e2bcd8739ae039(args));
    return $02efb75e88113d24$var$ObjectAssign.apply(void 0, $33a313e6cbb50d41$export$2e2bcd8739ae039(args));
}
function $02efb75e88113d24$var$ObjectAssign(target, firstSource) {
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
 */ function $02efb75e88113d24$var$endsWith(target, searchString, position) {
    position = position || target.length;
    position = position - searchString.length;
    var lastIndex = target.lastIndexOf(searchString);
    return lastIndex !== -1 && lastIndex === position;
}
function $02efb75e88113d24$var$toArray(items, columnNames) {
    if (Array.isArray(items)) return items;
    var rows = [];
    for(var key in items){
        var item = {
        };
        item[columnNames[0] || 'key'] = key;
        item[columnNames[1] || 'value'] = items[key];
        rows.push(item);
    }
    return rows;
}


//# sourceMappingURL=legacy.js.map
