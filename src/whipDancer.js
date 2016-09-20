class WhipDancer extends Dancer {
  constructor (top, left, timeBetweenSteps, head = '&#x1f600') {
    super(top, left, timeBetweenSteps, head);
    var leftHandPose = '&nbsp;&nbsp;_/||\\&#x1f44a<br>&nbsp;&nbsp;/&oline;&nbsp;&oline;\\&nbsp;';
    var rightHandPose = '&#x1f44a/||\\_<br>&nbsp;&nbsp;&nbsp;/&oline;&nbsp;&oline;\\&nbsp;';
    this.$node.addClass('whip');
    this.poses.push(leftHandPose, rightHandPose);
    this.setPose(this.poses[this.pose]);
  }
  step() {
    super.step();
    this.pose++;
    if (this.pose >= this.poses.length) {
      this.pose = 0;
    }
    this.setPose(this.poses[this.pose]);
  }
}


window.WhipDancer = WhipDancer;