import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-7-регистр', 'Unit | Serializer | i-i-s-7-регистр', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-7-регистр',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-7-состояния',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
