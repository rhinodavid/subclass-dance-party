class Dancer {
  constructor (top, left, timeBetweenSteps, head) {
    this.$node = $('<div class="dancer"></div>');
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
    this.$node.css(styleSettings);
  }
  setHead(head) {
    this.head = head;
    this.$head.html(this.head);
  }
  setPose(html) {
    this.$body.html(html);
  }
}