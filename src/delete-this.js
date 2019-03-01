const deleteThis = () => {
  document.querySelectorAll('a[href="#"]').forEach(el => {
    if ( el.innerText.includes('Play') ) {
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
        gameMessage.parentElement.removeChild( gameMessage );
      } else {
        if ( 
          messageChain.parentElement.previousSibling &&
          messageChain.parentElement.nextSibling &&
          messageChain.parentElement.previousSibling.tagName === 'H4' &&
          messageChain.parentElement.nextSibling.tagName === 'H4'
          ) {

          messageChain
          .parentElement
          .parentNode
          .removeChild( messageChain.parentElement.previousSibling );
        }

        messageChain.parentElement.removeChild( messageChain );
      }
    }
 });
}

setInterval( deleteThis, 100 );