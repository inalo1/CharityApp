$(document).ready(() => {
    function searchCharities(charity) {
        // Querying the charities api for the selected Charity, the ?app_id parameter is required, but can equal anything
        $.ajax({
            url: "/searchCharity/" + charity,
            method: "GET",
        }).then((response) => {
            // Printing the entire object to console
            console.log(response);

            for (let i = 0; i < response.data.length; i++) {
                charityName = response.data[i].charityName;
                charityCity = response.data[i].city;
                charityState = response.data[i].state;
                charityZip = response.data[i].zipCode;
                charityUrl = response.data[i].url;
                charityDonation = response.data[i].donationUrl;
                charityCategory = response.data[i].category;
                charityurl = response.data[i].url;

                let card = $(
                    `<div class="card-deck mx-1" style="width: 18rem;">
                    <img class="card-img-top" src="img/charity-love.png" alt="Card image cap">
                    <div class="card card-body " >
                    <h3> ${charityName} <span class="rounded"</span></h3>
                    <h6>Charity Location</h6>
                    <p>${charityCity}, ${charityState} ${charityZip}</p>
                    <h6>Charity Category</h6>
                    <p>${charityCategory}</p>
                    <p><a href=${charityUrl} target="_blank">Charity URL</a></p>
                    <h6>Make a Donation</h6>
                    <p><a href=${charityDonation} target="_blank">Donation URL</a></p>
                    </div>
                    </div>
                    `
                );
                console.log(card);
                $("#result").append(card);
                //$("#result").empty();
                // card.appendTo("#result");
            }
        });

        //
        //$("#charity-div").append(charityURL, charityCity, charityName, charitydonation, goToCharity);
        // Empty the contents of the Charity-div, append the new charity content
    }
    // Event handler for user clicking the select-charity button
    $("#select-charity").on("click", function(event) {
        // Preventing the button from trying to submit the form
        event.preventDefault();
        // Storing the charity name
        var inputcharity = $("#charity-input")
            .val()
            .trim();

        // Running the searchCharities function(passing in the Charity as an argument)
        $("#charity-div").empty();
        searchCharities(inputcharity);
    });
});