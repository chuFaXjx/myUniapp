(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 3);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';

var messages = {};

var locale;

{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}

function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}

function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function setLocale$1(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom };

  }
}

function populateParameters(result) {var _result$brand =





  result.brand,brand = _result$brand === void 0 ? '' : _result$brand,_result$model = result.model,model = _result$model === void 0 ? '' : _result$model,_result$system = result.system,system = _result$system === void 0 ? '' : _result$system,_result$language = result.language,language = _result$language === void 0 ? '' : _result$language,theme = result.theme,version = result.version,platform = result.platform,fontSizeSetting = result.fontSizeSetting,SDKVersion = result.SDKVersion,pixelRatio = result.pixelRatio,deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__A4DC26E",
    appName: "my-Uniapp",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.5.3",
    uniRuntimeVersion: "3.5.3",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined };


  Object.assign(result, parameters);
}

function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc' };

    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}

function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}

function getAppLanguage(defaultLanguage) {
  return getLocale$1 ?
  getLocale$1() :
  defaultLanguage;
}

function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }

  return _hostName;
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  } };


var showActionSheet = {
  args: function args(fromArgs) {
    if (typeof fromArgs === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  } };


var getAppBaseInfo = {
  returnValue: function returnValue(result) {var _result =
    result,version = _result.version,language = _result.language,SDKVersion = _result.SDKVersion,theme = _result.theme;

    var _hostName = getHostName(result);

    var hostLanguage = language.replace('_', '-');

    result = sortObject(Object.assign(result, {
      appId: "__UNI__A4DC26E",
      appName: "my-Uniapp",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme }));

  } };


var getDeviceInfo = {
  returnValue: function returnValue(result) {var _result2 =
    result,brand = _result2.brand,model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);

    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model }));

  } };


var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);

    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0 }));

  } };


var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {var
    locationReducedAccuracy = result.locationReducedAccuracy;

    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


/**
                    * 框架内 try-catch
                    */
/**
                        * 开发者 try-catch
                        */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}

function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}

var cid;
var cidErrMsg;
var enabled;

function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}

function invokePushCallback(
args)
{
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message) };

    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message) });

    });
  }
}

var getPushCidCallbacks = [];

function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}

function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }var _getApiCallbacks =




  getApiCallbacks(args),success = _getApiCallbacks.success,fail = _getApiCallbacks.fail,complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'unipush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid };

        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '') };

        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}

var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};

var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"my-Uniapp","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: '' };

        properties.virtualHostClass = {
          type: null,
          value: '' };

      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"my-Uniapp","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"my-Uniapp","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"my-Uniapp","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"my-Uniapp","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent']).call(this.$scope, event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!*************************************!*\
  !*** D:/uniapp/myUniapp/pages.json ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */
/*!********************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 13));

var _mpMixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mpMixin.js */ 14));

var _luchRequest = _interopRequireDefault(__webpack_require__(/*! ./libs/luch-request */ 15));


var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/util/route.js */ 33));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 37));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 38));

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 39));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 40));

var _index = _interopRequireDefault(__webpack_require__(/*! ./libs/function/index.js */ 41));


var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 43));

var _props = _interopRequireDefault(__webpack_require__(/*! ./libs/config/props.js */ 44));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 134));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/config/color.js */ 92));

var _platform = _interopRequireDefault(__webpack_require__(/*! ./libs/function/platform */ 135));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // 看到此报错，是因为没有配置vue.config.js的【transpileDependencies】，详见：https://www.uviewui.com/components/npmSetting.html#_5-cli模式额外配置
var pleaseSetTranspileDependencies = {},babelTest = pleaseSetTranspileDependencies === null || pleaseSetTranspileDependencies === void 0 ? void 0 : pleaseSetTranspileDependencies.test; // 引入全局mixin
var $u = _objectSpread(_objectSpread({
  route: _route.default,
  date: _index.default.timeFormat, // 另名date
  colorGradient: _colorGradient.default.colorGradient,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  colorToRgba: _colorGradient.default.colorToRgba,
  test: _test.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: new _luchRequest.default(),
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default,
  mixin: _mixin.default,
  mpMixin: _mpMixin.default,
  props: _props.default },
_index.default), {}, {
  color: _color.default,
  platform: _platform.default });


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {return uni.$u.timeFormat(timestamp, format);});
  Vue.filter('date', function (timestamp, format) {return uni.$u.timeFormat(timestamp, format);});
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {return uni.$u.timeFrom(timestamp, format);});
  // 同时挂载到uni和Vue.prototype中

  // 只有vue，挂载到Vue.prototype才有意义，因为nvue中全局Vue.prototype和Vue.mixin是无效的
  Vue.prototype.$u = $u;
  Vue.mixin(_mixin.default);

};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 13 */
/*!*******************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/mixin/mixin.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  // 定义每个组件都可能需要用到的外部样式以及类名
  props: {
    // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
    customStyle: {
      type: [Object, String],
      default: function _default() {return {};} },

    customClass: {
      type: String,
      default: '' },

    // 跳转的页面路径
    url: {
      type: String,
      default: '' },

    // 页面跳转的类型
    linkType: {
      type: String,
      default: 'navigateTo' } },


  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  created: function created() {
    // 组件当中，只有created声明周期，为了能在组件使用，故也在created中将方法挂载到$u
    this.$u.getRect = this.$uGetRect;
  },
  computed: {
    // 在2.x版本中，将会把$u挂载到uni对象下，导致在模板中无法使用uni.$u.xxx形式
    // 所以这里通过computed计算属性将其附加到this.$u上，就可以在模板或者js中使用uni.$u.xxx
    // 只在nvue环境通过此方式引入完整的$u，其他平台会出现性能问题，非nvue则按需引入（主要原因是props过大）
    $u: function $u() {

      // 在非nvue端，移除props，http，mixin等对象，避免在小程序setData时数据过大影响性能
      return uni.$u.deepMerge(uni.$u, {
        props: undefined,
        http: undefined,
        mixin: undefined });





    },
    /**
        * 生成bem规则类名
        * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
        * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
        * @param {String} name 组件名称
        * @param {Array} fixed 一直会存在的类名
        * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
        * @returns {Array|string}
        */
    bem: function bem() {
      return function (name, fixed, change) {var _this = this;
        // 类名前缀
        var prefix = "u-".concat(name, "--");
        var classes = {};
        if (fixed) {
          fixed.map(function (item) {
            // 这里的类名，会一直存在
            classes[prefix + _this[item]] = true;
          });
        }
        if (change) {
          change.map(function (item) {
            // 这里的类名，会根据this[item]的值为true或者false，而进行添加或者移除某一个类
            _this[item] ? classes[prefix + item] = _this[item] : delete classes[prefix + item];
          });
        }
        return Object.keys(classes);
        // 支付宝，头条小程序无法动态绑定一个数组类名，否则解析出来的结果会带有","，而导致失效



      };
    } },

  methods: {
    // 跳转某一个页面
    openPage: function openPage() {var urlKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'url';
      var url = this[urlKey];
      if (url) {
        // 执行类似uni.navigateTo的方法
        uni[this.linkType]({
          url: url });

      }
    },
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this2 = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this2)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this3 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = {};
      // 这里的本质原理是，通过获取父组件实例(也即类似u-radio的父组件u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      // 此处并不会自动更新子组件的数据，而是依赖父组件u-radio-group去监听data的变化，手动调用更新子组件的方法去重新获取
      this.parent = uni.$u.$parent.call(this, parentName);
      if (this.parent.children) {
        // 如果父组件的children不存在本组件的实例，才将本实例添加到父组件的children中
        this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
      }
      if (this.parent && this.parentData) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this3.parentData[key] = _this3.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && typeof e.stopPropagation === 'function' && e.stopPropagation();
    },
    // 空操作
    noop: function noop(e) {
      this.preventEvent(e);
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this4 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this4) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 14 */
/*!*********************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/mixin/mpMixin.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {

  // 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
  options: {
    virtualHost: true } };exports.default = _default;

/***/ }),
/* 15 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/luch-request/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _Request = _interopRequireDefault(__webpack_require__(/*! ./core/Request */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

_Request.default;exports.default = _default;

/***/ }),
/* 16 */
/*!*********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/luch-request/core/Request.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;












var _dispatchRequest = _interopRequireDefault(__webpack_require__(/*! ./dispatchRequest */ 17));
var _InterceptorManager = _interopRequireDefault(__webpack_require__(/*! ./InterceptorManager */ 25));
var _mergeConfig = _interopRequireDefault(__webpack_require__(/*! ./mergeConfig */ 26));
var _defaults = _interopRequireDefault(__webpack_require__(/*! ./defaults */ 27));
var _utils = __webpack_require__(/*! ../utils */ 20);
var _clone = _interopRequireDefault(__webpack_require__(/*! ../utils/clone */ 28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var

Request = /*#__PURE__*/function () {
  /**
                                    * @param {Object} arg - 全局配置
                                    * @param {String} arg.baseURL - 全局根路径
                                    * @param {Object} arg.header - 全局header
                                    * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
                                    * @param {String} arg.dataType = [json] - 全局默认的dataType
                                    * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
                                    * @param {Object} arg.custom - 全局默认的自定义参数
                                    * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
                                    * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
                                    * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
                                    * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
                                    * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
                                    */
  function Request() {var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, Request);
    if (!(0, _utils.isPlainObject)(arg)) {
      arg = {};
      console.warn('设置全局参数必须接收一个Object');
    }
    this.config = (0, _clone.default)(_objectSpread(_objectSpread({}, _defaults.default), arg));
    this.interceptors = {
      request: new _InterceptorManager.default(),
      response: new _InterceptorManager.default() };

  }

  /**
    * @Function
    * @param {Request~setConfigCallback} f - 设置全局默认配置
    */_createClass(Request, [{ key: "setConfig", value: function setConfig(
    f) {
      this.config = f(this.config);
    } }, { key: "middleware", value: function middleware(

    config) {
      config = (0, _mergeConfig.default)(this.config, config);
      var chain = [_dispatchRequest.default, undefined];
      var promise = Promise.resolve(config);

      this.interceptors.request.forEach(function (interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });

      this.interceptors.response.forEach(function (interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });

      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }

      return promise;
    }

    /**
      * @Function
      * @param {Object} config - 请求配置项
      * @prop {String} options.url - 请求路径
      * @prop {Object} options.data - 请求参数
      * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
      * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
      * @prop {Object} [options.header = config.header] - 请求header
      * @prop {Object} [options.method = config.method] - 请求方法
      * @returns {Promise<unknown>}
      */ }, { key: "request", value: function request()
    {var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.middleware(config);
    } }, { key: "get", value: function get(

    url) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.middleware(_objectSpread({
        url: url,
        method: 'GET' },
      options));

    } }, { key: "post", value: function post(

    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'POST' },
      options));

    } }, { key: "put", value: function put(


    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'PUT' },
      options));

    } }, { key: "delete", value: function _delete(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'DELETE' },
      options));

    } }, { key: "connect", value: function connect(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'CONNECT' },
      options));

    } }, { key: "head", value: function head(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'HEAD' },
      options));

    } }, { key: "options", value: function options(




    url, data) {var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'OPTIONS' },
      _options));

    } }, { key: "trace", value: function trace(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'TRACE' },
      options));

    } }, { key: "upload", value: function upload(



    url) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      config.url = url;
      config.method = 'UPLOAD';
      return this.middleware(config);
    } }, { key: "download", value: function download(

    url) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      config.url = url;
      config.method = 'DOWNLOAD';
      return this.middleware(config);
    } }]);return Request;}();


/**
                               * setConfig回调
                               * @return {Object} - 返回操作后的config
                               * @callback Request~setConfigCallback
                               * @param {Object} config - 全局默认config
                               */exports.default = Request;

/***/ }),
/* 17 */
/*!*****************************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/luch-request/core/dispatchRequest.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _index = _interopRequireDefault(__webpack_require__(/*! ../adapters/index */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

function _default(config) {return (0, _index.default)(config);};exports.default = _default;

/***/ }),
/* 18 */
/*!***********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/luch-request/adapters/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _buildURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/buildURL */ 19));
var _buildFullPath = _interopRequireDefault(__webpack_require__(/*! ../core/buildFullPath */ 21));
var _settle = _interopRequireDefault(__webpack_require__(/*! ../core/settle */ 24));
var _utils = __webpack_require__(/*! ../utils */ 20);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * 返回可选值存在的配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {Array} keys - 可选值数组
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {Object} config2 - 配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @return {{}} - 存在的配置项
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */
var mergeKeys = function mergeKeys(keys, config2) {
  var config = {};
  keys.forEach(function (prop) {
    if (!(0, _utils.isUndefined)(config2[prop])) {
      config[prop] = config2[prop];
    }
  });
  return config;
};var _default =
function _default(config) {return new Promise(function (resolve, reject) {
    var fullPath = (0, _buildURL.default)((0, _buildFullPath.default)(config.baseURL, config.url), config.params);
    var _config = {
      url: fullPath,
      header: config.header,
      complete: function complete(response) {
        config.fullPath = fullPath;
        response.config = config;
        try {
          // 对可能字符串不是json 的情况容错
          if (typeof response.data === 'string') {
            response.data = JSON.parse(response.data);
          }
          // eslint-disable-next-line no-empty
        } catch (e) {
        }
        (0, _settle.default)(resolve, reject, response);
      } };

    var requestTask;
    if (config.method === 'UPLOAD') {
      delete _config.header['content-type'];
      delete _config.header['Content-Type'];
      var otherConfig = {



        filePath: config.filePath,
        name: config.name };

      var optionalKeys = [









      'formData'];

      requestTask = uni.uploadFile(_objectSpread(_objectSpread(_objectSpread({}, _config), otherConfig), mergeKeys(optionalKeys, config)));
    } else if (config.method === 'DOWNLOAD') {





      requestTask = uni.downloadFile(_config);
    } else {
      var _optionalKeys = [
      'data',
      'method',

      'timeout',

      'dataType',

      'responseType'];











      requestTask = uni.request(_objectSpread(_objectSpread({}, _config), mergeKeys(_optionalKeys, config)));
    }
    if (config.getTask) {
      config.getTask(requestTask, config);
    }
  });};exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 19 */
/*!*************************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/luch-request/helpers/buildURL.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = buildURL;

var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ 20));function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}

function encode(val) {
  return encodeURIComponent(val).
  replace(/%40/gi, '@').
  replace(/%3A/gi, ':').
  replace(/%24/g, '$').
  replace(/%2C/gi, ',').
  replace(/%20/g, '+').
  replace(/%5B/gi, '[').
  replace(/%5D/gi, ']');
}

/**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
function buildURL(url, params) {
  /* eslint no-param-reassign:0 */
  if (!params) {
    return url;
  }

  var serializedParams;
  if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function (val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = "".concat(key, "[]");
      } else {
        val = [val];
      }

      utils.forEach(val, function (v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push("".concat(encode(key), "=").concat(encode(v)));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

/***/ }),
/* 20 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/luch-request/utils.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// utils is a library of generic helper functions non-specific to axios
Object.defineProperty(exports, "__esModule", { value: true });exports.isArray = isArray;exports.isObject = isObject;exports.isDate = isDate;exports.isURLSearchParams = isURLSearchParams;exports.forEach = forEach;exports.isBoolean = isBoolean;exports.isPlainObject = isPlainObject;exports.deepMerge = deepMerge;exports.isUndefined = isUndefined;var
toString = Object.prototype.toString;

/**
                                       * Determine if a value is an Array
                                       *
                                       * @param {Object} val The value to test
                                       * @returns {boolean} True if value is an Array, otherwise false
                                       */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
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
   */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /* eslint no-param-reassign:0 */
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
   * 是否为boolean 值
   * @param val
   * @returns {boolean}
   */
function isBoolean(val) {
  return typeof val === 'boolean';
}

/**
   * 是否为真正的对象{} new Object
   * @param {any} obj - 检测的对象
   * @returns {boolean}
   */
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
   * Function equal to merge with the difference being that no reference
   * to original objects is kept.
   *
   * @see merge
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
function deepMerge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

function isUndefined(val) {
  return typeof val === 'undefined';
}

/***/ }),
/* 21 */
/*!***************************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/luch-request/core/buildFullPath.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = buildFullPath;

var _isAbsoluteURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/isAbsoluteURL */ 22));
var _combineURLs = _interopRequireDefault(__webpack_require__(/*! ../helpers/combineURLs */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                            * Creates a new URL by combining the baseURL with the requestedURL,
                                                                                                                                                                            * only when the requestedURL is not already an absolute URL.
                                                                                                                                                                            * If the requestURL is absolute, this function returns the requestedURL untouched.
                                                                                                                                                                            *
                                                                                                                                                                            * @param {string} baseURL The base URL
                                                                                                                                                                            * @param {string} requestedURL Absolute or relative URL to combine
                                                                                                                                                                            * @returns {string} The combined full path
                                                                                                                                                                            */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0, _isAbsoluteURL.default)(requestedURL)) {
    return (0, _combineURLs.default)(baseURL, requestedURL);
  }
  return requestedURL;
}

/***/ }),
/* 22 */
/*!******************************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/luch-request/helpers/isAbsoluteURL.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Determines whether the specified URL is absolute
               *
               * @param {string} url The URL to test
               * @returns {boolean} True if the specified URL is absolute, otherwise false
               */Object.defineProperty(exports, "__esModule", { value: true });exports.default = isAbsoluteURL;
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/***/ }),
/* 23 */
/*!****************************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/luch-request/helpers/combineURLs.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Creates a new URL by combining the specified URLs
               *
               * @param {string} baseURL The base URL
               * @param {string} relativeURL The relative URL
               * @returns {string} The combined URL
               */Object.defineProperty(exports, "__esModule", { value: true });exports.default = combineURLs;
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? "".concat(
  baseURL.replace(/\/+$/, ''), "/").concat(relativeURL.replace(/^\/+/, '')) :
  baseURL;
}

/***/ }),
/* 24 */
/*!********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/luch-request/core/settle.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = settle; /**
                                                                                                      * Resolve or reject a Promise based on response status.
                                                                                                      *
                                                                                                      * @param {Function} resolve A function that resolves the promise.
                                                                                                      * @param {Function} reject A function that rejects the promise.
                                                                                                      * @param {object} response The response.
                                                                                                      */
function settle(resolve, reject, response) {var
  validateStatus = response.config.validateStatus;
  var status = response.statusCode;
  if (status && (!validateStatus || validateStatus(status))) {
    resolve(response);
  } else {
    reject(response);
  }
}

/***/ }),
/* 25 */
/*!********************************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/luch-request/core/InterceptorManager.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

function InterceptorManager() {
  this.handlers = [];
}

/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected });

  return this.handlers.length - 1;
};

/**
    * Remove an interceptor from the stack
    *
    * @param {Number} id The ID that was returned by `use`
    */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
    * Iterate over all the registered interceptors
    *
    * This method is particularly useful for skipping over any
    * interceptors that may have become `null` calling `eject`.
    *
    * @param {Function} fn The function to call for each interceptor
    */
InterceptorManager.prototype.forEach = function forEach(fn) {
  this.handlers.forEach(function (h) {
    if (h !== null) {
      fn(h);
    }
  });
};var _default =

InterceptorManager;exports.default = _default;

/***/ }),
/* 26 */
/*!*************************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/luch-request/core/mergeConfig.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 20);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * 合并局部配置优先的配置，如果局部有该配置项则用局部，如果全局有该配置项则用全局
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Array} keys - 配置项
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Object} globalsConfig - 当前的全局配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Object} config2 - 局部配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @return {{}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */
var mergeKeys = function mergeKeys(keys, globalsConfig, config2) {
  var config = {};
  keys.forEach(function (prop) {
    if (!(0, _utils.isUndefined)(config2[prop])) {
      config[prop] = config2[prop];
    } else if (!(0, _utils.isUndefined)(globalsConfig[prop])) {
      config[prop] = globalsConfig[prop];
    }
  });
  return config;
};
/**
    *
    * @param globalsConfig - 当前实例的全局配置
    * @param config2 - 当前的局部配置
    * @return - 合并后的配置
    */var _default =
function _default(globalsConfig) {var config2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = config2.method || globalsConfig.method || 'GET';
  var config = {
    baseURL: globalsConfig.baseURL || '',
    method: method,
    url: config2.url || '',
    params: config2.params || {},
    custom: _objectSpread(_objectSpread({}, globalsConfig.custom || {}), config2.custom || {}),
    header: (0, _utils.deepMerge)(globalsConfig.header || {}, config2.header || {}) };

  var defaultToConfig2Keys = ['getTask', 'validateStatus'];
  config = _objectSpread(_objectSpread({}, config), mergeKeys(defaultToConfig2Keys, globalsConfig, config2));

  // eslint-disable-next-line no-empty
  if (method === 'DOWNLOAD') {







  } else if (method === 'UPLOAD') {
    delete config.header['content-type'];
    delete config.header['Content-Type'];
    var uploadKeys = [









    'filePath',
    'name',



    'formData'];

    uploadKeys.forEach(function (prop) {
      if (!(0, _utils.isUndefined)(config2[prop])) {
        config[prop] = config2[prop];
      }
    });





  } else {
    var defaultsKeys = [
    'data',

    'timeout',

    'dataType',

    'responseType'];











    config = _objectSpread(_objectSpread({}, config), mergeKeys(defaultsKeys, globalsConfig, config2));
  }

  return config;
};exports.default = _default;

/***/ }),
/* 27 */
/*!**********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/luch-request/core/defaults.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 默认的全局配置
                                                                                                      */var _default =

{
  baseURL: '',
  header: {},
  method: 'GET',
  dataType: 'json',

  responseType: 'text',

  custom: {},

  timeout: 60000,










  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  } };exports.default = _default;

/***/ }),
/* 28 */
/*!********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/luch-request/utils/clone.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var clone = function () {
  'use strict';

  function _instanceof(obj, type) {
    return type != null && obj instanceof type;
  }

  var nativeMap;
  try {
    nativeMap = Map;
  } catch (_) {
    // maybe a reference error because no `Map`. Give it a dummy value that no
    // value will ever be an instanceof.
    nativeMap = function nativeMap() {};
  }

  var nativeSet;
  try {
    nativeSet = Set;
  } catch (_) {
    nativeSet = function nativeSet() {};
  }

  var nativePromise;
  try {
    nativePromise = Promise;
  } catch (_) {
    nativePromise = function nativePromise() {};
  }

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
     * @param `includeNonEnumerable` - set to true if the non-enumerable properties
     *    should be cloned as well. Non-enumerable properties on the prototype
     *    chain will be ignored. (optional - false by default)
     */
  function clone(parent, circular, depth, prototype, includeNonEnumerable) {
    if (typeof circular === 'object') {
      depth = circular.depth;
      prototype = circular.prototype;
      includeNonEnumerable = circular.includeNonEnumerable;
      circular = circular.circular;
    }
    // maintain two arrays for circular references, where corresponding parents
    // and children have the same index
    var allParents = [];
    var allChildren = [];

    var useBuffer = typeof Buffer != 'undefined';

    if (typeof circular == 'undefined')
    circular = true;

    if (typeof depth == 'undefined')
    depth = Infinity;

    // recurse this function so we don't reset allParents and allChildren
    function _clone(parent, depth) {
      // cloning null always returns null
      if (parent === null)
      return null;

      if (depth === 0)
      return parent;

      var child;
      var proto;
      if (typeof parent != 'object') {
        return parent;
      }

      if (_instanceof(parent, nativeMap)) {
        child = new nativeMap();
      } else if (_instanceof(parent, nativeSet)) {
        child = new nativeSet();
      } else if (_instanceof(parent, nativePromise)) {
        child = new nativePromise(function (resolve, reject) {
          parent.then(function (value) {
            resolve(_clone(value, depth - 1));
          }, function (err) {
            reject(_clone(err, depth - 1));
          });
        });
      } else if (clone.__isArray(parent)) {
        child = [];
      } else if (clone.__isRegExp(parent)) {
        child = new RegExp(parent.source, __getRegExpFlags(parent));
        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
      } else if (clone.__isDate(parent)) {
        child = new Date(parent.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent)) {
        if (Buffer.from) {
          // Node.js >= 5.10.0
          child = Buffer.from(parent);
        } else {
          // Older Node.js versions
          child = new Buffer(parent.length);
          parent.copy(child);
        }
        return child;
      } else if (_instanceof(parent, Error)) {
        child = Object.create(parent);
      } else {
        if (typeof prototype == 'undefined') {
          proto = Object.getPrototypeOf(parent);
          child = Object.create(proto);
        } else
        {
          child = Object.create(prototype);
          proto = prototype;
        }
      }

      if (circular) {
        var index = allParents.indexOf(parent);

        if (index != -1) {
          return allChildren[index];
        }
        allParents.push(parent);
        allChildren.push(child);
      }

      if (_instanceof(parent, nativeMap)) {
        parent.forEach(function (value, key) {
          var keyChild = _clone(key, depth - 1);
          var valueChild = _clone(value, depth - 1);
          child.set(keyChild, valueChild);
        });
      }
      if (_instanceof(parent, nativeSet)) {
        parent.forEach(function (value) {
          var entryChild = _clone(value, depth - 1);
          child.add(entryChild);
        });
      }

      for (var i in parent) {
        var attrs = Object.getOwnPropertyDescriptor(parent, i);
        if (attrs) {
          child[i] = _clone(parent[i], depth - 1);
        }

        try {
          var objProperty = Object.getOwnPropertyDescriptor(parent, i);
          if (objProperty.set === 'undefined') {
            // no setter defined. Skip cloning this property
            continue;
          }
          child[i] = _clone(parent[i], depth - 1);
        } catch (e) {
          if (e instanceof TypeError) {
            // when in strict mode, TypeError will be thrown if child[i] property only has a getter
            // we can't do anything about this, other than inform the user that this property cannot be set.
            continue;
          } else if (e instanceof ReferenceError) {
            //this may happen in non strict mode
            continue;
          }
        }

      }

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(parent);
        for (var i = 0; i < symbols.length; i++) {
          // Don't need to worry about cloning a symbol because it is a primitive,
          // like a number or string.
          var symbol = symbols[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
            continue;
          }
          child[symbol] = _clone(parent[symbol], depth - 1);
          Object.defineProperty(child, symbol, descriptor);
        }
      }

      if (includeNonEnumerable) {
        var allPropertyNames = Object.getOwnPropertyNames(parent);
        for (var i = 0; i < allPropertyNames.length; i++) {
          var propertyName = allPropertyNames[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
          if (descriptor && descriptor.enumerable) {
            continue;
          }
          child[propertyName] = _clone(parent[propertyName], depth - 1);
          Object.defineProperty(child, propertyName, descriptor);
        }
      }

      return child;
    }

    return _clone(parent, depth);
  }

  /**
     * Simple flat clone using prototype, accepts only objects, usefull for property
     * override on FLAT configuration object (no nested props).
     *
     * USE WITH CAUTION! This may not behave as you wish if you do not know how this
     * works.
     */
  clone.clonePrototype = function clonePrototype(parent) {
    if (parent === null)
    return null;

    var c = function c() {};
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
}();var _default =

clone;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../hb/HBuilderX/plugins/uniapp-cli/node_modules/buffer/index.js */ 29).Buffer))

/***/ }),
/* 29 */
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 30)
var ieee754 = __webpack_require__(/*! ieee754 */ 31)
var isArray = __webpack_require__(/*! isarray */ 32)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
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
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 2)))

/***/ }),
/* 30 */
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 31 */
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 32 */
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 33 */
/*!******************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/util/route.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 34));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&".concat(query);
      }
      // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
      query = uni.$u.queryParams(params);
      return url += query;
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                // 如果本次跳转的路径和本页面路径一致，不执行跳转，防止用户快速点击跳转按钮，造成多次跳转同一个页面的问题
                if (!(mergeConfig.url === uni.$u.page())) {_context.next = 6;break;}return _context.abrupt("return");case 6:

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 16;break;}_context.next = 12;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 12:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 17;break;case 16:

                this.openPage(mergeConfig);case 17:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 34 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 35);

/***/ }),
/* 35 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 36);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 36 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 37 */
/*!******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/function/colorGradient.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); // 转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; // 总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    // 计算每一步的hex值
    var hex = rgbToHex("rgb(".concat(Math.round(sR * i + startR), ",").concat(Math.round(sG * i + startG), ",").concat(Math.round(sB *
    i + startB), ")"));
    // 确保第一个颜色值为startColor的值
    if (i === 0) hex = rgbToHex(startColor);
    // 确保最后一个颜色值为endColor的值
    if (i === step - 1) hex = rgbToHex(endColor);
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = String(sColor).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x".concat(sColor.slice(_i, _i + 2))));
    }
    if (!str) {
      return sColorChange;
    }
    return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
  }if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    return arr.map(function (val) {return Number(val);});
  }
  return sColor;
}

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    var strHex = '#';
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? "".concat(0, hex) : hex; // 保证每个rgb的值为2位
      if (hex === '0') {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  }if (reg.test(_this)) {
    var aNum = _this.replace(/#/, '').split('');
    if (aNum.length === 6) {
      return _this;
    }if (aNum.length === 3) {
      var numHex = '#';
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}

/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color, alpha) {
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = String(color).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt("0x".concat(sColor.slice(_i3, _i3 + 2))));
    }
    // return sColorChange.join(',')
    return "rgba(".concat(sColorChange.join(','), ",").concat(alpha, ")");
  }

  return sColor;
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),
/* 38 */
/*!*********************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/function/test.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.
  test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  if (!value) return false;
  // 判断是否数值或者字符串数值(意味着为时间戳)，转为数值，否则new Date无法识别字符串时间戳
  if (number(value)) value = +value;
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
}

/**
   * 验证字符串
   */
function string(value) {
  return typeof value === 'string';
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);

}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  }if (value.length === 8) {
    return xreg.test(value);
  }
  return false;
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  // 金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  // 英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (value === 0 || isNaN(value)) return true;
      break;
    case 'object':
      if (value === null || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value === 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj === 'object' && obj) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value);
  }
  return Object.prototype.toString.call(value) === '[object Array]';
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}

/**
   * 是否函数方法
   * @param {Object} value
   */
function func(value) {
  return typeof value === 'function';
}

/**
   * 是否promise对象
   * @param {Object} value
   */
function promise(value) {
  return object(value) && func(value.then) && func(value.catch);
}

/** 是否图片格式
   * @param {Object} value
   */
function image(value) {
  var newValue = value.split('?')[0];
  var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
  return IMAGE_REGEXP.test(newValue);
}

/**
   * 是否视频格式
   * @param {Object} value
   */
function video(value) {
  var VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
  return VIDEO_REGEXP.test(value);
}

/**
   * 是否为正则对象
   * @param {Object}
   * @return {Boolean}
   */
function regExp(o) {
  return o && Object.prototype.toString.call(o) === '[object RegExp]';
}var _default =

{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code,
  func: func,
  promise: promise,
  video: video,
  image: image,
  regExp: regExp,
  string: string };exports.default = _default;

/***/ }),
/* 39 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/function/debounce.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         *
                                                                                                                         * @param {Function} func 要执行的回调函数
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),
/* 40 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/function/throttle.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer;var
flag;
/**
       * 节流原理：在一定时间内，只能触发一次
       *
       * @param {Function} func 要执行的回调函数
       * @param {Number} wait 延时的时间
       * @param {Boolean} immediate 是否立即执行
       * @return null
       */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else if (!flag) {
    flag = true;
    // 如果是非立即执行，则在wait毫秒内的结束处执行
    timer = setTimeout(function () {
      flag = false;
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =
throttle;exports.default = _default;

/***/ }),
/* 41 */
/*!**********************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/function/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 38));
var _digit = __webpack_require__(/*! ./digit.js */ 42);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @description 如果value小于min，取min；如果value大于max，取max
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} min 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} max 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} value
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */
function range() {var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return Math.max(min, Math.min(max, Number(value)));
}

/**
   * @description 用于获取用户传递值的px值  如果用户传递了"xxpx"或者"xxrpx"，取出其数值部分，如果是"xxxrpx"还需要用过uni.upx2px进行转换
   * @param {number|string} value 用户传递值的px值
   * @param {boolean} unit 
   * @returns {number|string}
   */
function getPx(value) {var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (_test.default.number(value)) {
    return unit ? "".concat(value, "px") : Number(value);
  }
  // 如果带有rpx，先取出其数值部分，再转为px值
  if (/(rpx|upx)$/.test(value)) {
    return unit ? "".concat(uni.upx2px(parseInt(value)), "px") : Number(uni.upx2px(parseInt(value)));
  }
  return unit ? "".concat(parseInt(value), "px") : parseInt(value);
}

/**
   * @description 进行延时，以达到可以简写代码的目的 比如: await uni.$u.sleep(20)将会阻塞20ms
   * @param {number} value 堵塞时间 单位ms 毫秒
   * @returns {Promise} 返回promise
   */
function sleep() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, value);
  });
}
/**
   * @description 运行期判断平台
   * @returns {string} 返回所在平台(小写) 
   * @link 运行期判断平台 https://uniapp.dcloud.io/frame?id=判断平台
   */
function os() {
  return uni.getSystemInfoSync().platform.toLowerCase();
}
/**
   * @description 获取系统信息同步接口
   * @link 获取系统信息同步接口 https://uniapp.dcloud.io/api/system/info?id=getsysteminfosync 
   */
