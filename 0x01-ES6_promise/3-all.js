import * as utils from './utils';

export default function handleProfileSignup() {
  return Promise.all([utils.uploadPhoto(), utils.createUser()])
    .then((values) => {
      console.log(`${values[0].body} ${values[1].firstName} ${values[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
