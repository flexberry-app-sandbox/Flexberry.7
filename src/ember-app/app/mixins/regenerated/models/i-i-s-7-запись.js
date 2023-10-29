import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяНачала: DS.attr('string'),
  времяОкончания: DS.attr('string'),
  дата: DS.attr('date'),
  кодЗаписи: DS.attr('number'),
  кодЗаявки: DS.attr('number'),
  кодРегистра: DS.attr('number'),
  заявка: DS.belongsTo('i-i-s-7-заявка', { inverse: null, async: false }),
  регистр: DS.belongsTo('i-i-s-7-регистр', { inverse: null, async: false })
});

export let ValidationRules = {
  времяНачала: {
    descriptionKey: 'models.i-i-s-7-запись.validations.времяНачала.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  времяОкончания: {
    descriptionKey: 'models.i-i-s-7-запись.validations.времяОкончания.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-7-запись.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаписи: {
    descriptionKey: 'models.i-i-s-7-запись.validations.кодЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодЗаявки: {
    descriptionKey: 'models.i-i-s-7-запись.validations.кодЗаявки.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  кодРегистра: {
    descriptionKey: 'models.i-i-s-7-запись.validations.кодРегистра.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  заявка: {
    descriptionKey: 'models.i-i-s-7-запись.validations.заявка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  регистр: {
    descriptionKey: 'models.i-i-s-7-запись.validations.регистр.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-7-запись', {
    времяОкончания: attr('Время окончания', { index: 0 }),
    времяНачала: attr('Время начала', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    кодЗаявки: attr('Код заявки', { index: 3 }),
    кодРегистра: attr('Код регистра', { index: 4 }),
    кодЗаписи: attr('Код записи', { index: 5 })
  });

  modelClass.defineProjection('ЗаписьL', 'i-i-s-7-запись', {
    времяОкончания: attr('Время окончания', { index: 0 }),
    времяНачала: attr('Время начала', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    кодЗаявки: attr('Код заявки', { index: 3 }),
    кодРегистра: attr('Код регистра', { index: 4 }),
    кодЗаписи: attr('Код записи', { index: 5 })
  });

  modelClass.defineProjection('ЗаписьРегистраE', 'i-i-s-7-запись', {
    времяОкончания: attr('Время окончания', { index: 0 }),
    времяНачала: attr('Время начала', { index: 1 }),
    дата: attr('Дата', { index: 2 })
  });

  modelClass.defineProjection('ЗаписьРегистраL', 'i-i-s-7-запись', {
    времяОкончания: attr('Время окончания', { index: 0 }),
    времяНачала: attr('Время начала', { index: 1 }),
    дата: attr('Дата', { index: 2 })
  });
};
