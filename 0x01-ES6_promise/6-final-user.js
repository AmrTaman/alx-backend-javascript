import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const prom = Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]);
    return prom;
  
}
