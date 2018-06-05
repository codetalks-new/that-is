"use strict";
/**
 * that is a class collect a set of utility methods
 * you can use to judge what type of that is?
 * At first ,most of the code was taken from reflect-metadata project.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _toStr = Object.prototype.toString;
var That = /** @class */ (function () {
    function That() {
    }
    /**
     * return the ThatType of x
     * @param x Any value
     */
    That.type = function (x) {
        if (x === null) {
            return 1 /* null_t */;
        }
        switch (typeof x) {
            case "undefined":
                return 0 /* undefined_t */;
            case "boolean":
                return 2 /* boolean_t */;
            case "string":
                return 3 /* string_t */;
            case "symbol":
                return 4 /* symbol_t */;
            case "number":
                return 5 /* number_t */;
            case "object":
                return 6 /* object_t */;
            default:
                return 6 /* object_t */;
        }
    };
    /**
     * @param a Any value
     *  7.2 Testing and Comparison Operations
     *  https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
     * 7.2.2 IsArray(argument)
     * https://tc39.github.io/ecma262/#sec-isarray
     */
    That.isArray = function (x) {
        return Array.isArray
            ? Array.isArray(x)
            : x instanceof Object
                ? x instanceof Array
                : _toStr.call(x) === "[object Array]";
    };
    /**
     * Check if x is a number
     * @param x Any value
     */
    That.isNumber = function (x) {
        return typeof x === "number";
    };
    /**
     * Check if x is Integer number
     * @param x Any value
     */
    That.isInteger = function (x) {
        if (Number.isInteger) {
            return Number.isInteger(x);
        }
        else {
            if (this.isNumber(x)) {
                return isFinite(x) && Math.floor(x) === x;
            }
            else {
                return false;
            }
        }
    };
    /**
     *
     * 6.1.1 The Undefined Type
     * https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
     * @param x Any value
     */
    That.isUndefined = function (x) {
        return x === undefined;
    };
    /**
     *
     * 6.1.2 The Null Type
     * https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
     * @param x any value
     */
    That.isNull = function (x) {
        return x === null;
    };
    /**
     *
     * 6.1.5 The Symbol Type
     * https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
     * @param x Any value
     */
    That.isSymbol = function (x) {
        return typeof x === "symbol";
    };
    /**
     *
     * @param x
     * 6.1.7 The Object Type
     * https://tc39.github.io/ecma262/#sec-object-type
     */
    That.isObject = function (x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
    };
    /**
     *
     * @param x Any value
     * 7.2.3 IsCallable(argument)
     * https://tc39.github.io/ecma262/#sec-iscallable
     */
    That.isCallable = function (x) {
        // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
        return typeof x === "function";
    };
    /**
     *
     * @param x Any value
     * 7.2.4 IsConstructor(argument)
     * https://tc39.github.io/ecma262/#sec-isconstructor
     */
    That.isConstructor = function (x) {
        // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
        return typeof x === "function";
    };
    /**
     *
     * @param x  Any value
     * 7.2.7 IsPropertyKey(argument)
     * https://tc39.github.io/ecma262/#sec-ispropertykey
     */
    That.isPropertyKey = function (x) {
        switch (That.type(x)) {
            case 3 /* string_t */:
                return true;
            case 4 /* symbol_t */:
                return true;
            default:
                return false;
        }
    };
    /**
     * is plain object not function or others
     * @param x Any value
     */
    That.isPlainObject = function (x) {
        return _toStr.call(x) === "[object Object]";
    };
    /**
     * isRegExp or not
     * @param x Any value
     */
    That.isRegExp = function (x) {
        return _toStr.call(x) === "[object RegExp]";
    };
    return That;
}());
exports.default = That;
