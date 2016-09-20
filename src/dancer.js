class Dancer {
  constructor (top, left, timeBetweenSteps, head) {
    this.$node = $('<div class="dancer"></div>');
    this.$node.addClass('animated bounceInDown');
    this.$node.hover(function() {
      $(this).removeClass('bounceInDown');
      $(this).addClass('animated infinite jello');
    }, function() {
      $(this).removeClass('animated infinite jello');
    });
    this.$body = $('<div class="dancer-body"></div>');
    this.$head = $('<div class="dancer-head"></div>');
    this.head = head;
    this.setHead(head);
    this.$node.append(this.$head);
    this.$node.append(this.$body);
    this.setPosition(top, left);
    this.$node.css( 'transform', `scale(${Math.random() * .3 - .15 + 1})`);
    this.timeBetweenSteps = timeBetweenSteps;
    this.poses = [];
    this.pose = 0;
    this.step();
  }
  step () {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  setPosition (top, left) {
    var styleSettings = {
      top: top,
      left: left
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
  moveTo(x, y, time = 5000) {
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
    if (Math.abs(distanceX) < Math.abs(frameX)) {
      newX = this._targetX;
    }
    if (Math.abs(distanceY) < Math.abs(frameY)) {
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