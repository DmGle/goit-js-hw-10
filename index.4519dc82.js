!function(){var t,e,r,n,o,i,a,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function u(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function f(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(t){r(t);return}s.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t){f(i,n,o,a,s,"next",t)}function s(t){f(i,n,o,a,s,"throw",t)}a(void 0)})}}/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** *//* global Reflect, Promise, SuppressedError, Symbol */function l(t){return t&&"undefined"!=typeof Symbol&&t.constructor===Symbol?"symbol":typeof t}function h(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(r)throw TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(r=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,n=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=e.call(t,a)}catch(t){s=[6,t],n=0}finally{r=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}function p(t,e){return function(){return t.apply(e,arguments)}}"function"==typeof SuppressedError&&SuppressedError;// utils is a library of generic helper functions non-specific to axios
var d=Object.prototype.toString,y=Object.getPrototypeOf,g=(t=Object.create(null),function(e){var r=d.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}),v=function(t){return t=t.toLowerCase(),function(e){return g(e)===t}},m=function(t){return function(e){return(void 0===e?"undefined":l(e))===t}},b=Array.isArray,w=m("undefined"),E=v("ArrayBuffer"),O=m("string"),A=m("function"),S=m("number"),R=function(t){return null!==t&&"object"==typeof t},B=function(t){if("object"!==g(t))return!1;var e=y(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},T=v("Date"),U=v("File"),C=v("Blob"),I=v("FileList"),j=v("URLSearchParams");/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 *
 * @param {Boolean} [allOwnKeys = false]
 * @returns {any}
 */function x(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.allOwnKeys;// Don't bother if no value provided
if(null!=t){if("object"!=typeof t&&/*eslint no-param-reassign:0*/(t=[t]),b(t))for(o=0,i=t.length;o<i;o++)e.call(null,t[o],o,t);else{// Iterate over object keys
var o,i,a,s=void 0!==n&&n?Object.getOwnPropertyNames(t):Object.keys(t),u=s.length;for(o=0;o<u;o++)a=s[o],e.call(null,t[a],a,t)}}}function P(t,e){e=e.toLowerCase();for(var r,n=Object.keys(t),o=n.length;o-- >0;)if(e===(r=n[o]).toLowerCase())return r;return null}var N=/*eslint no-undef:0*/"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:s,k=function(t){return!w(t)&&t!==N},L=(e="undefined"!=typeof Uint8Array&&y(Uint8Array),function(t){return e&&t instanceof e}),_=v("HTMLFormElement"),F=(r=Object.prototype.hasOwnProperty,function(t,e){return r.call(t,e)}),D=v("RegExp"),M=function(t,e){var r=Object.getOwnPropertyDescriptors(t),n={};x(r,function(r,o){var i;!1!==(i=e(r,o,t))&&(n[o]=i||r)}),Object.defineProperties(t,n)},q="abcdefghijklmnopqrstuvwxyz",z="0123456789",H={DIGIT:z,ALPHA:q,ALPHA_DIGIT:q+q.toUpperCase()+z},J=v("AsyncFunction"),V={isArray:b,isArrayBuffer:E,isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(t){return null!==t&&!w(t)&&null!==t.constructor&&!w(t.constructor)&&A(t.constructor.isBuffer)&&t.constructor.isBuffer(t)},isFormData:function(t){var e;return t&&("function"==typeof FormData&&t instanceof FormData||A(t.append)&&("formdata"===(e=g(t))||// detect form-data instance
"object"===e&&A(t.toString)&&"[object FormData]"===t.toString()))},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {*} val The value to test
 *
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&E(t.buffer)},isString:O,isNumber:S,isBoolean:function(t){return!0===t||!1===t},isObject:R,isPlainObject:B,isUndefined:w,isDate:T,isFile:U,isBlob:C,isRegExp:D,isFunction:A,isStream:function(t){return R(t)&&A(t.pipe)},isURLSearchParams:j,isTypedArray:L,isFileList:I,forEach:x,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 *
 * @returns {Object} Result of all merge properties
 */function t(){for(var e=(k(this)&&this||{}).caseless,r={},n=function(n,o){var i=e&&P(r,o)||o;B(r[i])&&B(n)?r[i]=t(r[i],n):B(n)?r[i]=t({},n):b(n)?r[i]=n.slice():r[i]=n},o=0,i=arguments.length;o<i;o++)arguments[o]&&x(arguments[o],n);return r},extend:function(t,e,r){var n=(arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}).allOwnKeys;return x(e,function(e,n){r&&A(e)?t[n]=p(e,r):t[n]=e},{allOwnKeys:n}),t},trim:function(t){return t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t},inherits:function(t,e,r,n){t.prototype=Object.create(e.prototype,n),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),r&&Object.assign(t.prototype,r)},toFlatObject:function(t,e,r,n){var o,i,a,s={};// eslint-disable-next-line no-eq-null,eqeqeq
if(e=e||{},null==t)return e;do{for(i=(o=Object.getOwnPropertyNames(t)).length;i-- >0;)a=o[i],(!n||n(a,t,e))&&!s[a]&&(e[a]=t[a],s[a]=!0);t=!1!==r&&y(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype)return e},kindOf:g,kindOfTest:v,endsWith:function(t,e,r){t=String(t),(void 0===r||r>t.length)&&(r=t.length),r-=e.length;var n=t.indexOf(e,r);return -1!==n&&n===r},toArray:function(t){if(!t)return null;if(b(t))return t;var e=t.length;if(!S(e))return null;for(var r=Array(e);e-- >0;)r[e]=t[e];return r},forEachEntry:function(t,e){for(var r,n=(t&&t[Symbol.iterator]).call(t);(r=n.next())&&!r.done;){var o=r.value;e.call(t,o[0],o[1])}},matchAll:function(t,e){for(var r,n=[];null!==(r=t.exec(e));)n.push(r);return n},isHTMLForm:_,hasOwnProperty:F,hasOwnProp:F,reduceDescriptors:M,freezeMethods:function(t){M(t,function(e,r){// skip restricted props in strict mode
if(A(t)&&-1!==["arguments","caller","callee"].indexOf(r))return!1;if(A(t[r])){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=function(){throw Error("Can not rewrite read-only method '"+r+"'")})}})},toObjectSet:function(t,e){var r={};return function(t){t.forEach(function(t){r[t]=!0})}(b(t)?t:String(t).split(e)),r},toCamelCase:function(t){return t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,e,r){return e.toUpperCase()+r})},noop:function(){},toFiniteNumber:function(t,e){return Number.isFinite(t=+t)?t:e},findKey:P,global:N,isContextDefined:k,ALPHABET:H,generateString:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:H.ALPHA_DIGIT,r="",n=e.length;t--;)r+=e[Math.random()*n|0];return r},isSpecCompliantForm:/**
 * If the thing is a FormData object, return true, otherwise return false.
 *
 * @param {unknown} thing - The thing to check.
 *
 * @returns {boolean}
 */function(t){return!!(t&&A(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])},toJSONObject:function(t){var e=Array(10),r=function(t,n){if(R(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[n]=t;var o=b(t)?[]:{};return x(t,function(t,e){var i=r(t,n+1);w(i)||(o[e]=i)}),e[n]=void 0,o}}return t};return r(t,0)},isAsyncFn:J,isThenable:function(t){return t&&(R(t)||A(t))&&A(t.then)&&A(t.catch)}};function W(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")}function G(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function K(t,e,r){return e&&G(t.prototype,e),r&&G(t,r),t}/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 *
 * @returns {Error} The created error.
 */function X(t,e,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}V.inherits(X,Error,{toJSON:function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:V.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Y=X.prototype,$={};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 *//* eslint-disable no-proto */function Q(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Z(t,e){return(Z=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function tt(t){return(tt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(function(t){$[t]={value:t}}),Object.defineProperties(X,$),Object.defineProperty(Y,"isAxiosError",{value:!0}),// eslint-disable-next-line func-names
X.from=function(t,e,r,n,o,i){var a=Object.create(Y);return V.toFlatObject(t,a,function(t){return t!==Error.prototype},function(t){return"isAxiosError"!==t}),X.call(a,t.message,e,r,n,o),a.cause=t,a.name=t.name,i&&Object.assign(a,i),a},o=function(t){// go through the array every three bytes, we'll deal with trailing stuff later
for(var e,r=t.length,n=r%3// if we have 1 byte left, pad 2 bytes
,o=[],i=0,a=r-n;i<a;i+=16383// must be multiple of 3
)o.push(function(t,e,r){for(var n,o=[],i=e;i<r;i+=3)o.push(te[(n=(t[i]<<16&16711680)+(t[i+1]<<8&65280)+(255&t[i+2]))>>18&63]+te[n>>12&63]+te[n>>6&63]+te[63&n]);return o.join("")}(t,i,i+16383>a?a:i+16383));return 1===n?o.push(te[(e=t[r-1])>>2]+te[e<<4&63]+"=="):2===n&&o.push(te[(e=(t[r-2]<<8)+t[r-1])>>10]+te[e>>4&63]+te[e<<2&63]+"="),o.join("")};for(var te=[],tr=[],tn="undefined"!=typeof Uint8Array?Uint8Array:Array,to="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ti=0,ta=to.length;ti<ta;++ti)te[ti]=to[ti],tr[to.charCodeAt(ti)]=ti;// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
tr["-".charCodeAt(0)]=62,tr["_".charCodeAt(0)]=63,i=function(t,e,r,n,o){var i,a,s=8*o-n-1,u=(1<<s)-1,f=u>>1,c=-7,l=r?o-1:0,h=r?-1:1,p=t[e+l];for(l+=h,i=p&(1<<-c)-1,p>>=-c,c+=s;c>0;i=256*i+t[e+l],l+=h,c-=8);for(a=i&(1<<-c)-1,i>>=-c,c+=n;c>0;a=256*a+t[e+l],l+=h,c-=8);if(0===i)i=1-f;else{if(i===u)return a?NaN:(p?-1:1)*(1/0);a+=Math.pow(2,n),i-=f}return(p?-1:1)*a*Math.pow(2,i-n)},a=function(t,e,r,n,o,i){var a,s,u,f=8*i-o-1,c=(1<<f)-1,l=c>>1,h=23===o?5960464477539062e-23:0,p=n?0:i-1,d=n?1:-1,y=e<0||0===e&&1/e<0?1:0;for(isNaN(e=Math.abs(e))||e===1/0?(s=isNaN(e)?1:0,a=c):(a=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-a))<1&&(a--,u*=2),a+l>=1?e+=h/u:e+=h*Math.pow(2,1-l),e*u>=2&&(a++,u/=2),a+l>=c?(s=0,a=c):a+l>=1?(s=(e*u-1)*Math.pow(2,o),a+=l):(s=e*Math.pow(2,l-1)*Math.pow(2,o),a=0));o>=8;t[r+p]=255&s,p+=d,s/=256,o-=8);for(a=a<<o|s,f+=o;f>0;t[r+p]=255&a,p+=d,a/=256,f-=8);t[r+p-d]|=128*y};var ts="function"==typeof Symbol&&"function"// eslint-disable-line dot-notation
==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom")// eslint-disable-line dot-notation
:null;function tu(t){if(t>2147483647)throw RangeError('The value "'+t+'" is invalid for option "size"');// Return an augmented `Uint8Array` instance
var e=new Uint8Array(t);return Object.setPrototypeOf(e,tf.prototype),e}/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */function tf(t,e,r){// Common case.
if("number"==typeof t){if("string"==typeof e)throw TypeError('The "string" argument must be of type string. Received type number');return th(t)}return tc(t,e,r)}function tc(t,e,r){if("string"==typeof t)return function(t,e){if(("string"!=typeof e||""===e)&&(e="utf8"),!tf.isEncoding(e))throw TypeError("Unknown encoding: "+e);var r=0|tg(t,e),n=tu(r),o=n.write(t,e);return o!==r&&// cause everything after the first invalid character to be ignored. (e.g.
// 'abxxcd' will be treated as 'ab')
(n=n.slice(0,o)),n}(t,e);if(ArrayBuffer.isView(t))return function(t){if(tD(t,Uint8Array)){var e=new Uint8Array(t);return td(e.buffer,e.byteOffset,e.byteLength)}return tp(t)}(t);if(null==t)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===t?"undefined":l(t)));if(tD(t,ArrayBuffer)||t&&tD(t.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(tD(t,SharedArrayBuffer)||t&&tD(t.buffer,SharedArrayBuffer)))return td(t,e,r);if("number"==typeof t)throw TypeError('The "value" argument must not be of type number. Received type number');var n=t.valueOf&&t.valueOf();if(null!=n&&n!==t)return tf.from(n,e,r);var o=function(t){if(tf.isBuffer(t)){var e,r=0|ty(t.length),n=tu(r);return 0===n.length||t.copy(n,0,0,r),n}return void 0!==t.length?"number"!=typeof t.length||(e=t.length)!=e// eslint-disable-line no-self-compare
?tu(0):tp(t):"Buffer"===t.type&&Array.isArray(t.data)?tp(t.data):void 0}(t);if(o)return o;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return tf.from(t[Symbol.toPrimitive]("string"),e,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===t?"undefined":l(t)))}function tl(t){if("number"!=typeof t)throw TypeError('"size" argument must be of type number');if(t<0)throw RangeError('The value "'+t+'" is invalid for option "size"')}function th(t){return tl(t),tu(t<0?0:0|ty(t))}function tp(t){for(var e=t.length<0?0:0|ty(t.length),r=tu(e),n=0;n<e;n+=1)r[n]=255&t[n];return r}function td(t,e,r){var n;if(e<0||t.byteLength<e)throw RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(r||0))throw RangeError('"length" is outside of buffer bounds');return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n=void 0===e&&void 0===r?new Uint8Array(t):void 0===r?new Uint8Array(t,e):new Uint8Array(t,e,r),tf.prototype),n)}function ty(t){// Note: cannot use `length < K_MAX_LENGTH` here because that fails when
// length is NaN (which is otherwise coerced to zero.)
if(t>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|t}function tg(t,e){if(tf.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||tD(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===t?"undefined":l(t)));var r=t.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;for(// Use a for loop to avoid recursion
var o=!1;;)switch(e){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return tL(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return t_(t).length;default:if(o)return n?-1:tL(t).length// assume utf8
;e=(""+e).toLowerCase(),o=!0}}function tv(t,e,r){var n,i,a=!1;// Return early if start > this.length. Done here to prevent potential uint32
// coercion fail below.
if((void 0===e||e<0)&&(e=0),e>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||// Force coercion to uint32. This will also coerce falsey/NaN values to 0.
(r>>>=0)<=(e>>>=0)))return"";for(t||(t="utf8");;)switch(t){case"hex":return function(t,e,r){var n=t.length;(!e||e<0)&&(e=0),(!r||r<0||r>n)&&(r=n);for(var o="",i=e;i<r;++i)o+=tM[t[i]];return o}(this,e,r);case"utf8":case"utf-8":return tE(this,e,r);case"ascii":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(127&t[o]);return n}(this,e,r);case"latin1":case"binary":return function(t,e,r){var n="";r=Math.min(t.length,r);for(var o=e;o<r;++o)n+=String.fromCharCode(t[o]);return n}(this,e,r);case"base64":return n=e,i=r,0===n&&i===this.length?o(this):o(this.slice(n,i));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(t,e,r){// If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
for(var n=t.slice(e,r),o="",i=0;i<n.length-1;i+=2)o+=String.fromCharCode(n[i]+256*n[i+1]);return o}(this,e,r);default:if(a)throw TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),a=!0}}function tm(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function tb(t,e,r,n,o){var i;// Empty buffer means no match
if(0===t.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(i=r=+r// Coerce to Number.
)!=i&&(r=o?0:t.length-1),r<0&&(r=t.length+r),r>=t.length){if(o)return -1;r=t.length-1}else if(r<0){if(!o)return -1;r=0}// Finally, search either indexOf (if dir is true) or lastIndexOf
if("string"==typeof e&&(e=tf.from(e,n)),tf.isBuffer(e))return(// Special case: looking for empty string/buffer always fails
0===e.length?-1:tw(t,e,r,n,o));if("number"==typeof e)return(e&=255// Search for a byte value [0-255]
,"function"==typeof Uint8Array.prototype.indexOf)?o?Uint8Array.prototype.indexOf.call(t,e,r):Uint8Array.prototype.lastIndexOf.call(t,e,r):tw(t,[e],r,n,o);throw TypeError("val must be string, number or Buffer")}function tw(t,e,r,n,o){var i,a=1,s=t.length,u=e.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||e.length<2)return -1;a=2,s/=2,u/=2,r/=2}function f(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(o){var c=-1;for(i=r;i<s;i++)if(f(t,i)===f(e,-1===c?0:i-c)){if(-1===c&&(c=i),i-c+1===u)return c*a}else -1!==c&&(i-=i-c),c=-1}else for(r+u>s&&(r=s-u),i=r;i>=0;i--){for(var l=!0,h=0;h<u;h++)if(f(t,i+h)!==f(e,h)){l=!1;break}if(l)return i}return -1}function tE(t,e,r){r=Math.min(t.length,r);for(var n=[],o=e;o<r;){var i=t[o],a=null,s=i>239?4:i>223?3:i>191?2:1;if(o+s<=r){var u=void 0,f=void 0,c=void 0,l=void 0;switch(s){case 1:i<128&&(a=i);break;case 2:(192&(u=t[o+1]))==128&&(l=(31&i)<<6|63&u)>127&&(a=l);break;case 3:u=t[o+1],f=t[o+2],(192&u)==128&&(192&f)==128&&(l=(15&i)<<12|(63&u)<<6|63&f)>2047&&(l<55296||l>57343)&&(a=l);break;case 4:u=t[o+1],f=t[o+2],c=t[o+3],(192&u)==128&&(192&f)==128&&(192&c)==128&&(l=(15&i)<<18|(63&u)<<12|(63&f)<<6|63&c)>65535&&l<1114112&&(a=l)}}null===a?(// we did not generate a valid codePoint so insert a
// replacement char (U+FFFD) and advance only 1 byte
a=65533,s=1):a>65535&&(// encode to utf16 (surrogate pair dance)
a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),o+=s}return function(t){var e=t.length;if(e<=4096)return String.fromCharCode.apply(String,t)// avoid extra slice()
;for(// Decode in chunks to avoid "call stack size exceeded".
var r="",n=0;n<e;)r+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return r}(n)}/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */function tO(t,e,r){if(t%1!=0||t<0)throw RangeError("offset is not uint");if(t+e>r)throw RangeError("Trying to access beyond buffer length")}function tA(t,e,r,n,o,i){if(!tf.isBuffer(t))throw TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<i)throw RangeError('"value" argument is out of bounds');if(r+n>t.length)throw RangeError("Index out of range")}function tS(t,e,r,n,o){tx(e,n,o,t,r,7);var i=Number(e&BigInt(4294967295));t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i,i>>=8,t[r++]=i;var a=Number(e>>BigInt(32)&BigInt(4294967295));return t[r++]=a,a>>=8,t[r++]=a,a>>=8,t[r++]=a,a>>=8,t[r++]=a,r}function tR(t,e,r,n,o){tx(e,n,o,t,r,7);var i=Number(e&BigInt(4294967295));t[r+7]=i,i>>=8,t[r+6]=i,i>>=8,t[r+5]=i,i>>=8,t[r+4]=i;var a=Number(e>>BigInt(32)&BigInt(4294967295));return t[r+3]=a,a>>=8,t[r+2]=a,a>>=8,t[r+1]=a,a>>=8,t[r]=a,r+8}function tB(t,e,r,n,o,i){if(r+n>t.length||r<0)throw RangeError("Index out of range")}function tT(t,e,r,n,o){return e=+e,r>>>=0,o||tB(t,e,r,4,34028234663852886e22,-34028234663852886e22),a(t,e,r,n,23,4),r+4}function tU(t,e,r,n,o){return e=+e,r>>>=0,o||tB(t,e,r,8,17976931348623157e292,-17976931348623157e292),a(t,e,r,n,52,8),r+8}/**
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
 */tf.TYPED_ARRAY_SUPPORT=function(){// Can typed array instances can be augmented?
try{var t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),tf.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(tf.prototype,"parent",{enumerable:!0,get:function(){if(tf.isBuffer(this))return this.buffer}}),Object.defineProperty(tf.prototype,"offset",{enumerable:!0,get:function(){if(tf.isBuffer(this))return this.byteOffset}}),tf.poolSize=8192// not used by this implementation
,/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/tf.from=function(t,e,r){return tc(t,e,r)},// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(tf.prototype,Uint8Array.prototype),Object.setPrototypeOf(tf,Uint8Array),/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/tf.alloc=function(t,e,r){return(tl(t),t<=0)?tu(t):void 0!==e?"string"==typeof r?tu(t).fill(e,r):tu(t).fill(e):tu(t)},/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */tf.allocUnsafe=function(t){return th(t)},/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */tf.allocUnsafeSlow=function(t){return th(t)},tf.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==tf.prototype// so Buffer.isBuffer(Buffer.prototype) will be false
},tf.compare=function(t,e){if(tD(t,Uint8Array)&&(t=tf.from(t,t.offset,t.byteLength)),tD(e,Uint8Array)&&(e=tf.from(e,e.offset,e.byteLength)),!tf.isBuffer(t)||!tf.isBuffer(e))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;for(var r=t.length,n=e.length,o=0,i=Math.min(r,n);o<i;++o)if(t[o]!==e[o]){r=t[o],n=e[o];break}return r<n?-1:n<r?1:0},tf.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},tf.concat=function(t,e){if(!Array.isArray(t))throw TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return tf.alloc(0);if(void 0===e)for(r=0,e=0;r<t.length;++r)e+=t[r].length;var r,n=tf.allocUnsafe(e),o=0;for(r=0;r<t.length;++r){var i=t[r];if(tD(i,Uint8Array))o+i.length>n.length?(tf.isBuffer(i)||(i=tf.from(i)),i.copy(n,o)):Uint8Array.prototype.set.call(n,i,o);else if(tf.isBuffer(i))i.copy(n,o);else throw TypeError('"list" argument must be an Array of Buffers');o+=i.length}return n},tf.byteLength=tg,// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
tf.prototype._isBuffer=!0,tf.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)tm(this,e,e+1);return this},tf.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)tm(this,e,e+3),tm(this,e+1,e+2);return this},tf.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)tm(this,e,e+7),tm(this,e+1,e+6),tm(this,e+2,e+5),tm(this,e+3,e+4);return this},tf.prototype.toString=function(){var t=this.length;return 0===t?"":0==arguments.length?tE(this,0,t):tv.apply(this,arguments)},tf.prototype.toLocaleString=tf.prototype.toString,tf.prototype.equals=function(t){if(!tf.isBuffer(t))throw TypeError("Argument must be a Buffer");return this===t||0===tf.compare(this,t)},tf.prototype.inspect=function(){var t="";return t=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(t+=" ... "),"<Buffer "+t+">"},ts&&(tf.prototype[ts]=tf.prototype.inspect),tf.prototype.compare=function(t,e,r,n,o){if(tD(t,Uint8Array)&&(t=tf.from(t,t.offset,t.byteLength)),!tf.isBuffer(t))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===t?"undefined":l(t)));if(void 0===e&&(e=0),void 0===r&&(r=t?t.length:0),void 0===n&&(n=0),void 0===o&&(o=this.length),e<0||r>t.length||n<0||o>this.length)throw RangeError("out of range index");if(n>=o&&e>=r)return 0;if(n>=o)return -1;if(e>=r)return 1;if(e>>>=0,r>>>=0,n>>>=0,o>>>=0,this===t)return 0;for(var i=o-n,a=r-e,s=Math.min(i,a),u=this.slice(n,o),f=t.slice(e,r),c=0;c<s;++c)if(u[c]!==f[c]){i=u[c],a=f[c];break}return i<a?-1:a<i?1:0},tf.prototype.includes=function(t,e,r){return -1!==this.indexOf(t,e,r)},tf.prototype.indexOf=function(t,e,r){return tb(this,t,e,r,!0)},tf.prototype.lastIndexOf=function(t,e,r){return tb(this,t,e,r,!1)},tf.prototype.write=function(t,e,r,n){// Buffer#write(string)
if(void 0===e)n="utf8",r=this.length,e=0;else if(void 0===r&&"string"==typeof e)n=e,r=this.length,e=0;else if(isFinite(e))e>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var o,i,a,s,u,f,c,l,h=this.length-e;if((void 0===r||r>h)&&(r=h),t.length>0&&(r<0||e<0)||e>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var p=!1;;)switch(n){case"hex":return function(t,e,r,n){r=Number(r)||0;var o,i=t.length-r;n?(n=Number(n))>i&&(n=i):n=i;var a=e.length;for(n>a/2&&(n=a/2),o=0;o<n;++o){var s=parseInt(e.substr(2*o,2),16);if(s!=s)break;t[r+o]=s}return o}(this,t,e,r);case"utf8":case"utf-8":return o=e,i=r,tF(tL(t,this.length-o),this,o,i);case"ascii":case"latin1":case"binary":return a=e,s=r,tF(function(t){for(var e=[],r=0;r<t.length;++r)e.push(255&t.charCodeAt(r));return e}(t),this,a,s);case"base64":// Warning: maxLength not taken into account in base64Write
return u=e,f=r,tF(t_(t),this,u,f);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=e,l=r,tF(function(t,e){for(var r,n,o=[],i=0;i<t.length&&!((e-=2)<0);++i)n=(r=t.charCodeAt(i))>>8,o.push(r%256),o.push(n);return o}(t,this.length-c),this,c,l);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},tf.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},tf.prototype.slice=function(t,e){var r=this.length;t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t);var n=this.subarray(t,e);return(// Return an augmented `Uint8Array` instance
Object.setPrototypeOf(n,tf.prototype),n)},tf.prototype.readUintLE=tf.prototype.readUIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tO(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n},tf.prototype.readUintBE=tf.prototype.readUIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tO(t,e,this.length);for(var n=this[t+--e],o=1;e>0&&(o*=256);)n+=this[t+--e]*o;return n},tf.prototype.readUint8=tf.prototype.readUInt8=function(t,e){return t>>>=0,e||tO(t,1,this.length),this[t]},tf.prototype.readUint16LE=tf.prototype.readUInt16LE=function(t,e){return t>>>=0,e||tO(t,2,this.length),this[t]|this[t+1]<<8},tf.prototype.readUint16BE=tf.prototype.readUInt16BE=function(t,e){return t>>>=0,e||tO(t,2,this.length),this[t]<<8|this[t+1]},tf.prototype.readUint32LE=tf.prototype.readUInt32LE=function(t,e){return t>>>=0,e||tO(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},tf.prototype.readUint32BE=tf.prototype.readUInt32BE=function(t,e){return t>>>=0,e||tO(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},tf.prototype.readBigUInt64LE=tq(function(t){tP(t>>>=0,"offset");var e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tN(t,this.length-8);var n=e+256*this[++t]+65536*this[++t]+16777216*this[++t],o=this[++t]+256*this[++t]+65536*this[++t]+16777216*r;return BigInt(n)+(BigInt(o)<<BigInt(32))}),tf.prototype.readBigUInt64BE=tq(function(t){tP(t>>>=0,"offset");var e=this[t],r=this[t+7];(void 0===e||void 0===r)&&tN(t,this.length-8);var n=16777216*e+65536*this[++t]+256*this[++t]+this[++t],o=16777216*this[++t]+65536*this[++t]+256*this[++t]+r;return(BigInt(n)<<BigInt(32))+BigInt(o)}),tf.prototype.readIntLE=function(t,e,r){t>>>=0,e>>>=0,r||tO(t,e,this.length);for(var n=this[t],o=1,i=0;++i<e&&(o*=256);)n+=this[t+i]*o;return n>=(o*=128)&&(n-=Math.pow(2,8*e)),n},tf.prototype.readIntBE=function(t,e,r){t>>>=0,e>>>=0,r||tO(t,e,this.length);for(var n=e,o=1,i=this[t+--n];n>0&&(o*=256);)i+=this[t+--n]*o;return i>=(o*=128)&&(i-=Math.pow(2,8*e)),i},tf.prototype.readInt8=function(t,e){return(t>>>=0,e||tO(t,1,this.length),128&this[t])?-((255-this[t]+1)*1):this[t]},tf.prototype.readInt16LE=function(t,e){t>>>=0,e||tO(t,2,this.length);var r=this[t]|this[t+1]<<8;return 32768&r?4294901760|r:r},tf.prototype.readInt16BE=function(t,e){t>>>=0,e||tO(t,2,this.length);var r=this[t+1]|this[t]<<8;return 32768&r?4294901760|r:r},tf.prototype.readInt32LE=function(t,e){return t>>>=0,e||tO(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},tf.prototype.readInt32BE=function(t,e){return t>>>=0,e||tO(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},tf.prototype.readBigInt64LE=tq(function(t){tP(t>>>=0,"offset");var e=this[t],r=this[t+7];return(void 0===e||void 0===r)&&tN(t,this.length-8),(BigInt(this[t+4]+256*this[t+5]+65536*this[t+6]+(r<<24// Overflow
))<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+16777216*this[++t])}),tf.prototype.readBigInt64BE=tq(function(t){tP(t>>>=0,"offset");var e=this[t],r=this[t+7];return(void 0===e||void 0===r)&&tN(t,this.length-8),(BigInt((e<<24)+// Overflow
65536*this[++t]+256*this[++t]+this[++t])<<BigInt(32))+BigInt(16777216*this[++t]+65536*this[++t]+256*this[++t]+r)}),tf.prototype.readFloatLE=function(t,e){return t>>>=0,e||tO(t,4,this.length),i(this,t,!0,23,4)},tf.prototype.readFloatBE=function(t,e){return t>>>=0,e||tO(t,4,this.length),i(this,t,!1,23,4)},tf.prototype.readDoubleLE=function(t,e){return t>>>=0,e||tO(t,8,this.length),i(this,t,!0,52,8)},tf.prototype.readDoubleBE=function(t,e){return t>>>=0,e||tO(t,8,this.length),i(this,t,!1,52,8)},tf.prototype.writeUintLE=tf.prototype.writeUIntLE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;tA(this,t,e,r,o,0)}var i=1,a=0;for(this[e]=255&t;++a<r&&(i*=256);)this[e+a]=t/i&255;return e+r},tf.prototype.writeUintBE=tf.prototype.writeUIntBE=function(t,e,r,n){if(t=+t,e>>>=0,r>>>=0,!n){var o=Math.pow(2,8*r)-1;tA(this,t,e,r,o,0)}var i=r-1,a=1;for(this[e+i]=255&t;--i>=0&&(a*=256);)this[e+i]=t/a&255;return e+r},tf.prototype.writeUint8=tf.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||tA(this,t,e,1,255,0),this[e]=255&t,e+1},tf.prototype.writeUint16LE=tf.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||tA(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},tf.prototype.writeUint16BE=tf.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||tA(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},tf.prototype.writeUint32LE=tf.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||tA(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},tf.prototype.writeUint32BE=tf.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||tA(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},tf.prototype.writeBigUInt64LE=tq(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return tS(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),tf.prototype.writeBigUInt64BE=tq(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return tR(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))}),tf.prototype.writeIntLE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);tA(this,t,e,r,o-1,-o)}var i=0,a=1,s=0;for(this[e]=255&t;++i<r&&(a*=256);)t<0&&0===s&&0!==this[e+i-1]&&(s=1),this[e+i]=(t/a>>0)-s&255;return e+r},tf.prototype.writeIntBE=function(t,e,r,n){if(t=+t,e>>>=0,!n){var o=Math.pow(2,8*r-1);tA(this,t,e,r,o-1,-o)}var i=r-1,a=1,s=0;for(this[e+i]=255&t;--i>=0&&(a*=256);)t<0&&0===s&&0!==this[e+i+1]&&(s=1),this[e+i]=(t/a>>0)-s&255;return e+r},tf.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||tA(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},tf.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||tA(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},tf.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||tA(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},tf.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||tA(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},tf.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||tA(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},tf.prototype.writeBigInt64LE=tq(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return tS(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),tf.prototype.writeBigInt64BE=tq(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return tR(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),tf.prototype.writeFloatLE=function(t,e,r){return tT(this,t,e,!0,r)},tf.prototype.writeFloatBE=function(t,e,r){return tT(this,t,e,!1,r)},tf.prototype.writeDoubleLE=function(t,e,r){return tU(this,t,e,!0,r)},tf.prototype.writeDoubleBE=function(t,e,r){return tU(this,t,e,!1,r)},// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
tf.prototype.copy=function(t,e,r,n){if(!tf.isBuffer(t))throw TypeError("argument should be a Buffer");// Copy 0 bytes; we're done
if(r||(r=0),n||0===n||(n=this.length),e>=t.length&&(e=t.length),e||(e=0),n>0&&n<r&&(n=r),n===r||0===t.length||0===this.length)return 0;// Fatal error conditions
if(e<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-e<n-r&&(n=t.length-e+r);var o=n-r;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,r,n):Uint8Array.prototype.set.call(t,this.subarray(r,n),e),o},// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
tf.prototype.fill=function(t,e,r,n){// Handle string cases:
if("string"==typeof t){if("string"==typeof e?(n=e,e=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!tf.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===t.length){var o,i=t.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(t=i)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));// Invalid ranges are not set to a default, so can range check early.
if(e<0||this.length<e||this.length<r)throw RangeError("Out of range index");if(r<=e)return this;if(e>>>=0,r=void 0===r?this.length:r>>>0,t||(t=0),"number"==typeof t)for(o=e;o<r;++o)this[o]=t;else{var a=tf.isBuffer(t)?t:tf.from(t,n),s=a.length;if(0===s)throw TypeError('The value "'+t+'" is invalid for argument "value"');for(o=0;o<r-e;++o)this[o+e]=a[o%s]}return this};// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
var tC={};function tI(t,e,r){tC[t]=/*#__PURE__*/function(r){!function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Z(t,e)}(i,r);var n,o=(n=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}(),function(){var t,e,r=tt(i);if(n){var o=tt(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return(t=e)&&("object"===l(t)||"function"==typeof t)?t:Q(this)});function i(){var r;return W(this,i),Object.defineProperty(Q(r=o.call(this)),"message",{value:e.apply(Q(r),arguments),writable:!0,configurable:!0}),// Add the error code to the name to include it in the stack trace.
r.name="".concat(r.name," [").concat(t,"]"),// Access the stack to generate the error message including the error code
// from the name.
r.stack// eslint-disable-line no-unused-expressions
,// Reset the name to the actual name.
delete r.name,r}return K(i,[{key:"code",get:function(){return t},set:function(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(t,"]: ").concat(this.message)}}]),i}(r)}function tj(t){for(var e="",r=t.length,n="-"===t[0]?1:0;r>=n+4;r-=3)e="_".concat(t.slice(r-3,r)).concat(e);return"".concat(t.slice(0,r)).concat(e)}function tx(t,e,r,n,o,i){if(t>r||t<e){var a,s=(void 0===e?"undefined":l(e))==="bigint"?"n":"";throw a=i>3?0===e||e===BigInt(0)?">= 0".concat(s," and < 2").concat(s," ** ").concat((i+1)*8).concat(s):">= -(2".concat(s," ** ").concat((i+1)*8-1).concat(s,") and < 2 ** ")+"".concat((i+1)*8-1).concat(s):">= ".concat(e).concat(s," and <= ").concat(r).concat(s),new tC.ERR_OUT_OF_RANGE("value",a,t)}tP(o,"offset"),(void 0===n[o]||void 0===n[o+i])&&tN(o,n.length-(i+1))}function tP(t,e){if("number"!=typeof t)throw new tC.ERR_INVALID_ARG_TYPE(e,"number",t)}function tN(t,e,r){if(Math.floor(t)!==t)throw tP(t,r),new tC.ERR_OUT_OF_RANGE(r||"offset","an integer",t);if(e<0)throw new tC.ERR_BUFFER_OUT_OF_BOUNDS;throw new tC.ERR_OUT_OF_RANGE(r||"offset",">= ".concat(r?1:0," and <= ").concat(e),t)}tI("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?"".concat(t," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"},RangeError),tI("ERR_INVALID_ARG_TYPE",function(t,e){return'The "'.concat(t,'" argument must be of type number. Received type ').concat(void 0===e?"undefined":l(e))},TypeError),tI("ERR_OUT_OF_RANGE",function(t,e,r){var n='The value of "'.concat(t,'" is out of range.'),o=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?o=tj(String(r)):(void 0===r?"undefined":l(r))==="bigint"&&(o=String(r),(r>Math.pow(BigInt(2),BigInt(32))||r<-Math.pow(BigInt(2),BigInt(32)))&&(o=tj(o)),o+="n"),n+=" It must be ".concat(e,". Received ").concat(o)},RangeError);// HELPER FUNCTIONS
// ================
var tk=/[^+/0-9A-Za-z-_]/g;function tL(t,e){e=e||1/0;for(var r,n=t.length,o=null,i=[],a=0;a<n;++a){// is surrogate component
if((r=t.charCodeAt(a))>55295&&r<57344){// last char was a lead
if(!o){// no lead yet
if(r>56319||a+1===n){// unexpected trail
(e-=3)>-1&&i.push(239,191,189);continue}// valid lead
o=r;continue}// 2 leads in a row
if(r<56320){(e-=3)>-1&&i.push(239,191,189),o=r;continue}// valid surrogate pair
r=(o-55296<<10|r-56320)+65536}else o&&(e-=3)>-1&&i.push(239,191,189);// encode utf8
if(o=null,r<128){if((e-=1)<0)break;i.push(r)}else if(r<2048){if((e-=2)<0)break;i.push(r>>6|192,63&r|128)}else if(r<65536){if((e-=3)<0)break;i.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((e-=4)<0)break;i.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return i}function t_(t){return function(t){var e,r,n=function(t){var e=t.length;if(e%4>0)throw Error("Invalid string. Length must be a multiple of 4");// Trim off extra bytes after placeholder bytes are found
// See: https://github.com/beatgammit/base64-js/issues/42
var r=t.indexOf("=");-1===r&&(r=e);var n=r===e?0:4-r%4;return[r,n]}(t),o=n[0],i=n[1],a=new tn((o+i)*3/4-i),s=0,u=i>0?o-4:o;for(r=0;r<u;r+=4)e=tr[t.charCodeAt(r)]<<18|tr[t.charCodeAt(r+1)]<<12|tr[t.charCodeAt(r+2)]<<6|tr[t.charCodeAt(r+3)],a[s++]=e>>16&255,a[s++]=e>>8&255,a[s++]=255&e;return 2===i&&(e=tr[t.charCodeAt(r)]<<2|tr[t.charCodeAt(r+1)]>>4,a[s++]=255&e),1===i&&(e=tr[t.charCodeAt(r)]<<10|tr[t.charCodeAt(r+1)]<<4|tr[t.charCodeAt(r+2)]>>2,a[s++]=e>>8&255,a[s++]=255&e),a}(function(t){// Node converts strings with length < 2 to ''
if(// Node strips out invalid characters like \n and \t from the string, base64-js does not
(t=// Node takes equal signs as end of the Base64 encoding
(t=t.split("=")[0]).trim().replace(tk,"")).length<2)return"";// Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
for(;t.length%4!=0;)t+="=";return t}(t))}function tF(t,e,r,n){var o;for(o=0;o<n&&!(o+r>=e.length)&&!(o>=t.length);++o)e[o+r]=t[o];return o}// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function tD(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var tM=function(){for(var t="0123456789abcdef",e=Array(256),r=0;r<16;++r)for(var n=16*r,o=0;o<16;++o)e[n+o]=t[r]+t[o];return e}();// Return not function with Error if BigInt not supported
function tq(t){return"undefined"==typeof BigInt?tz:t}function tz(){throw Error("BigInt not supported")}/**
 * Determines if the given thing is a array or js object.
 *
 * @param {string} thing - The object or array to be visited.
 *
 * @returns {boolean}
 */function tH(t){return V.isPlainObject(t)||V.isArray(t)}/**
 * It removes the brackets from the end of a string
 *
 * @param {string} key - The key of the parameter.
 *
 * @returns {string} the key without the brackets.
 */function tJ(t){return V.endsWith(t,"[]")?t.slice(0,-2):t}/**
 * It takes a path, a key, and a boolean, and returns a string
 *
 * @param {string} path - The path to the current key.
 * @param {string} key - The key of the current object being iterated over.
 * @param {string} dots - If true, the key will be rendered with dots instead of brackets.
 *
 * @returns {string} The path to the current key.
 */function tV(t,e,r){return t?t.concat(e).map(function(t,e){return(// eslint-disable-next-line no-param-reassign
t=tJ(t),!r&&e?"["+t+"]":t)}).join(r?".":""):e}var tW=V.toFlatObject(V,{},null,function(t){return/^is[A-Z]/.test(t)}),tG=/**
 * Convert a data object to FormData
 *
 * @param {Object} obj
 * @param {?Object} [formData]
 * @param {?Object} [options]
 * @param {Function} [options.visitor]
 * @param {Boolean} [options.metaTokens = true]
 * @param {Boolean} [options.dots = false]
 * @param {?Boolean} [options.indexes = false]
 *
 * @returns {Object}
 **//**
 * It converts an object into a FormData object
 *
 * @param {Object<any, any>} obj - The object to convert to form data.
 * @param {string} formData - The FormData object to append to.
 * @param {Object<string, any>} options
 *
 * @returns
 */function(t,e,r){if(!V.isObject(t))throw TypeError("target must be an object");// eslint-disable-next-line no-param-reassign
e=e||new FormData;var n=// eslint-disable-next-line no-param-reassign
(r=V.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(t,e){// eslint-disable-next-line no-eq-null,eqeqeq
return!V.isUndefined(e[t])})).metaTokens,o=r.visitor||f,i=r.dots,a=r.indexes,s=(r.Blob||"undefined"!=typeof Blob&&Blob)&&V.isSpecCompliantForm(e);if(!V.isFunction(o))throw TypeError("visitor must be a function");function u(t){if(null===t)return"";if(V.isDate(t))return t.toISOString();if(!s&&V.isBlob(t))throw new X("Blob is not supported. Use a Buffer instead.");return V.isArrayBuffer(t)||V.isTypedArray(t)?s&&"function"==typeof Blob?new Blob([t]):tf.from(t):t}/**
   * Default visitor.
   *
   * @param {*} value
   * @param {String|Number} key
   * @param {Array<String|Number>} path
   * @this {FormData}
   *
   * @returns {boolean} return true to visit the each prop of the value recursively
   */function f(t,r,o){var s,f=t;if(t&&!o&&"object"==typeof t){if(V.endsWith(r,"{}"))// eslint-disable-next-line no-param-reassign
r=n?r:r.slice(0,-2),// eslint-disable-next-line no-param-reassign
t=JSON.stringify(t);else if(V.isArray(t)&&(s=t,V.isArray(s)&&!s.some(tH))||(V.isFileList(t)||V.endsWith(r,"[]"))&&(f=V.toArray(t)))return(// eslint-disable-next-line no-param-reassign
r=tJ(r),f.forEach(function(t,n){V.isUndefined(t)||null===t||e.append(!0===a?tV([r],n,i):null===a?r:r+"[]",u(t))}),!1)}return!!tH(t)||(e.append(tV(o,r,i),u(t)),!1)}var c=[],l=Object.assign(tW,{defaultVisitor:f,convertValue:u,isVisitable:tH});if(!V.isObject(t))throw TypeError("data must be an object");return!function t(r,n){if(!V.isUndefined(r)){if(-1!==c.indexOf(r))throw Error("Circular reference detected in "+n.join("."));c.push(r),V.forEach(r,function(r,i){!0===(!(V.isUndefined(r)||null===r)&&o.call(e,r,V.isString(i)?i.trim():i,n,l))&&t(r,n?n.concat(i):[i])}),c.pop()}}(t),e};/**
 * It encodes a string by replacing all characters that are not in the unreserved set with
 * their percent-encoded equivalents
 *
 * @param {string} str - The string to encode.
 *
 * @returns {string} The encoded string.
 */function tK(t){var e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\x00"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(t){return e[t]})}/**
 * It takes a params object and converts it to a FormData object
 *
 * @param {Object<string, any>} params - The parameters to be converted to a FormData object.
 * @param {Object<string, any>} options - The options object passed to the Axios constructor.
 *
 * @returns {void}
 */function tX(t,e){this._pairs=[],t&&tG(t,this,e)}var tY=tX.prototype;/**
 * It replaces all instances of the characters `:`, `$`, `,`, `+`, `[`, and `]` with their
 * URI encoded counterparts
 *
 * @param {string} val The value to be encoded.
 *
 * @returns {string} The encoded value.
 */function t$(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function tQ(t,e,r){/*eslint no-param-reassign:0*/if(!e)return t;var n,o=r&&r.encode||t$,i=r&&r.serialize;if(n=i?i(e,r):V.isURLSearchParams(e)?e.toString():new tX(e,r).toString(o)){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+n}return t}tY.append=function(t,e){this._pairs.push([t,e])},tY.toString=function(t){var e=t?function(e){return t.call(this,e,tK)}:tK;return this._pairs.map(function(t){return e(t[0])+"="+e(t[1])},"").join("&")};var tZ=/*#__PURE__*/function(){function t(){W(this,t),this.handlers=[]}return K(t,[{/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */key:"use",value:function(t,e,r){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}},{/**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */key:"eject",value:function(t){this.handlers[t]&&(this.handlers[t]=null)}},{/**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{/**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */key:"forEach",value:function(t){V.forEach(this.handlers,function(e){null!==e&&t(e)})}}]),t}(),t0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},t1="undefined"!=typeof URLSearchParams?URLSearchParams:tX,t2="undefined"!=typeof FormData?FormData:null,t6="undefined"!=typeof Blob?Blob:null,t5={};u(t5,"hasBrowserEnv",function(){return t4}),u(t5,"hasStandardBrowserEnv",function(){return t8}),u(t5,"hasStandardBrowserWebWorkerEnv",function(){return t3});var t4="undefined"!=typeof window&&"undefined"!=typeof document,t8=(n="undefined"!=typeof navigator&&navigator.product,t4&&0>["ReactNative","NativeScript","NS"].indexOf(n)),t3="undefined"!=typeof WorkerGlobalScope&&// eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,t7=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),n.forEach(function(e){var n;n=r[e],e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n})}return t}({},t5,{isBrowser:!0,classes:{URLSearchParams:t1,FormData:t2,Blob:t6},protocols:["http","https","file","blob","url","data"]}),t9=/**
 * It takes a FormData object and returns a JavaScript object
 *
 * @param {string} formData The FormData object to convert to JSON.
 *
 * @returns {Object<string, any> | null} The converted object.
 */function(t){if(V.isFormData(t)&&V.isFunction(t.entries)){var e={};return V.forEachEntry(t,function(t,r){!function t(e,r,n,o){var i=e[o++],a=Number.isFinite(+i),s=o>=e.length;return(i=!i&&V.isArray(n)?n.length:i,s)?V.hasOwnProp(n,i)?n[i]=[n[i],r]:n[i]=r:(n[i]&&V.isObject(n[i])||(n[i]=[]),t(e,r,n[i],o)&&V.isArray(n[i])&&(n[i]=/**
 * Convert an array to an object.
 *
 * @param {Array<any>} arr - The array to convert to an object.
 *
 * @returns An object with the same keys and values as the array.
 */function(t){var e,r,n={},o=Object.keys(t),i=o.length;for(e=0;e<i;e++)n[r=o[e]]=t[r];return n}(n[i]))),!a}(V.matchAll(/\w+|\[(\w*)]/g,t).map(function(t){return"[]"===t[0]?"":t[1]||t[0]}),r,e,0)}),e}return null},et={transitional:t0,adapter:["xhr","http"],transformRequest:[function(t,e){var r,n,o,i=e.getContentType()||"",a=i.indexOf("application/json")>-1,s=V.isObject(t);if(s&&V.isHTMLForm(t)&&(t=new FormData(t)),V.isFormData(t))return a&&a?JSON.stringify(t9(t)):t;if(V.isArrayBuffer(t)||V.isBuffer(t)||V.isStream(t)||V.isFile(t)||V.isBlob(t))return t;if(V.isArrayBufferView(t))return t.buffer;if(V.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();if(s){if(i.indexOf("application/x-www-form-urlencoded")>-1)return(r=t,n=this.formSerializer,tG(r,new t7.classes.URLSearchParams,Object.assign({visitor:function(t,e,r,n){return t7.isNode&&V.isBuffer(t)?(this.append(e,t.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},n))).toString();if((o=V.isFileList(t))||i.indexOf("multipart/form-data")>-1){var u=this.env&&this.env.FormData;return tG(o?{"files[]":t}:t,u&&new u,this.formSerializer)}}return s||a?(e.setContentType("application/json",!1),/**
 * It takes a string, tries to parse it, and if it fails, it returns the stringified version
 * of the input
 *
 * @param {any} rawValue - The value to be stringified.
 * @param {Function} parser - A function that parses a string into a JavaScript object.
 * @param {Function} encoder - A function that takes a value and returns a string.
 *
 * @returns {string} A stringified version of the rawValue.
 */function(t,e,r){if(V.isString(t))try{return(0,JSON.parse)(t),V.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(0,JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){var e=this.transitional||et.transitional,r=e&&e.forcedJSONParsing,n="json"===this.responseType;if(t&&V.isString(t)&&(r&&!this.responseType||n)){var o=e&&e.silentJSONParsing;try{return JSON.parse(t)}catch(t){if(!o&&n){if("SyntaxError"===t.name)throw X.from(t,X.ERR_BAD_RESPONSE,this,null,this.response);throw t}}}return t}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:t7.classes.FormData,Blob:t7.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};function ee(t){if(Array.isArray(t))return t}function er(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function en(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function eo(t,e){if(t){if("string"==typeof t)return en(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if("Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return en(t,e)}}function ei(t,e){return ee(t)||function(t,e){var r,n,o=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=o){var i=[],a=!0,s=!1;try{for(o=o.call(t);!(a=(r=o.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,n=t}finally{try{a||null==o.return||o.return()}finally{if(s)throw n}}return i}}(t,e)||eo(t,e)||er()}function ea(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function es(t){return function(t){if(Array.isArray(t))return en(t)}(t)||ea(t)||eo(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}V.forEach(["delete","get","head","post","put","patch"],function(t){et.headers[t]={}});// RawAxiosHeaders whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var eu=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} rawHeaders Headers needing to be parsed
 *
 * @returns {Object} Headers parsed into an object
 */ef=function(t){var e,r,n,o={};return t&&t.split("\n").forEach(function(t){n=t.indexOf(":"),e=t.substring(0,n).trim().toLowerCase(),r=t.substring(n+1).trim(),!e||o[e]&&eu[e]||("set-cookie"===e?o[e]?o[e].push(r):o[e]=[r]:o[e]=o[e]?o[e]+", "+r:r)}),o},ec=Symbol("internals");function el(t){return t&&String(t).trim().toLowerCase()}function eh(t){return!1===t||null==t?t:V.isArray(t)?t.map(eh):String(t)}function ep(t,e,r,n,o){if(V.isFunction(n))return n.call(this,e,r);if(o&&(e=r),V.isString(e)){if(V.isString(n))return -1!==e.indexOf(n);if(V.isRegExp(n))return n.test(e)}}var ed=/*#__PURE__*/function(){function t(e){W(this,t),e&&this.set(e)}return K(t,[{key:"set",value:function(t,e,r){var n,o=this;function i(t,e,r){var n=el(e);if(!n)throw Error("header name must be a non-empty string");var i=V.findKey(o,n);i&&void 0!==o[i]&&!0!==r&&(void 0!==r||!1===o[i])||(o[i||e]=eh(t))}var a=function(t,e){return V.forEach(t,function(t,r){return i(t,r,e)})};return V.isPlainObject(t)||t instanceof this.constructor?a(t,e):V.isString(t)&&(t=t.trim())&&(n=t,!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim()))?a(ef(t),e):null!=t&&i(e,t,r),this}},{key:"get",value:function(t,e){if(t=el(t)){var r=V.findKey(this,t);if(r){var n=this[r];if(!e)return n;if(!0===e)return function(t){for(var e,r=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;e=n.exec(t);)r[e[1]]=e[2];return r}(n);if(V.isFunction(e))return e.call(this,n,r);if(V.isRegExp(e))return e.exec(n);throw TypeError("parser must be boolean|regexp|function")}}}},{key:"has",value:function(t,e){if(t=el(t)){var r=V.findKey(this,t);return!!(r&&void 0!==this[r]&&(!e||ep(this,this[r],r,e)))}return!1}},{key:"delete",value:function(t,e){var r=this,n=!1;function o(t){if(t=el(t)){var o=V.findKey(r,t);o&&(!e||ep(r,r[o],o,e))&&(delete r[o],n=!0)}}return V.isArray(t)?t.forEach(o):o(t),n}},{key:"clear",value:function(t){for(var e=Object.keys(this),r=e.length,n=!1;r--;){var o=e[r];(!t||ep(this,this[o],o,t,!0))&&(delete this[o],n=!0)}return n}},{key:"normalize",value:function(t){var e=this,r={};return V.forEach(this,function(n,o){var i=V.findKey(r,o);if(i){e[i]=eh(n),delete e[o];return}var a=t?o.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,function(t,e,r){return e.toUpperCase()+r}):String(o).trim();a!==o&&delete e[o],e[a]=eh(n),r[a]=!0}),this}},{key:"concat",value:function(){for(var t,e=arguments.length,r=Array(e),n=0;n<e;n++)r[n]=arguments[n];return(t=this.constructor).concat.apply(t,[this].concat(es(r)))}},{key:"toJSON",value:function(t){var e=Object.create(null);return V.forEach(this,function(r,n){null!=r&&!1!==r&&(e[n]=t&&V.isArray(r)?r.join(", "):r)}),e}},{key:Symbol.iterator,value:function(){return Object.entries(this.toJSON())[Symbol.iterator]()}},{key:"toString",value:function(){return Object.entries(this.toJSON()).map(function(t){var e=ei(t,2);return e[0]+": "+e[1]}).join("\n")}},{key:Symbol.toStringTag,get:function(){return"AxiosHeaders"}}],[{key:"from",value:function(t){return t instanceof this?t:new this(t)}},{key:"concat",value:function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];var o=new this(t);return r.forEach(function(t){return o.set(t)}),o}},{key:"accessor",value:function(t){var e=(this[ec]=this[ec]={accessors:{}}).accessors,r=this.prototype;function n(t){var n,o=el(t);e[o]||(n=V.toCamelCase(" "+t),["get","set","has"].forEach(function(e){Object.defineProperty(r,e+n,{value:function(r,n,o){return this[e].call(this,t,r,n,o)},configurable:!0})}),e[o]=!0)}return V.isArray(t)?t.forEach(n):n(t),this}}]),t}();function ey(t,e){var r=this||et,n=e||r,o=ed.from(n.headers),i=n.data;return V.forEach(t,function(t){i=t.call(r,i,o.normalize(),e?e.status:void 0)}),o.normalize(),i}function eg(t){return!!(t&&t.__CANCEL__)}/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @param {string=} message The message.
 * @param {Object=} config The config.
 * @param {Object=} request The request.
 *
 * @returns {CanceledError} The created error.
 */function ev(t,e,r){X.call(this,null==t?"canceled":t,X.ERR_CANCELED,e,r),this.name="CanceledError"}ed.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),V.reduceDescriptors(ed.prototype,function(t,e){var r=t.value,n=e[0].toUpperCase()+e.slice(1);return{get:function(){return r},set:function(t){this[n]=t}}}),V.freezeMethods(ed),V.inherits(ev,X,{__CANCEL__:!0});var em=t7.hasStandardBrowserEnv?{write:function(t,e,r,n,o,i){var a=[t+"="+encodeURIComponent(e)];V.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),V.isString(n)&&a.push("path="+n),V.isString(o)&&a.push("domain="+o),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function eb(t,e){return t&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)?e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t:e}var ew=t7.hasStandardBrowserEnv?// whether the request URL is of the same origin as current location.
function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover its components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function n(t){var n=t;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return e&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return t=n(window.location.href),function(e){var r=V.isString(e)?n(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0},eE=/**
 * Calculate data maxRate
 * @param {Number} [samplesCount= 10]
 * @param {Number} [min= 1000]
 * @returns {Function}
 */function(t,e){var r,n=Array(t=t||10),o=Array(t),i=0,a=0;return e=void 0!==e?e:1e3,function(s){var u=Date.now(),f=o[a];r||(r=u),n[i]=s,o[i]=u;for(var c=a,l=0;c!==i;)l+=n[c++],c%=t;if((i=(i+1)%t)===a&&(a=(a+1)%t),!(u-r<e)){var h=f&&u-f;return h?Math.round(1e3*l/h):void 0}}};function eO(t,e){var r=0,n=eE(50,250);return function(o){var i=o.loaded,a=o.lengthComputable?o.total:void 0,s=i-r,u=n(s);r=i;var f={loaded:i,total:a,progress:a?i/a:void 0,bytes:s,rate:u||void 0,estimated:u&&a&&i<=a?(a-i)/u:void 0,event:o};f[e?"download":"upload"]=!0,t(f)}}var eA={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(t){return new Promise(function(e,r){var n,o,i,a=t.data,s=ed.from(t.headers).normalize(),u=t.responseType,f=t.withXSRFToken;function c(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}if(V.isFormData(a)){if(t7.hasStandardBrowserEnv||t7.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);// Let the browser set it
else if(!1!==(i=s.getContentType())){// fix semicolon duplication issue for ReactNative FormData implementation
var l,h=ee(l=i?i.split(";").map(function(t){return t.trim()}).filter(Boolean):[])||ea(l)||eo(l)||er(),p=h[0],d=h.slice(1);s.setContentType([p||"multipart/form-data"].concat(es(d)).join("; "))}}var y=new XMLHttpRequest;// HTTP basic authentication
if(t.auth){var g=t.auth.username||"",v=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(g+":"+v))}var m=eb(t.baseURL,t.url);function b(){if(y){// Prepare the response
var n,o=ed.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),i={data:u&&"text"!==u&&"json"!==u?y.response:y.responseText,status:y.status,statusText:y.statusText,headers:o,config:t,request:y};n=i.config.validateStatus,!i.status||!n||n(i.status)?e(i):r(new X("Request failed with status code "+i.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(i.status/100)-4],i.config,i.request,i)),c(),// Clean up request
y=null}}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(y.open(t.method.toUpperCase(),tQ(m,t.params,t.paramsSerializer),!0),// Set the request timeout in MS
y.timeout=t.timeout,"onloadend"in y?y.onloadend=b:y.onreadystatechange=function(){y&&4===y.readyState&&(0!==y.status||y.responseURL&&0===y.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(b)},// Handle browser request cancellation (as opposed to a manual cancellation)
y.onabort=function(){y&&(r(new X("Request aborted",X.ECONNABORTED,t,y)),// Clean up request
y=null)},// Handle low level network errors
y.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
r(new X("Network Error",X.ERR_NETWORK,t,y)),// Clean up request
y=null},// Handle timeout
y.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||t0;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),r(new X(e,n.clarifyTimeoutError?X.ETIMEDOUT:X.ECONNABORTED,t,y)),// Clean up request
y=null},t7.hasStandardBrowserEnv&&(f&&V.isFunction(f)&&(f=f(t)),f||!1!==f&&ew(m))){// Add xsrf header
var w=t.xsrfHeaderName&&t.xsrfCookieName&&em.read(t.xsrfCookieName);w&&s.set(t.xsrfHeaderName,w)}// Remove Content-Type if data is undefined
void 0===a&&s.setContentType(null),"setRequestHeader"in y&&V.forEach(s.toJSON(),function(t,e){y.setRequestHeader(e,t)}),V.isUndefined(t.withCredentials)||(y.withCredentials=!!t.withCredentials),u&&"json"!==u&&(y.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&y.addEventListener("progress",eO(t.onDownloadProgress,!0)),"function"==typeof t.onUploadProgress&&y.upload&&y.upload.addEventListener("progress",eO(t.onUploadProgress)),(t.cancelToken||t.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
o=function(e){y&&(r(!e||e.type?new ev(null,t,y):e),y.abort(),y=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));var E=(n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(m))&&n[1]||"";if(E&&-1===t7.protocols.indexOf(E)){r(new X("Unsupported protocol "+E+":",X.ERR_BAD_REQUEST,t));return}// Send the request
y.send(a||null)})}};V.forEach(eA,function(t,e){if(t){try{Object.defineProperty(t,"name",{value:e})}catch(t){// eslint-disable-next-line no-empty
}Object.defineProperty(t,"adapterName",{value:e})}});var eS=function(t){return"- ".concat(t)},eR={getAdapter:function(t){for(var e,r,n=(t=V.isArray(t)?t:[t]).length,o={},i=0;i<n;i++){e=t[i];var a=void 0;if(r=e,!V.isFunction(e)&&null!==e&&!1!==e&&void 0===(r=eA[(a=String(e)).toLowerCase()]))throw new X("Unknown adapter '".concat(a,"'"));if(r)break;o[a||"#"+i]=r}if(!r){var s=Object.entries(o).map(function(t){var e=ei(t,2),r=e[0],n=e[1];return"adapter ".concat(r," ")+(!1===n?"is not supported by the environment":"is not available in the build")});throw new X("There is no suitable adapter to dispatch the request "+(n?s.length>1?"since :\n"+s.map(eS).join("\n"):" "+eS(s[0]):"as no adapter specified"),"ERR_NOT_SUPPORT")}return r},adapters:eA};/**
 * Throws a `CanceledError` if cancellation has been requested.
 *
 * @param {Object} config The config that is to be used for the request
 *
 * @returns {void}
 */function eB(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ev(null,t)}function eT(t){return eB(t),t.headers=ed.from(t.headers),// Transform request data
t.data=ey.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1),eR.getAdapter(t.adapter||et.adapter)(t).then(function(e){return eB(t),// Transform response data
e.data=ey.call(t,t.transformResponse,e),e.headers=ed.from(e.headers),e},function(e){return!eg(e)&&(eB(t),e&&e.response&&(e.response.data=ey.call(t,t.transformResponse,e.response),e.response.headers=ed.from(e.response.headers))),Promise.reject(e)})}var eU=function(t){return t instanceof ed?t.toJSON():t};function eC(t,e){// eslint-disable-next-line no-param-reassign
e=e||{};var r={};function n(t,e,r){return V.isPlainObject(t)&&V.isPlainObject(e)?V.merge.call({caseless:r},t,e):V.isPlainObject(e)?V.merge({},e):V.isArray(e)?e.slice():e}// eslint-disable-next-line consistent-return
function o(t,e,r){return V.isUndefined(e)?V.isUndefined(t)?void 0:n(void 0,t,r):n(t,e,r)}// eslint-disable-next-line consistent-return
function i(t,e){if(!V.isUndefined(e))return n(void 0,e)}// eslint-disable-next-line consistent-return
function a(t,e){return V.isUndefined(e)?V.isUndefined(t)?void 0:n(void 0,t):n(void 0,e)}// eslint-disable-next-line consistent-return
function s(r,o,i){return i in e?n(r,o):i in t?n(void 0,r):void 0}var u={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:function(t,e){return o(eU(t),eU(e),!0)}};return V.forEach(Object.keys(Object.assign({},t,e)),function(n){var i=u[n]||o,a=i(t[n],e[n],n);V.isUndefined(a)&&i!==s||(r[n]=a)}),r}var eI="1.6.2",ej={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach(function(t,e){ej[t]=function(r){return(void 0===r?"undefined":l(r))===t||"a"+(e<1?"n ":" ")+t}});var ex={};/**
 * Transitional option validator
 *
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 *
 * @returns {function}
 */ej.transitional=function(t,e,r){function n(t,e){return"[Axios v"+eI+"] Transitional option '"+t+"'"+e+(r?". "+r:"")}// eslint-disable-next-line func-names
return function(r,o,i){if(!1===t)throw new X(n(o," has been removed"+(e?" in "+e:"")),X.ERR_DEPRECATED);return e&&!ex[o]&&(ex[o]=!0,// eslint-disable-next-line no-console
console.warn(n(o," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(r,o,i)}};var eP={assertOptions:/**
 * Assert object's properties type
 *
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 *
 * @returns {object}
 */function(t,e,r){if("object"!=typeof t)throw new X("options must be an object",X.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(t),o=n.length;o-- >0;){var i=n[o],a=e[i];if(a){var s=t[i],u=void 0===s||a(s,i,t);if(!0!==u)throw new X("option "+i+" must be "+u,X.ERR_BAD_OPTION_VALUE);continue}if(!0!==r)throw new X("Unknown option "+i,X.ERR_BAD_OPTION)}},validators:ej},eN=eP.validators,ek=/*#__PURE__*/function(){function t(e){W(this,t),this.defaults=e,this.interceptors={request:new tZ,response:new tZ}}return K(t,[{/**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */key:"request",value:function(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{};var r,n,o=(e=eC(this.defaults,e)).transitional,i=e.paramsSerializer,a=e.headers;void 0!==o&&eP.assertOptions(o,{silentJSONParsing:eN.transitional(eN.boolean),forcedJSONParsing:eN.transitional(eN.boolean),clarifyTimeoutError:eN.transitional(eN.boolean)},!1),null!=i&&(V.isFunction(i)?e.paramsSerializer={serialize:i}:eP.assertOptions(i,{encode:eN.function,serialize:eN.function},!0)),// Set config.method
e.method=(e.method||this.defaults.method||"get").toLowerCase();// Flatten headers
var s=a&&V.merge(a.common,a[e.method]);a&&V.forEach(["delete","get","head","post","put","patch","common"],function(t){delete a[t]}),e.headers=ed.concat(s,a);// filter out skipped interceptors
var u=[],f=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(f=f&&t.synchronous,u.unshift(t.fulfilled,t.rejected))});var c=[];this.interceptors.response.forEach(function(t){c.push(t.fulfilled,t.rejected)});var l=0;if(!f){var h=[eT.bind(this),void 0];for(h.unshift.apply(h,u),h.push.apply(h,c),n=h.length,r=Promise.resolve(e);l<n;)r=r.then(h[l++],h[l++]);return r}n=u.length;var p=e;for(l=0;l<n;){var d=u[l++],y=u[l++];try{p=d(p)}catch(t){y.call(this,t);break}}try{r=eT.call(this,p)}catch(t){return Promise.reject(t)}for(l=0,n=c.length;l<n;)r=r.then(c[l++],c[l++]);return r}},{key:"getUri",value:function(t){return tQ(eb((t=eC(this.defaults,t)).baseURL,t.url),t.params,t.paramsSerializer)}}]),t}();V.forEach(["delete","get","head","options"],function(t){/*eslint func-names:0*/ek.prototype[t]=function(e,r){return this.request(eC(r||{},{method:t,url:e,data:(r||{}).data}))}}),V.forEach(["post","put","patch"],function(t){/*eslint func-names:0*/function e(e){return function(r,n,o){return this.request(eC(o||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}ek.prototype[t]=e(),ek.prototype[t+"Form"]=e(!0)});/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @param {Function} executor The executor function.
 *
 * @returns {CancelToken}
 */var eL=/*#__PURE__*/function(){function t(e){if(W(this,t),"function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(t){r=t});var r,n=this;// eslint-disable-next-line func-names
this.promise.then(function(t){if(n._listeners){for(var e=n._listeners.length;e-- >0;)n._listeners[e](t);n._listeners=null}}),// eslint-disable-next-line func-names
this.promise.then=function(t){// eslint-disable-next-line func-names
var e,r=new Promise(function(t){n.subscribe(t),e=t}).then(t);return r.cancel=function(){n.unsubscribe(e)},r},e(function(t,e,o){n.reason||(n.reason=new ev(t,e,o),r(n.reason))})}return K(t,[{/**
   * Throws a `CanceledError` if cancellation has been requested.
   */key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{/**
   * Subscribe to the cancel signal
   */key:"subscribe",value:function(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}},{/**
   * Unsubscribe from the cancel signal
   */key:"unsubscribe",value:function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}}}],[{key:"source",value:/**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */function(){var e;return{token:new t(function(t){e=t}),cancel:e}}}]),t}(),e_={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(e_).forEach(function(t){var e=ei(t,2),r=e[0];e_[e[1]]=r});// Create the default instance to be exported
var eF=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 *
 * @returns {Axios} A new instance of Axios
 */function t(e){var r=new ek(e),n=p(ek.prototype.request,r);return V.extend(n,ek.prototype,r,{allOwnKeys:!0}),V.extend(n,r,null,{allOwnKeys:!0}),// Factory for creating new instances
n.create=function(r){return t(eC(e,r))},n}(et);function eD(){return(eD=c(function(){var t;return h(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),[4,eF.get("https://api.thecatapi.com/v1/breeds")];case 1:return[2,e.sent().data];case 2:throw console.error("Error fetching cat breeds:",(t=e.sent()).message),t;case 3:return[2]}})})).apply(this,arguments)}function eM(){return(eM=c(function(t){var e;return h(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,eF.get("https://api.thecatapi.com/v1/images/search?breed_ids=".concat(t))];case 1:return[2,r.sent().data];case 2:throw console.error("Error fetching cat by breed:",(e=r.sent()).message),e;case 3:return[2]}})})).apply(this,arguments)}// Expose Axios class to allow class inheritance
eF.Axios=ek,// Expose Cancel & CancelToken
eF.CanceledError=ev,eF.CancelToken=eL,eF.isCancel=eg,eF.VERSION=eI,eF.toFormData=tG,// Expose AxiosError class
eF.AxiosError=X,// alias for CanceledError for backward compatibility
eF.Cancel=eF.CanceledError,// Expose all/spread
eF.all=function(t){return Promise.all(t)},eF.spread=function(t){return function(e){return t.apply(null,e)}},// Expose isAxiosError
eF.isAxiosError=function(t){return V.isObject(t)&&!0===t.isAxiosError},// Expose mergeConfig
eF.mergeConfig=eC,eF.AxiosHeaders=ed,eF.formToJSON=function(t){return t9(V.isHTMLForm(t)?new FormData(t):t)},eF.getAdapter=eR.getAdapter,eF.HttpStatusCode=e_,eF.default=eF,eF.Axios,eF.AxiosError,eF.CanceledError,eF.isCancel,eF.CancelToken,eF.VERSION,eF.all,eF.Cancel,eF.isAxiosError,eF.spread,eF.toFormData,eF.AxiosHeaders,eF.HttpStatusCode,eF.formToJSON,eF.getAdapter,eF.mergeConfig,eF.defaults.headers.common["x-api-key"]="live_OL8SUtRIAGOzXkWDSShPMT170hWdbM4qS9Xi0H633A3UX4kkSigjkNpFAyrQEhlJ",document.addEventListener("DOMContentLoaded",c(function(){var t,e,r,n,o,i;return h(this,function(a){switch(a.label){case 0:t=document.querySelector(".breed-select"),e=document.querySelector(".loader"),r=document.querySelector(".loader"),n=document.querySelector(".error"),o=document.querySelector(".cat-info"),a.label=1;case 1:return a.trys.push([1,3,,4]),e.style.display="block",[4,function(){return eD.apply(this,arguments)}()];case 2:return(i=a.sent()).forEach(function(e){var r=document.createElement("option");r.value=e.id,r.text=e.name,t.appendChild(r)}),e.style.display="none",t.addEventListener("change",c(function(){var e,n,a;return h(this,function(s){switch(s.label){case 0:if(!(e=t.value))return[3,4];s.label=1;case 1:return s.trys.push([1,3,,4]),r.style.display="block",[4,function(t){return eM.apply(this,arguments)}(e)];case 2:return n=s.sent(),o.innerHTML='\n              <img src="'.concat(n[0].url,'" alt="Cat Image">\n              <p>Breed: ').concat(i.find(function(t){return t.id===e}).name,"</p>\n              <p>Description: ").concat(n[0].breeds[0].description,"</p>\n              <p>Temperament: ").concat(n[0].breeds[0].temperament,"</p>\n            "),r.style.display="none",o.style.display="block",[3,4];case 3:return console.error(a=s.sent()),r.style.display="none",a.style.display="block",o.style.display="none",[3,4];case 4:return[2]}})})),[3,4];case 3:return console.error(a.sent()),e.style.display="none",n.style.display="block",[3,4];case 4:return[2]}})}))}();//# sourceMappingURL=index.4519dc82.js.map

//# sourceMappingURL=index.4519dc82.js.map
