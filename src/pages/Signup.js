import React, { useState } from "react";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import SignupGIF from "../imgs/register.gif";
export default function Signup() {
  const [page, setPage] = useState(1);
  return (
    <div className=" login flex">
      <div className="left flex-col">
        <Logo />
        <div className="form flex-col">
          <div className="flex-col">
            {page === 1 ? (
              <>
                <div>
                  <p>Username : </p>
                  <input type="text" />
                </div>

                <div>
                  <p>Email : </p>
                  <input type="email" />
                </div>
              </>
            ) : page == 2 ? (
              <>
                <div>
                  <p>Password : </p>
                  <input type="password" />
                </div>

                <div>
                  <p>Confirm Password : </p>
                  <input type="password" />
                </div>
              </>
            ) : (
              <>
                <div>
                  <p>Location (City) : </p>
                  <input type="text" />
                </div>

                <div>
                  <p>Mobile : </p>
                  <input type="number"/>
                </div>
              </>
            )}
            <div className="flex-bet btns">
              <button
                className="yellow"
                disabled={page === 1}
                onClick={() => setPage(page === 1 ? page : page - 1)}
              >
                <i className="im im-arrow-left-circle"></i> Previous
              </button>
              <button
                className="blue"
                disabled={page === 3}
                onClick={() => setPage(page === 3 ? page : page + 1)}
              >
                Next <i className="im im-arrow-right-circle"></i>
              </button>
            </div>
            <button className="blue">Login</button>
          </div>
          <Link to="/login">Already have an account</Link>
        </div>
      </div>
      <div className="right flex-col">
        <img src={SignupGIF} alt="" className="img" />
        <div>
          <h1>Create Your account</h1>
          <p>Join the community!!</p>
        </div>
      </div>
    </div>
  );
}
