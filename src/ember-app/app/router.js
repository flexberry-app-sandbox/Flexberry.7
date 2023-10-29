import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-7-должности-l');
  this.route('i-i-s-7-должности-e',
  { path: 'i-i-s-7-должности-e/:id' });
  this.route('i-i-s-7-должности-e.new',
  { path: 'i-i-s-7-должности-e/new' });
  this.route('i-i-s-7-запись-l');
  this.route('i-i-s-7-запись-e',
  { path: 'i-i-s-7-запись-e/:id' });
  this.route('i-i-s-7-запись-e.new',
  { path: 'i-i-s-7-запись-e/new' });
  this.route('i-i-s-7-заявка-l');
  this.route('i-i-s-7-заявка-e',
  { path: 'i-i-s-7-заявка-e/:id' });
  this.route('i-i-s-7-заявка-e.new',
  { path: 'i-i-s-7-заявка-e/new' });
  this.route('i-i-s-7-контрагент-l');
  this.route('i-i-s-7-контрагент-e',
  { path: 'i-i-s-7-контрагент-e/:id' });
  this.route('i-i-s-7-контрагент-e.new',
  { path: 'i-i-s-7-контрагент-e/new' });
  this.route('i-i-s-7-регистр-l');
  this.route('i-i-s-7-регистр-e',
  { path: 'i-i-s-7-регистр-e/:id' });
  this.route('i-i-s-7-регистр-e.new',
  { path: 'i-i-s-7-регистр-e/new' });
  this.route('i-i-s-7-сотрудник-l');
  this.route('i-i-s-7-сотрудник-e',
  { path: 'i-i-s-7-сотрудник-e/:id' });
  this.route('i-i-s-7-сотрудник-e.new',
  { path: 'i-i-s-7-сотрудник-e/new' });
});

export default Router;
