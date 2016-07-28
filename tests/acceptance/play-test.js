import { test } from 'qunit';
import moduleForAcceptance from 'cyber-schemes/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | play');

test('visiting /play', function(assert) {
  visit('/play');

  andThen(function() {
    assert.equal(currentURL(), '/play');
  });
});

test('play a card', function(assert) {
  visit('/play');
  click('div:contains("Card")');

  andThen(function() {
    assert.ok(find('div.field.card'));
  });
});

test('summon a hero', function(assert) {
  visit('/play');
  click('div:contains("Hero")');

  andThen(function() {
    assert.ok(find('div.field.hero'));
  });
});

test('draw a scheme card', function(assert) {
  visit('/play');
  click('div:contains("Deck")');

  andThen(function() {
    assert.ok(find('div.field.scheme'));
  });
});

test('reset the game', function(assert) {
  visit('/play');
  click('div:contains("Card")');
  click('button:contains("Reset")');

  andThen(function() {
    assert.notOk(find('div.field.card'));
  });
});
