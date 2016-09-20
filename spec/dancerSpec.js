
describe('Dancer', function () {
  var dancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    dancer = new Dancer (10, 20, timeBetweenSteps, '&#x1f608');
  });

  it('should have a default head', function () {
    expect(dancer.defaultHead).to.equal('&#x1f608');
  });

});

describe('whipDancer', function() {
  var whipDancer;
  var clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    whipDancer = new WhipDancer(10, 20, timeBetweenSteps);
  });
  it('should have a jQuery $node object', function() {
    expect(whipDancer.$node).to.be.an.instanceof(jQuery);
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
});