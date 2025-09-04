export function isDingTalk() {
  if (process.browser && global.navigator.userAgent.toLowerCase().includes('aliapp(dingtalk')) {
    return true;
  }
  return false;
}
