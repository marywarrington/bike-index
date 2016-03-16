$(document).ready(function() {
  $('.showBikes').hide();
  $('#searchBikes').click(function() {
    $('#testBike').empty();
    var oneWeekAgo = new Date();
    oneWeekAgo = Math.floor(oneWeekAgo.setDate(oneWeekAgo.getDate() - 7)/1000);
    var today = Math.floor(Date.now()/1000);

    var zipcode = $('#zipcode').val();
    var color = $('#color').val();
    $('#zipcode').val("");
    $('#color').val("");

    $('.showBikes').show();
    $.get("https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=15&colors=" + color + "&proximity=" + zipcode + "&proximity_square=500&stolen_before=" + today + "&stolen_after=" + oneWeekAgo + "&access_token=api_key").then(function(response) {
      $('#location').text(zipcode);

      for (i = 0; i < response.bikes.length; i++) {

        $('#testBike').append('<li>' + response.bikes[i].title + ", " + response.bikes[i].frame_colors.join() + '</li>');

      }

      // https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=15&colors=red&proximity=97214&proximity_square=500&stolen_before=1458086400&stolen_after=1457481600&access_token=api_key



    }).fail(function(error) {
        $('.showBikes').text(error.responseJSON.message);
    });
  });


});
