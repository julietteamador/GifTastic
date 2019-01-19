var shows = ["Big Little Lies", "Sharp Objects", "Game of Thrones", "Westworld", "True Detective"];


$('.button').on('click', function (event) {
  event.preventDefault()
  var currentElement = $(this);
  var hboShow = $(this).attr("data-show");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + hboShow
    + "&api_key=NErysb7HE9FZPTretbtJV2G2GQ7IwTtH&limit=10";
  console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(queryURL);
      var results = response.data;
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var showImage = $("<img>");
        showImage.attr("src", results[i].images.original_still.url);
        showImage.attr('data-moving', results[i].images.fixed_height.url );
        showImage.attr('data-still', results[i].images.original_still.url);
        showImage.attr('isStill', 'true')
        showImage.addClass('gif')
        console.log(hboShow)

        gifDiv.prepend(p);
        gifDiv.prepend(showImage);

        $("#gifs-appear-here").prepend(gifDiv);
      }
    });
});

$(document).on('click', '.gif', function(){

    if($(this).attr('isStill') == 'true'){
      $(this).attr('src', $(this).attr('data-moving'))
      $(this).attr('isStill', 'false')
    }else {
      $(this).attr('src', $(this).attr('data-still'))
      $(this).attr('isStill', 'true')
    }
})

$(document).on("click", "#add-show", function (event) {
  event.preventDefault();

  // get the showname from input box call that var showName

  var showName = $('#show-input').val();

  // create a new button
var newButton = $('<button>');

console.log(newButton);


  // set the data-show to the showName .attr('data-show')


// add the button class to the new button .addClass('button') so that it calls your onClick method

  // make the button text the showName .text()

  // target your show buttons div and append the new butto to that div .append()


});