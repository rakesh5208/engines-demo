import Ember from 'ember';
import { computed } from '@ember/object';
export default Ember.Component.extend({
  tagName: 'ul',
  navs: computed(function() {
    return [
      {
        label: 'Gallery',
        path: "galleries"
      },
      {
        label: 'Contacts',
        path: "contacts"
      },
      {
        label: 'Messages',
        path: "messages"
      }
    ]
  })
});
