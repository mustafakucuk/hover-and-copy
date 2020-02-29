$(document).ready(function () {

    function isUrlValid(url) {
        var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
        return regexp.test(url);
    }

    var inputForCopy = $('<input id="input_for_copy">');

    $('body').append(inputForCopy)

    inputForCopy.css({
        position: 'absolute',
        left: -9999
    });

    $('body').on('mouseenter', 'a, img', function (e) {
        var hoverTarget = $(e.target);
        var hoverLink;

        if (hoverTarget.is('img')) {
            hoverLink = hoverTarget.attr('src');
        } else {
            hoverLink = hoverTarget.attr('href');
            if (typeof hoverLink === 'undefined') {
                hoverLink = hoverTarget.closest('a').attr('href');
            }
        }

        if (!isUrlValid(hoverLink)) {
            hoverLink = window.location.origin + '/' + hoverLink;
        }

        inputForCopy.focus({
            preventScroll: true,
        });

        inputForCopy.val(hoverLink);
        inputForCopy.select();

    }).on('mouseleave', 'a, img', function () {
        inputForCopy.blur();
    })
});