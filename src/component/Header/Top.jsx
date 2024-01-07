import { useNavigate } from "react-router-dom";
// import imgage from "../siren-logo.png";
const Top = () => {
  const navigate = useNavigate();
  const ToHome = () => {
    navigate("/");
  };
  return (
    <>
      <div onClick={ToHome} className="header">
        <div className="the">The</div>
        <div className="siren">Siren</div>
      </div>
    </>
  );
};

export default Top;
