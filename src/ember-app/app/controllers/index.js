import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.7.caption'),
          title: i18n.t('forms.application.sitemap.7.title'),
          children: [{
            link: 'i-i-s-7-заявка-l',
            caption: i18n.t('forms.application.sitemap.7.i-i-s-7-заявка-l.caption'),
            title: i18n.t('forms.application.sitemap.7.i-i-s-7-заявка-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-7-запись-l',
            caption: i18n.t('forms.application.sitemap.7.i-i-s-7-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.7.i-i-s-7-запись-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-7-должности-l',
            caption: i18n.t('forms.application.sitemap.7.i-i-s-7-должности-l.caption'),
            title: i18n.t('forms.application.sitemap.7.i-i-s-7-должности-l.title'),
            children: null
          }, {
            link: 'i-i-s-7-контрагент-l',
            caption: i18n.t('forms.application.sitemap.7.i-i-s-7-контрагент-l.caption'),
            title: i18n.t('forms.application.sitemap.7.i-i-s-7-контрагент-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-7-регистр-l',
            caption: i18n.t('forms.application.sitemap.7.i-i-s-7-регистр-l.caption'),
            title: i18n.t('forms.application.sitemap.7.i-i-s-7-регистр-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-7-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.7.i-i-s-7-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.7.i-i-s-7-сотрудник-l.title'),
            icon: 'table',
            children: null
          }]
        }
      ]
    };
  }),
})