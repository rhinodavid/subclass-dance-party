class Dancer {
  constructor (top, left, timeBetweenSteps, head) {
    this.$node = $('<div class="dancer"></div>');
    this.$node.addClass('animated fadeIn');
    $(this.$node).one('animationend',
        function(e) {
          $(this.$node).removeClass('animated fadeIn');
        }.bind(this));
    this.$node.click(function() {
      $(this).addClass('animated flip');
      $(this).one('animationend',
        function(e) {
          $(this).removeClass('animated flip');
        }.bind(this));
    });
    this.$body = $('<div class="dancer-body"></div>');
    this.$head = $('<div class="dancer-head"></div>');
    this.head = head;
    this.setHead(head);
    this.$node.append(this.$head);
    this.$node.append(this.$body);
    this.setPosition(top, left);
    this.timeBetweenSteps = timeBetweenSteps;
    this.poses = [];
    this.pose = 0;
    this.dancing = false;
  }
  dance() {
    this.dancing = true;
    this.step();
  }
  stopDance() {
    this.dancing = false;
  }
  step() {
    if (this.dancing) {
      setTimeout(this.step.bind(this), this.timeBetweenSteps);     
    }
  }
  setPosition (top, left) {
    // find scale based on 'top' value
    // low values => smaller scale (higher on screen)
    // high values => higher scale
    var height = window.innerHeight;
    var scaleLowBound = 0.2;
    var scaleHighBound = 2;
    var scale = scaleLowBound + (top / height) * (scaleHighBound - scaleLowBound);
    var styleSettings = {
      top: top,
      left: left,
      transform: 'scale(' + scale + ')'
    };
    this._x = left;
    this._y = top;
    this.$node.css(styleSettings);
  }
  setHead(head) {
    this.head = head;
    this.$head.html(this.head);
  }
  setPose(html) {
    this.$body.html(html);
  }
  moveTo(x, y, time = 3000) {
    this._targetX = x;
    this._targetY = y;
    var distanceX = this._targetX - this._x;
    var distanceY = this._targetY - this._y;
    this._frameRate = 33; //33 = 30fps
    var frames = time / this._frameRate;
    var frameX = distanceX / frames; 
    var frameY = distanceY / frames;
    this._move(frameX, frameY);
  }

  _move(frameX, frameY) {
    var distanceX = this._targetX - this._x;
    var distanceY = this._targetY - this._y;
    var newX, newY;
    if (Math.abs(distanceX) <= Math.abs(frameX)) {
      newX = this._targetX;
    }
    if (Math.abs(distanceY) <= Math.abs(frameY)) {
      newY = this._targetY;
    }
    if (newX === this._targetX && newY === this._targetY) {
      // the dancer has made it to the new spot
      this.setPosition(newY, newX);
    } else {
      // this dancer has not made it
      newX = this._x + frameX;
      newY = this._y + frameY;
      this.setPosition(newY, newX);
      setTimeout(this._move.bind(this, frameX, frameY), this._frameRate);
    }

  }
}