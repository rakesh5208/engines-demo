import Ember from 'ember';
import layout from './template';
import { computed,getWithDefault } from '@ember/object';
export default Ember.Component.extend({
  layout,
  tagName: '',
  width: computed('column', function(){
    return getWithDefault(this, 'column.width', 'auto');
  }),
});
