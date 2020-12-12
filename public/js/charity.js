function searchCharities(charity) {
    var APIKey = "8bae79f865982e4a3535b3acdc4a5109";
    // Querying the charities api for the selected Charity, the ?app_id parameter is required, but can equal anything
    $.ajax({
        url: "/searchCharity/" + charity,
        method: "GET"
    }).then((response) => {
        // Printing the entire object to console
        console.log(response);

        for (let i = 0; i < array.length; i++) {
            charityName = response.data[i].charityName;
            charityCity = response.data[i].city;
            charityState = response.data[i].state;
            charityZip = response.data[i].zipCode;
            charityUrl = response.data[i].url;
            charityDonation = response.data[i].donationURL;
            charityCategory = response.data[i].category;
            charityurl = response.data[i].url;

        }

        // $("#result").empty();
        let $card = $(
            `<div class="card align-center mx-auto bg-light" style="width: 25rem;">
            <div class="card card-body " >
            <h3> ${charityName} <span class="rounded"</span></h3>
            <p>${charityCity}, ${charityState} ${charityZip}</p>
            <p>${charityCategory}</p>
            <p><a href="${charityurl} target="_blank">URL</a></p>
            <p><a href="${charityDonation} target="_blank">Donation URL</a></p>
            </div>
            </div>`
        );

        $card.appendTo("#result");


        //$("#charity-div").append(charityURL, charityCity, charityName, charitydonation, goToCharity);
        // Empty the contents of the Charity-div, append the new charity content
        //$("#charity-div").empty();

    });
}


// Event handler for user clicking the select-charity button
$("#select-charity").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the charity name
    var inputcharity = $("#charity-input").val().trim();

    // Running the searchCharities function(passing in the Charity as an argument)
    searchCharities(inputcharity);

});