import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Header() {
  const user = useSelector((state) => state.auth);
  return (
    <div className="header padd">
      <Link to="/">
        <Logo />
      </Link>

      {user.isLoggedIn ? (
        <>
          <div className="mid">
            <Link to="/explore">Explore</Link>
            <Link to="/mytools">My Tools</Link>
          </div>


          <div className="mid">
            <Link to="/addProduct">
              <i className="im im-plus-circle"></i>{" "}
            </Link>
            <Link to="/editProfile">
              <i
                className="im im-user-settings

"
              ></i>
            </Link>
            <Link to="/queries">
              {" "}
              <i
                className="im im-question

"
              ></i>{" "}
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="mid">
            <Link to="/explore">Explore</Link>
            <Link to="/login">Login</Link>
          </div>
        </>
      )}
    </div>
  );
}
