import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const val = {
    photo: null,
    user: null,
  };
  const prom1 = await uploadPhoto();
  const prom2 = await createUser();
  console.log(prom2);
  if (prom1 && prom2) {
    val.photo = prom1;
    val.user = prom2;
  }
  return val;
}
