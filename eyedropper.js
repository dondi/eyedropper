$(function () {
    var $canvas = $("canvas.eyedropper"),
        ctx = $canvas[0].getContext('2d'),

        loadCanvas = function ($canvas, ctx, image) {
            $canvas.attr({
                width: image.width,
                height: image.height
            }).css({
                width: image.width + 'px',
                height: image.height + 'px'
            });
            ctx.drawImage(image, 0, 0);
        },

        img = new Image();

    img.addEventListener('load', function () {
        loadCanvas($canvas, ctx, img);
    }, false);

    img.src = 'https://40.media.tumblr.com/a391a1b4b46dd6b498d379e50f96ecbc/tumblr_nkcjuq8Tdr1tnacy1o1_500.jpg';
});
