import DS from 'ember-data';
const {
  attr
} = DS;
export default DS.Model.extend({
  imageUrl: attr('string'),
  takenAt: attr('date'),
  albumName: attr('string')
});