function sys() {
  return uni.getSystemInfoSync();
}

/**
   * @description 取一个区间数
   * @param {Number} min 最小值
   * @param {Number} max 最大值
   */
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  }
  return 0;
}

/**
   * @param {Number} len uuid的长度
   * @param {Boolean} firstU 将返回的首字母置为"u"
   * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
   */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return "u".concat(uuid.join(''));
  }
  return uuid.join('');
}

/**
  * @description 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
     this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
     这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
     值(默认为undefined)，就是查找最顶层的$parent
  *  @param {string|undefined} name 父组件的参数名
  */
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/**
   * @description 样式转换
   * 对象转字符串，或者字符串转对象
   * @param {object | string} customStyle 需要转换的目标
   * @param {String} target 转换的目的，object-转为对象，string-转为字符串
   * @returns {object|string}
   */
function addStyle(customStyle) {var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'object';
  // 字符串转字符串，对象转对象情形，直接返回
  if (_test.default.empty(customStyle) || typeof customStyle === 'object' && target === 'object' || target === 'string' &&
  typeof customStyle === 'string') {
    return customStyle;
  }
  // 字符串转对象
  if (target === 'object') {
    // 去除字符串样式中的两端空格(中间的空格不能去掉，比如padding: 20px 0如果去掉了就错了)，空格是无用的
    customStyle = trim(customStyle);
    // 根据";"将字符串转为数组形式
    var styleArray = customStyle.split(';');
    var style = {};
    // 历遍数组，拼接成对象
    for (var i = 0; i < styleArray.length; i++) {
      // 'font-size:20px;color:red;'，如此最后字符串有";"的话，会导致styleArray最后一个元素为空字符串，这里需要过滤
      if (styleArray[i]) {
        var item = styleArray[i].split(':');
        style[trim(item[0])] = trim(item[1]);
      }
    }
    return style;
  }
  // 这里为对象转字符串形式
  var string = '';
  for (var _i2 in customStyle) {
    // 驼峰转为中划线的形式，否则css内联样式，无法识别驼峰样式属性名
    var key = _i2.replace(/([A-Z])/g, '-$1').toLowerCase();
    string += "".concat(key, ":").concat(customStyle[_i2], ";");
  }
  // 去除两端空格
  return trim(string);
}

/**
   * @description 添加单位，如果有rpx，upx，%，px等单位结尾或者值为auto，直接返回，否则加上px单位结尾
   * @param {string|number} value 需要添加单位的值
   * @param {string} unit 添加的单位名 比如px
   */
function addUnit() {var _uni$$u$config$unit, _uni, _uni$$u, _uni$$u$config;var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (_uni$$u$config$unit = (_uni = uni) === null || _uni === void 0 ? void 0 : (_uni$$u = _uni.$u) === null || _uni$$u === void 0 ? void 0 : (_uni$$u$config = _uni$$u.config) === null || _uni$$u$config === void 0 ? void 0 : _uni$$u$config.unit) !== null && _uni$$u$config$unit !== void 0 ? _uni$$u$config$unit : 'px';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/**
   * @description 深度克隆
   * @param {object} obj 需要深度克隆的对象
   * @returns {*} 克隆后的对象或者原值（不是对象）
   */
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    // 原始类型直接返回
    return obj;
  }
  var o = _test.default.array(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}

/**
   * @description JS对象深度合并
   * @param {object} target 需要拷贝的对象
   * @param {object} source 拷贝的来源对象
   * @returns {object|boolean} 深度合并后的对象或者false（入参有不是对象）
   */
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = deepClone(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else if (typeof source[prop] !== 'object') {
        target[prop] = source[prop];
      } else if (target[prop].concat && source[prop].concat) {
        target[prop] = target[prop].concat(source[prop]);
      } else {
        target[prop] = deepMerge(target[prop], source[prop]);
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}

/**
   * @description error提示
   * @param {*} err 错误内容
   */
function error(err) {
  // 开发环境才提示，生产环境不会提示
  if (true) {
    console.error("uView\u63D0\u793A\uFF1A".concat(err));
  }
}

/**
   * @description 打乱数组
   * @param {array} array 需要打乱的数组
   * @returns {array} 打乱后的数组
   */
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}

// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== '[object String]') {
      throw new TypeError(
      'fillString must be String');

    }
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length;
    var times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

/**
   * @description 格式化时间
   * @param {String|Number} dateTime 需要格式化的时间戳
   * @param {String} fmt 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd
   * @returns {string} 返回格式化后的字符串
   */
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var formatStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  var date;
  // 若传入时间为假值，则取当前时间
  if (!dateTime) {
    date = new Date();
  }
  // 若为unix秒时间戳，则转为毫秒时间戳（逻辑有点奇怪，但不敢改，以保证历史兼容）
  else if (/^\d{10}$/.test(dateTime === null || dateTime === void 0 ? void 0 : dateTime.toString().trim())) {
      date = new Date(dateTime * 1000);
    }
    // 若用户传入字符串格式时间戳，new Date无法解析，需做兼容
    else if (typeof dateTime === 'string' && /^\d+$/.test(dateTime.trim())) {
        date = new Date(Number(dateTime));
      }
      // 其他都认为符合 RFC 2822 规范
      else {
          // 处理平台性差异，在Safari/Webkit中，new Date仅支持/作为分割符的字符串时间
          date = new Date(
          typeof dateTime === 'string' ?
          dateTime.replace(/-/g, '/') :
          dateTime);

        }

  var timeSource = {
    'y': date.getFullYear().toString(), // 年
    'm': (date.getMonth() + 1).toString().padStart(2, '0'), // 月
    'd': date.getDate().toString().padStart(2, '0'), // 日
    'h': date.getHours().toString().padStart(2, '0'), // 时
    'M': date.getMinutes().toString().padStart(2, '0'), // 分
    's': date.getSeconds().toString().padStart(2, '0') // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (var key in timeSource) {var _ref =
    new RegExp("".concat(key, "+")).exec(formatStr) || [],_ref2 = _slicedToArray(_ref, 1),ret = _ref2[0];
    if (ret) {
      // 年可能只需展示两位
      var beginIndex = key === 'y' && ret.length === 2 ? 2 : 0;
      formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
    }
  }

  return formatStr;
}

/**
   * @description 时间戳转为多久之前
   * @param {String|Number} timestamp 时间戳
   * @param {String|Boolean} format 
   * 格式化规则如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
   * 如果为布尔值false，无论什么时间，都返回多久以前的格式
   * @returns {string} 转化后的内容
   */
function timeFrom() {var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  if (timestamp == null) timestamp = Number(new Date());
  timestamp = parseInt(timestamp);
  // 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
  if (timestamp.toString().length == 10) timestamp *= 1000;
  var timer = new Date().getTime() - timestamp;
  timer = parseInt(timer / 1000);
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = "".concat(parseInt(timer / 60), "\u5206\u949F\u524D");
      break;
    case timer >= 3600 && timer < 86400:
      tips = "".concat(parseInt(timer / 3600), "\u5C0F\u65F6\u524D");
      break;
    case timer >= 86400 && timer < 2592000:
      tips = "".concat(parseInt(timer / 86400), "\u5929\u524D");
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = "".concat(parseInt(timer / (86400 * 30)), "\u4E2A\u6708\u524D");
        } else {
          tips = "".concat(parseInt(timer / (86400 * 365)), "\u5E74\u524D");
        }
      } else {
        tips = timeFormat(timestamp, format);
      }}

  return tips;
}

/**
   * @description 去除空格
   * @param String str 需要去除空格的字符串
   * @param String pos both(左右)|left|right|all 默认both
   */
function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  str = String(str);
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, '');
  }
  if (pos == 'left') {
    return str.replace(/^\s*/, '');
  }
  if (pos == 'right') {
    return str.replace(/(\s*$)/g, '');
  }
  if (pos == 'all') {
    return str.replace(/\s+/g, '');
  }
  return str;
}

/**
   * @description 对象转url参数
   * @param {object} data,对象
   * @param {Boolean} isPrefix,是否自动加上"?"
   * @param {string} arrayFormat 规则 indices|brackets|repeat|comma
   */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push("".concat(key, "[").concat(i, "]=").concat(value[i]));
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push("".concat(key, "[]=").concat(_value));
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push("".concat(key, "=").concat(_value));
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = '';
          value.forEach(function (_value) {
            commaStr += (commaStr ? ',' : '') + _value;
          });
          _result.push("".concat(key, "=").concat(commaStr));
          break;
        default:
          value.forEach(function (_value) {
            _result.push("".concat(key, "[]=").concat(_value));
          });}

    } else {
      _result.push("".concat(key, "=").concat(value));
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}

/**
   * 显示消息提示框
   * @param {String} title 提示的内容，长度与 icon 取值有关。
   * @param {Number} duration 提示的延迟时间，单位毫秒，默认：2000
   */
function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  uni.showToast({
    title: String(title),
    icon: 'none',
    duration: duration });

}

/**
   * @description 根据主题type值,获取对应的图标
   * @param {String} type 主题名称,primary|info|error|warning|success
   * @param {boolean} fill 是否使用fill填充实体的图标
   */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}

/**
   * @description 数字格式化
   * @param {number|string} number 要格式化的数字
   * @param {number} decimals 保留几位小数
   * @param {string} decimalPoint 小数点符号
   * @param {string} thousandsSeparator 千分位符号
   * @returns {string} 格式化后的数字
   */
function priceFormat(number) {var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var decimalPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';var thousandsSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ',';
  number = "".concat(number).replace(/[^0-9+-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number;
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  var sep = typeof thousandsSeparator === 'undefined' ? ',' : thousandsSeparator;
  var dec = typeof decimalPoint === 'undefined' ? '.' : decimalPoint;
  var s = '';

  s = (prec ? (0, _digit.round)(n, prec) + '' : "".concat(Math.round(n))).split('.');
  var re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, "$1".concat(sep, "$2"));
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

/**
   * @description 获取duration值
   * 如果带有ms或者s直接返回，如果大于一定值，认为是ms单位，小于一定值，认为是s单位
   * 比如以30位阈值，那么300大于30，可以理解为用户想要的是300ms，而不是想花300s去执行一个动画
   * @param {String|number} value 比如: "1s"|"100ms"|1|100
   * @param {boolean} unit  提示: 如果是false 默认返回number
   * @return {string|number} 
   */
function getDuration(value) {var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var valueNum = parseInt(value);
  if (unit) {
    if (/s$/.test(value)) return value;
    return value > 30 ? "".concat(value, "ms") : "".concat(value, "s");
  }
  if (/ms$/.test(value)) return valueNum;
  if (/s$/.test(value)) return valueNum > 30 ? valueNum : valueNum * 1000;
  return valueNum;
}

/**
   * @description 日期的月或日补零操作
   * @param {String} value 需要补零的值
   */
function padZero(value) {
  return "00".concat(value).slice(-2);
}

/**
   * @description 在u-form的子组件内容发生变化，或者失去焦点时，尝试通知u-form执行校验方法
   * @param {*} instance
   * @param {*} event
   */
function formValidate(instance, event) {
  var formItem = uni.$u.$parent.call(instance, 'u-form-item');
  var form = uni.$u.$parent.call(instance, 'u-form');
  // 如果发生变化的input或者textarea等，其父组件中有u-form-item或者u-form等，就执行form的validate方法
  // 同时将form-item的pros传递给form，让其进行精确对象验证
  if (formItem && form) {
    form.validateField(formItem.prop, function () {}, event);
  }
}

/**
   * @description 获取某个对象下的属性，用于通过类似'a.b.c'的形式去获取一个对象的的属性的形式
   * @param {object} obj 对象
   * @param {string} key 需要获取的属性字段
   * @returns {*}
   */
function getProperty(obj, key) {
  if (!obj) {
    return;
  }
  if (typeof key !== 'string' || key === '') {
    return '';
  }
  if (key.indexOf('.') !== -1) {
    var keys = key.split('.');
    var firstObj = obj[keys[0]] || {};

    for (var i = 1; i < keys.length; i++) {
      if (firstObj) {
        firstObj = firstObj[keys[i]];
      }
    }
    return firstObj;
  }
  return obj[key];
}

/**
   * @description 设置对象的属性值，如果'a.b.c'的形式进行设置
   * @param {object} obj 对象
   * @param {string} key 需要设置的属性
   * @param {string} value 设置的值
   */
function setProperty(obj, key, value) {
  if (!obj) {
    return;
  }
  // 递归赋值
  var inFn = function inFn(_obj, keys, v) {
    // 最后一个属性key
    if (keys.length === 1) {
      _obj[keys[0]] = v;
      return;
    }
    // 0~length-1个key
    while (keys.length > 1) {
      var k = keys[0];
      if (!_obj[k] || typeof _obj[k] !== 'object') {
        _obj[k] = {};
      }
      var _key = keys.shift();
      // 自调用判断是否存在属性，不存在则自动创建对象
      inFn(_obj[k], keys, v);
    }
  };

  if (typeof key !== 'string' || key === '') {

  } else if (key.indexOf('.') !== -1) {// 支持多层级赋值操作
    var keys = key.split('.');
    inFn(obj, keys, value);
  } else {
    obj[key] = value;
  }
}

/**
   * @description 获取当前页面路径
   */
function page() {var _pages$route, _pages;
  var pages = getCurrentPages();
  // 某些特殊情况下(比如页面进行redirectTo时的一些时机)，pages可能为空数组
  return "/".concat((_pages$route = (_pages = pages[pages.length - 1]) === null || _pages === void 0 ? void 0 : _pages.route) !== null && _pages$route !== void 0 ? _pages$route : '');
}

/**
   * @description 获取当前路由栈实例数组
   */
function pages() {
  var pages = getCurrentPages();
  return pages;
}

/**
   * @description 修改uView内置属性值
   * @param {object} props 修改内置props属性
   * @param {object} config 修改内置config属性
   * @param {object} color 修改内置color属性
   * @param {object} zIndex 修改内置zIndex属性
   */
function setConfig(_ref3)




{var _ref3$props = _ref3.props,props = _ref3$props === void 0 ? {} : _ref3$props,_ref3$config = _ref3.config,config = _ref3$config === void 0 ? {} : _ref3$config,_ref3$color = _ref3.color,color = _ref3$color === void 0 ? {} : _ref3$color,_ref3$zIndex = _ref3.zIndex,zIndex = _ref3$zIndex === void 0 ? {} : _ref3$zIndex;var

  deepMerge =
  uni.$u.deepMerge;
  uni.$u.config = deepMerge(uni.$u.config, config);
  uni.$u.props = deepMerge(uni.$u.props, props);
  uni.$u.color = deepMerge(uni.$u.color, color);
  uni.$u.zIndex = deepMerge(uni.$u.zIndex, zIndex);
}var _default =

{
  range: range,
  getPx: getPx,
  sleep: sleep,
  os: os,
  sys: sys,
  random: random,
  guid: guid,
  $parent: $parent,
  addStyle: addStyle,
  addUnit: addUnit,
  deepClone: deepClone,
  deepMerge: deepMerge,
  error: error,
  randomArray: randomArray,
  timeFormat: timeFormat,
  timeFrom: timeFrom,
  trim: trim,
  queryParams: queryParams,
  toast: toast,
  type2icon: type2icon,
  priceFormat: priceFormat,
  getDuration: getDuration,
  padZero: padZero,
  formValidate: formValidate,
  getProperty: getProperty,
  setProperty: setProperty,
  page: page,
  pages: pages,
  setConfig: setConfig };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 42 */
/*!**********************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/function/digit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.times = times;exports.plus = plus;exports.minus = minus;exports.divide = divide;exports.round = round;exports.enableBoundaryChecking = enableBoundaryChecking;exports.default = void 0;function _toArray(arr) {return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}var _boundaryCheckingState = true; // 是否进行越界检查的全局开关

/**
 * 把错误的数据转正
 * @private
 * @example strip(0.09999999999999998)=0.1
 */
function strip(num) {var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
  return +parseFloat(Number(num).toPrecision(precision));
}

/**
   * Return digits length of a number
   * @private
   * @param {*number} num Input number
   */
function digitLength(num) {
  // Get digit length of e
  var eSplit = num.toString().split(/[eE]/);
  var len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}

/**
   * 把小数转成整数,如果是小数则放大成整数
   * @private
   * @param {*number} num 输入数
   */
function float2Fixed(num) {
  if (num.toString().indexOf('e') === -1) {
    return Number(num.toString().replace('.', ''));
  }
  var dLen = digitLength(num);
  return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}

/**
   * 检测数字是否越界，如果越界给出提示
   * @private
   * @param {*number} num 输入数
   */
function checkBoundary(num) {
  if (_boundaryCheckingState) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
      console.warn("".concat(num, " \u8D85\u51FA\u4E86\u7CBE\u5EA6\u9650\u5236\uFF0C\u7ED3\u679C\u53EF\u80FD\u4E0D\u6B63\u786E"));
    }
  }
}

/**
   * 把递归操作扁平迭代化
   * @param {number[]} arr 要操作的数字数组
   * @param {function} operation 迭代操作
   * @private
   */
function iteratorOperation(arr, operation) {var _arr = _toArray(
  arr),num1 = _arr[0],num2 = _arr[1],others = _arr.slice(2);
  var res = operation(num1, num2);

  others.forEach(function (num) {
    res = operation(res, num);
  });

  return res;
}

/**
   * 高精度乘法
   * @export
   */
function times() {for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {nums[_key] = arguments[_key];}
  if (nums.length > 2) {
    return iteratorOperation(nums, times);
  }var

  num1 = nums[0],num2 = nums[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  var baseNum = digitLength(num1) + digitLength(num2);
  var leftValue = num1Changed * num2Changed;

  checkBoundary(leftValue);

  return leftValue / Math.pow(10, baseNum);
}

/**
   * 高精度加法
   * @export
   */
function plus() {for (var _len2 = arguments.length, nums = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {nums[_key2] = arguments[_key2];}
  if (nums.length > 2) {
    return iteratorOperation(nums, plus);
  }var

  num1 = nums[0],num2 = nums[1];
  // 取最大的小数位
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  // 把小数都转为整数然后再计算
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
}

/**
   * 高精度减法
   * @export
   */
function minus() {for (var _len3 = arguments.length, nums = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {nums[_key3] = arguments[_key3];}
  if (nums.length > 2) {
    return iteratorOperation(nums, minus);
  }var

  num1 = nums[0],num2 = nums[1];
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
}

/**
   * 高精度除法
   * @export
   */
function divide() {for (var _len4 = arguments.length, nums = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {nums[_key4] = arguments[_key4];}
  if (nums.length > 2) {
    return iteratorOperation(nums, divide);
  }var

  num1 = nums[0],num2 = nums[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  // 重要，这里必须用strip进行修正
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}

/**
   * 四舍五入
   * @export
   */
function round(num, ratio) {
  var base = Math.pow(10, ratio);
  var result = divide(Math.round(Math.abs(times(num, base))), base);
  if (num < 0 && result !== 0) {
    result = times(result, -1);
  }
  // 位数不足则补0
  return result;
}

/**
   * 是否进行边界检查，默认开启
   * @param flag 标记开关，true 为开启，false 为关闭，默认为 true
   * @export
   */
function enableBoundaryChecking() {var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  _boundaryCheckingState = flag;
}var _default =


{
  times: times,
  plus: plus,
  minus: minus,
  divide: divide,
  round: round,
  enableBoundaryChecking: enableBoundaryChecking };exports.default = _default;

/***/ }),
/* 43 */
/*!*********************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/config.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2022-06-17
var version = '2.0.33';

// 开发环境才提示，生产环境不会提示
if (true) {
  console.log("\n %c uView V".concat(version, " %c https://www.uviewui.com/ \n\n"), 'color: #ffffff; background: #3c9cff; padding:5px 0;', 'color: #3c9cff;background: #ffffff; padding:5px 0;');
}var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'],

  // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
  color: {
    'u-primary': '#2979ff',
    'u-warning': '#ff9900',
    'u-success': '#19be6b',
    'u-error': '#fa3534',
    'u-info': '#909399',
    'u-main-color': '#303133',
    'u-content-color': '#606266',
    'u-tips-color': '#909399',
    'u-light-color': '#c0c4cc' },

  // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
  unit: 'px' };exports.default = _default;

/***/ }),
/* 44 */
/*!********************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ 43));

var _actionSheet = _interopRequireDefault(__webpack_require__(/*! ./props/actionSheet.js */ 45));
var _album = _interopRequireDefault(__webpack_require__(/*! ./props/album.js */ 46));
var _alert = _interopRequireDefault(__webpack_require__(/*! ./props/alert.js */ 47));
var _avatar = _interopRequireDefault(__webpack_require__(/*! ./props/avatar */ 48));
var _avatarGroup = _interopRequireDefault(__webpack_require__(/*! ./props/avatarGroup */ 49));
var _backtop = _interopRequireDefault(__webpack_require__(/*! ./props/backtop */ 50));
var _badge = _interopRequireDefault(__webpack_require__(/*! ./props/badge */ 51));
var _button = _interopRequireDefault(__webpack_require__(/*! ./props/button */ 52));
var _calendar = _interopRequireDefault(__webpack_require__(/*! ./props/calendar */ 53));
var _carKeyboard = _interopRequireDefault(__webpack_require__(/*! ./props/carKeyboard */ 54));
var _cell = _interopRequireDefault(__webpack_require__(/*! ./props/cell */ 55));
var _cellGroup = _interopRequireDefault(__webpack_require__(/*! ./props/cellGroup */ 56));
var _checkbox = _interopRequireDefault(__webpack_require__(/*! ./props/checkbox */ 57));
var _checkboxGroup = _interopRequireDefault(__webpack_require__(/*! ./props/checkboxGroup */ 58));
var _circleProgress = _interopRequireDefault(__webpack_require__(/*! ./props/circleProgress */ 59));
var _code = _interopRequireDefault(__webpack_require__(/*! ./props/code */ 60));
var _codeInput = _interopRequireDefault(__webpack_require__(/*! ./props/codeInput */ 61));
var _col = _interopRequireDefault(__webpack_require__(/*! ./props/col */ 62));
var _collapse = _interopRequireDefault(__webpack_require__(/*! ./props/collapse */ 63));
var _collapseItem = _interopRequireDefault(__webpack_require__(/*! ./props/collapseItem */ 64));
var _columnNotice = _interopRequireDefault(__webpack_require__(/*! ./props/columnNotice */ 65));
var _countDown = _interopRequireDefault(__webpack_require__(/*! ./props/countDown */ 66));
var _countTo = _interopRequireDefault(__webpack_require__(/*! ./props/countTo */ 67));
var _datetimePicker = _interopRequireDefault(__webpack_require__(/*! ./props/datetimePicker */ 68));
var _divider = _interopRequireDefault(__webpack_require__(/*! ./props/divider */ 69));
var _empty = _interopRequireDefault(__webpack_require__(/*! ./props/empty */ 70));
var _form = _interopRequireDefault(__webpack_require__(/*! ./props/form */ 71));
var _formItem = _interopRequireDefault(__webpack_require__(/*! ./props/formItem */ 72));
var _gap = _interopRequireDefault(__webpack_require__(/*! ./props/gap */ 73));
var _grid = _interopRequireDefault(__webpack_require__(/*! ./props/grid */ 74));
var _gridItem = _interopRequireDefault(__webpack_require__(/*! ./props/gridItem */ 75));
var _icon = _interopRequireDefault(__webpack_require__(/*! ./props/icon */ 76));
var _image = _interopRequireDefault(__webpack_require__(/*! ./props/image */ 77));
var _indexAnchor = _interopRequireDefault(__webpack_require__(/*! ./props/indexAnchor */ 78));
var _indexList = _interopRequireDefault(__webpack_require__(/*! ./props/indexList */ 79));
var _input = _interopRequireDefault(__webpack_require__(/*! ./props/input */ 80));
var _keyboard = _interopRequireDefault(__webpack_require__(/*! ./props/keyboard */ 81));
var _line = _interopRequireDefault(__webpack_require__(/*! ./props/line */ 82));
var _lineProgress = _interopRequireDefault(__webpack_require__(/*! ./props/lineProgress */ 83));
var _link = _interopRequireDefault(__webpack_require__(/*! ./props/link */ 84));
var _list = _interopRequireDefault(__webpack_require__(/*! ./props/list */ 85));
var _listItem = _interopRequireDefault(__webpack_require__(/*! ./props/listItem */ 86));
var _loadingIcon = _interopRequireDefault(__webpack_require__(/*! ./props/loadingIcon */ 87));
var _loadingPage = _interopRequireDefault(__webpack_require__(/*! ./props/loadingPage */ 88));
var _loadmore = _interopRequireDefault(__webpack_require__(/*! ./props/loadmore */ 89));
var _modal = _interopRequireDefault(__webpack_require__(/*! ./props/modal */ 90));
var _navbar = _interopRequireDefault(__webpack_require__(/*! ./props/navbar */ 91));
var _noNetwork = _interopRequireDefault(__webpack_require__(/*! ./props/noNetwork */ 93));
var _noticeBar = _interopRequireDefault(__webpack_require__(/*! ./props/noticeBar */ 94));
var _notify = _interopRequireDefault(__webpack_require__(/*! ./props/notify */ 95));
var _numberBox = _interopRequireDefault(__webpack_require__(/*! ./props/numberBox */ 96));
var _numberKeyboard = _interopRequireDefault(__webpack_require__(/*! ./props/numberKeyboard */ 97));
var _overlay = _interopRequireDefault(__webpack_require__(/*! ./props/overlay */ 98));
var _parse = _interopRequireDefault(__webpack_require__(/*! ./props/parse */ 99));
var _picker = _interopRequireDefault(__webpack_require__(/*! ./props/picker */ 100));
var _popup = _interopRequireDefault(__webpack_require__(/*! ./props/popup */ 101));
var _radio = _interopRequireDefault(__webpack_require__(/*! ./props/radio */ 102));
var _radioGroup = _interopRequireDefault(__webpack_require__(/*! ./props/radioGroup */ 103));
var _rate = _interopRequireDefault(__webpack_require__(/*! ./props/rate */ 104));
var _readMore = _interopRequireDefault(__webpack_require__(/*! ./props/readMore */ 105));
var _row = _interopRequireDefault(__webpack_require__(/*! ./props/row */ 106));
var _rowNotice = _interopRequireDefault(__webpack_require__(/*! ./props/rowNotice */ 107));
var _scrollList = _interopRequireDefault(__webpack_require__(/*! ./props/scrollList */ 108));
var _search = _interopRequireDefault(__webpack_require__(/*! ./props/search */ 109));
var _section = _interopRequireDefault(__webpack_require__(/*! ./props/section */ 110));
var _skeleton = _interopRequireDefault(__webpack_require__(/*! ./props/skeleton */ 111));
var _slider = _interopRequireDefault(__webpack_require__(/*! ./props/slider */ 112));
var _statusBar = _interopRequireDefault(__webpack_require__(/*! ./props/statusBar */ 113));
var _steps = _interopRequireDefault(__webpack_require__(/*! ./props/steps */ 114));
var _stepsItem = _interopRequireDefault(__webpack_require__(/*! ./props/stepsItem */ 115));
var _sticky = _interopRequireDefault(__webpack_require__(/*! ./props/sticky */ 116));
var _subsection = _interopRequireDefault(__webpack_require__(/*! ./props/subsection */ 117));
var _swipeAction = _interopRequireDefault(__webpack_require__(/*! ./props/swipeAction */ 118));
var _swipeActionItem = _interopRequireDefault(__webpack_require__(/*! ./props/swipeActionItem */ 119));
var _swiper = _interopRequireDefault(__webpack_require__(/*! ./props/swiper */ 120));
var _swipterIndicator = _interopRequireDefault(__webpack_require__(/*! ./props/swipterIndicator */ 121));
var _switch2 = _interopRequireDefault(__webpack_require__(/*! ./props/switch */ 122));
var _tabbar = _interopRequireDefault(__webpack_require__(/*! ./props/tabbar */ 123));
var _tabbarItem = _interopRequireDefault(__webpack_require__(/*! ./props/tabbarItem */ 124));
var _tabs = _interopRequireDefault(__webpack_require__(/*! ./props/tabs */ 125));
var _tag = _interopRequireDefault(__webpack_require__(/*! ./props/tag */ 126));
var _text = _interopRequireDefault(__webpack_require__(/*! ./props/text */ 127));
var _textarea = _interopRequireDefault(__webpack_require__(/*! ./props/textarea */ 128));
var _toast = _interopRequireDefault(__webpack_require__(/*! ./props/toast */ 129));
var _toolbar = _interopRequireDefault(__webpack_require__(/*! ./props/toolbar */ 130));
var _tooltip = _interopRequireDefault(__webpack_require__(/*! ./props/tooltip */ 131));
var _transition = _interopRequireDefault(__webpack_require__(/*! ./props/transition */ 132));
var _upload = _interopRequireDefault(__webpack_require__(/*! ./props/upload */ 133));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var


color =
_config.default.color;var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({},


_actionSheet.default),
_album.default),
_alert.default),
_avatar.default),
_avatarGroup.default),
_backtop.default),
_badge.default),
_button.default),
_calendar.default),
_carKeyboard.default),
_cell.default),
_cellGroup.default),
_checkbox.default),
_checkboxGroup.default),
_circleProgress.default),
_code.default),
_codeInput.default),
_col.default),
_collapse.default),
_collapseItem.default),
_columnNotice.default),
_countDown.default),
_countTo.default),
_datetimePicker.default),
_divider.default),
_empty.default),
_form.default),
_formItem.default),
_gap.default),
_grid.default),
_gridItem.default),
_icon.default),
_image.default),
_indexAnchor.default),
_indexList.default),
_input.default),
_keyboard.default),
_line.default),
_lineProgress.default),
_link.default),
_list.default),
_listItem.default),
_loadingIcon.default),
_loadingPage.default),
_loadmore.default),
_modal.default),
_navbar.default),
_noNetwork.default),
_noticeBar.default),
_notify.default),
_numberBox.default),
_numberKeyboard.default),
_overlay.default),
_parse.default),
_picker.default),
_popup.default),
_radio.default),
_radioGroup.default),
_rate.default),
_readMore.default),
_row.default),
_rowNotice.default),
_scrollList.default),
_search.default),
_section.default),
_skeleton.default),
_slider.default),
_statusBar.default),
_steps.default),
_stepsItem.default),
_sticky.default),
_subsection.default),
_swipeAction.default),
_swipeActionItem.default),
_swiper.default),
_swipterIndicator.default),
_switch2.default),
_tabbar.default),
_tabbarItem.default),
_tabs.default),
_tag.default),
_text.default),
_textarea.default),
_toast.default),
_toolbar.default),
_tooltip.default),
_transition.default),
_upload.default);exports.default = _default;

/***/ }),
/* 45 */
/*!********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/actionSheet.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:44:35
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/actionSheet.js
                                                                                                      */var _default =
{
  // action-sheet组件
  actionSheet: {
    show: false,
    title: '',
    description: '',
    actions: function actions() {return [];},
    index: '',
    cancelText: '',
    closeOnClickAction: true,
    safeAreaInsetBottom: true,
    openType: '',
    closeOnClickOverlay: true,
    round: 0 } };exports.default = _default;

/***/ }),
/* 46 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/album.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:47:24
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/album.js
                                                                                                      */var _default =
{
  // album 组件
  album: {
    urls: function urls() {return [];},
    keyName: '',
    singleSize: 180,
    multipleSize: 70,
    space: 6,
    singleMode: 'scaleToFill',
    multipleMode: 'aspectFill',
    maxCount: 9,
    previewFullImage: true,
    rowCount: 3,
    showMore: true } };exports.default = _default;

/***/ }),
/* 47 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/alert.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:48:53
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/alert.js
                                                                                                      */var _default =
{
  // alert警告组件
  alert: {
    title: '',
    type: 'warning',
    description: '',
    closable: false,
    showIcon: false,
    effect: 'light',
    center: false,
    fontSize: 14 } };exports.default = _default;

/***/ }),
/* 48 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/avatar.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:49:22
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/avatar.js
                                                                                                      */var _default =
{
  // avatar 组件
  avatar: {
    src: '',
    shape: 'circle',
    size: 40,
    mode: 'scaleToFill',
    text: '',
    bgColor: '#c0c4cc',
    color: '#ffffff',
    fontSize: 18,
    icon: '',
    mpAvatar: false,
    randomBgColor: false,
    defaultUrl: '',
    colorIndex: '',
    name: '' } };exports.default = _default;

/***/ }),
/* 49 */
/*!********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/avatarGroup.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:49:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/avatarGroup.js
                                                                                                      */var _default =
{
  // avatarGroup 组件
  avatarGroup: {
    urls: function urls() {return [];},
    maxCount: 5,
    shape: 'circle',
    mode: 'scaleToFill',
    showMore: true,
    size: 40,
    keyName: '',
    gap: 0.5,
    extraValue: 0 } };exports.default = _default;

/***/ }),
/* 50 */
/*!****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/backtop.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:50:18
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/backtop.js
                                                                                                      */var _default =
{
  // backtop组件
  backtop: {
    mode: 'circle',
    icon: 'arrow-upward',
    text: '',
    duration: 100,
    scrollTop: 0,
    top: 400,
    bottom: 100,
    right: 20,
    zIndex: 9,
    iconStyle: function iconStyle() {return {
        color: '#909399',
        fontSize: '19px' };} } };exports.default = _default;

