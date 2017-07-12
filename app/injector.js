/**
 * Created by meathill on 2017/7/12.
 */
console.log('ok, i\'m in');

import * as config from './config/mutation';

const filter = Array.prototype.filter;

let target = document.querySelector('.live__chat-box');
let observer = new MutationObserver( mutations => {
  let items = mutations.reduce((memo, mutation) => {
    if (mutation.type !== 'childList') {
      return memo;
    }
    return memo.concat(filter.call(mutation.addedNodes, node => {
      return node.className === 'live__chat-item';
    }));
  }, []);
  items = items.map( item => {
    return item.innerText;
  });
  chrome.runtime.sendMessage(items, response => {
    console.log(response);
  });
});
observer.observe(target, config);

