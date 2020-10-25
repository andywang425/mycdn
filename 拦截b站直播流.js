// ==UserScript==
// @name         拦截直播流
// @namespace    andywang425
// @version      0.1
// @description  自用脚本
// @include      /^https?:\/\/live\.bilibili\.com\/(blanc\/)?\d+.*$/
// @grant        unsafeWindow
// @license      WTFPL
// @run-at       document-start
// ==/UserScript==

(function () {
    const originFetch = window.fetch;
    unsafeWindow.fetch = (...arg) => {
        if (arg[0].indexOf('bilivideo.com') > -1) return;
        else return originFetch(...arg);
    }
})();