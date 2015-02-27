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

        displayPixelInfo = function (x, y) {
            var data = ctx.getImageData(x, y, 1, 1).data;

            $(".level.red").text(data[0]);
            $(".level.green").text(data[1]);
            $(".level.blue").text(data[2]);
            $(".level.pixel").text(data[0] + " " + data[1] + " " + data[2]);

            $(".swatch.red").css({
                'background-color': "rgb(" + data[0] + ", 0, 0)"
            });

            $(".swatch.green").css({
                'background-color': "rgb(0, " + data[1] + ", 0)"
            });

            $(".swatch.blue").css({
                'background-color': "rgb(0, 0, " + data[2] + ")"
            });

            $(".swatch.pixel").css({
                'background-color': "rgb(" + data[0] + ", " + data[1] +", " + data[2] + ")"
            });
        },

        img = new Image();

    img.addEventListener('load', function () {
        loadCanvas($canvas, ctx, img);
    }, false);

    $canvas.mousemove(function (event) {
        var offset = $(this).offset();
        displayPixelInfo(event.pageX - Math.round(offset.left), event.pageY - offset.top);
    });

    $canvas.bind('touchmove', function (event) {
        var offset = $(this).offset(),
            touch = event.changedTouches[0];

        event.preventDefault();
        event.stopPropagation();
        displayPixelInfo(touch.pageX - Math.round(offset.left), touch.pageY - offset.top);
    });

    img.src = 'images/dress.jpg';
});
