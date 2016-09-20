describe('Dancer', function() {

  var whipDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    whipDancer = new WhipDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(whipDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a head and a body', function() {
    expect(whipDancer.$node.children.length).to.equal(2);
  });

  it('should have a default head', function () {
    expect(whipDancer.head).to.equal('&#x1f600');
  });

  it('should be scaled randomly', function() {
    expect(Number(whipDancer.$node.css('transform').slice(7, 14))).to.not.equal(1);
  });
  
  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(whipDancer, 'step');
      expect(whipDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(whipDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(whipDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('moving to a new position', function() {
    it('should have a moveTo method', function() {
      expect(whipDancer.moveTo).to.be.a('function');
    });
    it('calling the move method should move the dancer', function() {
      var oldX = Number(whipDancer.$node.css('left'));
      var oldY = Number(whipDancer.$node.css('top'));
      whipDancer.moveTo(40, 50);
      clock.tick(1000);
      clock.tick(1000);
      var X = Number(whipDancer.$node.css('left'));
      var Y = Number(whipDancer.$node.css('top'));
      expect(oldX).to.not.equal(X);
      expect(oldY).to.not.equal(Y);
    });
  });
});

describe('Whip Dancer', function() {
  var whipDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    whipDancer = new WhipDancer(10, 20, timeBetweenSteps);
  });

  it('should have two poses', function() {
    expect(whipDancer.poses.length).to.equal(2);
  });

  it('should have a first pose of left fist out', function() {
    expect(whipDancer.poses[0]).to.equal('&nbsp;&nbsp;_/||\\&#x1f44a<br>&nbsp;&nbsp;/&oline;&nbsp;&oline;\\&nbsp;');
  });
});

describe('Nae Nae Dancer', function() {
  var naeDancer;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    naeDancer = new NaeDancer(10, 20, timeBetweenSteps);
  });

  it('should have two poses', function() {
    expect(naeDancer.poses.length).to.equal(2);
  });

  it('should have a first pose of right hand up', function() {
    expect(naeDancer.poses[0]).to.equal('&#x1f44b<br>&nbsp;&nbsp;&nbsp;\\&nbsp;&nbsp;&nbsp;&nbsp;&nbsp<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;\\<br>&nbsp;&nbsp;&nbsp;/&oline;&oline;\\&nbsp;<br>');
  });
});