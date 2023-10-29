import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодРегистра: DS.attr('number'),
  наименование: DS.attr('string'),
  периодичность: DS.attr('string')
});

export let ValidationRules = {
  кодРегистра: {
    descriptionKey: 'models.i-i-s-7-регистр.validations.кодРегистра.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-7-регистр.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  периодичность: {
    descriptionKey: 'models.i-i-s-7-регистр.validations.периодичность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('РегистрE', 'i-i-s-7-регистр', {
    кодРегистра: attr('Код регистра', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    периодичность: attr('Периодичность', { index: 2 })
  });

  modelClass.defineProjection('РегистрL', 'i-i-s-7-регистр', {
    кодРегистра: attr('Код регистра', { index: 0 }),
    наименование: attr('Наименование', { index: 1 }),
    периодичность: attr('Периодичность', { index: 2 })
  });

  modelClass.defineProjection('РегистрСведенийE', 'i-i-s-7-регистр', {
    наименование: attr('Наименование', { index: 0 }),
    периодичность: attr('Периодичность', { index: 1 })
  });

  modelClass.defineProjection('РегистрСведенийL', 'i-i-s-7-регистр', {
    наименование: attr('Наименование', { index: 0 }),
    периодичность: attr('Периодичность', { index: 1 })
  });
};
