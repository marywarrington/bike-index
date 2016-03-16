$(document).ready(function() {
  $('.showBikes').hide();
  $('#searchBikes').click(function() {
    var apiRoot = "https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=15&";
    var zipcode = "poximity=" + $('#zipcode').val();
    var color = "colors=" + $('#color').val();
    $('#zipcode').val("");
    $('#color').val("");
    $('.showBikes').show();
    $.get(apiRoot + color + zipcode + '&proximity_square=16&access_token=api_key').then(function(response) {
      for (i = 0; i < response.bikes.length; i++) {

        $('#testBike').append('<li>' + response.bikes[i].title + ", " + response.bikes[i].frame_colors.join() + '</li>');

      }



    }).fail(function(error) {
        $('.showBikes').text(error.responseJSON.message);
    });
  });


});
