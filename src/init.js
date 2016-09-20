$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerName = $(this).data('dancer-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      435 * 2 // 140 bpm
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);


  });

  var lineUp = function () {
    var width = window.innerWidth * .9;
    var height = window.innerHeight;

    dancers.forEach(function (dancer, i) {
      dancer.moveTo(window.innerWidth * 0.05 + (width * i) / dancers.length, height / 2);
    });
  };

  var pairUp = function () {
    var whipDancers = window.dancers.filter(function (dancer) {
      return dancer.$node.hasClass('whip');
    });
    var naeDancers = window.dancers.filter(function (dancer) {
      return dancer.$node.hasClass('nae');
    });
    var min = Math.min(whipDancers.length, naeDancers.length);

    for (var i = 0; i < min; i++) {
      //get random spot on the map
      var x = Math.random() * window.innerWidth;
      var y = Math.random() * window.innerHeight;
      //tell whip to go to left of the spot
      whipDancers[i].moveTo(x - 50, y, 2500);
      //tell nae to go to right of the spot
      naeDancers[i].moveTo(x + 50, y, 2500);
    }
  };

  $('.lineUpButton').on('click', lineUp);
  $('.pairUpButton').on('click', pairUp);
});

