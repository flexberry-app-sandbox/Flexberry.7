import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  договор: DS.attr('string'),
  кодКонтрагента: DS.attr('number'),
  наименование: DS.attr('string'),
  организация: DS.attr('string')
});

export let ValidationRules = {
  договор: {
    descriptionKey: 'models.i-i-s-7-контрагент.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодКонтрагента: {
    descriptionKey: 'models.i-i-s-7-контрагент.validations.кодКонтрагента.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-7-контрагент.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-7-контрагент.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КонтрагентE', 'i-i-s-7-контрагент', {
    наименование: attr('Наименование', { index: 0 }),
    организация: attr('Организация', { index: 1 })
  });

  modelClass.defineProjection('КонтрагентL', 'i-i-s-7-контрагент', {
    наименование: attr('Наименование', { index: 0 }),
    организация: attr('Организация', { index: 1 })
  });
};
