import React, { useState, useEffect } from "react";
import UpdateDelete from "./UpdateDelete";
import { getCommentsForGame } from "../../API/CommentrayFirestoreService";

const ReadCommentary = ({ game }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const comments = await getCommentsForGame(game.id);
      setComments(comments);
    }
    fetchData();
  }, [comments]);

  return (
    <div className="Read">
      {comments &&
        comments.map(comment => (
          <div className="commentBody" key={comment.id}>
            <UpdateDelete comment={comment} />
          </div>
        ))}
    </div>
  );
};

export default ReadCommentary;
