import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const prom1 = await signUpUser(firstName, lastName);
  const prom2 = uploadPhoto(fileName);
  const bogProm = await Promise.allSettled([prom1, prom2]);
  bogProm[1].value = String(bogProm[1].reason);
  delete bogProm[1].reason;
  return bogProm;
}
