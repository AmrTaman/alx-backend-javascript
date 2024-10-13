import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let val = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    val = { photo, user };
  } catch (error) {
    val = { photo: null, user: null };
  }
  return val;
}
