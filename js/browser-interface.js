$(document).ready(function() {
  $('.showBikes').hide();
  $('#searchBikes').click(function() {
    var zipcode = $('#zipcode').val();
    $('#zipcode').val("");
    $('.showBikes').show();
    $('#testBike2').text("TEST1");

    $.get('https://bikeindex.org:443/api/v2/bikes_search/stolen?page=1&per_page=5&proximity=97214&proximity_square=16&access_token=api_key').then(function(response) {
      $('#testBike2').text("tests");
      $('#testBike').text(response.bikes[0].title);



    }).fail(function(error) {
        $('.showBikes').text(error.responseJSON.message);
    });
  });


});