/***/ }),
/* 51 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/badge.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 19:51:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/badge.js
                                                                                                      */var _default =
{
  // 徽标数组件
  badge: {
    isDot: false,
    value: '',
    show: true,
    max: 999,
    type: 'error',
    showZero: false,
    bgColor: null,
    color: null,
    shape: 'circle',
    numberType: 'overflow',
    offset: function offset() {return [];},
    inverted: false,
    absolute: false } };exports.default = _default;

/***/ }),
/* 52 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/button.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:51:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/button.js
                                                                                                      */var _default =
{
  // button组件
  button: {
    hairline: false,
    type: 'info',
    size: 'normal',
    shape: 'square',
    plain: false,
    disabled: false,
    loading: false,
    loadingText: '',
    loadingMode: 'spinner',
    loadingSize: 15,
    openType: '',
    formType: '',
    appParameter: '',
    hoverStopPropagation: true,
    lang: 'en',
    sessionFrom: '',
    sendMessageTitle: '',
    sendMessagePath: '',
    sendMessageImg: '',
    showMessageCard: false,
    dataName: '',
    throttleTime: 0,
    hoverStartTime: 0,
    hoverStayTime: 200,
    text: '',
    icon: '',
    iconColor: '',
    color: '' } };exports.default = _default;

/***/ }),
/* 53 */
/*!*****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/calendar.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:52:43
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/calendar.js
                                                                                                      */var _default =
{
  // calendar 组件
  calendar: {
    title: '日期选择',
    showTitle: true,
    showSubtitle: true,
    mode: 'single',
    startText: '开始',
    endText: '结束',
    customList: function customList() {return [];},
    color: '#3c9cff',
    minDate: 0,
    maxDate: 0,
    defaultDate: null,
    maxCount: Number.MAX_SAFE_INTEGER, // Infinity
    rowHeight: 56,
    formatter: null,
    showLunar: false,
    showMark: true,
    confirmText: '确定',
    confirmDisabledText: '确定',
    show: false,
    closeOnClickOverlay: false,
    readonly: false,
    showConfirm: true,
    maxRange: Number.MAX_SAFE_INTEGER, // Infinity
    rangePrompt: '',
    showRangePrompt: true,
    allowSameDay: false,
    round: 0,
    monthNum: 3 } };exports.default = _default;

/***/ }),
/* 54 */
/*!********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/carKeyboard.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:53:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/carKeyboard.js
                                                                                                      */var _default =
{
  // 车牌号键盘
  carKeyboard: {
    random: false } };exports.default = _default;

/***/ }),
/* 55 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/cell.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 20:53:09
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/cell.js
                                                                                                      */var _default =
{
  // cell组件的props
  cell: {
    customClass: '',
    title: '',
    label: '',
    value: '',
    icon: '',
    disabled: false,
    border: true,
    center: false,
    url: '',
    linkType: 'navigateTo',
    clickable: false,
    isLink: false,
    required: false,
    arrowDirection: '',
    iconStyle: {},
    rightIconStyle: {},
    rightIcon: 'arrow-right',
    titleStyle: {},
    size: '',
    stop: true,
    name: '' } };exports.default = _default;

/***/ }),
/* 56 */
/*!******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/cellGroup.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:54:16
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/cellGroup.js
                                                                                                      */var _default =
{
  // cell-group组件的props
  cellGroup: {
    title: '',
    border: true,
    customStyle: {} } };exports.default = _default;

/***/ }),
/* 57 */
/*!*****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/checkbox.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 21:06:59
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/checkbox.js
                                                                                                      */var _default =
{
  // checkbox组件
  checkbox: {
    name: '',
    shape: '',
    size: '',
    checkbox: false,
    disabled: '',
    activeColor: '',
    inactiveColor: '',
    iconSize: '',
    iconColor: '',
    label: '',
    labelSize: '',
    labelColor: '',
    labelDisabled: '' } };exports.default = _default;

/***/ }),
/* 58 */
/*!**********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/checkboxGroup.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:54:47
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/checkboxGroup.js
                                                                                                      */var _default =
{
  // checkbox-group组件
  checkboxGroup: {
    name: '',
    value: function value() {return [];},
    shape: 'square',
    disabled: false,
    activeColor: '#2979ff',
    inactiveColor: '#c8c9cc',
    size: 18,
    placement: 'row',
    labelSize: 14,
    labelColor: '#303133',
    labelDisabled: false,
    iconColor: '#ffffff',
    iconSize: 12,
    iconPlacement: 'left',
    borderBottom: false } };exports.default = _default;

/***/ }),
/* 59 */
/*!***********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/circleProgress.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:02
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/circleProgress.js
                                                                                                      */var _default =
{
  // circleProgress 组件
  circleProgress: {
    percentage: 30 } };exports.default = _default;

/***/ }),
/* 60 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/code.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/code.js
                                                                                                      */var _default =

{
  // code 组件
  code: {
    seconds: 60,
    startText: '获取验证码',
    changeText: 'X秒重新获取',
    endText: '重新获取',
    keepRunning: false,
    uniqueKey: '' } };exports.default = _default;

/***/ }),
/* 61 */
/*!******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/codeInput.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/codeInput.js
                                                                                                      */var _default =
{
  // codeInput 组件
  codeInput: {
    adjustPosition: true,
    maxlength: 6,
    dot: false,
    mode: 'box',
    hairline: false,
    space: 10,
    value: '',
    focus: false,
    bold: false,
    color: '#606266',
    fontSize: 18,
    size: 35,
    disabledKeyboard: false,
    borderColor: '#c9cacc',
    disabledDot: true } };exports.default = _default;

/***/ }),
/* 62 */
/*!************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/col.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:12
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/col.js
                                                                                                      */var _default =
{
  // col 组件
  col: {
    span: 12,
    offset: 0,
    justify: 'start',
    align: 'stretch',
    textAlign: 'left' } };exports.default = _default;

/***/ }),
/* 63 */
/*!*****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/collapse.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:30
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/collapse.js
                                                                                                      */var _default =
{
  // collapse 组件
  collapse: {
    value: null,
    accordion: false,
    border: true } };exports.default = _default;

/***/ }),
/* 64 */
/*!*********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/collapseItem.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:42
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/collapseItem.js
                                                                                                      */var _default =
{
  // collapseItem 组件
  collapseItem: {
    title: '',
    value: '',
    label: '',
    disabled: false,
    isLink: true,
    clickable: true,
    border: true,
    align: 'left',
    name: '',
    icon: '',
    duration: 300 } };exports.default = _default;

/***/ }),
/* 65 */
/*!*********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/columnNotice.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:16
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/columnNotice.js
                                                                                                      */var _default =
{
  // columnNotice 组件
  columnNotice: {
    text: '',
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    fontSize: 14,
    speed: 80,
    step: false,
    duration: 1500,
    disableTouch: true } };exports.default = _default;

/***/ }),
/* 66 */
/*!******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/countDown.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:11:29
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/countDown.js
                                                                                                      */var _default =
{
  // u-count-down 计时器组件
  countDown: {
    time: 0,
    format: 'HH:mm:ss',
    autoStart: true,
    millisecond: false } };exports.default = _default;

/***/ }),
/* 67 */
/*!****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/countTo.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/countTo.js
                                                                                                      */var _default =
{
  // countTo 组件
  countTo: {
    startVal: 0,
    endVal: 0,
    duration: 2000,
    autoplay: true,
    decimals: 0,
    useEasing: true,
    decimal: '.',
    color: '#606266',
    fontSize: 22,
    bold: false,
    separator: '' } };exports.default = _default;

/***/ }),
/* 68 */
/*!***********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/datetimePicker.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:48
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/datetimePicker.js
                                                                                                      */var _default =
{
  // datetimePicker 组件
  datetimePicker: {
    show: false,
    showToolbar: true,
    value: '',
    title: '',
    mode: 'datetime',
    maxDate: new Date(new Date().getFullYear() + 10, 0, 1).getTime(),
    minDate: new Date(new Date().getFullYear() - 10, 0, 1).getTime(),
    minHour: 0,
    maxHour: 23,
    minMinute: 0,
    maxMinute: 59,
    filter: null,
    formatter: null,
    loading: false,
    itemHeight: 44,
    cancelText: '取消',
    confirmText: '确认',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    visibleItemCount: 5,
    closeOnClickOverlay: false,
    defaultIndex: function defaultIndex() {return [];} } };exports.default = _default;

/***/ }),
/* 69 */
/*!****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/divider.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:58:03
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/divider.js
                                                                                                      */var _default =
{
  // divider组件
  divider: {
    dashed: false,
    hairline: true,
    dot: false,
    textPosition: 'center',
    text: '',
    textSize: 14,
    textColor: '#909399',
    lineColor: '#dcdfe6' } };exports.default = _default;

/***/ }),
/* 70 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/empty.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/empty.js
                                                                                                      */var _default =
{
  // empty组件
  empty: {
    icon: '',
    text: '',
    textColor: '#c0c4cc',
    textSize: 14,
    iconColor: '#c0c4cc',
    iconSize: 90,
    mode: 'data',
    width: 160,
    height: 160,
    show: true,
    marginTop: 0 } };exports.default = _default;

/***/ }),
/* 71 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/form.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/form.js
                                                                                                      */var _default =
{
  // form 组件
  form: {
    model: function model() {return {};},
    rules: function rules() {return {};},
    errorType: 'message',
    borderBottom: true,
    labelPosition: 'left',
    labelWidth: 45,
    labelAlign: 'left',
    labelStyle: function labelStyle() {return {};} } };exports.default = _default;

/***/ }),
/* 72 */
/*!*****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/formItem.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:04:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/formItem.js
                                                                                                      */var _default =
{
  // formItem 组件
  formItem: {
    label: '',
    prop: '',
    borderBottom: '',
    labelWidth: '',
    rightIcon: '',
    leftIcon: '',
    required: false,
    leftIconStyle: '' } };exports.default = _default;

/***/ }),
/* 73 */
/*!************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/gap.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:25
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/gap.js
                                                                                                      */var _default =
{
  // gap组件
  gap: {
    bgColor: 'transparent',
    height: 20,
    marginTop: 0,
    marginBottom: 0,
    customStyle: {} } };exports.default = _default;

/***/ }),
/* 74 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/grid.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:57
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/grid.js
                                                                                                      */var _default =
{
  // grid组件
  grid: {
    col: 3,
    border: false,
    align: 'left' } };exports.default = _default;

/***/ }),
/* 75 */
/*!*****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/gridItem.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/gridItem.js
                                                                                                      */var _default =
{
  // grid-item组件
  gridItem: {
    name: null,
    bgColor: 'transparent' } };exports.default = _default;

/***/ }),
/* 76 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/icon.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 18:00:14
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/icon.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // icon组件
  icon: { name: '', color: color['u-content-color'],
    size: '16px',
    bold: false,
    index: '',
    hoverClass: '',
    customPrefix: 'uicon',
    label: '',
    labelPos: 'right',
    labelSize: '15px',
    labelColor: color['u-content-color'],
    space: '3px',
    imgMode: '',
    width: '',
    height: '',
    top: 0,
    stop: false } };exports.default = _default;

/***/ }),
/* 77 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/image.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:51
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/image.js
                                                                                                      */var _default =
{
  // image组件
  image: {
    src: '',
    mode: 'aspectFill',
    width: '300',
    height: '225',
    shape: 'square',
    radius: 0,
    lazyLoad: true,
    showMenuByLongpress: true,
    loadingIcon: 'photo',
    errorIcon: 'error-circle',
    showLoading: true,
    showError: true,
    fade: true,
    webp: false,
    duration: 500,
    bgColor: '#f3f4f6' } };exports.default = _default;

/***/ }),
/* 78 */
/*!********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/indexAnchor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:15
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/indexAnchor.js
                                                                                                      */var _default =
{
  // indexAnchor 组件
  indexAnchor: {
    text: '',
    color: '#606266',
    size: 14,
    bgColor: '#dedede',
    height: 32 } };exports.default = _default;

/***/ }),
/* 79 */
/*!******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/indexList.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:35
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/indexList.js
                                                                                                      */var _default =
{
  // indexList 组件
  indexList: {
    inactiveColor: '#606266',
    activeColor: '#5677fc',
    indexList: function indexList() {return [];},
    sticky: true,
    customNavHeight: 0 } };exports.default = _default;

/***/ }),
/* 80 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/input.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/input.js
                                                                                                      */var _default =
{
  // index 组件
  input: {
    value: '',
    type: 'text',
    fixed: false,
    disabled: false,
    disabledColor: '#f5f7fa',
    clearable: false,
    password: false,
    maxlength: -1,
    placeholder: null,
    placeholderClass: 'input-placeholder',
    placeholderStyle: 'color: #c0c4cc',
    showWordLimit: false,
    confirmType: 'done',
    confirmHold: false,
    holdKeyboard: false,
    focus: false,
    autoBlur: false,
    disableDefaultPadding: false,
    cursor: -1,
    cursorSpacing: 30,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    inputAlign: 'left',
    fontSize: '15px',
    color: '#303133',
    prefixIcon: '',
    prefixIconStyle: '',
    suffixIcon: '',
    suffixIconStyle: '',
    border: 'surround',
    readonly: false,
    shape: 'square',
    formatter: null } };exports.default = _default;

/***/ }),
/* 81 */
/*!*****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/keyboard.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/keyboard.js
                                                                                                      */var _default =
{
  // 键盘组件
  keyboard: {
    mode: 'number',
    dotDisabled: false,
    tooltip: true,
    showTips: true,
    tips: '',
    showCancel: true,
    showConfirm: true,
    random: false,
    safeAreaInsetBottom: true,
    closeOnClickOverlay: true,
    show: false,
    overlay: true,
    zIndex: 10075,
    cancelText: '取消',
    confirmText: '确定',
    autoChange: false } };exports.default = _default;

/***/ }),
/* 82 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/line.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:04:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/line.js
                                                                                                      */var _default =
{
  // line组件
  line: {
    color: '#d6d7d9',
    length: '100%',
    direction: 'row',
    hairline: true,
    margin: 0,
    dashed: false } };exports.default = _default;

/***/ }),
/* 83 */
/*!*********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/lineProgress.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:14:11
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/lineProgress.js
                                                                                                      */var _default =
{
  // lineProgress 组件
  lineProgress: {
    activeColor: '#19be6b',
    inactiveColor: '#ececec',
    percentage: 0,
    showText: true,
    height: 12 } };exports.default = _default;

/***/ }),
/* 84 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/link.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 17:45:36
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/link.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // link超链接组件props参数
  link: { color: color['u-primary'], fontSize: 15,
    underLine: false,
    href: '',
    mpTips: '链接已复制，请在浏览器打开',
    lineColor: '',
    text: '' } };exports.default = _default;

/***/ }),
/* 85 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/list.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:14:53
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/list.js
                                                                                                      */var _default =
{
  // list 组件
  list: {
    showScrollbar: false,
    lowerThreshold: 50,
    upperThreshold: 0,
    scrollTop: 0,
    offsetAccuracy: 10,
    enableFlex: false,
    pagingEnabled: false,
    scrollable: true,
    scrollIntoView: '',
    scrollWithAnimation: false,
    enableBackToTop: false,
    height: 0,
    width: 0,
    preLoadScreen: 1 } };exports.default = _default;

/***/ }),
/* 86 */
/*!*****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/listItem.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:40
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/listItem.js
                                                                                                      */var _default =
{
  // listItem 组件
  listItem: {
    anchor: '' } };exports.default = _default;

/***/ }),
/* 87 */
/*!********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/loadingIcon.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 17:45:47
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadingIcon.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // loading-icon加载中图标组件
  loadingIcon: { show: true, color: color['u-tips-color'],
    textColor: color['u-tips-color'],
    vertical: false,
    mode: 'spinner',
    size: 24,
    textSize: 15,
    text: '',
    timingFunction: 'ease-in-out',
    duration: 1200,
    inactiveColor: '' } };exports.default = _default;

/***/ }),
/* 88 */
/*!********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/loadingPage.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:00:23
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadingPage.js
                                                                                                      */var _default =
{
  // loading-page组件
  loadingPage: {
    loadingText: '正在加载',
    image: '',
    loadingMode: 'circle',
    loading: false,
    bgColor: '#ffffff',
    color: '#C8C8C8',
    fontSize: 19,
    iconSize: 28,
    loadingColor: '#C8C8C8' } };exports.default = _default;

/***/ }),
/* 89 */
/*!*****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/loadmore.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:26
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadmore.js
                                                                                                      */var _default =
{
  // loadmore 组件
  loadmore: {
    status: 'loadmore',
    bgColor: 'transparent',
    icon: true,
    fontSize: 14,
    iconSize: 17,
    color: '#606266',
    loadingIcon: 'spinner',
    loadmoreText: '加载更多',
    loadingText: '正在加载...',
    nomoreText: '没有更多了',
    isDot: false,
    iconColor: '#b7b7b7',
    marginTop: 10,
    marginBottom: 10,
    height: 'auto',
    line: false,
    lineColor: '#E6E8EB',
    dashed: false } };exports.default = _default;

/***/ }),
/* 90 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/modal.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:59
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/modal.js
                                                                                                      */var _default =
{
  // modal 组件
  modal: {
    show: false,
    title: '',
    content: '',
    confirmText: '确认',
    cancelText: '取消',
    showConfirmButton: true,
    showCancelButton: false,
    confirmColor: '#2979ff',
    cancelColor: '#606266',
    buttonReverse: false,
    zoom: true,
    asyncClose: false,
    closeOnClickOverlay: false,
    negativeTop: 0,
    width: '650rpx',
    confirmButtonShape: '' } };exports.default = _default;

/***/ }),
/* 91 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/navbar.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _color = _interopRequireDefault(__webpack_require__(/*! ../color */ 92));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                        * @Author       : LQ
                                                                                                                                                        * @Description  :
                                                                                                                                                        * @version      : 1.0
                                                                                                                                                        * @Date         : 2021-08-20 16:44:21
                                                                                                                                                        * @LastAuthor   : LQ
                                                                                                                                                        * @lastTime     : 2021-08-20 17:16:18
                                                                                                                                                        * @FilePath     : /u-view2.0/uview-ui/libs/config/props/navbar.js
                                                                                                                                                        */var _default = { // navbar 组件
  navbar: { safeAreaInsetTop: true, placeholder: false, fixed: true, border: false, leftIcon: 'arrow-left', leftText: '',
    rightText: '',
    rightIcon: '',
    title: '',
    bgColor: '#ffffff',
    titleWidth: '400rpx',
    height: '44px',
    leftIconSize: 20,
    leftIconColor: _color.default.mainColor,
    autoBack: false,
    titleStyle: '' } };exports.default = _default;

/***/ }),
/* 92 */
/*!********************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/color.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: '#3c9cff',
  info: '#909399',
  default: '#909399',
  warning: '#f9ae3d',
  error: '#f56c6c',
  success: '#5ac725',
  mainColor: '#303133',
  contentColor: '#606266',
  tipsColor: '#909399',
  lightColor: '#c0c4cc',
  borderColor: '#e4e7ed' };var _default =


color;exports.default = _default;

/***/ }),
/* 93 */
/*!******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/noNetwork.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:16:39
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/noNetwork.js
                                                                                                      */var _default =
{
  // noNetwork
  noNetwork: {
    tips: '哎呀，网络信号丢失',
    zIndex: '',
    image: 'data:image/png;base64,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' } };exports.default = _default;

/***/ }),
/* 94 */
/*!******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/noticeBar.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:17:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/noticeBar.js
                                                                                                      */var _default =
{
  // noticeBar
  noticeBar: {
    text: function text() {return [];},
    direction: 'row',
    step: false,
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    speed: 80,
    fontSize: 14,
    duration: 2000,
    disableTouch: true,
    url: '',
    linkType: 'navigateTo' } };exports.default = _default;

/***/ }),
/* 95 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/notify.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:10:21
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/notify.js
                                                                                                      */var _default =
{
  // notify组件
  notify: {
    top: 0,
    type: 'primary',
    color: '#ffffff',
    bgColor: '',
    message: '',
    duration: 3000,
    fontSize: 15,
    safeAreaInsetTop: false } };exports.default = _default;

/***/ }),
/* 96 */
/*!******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/numberBox.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:11:46
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/numberBox.js
                                                                                                      */var _default =
{
  // 步进器组件
  numberBox: {
    name: '',
    value: 0,
    min: 1,
    max: Number.MAX_SAFE_INTEGER,
    step: 1,
    integer: false,
    disabled: false,
    disabledInput: false,
    asyncChange: false,
    inputWidth: 35,
    showMinus: true,
    showPlus: true,
    decimalLength: null,
    longPress: true,
    color: '#323233',
    buttonSize: 30,
    bgColor: '#EBECEE',
    cursorSpacing: 100,
    disableMinus: false,
    disablePlus: false,
    iconStyle: '' } };exports.default = _default;

/***/ }),
/* 97 */
/*!***********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/numberKeyboard.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:08:05
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/numberKeyboard.js
                                                                                                      */var _default =
{
  // 数字键盘
  numberKeyboard: {
    mode: 'number',
    dotDisabled: false,
    random: false } };exports.default = _default;

/***/ }),
/* 98 */
/*!****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/overlay.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/overlay.js
                                                                                                      */var _default =
{
  // overlay组件
  overlay: {
    show: false,
    zIndex: 10070,
    duration: 300,
    opacity: 0.5 } };exports.default = _default;

/***/ }),
/* 99 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/parse.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:17:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/parse.js
                                                                                                      */var _default =
{
  // parse
  parse: {
    copyLink: true,
    errorImg: '',
    lazyLoad: false,
    loadingImg: '',
    pauseVideo: true,
    previewImg: true,
    setTitle: true,
    showImgMenu: true } };exports.default = _default;

/***/ }),
/* 100 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/picker.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/picker.js
                                                                                                      */var _default =
{
  // picker
  picker: {
    show: false,
    showToolbar: true,
    title: '',
    columns: function columns() {return [];},
    loading: false,
    itemHeight: 44,
    cancelText: '取消',
    confirmText: '确定',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    visibleItemCount: 5,
    keyName: 'text',
    closeOnClickOverlay: false,
    defaultIndex: function defaultIndex() {return [];},
    immediateChange: false } };exports.default = _default;

/***/ }),
/* 101 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/popup.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/popup.js
                                                                                                      */var _default =
{
  // popup组件
  popup: {
    show: false,
    overlay: true,
    mode: 'bottom',
    duration: 300,
    closeable: false,
    overlayStyle: function overlayStyle() {},
    closeOnClickOverlay: true,
    zIndex: 10075,
    safeAreaInsetBottom: true,
    safeAreaInsetTop: false,
    closeIconPos: 'top-right',
    round: 0,
    zoom: true,
    bgColor: '',
    overlayOpacity: 0.5 } };exports.default = _default;

/***/ }),
/* 102 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/radio.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:02:34
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/radio.js
                                                                                                      */var _default =
{
  // radio组件
  radio: {
    name: '',
    shape: '',
    disabled: '',
    labelDisabled: '',
    activeColor: '',
    inactiveColor: '',
    iconSize: '',
    labelSize: '',
    label: '',
    labelColor: '',
    size: '',
    iconColor: '',
    placement: '' } };exports.default = _default;

/***/ }),
/* 103 */
/*!*******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/radioGroup.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:12
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/radioGroup.js
                                                                                                      */var _default =
{
  // radio-group组件
  radioGroup: {
    value: '',
    disabled: false,
    shape: 'circle',
    activeColor: '#2979ff',
    inactiveColor: '#c8c9cc',
    name: '',
    size: 18,
    placement: 'row',
    label: '',
    labelColor: '#303133',
    labelSize: 14,
    labelDisabled: false,
    iconColor: '#ffffff',
    iconSize: 12,
    borderBottom: false,
    iconPlacement: 'left' } };exports.default = _default;

/***/ }),
/* 104 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/rate.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:09
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/rate.js
                                                                                                      */var _default =
{
  // rate组件
  rate: {
    value: 1,
    count: 5,
    disabled: false,
    size: 18,
    inactiveColor: '#b2b2b2',
    activeColor: '#FA3534',
    gutter: 4,
    minCount: 1,
    allowHalf: false,
    activeIcon: 'star-fill',
    inactiveIcon: 'star',
    touchable: true } };exports.default = _default;

/***/ }),
/* 105 */
/*!*****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/readMore.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:41
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/readMore.js
                                                                                                      */var _default =
{
  // readMore
  readMore: {
    showHeight: 400,
    toggle: false,
    closeText: '展开阅读全文',
    openText: '收起',
    color: '#2979ff',
    fontSize: 14,
    textIndent: '2em',
    name: '' } };exports.default = _default;

/***/ }),
/* 106 */
/*!************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/row.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/row.js
                                                                                                      */var _default =
{
  // row
  row: {
    gutter: 0,
    justify: 'start',
    align: 'center' } };exports.default = _default;

/***/ }),
/* 107 */
/*!******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/rowNotice.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/rowNotice.js
                                                                                                      */var _default =
{
  // rowNotice
  rowNotice: {
    text: '',
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    fontSize: 14,
    speed: 80 } };exports.default = _default;

/***/ }),
/* 108 */
/*!*******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/scrollList.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:28
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/scrollList.js
                                                                                                      */var _default =
{
  // scrollList
  scrollList: {
    indicatorWidth: 50,
    indicatorBarWidth: 20,
    indicator: true,
    indicatorColor: '#f2f2f2',
    indicatorActiveColor: '#3c9cff',
    indicatorStyle: '' } };exports.default = _default;

/***/ }),
/* 109 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/search.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:45
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/search.js
                                                                                                      */var _default =
{
  // search
  search: {
    shape: 'round',
    bgColor: '#f2f2f2',
    placeholder: '请输入关键字',
    clearabled: true,
    focus: false,
    showAction: true,
    actionStyle: function actionStyle() {return {};},
    actionText: '搜索',
    inputAlign: 'left',
    inputStyle: function inputStyle() {return {};},
    disabled: false,
    borderColor: 'transparent',
    searchIconColor: '#909399',
    searchIconSize: 22,
    color: '#606266',
    placeholderColor: '#909399',
    searchIcon: 'search',
    margin: '0',
    animation: false,
    value: '',
    maxlength: '-1',
    height: 32,
    label: null } };exports.default = _default;

/***/ }),
/* 110 */
/*!****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/section.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/section.js
                                                                                                      */var _default =
{
  // u-section组件
  section: {
    title: '',
    subTitle: '更多',
    right: true,
    fontSize: 15,
    bold: true,
    color: '#303133',
    subColor: '#909399',
    showLine: true,
    lineColor: '',
    arrow: true } };exports.default = _default;

/***/ }),
/* 111 */
/*!*****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/skeleton.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:20:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/skeleton.js
                                                                                                      */var _default =
{
  // skeleton
  skeleton: {
    loading: true,
    animate: true,
    rows: 0,
    rowsWidth: '100%',
    rowsHeight: 18,
    title: true,
    titleWidth: '50%',
    titleHeight: 18,
    avatar: false,
    avatarSize: 32,
    avatarShape: 'circle' } };exports.default = _default;

/***/ }),
/* 112 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/slider.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:08:25
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/slider.js
                                                                                                      */var _default =
{
  // slider组件
  slider: {
    value: 0,
    blockSize: 18,
    min: 0,
    max: 100,
    step: 1,
    activeColor: '#2979ff',
    inactiveColor: '#c0c4cc',
    blockColor: '#ffffff',
    showValue: false,
    disabled: false,
    blockStyle: function blockStyle() {} } };exports.default = _default;

/***/ }),
/* 113 */
/*!******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/statusBar.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:20:39
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/statusBar.js
                                                                                                      */var _default =
{
  // statusBar
  statusBar: {
    bgColor: 'transparent' } };exports.default = _default;

/***/ }),
/* 114 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/steps.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:37
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/steps.js
                                                                                                      */var _default =
{
  // steps组件
  steps: {
    direction: 'row',
    current: 0,
    activeColor: '#3c9cff',
    inactiveColor: '#969799',
    activeIcon: '',
    inactiveIcon: '',
    dot: false } };exports.default = _default;

/***/ }),
/* 115 */
/*!******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/stepsItem.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/stepsItem.js
                                                                                                      */var _default =
{
  // steps-item组件
  stepsItem: {
    title: '',
    desc: '',
    iconSize: 17,
    error: false } };exports.default = _default;

/***/ }),
/* 116 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/sticky.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:30
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/sticky.js
                                                                                                      */var _default =
{
  // sticky组件
  sticky: {
    offsetTop: 0,
    customNavHeight: 0,
    disabled: false,
    bgColor: 'transparent',
    zIndex: '',
    index: '' } };exports.default = _default;

/***/ }),
/* 117 */
/*!*******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/subsection.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/subsection.js
                                                                                                      */var _default =
{
  // subsection组件
  subsection: {
    list: [],
    current: 0,
    activeColor: '#3c9cff',
    inactiveColor: '#303133',
    mode: 'button',
    fontSize: 12,
    bold: true,
    bgColor: '#eeeeef',
    keyName: 'name' } };exports.default = _default;

/***/ }),
/* 118 */
/*!********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/swipeAction.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:00:42
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swipeAction.js
                                                                                                      */var _default =
{
  // swipe-action组件
  swipeAction: {
    autoClose: true } };exports.default = _default;

/***/ }),
/* 119 */
/*!************************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/swipeActionItem.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swipeActionItem.js
                                                                                                      */var _default =
{
  // swipeActionItem 组件
  swipeActionItem: {
    show: false,
    name: '',
    disabled: false,
    threshold: 20,
    autoClose: true,
    options: [],
    duration: 300 } };exports.default = _default;

/***/ }),
/* 120 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/swiper.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:21:38
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swiper.js
                                                                                                      */var _default =
{
  // swiper 组件
  swiper: {
    list: function list() {return [];},
    indicator: false,
    indicatorActiveColor: '#FFFFFF',
    indicatorInactiveColor: 'rgba(255, 255, 255, 0.35)',
    indicatorStyle: '',
    indicatorMode: 'line',
    autoplay: true,
    current: 0,
    currentItemId: '',
    interval: 3000,
    duration: 300,
    circular: false,
    previousMargin: 0,
    nextMargin: 0,
    acceleration: false,
    displayMultipleItems: 1,
    easingFunction: 'default',
    keyName: 'url',
    imgMode: 'aspectFill',
    height: 130,
    bgColor: '#f3f4f6',
    radius: 4,
    loading: false,
    showTitle: false } };exports.default = _default;

/***/ }),
/* 121 */
/*!*************************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/swipterIndicator.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:07
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swiperIndicator.js
                                                                                                      */var _default =
{
  // swiperIndicator 组件
  swiperIndicator: {
    length: 0,
    current: 0,
    indicatorActiveColor: '',
    indicatorInactiveColor: '',
    indicatorMode: 'line' } };exports.default = _default;

/***/ }),
/* 122 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/switch.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:24
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/switch.js
                                                                                                      */var _default =
{
  // switch
  switch: {
    loading: false,
    disabled: false,
    size: 25,
    activeColor: '#2979ff',
    inactiveColor: '#ffffff',
    value: false,
    activeValue: true,
    inactiveValue: false,
    asyncChange: false,
    space: 0 } };exports.default = _default;

/***/ }),
/* 123 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/tabbar.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:40
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabbar.js
                                                                                                      */var _default =
{
  // tabbar
  tabbar: {
    value: null,
    safeAreaInsetBottom: true,
    border: true,
    zIndex: 1,
    activeColor: '#1989fa',
    inactiveColor: '#7d7e80',
    fixed: true,
    placeholder: true } };exports.default = _default;

/***/ }),
/* 124 */
/*!*******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/tabbarItem.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabbarItem.js
                                                                                                      */var _default =
{
  //
  tabbarItem: {
    name: null,
    icon: '',
    badge: null,
    dot: false,
    text: '',
    badgeStyle: 'top: 6px;right:2px;' } };exports.default = _default;

/***/ }),
/* 125 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/tabs.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabs.js
                                                                                                      */var _default =
{
  //
  tabs: {
    duration: 300,
    list: function list() {return [];},
    lineColor: '#3c9cff',
    activeStyle: function activeStyle() {return {
        color: '#303133' };},

    inactiveStyle: function inactiveStyle() {return {
        color: '#606266' };},

    lineWidth: 20,
    lineHeight: 3,
    lineBgSize: 'cover',
    itemStyle: function itemStyle() {return {
        height: '44px' };},

    scrollable: true,
    current: 0,
    keyName: 'name' } };exports.default = _default;

/***/ }),
/* 126 */
/*!************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/tag.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:37
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tag.js
                                                                                                      */var _default =
{
  // tag 组件
  tag: {
    type: 'primary',
    disabled: false,
    size: 'medium',
    shape: 'square',
    text: '',
    bgColor: '',
    color: '',
    borderColor: '',
    closeColor: '#C6C7CB',
    name: '',
    plainFill: false,
    plain: false,
    closable: false,
    show: true,
    icon: '' } };exports.default = _default;

/***/ }),
/* 127 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/text.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/text.js
                                                                                                      */var _default =
{
  // text 组件
  text: {
    type: '',
    show: true,
    text: '',
    prefixIcon: '',
    suffixIcon: '',
    mode: '',
    href: '',
    format: '',
    call: false,
    openType: '',
    bold: false,
    block: false,
    lines: '',
    color: '#303133',
    size: 15,
    iconStyle: function iconStyle() {return {
        fontSize: '15px' };},

    decoration: 'none',
    margin: 0,
    lineHeight: '',
    align: 'left',
    wordWrap: 'normal' } };exports.default = _default;

