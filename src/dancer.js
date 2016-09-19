class Dancer {
  constructor (top, left, timeBetweenSteps, defaultHead) {
    this.$node = $('<span class="dancer"></span>');
    this.setPosition(top, left);
    this.timeBetweenSteps = timeBetweenSteps;
    this.step();
    this.defaultHead = defaultHead;
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