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
    var heads = [
      '&#x1f600', // normal head
      '&#x1f604',
      '&#x1f608',
      '&#x1f60e',
      '&#x1f60d',
      '&#x1f61c',
      '&#x1f47d',
      '&#x1f47e',
      '&#x1f480',
      '&#x1f633'
    ];
    [newX, newY] = getRandomSpot();
    var dancer = new dancerMakerFunction(
      newY,
      newX,
      435 * 2, // 140 bpm
      heads[Math.floor(Math.random() * heads.length)]
    );

    window.dancers.push(dancer);

    $('body').append(dancer.$node);


  });

  var getRandomSpot = function() {
    //returns random x and y not off screen
    var x = $('body').width() * Math.random() * 0.9 + $('body').width() * 0.05 - 35;
    var y = $('body').height() * Math.random() * 0.78 + $('body').height() * 0.11 - 140;
    return [x, y];
  };

  var lineUp = function () {
    var width = $('body').width() * .9;
    var height = $('body').height();

    dancers.forEach(function (dancer, i) {
      dancer.moveTo($('body').width() * 0.05 + (width * i) / dancers.length - 50, height / 3);
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
      [x, y] = getRandomSpot();
      //tell whip to go to left of the spot
      whipDancers[i].moveTo(x - 40, y, 2500);
      //tell nae to go to right if the spot
      naeDancers[i].moveTo(x + 40, y, 2500);
    }
  };

  $('.lineUpButton').on('click', lineUp);
  $('.pairUpButton').on('click', pairUp);

  // scale dancefloor

});