/***/ }),
/* 128 */
/*!*****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/textarea.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:24:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/textarea.js
                                                                                                      */var _default =
{
  // textarea 组件
  textarea: {
    value: '',
    placeholder: '',
    placeholderClass: 'textarea-placeholder',
    placeholderStyle: 'color: #c0c4cc',
    height: 70,
    confirmType: '',
    disabled: false,
    count: false,
    focus: false,
    autoHeight: false,
    fixed: false,
    cursorSpacing: 0,
    cursor: '',
    showConfirmBar: true,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    disableDefaultPadding: false,
    holdKeyboard: false,
    maxlength: 140,
    border: 'surround',
    formatter: null } };exports.default = _default;

/***/ }),
/* 129 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/toast.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:07
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/toast.js
                                                                                                      */var _default =
{
  // toast组件
  toast: {
    zIndex: 10090,
    loading: false,
    text: '',
    icon: '',
    type: '',
    loadingMode: '',
    show: '',
    overlay: false,
    position: 'center',
    params: function params() {},
    duration: 2000,
    isTab: false,
    url: '',
    callback: null,
    back: false } };exports.default = _default;

/***/ }),
/* 130 */
/*!****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/toolbar.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:24:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/toolbar.js
                                                                                                      */var _default =
{
  // toolbar 组件
  toolbar: {
    show: true,
    cancelText: '取消',
    confirmText: '确认',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    title: '' } };exports.default = _default;

/***/ }),
/* 131 */
/*!****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/tooltip.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:25:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tooltip.js
                                                                                                      */var _default =
{
  // tooltip 组件
  tooltip: {
    text: '',
    copyText: '',
    size: 14,
    color: '#606266',
    bgColor: 'transparent',
    direction: 'top',
    zIndex: 10071,
    showCopy: true,
    buttons: function buttons() {return [];},
    overlay: true,
    showToast: true } };exports.default = _default;

/***/ }),
/* 132 */
/*!*******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/transition.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:59:00
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/transition.js
                                                                                                      */var _default =
{
  // transition动画组件的props
  transition: {
    show: false,
    mode: 'fade',
    duration: '300',
    timingFunction: 'ease-out' } };exports.default = _default;

/***/ }),
/* 133 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/props/upload.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:09:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/upload.js
                                                                                                      */var _default =
{
  // upload组件
  upload: {
    accept: 'image',
    capture: function capture() {return ['album', 'camera'];},
    compressed: true,
    camera: 'back',
    maxDuration: 60,
    uploadIcon: 'camera-fill',
    uploadIconColor: '#D3D4D6',
    useBeforeRead: false,
    previewFullImage: true,
    maxCount: 52,
    disabled: false,
    imageMode: 'aspectFill',
    name: '',
    sizeType: function sizeType() {return ['original', 'compressed'];},
    multiple: false,
    deletable: true,
    maxSize: Number.MAX_VALUE,
    fileList: function fileList() {return [];},
    uploadText: '',
    width: 80,
    height: 80,
    previewImage: true } };exports.default = _default;

/***/ }),
/* 134 */
/*!*********************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/config/zIndex.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),
/* 135 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/function/platform.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 注意：
                                                                                                      * 此部分内容，在vue-cli模式下，需要在vue.config.js加入如下内容才有效：
                                                                                                      * module.exports = {
                                                                                                      *     transpileDependencies: ['uview-v2']
                                                                                                      * }
                                                                                                      */

var platform = 'none';






platform = 'vue2';















platform = 'weixin';



























platform = 'mp';var _default =














platform;exports.default = _default;

/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */
/*!*******************************************!*\
  !*** D:/uniapp/myUniapp/static/phone.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 141 */
/*!**********************************************!*\
  !*** D:/uniapp/myUniapp/static/computer.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 142 */
/*!******************************************!*\
  !*** D:/uniapp/myUniapp/static/ding.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */
/*!********************************************!*\
  !*** D:/uniapp/myUniapp/static/doctor.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 210 */
/*!*********************************************!*\
  !*** D:/uniapp/myUniapp/static/conduct.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */
/*!*****************************************!*\
  !*** D:/uniapp/myUniapp/static/img.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/img.jpg";

/***/ }),
/* 220 */
/*!******************************************!*\
  !*** D:/uniapp/myUniapp/static/img1.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/img1.jpg";

/***/ }),
/* 221 */
/*!******************************************!*\
  !*** D:/uniapp/myUniapp/static/img2.jpg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/static/img2.jpg";

/***/ }),
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */
/*!*******************************************!*\
  !*** D:/uniapp/myUniapp/static/city1.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 245 */
