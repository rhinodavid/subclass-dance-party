class Dancer {
  constructor (top, left, timeBetweenSteps, head) {
    this.$node = $('<div class="dancer"></div>');
    this.setPosition(top, left);
    this.timeBetweenSteps = timeBetweenSteps;
    this.head = head;
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
    this.$node.css(styleSettings);
  }
  setPose(html) {
    this.$node.html(html);
  }
}