import Ember from 'ember';
import { get, computed, set } from '@ember/object';
export default Ember.Component.extend({
  albums:computed('datas', function() {
    let datas = get(this, 'datas').toArray();
    return datas.reduce((a, c) => {
      let index = a.findIndex((val)=>{
        return val.name == get(c, 'albumName');
      });
      if(index === -1) {
        a.push({
          name: get(c, 'albumName'),
          images: [c]
        })
      }else {
        a[index].images.push(c);
      }
      return a;
    },[]);
  }),
  actions: {
    selectAlbum(album) {
      set(this, 'selectedAlbum', album)
    }
  }
});
