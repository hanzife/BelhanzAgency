$(document).ready(function () {
    //Random order Hero Cards on page load
    var cards = $(".ProfessionCards");
    for (var i = 0; i < cards.length; i++) {
        var target = Math.floor(Math.random() * cards.length - 1) + 1;
        var target2 = Math.floor(Math.random() * cards.length - 1) + 1;
        cards.eq(target).before(cards.eq(target2));
    }
    //Random order Top Right Image Every 2s
    var images = ['construction.jpg', 'interiordesign.jpg', 'renovation.jpg', 'jason-briscoe-UV81E0oXXWQ-unsplash.jpg'];
    var index = 0;

    //auto change
    function nextBackground() {
        $('#background').css({ 'background-image': 'url(../Public/Images/' + images[Math.floor(Math.random() * images.length)] + ')' });
        timer = setTimeout(nextBackground, 2000);
    }
    timer = setTimeout(nextBackground, 2000);
    $('#background').css('background', images[0]);
    //change to next on button click and stop timer
    var nextIndex = function (index, length) {
        return ((index + 1) % length)
    };
    $('#nextbtn').click(function () {
        clearTimeout(timer);
        index = nextIndex(index, images.length);
        $('#background').css({ 'background-image': 'url(../Public/Images/' + images[index] + ')' });

    });
    //change to prev on button click and stop timer
    var previousIndex = function (index, length) {
        if (index <= 0) {
            return length - 1; // cycle backwards to the last image
        } else {
            return index - 1;
        }
    }
    $('#previousbtn').click(function () {
        clearTimeout(timer);
        index = previousIndex(index, images.length);
        $('#background').css({ 'background-image': 'url(../Public/Images/' + images[index] + ')' });
    });

    // Real Estate
    var Estateimages = ['PANO_20160513_171231.jpg', 'fbaa6d73-1cba-4ce4-9279-f3dccc1f367e.jpg', 'renovation.jpg', 'jason-briscoe-UV81E0oXXWQ-unsplash.jpg'];
    var index = 0;
    // 
    //change to next on button click and stop timer
    var nextIndex = function (index, length) {
        return ((index + 1) % length)
    };
    $('#nextRental_btn').click(function () {
        clearTimeout(timer);
        index = nextIndex(index, Estateimages.length);
        $('#RentalsImages').css({ 'background-image': 'url(../Public/Images/' + Estateimages[index] + ')' });

    });
    //change to prev on button click and stop timer
    var previousIndex = function (index, length) {
        if (index <= 0) {
            return length - 1; // cycle backwards to the last image
        } else {
            return index - 1;
        }
    }
    $('#previousRental_btn').click(function () {
        clearTimeout(timer);
        index = previousIndex(index, Estateimages.length);
        $('#RentalsImages').css({ 'background-image': 'url(../Public/Images/' + Estateimages[index] + ')' });
    });


    //Sooth Jump On Page
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            // $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
});