/*!*******************************************!*\
  !*** D:/uniapp/myUniapp/static/city2.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACOCAIAAABsandiAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAgAElEQVR4nOy8V48lSZYmds4x4eLKkKlVVZbo6tqe6dkFZwkQ3D/Bl/0nfCTA38F3/gUC+7SYIRuzYgYz01VdXSorMyND3Ljalalz+OA3IiMys7p7MbNcPqwhcCOuu5u52RHfUWaBIgL/vf3/u9F/6wn89/bHGx4cP3n7BbH/gwAQ8N1HCQXfvXizF4AoYMCbVwARQQiA+ouMN64jihAIESKAIGlBBYB9AwAQBlJASpAIBJmFEwoLBpEEmIABAN8Bg/7r7qK8FUMGeG9N7y/hZ9rbd9A7lPnjfW/2vur0B7oLigBYbf/3/+1//bf/9n8BAP1HX/DP0eTq8z3G4+4XAgAgAALiTkgABJFQCSpAAmFAQOCrMRAAr0b+r9+uXvXHGfJfoemfWeefuP6eun/Kk/LemFfE3ukNAhIQARCA6rmHAEAKsP/KAAmQRdKur/QDyocmIDc+//gq/pQnd/L038KC/5wmfUDq37+G+M6lP7CC/tY7D19/RbkCQAAlqHc0QRRUQAqAQBIgAEYRxJ0aYY9rN9676yRy/fn25s+x4r1VfLj1Q8n/V7qE1x8A+g9A6ju3PiCuAtePXFmRn+PTh3EcEftxBQl2PxrQCAD0xqxnkhBiBGFBAkAQBOk59PadN2aLiPCWQ1c2RAD+BPPx3rzxnZm/u5Z/YuvN1ftc6MGlb/rnX4k3Pt+5+HNX/vDsb7z2/SeRAHvEU4AaBAAJkUBpJC1ACCSc+scQSIBRUJBAuGfJz739n4Oi/9QxEFBuq/utu+9yCN8RhZ+Duw9y6I/NZCfY70+mh6b37NdNlvUcwl51DPQuBGpSORAJEgIKewACJABGIUAGQUAEwR75Ptj+JCz7I+v6Jze86S3/oQER8X3aa5B37Axcr1huwsMOza4Gum7S03/n8ArS1cPyHkN6g4EiPRYhAiKSIAkpQaWAABSroZgMWYgTUgbZMUhCRQI1Rg/SINJOLBFBEIEEAUEA5NrTfevy7maNb2dwNev+7k3n+GeR/xaJ/gCJ3w4vN03wbb0Q2ZnbG1bnFqFwB8y3NOn2W6+QWwBuyuft4OCW/RcQALkySTfF4J139wZ6ZzCu/ASUK6BDVKAyk+1jXqbg0bc2n0p5JCzKSKg0+83VEm4OvlutQEJ8N2a6OVmU20y6ItKOnj9rr/5EUHmHPlcSfsNQvjvgzStX08YrDuINNt2Cuz8lLvvA5ARFAOl963Xz551bO8rI1QNKEMiAGkz3Hx3ff/T6zZt6vRgffjw4nHg/yPNm/ubVprmQpIWd+nls+y9ewTW6/FxHuW3E/8BAN78gvpWDd1yPG6Byq8Pt7je59M8QzN5ClrcC/q4tEJF3ZnIDVJEQBTXq4tGTj37161+1/w8Gtsf3H/yP/+aTH370jx7gX//7uJ39AIEEbqvoh9q7sPYHO/wRfw0FhG6P+offCXCFVvIhJvUs/0BC59YjP69JH3757RyPiLwDKYgoQLJzdt/e6qEP8VZ6sE/Z9OHrzu0mAkQBFCBQ1nEzmOijO0d7Bw8meX400i+xenrvzt8NB6R1EkDBD/r5iDf8//e49A49bjNmN53bPa/6yx9l4wcncxvrrun+1gv9AJOuSC2IQET/rJp0vYwrRvUYeHsCH1gHAO1+EAVJEAQkhDibzX1whITWK3TDCRolNlMCjIAo1DNfrh2UG3S4bbLhfSPVY77cIl8vfHh9t18W9HJ2rRG3BnkfwD/0wPt4hjfs4Xtdfs7c/KlM+mB/udILuOlNvf2TAN5d4bVhhFs/xKSEACFVlau26eVPL7eb1Zd//meb7b1tl85O2xQ9cA921xLWO99vh/7gxG+4cm+l9QOx47vQdBO9/xiTrkLynTpfO9x45UPccrx+xsLddPputz/EpOt02zvyusOsG4uAncnpxW+HEbeSXTtAQQTplQGvoiIEIlSBNCgLgm21ff3q2/1JLKwwL04vTlzH//E/v1hdnEtqd549IgASoBBd5RsEgN5HNxFBFABCAUC+9hHwlnP1lnPXpJVrD/QKKG7T8xZBZZc5QUZAENq5Q5iQAXs5ot3AN37dpN8udge89o9vmq13XPCrt16JlVw7KrfneOsNbykC3DNJBACu3b3eCMouAhNEBCQhhUCCGlETGlRZpFyzTn69Nx396uGB96PGB5bFUNHfvfx6c7aEWIswYELpXXnCPmJC3sVrcnMyV6EUAAkhyM5T2fGB3tEmxD5g7ocjQLmOFG5bwWsa3oLHPsAQ6rFbrmaIAAmwT2vtevLbQXahZC/A2hpOzDERXCvbP59Nut3wBuxe8fKqtAMEggSgABSIIkRAHdUg6CJq3dhDhXlB4KtVfbFJiX2IqtsGhybMSrXpYusjM7TEvWkFQiTq61JXSoIgctuTFNpVuLAXkd3i3w3ierbfVpybDNkBxNWFG8rUh4CiQPLEiYh7pBe0rBMB440EwY6dN30HuaIVJfbWUGaMDwmoL7MB/JfapA/W2j+UHLwFuzfoBSIkTIAKgAiBlI6mTGYUbNkOH2uVBdjMz07TbBO9jxBGo71660qGh0+y/zR3LqkIHiMCiiIwWmtteu1kfhvKM98MdQmBrgpRu7LI+xDW84mwL2wi99ogwL3jcIX7N5K5VzkTQARKJEriOEiFEAgZQRBRFGGv4YjX1LvhXIsAsyhFRBRjAgBt8Pj48PR8brIMiX6WSe9H4L3gXIvnz7HqdiS0m8p1lpeImFmAEDWABtI6z/cPD6k8TNmkye6MJk+ycrAfZp/fOZq0L8S3Cby1eds6RMwye/Jq/OPLLV5xO6YkwsysDSnVv0oQSWsVQh8piDFGqyy3edduY2IWFhEAYUGlFACmlBABkbTWwJxndjAaL1YbH7gHrt6O9aNdaw8RsQjv1AhUbx8Bh0XZpuCFBYBBkgHVx+lyVfgSUUqJoIAwc58hA0BClQ8GIdSkpG0bpdRN2n6AST/nCN5Mutyc8ft33+9FRFpr7wMiASpBQiRbDJ5/9nlx5zGPjkSP/Pi4GA6wuzeVE/fV9+BqwUQGOWyLIl/MF5NJhrjCvkgBLCyRI6eUmIxRzCwiWhuljPexXzwLiBAIaq2TOEiglAohsOx0po/6lAIilVJSisbj0WK9RkIIjNybKL42tIi082kBWYAIBZD7NaJOqJAYWRBBoQAlDZYEhEVnmXMOEY2x3qerFB4Q9UxXImBNlmJXVQ0zJhH1viYR0Q3qCxJdK8Gfokk3L14bbQAwxoQQ+okQoSD06ToiYO++e3ly594vs7ufGNUNJtlgXPzwnWtWCmcON6skaX8PF8v1ZJLmq62gAozIBCjMVwIOkFJkDn3xL8aUYmQRpZTRmhlQKxEgImusE2+MiTEJS0oJr4qNSummafenY8A4n1+6rhVUfaQN/aoRlFJyZbBSSkDKGItEg+GgcyE4PxgMydiwutDaxhAypPuZqqPeMjtIjx49Ojs76zrXdU4EtdYEBAgijIjMXNe1VoQCXXACglqHGHdMIiIBYGbEHjsRRICutESujeS19dxpCFzBes8/FlFENxjZ3wLm9DZM6z0yAiJRCjJK22pz8dN5PvnSJMxny9z6s5PlXX9+0NXk65BS4bLWN9aT86J0QkwkxJgA5CokRebUL5UAgTmEgEhEKJwAVGbzyajsOqkah0jMopQOKfQxQ2ZMEkEkYd5st8PSbqqlgBRFEbcdIAKwAGtthEURleXAORdSFEBhNsYopdGAYUSynTJMVGRZ9GE6Gn55vP96Gy8krbqmaRqlVEwhxIRoMp0xIMcQU0TEmKKPobSZVSokZkiDQXGdvtGyExYCVMyJCAGo582VvUNApF7NEUCYUIkICO/MLSkG4ZRYBK80MqWEtJNBUoRaCUJelgJIRFrhaJAdTIe1xBfz88WPF/nY1ujbNz+o9YU2bQYOcqPYFJrzXOcakQJ6REBFEJmBduEIC+/EAcUIKoBAoJUaD/KuaWOUEGMCt223TdMCECkSVggRJOaZLazqEMURSIwRnE9JkiD61iGSKFQCqEmEjdaK1J2jo/Vms662SUApXWZZ23ohTSZvImcUc2NdF2xRdNC9qZdqeH+/NO5i5rwDAp9C4JRlZTY6qDvPqQ3cGW1BJ2BlNe9NivPZikhZjXRlmDRcFYmulOCGZ3m1OYuQrhHvytkVROwRIDGjomvjpLUmorZtqQc4RAFUSmXWxpiYEwgYkxHEv/yXv5yv15ffX4bZ7+3lFgjyRYX+AieishZIKU1EggSkCFEUUpbZGCR4T5pQIMXUixECMgdjDCF6iZjcw7sP6s2mquNkf3T3/n7bbDhEZmYBRjTapMj7e3ujQdaxh5AuZnkQiAGzfBAYMmWJBZExiRdRRJkxVhvnQlEOfeLGORHpnENVFMWAIJeIWnuVx5gaWxpW7U8p7CHMTk5c5zkFbS0LM4PjfOMHREOSC0WZ5wwUCTQCYGwGpAWIBRWZt0zqY92eSR/0p6+v98/0KoWIRVGEEDj4FEIPm4jove8tXG/Jdyxnabwn2oWV3kNm8Mn9w4/uj/729/93HoZ31apLuopBLOe61FqJoMlzRJ921k601oPh0HfgYjMqSwCu6oYFASTGiAhJmAVYEkA63B/tjTKFeTacKE0Pjo7rQfXq5cuQoBxOQWyXYtu2yG4wgHIaum4cANoqlOWAdJYrjRK6rla6qJ23xg7zgSRAMvsHh6B0XK0kRUKl82I8ObR6KBFdt9r6VuWFyTUqqtb1aIDttvLOsXBJJMzCKGYfB0+xqwq9VRo6HDvpwKe6bd6cLRitj8kFTHylSTedtJuuGgBgrwi4+73Lsdxw8IwxzEwRUamdnr3vUewcibf7sBARhAmhsDjO7Wf38g21T4+HFxW/SYJmfFAeGq5jXI1Gg1g52W0I4hB8XdUxOACwSiNBp70PEREVEYBKwiKChIz69flMUjo6OJZ27RpnAIeZGhZGBRgUuY/sOurazqpcYhwN7RlTSB0SV9VmPD3oupYgIog1WhCMKYQsA4KAD7EcjuquY46SkJQFKD7/5fO9Sfl3/+H3q82KjGq6Zm86mN49spQzR+AEwMIJWFCYNN59eFc3G/fqdZGNDyZPAqVmBuvZKxdSBEkszscQbjgONxlzKxq4wSHqnT3mK9wDEdlut0SklSbofQcOnG6yZucTAgCAugqgCdFo0oSKpMjV0ZCg3T65+8nmhxkIdG0nJgkKc6jrrRFmEEEQYZHoXCeQUpS2bpGg7bre2VFKGaU5JWFApEjm5dlCKwpJDTMYZgNizon3x+WmZWN02zWJpdBWq0yYB+Ukz5TrPOrICMvlbGALS5DndlAWOQua0nNOaFVq19v13sHBaDLq2pYjtkGCV5989vgv/uL5m1f1dy9+IABOYk3x9PMv5q/ODAICRBIQBhERj9BkqhpP4PI0DSbj8d2j4cF4VrjfLk4AkZkThxhCuiLmu3HSdb7jmjdKqVtBHPO10VJK5XmOAiLCzCGEyNzH/4iYZVkfA2oi4ERE2hhSihSNB8WozIlsFJmvqzer8Kv4cb3a1KtGLHbO66wGFhHQxuzt7QOnXSwIDALG5BqUD87ojBQBCLNorTHbZaRSoswqidH5KAkmpcmoG48KpcBdbAAlRQfCWVYOBlPnqKv3Ja7LfNz5Coi01rnWCkKfzUNJzJB0AXqouqat60EoWRILJ8bEEjleXm5P36zLwSDPh9vtmxS72fklme+HCfd0lgZWBrpxUZEipaRbnnz9N+fsoVuuu9mLk9mTjx/p1HDsErCLMXovmjiGm3B3K80NuwgLFSkiUooQqc9vM6neWe/TukrpIi8IIISQUkopXnETiWg6nTZtQ4BGK5RERNZaZawmKnIzKHJEHURqD5s2eGTSGGO7dziajIldEoZyMNTc3js6vHj96tq/IcQ8HxYMoY5KobFaRJxzIqCUNsYAS+hiabQgSEyesjwf2OgmA2vz/OXpvAsNS0ICrWw5mHZeLD3KdKutdSEprcfldJip7eoMgDnF6F3jlc8miGrAgSW+OX0NiMEnRTmDCrH99vcnKZjj48PBYFRtKQVeztdt557dvVtOx4qUnRY/vTrVWgEVydfNxfcxeAavtHh/AWm2Nx17V7kYXIzCCZJKyV8xCYCBQJiQAUn6+EORAm2U1YSgAFERgEKWBIApILAwodJkcluApBQjgyCBEAgLCBDig3v3v/3xu/FomBudUkgpkVK5VUVmjSaQgMKGBIQQMaXYNtuYQoyQYkTRzG1KIaVggvTqmwBDSuNhYQxMhxMxWIcuSQTY5UejTxKhzEuXfFtX9+9Ok2CTslUbm8WKufns08+MkrVz1hY+xNa1b85OgXK/qj4aHMqz57NqoyW2zVpTrJqO2VVdU1VVEBPVCnWeS9WbXgHwISnlTQbKZYv5qiwWf/Hnv/jFr35pClnMXvm2JQWz1YqSJ4jUVavt1scwHk28j10XlCFJeYyeIHnXRhmpLLdESZIgGIV0VdTWSilAwzHgbh8vApHStjCD3GRaM2nWZJBTntHJ2ZYR+yMSCEKkjDLA6Pp4iBD7vD4zIawWM+IEzCFG70PbNUiQ7R0gQkwxRQeSVB+BCiMn37Ugst1UK+7GBSJwVW2KjE7PZ5YZAVlQUOV5nlvLkO7cvXO2mK3Xqz5zp5UR5uhjMinLs66plAICOT48Bg/ny63mNBoNWVJMIqyJyEfXtK4cHS9W80f5YHznXkUKu+16dfbm8nS5Xos4UlS3LQAl3iBSA2xtTqRZJLEAJiCdxTL4tmlaZfSDx89a74zREt1mNVsuzzAJUVwvF845BMqsRaQuBkyk0LBnwuC7br1aEZHRGsEyoyF17S5obYzNBr5tJCRBITKo7Xh8cPf4zv5eORnCtDCx9blVh3cO/o//8//iSETQn1nRfaZHFAiBIJGymfVdF1MkMs32YkyWgwQhH7BqPEKKYZYZa4yyhpwPzJqIEEASc4zT8cRjLMrM2ASR8izTlA4m+/VlC0CIqihGIEqRDS6tl6eVqwmBY1BEKIIgAKntttpoZczpxVKEsxo0GCBetu63379cVF3nSIBFYgwuRRSzeYNhW18ev/pm2y6ryxmn0LZtCEHAQwQQYWHYZWYlBA+Q+myMEMbggq/qaknqcd14Y0bDwaGbNBy2dXVprEkOO9dE7zlEpRWwIOnj43uucdpkvm3aeh2j66q1QkzBWUUucG5zfc2k4Wh858HjVz/9VK07VKC0HQ4PDo4f/g//+l/94qPDaR4GBOCDc3XSyubaMVFC5KSIjdGaSAC1NoLCUSaDcu4cghitNMGQ8m1SHikkZFEI4CMmYc0CZGNMiJqIFBECckrD4XDjtzY3SkFUYK2WEIeDsr0EYSnywXhc7A/zzz/7/PLVmxcvviVgm9k8z43WAIAITVvHFIbTYWFsU1XCiSGSwsGwAFGrjhl1Udpq2yX2IsKJ2noZuGkBL/7xP4RUiY+j0V5eFL4zPriYEoIYpQSwTwYBMAARUYjRGIvA3tfb6jKmThvtWZiZOabUsQSlFbA2bAmROWkhAdBKa23ESoieFBABEWqrEUQpA5JQjNWKrsqm+uDwaDSedM4ba4Ekywdf/tmvHzz56H/6n/+13Z5MoEYQpdT5dksqPzw+sg2wF8VBKbbK5FmGiF3oQtuF4OtF5Vxb2iwzRqGQKATVtS2wHwyHKSYBBAJlTVYUb11HJFJKGb1YLrahHppub6hDDFW1GVg1v7xIMYjI3bv3timMSvvk6fORGSrF33z/j61rVGEm40nbVEQkaE/P5/uHwyzT3lkAFg6ETNYkJq1wXKjgk+88g1KKgLUi5VES+LBZkJXgYixpVJS+XQE6jAgCeV44F7wE3lWkRBGCRgJJ0SOw67bzxXlMoW4uOa1m5z/OLr5vtitAPDx44jpGYeCEoEFSTBIbQUaA5ENLCjXpcn/QNnV0QQIjcEzxOuzULLBab4y1HBJpMiZXylirU+qURUjKgUiUdVA/nLxRxj58fC80HbcbpTD5YJQSECJ2vmm7KgkTgjHaGGUMIkIOMrWgtW07KCaHiXlbrbW2k+meUqpnklIECk2eYdBlNgQQQTI2Dz6ApbqqLAiiCKcsy5CwjbJ/dPdy8fr4eNp1RgCC3yqMfLWqYZll1qCUnXPRBQRJACAIDJk1WW611oIhcQJWhOAiCgi2bK2pQmDp0Y1FWCShoNEquKCQlFFEShiMVhASIktfxpBoc2Uy+vWfffQVdT/8znf1KrmWATh2vqtTDCginLzvQNu79+9tV9u226bkJLEgjEbj/b3p5cX5dr1ETdKP3DPJOd9WXV4UkSSEmFgWy/nhdno5f1OruhvmlReJ8NW8/t3rpcnK4WSiytLywHlfrdfJ+xBdSq7rKsIECKSU1gSS9o+mIfHAqifl/mg8+eb75Wj/kesahFQUtsiy6+Ren4EthoMvP/rcceDNeZmlUG9YkiZ49ODB5evvAVNK3vvku6Sycnkxz8qCNBAlYUkxRt8KKlSlzQrFTJJS6IwiQRIAIo0p+dApbfOsTBKZMLnEIpFEMTnwiSV0LobWhdp0ffjcB4XQtm0IUQCE+xiRlKLgU1+sEkSAFFPbuupg//6o0PV6pTglTimF+eVJ8I0AIwlzbJotZdlsdsqRiaRtG40KAE5/OrFGp+AUEmoIMV3LnN6bjiaoU+KzN6feE0DWdWm72Xz//bfHR0XlSlCFdzFZa8sytlq8K8tSsSatg99gJsYHnZWkpkS8bToiLaCVMQdHI9RUWDseFqPh3uuz1nuHKHeODo01RvcJdIWUEAGYU+Kq2qLRoa0LZYUlcWSl6moDIoCy3W6bjdo/PPSJkzZZUe6NJ6vYdd4lZqWIgYKwzbIYotZZiozUF70BBBIzcDLCBcdGQxJQSCwMvXuJBBhDCAgisek4phBSEmFhAZFESvWRgDALs3MMgMIsEoQluq7eLn/88fe/+Pi43q7bpgYBJDTKICZAUVr3WZjOteBd27YxRJDEzKwMi5ikfcPCKS+zPtZ5u1tIa2SWmKSpI6qRVgddm52cLNpu9uKHtjDl5OC4DX4wHO8VGrN8dXEWymESCV09LNvjI2v00OTDy9lAYfzx1bnS2aoObRCAkJlcqdT6uoglIjpXZxpHkwkAUB+eAQElEMYQowsvT79BrceqKnAcQhdSV6jB4vxsYBER2q7L9eGTjz9NQqrMydtpMapwThAiJ2FkpAQ8GA8FEMQqnTHv4kEEDJIUgAGeisxSJ33IwJKhDeANZbUEZgEgCU2EjiMDI4pKnEg4z7Ou64CRJTFzDKBIIQKLCPsE/OrFd8Vg8I9H0x9++NaHxscQJOV5PhiMqkqSd6QIAEgghiDRIwqEKMJNcMycG7vb/dQxgBhj3u4W2jb3jSpF9MNHn6NWInFbzTavz05ezTR1hSlM+SIAlDYvVFYOpiGqpmmDb9arSzjWzGA0ZEUnJN7FKMApJg4x8Xy5Kb0vy9xmirGvhXJCCsEzc5GZq4OUKAICiAzsnIRgp4qACVJfwinLUkJDDDovPn3266efftk2rm4rLQ4lEPVn/2C3oZwhhCAmZwHpbcru4IsQIRKOx2MMEDwwgPccEmDElCBxSCkJ91sPvCK9S0CCiEiSFKJPnJCgz+4LS7zK8QsAcGw26x+++SpsV9V6Vddb71ySgIhGKRRmTikGQBQgBiSlh4PSb7dapDRaAJL3Wuu2bb33IqyUut5yqg/2/7IsRpKQlO5SfXH598vNd832AlOXqWBVDVnRuC5D2BsMnn3+LwEykbRZrbbVWmfZ2aLLlcpKMYUyUJIpUFJWWFUqz2QYAwsyMBIqQBJEiDH4EDKrAKQnMZFhVISEIQphrktDKIS6yInUKC+2i1oSDkfT559+bk2WFygVuuSZ4y5B358uI6UAkVRMGEPgPlUVk9bEnBDFGq2MZgZmDCJRSAA5IgjF6AAkpZRSQkQ0u41YwjtWe++Yr7fjChL2GTJmBq1EEgRXzS+/Wc+FEzIzR5FUV5um3mbWEEDwHgkBdEhc2Gw83V+0DQqXZaGN7ndudF0bY2ROIYS3Nun09W9A2sEQY3KLTVdtzl3zWkkwBqcj8+Tho2WtFqtVrt2fffFYFXaFo73x/mq5NSPwRqtSS+wSNogKsBxMco5tocgDJedFWdF5AhDQAqCVSikmTnmewa6ygURK64x0ZvMMIHnPdY2jglIKyQnpbNN1kDiKfv7R0yObUnX2+PFH3/vN72a6ZbrKOUov9AjYVPXx/UlhjXDXtaIUpBRZGASUomKUL+uF850yllCor7EAkyJiBRB70scY+qwMEVibM3NKCYCTJMLrrbKilGJmQRBgkoTJM+5S9ooIBRMIiKQQBAGAOYoQiEAILiRPhkIXmrrSWgsIJ44pMDOzxBg5XWXBT376jTXV/udHJM368ty3qJBApczi08cP9yZ5OZo658aD/NmzR7//oSJ1p2nL4fhB23FSqLIyhLkiZLJBMkMZUNLGOJ+iQIQc9RhIBKwAKm2c61KK1hoRBhQWQVDGWNJ2OBorqyCJDxxiSokFo2jbNE2hkZEmoxFvl+Q21t/ZGw7JDroIRluQGgSYGRPD1f62Zx89/OofLolSkdntthJBFDKZuv/oznw5J0woQRNpbRWRMHLE4HdZZ2FOAIypTzGXZRFj9N5bi53zSBhjv6UCmBMAEKIkIUwoYIxiFgAsbOaDIGvpN/MKK0QhQEXM0ftWUigH5aJpYgzBuxBDYmbmfgdPSultnJQXq4+eHpXWrdr6+bPnL348db7Tmp48erDdrHON89XycHpntaj+/j/NEO88++Iv56uNrM6AIbRegQnOjaf7+eigqerWt5TEhyg6K8cjTRbVFIkBc2ZEIGaOMWg9VCS4q/oqYzJS9snzj94sViMPJrTD8Wi99pPpRDNMpybUawVpsV6C3iuwPLlcLDadEjFKQZYZY5KIYGQARSrGYDLF4H/55WfBedZwEsUAACAASURBVCH1N3/zt76LIfKkKFGnv/w3/+r+q7OL2SWRybJCZ3Z+sUpgf/Mf/7NIxOt/GSCSOBLpEFzbdog4Go20td47rbVWxjnfk5JEiHpkSL/4/PPhcLi8XG9X2xDzuq6JUGvd1JVzTKRIUYzMKV6cnRRF3m9PTjGx8NXWPAGAXaF1Z5OOym09d00KgUD7Zx8/++qbf0SFm001Kux6U2tl602VXLm4KO4dPiyzu01hsqLEmokTpagISBU2O6gbZnaEhgWjx8FkCGhQDxAYUMfAKUVhEZEQAmgQEEICpH7LReeCkE6QMmWQtDIWkBDZuY4QUEKIYRH9KM+GebE9m2MMhqhjSSwpMbAQYW7VaFT65PNB7rbb2eVMZ1ZrtepqEBWFW99qye/dO55OJ+Px3sV86SXVlavqAADCQNSfESWR1J+biin0kPjFl5+fns1mF7PESStNimKMAKBJxcAxBZvrlHzb1A/u3zUPH2yr7Xy+0MbkWfb111/5AAKQYgRJJOy7pijyJGCNDcmDpKtdddDvILvera7X8+74Ti7IMUKWlcPx/mgyCs63PrgAkrgoTPCNwgnI8UA9AFhnVg6PipN5Sn1BGBKRIjJWK2SrlOIo7TamZE2m0fRbk1LXdt77o4Np3XZFPkip3m1HMIoCE8mL71+ut1BvN9lYO9fE5LcVjix2XWdUEoDhgNZ+9eOPL9f89HB8GHAY+ejkZVV33nVd9GmY053jMQzoo08/3j9++M3FV69OV9Zg5KQtNk277tTlxr2Zvy5MuVjMn35ivz1fEprl5fby/AKBCQwCIzEiAQgia0PjwSAEX3e1zenP/vzL4P1sdvnm7Kyuap3AZlaD8V0IUd1/cDwclBenl5cn55K8tno63Wu7arW8MAZs0q0LzMRCIMkSbVar4/uPFdhqueJuFUUICYAFiW+U+DShQlQpSdN2YDwL371zNDufr5aXWg3zbNg0lzGwhqSGo3Kv/uSzw29/Ot+/e/B3X0fmwDE471iECLUxoQnCCQT296YIipMgJkIA4BQ9Ql7XjTZZ3bTGsLUZkUKljbEgAKDKciLRT6cWoCMCm2UIfjgcum4tIuenb1yWXp380Plt/um/6Oqlqzdt0yxW6+h9CqwkI6KPnj4LwZFS2mSrzbYsMkSVl6UydjQe5uUobJrZclu3nnWeMGPBug3bphEAIjJGkSFh6gvzWtHxnX0iWW3mmYmL+Wnl5N694/394XK9adt2UA4V4o8/vDDBPP/k6fnsouu2SmQw1JxS1yyd813dppCARROFlLRCBiUiZWasgSIzGCxh5kIUgBhDvwf2xgYso/K8nEwn6+1369UchZt2Mb+8JILCDh7ef/7dD7+JqVM6O7zP+/fTfL5O7DerU06Okxc2SpskSSCVg6KNioATw/7eeNuSQERuSaEiyqx2gay1pIwwE6lyMNI6Q9JFOSTSuS3u3NnzY3tvH1wzk6Y9ODp061k2HF6cb5ilburvf/zKGjo9efHR0eHi8g0JN9UGAbvAyFQ1brNtDpQ6PDhYLeeb7UqEV+tNZrPBYDAaDad7w88//wLA/MNXv3cnJyob6GxoCBNAZOhTCHv7e1kOddUiAgDH6J1vjo6mz55+tjcdLrfxH//+x3JUSj1TqBQkSanqNjYTZv7ppx9BxCgpc/v8+cPkYoxhu92euBqZNELnxSAmhqi0CNy/c5ANsKourJZibzibr3xCRMUQUOBt0S8E/+OPL5WiqukErO+6JLU1ipAO9o7vHT958eJvyYg1YG1MSTcbyYxufOLYSQoxKMHI0XGoB6MybFkRpM4XuVptqyxXCloFolVRFLbzst3WNkuAeSaaWVjQZBmwyTJrM1u5sNmuFxAseWauqkoxb1arPonWda6rm5C6IlMpVBojAoGIsTZP4LsYRYDUZjU3hHle5IW5e//O7GLunIvbTWSrtPz4w4vnzz//+JNPB6PxneN7TnJNMH91cvLTT73oPH50fzDAszfniRNzSsmAyOJyHtpNvczNYDrdm967dxzm7Wy+3CwXZRHICKeUIlebqmubGFL07s2b02ePHkwnB+tVNi6tD7Cp26puvQtN51uXGPDBvYODu5OYYrWoMzuU9O35YpuEUQQk8fVGlPn8MsQOkZRSxSBTJFZnlGXW2Lt37ltdWF2mhFoZH7oQNLU14nq9mqXYMYcYUJAltslvqsp17VZSB0CXs5OymFgrGloFTKCMghgDAugkIBhDrJrmYDTMsgzZak1ZbraXm81mlSU3KVXnfesW05KqqlVKQLCuGtc26KpxMZmdv9ZExhTaaGbOsgxRR9/mgwFwPD99TUrfvffgy1998Q9/99X5xYVz7XrTONf+9rdf17X76LNfPnzw4HB/3xTT4Otv8kw4gjApmE6G/+KXT39n1Wa7btsuxBRCwiTVqubO3R9Onz979PHTR6/b0/VKoqs9YIZFpmxEWcwuJSUA7RWenc3Hg3xQmtzQw8+fRZFt3YYkm3V78vpstly5kJbz00fPpo8efvTj71/ZYrRdTlarZepPTwmD8FWpgpPRmVJqOBoNR1NERkooVmtShAAizCCQYkyxI1UDvLh/b/ziVQsSUWL0LRKEdl2aI9EclDAICMfQDCYZJzaZVpQU8WBYwMyDICLFmEKQmDwpUYYKlZESRAZMd+8c7xdOsWNOphgSNMPBoHPbxAC828SqRJbLhY84Gu23LuztTc/PLlgQNQ1Hg6OjYrveVnU7n18MR9Nnz59M9obnF+f1duO7sNlsz85ed97lWXbx5s3ZogINbbUeD3KfCIBms7PR8PNnTx+03f7l5aKpuxDa4J1z6IO/uLhQdfxBx9S6yWj07PGD7bYGjOW0OJgOfSg2m+163XU+Oe9fvzljjnf3p1mWL2az5WabZUUxyJ59/PBBOK7rum3b1tWb7ebk9Hx6EI6PxzHen6382dk8sFy7DnowKIzJldZ7e3tFMY6pEwnCqlc35iAQWSLH1LYb7y8Ojkf7k4EGrYBjDMF7bSi22zIDynVHwACchDDFuCZQ1pQKRZMYrQFxPJokFzklHyJzIo3GkigkJXWzFYlFkVsjWtB5VxalOIfInLg/F4YIhig6JyKLjd+2GEO0BoeFma22JrchudFwf280+oevfgfA8/nFwf7xF7/8bDQZ/Pj9D1tonHNNs23bxpCaZ+e/++H18YN7ybfjYRnFuMCb9TIG/+jR/a5r9vemy8W62pxvK+i8uZz77WbD683m/PXe3vj4YP/Jk4cxBu8cC2aZHYzs5eXy229fL1ZNAu58XK2r6XBweHz3mx9fnpyckzb7B9PpZDQaDe7fmayqbtUuuxDrxlNR/eqjBwd701Ul/27+m+gCXHt303FpsiwxFUVZN00InWAiBAQVQogxMmLgKCktNhe/++ZvyHzR+OZyNiOEFCMB5kqNR+PIgZt59K2ylsVnmS2NlKXWOqBACLyY15iwRJ2xawGa4FNkAZyUZchynWtQ4rb16fxNGPrhZNS2XYwp135beRIACUqQg8sm4BufF4OypHW1MSbH5O8djuuuSZSUorOz+f508sUXX1zMZsJNtVn6rinz/Fe/+sXFxeWbk0sXGAG2TTWd6ODd4mI+Ku1wUlb1VgAV6bp288V8ujc+PNonBY+e3Hn96tVqtUHEum6CD9roGOPrN2fDzfLo+JCRZpcrQHhSHCeIH3/y8EkQ75xCtMXgeO9wu+3WTacHA985F8Lr03OjVGYITAbGICoUODtdoE8s8uzx0yLTjQ/XcEdaQZaRtTpFDjEyAKJCREKVJLWujsI+hsixbravT79/+er1yxev57M3VnNpYVziMFeffPLcWh3cVms6PL6rrH7w4AFJKgoizYDJc9jUrQimVfXAs4mRO5diYqHRYDgaD7TOJnt7HMJmvQmBY0wpBU5JmMejMQoBp9wqBE+KldGJU1lYgNS5YLWO3k8m4zy308kESS/X67IsHj58YI3SStpmu14tbGa++PIXx3cPQ5TeQlRNE1LYrteb7UYQRuNxZkyI8bvvXy6W26b1Vd0A4WTv8O79h5999unx0cFwUBwfHw7KQfRxuVqtt8umabrOnc8W5/NlG+K2aXx0Wa6ePX1wMBmGEDsXX7x4NZhM7z58MByPfUp1F7a1n6+qLsT+/D2irFf1N9+//ul0ljjl1tw4MgvaWMOcXBdFMiJyXej/nQUBhNA6tY3RM7PVBAiepe5qH939uwfWFNZgnhlbTA7uHJE180t60zkETClWVV1VzuTa5hlD8hhEsXNd5+oiKxbtNuZqs1ongeFojwfjXOnA+caloErMDwZDk0I7HA4hVWU5atZLABiOyFjZbpvJaNK0LnadNapt2HWJjZpM9qdG5ovlJ58+lRROTk6yLPvk+cezy4uL8xkLLObLpgnPn38ComrXojALq0xpUCGGzaY2xgzHY+Tw3Xc/IvHlfPHwwX2l6e7dx+VgsFnPvvjyk7Z+Vtfd6ZsLozfT6cBmalQO1lsnLKiwKEqlsroNm8aJNovTxflq2x6G3KrT9WK0P9072NfWeM9t1VTV2odgk+4dhZgSMKtsVzVXSr09M8vMRBRCyAusqpaFAZgBCKBzlfOtcOw3riilbFEoi2dnr3/5y+ej4TT4Sji0IYSUhiqTlLx3l5eXzFxVtYjZbvwA8qpqD/dHkhIhRyUv20UcajOwZ+fnnUuD0T4Nx4ZxE0o1fZpc5RARo1bYp9HarkNCACwGZDOslzHPHCnEBHmuUbDtGqVHIXCRW+fcZr16+uTRarVcr9eDYfno0f2ubbdVk+fFarWpqsaFdr1d3r13h1CJJe5C8KlzIbnAaTsaFEU5nM0u3IvTxWL74OH9N6cXWnOMce/gLqfVvXv3BoPh659eDgaWrC5McXbxNYtoxMlkslwuyeoIosu887Cu2uGwVZTlWcbMl4v5cDy5e/9xdt+en75+/fpFUVrAq8N52B+DsMYYpcLb0+dt2+ZlISDbbWVs7nwUEU4cUliuZok5Rd//g7lBkT959riqN1VXfffqNB8MQTxhGo70s8Hw/M1Js10bYyYHB/O1/+STz37zV3/tUvfg4ejF9/Php/dUwof3D7fLzXkKGRJyOHlz0ri0d/chFEXbeb330dNf//rl97/F9LLevnRdVzduf2wXq0VOChCca70PTeNQY1kMXAh37hzOZ6uyNE2zliiNlz//i8+Q4Ouvv/70009Xq9WbNyd1Pfj8F5++ePG668RaU9dbZkeKBcIvvvjF0frOyYuXlxcLQIwhVU0TgteI070jrdR6s26+fbHeVE8e380zgR9f19Vaa0Byv/71L//qr/76fL6AyK2Pwtzvw3380b3RZLxta63yV789BVJKq/sP7qs8d8jr9bp1frVetXW3Xs6Ojo9T6oR3GVVJjERa0VWm9QrutNYAEELIcwohdF0nkkBYUuq6JqYknPoCCiEQpIv5aUAwo0k+PURJCnm6N5zuHa5n53mmVINFUcgKlsv1xUUFSny43CzTTz9cKD2snJjBNMa4T0ZZ8d5fzteje5YjpIQBBpM7j+nszRCWtgMPMhyNWbrDg4PNYiacNqt6s65jTFXVxgjGZKfnF5KEgIrc1ME555fL+fNPHnOMb968uXfvXtc1TVNfXMwePXp0djZruoaUlINMZ2o8LF+++OHo/v2nHz021l5cLLrGJc7ausltdnm5PDo6zItBVW9+enl6fn7xycePm8rFWE3G09nlzCq73rSbxpeadid4AZq2Ze/I0mQyHhYTIiAAa8zzjz7+h2++kVwjqdF4lFKfJJOmrrJc72pTvY9w478rvLVJTdMM9ajfoOhcVEoxCwiHGH2IzKwIRYQAOfnLi5MQO11OHzx7eu/RQ6M0sEzHI5FYZKZpQts1Z6enMcSvv/4dQA6Cr18thll+udm2UFA+1RIOB3s2h1EBPoTzi8v87BI1sifXRpVXIdatXx9Y0Iq00iTkvBMRllRtPYjVGpq2FVFdlyL7Iv9/mXqPL8mSLD/vXlNPuVahReqsbN0jCIIE5xDDv5d78nCDA/AMiBmgp3u6q1JGZmjX4knTxoVHVbVv4/gmzO09s3vv7/taTqnJII3aySpfioh+vfr6i1+826w3Hz58ePPmVS2r+Wyptb98dhm3om9fvzWNHfS7NGBdNZ8+fD+eHLx8dTk5GH/+9NXaEBx467VRm+3OWDWZjIz2sqn/+K+f+r32s/Pxbms2q7IV58ZR48nx2dndzV1oJAJkWcay7mq9enxYnB2eIlgERwCqojRaSyO3RY4YIpEejCa+lz5Op/tmxz5oBJQAgg8eARlj5Mc8JiOEeB8ggLUeCRrtgjfeKqOt9wAkUCTpHkNBSFUVlBAuuODUq9oAgRBtvblb3PpivU+1jw8OHu+bqmogUOtdNjxsJV3W7pXQh2yiqrWPG9JjwF1LbQnzN1c/3D0sW1l/s0jyq/dqcyfpo27XztgiL7IEyqokHrwLiDzhzAQbeW6MNdZ6CEZXqUBljUDBGCZxBBg9TKeHB4eNUvPlYjgc9PpDrdRytep2esfHJ3mxOzk53iw2TT1Nk7iqyhCg3x+9ePGCs/vVYlVXUtBgrbXGr1d5lCSUcuCQ5/Wnzw9KY92UWVYXlWpqc/XtUUkLAJSg0Yq14snkpMxzyhhCIBAIolYq4swGl6UZBGu0XsynccxFJJxXT8Qb3Fddn87cSRpTSn5+3HkfvEdGRaMqD+CdtUYFRwihQAMNOOBRwxwg0U6ytMUp/fbp4/uq1rUM2I3akxfnHVft4hgYoVm7zQJB7wedTFPBT9/x+FSSricTSSNazFZ+QygYcK+OLtsdleeL5ezr95vvCzMolo+MaHKINuVKGiqEcSA41KUNlsRRnLKdBEYZbnKpDDjvCGgAFiKUuqEUymL37NnLxW6zLaqT0/Pp9OZxNn/+8k1V7NbLdVGqw6ODw+Nxlqa9Tresm+02p4RsVpsq1wcHR2/fvbq9jW+u78qtCQEAWV0bpa3R8sWzC9lUTaP++G+fKPMO6Hy52eXFarlNslYrAU5AS/n4ddXpjk5PjnqtGJAAIKXk9OTo+uF2tduwKB4OBojBGrPdbuu6yloxPsF0QtgPgQA4CMYa/+NTlA56HUoZACdUxK1Wp9fNtytnVUAXQqDIOZJx1jIMFHqgQBkjANv1utjuZCNVIxnDZ8+OFoubiJMil+u8IE4BjzUb2d7vTDpZ4qSQfHg4GQySYUKa+R3KRluetRKPoqrmgrjlarndSmi26HSWkjTmVVFTJowzPvjdrt7uavDOGRWCBwKEskZp79wehRDFrN/vIYGjo4M8L7r90Wq5sx4G/T6EYBy0s4wxqrUpi1KqejabCRF1Ol1E1EbVVZMlaVmWACFJ4vF4tG/oueACBESitWaUykYKETMurDVlnRtjvQtWOx/C4eHg7OT05Owg7aUhgDEWQrj5cJNXVafd7rWybV4A4x5AK2WN+bH36wnBdtae3c2LSgcAyvD52fHt7dQE+Id/+N9/8Ytfwp4G4Lzfd4PiJE3T1HnrIXh0AQ14IAAijgIl2lkb0BrblHm92zRVrY1xtuRQKF1UWnvnjLGL2ZQScEysWq92ydtFTlcNXVWhF2Nst7xRQjpwfAednXaLKuxKkQgc9jNra2+VN0ZJvds1VW1Wm+16s5tOV6t13mg/XW5CCAQ8hdDK4lgQAAcBnPO7vLDWMMY6na5Scv64WC3yTx++WUcODo7Lst5sdr1uZzTsV1V1d3O/Wa+n0ynj/O3bt51OmzFEGjqdbLVcyaYZjwa//5vfnJwfRSlHDoQRzsVuV2y2uVRKRBETnFA8PTvodrNYCALQ7w0GwzEBTOPo4vyk1+3m23JPlwgQlFKMcUIoZ6KVtZzz8/nCWp/EKQB464MPAME7C8F77yglkRDsR3gNM9YEREDqQ7OtK2slWM0DdcgCWgQHBKVz2jprjfMeBDKCvW5PW6KAZTwcHw7rcmeU8j7zwSaCytoVvmV5t8mneYi90mp798M/3ZNgmJRCLVBQ2ZHQEYyTYI2HypMIk0xVJTF6s95VBRq9TyWg866pjTSgvE44zSISfPDGtNKoqmrrnBBUSXN//zgcDT59vBpPhtOH+Wy2td5/aotf/fLt8cnJ4vHh+vrrweTw/PR0s40PTybbTX57e3N0eHJ5eZkm2Wq1ZgwZRdnUX758Hk/Gb7973e607+8f5tM1kICEImW1bKTR1tYHh+2Dw+7l+ZEz4U9//jJbbLyn48O32+3q/uFxMJj0ut39SCGjbDyefLt/lEZXSsmGM0qHg7H3brfb8Ig4v8diOO98cCR4b42tlbXux2Cztdb5QAhzXud14UydoI0Z1UBUYAQCMGyMkdYQCASolQ4jfnJyPlsVjLcSqI7Pzh6ndywEBIHI+q1sMy981oFaaV9Ldqxm1yBvZ2uIKY9Rt0nFlUvAxoeTzDGWKiPjoipQZA6p966qqhrBOo1oCCEhoDHO+aCMLRqViJQEcMZSREpQG+8cIS5st7n3WOSV937Szx5u7+KsVZe7sirb/UG/3/169cgoPz05b3dOecw5i2bTxXQ6nRwcXFxcIJLVckVpUMpY62bTmXX29auXcRR55+fOeOMpYwF8VVUBDBCo6jyLxa9/+4tdoWfropQeaTTsj+7u/lCXVXTxet9yAIT5YuG973Q6vihXq1XEebfbTZKYEGqN9S7sMXMQfPBuH4eSjXT2r4LNSus4SiPBhYIQsCPwYBA2tVyWMQGCgmoIAHAwGM5XuQ80HQz6w8PbRRm3xkRiYG0tbUaYtSISh+Neezf/YLxEQofg/OaHUlpvqaEZQcY5qbEzTsI4JQmQvlBJN9pUHX5zZVVNwHLqKeXeh4COkGCN9x4RaLASCVMOa2kTxpx1LjyR4/YHH0BSFlI2BsLtm//ll3//uzet/jBQpDTc3d9wAi9fvJw+zm9uvlHuq6a5vHzx8uWrz5+v7m7vHx+nz589S5Pk7u52u6kET4oiX04X5bY6Ojr+zW9/OX2Yff38bbPeWuettXEqqkrNpzlooN+RLOtEiiGhn65uk5Z//vx5HEcxj/y+rYnYbrc5FzcPj7XShwcHEHxZllVZGmuQBOc8BPTewX5gCAEAfjraAQCx1noP1lnOKSfA0Pcy8ne/PXh2lkQcGecsipQ1nNI0jgiA4GIwOq4UShMIS1tZ11oQjA863TTpnZ//4vzsTdLqIJQtUggSHcfmqEd63T5tD0i3z/qnfPIah2fpsMOFxdg35PzzIvHGGykpWM4CoTRgIASDh+DQame0C84hoDFhV8vg0bkQrBOMM8bwCWVErA1ambKQRuksZoNB1mlF3U47eLfbbSnSk6PTppGNrJSWi8VCCH56eqKk2W7y6XSWtbLDw0m7kz2ltzyUefnhh/ec0bdvX5+cHh0cjBmjnBNKaF2ZXa4b6QCQi0jEGYtb3//w+f37z1VRx1E06A988PuB4cGg30i5WW+26+397X1RlN1uD4CUZW2Mdc7vR0X3cw37x53S2v9YBaedTuIhBrBlWTivM0EvD8MvX4p8p2c7CjTGQIJTh+N+XdcaoZe2fve//ePjQu+qotUZvjrI2iKcnnaHB2fjo9MoSUNAyzvYbH1TQJr6eBj3j9uHly4dR71j2zvsdttH7fZpqz6cdB/4u//zD3JeY/H4g7bc25qjVNpTHtAFsIjK2aCDi8BZHhxzzAiICQMCwdmIcUshIlQTwpAQQalspBNVbqVqBkdjhrSs5OTweLPeTh+nZ+cvsm5XuvrV29d1Xd/f3I8Go26vWzZVXuyuPl+dn18OB32ty6aWUZx674Sgs4eZbJrzi/P+sBcz6q3UCoBHhLNOR3z36tliU9eWUYoy31VF+be//81f/vy+atz0+qFUctDrGFl/vbteb4uqaOpKLubr9XLTafcoRS1Vv9tdrVd1YwCQM7w4O/72bSqN/4//8R9//avf7GccuODQ6dAi14SyOAqMkeljXZWcUYqEGG2yNj89GW42mwGSKBl71q3lXStKTbkevLnYbVe1lJ3uYUy1cdra1v0mHh78npQrJEYkBNKED3uJajnWbonQA8zodtJ9u5Dhj7dmrdKeQJ9XcdJyBCOMlK5SBhkTM9V4CtShYw4CegyeAnqQSgpOgQDxIY4EMV5bJWxAJIjcWXszX6y3MDg5fPbspCpK7Waddm9alHd3d2fPzru+b63t9wfFpr67vz86Oj46Pny8f7DWfP369cWLy8PDibOuKCUiADDv5GK+qOr67btfgDGChY+fpvZJGQSEkrjd7gjBAFbTa2eBIbu4uKilAwjeuX2QuyjLqqxk43xQ1jlj7HQ6S1NhnXHuqXjnXQCC1jofPCU/Q2wZuKjV1m9eHH34/sF4z6k3lk9XfFMIRATQlPjhsP/qzQW6MxJ8SSZLKcBVKQL1FeG42OQX5+MobsVR7EKlrbjepLe79PC7355NsMtKASFN4SyKRRp3BO9l6f22dXN9p6wcCfNdp9C7aQ4+wpJFNCjCrG9VeujCGgJgYACBGKSgCXXohKWVU4CCMupCCN6TACIEAh4deBpFtlbaFTb5/PHm9Hy8XW+v/vj+8vLy+Gjsgv38+bMn1S7f/PZXvzs5Ofn65frDhw/P375+9eoVOC9V/e3r9Wg4fPX62eN0dn+3knWQUne6neVy83//X//P//o//T5JYkqJBYcIlBCkrDXoMz5ICX24+liXS+scgBsMewAQAjjrB4OhtV4ba633Hq33SmlrnTZ233T2PuyXKgA6560x3tmfsK0sS+D8qNMRlHkUAnqtCKlY5CaXxKPwHrlIorh1c/NglbFWq7gZnl5EbiEE6/f7ZeMr6e4fpmmitTbKViThjc0oJ8vc0ywNaaCyjEbDuDUgELY1isw9zvJyq54fKZHUW1KVqV+ZiYfKlH63URGDvoc3ojWXRR/F1LkjCAHovXMJWhWIYtiowJW3hI8AJQAAIABJREFU4GwASkWkvKGuR1BbHFOuVfgocFs2xWbrnJNKbTbrwbB1en6xWm8q6dppazFb9nqj47Oz5Xw+n89PT06Ojo4227Ws1ZfPV0fHk/5w4B1dLNZ1hYQgACplPnx4f3w4JpQQ7whCADDG9tojmg1jCPE+YUrJer3uoggBQ4C6kR8/flbSOBvAk/08vpS6riVAcM5Y470LAQmlGAD2AU/GfnYTsFEvvDgbbZfrmIpel/b7raKSO2U0UusRaUxYUkv/9XoKFjViNpDPRXPUs2na64+Ovzzuysps1rPjAxI8OAhG15zFSdQc0/xIaLdbPTxsECe83w2Erg27mue7+4e4eshGmvsN7+hOwk96FwD1brH++PnOVEVPucMo6dfF38bt/9LoN5w7RsumPEfyMaAyYPZRBRogBE3hEPkGwwUhhopfROm62XygUGm1ma9o1O4P+8hwW2xeJK9OT04ep/r8/PT+bvbl89Xf/7t/n0bx55uvjw8P7bR1fv7s65evRTlf/tvH129eXVyctDuRVo1stPeOc940NYDfl7cJgPe+biQw7ezGYaBOUwKci+++++XN/SJ4cC7UVa2jSCvj7H5uHIMH78NysYoTHseRtcE5oHSP/3YuAI0Y9+7nKvjppBcaSYMdDqPDg3bTOGMRedZUVjrjKTJnfV6nnJvGuYD9PkkS1en1KUkb68umjGN2cHB2MDxsZy0bwt1DeNWKJgN2PLGHo+b2eqOZNuu72Tp4kaLANNhxlF+Mkbt8vnxotbLH+ykJtt9uEcovL08OBoNss1hsGrBcOxkYTSKGnEQq/M+8eyfLLqXgYEnMZdSqlVRgftcd/2u+ehnzaW0TymlM+x1+0O8lrXbjw/PXz+I4Gg7bSsuIJe2sVZf1cDja7OqHxymHMB5PdpvNfDb3nvQHA63kcrm8u78D8JOD0eXF+Xy52uaFtSpJunt+Me5xzIBlUX38/E/GhheXp7XaAgZr3fpxRzCx1mltQoA0bTkXAIj3GBzsOU0AaIzzrtnucm2stc75kDACjKJge6zG0yINsnazXba7XIEWxO0aax3RgTbKWwwWrCM2IYkFVjYNmMCcr9VqVRrfbEOLebRCwMHRQStKKUFr9eGw+2Iwaotd1NplSXzY49DoZXWL2jCRHYyjs0HaidsnA/Lx8/3DYnvMxGYx5XEaLK+LfDLuZkkcH2d2W7Xu+PT61ie8Zj4ESQW8Y1mqiyPBSSAbWTzjrKBsoauXifick1HKlrpZB2w6/OJo8N3li/Sg28wfL19cRFHUaUeyMdO7OQl6Pp+9fP1ucng0Xyy8ai5fvcQA16vr+7vHyWTw5s1rzvHm9u76+k6pcHlx0Bv0lsvNerPpdNr4hMYCgoAIyuib6ytj1GQkVKiRBO/DX/788eDoubHOGMuYWK3WzoW9F+InsC0AOAs2mPv7B/BBW2eti9OEi4hFwoD5eWBfNvpg0IlaKEMhONtUmyIkOqaiHbdi3uq32x3qtdWl1cJygY2HzQ5UiAIJ5WZjvJe6+fT+ajIaE6SM8dODF1bW2hvpasbaJ8ejw9EoV65QAoG2U9ptu1hQCGRXys2qOZlESockjmTTNErmZVQU+cG4XUk7Pj7rHoxF2dCiyItdr6P+WKEybkFDcIEl7AGlj53n/JOr+Ci6jgiejUm3O+i0+6OOYKwqq0nvaDXLA0V70O53ehDIZpcnLTJfzrNsMBr1Hm6q6cO83x+cnp8tFovZfOa9Pzm9AKSbTb5aLspi9/btm7dvXkacnl+cFLsdEoJAgABBZEjjiFMGQJAhNeCD97vtjvJ7520AkErl640y7gl3vUcG7pHIIQCQ1XoXiSgAEEqipJ0k3V676wIg/li706YhvG19GPbG6BzlLGKdbNSasJhzNph0WxmZ3s22dZEmMUeiAmgjCE+MN9VyHQgDp61WvW47iVsQiDWkKNc2C55UHOzLo5N4kI6Ck9I4QzkjTDikrm6CVNYbkJWuK5sJB2iquk6zdlnJLIsWq6KbhXjcOpkMGBA2n3e8mt5KipHh1DnfIbGk3IOKRbeM0uNhOxv0W5wFRi1jATwIVi22vcPJfFMa9HEEulb93kDK/OR8NH3Iq8Xi+bOzfJeXeY3ADg9H3tvb27v1ZqutefHq7berq7ubu/kuPzw4tFa+efWccVLsctz7HxEIACU0TWNtKSGUAEW0CL7IC5FEzlmkZL3eWqW1cT+1w39sjYd9JkApF4IRccy5aLX7hCbdTl864Dz68XTXIp+n67dv3qaMLhYPFxcXWgyzs8N2a0AZ7XbjuspBi3r9xaDZ87ooZWmrpaj03vkQWonotJNev9XtDDimupb5btsoH0hRbs2vv3tjrAIE9NZZG7wHymStZ/O1aozT7uvnb1Z7rb1UjTWolNfaS2nrWimpmfCb3KpaMUHiJOpfnr0c0aOTkyLP0zRFhyZIxiPSyMapaV6IONo21fnF2XyxetZ9uVptykJ1JodJK41isVqsJsP49PS0Ljej0ejq6uHm5u7w8GhJdnVdf/z46dWLF8HD/cP9dFG1ev3j0wtC+O3tTZ5v725unDW9QTbsj/YPOkDYkyiMNo2swQcKSJEQJM66um58gBBQaeO02ScXw1MqE36Ua/jgQxzH1jpBCFBOqFhvCw8sSduUiR/b541aVi5qD4na1dJK14wOOsPDY+24lHo6XbTT1qvn3919ud/qtUGMMHBKadoigIxRHyAE//rVW0oxjuJgUDYy3xWxwUYX7ZQtl0W75QgJSummDo2yVDAukvvH5e3Ng3d+WxXe+bKoAwBnWb6ttHZKOq1cQC9tCN5tduVo3N1s8pXVvXHyMJuJiKrS1oXqDlpFsabeU063TdON41VRvYzjoqidR+cxr/IWHjBGEaHVau2228W8VG736vWg0+ncP9zlefHm1a+uvn5VUl9f356eHRXVbrrcVo20yp6fXypV11VZVfV2s40ShP5ThW2fU3TOWWOM1j+xysGH4GGz2VmpvQtMRKqRPuxX5YnD9qTvCAgA1nljbOyRi5iL5Ov1LSVOe4CfUhXLtdsp+4c//MvfvDlebkqtXEju5tqn7RMHFF1Tbap/uf7nYrOrqtp61z90SEKSpuA8YzQANFX5X/7zfw3BB09Oxkejzq+2i83ksN9vndb1ZvpY2jFAME2jCMQmkNVy/fnL9eN0apVOIuasLfNSS0Mp4ZxxwThLZO2UtMiAi9R5ZrFOO4OH7b1VcnSUzZez4ahrTZhNV1E73pVNEou2iC0wZLF2wHgMSK2DXVG9ffdqMJm0Oq0sxZOD4/d/+bLLdyIKd7d3z1++2xXF490dePHdd+/ev/9LVZWfP3/+9a9/2e4tZ7Olkmr2+Pjm9fPFfP5w98gYjSLBOfsJzb9/ZnnnvHXB+/0QCaPU21BrqWtltG1AI2UcgnP7KLv3fu8HfcKf7jkG3nuKWFdVcKbWEin9uQq+qSwQAKfrqkYSEWyCs85Ap3swmpx8+v4/N/V2PpsnjBHCBKcYHGckyTJvndLSaO2s1rJgjBAUaIKr7bg76SbtslbbdfM//sefRRxExLQ01jLjUWqvjFXaWyW99QguiiLvg1KScyasiCKGFinlELy3oG0AjLr9SbKQNfckEFkbilRZWzembpSsJWesKhvwpCobJQ0Ay4taG3N8cmKsu72/F3N+fNTdbXaDfr8sVpeXx6tNfn1zfX75vC6Ksiyqqjw4OHi4uzXW3N7ej8cHptEP1eO6Kj99+vL61cuzsxNKwngy2vdUCQKSJ2zwPmtOEAkSsmesAWlqZZRxFjVxP0KE938jiE+k5/05UWsLGFRdrZ1z1g6HA++sleqnISTmBEbedqPk8WEtkl4qeAiekbjfP2m1JlHUts0GgkVgg/4gUL//vSdZpqXUWjmjEU2accpIzNNO0jnsH/qev3u8XpYrZZTxO2lrBG6tR4gpS0TcStt9ytm6zoEY712apNY5SolSWslCcp4lkRAxBmeVK2tptI+jNmIqMuZ0BY5EPNlUK62crJWqlaAsiFDndcTjYGCx2KZpZ7vbEkbuHqZJZxALYXS222yOJ/Hx8TElbDQcXd1OO73xu3fvPvxwdf/wMOh3zs5P7u4edttiO9/8+te/DN58+pbPZgtK6Onpab/XGk06y/mKkP00AgIApbTdbiUupoTuMQUQILhgrTfOB0+8CwHdEzAPkTH6o5QG95OphJAQnFXSO7tUUtW5YMw70FI+LVKvLVLkPuB0XqT9JKWBAOVRuyhroLsk7TYlnpwcNHmtpQ8BKVIRsSRJTJowTsEB53Q8HhIC3dbgef8V0+JxOkOHg2xosCnNnPBYmyeuN4pWHLUIUm3Be7cPKQJDioRwQZFqpYMPRjlghBGS7xrrQ3CwW+eqrFzMm+CVMlL6qtHWB6WDMaGqDGCkrG+kiaLk5uZBWzd9nMdJFKfxaNynGBEqJpPDh8cHSgLjfnJ4FEdi+vAw6vWHw1Ge76bT6eFk0ul0N5v1drd7fJx32t2D8Wg1XxdFsdtuuu3EuIYTRgkSR/HJZ4aUcWVMAAAChBAMhDxpnPYJ8j32MngXCKVCcOsc8SQEBHAAAQH2HihvHQQo8yKOBGfiZ47DcT/jwW9z2XiGsmGCxUREWY9FrKg3k+PTpvrae3Z2/elbUW69DwR5nIgkzbxusizxFAQPzy4vy7LsZv1+Nrm+udOVPBhOGE+W1b2tc5IIJY3XjIhWEG2vvTW20d4H8Ba9C5YFAgGBcCqiLHLGOuu0toFgkStPXAD/w799r4wFSe4rtN7PVzvlAhF8VzRAY2kQpCMi3lYVYFitd1I1XJCDw8nx2cHkdAI2M6roDcbTh/n97cPJ+ej+8f706Nn7D1eqNJPJqNPt3N5c79bly1eXh4eT7Tb/evdwMBm9uHwWvJs/rNar3VWdH570np1eEAQGHIkniCSAQ1BGe/DIEA2SQDnDPaCbUdirGrwD7wExcEG5Id6Dt4j4c34ZkUJwwYO3XoMhSH9O+qlaB8J3W0Uoc66hrM0FFZyPRsPp4hEA4qitdnPvvNbS+UAZTZOklSRBJgTRONc4/enTZyllO16fP3/dT7NRd2ApLeumqYpGqRC8t4ABBKeBmyLPk7gVZS29pRzRBYsEvA0hWEqZR0I4ZYxyR7zzzlrltQ/WaK+teTryeL/Z5kg5ocw4hIBaG6UNQe+DQwyEs6zdTpIozVpK2tUyJwEWj7er+Xw06OqBvDg9u3+cbnbF85evp/eP1zffjo9P+r3BfDa7urr67t2bs8vD2XT58PCY53l/OALHy6KqS8M5f7rghCdVBCUkip4uNEgIZQSfsnd+/wpy/me5VAhBSrX/Fo+498G5pzLRTxdc74O1QWv9M7ZG8MhbZi0S4tsZJyQkScw5bZrae7vZlATF549fwWpE4IwSRrI06SSpa+IQfFVV1jTb3TbL0m7SiwKOxxPrYb7bymLVVHnjVUDitCeIEAx46730odXuDOtHITAgY0Cp8eCdeypbIqGAglHnvNQhONDaqKCVVi4EyqngYKROs8gH4oHW0shaMnScEUohSkSStrr9ThRzysV2W+aN58TNZpvZo8p+/d3p6bnVdtQf3c/zo7MX3qr7+1vBo+fPLqWsHu4fVsvt+Lhnnb36+PDwMPvFr96+fvV2t9lU1bLVau3lN0/WCEBKaZZmW84JQUIJZSwAGKMx+P1LywMhT6ajEEJw1u0vwlzw4L0xsBdtOed/Wkjvwdq/IkciGMJY0qJJglkaN43XxvciMRj2AtXdZPD+X2+0NSljvW4PEblg7SzNokjFseAiTVIXsVevnltre1mPU0KCK3b5YvbovIwEpQYdgjMmEPBad3g35rwVj6N4uOMJB0cQWBQZEazVARxhpNVqm6oJ2gJ4wSOPgTJiLPGIwRofgrIewMYtGpCqQD3nImMcbBwxxkiciLiVMBEBQan0bleyhHq9LQtpdHV1dTtLWFNtfvv7v2m3u3f398Q2z55dLJfb3W53dHRkjc3zvJTls+cvdYNNk89mj4JFr1+/brXYyelRsdo86TUJEoLOOaVVHEeUMkQECkACJZjEwjtPmCiqxu/RNk9lBnDOeQfOGc4IItd6rycz3u8dHw4R4zj+yUfGrFUOGeVuPO4oExywbdEcc47oO51WRIP3ptttB22ABoLIBcvStBXHKk5aWaaqUkrTNErKxjVOTRp0Pi+2dVVk3agrsl1dNV4zCug8c6ENaaffTbJRjSiYYN5xynmUcURjpTY1YGAsEi2+W66DB0TKGKeMEhqAkGCI9y5gQMKM8ygiGreTtBtkRWzNGaEUeSyoYHGa5sWWEmK0YzHV2taVpATn8zU4U5Wbwejku1//6uvNtSw37777RZ4X6806jsSzZ88+ffpsamI0PTk72xWz7bqczR6js9Nup2et9eHJBbE/cnvvm6b5UeK1F0QFSpFTkiQ8IC+LKhAKTzdfH7zbd/mMUZQwRCQEGaPWOkJ+tor9JDYAAEZR7ErJBHa76edvq7wWrYxRJgIE7+2m2EYxOT4+WNxPi3WONDDO2lnaTrO6LmUjt9utMfL29hYRW1FmJtZpZ7w5PD1qd+Pb4rGNUVskDauJYlnc6oh2m2cu6OVixihJoxQdpyTjnFAqKGHWqbqQGIIJSIFYa2xwhCKhDJxljLtAAQMSBoTROCKt9uDwTO2Wrt4GZ+I06nTbqimAkLwo0yTuD/qBJiQQ020TCHVRqEZK5e8fl4T98PLNi3/74/zq69Xls4uPHz5tVpskTs4vTq/v5vcPU0rcL37xmy+fP88elvmu+PjhL91BcjI+QARKKSVICAne13VttPLeEUopur1kM2b0cNhWliyXa+NDwB91gu7JQ+W8tS4wSikj3runqAQApXTvsfmJd0fqyhjte70BE1EUd3aVbkwgjA4GPSF4mibjyfDVm5ciEvu0tBAiTZMsjmMegQ9Ka2ed0tpYSygDig59b9g7PDmIkpggEoA0jeMoytJ2GrejOAZGtJMIjUDSTrv9znDUn3S7oyTqxlE75ilFZqxHwox1HoKz3nugTHgPBOkeEI5IWRQlnS7LMhbHgZAozXiSUMHjNLHOOe/TLO10u0IISjljjFLayCbL2kpZKtLVZnd7fduU9XA4Vlobow7GY2ddXddRJEajvjVytVobQ55dXiYJn81n6/XOOQf+6ci8T0wqLY2S1mjv/N4dgRgghCQW3TT2Ru1rQU8ow6ePDwDOO6O19w4RkMC+pbvHC3nv91v2aZEqZQj1nW5Pu9augsYQB8g57rbrLE7Go0nT2LuHlbSeUIjjhBKepSkXSAkQpMEHIHB6fhpnGU8TQBgMugcH4zjm2iolG+9pWQZHumxwtgzsarvYWY1RPGRxG2hGotODg9+8uzw+PBl0zhIxEDyJWJTyKBNcxCIgeg/gaUBqPQRCnfNW+WAMjfjRy5fd4ZB4o8pdt9NttdpG62Ck94ZH9OjkqN1rWQtIuLMuz8vtdn3/cGOsHJ8eckE3m91/+69/evHiWavb+nr1zUhzenZUFOWHH67akcgiZ0y1XG2bWv/2t98BKiqiTqfNKCMMKViCJGAIoLyWYDR6T4AwoACOCyEYUkCtjAnofvRrhhCQeEDvERwguH2hzwEERiAWnFGA4J331v8MyiXGeULJ0fEZj7LVNnchIAJBf3A4ypJIKxmcr4qCEjIZD0fDEadcMI4ACHvUtUckD48zbbyUBglJW1lAX+t6Vay1U1wIwiNPeaWa9frRmMKYptftRsh6WS9N0u4w+3f/4Te/+5tXz1+dnhxf9DrHsehFvMVpLFicJa04Srz31tjgg7U2IBjnAiE0ii8uXhyOT5SyxkIpVV5VSqq6qg8mR51WN0ta3oa6UcF7rVRZltZZ66w2GhEYZWVebdf5t29348mBdfbr16+tdosQ0jTyL9//MBwOOq10tVjOZxtGs6Ojw5OTwXg8Qti/gJAyShjZk9IY/8lERXzw1jrrXKlCbYIH8qRs2f9vCWGUcAqCIuOMUkqA4NOeCYxSSgjdM0t//DAgFBnPq/rm7r7RDWEJF5QLSinQhKsmeKuKfCMYijRFKhhhGJ5M0/uelXOuqlQUU8N9AHDgtuXucbcodWHAeARkggRWbVdBrpSNMRr86s2b//5wT0PLGI0Csl78y0lydjn68MPD5w/iEVm+W0FAAMoIJwkoU9emJoCBoNbGgUNPpHZVoWVtlAWadHOtwftWkqRx2m732lkGwT7c3u3yPGAyHA7u7jkA84CA8Hh3f3ow9i7sttvpdK2cevHi5R/++Q/f/+X7d+9+qaS5vvn65++/f/ni5WpZrHf57f2m1x6Of522Ov3Hq3vKmHeGsn2dJOoNhgSAc/6kaQyhbmStlbJ0W8kAyBgFH7z36AMSGkWceIeIARkGAiEE5114ohByzihlQMlPOGNmAppa3j1Or+/uCSciEpxTgqBk3W1nfNhrtbLJeFysltuy8OCQkH3f/kdXKFDCCeWUCkoFEFjv1rum4BkfjUaJTJa19FEb087ucca85944VS+XswDOOL1r9Gotf3i/HE3StMXfvjvodsXXYXR3LZZzXuVbZaRzFoOMWGxJaIyMkzgQpFxQLh4fZ57FnfFB1u/Wu6mvvHcqBEAgUmmjZdNoRpkzinN6cnLyOL0OzocQ6qq6ub2ngNbUn69uDuru4XhydHL6eP+4XC6PT46KKl8uV+1WazI6LmRRluXXDzejkWh1d1Fg+3ssoZRQCoQFpNoaIITQfQkCtbHGWEpURJHENCDRGj2gB+IBWhFHB9pY413YO6H+Strtfdhfv34WitTaKC3JdFZKKdKMCbL3vbdbWRxFlWoGg0FM8WOebzZb4/kbQmuljHva0d6HveubEhpFERCcTqdJP7t4fQk8FPmO501tO5uNR4stkWWJYAz+/P2fbLVZLG4dabHH6v/9T18ODsev3w2eveq8+9XJ0Unvw59b7//CH++c34XGKOS80+n4Yid3mqMAIXgkOOOrzao9PuZxRIHyJpZlrpVRShttHx8fgfjOYBgAZSMJg2fPLq2ri7JwztVVVZQ1owy8nS+3guPV1e3Lly+11MvlcjIZv3v39v/7b//0+dPnYf/g4vLg26fH2Ww1mzaXLw9PB0cESaCEMkYoCUCldkrKfYAiUEYoA0I45/122tSNsVZabxEIJYGgNbYdCzC+9N4ZGwJ1HgF/tr8+TUGEv0Kp1VK74Hdl5QkGElwwEHxwT1EtCKiN/3p9WzYqSltp1AqUSmMbpbQyznpKKRecckoZCeCdd1mndXB+1B11jTVXnz4/zncG691Wg9faW5Chrhd2t3PV1siSRYHuFgGFbGxZFflueP580O2lb9496/Wyr5+6f/zTx81dxdP2wbOTML3fFlsIwZlgqQcpGZblZiGs1lpCUciqBiV36JI0HU6Gw6Nx0zSz6XS9WvR6w/Pz05Pjk+liVlYVIPbHE0LIajF99vJ5tVnc3j5mWe/46PTm9ttiMY9j8fL5s+vb+6vru9PT0cnxZHp/UxbAOWeMMcYgBMIoEgIBtfXW+SefKCH7d1YsUkKZDaHW1lifxrFzznvXSeJRO92u6ziKBPe1NE0I/smvDvBjugx+VG4DANPOIUFtHTJw4AAcYvDOaWVCHHMmtnnx7eY+Zaw/miSdPuFcGSOV0kZ77xHJHn3JGEEA6+xoMu4N+1SwqqyvvnybzrZRWuW7yrrCGhMCgGdOcB5khNT7pqxmHmyjirwclmUptTm/HB2f9L/71fl4PCylv3p4oIKm/W5bVTwSVllj0WtrfUmUJUonypRFnlG0jQ5WSxqyNP3N3/wu6bf+/Oe/NE2z267Xm8XB0bjb65ngoiybP86yTkeIaLWen52ffq3L6cOi1epnz88uLi4+f35vVP23f/e3jba3d0vd6L//+3cn58PbW5VlGWOMEKSEUkYJwT2AfD9/ivh0qgBEbc22qBrtS+0hhJSzLE2aujoaD4bdpNotlSPjfmu23GhwIQT06MMTxfzndXo6OISwb2igB7CeMUoJUoQ0EsrIvCycNd1Om/jAGYsjIeLYWe+M09YAuDgRLIkoYdQTp52VRiub7+RutjRlnW+qTZFjY8GEKOUoWpREEaW1LKOoHREiCAejbLOTwRunWGW+PdLZanVw23v56qCdZOPxMOO8bnbTL3dFtQEA4511jobIGUfQc8BgNYWAFGkiOJBOOz0+u+ykvWKd33z/RZZVAFgspyf54XBylKYtT6PDkxeLhztGAAPeP95fvnizuv9P05vHoNSvfv12OBrdXF9Np7Pjw4mSejnb/fd/+dOL50eTwWA8GpfLgjIWPFAqGAZBoBOjFxFnhAAlnBIAIbDY6eCsD2F/Ra2lbqVpb9QddFIufBRHde06MV1SbHGCjpTSW0ccBvSI4P5a4MfwR6kfRRJ8IEAoJQhAkFqnVtsNpdjrtrWURmmpZJQkWhsptVQaMXR7XRcwGB/TKBWp0vpxNh9QUjbV7PqmkabWOhYxQZ+1hyUKwRPqtSvXTlCP4IP3UgMY5wM6jUVI6+TxsZmvd9Kp41EPvI8YrWq9up/p0HjvHexViAEZpUIQRgkjrU6b0kAFYWBpHLEoqcrm4dv96mEuq8pamxfbWtUDxoMHa1x/MFzcfVWyEoLc39999/o3wdn5bIYQ1uvti9cv891muVyOEV89P99t/3x39xAzenY6qooSkTDOrXGccUIcRWhF3AZgFCmljDOCwDkAotQGEbzzAKi0rer68HjIKRIC/UFful1EMY5Ewl2G/NY13oVAAnoK4Pab8sedBPv9hZxzoMT7EDwo5VbrvNPLBoODonfvdD2b3jdFsdsVv+m08qqKRNQ0xlnQVkeURcgOemORZGtVXn/9Nlo+MiSyrjxguz/qjyfTrzfAktHk1Db15vFbUxXO6ty4GEifxz6gDR5NTHhYzXldGentoOx++/gSnLtnAAAgAElEQVRZbhupaoLeWxPAUkKiKBYJJYLTOBFZi8cp8gipCFZ5gOCVQ2adv725ebi72223GCBLsqLKq0aVtZw/PMi6IVHU6UYAnjJKRPr+/XvpLPBom+c3N3fWNa9evXr//vtv375dPnv+9ruLf1P19GGVb4r+JLo4OEOCjNMoYjSAcWFbSW2lR8o4j9MUEIP3jNEQtPdk37KwxpZVs8trbKVpLKpiezCeUJAYIGG0y1ndztauapz2BAPsazX4VzsJCSIEH4Ci9x4ArQ1p2rXOWYdNY//8w6c0ptKY7uAwa7fyXSl4VNVSREkURf1W5rXfFTU2ysjmZn6/3q6G7e7R0WFsTOM8UgaAWvl+lDVKalmhNcYaY4ESwkTEwNe6clYic3HKVe2QENUc3Xy5NXVjbMMizCKx3G4BgSD1lFFOeZpEaUq4QJEEKtAxAsFJL9Ls/v7ONvV6vVZSgUejdbBeNTpf78r5gngXTcaj0UiqdbfbiqKjxVY6CKdnp/O7h+l8GYLt9VqT8eTT9suXz1f//j/83elZef3xdrvddUYjQGScB+85p+CcC6Bd0DYEJMioiBMfgFHC2L7eDZQwxL0wAYtSxlzEySBJZFNXvUEmeBRRFxFoRawkNon4pgk+EPzpbLffSYSSAGCsDcHv79va2N2uSNpRWTbrrdxsZHo8unh2dHB22Wm3Zw8rwRNt3bPLZ9+uvny8+iKilvFIaJBFbqyKKSnr8uDw4Mt0usqLgBCsCY0u5gtZrX1TpyRobZ0niMA5CUZTQEoJGLl9vI9pmrY73/7yfbVZO28sSh58t9P9fLW0hHgakSTmIUqHR1HS0lpFIkra/XG/Uy/nX97/xftwe3Obr5cCSZpls2LXNBIhcI+hVsL6CEDVpj0cZFkr5qGq5cF48u19aHe7qlHFbk0h/Pd//td//D/+YbPJ7+7u//THT3/7+78rV7vttur2OoRRIIiUsChCE/aYKuc9kP+/vff2sixJ0vyMuPslj8ULkqQyi3b39PScmZ2ZxawADf81zoGwAlbEwe72Nquu6eqqykoa5NHLnJgZhBuZLUIEhL1SCCG89/y6mxv5fh8aApIj4sWi7eJQVT4BgRk7mG+DglQMP//ql217/d1fvnXeb7fXJT4gqOZUkb243ua7IWY1nC0KAR7ZQrNBCqgYEIuIqCjyjPwnMXv5xZeegVxd1W1b19Mw9mHsh+6vf/3r7bt3irC+3sSuf3h4U4k5opimpgr/4/e/PRx2/flEUOqCVc50Osp4hDjVAIFITcxsfz4s66ZqKjFwjhBMx3O/e18tV3k4DbmfYKwSnftDzlNBLmieQUq+vnpar7avfvzL9U1be3+4u4u7ff+w9w7H/T6NkyCuN+vD6VC0lDTdf/iwbLeO2UxWqxVRLQVe//TzcrO9/+mVZelP56fPP3OEh7vbnP2f/vjd88+enM6HoZ++/dN3X3zxsmrK9fUNCvkQANHVtWlhBIe6qL1zjN5XTQOIKUWVQoREUNWOqICxKBTVscixn97d3WeVy8vtn3/6CUE2iwAg21W9cdx6RgMFcJ88/YjQORItpgCETM6xB4SY4pjG3f6hXvDN08vudOz64bQ/eeLudDZz+/3tfv9Qcmo32/Xm+njuWXJlbCbo/Vim8cM4pcQSS3dkaKoYdfchDgcbhqqunPficZziOYEgLsAU0Fc1E2Wbbt//WC9W67q+P+26PFaTM2fMGKr6NJYvP39+f3/03DDVIBhP3d2bt8fjzk1jOZ2PVAJj2zTn/f6Lrz43Rz/+9ftjHE/9+cPDh6tVQwTIBgjv3t2/+f7nenHbjcY5/vTXv/7DP//Ly8+/eHj3oe/i27d3dRP+8R9/89vf/fnP3/3pX/7hN7/+u39cXS3P96fFcjmMk28XkkZncrVqldU7RMe+rkVLHKPkZKbOucXCIWmKMHaT5dzH8X//z/+5de1q7Z49e5ryX09df9k0TbvggrVAZRY1LxaLyn9s+jEo2mwB9NhjT1M/nncf3v282KwZ7WKzvBuOOcfb250CI9Du4WF/OB8P9zHGUvI0jCYaiCxlX3kzYO+KqsQsOVfsyCAAVaUgUGK3WW62TWDHFeP9aX9MKZqEUopBkzI7UJAudoLaVDjmcUpjUU6WDK2tUKX0x3OO8cO7137Vx2Ho0LQ/cymWp69Cc6yDCBzvPxwe7u7u1q6uVIqaZikxTu3Vs7v9/XYhsTs93L7PKZkWNZ4JQLdv39HT508+e/Hh7av7+52RvPji5cvPPxu74fsffrh/WC631cvnn3tyoYIQqsisWVIpORdEZh+oqiCJIRiic1wygBVGJUQGSUXR+OGQepeUl+8P5ySxqJzGbL5usGqweYqFnS6bsKj84yJ5UDM0QHn0aTXNU+53eXyCF8vPnlydj+X//MMfCLkfc6iqorDb7YZ+SuOYU5aZljsNDEZzrRcxxUjOi6ipeR8YfUv1tqqb5XKLK7JSO6AKb5qNd25//1pRSxacDVFT6qc+W/ElftjfTSWnkgsU31bjMNZ1C4fuw5t35vz+4S0Mh3g8N+7iOqfLyxu7bP7pIf1fYbzdD4e7fYzD+/dvFWzsOlBTw5dPn6HS7m7PSEyc+rOBaVZkqFZLBbt9+xaUvvm7rz98eLU7HJTwp5/vfv13X4xd/+0fvru7u3/+8vLFi68q9gIYvI9AWe3QjbFkBUcOsWowTsiOnHmTOCRJTCiOXOUxJjUAQssy5p3+l//2+yijYxyzDTEtyC6fP2nP7MTqQDV/vDiwczY3HUwBSURLKXHq+/O+WjbbxZOu70+nrmnaFy+/+PpXv4opjf35tNtLzoTmnCfEw/5h93ArpkOamByzR4FQV7HLUnLF2Czrug7LKrTknQl7qC+WzfpmUVW8Wr79+UPRyIa5xBLjWCISOKbzOBTJakLAdRX6vn/+7Olu9zBOIzdQBbfcbKP59nrz9VH61XbPPo/d0B32h7upTAAWY0REzaXy1fPPPr/Y3rz9y3fD+bxj8y7kklQE5voXwObigsxNY7x/fxdCXaR0Xf/+zQeQ6cvPv3j35t1h98BO2RFXTUEOoX7sohMiArlKi4RQmxoCqYEoIJGoOgPP4Fb1UCYDdswiUkTevL8D0ZrcmFMBOyWbqsWz5xs+fIiuJ7VPMYkUANQQSQ1V1FT77ggP76n2bYWn88kHziVvtpt6sRiGbhyOp/2tlOLZI9BsW96PHUmWAoGs8ewDhTp0cYwls6H3VFe+8d4xMZg4vbi4vFhePl1vV9PTcpR3x7e5xCnxmKZJExKBipQsUlRFDYb+7AhPxz2C5ZIsk5a82azHws9fvFxvUgjL2y6eaj/cp2E6m1MwiikHZlRYNotf/fI3Tbvquz5P/fkkACxF1GxupMYpVlWzWm13t7u3r14v1o2r3P372w9v359P99eX21/84qs/TqfVskEGX9U1+aZuCWdHb2BBdhU6q6raFAxAFIoCEBogoQXPrqpDzJK5ckFVS85TzCaqZABITtk1r4fh+fNffXN18+HuO5JPFQeYTepARIXREFWt77tCD0aUxpNCevb04u5ud3f7uvq+GTabqe88GYKWFItYqGrnGBFzUQZgVFEjYmSqFo0vwUetnauCdw6d86L5MAzn29s02M1muw7LF9efRRjPp0OWOJSpy5NDahpSkxnSp2IxZgB88+ZVSgXJVEp3PB4eHqYhf6Vev75psMG/7r8/vC7gNxcXV1999aff/y7FYliqUF1st5eX1yUWFTO1GCMgz61SICAm7xwTqalqisNgmC+uLpzz+/1RtP3d7/74i29e/tu//dt6XTtXVc0CvdZV63zAhIvlqjKo60UAqEObiM0wFVFFVTOjXCw4kJiCcxyaqRuZuQ6VKRYTUY3ZvDgj+DA+/JfX5fnqWTAv8DEm2eMYH6uZihrxNMXdw25tLhU9n3c3Tzaff/b0cH//+ofvDw+nTdNM3dkDOE/RLKVsKheb9f54zHEkBERWQF9XvvKs+bJdy+7UOMeMzhEHBoVuN57Ox9VXy6Fzr0/HzfriatpajOfc92mMkhRo8r5oMVNmVFOHoGbT2BtQu2iGYepOh/vXr2GxqrlaXFyPSZCqVC9aJIHp2cvP//ztt6gKiKvVarVcO+dJqGlaAyilzAohRFScrR+tO5+HKTqGkmKW2C7bum7Gvj+dOkJwjF++fBbj9OXmebNYcoGqap3zRFg1DRarqqYxakI9iRlgERVhQBSDmJRQwLIqLRbVaIPk4pumCdUokyKIgCYMpMd4fn88vrrvfnG1mT6VhVRtLhMxcxEg4pTyNE14PMmxyygf3jhIcZryGBWm93f9OHYDeO/I6hBijgSwWV1st2OJk5PifajbJdfVw+6BHJukL6+fXq/XVe05sGeuffjs6tmixB/f/lwurn+6u93efNZA9fLJy7/evyqmAEBESYp+dOZCshCCGQz9iOyaphqGAbTkOCrRqJY7Rc8vnr5cWDgcHuodvX57++yzFywZDS6X66ppUowV+sPxmBQUlB7DCSnAPJalZvWieXq1DRWNKd/f3m8vt5vt9v2b16dzz2/huDtuNstvfv0f62bhFIiciGrOdw/7YuScbwIzMijkIuTcNIkjBKApmZqyGiAdpwOomVmJuQ6Va+tcihRFIkllGiIoHKcPb/2YoHzaScBMrqrHUz+HQDPsu2EcCvp6LOkIxqo5iZEvdMopg6jx3AKxRdsQ+u54fPn8+Xm/g7HzHC5vbgCREDf14hLDi8ubRai8c4pmqDXXN+tLOx135cE51w+dHncbcBpETQ0NwIAgm4o92h2qSIrR+VCkOKIYp1AHH3yog2/aRDQy1+wvVpcslHPsdzwO0831E8gREAMSMqdxHMbjR6KrIRkgzbpKFQG1aZy8p+C5XdRFTMQMcHO5vb+7nabpjOPpcDJFxsDAAHbeH+MwVoZTlCQiRY73h9uK9vtjKorIZnluL4lCSlYh0gxBAhPRpGlVN5Wr1HtRBWO0ygzZgbixn476CaUG4FEzgsWSmYNDjDGXEj2XZkFNuxAt3fGYxww6LRoAte3Fsuu6PunS+SISMKbutnK6XrZRImbNRs5RUPzF5vppvWjYETEB7cdzVdetVbVfPt+Ep8vLRQjH5/Hb3bvn1y9+//ovD+MeRJihWE5pNl9UIlSFGCWm0RQRyAzBB1e1V9fPL5594f1ClRxXUnkKg/TdtPtw+PnVl//8H3bn/unLz1N/As1Td7i7vRMSZ2aGgGhoiubI5Ty3g2zqu7vb26r2a1ojhePxfHmdnr34/M1PP/T9wKYlCxSZHvZvXr8pOe/2H55tN6ZhHLrv/vSnlMJ3v/3t8eFdP4rz7NiqyueUAADNRKwKhEgqOBUBV5VSmroiA89MyICsRKXkRdMSmXwioqgBKIARAXk2gJSzAKppBi2gJcUxxqiiIDpOsmhaFSHilOMYYynFmDTX54eHi2Z17DsQpKIOYFsvLuo2OFbTbKpp2ndHmvqnl1sHHMh7H2rP23ZBd7ldVKfhXEAM8XEQV0V1Pu4IgFXkE8pKFELbbi8vq6quQ8UIDCYiWqQ/Pvz459/dv/nrdD6++v4vY4yuCp6RTHf93f27t1PflRnEbYZMhHTz9Om7H1+jgamVLOdzv14/J9JzPzHjhw+3i+VitV4f7m5VpB/TH//w7YsXL3/7337b1P48PlQGJSeV/Kc//E5Kc/dw3w/HKZYANhO+Z5s2VCTCEDwTghqoZICimosQID8qcBGRfFXH3OtcqpsXSVTEjIqR4nrhk4lLOJvXahrVcsql5KRF0SCmQjBpEVEDxNnYk5ybpliRVdwuQl27yglcNM3mxaYJARGmGEXK1A1n6UTtXPULt3Y2c/6RVZ9sL/rhPKWUSUTNwHIWgIKEhCzzG2WEaIhiYE3VLi+2q9WqqStGxTJN/UmKxKn/8Y///e71v0/9ESXff3gjashweX1FhlhKjhOqCpoZoKonz97/6u9//eH1O4tiAmIYp3x/t3v22ZMxDgo49r13tNlsusM+lnw89r//w59/+OH1bvdQymA2DbsjiK4W4d271+PkpinnPJpCnBIRqhghiT0K++qmdqQOgRmOfSlCKRcwa+tGyIjAISHCYrXcn3b503GHaAoUp+gJak+mxXOuvdShHroiUiQXtGJmzA4MU86zxIOIUkqmKmo5l6aqUORiuVpBg3WzJLd0ofFVkXQcu+M09qezOSla+u0waQKEUkwIC8gwdufxDAQKBUkIOWcDNO+dFAHQ2TGb0AAUQdlRUzUSYy8POUbHfNzv2oub3O/f/fhdHk9aIphKFjUbTgeRfLO9MrYSTD8K8+dbQ13XP7766aPB9yxnsK4bdw/3ofK5CCFOY9/W4eJiuyuSi374cF/XZyk55R4t3he4urxgh+1icTgfxzGZyaeJVJFHZ19CgiIxpnoZHMqyDUlsLKqmWkoRh8Rk4sj146jZiqp8MrkyAHY+jn1gUC0lR09puxRAHTtiIJTZOVGIPYAvKWMu7NDMZgdqMUs5q5dSUgZrFxfI7EtxAUkNEY9D9+a8G8+Dr8B7OJfzIZ29ec/Iij+8f7Xrd+YJPLBJ7QHJ5VweBY9kYGU2STY0AiMyAnWAx/vbOEzkgnPMqxtXUhm788N7LZOKIKCpEJFJ6U6Hm+VKGSVgmv1tAc0eW51v3rzRGVhviIAiGmM67Muz508IZRqHSvl8PF5dXg/D1HdjLjl3xTHmlBk0B3TNol1UvuiH+66IqhQf5nfAxTiYmZiBmah1w7hZOM/AwU9ZNapK8QwpDgjBWMHg4bAfS6yX9ScTb1fXNTATxMpZKVqyXa7gN79cqi7/6/nAvjpPPQkQgZigERIbYJnN3Gf/W9CYS5RUInl2BlZKcgBaCjgfKj+Mw248q4nPsqldl48/PGAIbYCEjt71D8c8galReXq9Xq7rn9/spkAATiW3bZWKtG2FZjGWnIpnhhyHw+50/1DihBx2t09/9cWv69Xq9U/fxmlIovPPbYYmJikD2XTcPQvXdbOKTTfEDABIqKYxRonZVBVMwWazewOTAruHoxpKSZOYlLJarotolsSZ2nYRpwGyIINrFlCvJsP7+w9xio8u92IpPaonAAAMFYGASpGSc6hrVXNEjQch8+SmcYwxFizWYBTJgjqWIh93kvNeUTcXTR7OoyAaPb30/+k/PD8P7bf/fgDvGOeSLpgWVUdzKRZBdOb3g6oVEWPu47is2qIlSXHMKSZsmsA8xumcRgdkmnxFI3SnPl+2T218iGPe5fOpZE0RK9tum7//h28ejqe+K6IIAHUTgpWr6wWqHo/T0OFqsepjPO/vp+4MeSL2+7v3znvv+cPb1znGbEBANt/l1bSI95bH7oV/uSvxvm2H04BqhCSlTONkeWbTmgI4AkADUBHqz9FwpqiCqp7Op1xKkZwyrNwip8QihOSbFqrluetPfS5FTWdD9KKS1QwMHue8ZuEZYCnFs4slo0FwaEjBMUOYuoGDI8dAZABi9FEyCxSnqR86x9rHSSXVPt9s3NPV4qqJv/xKnU7LBhyhCYiazfg8+7iJAADAQAQ1g6InkTxKBABCDsGbSpli1oyohrZZ66++xqdfjoKx63fNMg7yMJbeOR9Vp5g/3J6GXm+216Yg2aCgI2R2UtLlReOdLerw5cuXm4tVKT2DY+cB7LR7//bHfy9TP3YHkIJGzKygM0yLwNQgoh6q9D7uUoz4Ud1voiVlNJwPf0JznurK1ZVHIgU2VTZgYVDo+860ELBkO+7PpcwD9SRR4zAB+8XVk8X6ql22jgHBFLgIqBk79I4dEaAioSkE7+raOyZABCIFcr7arldX28XNzcViUS1X9XK1COFjWSjHVCAjuKzGWnxtTeWH8/j8qvnHX9bv30bGwshMrmjCj+qAWV34UQpqYtgNg2cHToGBAZndVLIOuSJ03ttQgqerrf7rv9Qq9Ob9OJ670NTCQ4ZIVhVVVTmeoohfLbaM78aS2TCXImbdsf+HX7z48Oa2qpehajYXT+Lpw1hIuB37fjwf7978+PKbbxwjmCIRO85l9sQzBFOFyWRYmIhL9xMhmSkAICCoIdCMWCACx+iYiAFQJSmiIhDOr+OcAACZapwmIiRH7FhKCcyri4vN5fXJh72jbp/HqZBxkYwMIYQ0To45FwW0LGbkyKOreJoiOSKuwGC99K7GzXYds3ajhKZpmuZTniRMOHSDIYlRFvzh5+O6ts+fwGfb+p9+fVH+veuncRIEhcckEHEeXMZHieEM4E1YFGtrQuUUU86H0quVF6uLRdvisbSV267p+iIyb/7Tv7b7XXd7f+SKkoxpKMkAUeOUv/v2h3GIMWaRYoDHQx9C5Sq3e3+/JFPPrx/2v/r6ny/GH0/peDu0cUQ214RqmgZ23miWrJamaVJKOoO5CRTBamqw8ZWPfQEAVUVEZgJAJEAD+qRrNSMuzhMhSgZlA8/tcpmGIcXJOQ4h1FVg0Cq4qqI6UFsF3ywuKtew7J3d399HtTFpXQVCX/JgrM4RokWF+z599uKzZQtyPF9cbHOWcUrNoj2fb93QPX32LL8/N03DH11fyBE4BBD1PohZKnh3kL/8fMri4zl+9rQBLc6hZwLD+WCdjS7+Ns0y4wwMHJJnCkxgOpa4j93tcDrFSaR41pqhDGXqh/7wcLGKnz2Tw/nQD5HY5xKlZBGLU37z+u72wyHlbDZ3EPLUFwchdWNDEKfx2J8xnl4+2/yv//xs42NgQLM6OI+wWm/QhRAqRGyaZtZLIiEjGUAGUX4MpZ8oWURz+gVIMMNoRGWuRQWHTeO9B3ZIzN/84uuq4hDQeahrdg6dw1AxO5Eyah4d2rOnT9fr9Wa93F5sbq6vmFFVZ1kDggbPzJgNuqQf9t2+n8Zih346xpTQ7YfcjaWUknJ27aJqF7O1FQC42gMDV1T6omAWp9IpHUf/YS8HSbw8mAojgAnB47je3NqAj0AwQkIER66ta1ExlSIySRotm2kWKVIWrWurZZr8/n4au36xElMaJ7h7GGMkFQICVVWgvk+zU7KCOSZGRkXLBbK1q82rd11YlLj773IJN0v++xvXnaZSaHf79ulXX7VNTczeu4ur7c8/v5o3OjMBmiKcuyHFnKZkIgrAzKr68YWzOXOa0yVV80RMtKjQWSnFF8Lj7s4sAoqZDmPn2S2bpq59Xfuc+rFzKYvGab+7Px+PcRpWVzer1TJNUUWC57piBNtebE79NMbox6lZX3pf+6pKqtvLm+7YeS6bTWVVvVksPHNoP6LU1g0H8J5tJFW1kjULDBN9/3q4WrjnSx98MO1nVcdH3AoAfApIqKaO2DFXPoQqpBzFYLRsqKvQLOo2HvKiqeuqVqS378+rRSlaBfbZbJiyWgM4bxsCwFKKihjoDDJ33mGx4KypQp+5QNVo+uYzfzztWrz5+5fLN/tp3+WHuze3b3+aTifv2CQfj4dSinNu1lAxUqj9YXeGApL0ExBwTjPntZlPcjUgQEJCsMC6Xsjyxhjx7f14enifY/rImsEpRgZ89uy6qoNq3t+9d/WY41hSSnHMOU3DELwHFS3ZEOvKO8a2qUVyYJRpgLY2dQUUnZvGs5Sh8j7FIvlswcJy+Qk5TeuGbzbtyydXFcHleslkxDxEfXegb1+X93e9FQ3BAdhHv/T5D3yMSWAG5piD9ylOscR+GqaSEkicxipbxcHIgVgqQ4QY1d18USeVWCxrEivsjN0MJ0OcFSAk8zShgQEIsza1NpU/RMjYYC6ravpfflX94sUF6OnLm6bicj7e//iXP/74/Xd9dxr64/l8IqL5MjrTLJq2Hc8xHhOUx/aH6iONxB5fOFVT09m6QBGtrvVyM/3Tr+Hf/rn85pdKcs6DMjlmB0BglLOUIgAw9OexOzlTTxiH3lSk5NPxmHNKcUQqbetCYDDtzoerTfPl86tlMJZeY+ehLCqyMrD2DrTyNcTpgsp1zR4+5klP1nVT1c7zzcWqoLvbHwl4HGWatAlO1EnpiByy6qNSEx9JOWCPc+SEhJAkpyzBUeuruZTEigROFJuwGCY6lf7mWlcbvjvk48lgOlcVrFo3TDKhIjmYI/n8/hiJIjMAGJLmogqyvVjeZpDhkEtYVfT63f2+j0QNE6jE7vBQh4YItQASO+J5lyCoqpasaRIWmiVaAI9pBKAhITEi0jy0bWoGpmqL1l48sV99sXhy0z69mW7fdX3nxUi0mBkCG+DpdHbB73Z7LrTZlMt+UrE3qM6TmDKxORRJEPyiJRBbLdv1ooEcXz5dd10nVdOGfHnhsgq0teOKiZOvHZeqdBV9FDa/uGzaBieRl09vWgcCJgI5GULrgIchL5eViJInA2M0R+gYCQ2RAAwJkYERY8mTlVCHBDrklMe0Cm2zvhizrvwyZ+qzLpqyWuK3f5bff9sPCZZLvt7UqEUN0bGBMKl3yIzeByaaTewAIWdS08+26JvQBHfu4W5ffv+Xhx/fT1GJnUOA2HcXm6WrHLGrmwaQ5ssAEhjC1McyqRRVgFlO+skDngAI0THP3QtQMAFVaOv82ZV/frn8zddf/Ovf+y9vdLUkVFHNJYtkUYM45ZJSTEWm5O4eXh77L9RWjXcVt5XzaG1gQhQRpvhkS58/r7wHRPj8+erFRf10yV9u+OuNfb22ry/8syZfuPHC5yADTAeT+LiTtuvlZHy+PdaOrhb1zXIxTdmInLOmwpvLDXrNr24RAyPOvGTCR36BmaEBG1TMQ8ozJUTVHHLt3aZaEJCAEbHjdip4HqZXb9L3f4Fhct98CZSNyJjZYJYeANisIDV2OI89A0ApuYjr+nR1mePhWMj/8G6Io/z8Pj8cbTGMRYHVlyRzHMo2SckINies84dEg8oFzYUQAQ3sIwYVYOaZzd8L7HGfMYFjjxju787r1Xv2+sXn7tVdWi759a1MEooqqzjvQaENTUDbTcMfhleFDVbUoG97N/AAAAsDSURBVCkWYPZUDcMURUuB2un1Mt9Pud3eWJra4FXKoiKb+pxymXQSPY+5j+U8FPDu3H9apEUYhFuPm8YvePliO/XDOMRpzNJUYbNsX9/fF1Ux8+y1zPYxc//D1AANSI3EFnUzxZRyRsJg1UW7rMFpEUNKJTf1uuv4w0Oa+vKwb5Fxdyz9lHKm4IPpoCr80ZyBmcwMQefgUUrJGQ7H/MXNMu0eusXVq9vSD/r2zpJUpxTZeQ+YRY6HwyyNKTmzc6U8sk5NVXJmdmBzQBWc14NmUJPNGRIRiuh8LWJEyXj/kDCJr9NyUa9X9uyKNYS7h7E4L5JEZBwnT2hJ2FcHme76rmoriG4d/LlMjnlRN/dyHLOdTrF6Vtd6fH6xAisax83yuuRDxcBWWCXloop9H89R+ghD34/xY6vissFa4LxwdUXnAg3aarvenT0MWrJ8uBt3+x7RmQABs3dSCgEgIyGQCwDEWtZVQ227lyMDoUJwvnJ1RW5ImvMUSwJz3rVich4a40gOX/0gprheLU1HwqLA/Ijncs65rIVpBsQAg6tCQIYxu0DcRSlGlKhTVeQiKXhCElIch2EGiaiJZf2I4AYwk5iNFcCYSFQBbYb9fEqYHtMJwrlIYWbjRLcP4Mm1O/jxp2F/zmDN4T5J8cwOaRKBcZw0FxJLLhlqYVwFtwph1VQxiWatg69DNZUsoqqwbFxVa0o9CpJk78A71CJ1XWtOcSo+BF9S4zVUwfOnKjgbMa9bX6wQApks6nA8jQ5cP+ZXb8/DCKpsag4RCI3AO/KeRZApSMHAfL3edlJW7cIjs1JwgZABSUxiSVOOAkCARK2Zp1ACN8f9+WKxvL64uT/8UHmUYpUPwXtPLlQ1xLE4yZIRwDPWdW0kxxQQHbqgng9TFxWyxsqD5gQoCI90CbRZICQzGXAuLwKAe2Q2oUjBj+WSj3Dbj4s0ozsZVWWI/nYvi5bhfTmf7Dj4mPn+fsyZ1M04VSxZQNQjxzya52a9KMyhXS5Xi64vBUuM02LZ9rkrYmMCMUeclstwsVjv3nUIykzdaawaT47ZWeUt+YIq5jl8WqTjWLos56in4YRcN20LYIgl5RxFdz1OCUSQCJ2nUpSRzCx4n62oiBZARMjChJ5c6ypH3jkfpcSco1i2oqAAlFOnMikk9s5zw4v+m6+3Fxv6+vNn/ffvEmldVXWogqturp/tjjs7PiARMlZszKSIO23Vt+vtZbteHm9/MN0jAFA9TclQvXeLxcIM+sMpSSIiU5hrp2jAgAQoojLf3j7ebh99pezjTRUNAHzwjHweIIuuVqyGis2rdwY+ReWMUbKCMc6CQ4Plqk05FbM8ZF+ba9pRQMytN+vT4UEhs7OY0tv7/OZqfTFhxVPj5MXL1dudZBHi6tyPzlfsqQGXBRF9RvuboUifoYuyP4/dlEWTCJ/7o2pxDiaDsUDOiMSMQAZzEcXMcs5SRMVMANhNMUYEcr72FYEDgKIqKglAzbzzYmAaSxoEsKgsfb7aNjfXIacODYKrKi8zW8ezb1zjzFW+Jp7RIwUAXVUlXmF1XCzaqr6Q5fVw7J3DzfbJ4f5A1BH6QFS1C4kZo4oKIGSRmYnQVDWCoRRR/HTI4SMogcyUZ0NrBEQmJAPLhUTxbp/NaMzDsd8kPJIRsmoWUIcMc0rF3gVCTNmyKBkSD6kMXQpcKxg7JDJ23EX9+TafG9e64evPNy70vnKA6HxlaTp2nQuhctzWjpjIFD9xHOrKC+jNxZq7+JfXt8vlZdcVAXRMMpZpAhHImgXIqZgBEQFCzmrGAOaDA3L7koKvvXFKEPw8vABC2KfRI3uqYjoqKgVXYkRzyxa/eXrtlELd5jJSaBpNoAAiqrFWvq42pSQAt6iWMU3LRRWpyZnaxUokaupDaDbbm7pp/aJ1xItcqdp+GJv6sluuUhpo7lMYErrNxeVisZIcSxqlyDAOKZfHGW5iAzLJTEY4X/G85MJkngGA+gHGSdiDr3LuKsWCwo5QEVQQkQxAtdSeK3KSi3MMuRDjdrUdpsnX7vn1Z3f/93fEpGL3h3A45Zc3cBpEcrpct+MQ0+SCc6cxbdvF1J9rLFVdjcp/i0kuGBdByoSlFJliBETVuTyPpQgjoikoAIiZifytk4QAYEAfYW4qGqGoIYsAwKRlLBm4Us2p5Nnlvg4VoN1sq5dPm+OxC83qdL6fSYqiqopE6lRbF7wBsJMiCNTWC8xQVBwSqEgcCe3m6nqKEcTaum5Z4pQYCyHXTXNWnQ8xx04U26Zl56REM0NCZiZhRANA77wiiknwzIQKlJMgivOIZoQco6hBqLCqqG3rlEb1LqGUAmpqYMSMZsGRoSF7x0CSiauYUopTHarbt3dtAEPwXO0Po/f6d79YHzstHperi4ddPB+HzaZV1ZzzctGmhGoeAd2nnYQk7K1p3XGYnl5vP9yfqqpChWmKZugcLyrHWfshV4FiYfm4SnMUZnbeeUYyUQBMlouUufo8aJlUEBBUs2RVRVWH7L0tQ25CCtvlMc5Dvjr7eBowI+U0eRcqzwU055xL9O6idhhPEYvmHMEVMG03a5BMztUuOCvnPM537mXb7p1zjmOMTKwqx+MR2YHmwCgiRORdEC0wdynMmJ1z3Db1lIqIIIHzZkKlGBqLAKAy62LZ0Ijp3Kvax8IYeMdMEBjVjBFXbXCSa7fcTVNwpMk5lJc3CyL48addzMLO/vrj/Yq3U2X7h30qKyFNJceUzqdzc7Vp6iZlMKS/mQEr1YYqpmpxva5PfR4SOB8qdI06J7ZpfVWQabpYb3bdWHJRUzNAJE9c+eCJPLJHT8BK/PjZEVihBufIm0hg73GxrGi9oMrJ05uLOtTq3Cmnqm4WRCG4abLgA5HvNXs1V3lTERTHrg58uWxOYxZskwChgQGjOkYmqkLtCIseiee6OW23WyLsuo6IK1EXKnJOC3ueS/gm4m22YGE2MyYITN47YvGOQ23EaoXHQeaI5bw473zwzL6IkRdVUDEi8t6tVs26rSRlRNiuavKVIa1XK+dMtGajb15eacmHvUURIBBID2fXVEuGgH5RLSQ0bqmerPiqJkJFACL+1KpYbF6Ay1DTpEdX1VSvHk5TUlwab1LJouvaDRHGmNerxbJLKWfTeZHYO++QyMwzN741sYKPdyYDiCYCSMimki0hyZNN9dXn9bLCy2rRAhpYrtOTfb3BPKQ4TthwYMMQWkRcGGspWdWRXG1XV+vmMOECQtZBJalkRmjbViAEX19frPox1mrXV1fg/LJiVYkxOudSSiE0oW7HoTctj9xglTkrUjVFYITKO9XMzKVkF9RXlCabxtkfx5CEnQXvPIZ2sSqKojp31Lx3myZctBWIgumq8d5VY4H19gJBupE8TS+fLdrKncZFMhxzdG7ixm1vnnlwU0FErJxVC/EEF6tGRHwCdRxC/RhWfv6v/0fOmopNKSPhGEssc0GT1EzNas8pQy7iHcdi+nguzZYnSIBgNt/KTE3+FqxAHifcyEwVFEHbircbrjx5cGwAZn3R2100sqlkFXLEBMjsEVGt2Dy4iXaxqALjoZdspFZUC8DjXL8CE7J31HdnUWuWKyAqaZoHYOciArPzoYpxssdf9qPmhVA/JryOZsYmiSpiYc8qUAp+RP4okhEhA5dH/xZDopknExxWjmdotGck4qJgTAgWMzDK9Zor7949TFk0S0GSxtPVqnXEYmhmjJaLMUHleGauGaJvF7/+j/8bzI17+J/P/78f+n//l//5/H/9/D9g8ameOB8BtAAAAABJRU5ErkJggg=="

/***/ }),
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */
/*!****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-navbar/props.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否开启顶部安全区适配
    safeAreaInsetTop: {
      type: Boolean,
      default: uni.$u.props.navbar.safeAreaInsetTop },

    // 固定在顶部时，是否生成一个等高元素，以防止塌陷
    placeholder: {
      type: Boolean,
      default: uni.$u.props.navbar.placeholder },

    // 是否固定在顶部
    fixed: {
      type: Boolean,
      default: uni.$u.props.navbar.fixed },

    // 是否显示下边框
    border: {
      type: Boolean,
      default: uni.$u.props.navbar.border },

    // 左边的图标
    leftIcon: {
      type: String,
      default: uni.$u.props.navbar.leftIcon },

    // 左边的提示文字
    leftText: {
      type: String,
      default: uni.$u.props.navbar.leftText },

    // 左右的提示文字
    rightText: {
      type: String,
      default: uni.$u.props.navbar.rightText },

    // 右边的图标
    rightIcon: {
      type: String,
      default: uni.$u.props.navbar.rightIcon },

    // 标题
    title: {
      type: [String, Number],
      default: uni.$u.props.navbar.title },

    // 背景颜色
    bgColor: {
      type: String,
      default: uni.$u.props.navbar.bgColor },

    // 标题的宽度
    titleWidth: {
      type: [String, Number],
      default: uni.$u.props.navbar.titleWidth },

    // 导航栏高度
    height: {
      type: [String, Number],
      default: uni.$u.props.navbar.height },

    // 左侧返回图标的大小
    leftIconSize: {
      type: [String, Number],
      default: uni.$u.props.navbar.leftIconSize },

    // 左侧返回图标的颜色
    leftIconColor: {
      type: String,
      default: uni.$u.props.navbar.leftIconColor },

    // 点击左侧区域(返回图标)，是否自动返回上一页
    autoBack: {
      type: Boolean,
      default: uni.$u.props.navbar.autoBack },

    // 标题的样式，对象或字符串
    titleStyle: {
      type: [String, Object],
      default: uni.$u.props.navbar.titleStyle } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */
