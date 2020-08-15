import Ember from 'ember';
import RSVP from 'rsvp';
import { on } from '@ember/object/evented';
import { set, get } from '@ember/object';

export default Ember.Route.extend({
  discardFilter: on('deactivate', function() {
    let model = this.modelFor('contacts.list');
    set(model, 'filterUnstable', false);
  }),
  model() {
    return RSVP.hash({
      contacts: get(this, 'store').findAll('contact'),
      filterUnstable: true
    });
  }
});
