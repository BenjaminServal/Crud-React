import React, { useState, useContext } from "react";
import { AuthContext } from "../../providers/users/UserProvider";
import { createComment } from "../../API/CommentrayFirestoreService";
const CreateComment = ({ game }) => {
  const { currentUser } = useContext(AuthContext);

  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const create = () => {
    if (text.length > 0) {
      createComment(text, game, currentUser);
    } else {
      setError("Commentaire vide");
    }
  };

  return (
    <div className="create">
      {currentUser ? (
        <>
          <h4>Partages ton avis !</h4>
          <div className="form">
            <textarea
              type="text"
              placeholder="Commentaire"
              value={text}
              onChange={e => setText(e.target.value)}
              rows="8"
               cols="10"
            />
            <button type="button" onClick={create}>
              Commenter
            </button>
            {error && <span className="error">{error}</span>}
          </div>
        </>
      ) : (
        <div className="noUser">
          <p>Connectes toi pour commenter</p>
        </div>
      )}
    </div>
  );
};

export default CreateComment;
