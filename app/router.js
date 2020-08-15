import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('messages', function() {
  //   this.route('list');
  //   this.route('new');
  //   this.route('edit');
  // });

  this.route('galleries', function() {
    this.route('list');
    this.route('new');
    this.route('edit');
  });

  this.route('contacts', function() {
    this.route('list');
    this.route('new');
    this.route('edit');
  });

  this.route('albums');
  this.mount('message-engine', {as: "messages"});
});

export default Router;
