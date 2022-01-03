import { db } from "../../utils/firebaseConfig";

export const createProfil = res => {
  return db
    .collection("Profil")
    .doc(res.user.uid)
    .set({
      uid: res.user.uid,
      name: res.user.displayName
    })
    .then(() => {
      console.log("createProfil OK");
      return true;
    })
    .catch(reason => {
      console.log("createProfil Error : " + reason);
      return false;
    });
};
