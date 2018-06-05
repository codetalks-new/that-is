"use strict";

const { expect, assert, should } = require("chai");
const that = require("../dist/index.js").default;

describe("that-is function test", () => {
  it("isArray should return true", () => {
    assert.isTrue(that.isArray([]));
    assert.isTrue(that.isArray(new Array()));
    const arr1 = [1, 2, null];
    assert.isTrue(that.isArray(arr1));
  });
  it("isArray should return false", () => {
    assert.isFalse(that.isArray(undefined));
    assert.isFalse(that.isArray(null));
    assert.isFalse(that.isArray(1));
    assert.isFalse(that.isArray(0));
    assert.isFalse(that.isArray(""));
    assert.isFalse(that.isArray("abc"));
  });
  it("isInteger should return true", () => {
    assert.isTrue(that.isInteger(3.0));
    assert.isTrue(that.isInteger(4.0));
    assert.isTrue(that.isInteger(0.0));
    assert.isTrue(that.isInteger(0.0));
    assert.isTrue(that.isInteger(10.0));
  });
  it("isInteger should return false", () => {
    assert.isFalse(that.isInteger(3.1));
    assert.isFalse(that.isInteger(4.0001));
    assert.isFalse(that.isInteger(0.000001));
    assert.isFalse(that.isInteger(0.00000001));
    assert.isFalse(that.isInteger(10.1));
    assert.isFalse(that.isInteger("10"));
    assert.isFalse(that.isInteger("0"));
    assert.isFalse(that.isInteger(NaN));
    assert.isFalse(that.isInteger(false));
    assert.isFalse(that.isInteger(true));
    assert.isFalse(that.isInteger(null));
    assert.isFalse(that.isInteger(undefined));
  });

  it("isObject should return true", () => {
    assert.isTrue(that.isObject({}));
    assert.isTrue(that.isObject(Object.create(null)));
    const f = function() {};
    assert.isTrue(that.isObject(f));
    const f2 = () => {};
    assert.isTrue(that.isObject(f2));
    assert.isTrue(that.isObject([]));
  });
  it("isObject should return false", () => {
    assert.isFalse(that.isObject(""));
    assert.isFalse(that.isObject(30));
    assert.isFalse(that.isObject(null));
    assert.isFalse(that.isObject(undefined));
    assert.isFalse(that.isObject(true));
    assert.isFalse(that.isObject(false));
  });
  it("isPlainObject should return true", () => {
    assert.isTrue(that.isPlainObject({}));
    assert.isTrue(that.isPlainObject(Object.create(null)));
  });
  it("isPlainObject should return false", () => {
    const f = function() {};
    assert.isFalse(that.isPlainObject(f));
    const f2 = () => {};
    assert.isFalse(that.isPlainObject(f2));
    assert.isFalse(that.isPlainObject([]));
  });

  it("isRegExp should return true", () => {
    assert.isTrue(that.isRegExp(/\w/));
    assert.isTrue(that.isRegExp(/\./));
    assert.isTrue(that.isRegExp(/[0-9]/));
    assert.isTrue(that.isRegExp(/([a-z])/));
  });

  it("isRegExp should return false", () => {
    assert.isFalse(that.isRegExp("/w/"));
    assert.isFalse(that.isRegExp("abc"));
    assert.isFalse(that.isRegExp(123));
    const obj = { name: "123" };
    assert.isFalse(that.isRegExp(obj));
  });

  it("isCallable should return true", () => {
    const f = function() {};
    assert.isTrue(that.isCallable(f));
    const f2 = () => {};
    assert.isTrue(that.isCallable(f2));
    function f3() {}
    assert.isTrue(that.isCallable(f3));
  });

  it("isCallable should return false", () => {
    assert.isFalse(that.isCallable(""));
    assert.isFalse(that.isCallable(1));
    assert.isFalse(that.isCallable(Object.create(null)));
    assert.isFalse(that.isCallable(null));
    assert.isFalse(that.isCallable(false));
  });

  it("should return true", () => {
    assert.isTrue(that.isArray([]));
    assert.isTrue(that.isCallable(function() {}));
    assert.isTrue(that.isConstructor(function Person() {}));
    assert.isTrue(that.isInteger(3.0));
    assert.isTrue(that.isNull(null));
    assert.isTrue(that.isUndefined(undefined));
    assert.isTrue(that.isSymbol(Symbol.hasInstance));
  });

  it("should return false", () => {
    assert.isFalse(that.isNull(undefined));
    assert.isFalse(that.isNull(false));
    assert.isFalse(that.isNull(true));
    assert.isFalse(that.isNull(0));
    assert.isFalse(that.isNull(""));
    assert.isFalse(that.isUndefined(null));
    assert.isFalse(that.isUndefined(false));
    assert.isFalse(that.isUndefined(true));
    assert.isFalse(that.isUndefined(0));
    assert.isFalse(that.isUndefined(""));
    assert.isFalse(that.isSymbol(undefined));
    assert.isFalse(that.isSymbol(false));
    assert.isFalse(that.isSymbol(true));
    assert.isFalse(that.isSymbol(0));
    assert.isFalse(that.isSymbol(null));
    assert.isFalse(that.isSymbol(""));
  });

  it("That.type function tests", () => {
    expect(that.type(undefined)).eq(0);
    expect(that.type(null)).eq(1);
    expect(that.type(false)).eq(2);
    expect(that.type(true)).eq(2);
    expect(that.type(true)).eq(2);
    expect(that.type("a")).eq(3);
    expect(that.type(Symbol.hasInstance)).eq(4);
    expect(that.type(0)).eq(5);
    expect(that.type(0.0)).eq(5);
    expect(that.type(NaN)).eq(5);
    expect(that.type(function() {})).eq(6);
    expect(that.type(Object.create(null))).eq(6);
    expect(that.type([])).eq(6);
    expect(that.type({})).eq(6);
  });

  it("Test isInteger Polly method", () => {
    const nativeIsInteger = Number.isInteger;
    Number.isInteger = null;
    assert.isTrue(that.isInteger(1.0));
    assert.isTrue(that.isInteger(2));
    assert.isTrue(that.isInteger(0));

    assert.isFalse(that.isInteger(1.01));
    assert.isFalse(that.isInteger(2.001));
    assert.isFalse(that.isInteger(0.00001));
    assert.isFalse(that.isInteger("1"));
    Number.isInteger = nativeIsInteger;
  });

  it("Test isPropertyKey", () => {
    assert.isTrue(that.isPropertyKey("abc"));
    assert.isTrue(that.isPropertyKey(Symbol.hasInstance));
    assert.isFalse(that.isPropertyKey(1));
    assert.isFalse(that.isPropertyKey(false));
    assert.isFalse(that.isPropertyKey({}));
  });

  it("Other Test", () => {
    assert.isTrue(that.isUndefined(that()));
  });

  it("Test Array.isArray Pollyfill", () => {
    const nativeArray = Array.isArray;
    Array.isArray = null;
    assert.isTrue(that.isArray([]));
    assert.isTrue(that.isArray(new Array()));
    const arr1 = [1, 2, null];
    assert.isTrue(that.isArray(arr1));

    assert.isFalse(that.isArray(undefined));
    assert.isFalse(that.isArray(null));
    assert.isFalse(that.isArray(1));
    assert.isFalse(that.isArray(0));
    assert.isFalse(that.isArray(""));
    assert.isFalse(that.isArray("abc"));

    Array.isArray = nativeArray;
  });
});
