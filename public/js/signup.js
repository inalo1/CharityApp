$(document).ready(() => {
    // Getting references to our form and input
    const signUpForm = $("form.signup");
    const emailInput = $("input#email-input");
    const passwordInput = $("input#password-input");
    const firstnameInput = $("input#firstname-input");
    const lastnameInput = $("input#lastname-input");
    const locationInput = $("input#location-input");
    const usernameInput = $("input#username-input");

    // When the signup button is clicked, we validate the email and password are not blank
    signUpForm.on("submit", event => {
        event.preventDefault();
        const userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            firstname: firstnameInput.val().trim(),
            lastname: lastnameInput.val().trim(),
            location: locationInput.val().trim(),
            username: usernameInput.val().trim()
        };
        if (!userData.email ||
            !userData.password ||
            !userData.firstname ||
            !userData.lastname ||
            !userData.location ||
            !userData.username
        ) {
            return;
        }
        // If we have an email and password, run the signUpUser function
        signUpUser(
            userData.email,
            userData.password,
            userData.firstname,
            userData.lastname,
            userData.location,
            userData.username
        );
        emailInput.val("");
        passwordInput.val("");
        firstnameInput.val("");
        lastnameInput.val("");
        locationInput.val("");
        usernameInput.val("");
    });

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpUser(
        email,
        password,
        firstname,
        lastname,
        location,
        username
    ) {
        $.post("/api/signup", {
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname,
                location: location,
                username: username
            })
            .then(() => {
                window.location.replace("/members");
                // If there's an error, handle it by throwing up a bootstrap alert
            })
            .catch(handleLoginErr);
    }

    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors

    function handleLoginErr(err) {
        $("#alert .msg").text(err.responseJSON);
        $("#alert").fadeIn(500);
    }
});