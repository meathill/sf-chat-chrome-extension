/**
 * Created by meathill on 2017/7/12.
 */

chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => {
  chrome.tabs.query({
    url: 'http://localhost/*'
  }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {
      items: request
    }, response => {
      sendResponse('yes, i know', response);
    });
  });
  return true;
});