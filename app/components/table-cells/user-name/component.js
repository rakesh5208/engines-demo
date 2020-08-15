import Ember from 'ember';
import { computed, get } from '@ember/object';
export default Ember.Component.extend({
  initialName: computed('value', function(){
    let splitted = get(this, 'value').split(' ');
    let initials = splitted.reduce((a, c)=>{
      return a + c.charAt(0).toUpperCase();
    },'')
    return initials;
  })
});
