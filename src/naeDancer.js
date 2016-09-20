class NaeDancer extends Dancer {
  constructor (top, left, timeBetweenSteps, head = '&#x1f600') {
    super(top, left, timeBetweenSteps, head);
    var leftHandPose = `&#x1f44b<br>&nbsp;&nbsp;&nbsp;&nbsp;\\${head}&nbsp;&nbsp<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;\\<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&oline;&oline;\\&nbsp;<br>`;
    var rightHandPose = `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#x1f44b<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${head}/&nbsp;&nbsp<br>&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;||<br>&nbsp;&nbsp;&nbsp;&nbsp;/&oline;&oline;\\&nbsp;<br>`;
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


window.NaeDancer = NaeDancer;