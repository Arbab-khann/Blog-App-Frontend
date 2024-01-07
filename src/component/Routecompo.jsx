import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bollywood from "./Bollywood";
import Hollywood from "./Hollywood";
import Fitness from "./Fitness";
import Food from "./Food";
import Technology from "./News";
import Storedata from "./Store";
import Dynamiccompo from "./Dynamiccompo";
import Login from "./login/Login";
import Register from "./login/Register";

function Routecompo() {
  return (
    <div>
      <BrowserRouter>
        <hr />
        <Storedata>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/hollywood" element={<Hollywood />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/details/:id" element={<Dynamiccompo />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Storedata>
      </BrowserRouter>
    </div>
  );
}

export default Routecompo;
