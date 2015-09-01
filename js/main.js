/**
 * Created by YanTotal on 01.09.15.
 */
$( document ).ready(function() {
    function slide(el, val) {
        $(el).find(".slider__block--value").css("width", val + "%");
    }
    $(".sliderjs").click(function(e) {
        var slider_width = $(this).width();
        var posX = $(this).position().left;
        var value_px = e.pageX - posX;
        var value_percent = value_px/slider_width*100;
        var value = Math.round(value_percent);
        slide(this, value);
    });
    $(".slider__labels label").click(function() {
        var value = $(this).attr("data-skill");
        var slider = $(this).parent().prev();
        slide(slider, value);
    });
});