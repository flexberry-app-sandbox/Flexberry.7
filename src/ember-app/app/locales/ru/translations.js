import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IIS7ДолжностиLForm from './forms/i-i-s-7-должности-l';
import IIS7ЗаписьLForm from './forms/i-i-s-7-запись-l';
import IIS7ЗаявкаLForm from './forms/i-i-s-7-заявка-l';
import IIS7КонтрагентLForm from './forms/i-i-s-7-контрагент-l';
import IIS7РегистрLForm from './forms/i-i-s-7-регистр-l';
import IIS7СотрудникLForm from './forms/i-i-s-7-сотрудник-l';
import IIS7ДолжностиEForm from './forms/i-i-s-7-должности-e';
import IIS7ЗаписьEForm from './forms/i-i-s-7-запись-e';
import IIS7ЗаявкаEForm from './forms/i-i-s-7-заявка-e';
import IIS7КонтрагентEForm from './forms/i-i-s-7-контрагент-e';
import IIS7РегистрEForm from './forms/i-i-s-7-регистр-e';
import IIS7СотрудникEForm from './forms/i-i-s-7-сотрудник-e';
import IIS7ДолжностиModel from './models/i-i-s-7-должности';
import IIS7ЗаписьModel from './models/i-i-s-7-запись';
import IIS7ЗаявкаModel from './models/i-i-s-7-заявка';
import IIS7КонтрагентModel from './models/i-i-s-7-контрагент';
import IIS7РегистрModel from './models/i-i-s-7-регистр';
import IIS7СотрудникModel from './models/i-i-s-7-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-7-должности': IIS7ДолжностиModel,
    'i-i-s-7-запись': IIS7ЗаписьModel,
    'i-i-s-7-заявка': IIS7ЗаявкаModel,
    'i-i-s-7-контрагент': IIS7КонтрагентModel,
    'i-i-s-7-регистр': IIS7РегистрModel,
    'i-i-s-7-сотрудник': IIS7СотрудникModel
  },

  'application-name': '7',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '7',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '7',
          title: '7'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        7: {
          caption: '7',
          title: '7',
          'i-i-s-7-заявка-l': {
            caption: 'Заявка',
            title: ''
          },
          'i-i-s-7-запись-l': {
            caption: 'Запись',
            title: ''
          },
          'i-i-s-7-должности-l': {
            caption: 'Должности',
            title: ''
          },
          'i-i-s-7-контрагент-l': {
            caption: 'Контрагент',
            title: ''
          },
          'i-i-s-7-регистр-l': {
            caption: 'Регистр',
            title: ''
          },
          'i-i-s-7-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-7-должности-l': IIS7ДолжностиLForm,
    'i-i-s-7-запись-l': IIS7ЗаписьLForm,
    'i-i-s-7-заявка-l': IIS7ЗаявкаLForm,
    'i-i-s-7-контрагент-l': IIS7КонтрагентLForm,
    'i-i-s-7-регистр-l': IIS7РегистрLForm,
    'i-i-s-7-сотрудник-l': IIS7СотрудникLForm,
    'i-i-s-7-должности-e': IIS7ДолжностиEForm,
    'i-i-s-7-запись-e': IIS7ЗаписьEForm,
    'i-i-s-7-заявка-e': IIS7ЗаявкаEForm,
    'i-i-s-7-контрагент-e': IIS7КонтрагентEForm,
    'i-i-s-7-регистр-e': IIS7РегистрEForm,
    'i-i-s-7-сотрудник-e': IIS7СотрудникEForm
  },

});

export default translations;
