import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  важность: DS.attr('string'),
  кодЗаявки: DS.attr('number'),
  кодКонтрагента: DS.attr('string'),
  кодСотрудника: DS.attr('string'),
  номерЗаявки: DS.attr('string'),
  контрагент: DS.belongsTo('i-i-s-7-контрагент', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-7-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  важность: {
    descriptionKey: 'models.i-i-s-7-заявка.validations.важность.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодЗаявки: {
    descriptionKey: 'models.i-i-s-7-заявка.validations.кодЗаявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодКонтрагента: {
    descriptionKey: 'models.i-i-s-7-заявка.validations.кодКонтрагента.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодСотрудника: {
    descriptionKey: 'models.i-i-s-7-заявка.validations.кодСотрудника.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерЗаявки: {
    descriptionKey: 'models.i-i-s-7-заявка.validations.номерЗаявки.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  контрагент: {
    descriptionKey: 'models.i-i-s-7-заявка.validations.контрагент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-7-заявка.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаявкаE', 'i-i-s-7-заявка', {
    номерЗаявки: attr('Номер заявки', { index: 0 }),
    важность: attr('Важность', { index: 1 }),
    кодЗаявки: attr('Код заявки', { index: 2 }),
    кодСотрудника: attr('Код сотрудника', { index: 3 }),
    кодКонтрагента: attr('Код контрагента', { index: 4 })
  });

  modelClass.defineProjection('ЗаявкаL', 'i-i-s-7-заявка', {
    номерЗаявки: attr('Номер заявки', { index: 0 }),
    важность: attr('Важность', { index: 1 }),
    кодЗаявки: attr('Код заявки', { index: 2 }),
    кодСотрудника: attr('Код сотрудника', { index: 3 }),
    кодКонтрагента: attr('Код контрагента', { index: 4 })
  });

  modelClass.defineProjection('ЗаявкаНаРаботыE', 'i-i-s-7-заявка', {
    номерЗаявки: attr('Номер заявки', { index: 0 }),
    важность: attr('Важность', { index: 1 })
  });

  modelClass.defineProjection('ЗаявкаНаРаботыL', 'i-i-s-7-заявка', {
    номерЗаявки: attr('Номер заявки', { index: 0 }),
    важность: attr('Важность', { index: 1 })
  });
};
