/**
 * Main JS file for GhostFrame behaviours
 */

document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
        $(".tag-photos .content-temp img:first-of-type").each(function() {
            var background_src = $(this).attr('src');
            var post = $(this).closest(".tag-photos");
            var temp_content = $(post).find(".content-temp");

            var background = new Image();
            background.src = background_src;
            background.onload = function() {
                $(temp_content).remove();
                $(post).css({'opacity': 0, 'background-image': 'url(' + background_src + ')'}).animate({ opacity: 1 }, { duration: 500 });
            }
        });
    }
}
