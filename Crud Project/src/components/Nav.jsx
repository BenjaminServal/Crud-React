import React, { useContext } from "react";
import { logOut } from "../utils/firebaseConfig";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/users/UserProvider";

const Nav = () => {
  const { currentUser } = useContext(AuthContext);
  let goToProfil = false;

  const onClickEvent = () => {
    goToProfil = true;
  };

  return (
    <nav className="nav">
      {currentUser && (
        <>
          <NavLink to="/" onClick={logOut}>
            Deconnexion
          </NavLink>
          <NavLink
            to={{
              pathname: "/Profil",
              state: { profilID: currentUser.uid }
            }}
            activeClassName="nav-active"
            isActive={goToProfil}
            onClick={onClickEvent()}
          >
            Profil
          </NavLink>
        </>
      )}
      {!currentUser && (
        <NavLink exact to="/SignUp" activeClassName="nav-active">
          Connexion
        </NavLink>
      )}
      <NavLink exact to="/" activeClassName="nav-active">
        Home
      </NavLink>
    </nav>
  );
};

export default Nav;
