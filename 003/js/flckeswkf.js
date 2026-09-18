
document.addEventListener('DOMContentLoaded', function () {

    function flickerEffect() {
        const flickerDiv = document.createElement('div');

        flickerDiv.style.position = 'fixed';
        flickerDiv.style.inset = '0';
        flickerDiv.style.zIndex = '999999999';
        flickerDiv.style.pointerEvents = 'none';

        document.body.appendChild(flickerDiv);

        let flicker = true;

        const flickerInterval = setInterval(function () {
            flickerDiv.style.backgroundColor = flicker
                ? 'black'
                : 'white';

            flicker = !flicker;
        }, 80);

        setTimeout(function () {
            clearInterval(flickerInterval);
            flickerDiv.remove();
        }, 4000);
    }

    // Flicker whenever the body/page is clicked
    document.body.addEventListener('click', function () {
        flickerEffect();
    });

});
