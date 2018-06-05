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
export declare const enum ThatType {
    undefined_t = 0,
    null_t = 1,
    boolean_t = 2,
    string_t = 3,
    symbol_t = 4,
    number_t = 5,
    object_t = 6,
}
declare class That {
    /**
     * return the ThatType of x
     * @param x Any value
     */
    static type(x: any): ThatType;
    /**
     * @param a Any value
     *  7.2 Testing and Comparison Operations
     *  https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
     * 7.2.2 IsArray(argument)
     * https://tc39.github.io/ecma262/#sec-isarray
     */
    static isArray(x: any): x is any[];
    /**
     * Check if x is a number
     * @param x Any value
     */
    static isNumber(x: any): x is number;
    /**
     * Check if x is Integer number
     * @param x Any value
     */
    static isInteger(x: any): boolean;
    /**
     *
     * 6.1.1 The Undefined Type
     * https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
     * @param x Any value
     */
    static isUndefined(x: any): x is undefined;
    /**
     *
     * 6.1.2 The Null Type
     * https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
     * @param x any value
     */
    static isNull(x: any): x is null;
    /**
     *
     * 6.1.5 The Symbol Type
     * https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
     * @param x Any value
     */
    static isSymbol(x: any): x is symbol;
    /**
     *
     * @param x
     * 6.1.7 The Object Type
     * https://tc39.github.io/ecma262/#sec-object-type
     */
    static isObject<T>(x: T | undefined | null | boolean | string | symbol | number): x is T;
    /**
     *
     * @param x Any value
     * 7.2.3 IsCallable(argument)
     * https://tc39.github.io/ecma262/#sec-iscallable
     */
    static isCallable(x: any): x is Function;
    /**
     *
     * @param x Any value
     * 7.2.4 IsConstructor(argument)
     * https://tc39.github.io/ecma262/#sec-isconstructor
     */
    static isConstructor(x: any): x is Function;
    /**
     *
     * @param x  Any value
     * 7.2.7 IsPropertyKey(argument)
     * https://tc39.github.io/ecma262/#sec-ispropertykey
     */
    static isPropertyKey(x: any): x is string | symbol;
    /**
     * is plain object not function or others
     * @param x Any value
     */
    static isPlainObject(x: any): boolean;
    /**
     * isRegExp or not
     * @param x Any value
     */
    static isRegExp(x: any): x is RegExp;
}
export default That;
