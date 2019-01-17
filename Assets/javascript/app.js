$('#button').on('click', function () {
  var hboShow = $(this).attr("data-show");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + hboShow
    + "&api_key=NErysb7HE9FZPTretbtJV2G2GQ7IwTtH";
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(queryURL);
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var showImage = $("<img>");
        hboShow.attr("src", results[i].images.fixed_height.url);
        console.log(hboShow)

        gifDiv.prepend(p);
        gifDiv.prepend(showImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
});
