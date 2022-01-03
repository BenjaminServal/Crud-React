import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/users/UserProvider";
import { updateComment, deleteComment } from "../../API/CommentrayFirestoreService";

const UpdateDelete = ({ comment }) => {
  let goToProfil = false;
  const [update, setUpdate] = useState(false);
  const [updateText, setUpdateText] = useState("");

  const { currentUser } = useContext(AuthContext);

  const authorCheck = () => {
    if (currentUser) {
      if (comment.data().profilID === currentUser.uid) {
        return true;
      } else {
        return false;
      }
    }
  };
  authorCheck();

  const updateCommentary = () => {
    updateComment(updateText, comment, currentUser, update);
    setUpdate(false);
  };

  const deletCommentary = () => {
    deleteComment(comment, currentUser);
  };

  const onClickEvent = () => {
    goToProfil = true;
  };

  return (
    <div className="UpdateDelete">
      <>
        {update === false && (
          <div className="container">
            <div className="comment-container">
            <p>{comment.data().text}</p>
            <NavLink
              to={{
                pathname: "/Profil",
                state: { profilID: comment.data().profilID }
              }}
              isActive={goToProfil}
              onClick={onClickEvent()}
            >
              Posté par {comment.data().author}
            </NavLink>
            </div>
            {authorCheck() && (
              <div className="buttons-container">
                <button
                  onClick={() => {
                    setUpdate(!update);
                    console.log("comment :" + comment);
                  }}
                >
                  Update
                </button>
                <button onClick={deletCommentary}>delete</button>
              </div>
            )}
          </div>
        )}
        {update && (
          <div className="item-container-update">
            <textarea
              defaultValue={comment.data().text}
              onChange={e => setUpdateText(e.target.value)}
            />
            <button onClick={updateCommentary}>Validate update</button>
          </div>
        )}
      </>
    </div>
  );
};

export default UpdateDelete;
