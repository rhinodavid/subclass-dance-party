class NaeDancer extends Dancer {
  constructor (top, left, timeBetweenSteps, head = '&#x1f600') {
    super(top, left, timeBetweenSteps, head);
    this.$node.addClass('nae');
    var rightHandPose = '&#x1f44b<br>&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;\\<br>&nbsp;&nbsp;&nbsp;/&oline;&oline;\\&nbsp;<br>';
    var leftHandPose = '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x1f44b<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp<br>&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;||<br>&nbsp;&nbsp;&nbsp;&nbsp;/&oline;&oline;\\&nbsp;<br>';
    this.poses.push(rightHandPose, leftHandPose);
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


window.NaeDancer = NaeDancer;
