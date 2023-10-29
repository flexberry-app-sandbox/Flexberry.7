import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  кодДолжности: DS.attr('number'),
  кодСотрудника: DS.attr('number'),
  номерПаспорта: DS.attr('number'),
  отчество: DS.attr('string'),
  серияПаспорта: DS.attr('number'),
  табНомер: DS.attr('string'),
  фамилия: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-7-должности', { inverse: null, async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-7-сотрудник.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодДолжности: {
    descriptionKey: 'models.i-i-s-7-сотрудник.validations.кодДолжности.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодСотрудника: {
    descriptionKey: 'models.i-i-s-7-сотрудник.validations.кодСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерПаспорта: {
    descriptionKey: 'models.i-i-s-7-сотрудник.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-7-сотрудник.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серияПаспорта: {
    descriptionKey: 'models.i-i-s-7-сотрудник.validations.серияПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  табНомер: {
    descriptionKey: 'models.i-i-s-7-сотрудник.validations.табНомер.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-7-сотрудник.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-7-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-7-сотрудник', {
    фамилия: attr('Фамилия', { index: 0 }),
    серияПаспорта: attr('Серия паспорта', { index: 1 }),
    номерПаспорта: attr('Номер паспорта', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    имя: attr('Имя', { index: 4 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-7-сотрудник', {
    фамилия: attr('Фамилия', { index: 0 }),
    серияПаспорта: attr('Серия паспорта', { index: 1 }),
    номерПаспорта: attr('Номер паспорта', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    имя: attr('Имя', { index: 4 })
  });
};
