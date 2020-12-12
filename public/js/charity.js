$(document).ready(() => {
    function searchCharities(charity) {
        // Querying the charities api for the selected Charity, the ?app_id parameter is required, but can equal anything
        $.ajax({
            url: "/searchCharity/" + charity,
            method: "GET"
        }).then((searchres) => {
            // Printing the entire object to console
            console.log(searchres);

            for (let i = 0; i < searchres.length; i++) {
                charityName = searchres.data[i].charityName;
                charityCity = searchres.data[i].city;
                charityState = searchres.data[i].state;
                charityZip = searchres.data[i].zipCode;
                charityUrl = searchres.data[i].url;
                charityDonation = searchres.data[i].donationURL;
                charityCategory = searchres.data[i].category;
                charityurl = searchres.data[i].url;

                let $card = $(
                    `<div class="card align-center mx-auto bg-light" style="width: 25rem;">
                <div class="card card-body " >
                <h3> ${charityName} <span class="rounded"</span></h3>
                <p>${charityCity}, ${charityState} ${charityZip}</p>
                <p>${charityCategory}</p>
                <p><a href="${charityUrl} target="_blank">URL</a></p>
                <p><a href="${charityDonation} target="_blank">Donation URL</a></p>
                </div>
                </div>`
                );
                $card.appendTo("#result");
            }
        });

        // $("#result").empty();
        //$("#charity-div").append(charityURL, charityCity, charityName, charitydonation, goToCharity);
        // Empty the contents of the Charity-div, append the new charity content
        //$("#charity-div").empty();
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
});