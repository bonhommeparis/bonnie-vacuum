import test from 'ava';
import vacuum from '../src/index';

test.beforeEach(() => {
});

test('simple test', (t) => {

  var div = document.createElement('div');
  vacuum.addClasses(div);
  t.log(div.className);
  t.true(vacuum.isDesktop);
  t.false(vacuum.isTablet);
});