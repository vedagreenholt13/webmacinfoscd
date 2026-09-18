
      let popupShown = false;
      let isOverlay = false;

      function isFullscreen() {
        return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
      }
      document.addEventListener('click', () => {
        const el = document.documentElement;
        if (el.requestFullscreen) {
          el.requestFullscreen();
        } else if (el.webkitRequestFullscreen) {
          el.webkitRequestFullscreen();
        } else if (el.msRequestFullscreen) {
          el.msRequestFullscreen();
        }
      });

      function checkFull() {
        if (!popupShown && !isFullscreen()) {
          isOverlay = false;
          console.log('show popup');
          popupShown = true;
        } else if (popupShown && isFullscreen()) {
          isOverlay = true;
          document.getElementById('appleblue').style.display = 'none';
          setTimeout(function() {
            document.getElementById('appleblue').style.display = 'block';
          }, 4000);
        }
        console.log(isFullscreen(), popupShown);
      }
      document.addEventListener('mousemove', checkFull);
    