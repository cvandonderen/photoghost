/**
 * Main JS file for GhostFrame behaviours
 */

document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
        var main_image = $('img[alt="main-image"]');
        var article = $("article");
        if (!$(main_image).length) {
            $(article).addClass("no-main");
        } else {
            var background_src = $(main_image).attr('src');
            var header = $(".post-head");
            var content = $(".post-content");
            var first_paragraph = $(content).find("p").first();

            var background = new Image();
            background.src = background_src;
            background.onload = function() {
                $(main_image).remove();
                $(article).addClass("main");
                $(header).css({'background-image': 'url(' + background_src + ')'});
                if ($(first_paragraph).length && $(first_paragraph).text() === "" && !$(first_paragraph).children().length) {
                    $(first_paragraph).remove();
                }
            }
        }
    }
}
