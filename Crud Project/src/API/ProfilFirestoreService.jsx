import { db } from "../utils/firebaseConfig";

export const getProfilFromID = async profilID => {
  const profil = await db
    .collection("Profil")
    .doc(profilID)
    .get();

  return profil.data();
};
