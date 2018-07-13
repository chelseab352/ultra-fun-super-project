const { Ossuary } = require('./Ossuary');
const $ = require('jquery');

$(() => {
  console.log('ready');
  const o = new Ossuary({});
  var $overlay = $('<div id="overlay"></div>');
  var $image = $("<img>");
  var $body = $(`
    <h1 id='employeeName'>Name Here</h1>
    <div id='bio'>
      <p>This is Brad. He is a frightened programmer in the Tampa office. As part of team SLA, he primarily contributes by adoringly stealing sandwiches, but is best known for sleeping on the beach. His favorite company value is Show some grit, because it makes him feel like a pretty princess. Don’t be afraid to tell Brad to go fuck himself!</p>
    </div>
  `);

//An image to overlay
$overlay.append($image);
$overlay.append($body);

//Add overlay
$("body").append($overlay);

  //click the image and a scaled version of the full size image will appear
  $("#photo-gallery a").click( function(event) {
    event.preventDefault();
    var imageLocation = $(this).attr("href");

    //update overlay with the image linked in the link
    $image.attr("src", imageLocation);

    //show the overlay
    $overlay.show();
  } );

  $("#overlay").click(function() {
    $( "#overlay" ).hide();
  });

});