import { db } from "../utils/firebaseConfig";

export const createComment = async (comment, game, currentUser) => {
  if (currentUser === null) {
    return;
  }
  try {
    await db
      .collection("Comments")
      .add({
        author: currentUser.displayName,
        gameID: game.id,
        gameName: game.name,
        text: comment,
        profilID: currentUser.uid
      });
    console.log("createComment OK");
    return true;
  }
  catch (reason) {
    console.log("createComment Error : " + reason);
    return false;
  }
};

export const updateComment = async (updatedText, comment, currentUser) => {
  if (currentUser === null) {
    return;
  }

  try {
    await db
      .collection("Comments")
      .doc(comment.id)
      .set({
        author: comment.data().author,
        gameID: comment.data().gameID,
        gameName: comment.data().gameName,
        profilID: comment.data().profilID,
        text: updatedText
      });
    console.log("updateComment OK");
    return true;
  }
  catch (reason) {
    console.log("updateComment Error : " + reason);
    return false;
  }
};

export const deleteComment = async (comment, currentUser) => {
  if (currentUser === null) {
    return;
  }

  try {
    await db
      .collection("Comments")
      .doc(comment.id)
      .delete();
    console.log("deleteComment OK");
    return true;
  }
  catch (reason) {
    console.log("deleteComment Error : " + reason);
    return false;
  }
};

export const getCommentsForProfil = async profilID => {
  try {

    const comments =  await db
      .collection("Comments")
      .where("profilID", "==", profilID)
      .get()

      return comments.docs
    }
  catch (reason) {
    // gestion d'erreur avec `reason`
    return [];
  } 
};


export const getCommentsForGame = async gameID => {
  try {
    const comments = await db.collection("Comments").where("gameID", "==", gameID).get()
    return comments.docs
  }
  catch (reason) {
    console.log(reason)
    return [];
  }
}