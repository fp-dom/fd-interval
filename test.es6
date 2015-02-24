import assert from 'assert';
import sinon from 'sinon';
import interval from './';


it('fd-interval', () => {
  assert.equal(typeof interval, 'function');
  assert.equal(typeof interval(2), 'function');
  
  let spy = sinon.spy();
  let clock = sinon.useFakeTimers();

  interval(2000)(spy);

  clock.tick(1999);
  assert(spy.notCalled);
  assert.equal(spy.callCount, 0);

  clock.tick(2000);
  assert.equal(spy.callCount, 1);

  clock.tick(2000);
  assert.equal(spy.callCount, 2);
});