/*!****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-picker/props.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否展示picker弹窗
    show: {
      type: Boolean,
      default: uni.$u.props.picker.show },

    // 是否展示顶部的操作栏
    showToolbar: {
      type: Boolean,
      default: uni.$u.props.picker.showToolbar },

    // 顶部标题
    title: {
      type: String,
      default: uni.$u.props.picker.title },

    // 对象数组，设置每一列的数据
    columns: {
      type: Array,
      default: uni.$u.props.picker.columns },

    // 是否显示加载中状态
    loading: {
      type: Boolean,
      default: uni.$u.props.picker.loading },

    // 各列中，单个选项的高度
    itemHeight: {
      type: [String, Number],
      default: uni.$u.props.picker.itemHeight },

    // 取消按钮的文字
    cancelText: {
      type: String,
      default: uni.$u.props.picker.cancelText },

    // 确认按钮的文字
    confirmText: {
      type: String,
      default: uni.$u.props.picker.confirmText },

    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: uni.$u.props.picker.cancelColor },

    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: uni.$u.props.picker.confirmColor },

    // 每列中可见选项的数量
    visibleItemCount: {
      type: [String, Number],
      default: uni.$u.props.picker.visibleItemCount },

    // 选项对象中，需要展示的属性键名
    keyName: {
      type: String,
      default: uni.$u.props.picker.keyName },

    // 是否允许点击遮罩关闭选择器
    closeOnClickOverlay: {
      type: Boolean,
      default: uni.$u.props.picker.closeOnClickOverlay },

    // 各列的默认索引
    defaultIndex: {
      type: Array,
      default: uni.$u.props.picker.defaultIndex },

    // 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，只在微信2.21.1及以上有效
    immediateChange: {
      type: Boolean,
      default: uni.$u.props.picker.immediateChange } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */
