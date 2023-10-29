import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-7-регистр', 'Unit | Model | i-i-s-7-регистр', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-7-должности',
    'model:i-i-s-7-запись',
    'model:i-i-s-7-заявка',
    'model:i-i-s-7-контрагент',
    'model:i-i-s-7-регистр',
    'model:i-i-s-7-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
