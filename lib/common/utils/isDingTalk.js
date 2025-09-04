"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDingTalk = void 0;
function isDingTalk() {
    if (process.browser && global.navigator.userAgent.toLowerCase().includes('aliapp(dingtalk')) {
        return true;
    }
    return false;
}
exports.isDingTalk = isDingTalk;
