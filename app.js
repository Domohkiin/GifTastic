$("button").on("click", function() {
	event.preventDefault();

var games = ["Destiny", "Overwatch", "Call of Duty", "Dark Souls", 
"Pokemon", "Bloodborne", "Bioshock", "The Last Of Us", "Until Dawn", "Beyond Two Souls",
"Skyrim", "Oblivion", "Fallout", "Dishonored", "Dead Space", "Portal", "The Witcher"];

function displayGameInfo(){

	var game = $(this).attr("data-name");

	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + game + "&api_key=dc6zaTOxFJmzC";

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(queryURL);
    
      var gameDiv = $("<div class='game'>");

      var results = response.data;

      for (var i = 0; i < results.length; i++) {
      	var gameDiv = $("<div>");

      	var p = $("<p>").text("Rating: " + results[i].rating);

      	var gameImage = $("<img>");

      	gameImage.attr("src", results[i].images.fixed_height.url);

      	gameDiv.append(p);
      	gameDiv.append(gameImage);

      	$("gifs-appear-here").prepend(gameDiv);
      };

      
    }); 
}
});

function renderButtons() {
	$("#buttons-view").empty();

	for (var i = 0; i < games.length; i++) {

		var a = $("<button>");

		a.addClass("game");

		a.attr("data-name", games[i]);

		a.text(games[i]);

		$("#buttons-view").append(a);
	}
}

$("#add-game").on("click", function(event) {
	event.preventDefault();

	var game = $("#game-input").val().trim();

	game.push(game);

	renderButtons();
});




