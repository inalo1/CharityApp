$(document).ready(() => {
    // This file just does a GET request to for the currently signed in user so it can populate a userinfo card.
    // and updates the HTML on the page
    $.get("/api/user_data").then(data => {
        $(".card-title").text(data.email);
        $(".card-title").text(data.email);
        $(".card-title").text(data.email);
        $(".card-title").text(data.email);
        $(".card-title").text(data.email);
    });
});