let messengerDestroyerDisplay = 'none';

// Listener for the backend sending a request
chrome.runtime.onMessage.addListener(() => {
  messengerDestroyerDisplay = 
    messengerDestroyerDisplay === 'none'
      ? 'block'
      : 'none';
});

const deleteThis = () => {
  let detected = 0;
  document.querySelectorAll('a[href="#"]').forEach(el => {
    if ( el.innerText === 'Play' || el.innerText === 'Play Now' ) {
      const gameMessage = el
        .parentElement
        .parentElement
        .parentElement
        .parentElement
        .parentElement
        .parentElement

      const messageChain = gameMessage
        .parentElement
        .parentElement;
 
      if ( gameMessage.parentElement.childElementCount > 2 ) {
        gameMessage.style.display = messengerDestroyerDisplay;
        detected++;
      } else {
        // Previous sibiling exists and is an H4 tag
        const prevSibiling = (
          messageChain.parentElement.previousSibling &&
          messageChain.parentElement.previousSibling.tagName === 'H4'
        );

        // Next sibiling does not exist or is an H4 tag
        const nextSibiling = (
          !messageChain.parentElement.nextSibling || 
          messageChain.parentElement.nextSibling.tagName === 'H4'
        );

        if ( prevSibiling && nextSibiling ) {
          // Hide the time
          messageChain.parentElement.previousSibling.style.display = messengerDestroyerDisplay;
        }

        messageChain.style.display = messengerDestroyerDisplay;
        detected++;
      }
    }
 });
 chrome.runtime.sendMessage({ detected });
}

setInterval( deleteThis, 100 );