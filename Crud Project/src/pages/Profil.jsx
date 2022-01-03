import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/users/UserProvider";
import { useLocation } from "react-router-dom";
import { getCommentsForProfil } from "../API/CommentrayFirestoreService";
import { getProfilFromID } from "../API/ProfilFirestoreService";

const Profil = () => {
  const [user, setUser] = useState({});
  const { currentUser } = useContext(AuthContext);

  const location = useLocation();
  const profilID = location.state.profilID;

  const [comments, setComments] = useState([]);

  useEffect(() => {
    
    async function fetchData() {
      const user = await getProfilFromID(profilID);
      setUser(user);

      const comments = await getCommentsForProfil(profilID);
      setComments(comments);
    }
    fetchData();
  }, [profilID]);


  const currentUserCheck = () => {
      if (currentUser.uid  ===  profilID) {
        return true;
      } else {
        return false;
      }
  }
  currentUserCheck();

  return (
    <div className="Profil">
      <div className="userName">
      <p>Profil of : {user.name}</p>
      </div>
      {currentUserCheck() ? (
        
        <h3>Mes commentaires : </h3>
        
      ) : (
        <>
         <h3>Commentaires postés: </h3>
        </>
      )}
      {comments &&
        comments.map(comment => (
          <div className="comment" key={comment.id}>
            <div className="commentText">
             <p>{comment.data().text}</p>
            </div>
            <div className="gameNameComment">
             <p>{comment.data().gameName}</p>
            </div>
          </div>
        ))}

    </div>
  );
};

export default Profil;
