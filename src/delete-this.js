const deleteThis = () => {
  document.querySelectorAll('a[href="#"]').forEach(el => {
    if ( el.innerText === 'Play' ) {
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
        messageChain.parentElement.removeChild( messageChain );
      }
    }
 });
}

setInterval( deleteThis, 100 );