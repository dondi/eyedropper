$(function () {
    var ctx = $("canvas.eyedropper")[0].getContext('2d');
    var img = new Image();
    img.addEventListener('load', function () {
        ctx.drawImage(img, 0, 0);
    }, false);
    img.src = 'https://40.media.tumblr.com/a391a1b4b46dd6b498d379e50f96ecbc/tumblr_nkcjuq8Tdr1tnacy1o1_500.jpg';
});
