chrome.pageAction.onClicked.addListener(tab => {
  chrome.tabs.get( tab.id, () => {
    chrome.tabs.sendMessage( tab.id, { toggle: true } );
  });
});

chrome.runtime.onMessage.addListener(( { detected }, { tab } ) => {
  chrome.pageAction.show( tab.id );

  chrome.pageAction.setTitle({
    tabid: tab.id,
    text:  detected.toString()
  });
});