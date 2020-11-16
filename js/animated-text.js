$(function () {

    var words = [' Welcome to the wonderful world of photography!', 'Click I♥SPRING to see beautiful "lively" photos!',
        'Click I♥SUMMER to see warm "sunny" photos!', ' Click I♥AUTUMN to see "multicolored" photos!',
        'Click I♥WINTER to see bright "frozen" photos!', 'Scroll down to read seasonal photography tips!!!'],
        part,
        i = 0,
        offset = 0,
        len = words.length,
        forwards = true,
        skip_count = 0,
        skip_delay = 350,
        speed = 8;
    var animatedWord = function () {
        setInterval(function () {
            if (forwards) {
                if (offset >= words[i].length) {
                    ++skip_count;
                    if (skip_count == skip_delay) {
                        forwards = false;
                        skip_count = 0;
                    }
                }
            }
            else {
                if (offset == 0) {
                    forwards = true;
                    i++;
                    offset = 0;
                    if (i >= len) {
                        i = 0;
                    }
                }
            }
            part = words[i].substr(0, offset);
            if (skip_count == 0) {
                if (forwards) {
                    offset++;
                }
                else {
                    offset--;
                }
            }
            $('.animated-text').text(part);
        }, speed);
    };

    $(document).ready(function () {
        animatedWord();
    });


});