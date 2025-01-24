import React from "react";
import { auth } from "../../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  function handleSignOut() {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  }
  return (
    <div className="absolute px-8 flex justify-between py-2 bg-gradient-to-b from-black w-full">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        width="100px"
        height="100px"
      />
      {user && (
        <div className="flex p-2">
          <img
            src={user.photoURL}
            alt={user.displayName}
            width="40px"
            height="40px"
            className="rounded-full"
          />
          <button
            onClick={handleSignOut}
            className="pl-2 font-bold text-white cursor-pointer"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
