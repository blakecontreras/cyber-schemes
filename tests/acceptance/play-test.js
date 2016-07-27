import { test } from 'qunit';
import moduleForAcceptance from 'cyber-schemes/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | play field');

test('visiting /play', function(assert) {
  visit('/play');

  andThen(function() {
    assert.equal(currentURL(), '/play');
  });
});
