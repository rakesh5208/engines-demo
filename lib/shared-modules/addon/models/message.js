import DS from 'ember-data';
const {
  attr
} = DS;
export default DS.Model.extend({
  text: attr('string'),
  sender: attr('string'),
  sendAt: attr('date')
});
