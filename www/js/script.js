'use strict';

function ShowHideContent(spoiler) {
    if (spoiler.style.display != 'none') {
        spoiler.style.display = 'none';
    }
    else {
        spoiler.style.display = 'block';
    }
}
function HideContent(spoiler) {
    spoiler.style.display = 'none';
}