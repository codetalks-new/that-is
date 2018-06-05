/**
 * that is a class collect a set of utility methods
 * you can use to judge what type of that is?
 * At first ,most of the code was taken from reflect-metadata project.
 *
 */

/**
 * JS 基本类型枚举
 * 6 ECMAScript Data Typ0es and Values
 * https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
 */
export const enum ThatType {
  undefined_t, // 0
  null_t,
  boolean_t,
  string_t,
  symbol_t,
  number_t,
  object_t
}

const _toStr = Object.prototype.toString;

class That {
  /**
   * return the ThatType of x
   * @param x Any value
   */
  static type(x: any): ThatType {
    if (x === null) {
      return ThatType.null_t;
    }
    switch (typeof x) {
      case "undefined":
        return ThatType.undefined_t;
      case "boolean":
        return ThatType.boolean_t;
      case "string":
        return ThatType.string_t;
      case "symbol":
        return ThatType.symbol_t;
      case "number":
        return ThatType.number_t;
      case "object":
        return ThatType.object_t;
      default:
        return ThatType.object_t;
    }
  }

  /**
   * @param a Any value
   *  7.2 Testing and Comparison Operations
   *  https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
   * 7.2.2 IsArray(argument)
   * https://tc39.github.io/ecma262/#sec-isarray
   */
  static isArray(x: any): x is any[] {
    if (Array.isArray) {
      return Array.isArray(x);
    } else {
      if (x instanceof Object) {
        return x instanceof Array;
      } else {
        return _toStr.call(x) === "[object Array]";
      }
    }
  }

  /**
   * Check if x is a number
   * @param x Any value
   */
  static isNumber(x: any): x is number {
    return typeof x === "number";
  }

  /**
   * Check if x is Integer number
   * @param x Any value
   */
  static isInteger(x: any): boolean {
    if (Number.isInteger) {
      return Number.isInteger(x);
    } else {
      if (this.isNumber(x)) {
        return isFinite(x) && Math.floor(x) === x;
      } else {
        return false;
      }
    }
  }

  /**
   *
   * 6.1.1 The Undefined Type
   * https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
   * @param x Any value
   */
  static isUndefined(x: any): x is undefined {
    return x === undefined;
  }
  /**
   *
   * 6.1.2 The Null Type
   * https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
   * @param x any value
   */
  static isNull(x: any): x is null {
    return x === null;
  }
  /**
   *
   * 6.1.5 The Symbol Type
   * https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
   * @param x Any value
   */
  static isSymbol(x: any): x is symbol {
    return typeof x === "symbol";
  }
  /**
   *
   * @param x
   * 6.1.7 The Object Type
   * https://tc39.github.io/ecma262/#sec-object-type
   */
  static isObject<T>(
    x: T | undefined | null | boolean | string | symbol | number
  ): x is T {
    return typeof x === "object" ? x !== null : typeof x === "function";
  }

  /**
   *
   * @param x Any value
   * 7.2.3 IsCallable(argument)
   * https://tc39.github.io/ecma262/#sec-iscallable
   */
  static isCallable(x: any): x is Function {
    // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
    return typeof x === "function";
  }
  /**
   *
   * @param x Any value
   * 7.2.4 IsConstructor(argument)
   * https://tc39.github.io/ecma262/#sec-isconstructor
   */
  static isConstructor(x: any): x is Function {
    // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
    return typeof x === "function";
  }
  /**
   *
   * @param x  Any value
   * 7.2.7 IsPropertyKey(argument)
   * https://tc39.github.io/ecma262/#sec-ispropertykey
   */
  static isPropertyKey(x: any): x is string | symbol {
    switch (That.type(x)) {
      case ThatType.string_t:
        return true;
      case ThatType.symbol_t:
        return true;
      default:
        return false;
    }
  }

  /**
   * is plain object not function or others
   * @param x Any value
   */
  static isPlainObject(x: any): boolean {
    return _toStr.call(x) === "[object Object]";
  }

  /**
   * isRegExp or not
   * @param x Any value
   */
  static isRegExp(x: any): x is RegExp {
    return _toStr.call(x) === "[object RegExp]";
  }
}
export default That;
