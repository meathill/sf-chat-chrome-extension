/**
 * Created by meathill on 2017/7/12.
 */

console.log('i\'m waiting...');

chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
  console.log(sender.tab ? 'from tab: ' + sender.tab.url : 'from extension');
  console.log(request);
  if (request) {
    sendResponse('hello, i know');
  }
});