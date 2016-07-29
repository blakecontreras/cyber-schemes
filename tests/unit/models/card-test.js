import { moduleForModel, test } from 'ember-qunit';

moduleForModel('card', 'Unit | Model | card', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('it has a name', function(assert) {
  let model = this.subject();
  assert.ok(model.get('name'));
});

test('it has a cost', function(assert) {
  let model = this.subject();
  assert.ok(model.get('cost'));
});

test('it has an effect', function(assert) {
  let model = this.subject();
  assert.ok(model.get('effect'));
});

test('it has a graphic', function(assert) {
  let model = this.subject();
  assert.ok(model.get('image'));
});
