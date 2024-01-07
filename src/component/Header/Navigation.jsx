import { useState } from "react";
import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";

function Navigation() {
  const [isClick, setIsClick] = useState(false);
  const [className, setClassName] = useState("closeHamburger");
  const [navClassName, setNavClassName] = useState("nav");
  const navi = useNavigate();
  // const Tologin = () => {
  //   navi("/login");
  // };
  const handleClick = () => {
    setIsClick(!isClick);

    if (!isClick) {
      setClassName("openHamburger");
      setNavClassName("openNav");
    } else {
      setClassName("closeHamburger");
      setNavClassName("nav");
    }
  };
  return (
    <>
      <div className="hamburger" onClick={handleClick}>
        <div className={className}></div>
        <div className={className}></div>
        <div className={className}></div>
      </div>
      <div className={navClassName}>
        <NavLink
          onClick={handleClick}
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "rgb(20, 166, 239)" : "black",
          })}
        >
          Home
        </NavLink>
        <NavLink
          onClick={handleClick}
          to="/Bollywood"
          style={({ isActive }) => ({
            color: isActive ? "rgb(20, 166, 239)" : "black",
          })}
        >
          Bollywood
        </NavLink>
        <NavLink
          onClick={handleClick}
          to="/Hollywood"
          style={({ isActive }) => ({
            color: isActive ? "rgb(20, 166, 239)" : "black",
          })}
        >
          Hollywood
        </NavLink>
        <NavLink
          onClick={handleClick}
          to="/Technology"
          style={({ isActive }) => ({
            color: isActive ? "rgb(20, 166, 239)" : "black",
          })}
        >
          Technology
        </NavLink>
        <NavLink
          onClick={handleClick}
          to="/Fitness"
          style={({ isActive }) => ({
            color: isActive ? "rgb(20, 166, 239)" : "black",
          })}
        >
          Fitness
        </NavLink>
        <NavLink
          onClick={handleClick}
          to="/Food"
          style={({ isActive }) => ({
            color: isActive ? "rgb(20, 166, 239)" : "black",
          })}
        >
          Food
        </NavLink>
        <button onClick={() => navi("/register")} className="login-btn">
          LOGIN
        </button>
      </div>
    </>
  );
}

export default Navigation;
