(function () {
    // check for jQuery, load off google cdn if not available
    if (!window.jQuery) {
        var done = false;
        var script = document.createElement('script');
        script.src = '//ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js';
        script.onload = script.onreadystatechange = function () {
            if (!done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
                done = true;
                checkLineLength();
            }
        };
        document.getElementsByTagName('head')[0].appendChild(script);
    } else {
        checkLineLength();
    }

    function checkLineLength() {
        (window.myBookmarklet = function () {
            var elements = 'h1, h2, h3, h4, h5, h6, p, li, dt, dd';

            $(elements).on('mouseover.red', function () {
                // outline text block on mouse over
                $(this).css({
                    outline: '1px solid red'
                })

            }).on('mouseleave.red', function () {
                // remove outline on text block on mouse leave
                $(this).removeAttr('style')

            }).on('click.red', function () {
                // the text block
                var text = $(this).text();

                // characters before 45
                var before = text.substring(0, 45);

                // characters between 45 and 75
                var target = text.substring(45, 75);

                // characters after 75
                var after = text.substring(75, text.length);

                // build a new text block
                var newTextLine = before + '<span style="color: red;">' + target + '</span>' + after;

                // replace the text block with our new one
                $(this).html(newTextLine);
            });
        })();
    }
})();
