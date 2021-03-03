// eslint-disable-next-line import/no-unresolved
import User from '@models/User';

export default class UsersControllers {
  // eslint-disable-next-line class-methods-use-this
  teste() {
    const user = new User();
    // eslint-disable-next-line no-console
    console.log(user);
  }
}
