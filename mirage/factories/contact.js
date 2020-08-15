import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  name(){
    return faker.name.findName();
  },
  phone(){
    return faker.phone.phoneNumber();
  },
  email() {
    return faker.internet.email()

  }
});
