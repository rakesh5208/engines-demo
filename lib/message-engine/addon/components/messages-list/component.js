import Ember from 'ember';
import { computed } from '@ember/object';
import layout from './template';
export default Ember.Component.extend({
  layout,
  columns: computed(function(){
    return [
      {
        label:'Sender',
        key: 'sender',
        width: '300px'
      },
      {
        label:'Message',
        key: 'text',
        width: '400px'
      },
      {
        label:'Received Date',
        key: 'sendAt'
      }
  ]
  }),
});
