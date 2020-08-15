import { Factory } from 'ember-cli-mirage';
import faker from 'faker';
const ALBUM_NAME = ['nature', 'city', 'nightlife']
export default Factory.extend({
  imageUrl() {
    let albumName = this.albumName;
    let width = 500;
    let height = 300;
    switch (albumName) {
      case 'nature':
        return faker.image.nature(width, height, true);
      case 'city':
        return faker.image.city(width, height, true);
      case 'nightlife':
        return faker.image.nightlife(width, height, true);
      default:
        return faker.image.imageUrl();
    }

  },
  takenAt() {
    return faker.date.past();
  },
  albumName(i) {
    return ALBUM_NAME[i % ALBUM_NAME.length];
  }
});
