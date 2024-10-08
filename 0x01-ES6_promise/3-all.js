import * as utils from './utils';

export default function handleProfileSignup() {
  utils.uploadPhoto()
    .then((val) => {
      process.stdout.write(val.body);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
  utils.createUser()
    .then((val) => {
      // eslint-disable-next-line prefer-template
      process.stdout.write(' ' + val.firstName);
      // eslint-disable-next-line prefer-template
      process.stdout.write(' ' + val.lastName + '\n');
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
