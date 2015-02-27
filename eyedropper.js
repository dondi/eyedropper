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

    $canvas.mousemove(function (event) {
        var offset = $(this).offset(),
            x = event.pageX - Math.round(offset.left),
            y = event.pageY - offset.top,
            data = ctx.getImageData(x, y, 1, 1).data;

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
    });

    img.src = 'images/dress.jpg';
});
