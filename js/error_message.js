
function displayError(message) {

    if (!message) {
        message = "An error apeared"
    }

    return `<div class="error">${message}</div>`;
}


function displayErrorCarousel(message) {

    if (!message) {
        message = "An error apeared"
    }

    return `<div class=".error-message_carousel">${message}</div>`;
}
