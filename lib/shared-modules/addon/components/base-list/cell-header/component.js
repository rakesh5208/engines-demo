import Ember from 'ember';
import { getWithDefault, computed } from '@ember/object';
import layout from './template';
export default Ember.Component.extend({
  layout,
  tagName: '',
  width: computed('column', function(){
    return getWithDefault(this, 'column.width', 'auto');
  }),
});
