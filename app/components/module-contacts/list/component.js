import Ember from 'ember';
import { computed } from '@ember/object';
export default Ember.Component.extend({
  columns: computed(function(){
    return [
      {
        label:'Name',
        key: 'name',
        dataComponent: 'table-cells/user-name',
        width: '300px'
      },
      {
        label:'Phone',
        key: 'phone'
      },
      {
        label:'Email',
        key: 'email'
      }
  ]
  }),
});
