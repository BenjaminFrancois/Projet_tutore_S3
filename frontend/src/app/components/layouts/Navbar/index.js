import React from "react";
import { Navbar, Nav, NavbarBrand, NavItem } from "shards-react";
import { navigate } from "hookrouter";
import style from "./navbar.module.css";
import logo from "../../../assets/images/scShare_logoNav.png";
import ProfilRound from "../../../components/profileRound_component/ProfilRoundNav";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

export default function NavBar() {
  console.log(window.location.href);

  const user = useSelector(state => state.user);

  return (
    <Navbar className={style.Navbar} expand="md">
      <NavbarBrand className={style.Brand} onClick={() => navigate("/seances")}>
        {" "}
        <img src={logo} alt="SchoolShare Logo" />
        schoolShare
      </NavbarBrand>
      <Nav navbar className="ml-auto">
        <NavItem>
          {user.isLoggedIn ? (
            <ProfilRound
              bgcolor={user.user.color && user.user.color}
              fcolor="#fff"
              letter={
                user.user.username &&
                user.user.username.charAt(user.user.username.length - 1)
              }
            />
          ) : (
            <>{window.location.pathname !== "/"&&<Loader type="Puff" color="#FFFF" height={50} width={50} />}</>
          )}
        </NavItem>
      </Nav>
    </Navbar>
  );
}