/*!****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-swiper/props.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 列表数组，元素可为字符串，如为对象可通过keyName指定目标属性名
    list: {
      type: Array,
      default: uni.$u.props.swiper.list },

    // 是否显示面板指示器
    indicator: {
      type: Boolean,
      default: uni.$u.props.swiper.indicator },

    // 指示器非激活颜色
    indicatorActiveColor: {
      type: String,
      default: uni.$u.props.swiper.indicatorActiveColor },

    // 指示器的激活颜色
    indicatorInactiveColor: {
      type: String,
      default: uni.$u.props.swiper.indicatorInactiveColor },

    // 指示器样式，可通过bottom，left，right进行定位
    indicatorStyle: {
      type: [String, Object],
      default: uni.$u.props.swiper.indicatorStyle },

    // 指示器模式，line-线型，dot-点型
    indicatorMode: {
      type: String,
      default: uni.$u.props.swiper.indicatorMode },

    // 是否自动切换
    autoplay: {
      type: Boolean,
      default: uni.$u.props.swiper.autoplay },

    // 当前所在滑块的 index
    current: {
      type: [String, Number],
      default: uni.$u.props.swiper.current },

    // 当前所在滑块的 item-id ，不能与 current 被同时指定
    currentItemId: {
      type: String,
      default: uni.$u.props.swiper.currentItemId },

    // 滑块自动切换时间间隔
    interval: {
      type: [String, Number],
      default: uni.$u.props.swiper.interval },

    // 滑块切换过程所需时间
    duration: {
      type: [String, Number],
      default: uni.$u.props.swiper.duration },

    // 播放到末尾后是否重新回到开头
    circular: {
      type: Boolean,
      default: uni.$u.props.swiper.circular },

    // 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持
    previousMargin: {
      type: [String, Number],
      default: uni.$u.props.swiper.previousMargin },

    // 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持
    nextMargin: {
      type: [String, Number],
      default: uni.$u.props.swiper.nextMargin },

    // 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持
    acceleration: {
      type: Boolean,
      default: uni.$u.props.swiper.acceleration },

    // 同时显示的滑块数量，nvue、支付宝小程序不支持
    displayMultipleItems: {
      type: Number,
      default: uni.$u.props.swiper.displayMultipleItems },

    // 指定swiper切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic
    // 只对微信小程序有效
    easingFunction: {
      type: String,
      default: uni.$u.props.swiper.easingFunction },

    // list数组中指定对象的目标属性名
    keyName: {
      type: String,
      default: uni.$u.props.swiper.keyName },

    // 图片的裁剪模式
    imgMode: {
      type: String,
      default: uni.$u.props.swiper.imgMode },

    // 组件高度
    height: {
      type: [String, Number],
      default: uni.$u.props.swiper.height },

    // 背景颜色
    bgColor: {
      type: String,
      default: uni.$u.props.swiper.bgColor },

    // 组件圆角，数值或带单位的字符串
    radius: {
      type: [String, Number],
      default: uni.$u.props.swiper.radius },

    // 是否加载中
    loading: {
      type: Boolean,
      default: uni.$u.props.swiper.loading },

    // 是否显示标题，要求数组对象中有title属性
    showTitle: {
      type: Boolean,
      default: uni.$u.props.swiper.showTitle } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-modal/props.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否展示modal
    show: {
      type: Boolean,
      default: uni.$u.props.modal.show },

    // 标题
    title: {
      type: [String],
      default: uni.$u.props.modal.title },

    // 弹窗内容
    content: {
      type: String,
      default: uni.$u.props.modal.content },

    // 确认文案
    confirmText: {
      type: String,
      default: uni.$u.props.modal.confirmText },

    // 取消文案
    cancelText: {
      type: String,
      default: uni.$u.props.modal.cancelText },

    // 是否显示确认按钮
    showConfirmButton: {
      type: Boolean,
      default: uni.$u.props.modal.showConfirmButton },

    // 是否显示取消按钮
    showCancelButton: {
      type: Boolean,
      default: uni.$u.props.modal.showCancelButton },

    // 确认按钮颜色
    confirmColor: {
      type: String,
      default: uni.$u.props.modal.confirmColor },

    // 取消文字颜色
    cancelColor: {
      type: String,
      default: uni.$u.props.modal.cancelColor },

    // 对调确认和取消的位置
    buttonReverse: {
      type: Boolean,
      default: uni.$u.props.modal.buttonReverse },

    // 是否开启缩放效果
    zoom: {
      type: Boolean,
      default: uni.$u.props.modal.zoom },

    // 是否异步关闭，只对确定按钮有效
    asyncClose: {
      type: Boolean,
      default: uni.$u.props.modal.asyncClose },

    // 是否允许点击遮罩关闭modal
    closeOnClickOverlay: {
      type: Boolean,
      default: uni.$u.props.modal.closeOnClickOverlay },

    // 给一个负的margin-top，往上偏移，避免和键盘重合的情况
    negativeTop: {
      type: [String, Number],
      default: uni.$u.props.modal.negativeTop },

    // modal宽度，不支持百分比，可以数值，px，rpx单位
    width: {
      type: [String, Number],
      default: uni.$u.props.modal.width },

    // 确认按钮的样式，circle-圆形，square-方形，如设置，将不会显示取消按钮
    confirmButtonShape: {
      type: String,
      default: uni.$u.props.modal.confirmButtonShape } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-grid/props.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 分成几列
    col: {
      type: [String, Number],
      default: uni.$u.props.grid.col },

    // 是否显示边框
    border: {
      type: Boolean,
      default: uni.$u.props.grid.border },

    // 宫格对齐方式，表现为数量少的时候，靠左，居中，还是靠右
    align: {
      type: String,
      default: uni.$u.props.grid.align } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */
/*!*******************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-grid-item/props.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 宫格的name
    name: {
      type: [String, Number, null],
      default: uni.$u.props.gridItem.name },

    // 背景颜色
    bgColor: {
      type: String,
      default: uni.$u.props.gridItem.bgColor } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-icon/icons.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  'uicon-level': "\uE693",
  'uicon-column-line': "\uE68E",
  'uicon-checkbox-mark': "\uE807",
  'uicon-folder': "\uE7F5",
  'uicon-movie': "\uE7F6",
  'uicon-star-fill': "\uE669",
  'uicon-star': "\uE65F",
  'uicon-phone-fill': "\uE64F",
  'uicon-phone': "\uE622",
  'uicon-apple-fill': "\uE881",
  'uicon-chrome-circle-fill': "\uE885",
  'uicon-backspace': "\uE67B",
  'uicon-attach': "\uE632",
  'uicon-cut': "\uE948",
  'uicon-empty-car': "\uE602",
  'uicon-empty-coupon': "\uE682",
  'uicon-empty-address': "\uE646",
  'uicon-empty-favor': "\uE67C",
  'uicon-empty-permission': "\uE686",
  'uicon-empty-news': "\uE687",
  'uicon-empty-search': "\uE664",
  'uicon-github-circle-fill': "\uE887",
  'uicon-rmb': "\uE608",
  'uicon-person-delete-fill': "\uE66A",
  'uicon-reload': "\uE788",
  'uicon-order': "\uE68F",
  'uicon-server-man': "\uE6BC",
  'uicon-search': "\uE62A",
  'uicon-fingerprint': "\uE955",
  'uicon-more-dot-fill': "\uE630",
  'uicon-scan': "\uE662",
  'uicon-share-square': "\uE60B",
  'uicon-map': "\uE61D",
  'uicon-map-fill': "\uE64E",
  'uicon-tags': "\uE629",
  'uicon-tags-fill': "\uE651",
  'uicon-bookmark-fill': "\uE63B",
  'uicon-bookmark': "\uE60A",
  'uicon-eye': "\uE613",
  'uicon-eye-fill': "\uE641",
  'uicon-mic': "\uE64A",
  'uicon-mic-off': "\uE649",
  'uicon-calendar': "\uE66E",
  'uicon-calendar-fill': "\uE634",
  'uicon-trash': "\uE623",
  'uicon-trash-fill': "\uE658",
  'uicon-play-left': "\uE66D",
  'uicon-play-right': "\uE610",
  'uicon-minus': "\uE618",
  'uicon-plus': "\uE62D",
  'uicon-info': "\uE653",
  'uicon-info-circle': "\uE7D2",
  'uicon-info-circle-fill': "\uE64B",
  'uicon-question': "\uE715",
  'uicon-error': "\uE6D3",
  'uicon-close': "\uE685",
  'uicon-checkmark': "\uE6A8",
  'uicon-android-circle-fill': "\uE67E",
  'uicon-android-fill': "\uE67D",
  'uicon-ie': "\uE87B",
  'uicon-IE-circle-fill': "\uE889",
  'uicon-google': "\uE87A",
  'uicon-google-circle-fill': "\uE88A",
  'uicon-setting-fill': "\uE872",
  'uicon-setting': "\uE61F",
  'uicon-minus-square-fill': "\uE855",
  'uicon-plus-square-fill': "\uE856",
  'uicon-heart': "\uE7DF",
  'uicon-heart-fill': "\uE851",
  'uicon-camera': "\uE7D7",
  'uicon-camera-fill': "\uE870",
  'uicon-more-circle': "\uE63E",
  'uicon-more-circle-fill': "\uE645",
  'uicon-chat': "\uE620",
  'uicon-chat-fill': "\uE61E",
  'uicon-bag-fill': "\uE617",
  'uicon-bag': "\uE619",
  'uicon-error-circle-fill': "\uE62C",
  'uicon-error-circle': "\uE624",
  'uicon-close-circle': "\uE63F",
  'uicon-close-circle-fill': "\uE637",
  'uicon-checkmark-circle': "\uE63D",
  'uicon-checkmark-circle-fill': "\uE635",
  'uicon-question-circle-fill': "\uE666",
  'uicon-question-circle': "\uE625",
  'uicon-share': "\uE631",
  'uicon-share-fill': "\uE65E",
  'uicon-shopping-cart': "\uE621",
  'uicon-shopping-cart-fill': "\uE65D",
  'uicon-bell': "\uE609",
  'uicon-bell-fill': "\uE640",
  'uicon-list': "\uE650",
  'uicon-list-dot': "\uE616",
  'uicon-zhihu': "\uE6BA",
  'uicon-zhihu-circle-fill': "\uE709",
  'uicon-zhifubao': "\uE6B9",
  'uicon-zhifubao-circle-fill': "\uE6B8",
  'uicon-weixin-circle-fill': "\uE6B1",
  'uicon-weixin-fill': "\uE6B2",
  'uicon-twitter-circle-fill': "\uE6AB",
  'uicon-twitter': "\uE6AA",
  'uicon-taobao-circle-fill': "\uE6A7",
  'uicon-taobao': "\uE6A6",
  'uicon-weibo-circle-fill': "\uE6A5",
  'uicon-weibo': "\uE6A4",
  'uicon-qq-fill': "\uE6A1",
  'uicon-qq-circle-fill': "\uE6A0",
  'uicon-moments-circel-fill': "\uE69A",
  'uicon-moments': "\uE69B",
  'uicon-qzone': "\uE695",
  'uicon-qzone-circle-fill': "\uE696",
  'uicon-baidu-circle-fill': "\uE680",
  'uicon-baidu': "\uE681",
  'uicon-facebook-circle-fill': "\uE68A",
  'uicon-facebook': "\uE689",
  'uicon-car': "\uE60C",
  'uicon-car-fill': "\uE636",
  'uicon-warning-fill': "\uE64D",
  'uicon-warning': "\uE694",
  'uicon-clock-fill': "\uE638",
  'uicon-clock': "\uE60F",
  'uicon-edit-pen': "\uE612",
  'uicon-edit-pen-fill': "\uE66B",
  'uicon-email': "\uE611",
  'uicon-email-fill': "\uE642",
  'uicon-minus-circle': "\uE61B",
  'uicon-minus-circle-fill': "\uE652",
  'uicon-plus-circle': "\uE62E",
  'uicon-plus-circle-fill': "\uE661",
  'uicon-file-text': "\uE663",
  'uicon-file-text-fill': "\uE665",
  'uicon-pushpin': "\uE7E3",
  'uicon-pushpin-fill': "\uE86E",
  'uicon-grid': "\uE673",
  'uicon-grid-fill': "\uE678",
  'uicon-play-circle': "\uE647",
  'uicon-play-circle-fill': "\uE655",
  'uicon-pause-circle-fill': "\uE654",
  'uicon-pause': "\uE8FA",
  'uicon-pause-circle': "\uE643",
  'uicon-eye-off': "\uE648",
  'uicon-eye-off-outline': "\uE62B",
  'uicon-gift-fill': "\uE65C",
  'uicon-gift': "\uE65B",
  'uicon-rmb-circle-fill': "\uE657",
  'uicon-rmb-circle': "\uE677",
  'uicon-kefu-ermai': "\uE656",
  'uicon-server-fill': "\uE751",
  'uicon-coupon-fill': "\uE8C4",
  'uicon-coupon': "\uE8AE",
  'uicon-integral': "\uE704",
  'uicon-integral-fill': "\uE703",
  'uicon-home-fill': "\uE964",
  'uicon-home': "\uE965",
  'uicon-hourglass-half-fill': "\uE966",
  'uicon-hourglass': "\uE967",
  'uicon-account': "\uE628",
  'uicon-plus-people-fill': "\uE626",
  'uicon-minus-people-fill': "\uE615",
  'uicon-account-fill': "\uE614",
  'uicon-thumb-down-fill': "\uE726",
  'uicon-thumb-down': "\uE727",
  'uicon-thumb-up': "\uE733",
  'uicon-thumb-up-fill': "\uE72F",
  'uicon-lock-fill': "\uE979",
  'uicon-lock-open': "\uE973",
  'uicon-lock-opened-fill': "\uE974",
  'uicon-lock': "\uE97A",
  'uicon-red-packet-fill': "\uE690",
  'uicon-photo-fill': "\uE98B",
  'uicon-photo': "\uE98D",
  'uicon-volume-off-fill': "\uE659",
  'uicon-volume-off': "\uE644",
  'uicon-volume-fill': "\uE670",
  'uicon-volume': "\uE633",
  'uicon-red-packet': "\uE691",
  'uicon-download': "\uE63C",
  'uicon-arrow-up-fill': "\uE6B0",
  'uicon-arrow-down-fill': "\uE600",
  'uicon-play-left-fill': "\uE675",
  'uicon-play-right-fill': "\uE676",
  'uicon-rewind-left-fill': "\uE679",
  'uicon-rewind-right-fill': "\uE67A",
  'uicon-arrow-downward': "\uE604",
  'uicon-arrow-leftward': "\uE601",
  'uicon-arrow-rightward': "\uE603",
  'uicon-arrow-upward': "\uE607",
  'uicon-arrow-down': "\uE60D",
  'uicon-arrow-right': "\uE605",
  'uicon-arrow-left': "\uE60E",
  'uicon-arrow-up': "\uE606",
  'uicon-skip-back-left': "\uE674",
  'uicon-skip-forward-right': "\uE672",
  'uicon-rewind-right': "\uE66F",
  'uicon-rewind-left': "\uE671",
  'uicon-arrow-right-double': "\uE68D",
  'uicon-arrow-left-double': "\uE68C",
  'uicon-wifi-off': "\uE668",
  'uicon-wifi': "\uE667",
  'uicon-empty-data': "\uE62F",
  'uicon-empty-history': "\uE684",
  'uicon-empty-list': "\uE68B",
  'uicon-empty-page': "\uE627",
  'uicon-empty-order': "\uE639",
  'uicon-man': "\uE697",
  'uicon-woman': "\uE69C",
  'uicon-man-add': "\uE61C",
  'uicon-man-add-fill': "\uE64C",
  'uicon-man-delete': "\uE61A",
  'uicon-man-delete-fill': "\uE66A",
  'uicon-zh': "\uE70A",
  'uicon-en': "\uE692" };exports.default = _default;

/***/ }),
/* 324 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-icon/props.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 图标类名
    name: {
      type: String,
      default: uni.$u.props.icon.name },

    // 图标颜色，可接受主题色
    color: {
      type: String,
      default: uni.$u.props.icon.color },

    // 字体大小，单位px
    size: {
      type: [String, Number],
      default: uni.$u.props.icon.size },

    // 是否显示粗体
    bold: {
      type: Boolean,
      default: uni.$u.props.icon.bold },

    // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
    index: {
      type: [String, Number],
      default: uni.$u.props.icon.index },

    // 触摸图标时的类名
    hoverClass: {
      type: String,
      default: uni.$u.props.icon.hoverClass },

    // 自定义扩展前缀，方便用户扩展自己的图标库
    customPrefix: {
      type: String,
      default: uni.$u.props.icon.customPrefix },

    // 图标右边或者下面的文字
    label: {
      type: [String, Number],
      default: uni.$u.props.icon.label },

    // label的位置，只能右边或者下边
    labelPos: {
      type: String,
      default: uni.$u.props.icon.labelPos },

    // label的大小
    labelSize: {
      type: [String, Number],
      default: uni.$u.props.icon.labelSize },

    // label的颜色
    labelColor: {
      type: String,
      default: uni.$u.props.icon.labelColor },

    // label与图标的距离
    space: {
      type: [String, Number],
      default: uni.$u.props.icon.space },

    // 图片的mode
    imgMode: {
      type: String,
      default: uni.$u.props.icon.imgMode },

    // 用于显示图片小图标时，图片的宽度
    width: {
      type: [String, Number],
      default: uni.$u.props.icon.width },

    // 用于显示图片小图标时，图片的高度
    height: {
      type: [String, Number],
      default: uni.$u.props.icon.height },

    // 用于解决某些情况下，让图标垂直居中的用途
    top: {
      type: [String, Number],
      default: uni.$u.props.icon.top },

    // 是否阻止事件传播
    stop: {
      type: Boolean,
      default: uni.$u.props.icon.stop } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */
