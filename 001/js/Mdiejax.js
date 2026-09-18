
      const fullscreenBtn = document.getElementById("mycanvas");

const div1 = document.getElementById("chromealerts");
const div2 = document.getElementById("logindiv");

const fullscreenArea = document.getElementById("mycanvas");

fullscreenBtn.addEventListener("click", () => {
    fullscreenArea.requestFullscreen();
});

document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
        // Fullscreen ON → hide both divs
        div1.style.display = "none";
        div2.style.display = "none";
    } else {
        // Fullscreen OFF → show both divs automatically
        div1.style.display = "";
        div2.style.display = "";
        div2.style.display = "block";
    }
});
     
     
      document.addEventListener("fullscreenchange", () => {
    const isFullscreen = !!document.fullscreenElement;

    div1.classList.toggle("fullscreen-hidden", isFullscreen);
    div2.classList.toggle("fullscreen-hidden", isFullscreen);
});
     
$('body').one('mouseover', function () {
$('.live-chat-message').each(function (index) {

    var message = $(this);

    setTimeout(function () {
        message.addClass('show');
    }, (index + 1) * 2000);

});
});