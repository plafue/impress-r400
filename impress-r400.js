var blackOverlay = document.createElement('div'),  overlayOn = false;
blackOverlay.setAttribute('id','blackOverlay');
blackOverlay.style.backgroundColor = "black";
blackOverlay.style.width           = "100%";
blackOverlay.style.height          = "100%";
blackOverlay.style.position        = 'absolute';

document.addEventListener('keyup',
  function(e) {
      if (e.keyCode == 66) {
        (overlayOn) ? blackOverlay.remove() : document.body.appendChild(blackOverlay);
        overlayOn = !overlayOn ;
     }
  }
, false);