/*!********************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/mixin/button.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    lang: String,
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: String,
    formType: String,
    openType: String } };exports.default = _default;

/***/ }),
/* 333 */
/*!**********************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/libs/mixin/openType.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    openType: String },

  methods: {
    onGetUserInfo: function onGetUserInfo(event) {
      this.$emit('getuserinfo', event.detail);
    },
    onContact: function onContact(event) {
      this.$emit('contact', event.detail);
    },
    onGetPhoneNumber: function onGetPhoneNumber(event) {
      this.$emit('getphonenumber', event.detail);
    },
    onError: function onError(event) {
      this.$emit('error', event.detail);
    },
    onLaunchApp: function onLaunchApp(event) {
      this.$emit('launchapp', event.detail);
    },
    onOpenSetting: function onOpenSetting(event) {
      this.$emit('opensetting', event.detail);
    } } };exports.default = _default;

/***/ }),
/* 334 */
/*!****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-button/props.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-16 10:04:04
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-16 10:04:24
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/components/u-button/props.js
                                                                                                      */var _default =
{
  props: {
    // 是否细边框
    hairline: {
      type: Boolean,
      default: uni.$u.props.button.hairline },

    // 按钮的预置样式，info，primary，error，warning，success
    type: {
      type: String,
      default: uni.$u.props.button.type },

    // 按钮尺寸，large，normal，small，mini
    size: {
      type: String,
      default: uni.$u.props.button.size },

    // 按钮形状，circle（两边为半圆），square（带圆角）
    shape: {
      type: String,
      default: uni.$u.props.button.shape },

    // 按钮是否镂空
    plain: {
      type: Boolean,
      default: uni.$u.props.button.plain },

    // 是否禁止状态
    disabled: {
      type: Boolean,
      default: uni.$u.props.button.disabled },

    // 是否加载中
    loading: {
      type: Boolean,
      default: uni.$u.props.button.loading },

    // 加载中提示文字
    loadingText: {
      type: [String, Number],
      default: uni.$u.props.button.loadingText },

    // 加载状态图标类型
    loadingMode: {
      type: String,
      default: uni.$u.props.button.loadingMode },

    // 加载图标大小
    loadingSize: {
      type: [String, Number],
      default: uni.$u.props.button.loadingSize },

    // 开放能力，具体请看uniapp稳定关于button组件部分说明
    // https://uniapp.dcloud.io/component/button
    openType: {
      type: String,
      default: uni.$u.props.button.openType },

    // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
    // 取值为submit（提交表单），reset（重置表单）
    formType: {
      type: String,
      default: uni.$u.props.button.formType },

    // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
    // 只微信小程序、QQ小程序有效
    appParameter: {
      type: String,
      default: uni.$u.props.button.appParameter },

    // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
    hoverStopPropagation: {
      type: Boolean,
      default: uni.$u.props.button.hoverStopPropagation },

    // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
    lang: {
      type: String,
      default: uni.$u.props.button.lang },

    // 会话来源，open-type="contact"时有效。只微信小程序有效
    sessionFrom: {
      type: String,
      default: uni.$u.props.button.sessionFrom },

    // 会话内消息卡片标题，open-type="contact"时有效
    // 默认当前标题，只微信小程序有效
    sendMessageTitle: {
      type: String,
      default: uni.$u.props.button.sendMessageTitle },

    // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
    // 默认当前分享路径，只微信小程序有效
    sendMessagePath: {
      type: String,
      default: uni.$u.props.button.sendMessagePath },

    // 会话内消息卡片图片，open-type="contact"时有效
    // 默认当前页面截图，只微信小程序有效
    sendMessageImg: {
      type: String,
      default: uni.$u.props.button.sendMessageImg },

    // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
    // 用户点击后可以快速发送小程序消息，open-type="contact"时有效
    showMessageCard: {
      type: Boolean,
      default: uni.$u.props.button.showMessageCard },

    // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
    dataName: {
      type: String,
      default: uni.$u.props.button.dataName },

    // 节流，一定时间内只能触发一次
    throttleTime: {
      type: [String, Number],
      default: uni.$u.props.button.throttleTime },

    // 按住后多久出现点击态，单位毫秒
    hoverStartTime: {
      type: [String, Number],
      default: uni.$u.props.button.hoverStartTime },

    // 手指松开后点击态保留时间，单位毫秒
    hoverStayTime: {
      type: [String, Number],
      default: uni.$u.props.button.hoverStayTime },

    // 按钮文字，之所以通过props传入，是因为slot传入的话
    // nvue中无法控制文字的样式
    text: {
      type: [String, Number],
      default: uni.$u.props.button.text },

    // 按钮图标
    icon: {
      type: String,
      default: uni.$u.props.button.icon },

    // 按钮图标
    iconColor: {
      type: String,
      default: uni.$u.props.button.icon },

    // 按钮颜色，支持传入linear-gradient渐变色
    color: {
      type: String,
      default: uni.$u.props.button.color } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-input/props.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 输入的值
    value: {
      type: [String, Number],
      default: uni.$u.props.input.value },

    // 输入框类型
    // number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
    // idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
    // digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
    // text-文本输入键盘
    type: {
      type: String,
      default: uni.$u.props.input.type },

    // 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true，
    // 兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序
    fixed: {
      type: Boolean,
      default: uni.$u.props.input.fixed },

    // 是否禁用输入框
    disabled: {
      type: Boolean,
      default: uni.$u.props.input.disabled },

    // 禁用状态时的背景色
    disabledColor: {
      type: String,
      default: uni.$u.props.input.disabledColor },

    // 是否显示清除控件
    clearable: {
      type: Boolean,
      default: uni.$u.props.input.clearable },

    // 是否密码类型
    password: {
      type: Boolean,
      default: uni.$u.props.input.password },

    // 最大输入长度，设置为 -1 的时候不限制最大长度
    maxlength: {
      type: [String, Number],
      default: uni.$u.props.input.maxlength },

    // 	输入框为空时的占位符
    placeholder: {
      type: String,
      default: uni.$u.props.input.placeholder },

    // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
    placeholderClass: {
      type: String,
      default: uni.$u.props.input.placeholderClass },

    // 指定placeholder的样式
    placeholderStyle: {
      type: [String, Object],
      default: uni.$u.props.input.placeholderStyle },

    // 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效
    showWordLimit: {
      type: Boolean,
      default: uni.$u.props.input.showWordLimit },

    // 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
    // https://uniapp.dcloud.io/component/input
    // https://uniapp.dcloud.io/component/textarea
    confirmType: {
      type: String,
      default: uni.$u.props.input.confirmType },

    // 点击键盘右下角按钮时是否保持键盘不收起，H5无效
    confirmHold: {
      type: Boolean,
      default: uni.$u.props.input.confirmHold },

    // focus时，点击页面的时候不收起键盘，微信小程序有效
    holdKeyboard: {
      type: Boolean,
      default: uni.$u.props.input.holdKeyboard },

    // 自动获取焦点
    // 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
    focus: {
      type: Boolean,
      default: uni.$u.props.input.focus },

    // 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
    autoBlur: {
      type: Boolean,
      default: uni.$u.props.input.autoBlur },

    // 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效
    disableDefaultPadding: {
      type: Boolean,
      default: uni.$u.props.input.disableDefaultPadding },

    // 指定focus时光标的位置
    cursor: {
      type: [String, Number],
      default: uni.$u.props.input.cursor },

    // 输入框聚焦时底部与键盘的距离
    cursorSpacing: {
      type: [String, Number],
      default: uni.$u.props.input.cursorSpacing },

    // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
    selectionStart: {
      type: [String, Number],
      default: uni.$u.props.input.selectionStart },

    // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
    selectionEnd: {
      type: [String, Number],
      default: uni.$u.props.input.selectionEnd },

    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: uni.$u.props.input.adjustPosition },

    // 输入框内容对齐方式，可选值为：left|center|right
    inputAlign: {
      type: String,
      default: uni.$u.props.input.inputAlign },

    // 输入框字体的大小
    fontSize: {
      type: [String, Number],
      default: uni.$u.props.input.fontSize },

    // 输入框字体颜色
    color: {
      type: String,
      default: uni.$u.props.input.color },

    // 输入框前置图标
    prefixIcon: {
      type: String,
      default: uni.$u.props.input.prefixIcon },

    // 前置图标样式，对象或字符串
    prefixIconStyle: {
      type: [String, Object],
      default: uni.$u.props.input.prefixIconStyle },

    // 输入框后置图标
    suffixIcon: {
      type: String,
      default: uni.$u.props.input.suffixIcon },

    // 后置图标样式，对象或字符串
    suffixIconStyle: {
      type: [String, Object],
      default: uni.$u.props.input.suffixIconStyle },

    // 边框类型，surround-四周边框，bottom-底部边框，none-无边框
    border: {
      type: String,
      default: uni.$u.props.input.border },

    // 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
    readonly: {
      type: Boolean,
      default: uni.$u.props.input.readonly },

    // 输入框形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: uni.$u.props.input.shape },

    // 用于处理或者过滤输入框内容的方法
    formatter: {
      type: [Function, null],
      default: uni.$u.props.input.formatter } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-tabs/props.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 滑块的移动过渡时间，单位ms
    duration: {
      type: Number,
      default: uni.$u.props.tabs.duration },

    // tabs标签数组
    list: {
      type: Array,
      default: uni.$u.props.tabs.list },

    // 滑块颜色
    lineColor: {
      type: String,
      default: uni.$u.props.tabs.lineColor },

    // 菜单选择中时的样式
    activeStyle: {
      type: [String, Object],
      default: uni.$u.props.tabs.activeStyle },

    // 菜单非选中时的样式
    inactiveStyle: {
      type: [String, Object],
      default: uni.$u.props.tabs.inactiveStyle },

    // 滑块长度
    lineWidth: {
      type: [String, Number],
      default: uni.$u.props.tabs.lineWidth },

    // 滑块高度
    lineHeight: {
      type: [String, Number],
      default: uni.$u.props.tabs.lineHeight },

    // 滑块背景显示大小，当滑块背景设置为图片时使用
    lineBgSize: {
      type: String,
      default: uni.$u.props.tabs.lineBgSize },

    // 菜单item的样式
    itemStyle: {
      type: [String, Object],
      default: uni.$u.props.tabs.itemStyle },

    // 菜单是否可滚动
    scrollable: {
      type: Boolean,
      default: uni.$u.props.tabs.scrollable },

    // 当前选中标签的索引
    current: {
      type: [Number, String],
      default: uni.$u.props.tabs.current },

    // 默认读取的键名
    keyName: {
      type: String,
      default: uni.$u.props.tabs.keyName } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-text/props.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 主题颜色
    type: {
      type: String,
      default: uni.$u.props.text.type },

    // 是否显示
    show: {
      type: Boolean,
      default: uni.$u.props.text.show },

    // 显示的值
    text: {
      type: [String, Number],
      default: uni.$u.props.text.text },

    // 前置图标
    prefixIcon: {
      type: String,
      default: uni.$u.props.text.prefixIcon },

    // 后置图标
    suffixIcon: {
      type: String,
      default: uni.$u.props.text.suffixIcon },

    // 文本处理的匹配模式
    // text-普通文本，price-价格，phone-手机号，name-姓名，date-日期，link-超链接
    mode: {
      type: String,
      default: uni.$u.props.text.mode },

    // mode=link下，配置的链接
    href: {
      type: String,
      default: uni.$u.props.text.href },

    // 格式化规则
    format: {
      type: [String, Function],
      default: uni.$u.props.text.format },

    // mode=phone时，点击文本是否拨打电话
    call: {
      type: Boolean,
      default: uni.$u.props.text.call },

    // 小程序的打开方式
    openType: {
      type: String,
      default: uni.$u.props.text.openType },

    // 是否粗体，默认normal
    bold: {
      type: Boolean,
      default: uni.$u.props.text.bold },

    // 是否块状
    block: {
      type: Boolean,
      default: uni.$u.props.text.block },

    // 文本显示的行数，如果设置，超出此行数，将会显示省略号
    lines: {
      type: [String, Number],
      default: uni.$u.props.text.lines },

    // 文本颜色
    color: {
      type: String,
      default: uni.$u.props.text.color },

    // 字体大小
    size: {
      type: [String, Number],
      default: uni.$u.props.text.size },

    // 图标的样式
    iconStyle: {
      type: [Object, String],
      default: uni.$u.props.text.iconStyle },

    // 文字装饰，下划线，中划线等，可选值 none|underline|line-through
    decoration: {
      tepe: String,
      default: uni.$u.props.text.decoration },

    // 外边距，对象、字符串，数值形式均可
    margin: {
      type: [Object, String, Number],
      default: uni.$u.props.text.margin },

    // 文本行高
    lineHeight: {
      type: [String, Number],
      default: uni.$u.props.text.lineHeight },

    // 文本对齐方式，可选值left|center|right
    align: {
      type: String,
      default: uni.$u.props.text.align },

    // 文字换行，可选值break-word|normal|anywhere
    wordWrap: {
      type: String,
      default: uni.$u.props.text.wordWrap } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */
/*!*****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-divider/props.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否虚线
    dashed: {
      type: Boolean,
      default: uni.$u.props.divider.dashed },

    // 是否细线
    hairline: {
      type: Boolean,
      default: uni.$u.props.divider.hairline },

    // 是否以点替代文字，优先于text字段起作用
    dot: {
      type: Boolean,
      default: uni.$u.props.divider.dot },

    // 内容文本的位置，left-左边，center-中间，right-右边
    textPosition: {
      type: String,
      default: uni.$u.props.divider.textPosition },

    // 文本内容
    text: {
      type: [String, Number],
      default: uni.$u.props.divider.text },

    // 文本大小
    textSize: {
      type: [String, Number],
      default: uni.$u.props.divider.textSize },

    // 文本颜色
    textColor: {
      type: String,
      default: uni.$u.props.divider.textColor },

    // 线条颜色
    lineColor: {
      type: String,
      default: uni.$u.props.divider.lineColor } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-link/props.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 文字颜色
    color: {
      type: String,
      default: uni.$u.props.link.color },

    // 字体大小，单位px
    fontSize: {
      type: [String, Number],
      default: uni.$u.props.link.fontSize },

    // 是否显示下划线
    underLine: {
      type: Boolean,
      default: uni.$u.props.link.underLine },

    // 要跳转的链接
    href: {
      type: String,
      default: uni.$u.props.link.href },

    // 小程序中复制到粘贴板的提示语
    mpTips: {
      type: String,
      default: uni.$u.props.link.mpTips },

    // 下划线颜色
    lineColor: {
      type: String,
      default: uni.$u.props.link.lineColor },

    // 超链接的问题，不使用slot形式传入，是因为nvue下无法修改颜色
    text: {
      type: String,
      default: uni.$u.props.link.text } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */
/*!********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-status-bar/props.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    bgColor: {
      type: String,
      default: uni.$u.props.statusBar.bgColor } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-popup/props.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否展示弹窗
    show: {
      type: Boolean,
      default: uni.$u.props.popup.show },

    // 是否显示遮罩
    overlay: {
      type: Boolean,
      default: uni.$u.props.popup.overlay },

    // 弹出的方向，可选值为 top bottom right left center
    mode: {
      type: String,
      default: uni.$u.props.popup.mode },

    // 动画时长，单位ms
    duration: {
      type: [String, Number],
      default: uni.$u.props.popup.duration },

    // 是否显示关闭图标
    closeable: {
      type: Boolean,
      default: uni.$u.props.popup.closeable },

    // 自定义遮罩的样式
    overlayStyle: {
      type: [Object, String],
      default: uni.$u.props.popup.overlayStyle },

    // 点击遮罩是否关闭弹窗
    closeOnClickOverlay: {
      type: Boolean,
      default: uni.$u.props.popup.closeOnClickOverlay },

    // 层级
    zIndex: {
      type: [String, Number],
      default: uni.$u.props.popup.zIndex },

    // 是否为iPhoneX留出底部安全距离
    safeAreaInsetBottom: {
      type: Boolean,
      default: uni.$u.props.popup.safeAreaInsetBottom },

    // 是否留出顶部安全距离（状态栏高度）
    safeAreaInsetTop: {
      type: Boolean,
      default: uni.$u.props.popup.safeAreaInsetTop },

    // 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
    closeIconPos: {
      type: String,
      default: uni.$u.props.popup.closeIconPos },

    // 是否显示圆角
    round: {
      type: [Boolean, String, Number],
      default: uni.$u.props.popup.round },

    // mode=center，也即中部弹出时，是否使用缩放模式
    zoom: {
      type: Boolean,
      default: uni.$u.props.popup.zoom },

    // 弹窗背景色，设置为transparent可去除白色背景
    bgColor: {
      type: String,
      default: uni.$u.props.popup.bgColor },

    // 遮罩的透明度，0-1之间
    overlayOpacity: {
      type: [Number, String],
      default: uni.$u.props.popup.overlayOpacity } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */
/*!*****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-toolbar/props.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否展示工具条
    show: {
      type: Boolean,
      default: uni.$u.props.toolbar.show },

    // 取消按钮的文字
    cancelText: {
      type: String,
      default: uni.$u.props.toolbar.cancelText },

    // 确认按钮的文字
    confirmText: {
      type: String,
      default: uni.$u.props.toolbar.confirmText },

    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: uni.$u.props.toolbar.cancelColor },

    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: uni.$u.props.toolbar.confirmColor },

    // 标题文字
    title: {
      type: String,
      default: uni.$u.props.toolbar.title } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */
/*!**********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-loading-icon/props.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否显示组件
    show: {
      type: Boolean,
      default: uni.$u.props.loadingIcon.show },

    // 颜色
    color: {
      type: String,
      default: uni.$u.props.loadingIcon.color },

    // 提示文字颜色
    textColor: {
      type: String,
      default: uni.$u.props.loadingIcon.textColor },

    // 文字和图标是否垂直排列
    vertical: {
      type: Boolean,
      default: uni.$u.props.loadingIcon.vertical },

    // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
    mode: {
      type: String,
      default: uni.$u.props.loadingIcon.mode },

    // 图标大小，单位默认px
    size: {
      type: [String, Number],
      default: uni.$u.props.loadingIcon.size },

    // 文字大小
    textSize: {
      type: [String, Number],
      default: uni.$u.props.loadingIcon.textSize },

    // 文字内容
    text: {
      type: [String, Number],
      default: uni.$u.props.loadingIcon.text },

    // 动画模式
    timingFunction: {
      type: String,
      default: uni.$u.props.loadingIcon.timingFunction },

    // 动画执行周期时间
    duration: {
      type: [String, Number],
      default: uni.$u.props.loadingIcon.duration },

    // mode=circle时的暗边颜色
    inactiveColor: {
      type: String,
      default: uni.$u.props.loadingIcon.inactiveColor } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */
/*!**************************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-swiper-indicator/props.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 轮播的长度
    length: {
      type: [String, Number],
      default: uni.$u.props.swiperIndicator.length },

    // 当前处于活动状态的轮播的索引
    current: {
      type: [String, Number],
      default: uni.$u.props.swiperIndicator.current },

    // 指示器非激活颜色
    indicatorActiveColor: {
      type: String,
      default: uni.$u.props.swiperIndicator.indicatorActiveColor },

    // 指示器的激活颜色
    indicatorInactiveColor: {
      type: String,
      default: uni.$u.props.swiperIndicator.indicatorInactiveColor },

    // 指示器模式，line-线型，dot-点型
    indicatorMode: {
      type: String,
      default: uni.$u.props.swiperIndicator.indicatorMode } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-line/props.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    color: {
      type: String,
      default: uni.$u.props.line.color },

    // 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等
    length: {
      type: [String, Number],
      default: uni.$u.props.line.length },

    // 线条方向，col-竖向，row-横向
    direction: {
      type: String,
      default: uni.$u.props.line.direction },

    // 是否显示细边框
    hairline: {
      type: Boolean,
      default: uni.$u.props.line.hairline },

    // 线条与上下左右元素的间距，字符串形式，如"30px"、"20px 30px"
    margin: {
      type: [String, Number],
      default: uni.$u.props.line.margin },

    // 是否虚线，true-虚线，false-实线
    dashed: {
      type: Boolean,
      default: uni.$u.props.line.dashed } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */
/*!*****************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-overlay/props.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否显示遮罩
    show: {
      type: Boolean,
      default: uni.$u.props.overlay.show },

    // 层级z-index
    zIndex: {
      type: [String, Number],
      default: uni.$u.props.overlay.zIndex },

    // 遮罩的过渡时间，单位为ms
    duration: {
      type: [String, Number],
      default: uni.$u.props.overlay.duration },

    // 不透明度值，当做rgba的第四个参数
    opacity: {
      type: [String, Number],
      default: uni.$u.props.overlay.opacity } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */
/*!*************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-gap/props.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 背景颜色（默认transparent）
    bgColor: {
      type: String,
      default: uni.$u.props.gap.bgColor },

    // 分割槽高度，单位px（默认30）
    height: {
      type: [String, Number],
      default: uni.$u.props.gap.height },

    // 与上一个组件的距离
    marginTop: {
      type: [String, Number],
      default: uni.$u.props.gap.marginTop },

    // 与下一个组件的距离
    marginBottom: {
      type: [String, Number],
      default: uni.$u.props.gap.marginBottom } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */
/*!***************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-badge/props.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否显示圆点
    isDot: {
      type: Boolean,
      default: uni.$u.props.badge.isDot },

    // 显示的内容
    value: {
      type: [Number, String],
      default: uni.$u.props.badge.value },

    // 是否显示
    show: {
      type: Boolean,
      default: uni.$u.props.badge.show },

    // 最大值，超过最大值会显示 '{max}+'
    max: {
      type: [Number, String],
      default: uni.$u.props.badge.max },

    // 主题类型，error|warning|success|primary
    type: {
      type: String,
      default: uni.$u.props.badge.type },

    // 当数值为 0 时，是否展示 Badge
    showZero: {
      type: Boolean,
      default: uni.$u.props.badge.showZero },

    // 背景颜色，优先级比type高，如设置，type参数会失效
    bgColor: {
      type: [String, null],
      default: uni.$u.props.badge.bgColor },

    // 字体颜色
    color: {
      type: [String, null],
      default: uni.$u.props.badge.color },

    // 徽标形状，circle-四角均为圆角，horn-左下角为直角
    shape: {
      type: String,
      default: uni.$u.props.badge.shape },

    // 设置数字的显示方式，overflow|ellipsis|limit
    // overflow会根据max字段判断，超出显示`${max}+`
    // ellipsis会根据max判断，超出显示`${max}...`
    // limit会依据1000作为判断条件，超出1000，显示`${value/1000}K`，比如2.2k、3.34w，最多保留2位小数
    numberType: {
      type: String,
      default: uni.$u.props.badge.numberType },

    // 设置badge的位置偏移，格式为 [x, y]，也即设置的为top和right的值，absolute为true时有效
    offset: {
      type: Array,
      default: uni.$u.props.badge.offset },

    // 是否反转背景和字体颜色
    inverted: {
      type: Boolean,
      default: uni.$u.props.badge.inverted },

    // 是否绝对定位
    absolute: {
      type: Boolean,
      default: uni.$u.props.badge.absolute } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */
/*!**************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-text/value.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  computed: {
    // 经处理后需要显示的值
    value: function value() {var

      text =



      this.text,mode = this.mode,format = this.format,href = this.href;
      // 价格类型
      if (mode === 'price') {
        // 如果text不为金额进行提示
        if (!/^\d+(\.\d+)?$/.test(text)) {
          uni.$u.error('金额模式下，text参数需要为金额格式');
        }
        // 进行格式化，判断用户传入的format参数为正则，或者函数，如果没有传入format，则使用默认的金额格式化处理
        if (uni.$u.test.func(format)) {
          // 如果用户传入的是函数，使用函数格式化
          return format(text);
        }
        // 如果format非正则，非函数，则使用默认的金额格式化方法进行操作
        return uni.$u.priceFormat(text, 2);
      }if (mode === 'date') {
        // 判断是否合法的日期或者时间戳
        !uni.$u.test.date(text) && uni.$u.error('日期模式下，text参数需要为日期或时间戳格式');
        // 进行格式化，判断用户传入的format参数为正则，或者函数，如果没有传入format，则使用默认的格式化处理
        if (uni.$u.test.func(format)) {
          // 如果用户传入的是函数，使用函数格式化
          return format(text);
        }if (format) {
          // 如果format非正则，非函数，则使用默认的时间格式化方法进行操作
          return uni.$u.timeFormat(text, format);
        }
        // 如果没有设置format，则设置为默认的时间格式化形式
        return uni.$u.timeFormat(text, 'yyyy-mm-dd');
      }if (mode === 'phone') {
        // 判断是否合法的手机号
        // !uni.$u.test.mobile(text) && uni.$u.error('手机号模式下，text参数需要为手机号码格式')
        if (uni.$u.test.func(format)) {
          // 如果用户传入的是函数，使用函数格式化
          return format(text);
        }if (format === 'encrypt') {
          // 如果format为encrypt，则将手机号进行星号加密处理
          return "".concat(text.substr(0, 3), "****").concat(text.substr(7));
        }
        return text;
      }if (mode === 'name') {
        // 判断是否合法的字符粗
        !(typeof text === 'string') && uni.$u.error('姓名模式下，text参数需要为字符串格式');
        if (uni.$u.test.func(format)) {
          // 如果用户传入的是函数，使用函数格式化
          return format(text);
        }if (format === 'encrypt') {
          // 如果format为encrypt，则将姓名进行星号加密处理
          return this.formatName(text);
        }
        return text;
      }if (mode === 'link') {
        // 判断是否合法的字符粗
        !uni.$u.test.url(href) && uni.$u.error('超链接模式下，href参数需要为URL格式');
        return text;
      }
      return text;
    } },

  methods: {
    // 默认的姓名脱敏规则
    formatName: function formatName(name) {
      var value = '';
      if (name.length === 2) {
        value = name.substr(0, 1) + '*';
      } else if (name.length > 2) {
        var char = '';
        for (var i = 0, len = name.length - 2; i < len; i++) {
          char += '*';
        }
        value = name.substr(0, 1) + char + name.substr(-1, 1);
      } else {
        value = name;
      }
      return value;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */
/*!********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-transition/props.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否展示组件
    show: {
      type: Boolean,
      default: uni.$u.props.transition.show },

    // 使用的动画模式
    mode: {
      type: String,
      default: uni.$u.props.transition.mode },

    // 动画的执行时间，单位ms
    duration: {
      type: [String, Number],
      default: uni.$u.props.transition.duration },

    // 使用的动画过渡函数
    timingFunction: {
      type: String,
      default: uni.$u.props.transition.timingFunction } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 466 */
/*!*************************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-transition/transition.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 34));


var _nvueAniMap = _interopRequireDefault(__webpack_require__(/*! ./nvue.ani-map.js */ 467));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} // 定义一个一定时间后自动成功的promise，让调用nextTick方法处，进入下一个then方法
var nextTick = function nextTick() {return new Promise(function (resolve) {return setTimeout(resolve, 1000 / 50);});}; // nvue动画模块实现细节抽离在外部文件

// 定义类名，通过给元素动态切换类名，赋予元素一定的css动画样式
var getClassNames = function getClassNames(name) {return {
    enter: "u-".concat(name, "-enter u-").concat(name, "-enter-active"),
    'enter-to': "u-".concat(name, "-enter-to u-").concat(name, "-enter-active"),
    leave: "u-".concat(name, "-leave u-").concat(name, "-leave-active"),
    'leave-to': "u-".concat(name, "-leave-to u-").concat(name, "-leave-active") };};var _default =










{
  methods: {
    // 组件被点击发出事件
    clickHandler: function clickHandler() {
      this.$emit('click');
    },

    // vue版本的组件进场处理
    vueEnter: function vueEnter() {var _this = this;
      // 动画进入时的类名
      var classNames = getClassNames(this.mode);
      // 定义状态和发出动画进入前事件
      this.status = 'enter';
      this.$emit('beforeEnter');
      this.inited = true;
      this.display = true;
      this.classes = classNames.enter;
      this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:



                // 标识动画尚未结束
                _this.$emit('enter');
                _this.transitionEnded = false;
                // 组件动画进入后触发的事件
                _this.$emit('afterEnter');
                // 赋予组件enter-to类名
                _this.classes = classNames['enter-to'];case 4:case "end":return _context.stop();}}}, _callee);})));

    },
    // 动画离场处理
    vueLeave: function vueLeave() {var _this2 = this;
      // 如果不是展示状态，无需执行逻辑
      if (!this.display) return;
      var classNames = getClassNames(this.mode);
      // 标记离开状态和发出事件
      this.status = 'leave';
      this.$emit('beforeLeave');
      // 获得类名
      this.classes = classNames.leave;

      this.$nextTick(function () {
        // 动画正在离场的状态
        _this2.transitionEnded = false;
        _this2.$emit('leave');
        // 组件执行动画，到了执行的执行时间后，执行一些额外处理
        setTimeout(_this2.onTransitionEnd, _this2.duration);
        _this2.classes = classNames['leave-to'];
      });
    },







































































    // 完成过渡后触发
    onTransitionEnd: function onTransitionEnd() {
      // 如果已经是结束的状态，无需再处理
      if (this.transitionEnded) return;
      this.transitionEnded = true;
      // 发出组件动画执行后的事件
      this.$emit(this.status === 'leave' ? 'afterLeave' : 'afterEnter');
      if (!this.show && this.display) {
        this.display = false;
        this.inited = false;
      }
    } } };exports.default = _default;

/***/ }),
/* 467 */
/*!***************************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-transition/nvue.ani-map.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  fade: {
    enter: { opacity: 0 },
    'enter-to': { opacity: 1 },
    leave: { opacity: 1 },
    'leave-to': { opacity: 0 } },

  'fade-up': {
    enter: { opacity: 0, transform: 'translateY(100%)' },
    'enter-to': { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 1, transform: 'translateY(0)' },
    'leave-to': { opacity: 0, transform: 'translateY(100%)' } },

  'fade-down': {
    enter: { opacity: 0, transform: 'translateY(-100%)' },
    'enter-to': { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 1, transform: 'translateY(0)' },
    'leave-to': { opacity: 0, transform: 'translateY(-100%)' } },

  'fade-left': {
    enter: { opacity: 0, transform: 'translateX(-100%)' },
    'enter-to': { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 1, transform: 'translateY(0)' },
    'leave-to': { opacity: 0, transform: 'translateX(-100%)' } },

  'fade-right': {
    enter: { opacity: 0, transform: 'translateX(100%)' },
    'enter-to': { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 1, transform: 'translateY(0)' },
    'leave-to': { opacity: 0, transform: 'translateX(100%)' } },

  'slide-up': {
    enter: { transform: 'translateY(100%)' },
    'enter-to': { transform: 'translateY(0)' },
    leave: { transform: 'translateY(0)' },
    'leave-to': { transform: 'translateY(100%)' } },

  'slide-down': {
    enter: { transform: 'translateY(-100%)' },
    'enter-to': { transform: 'translateY(0)' },
    leave: { transform: 'translateY(0)' },
    'leave-to': { transform: 'translateY(-100%)' } },

  'slide-left': {
    enter: { transform: 'translateX(-100%)' },
    'enter-to': { transform: 'translateY(0)' },
    leave: { transform: 'translateY(0)' },
    'leave-to': { transform: 'translateX(-100%)' } },

  'slide-right': {
    enter: { transform: 'translateX(100%)' },
    'enter-to': { transform: 'translateY(0)' },
    leave: { transform: 'translateY(0)' },
    'leave-to': { transform: 'translateX(100%)' } },

  zoom: {
    enter: { transform: 'scale(0.95)' },
    'enter-to': { transform: 'scale(1)' },
    leave: { transform: 'scale(1)' },
    'leave-to': { transform: 'scale(0.95)' } },

  'fade-zoom': {
    enter: { opacity: 0, transform: 'scale(0.95)' },
    'enter-to': { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 1, transform: 'scale(1)' },
    'leave-to': { opacity: 0, transform: 'scale(0.95)' } } };exports.default = _default;

/***/ }),
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */
/*!*********************************************************************************!*\
  !*** D:/uniapp/myUniapp/uni_modules/uview-ui/components/u-safe-bottom/props.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {} };exports.default = _default;

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map