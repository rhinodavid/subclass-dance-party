class Dancer {
  constructor (top, left, timeBetweenSteps) {
    this.$node = $('<span class="dancer"></span>');
    this.setPosition(top, left);
    this.timeBetweenSteps = timeBetweenSteps;
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
}