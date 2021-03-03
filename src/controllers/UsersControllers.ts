import User from '@models/User';

export default class UsersControllers {
  teste() {
    const user = new User();
    console.log(user);
  }
}
