import { useState } from "react";
import Aside from "./styles";

import Button from "../Button/";

import CartShopping from "../../assets/cartshopping.svg";
import LoginUser from "../../assets/user-solid.svg";
import MoneyBill from "../../assets/moneybill.svg";
import Home from "../../assets/house-solid.svg";
import Exit from "../../assets/exit.svg";

import { useNavigate } from "react-router-dom";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/Firebase";

import { signOut } from "firebase/auth";

function SideBar() {
  const [opened, setOpened] = useState(false);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  const handleClick = (link: string) => {
    setOpened(false);
    navigate(link);
  };

  return (
    <>
      <button
        className={`openMenu ${opened ? "hidden" : ""}`}
        onClick={() => setOpened(true)}
      >
        |||
      </button>
      <Aside opened={opened} className={`${opened ? "openedAnimation" : ""}`}>
        <button className="closeMenu" onClick={() => setOpened(false)}>
          X
        </button>
        {user ? (
          <>
            <div className="greeter">
              <h1>hello, </h1>
              <span>{user.displayName}</span>
            </div>
            <div className="buttons">
              <Button
                text="home"
                icon={Home}
                onClick={() => handleClick("/")}
              />
              <Button
                text="entries"
                icon={MoneyBill}
                onClick={() => handleClick("/entries")}
              />
              <Button
                text="spents"
                icon={CartShopping}
                onClick={() => handleClick("/spents")}
              />
              <Button text="leave" icon={Exit} onClick={handleLogout} />
            </div>
          </>
        ) : (
          <>
            <div className="greeter">
              <h1 className={!user ? "small" : ""}>IControl,</h1>
              <span className={!user ? "small" : ""}>Login now!</span>
            </div>
            <div className="buttons">
              <Button
                text="login"
                icon={LoginUser}
                onClick={() => handleClick("/login")}
              />
            </div>
          </>
        )}

        <a href="https://github.com/jaoincode" target="_blank">
          @jaoincode
        </a>
      </Aside>
    </>
  );
}

export default SideBar;
