const deleteThis = () => {
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
        gameMessage.parentElement.removeChild( gameMessage );
      } else {
        // Previous sibiling is exists and is an H4 tag
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