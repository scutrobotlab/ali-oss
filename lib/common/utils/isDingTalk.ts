export function isDingTalk() {
  if (!window) return false;
  if (process.browser && window.navigator.userAgent.toLowerCase().includes('aliapp(dingtalk')) {
    return true;
  }
  return false;
}
