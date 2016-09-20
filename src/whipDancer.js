class WhipDancer extends Dancer {
  constructor (top, left, timeBetweenSteps, head  = '&#x1f600') {
    super(top, left, timeBetweenSteps, head);
    var leftHandPose = `&nbsp;&nbsp;&nbsp;&nbsp;<span class="head">${head}</span>&nbsp;&nbsp<br>&nbsp;&nbsp;_/||\\&#x1f44a<br>&nbsp;&nbsp;/&oline;&nbsp;&oline;\\&nbsp;`;
    var rightHandPose = `&nbsp;&nbsp;&nbsp;&nbsp;<span class="head">${head}</span>&nbsp;&nbsp<br>&#x1f44a/||\\_<br>&nbsp;&nbsp;&nbsp;/&oline;&nbsp;&oline;\\&nbsp;`;
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