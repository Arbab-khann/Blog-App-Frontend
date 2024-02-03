import React, { useEffect, useState } from "react";
import { Store } from "./Store";
import { useNavigate, useParams } from "react-router-dom";
import img from "./image_processing20220801-17461-11ne70y.png";
import clapimg from "./rythm@2x.png";
import shareimg from "./share@2x.png";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./Footer";
import axios from "axios";

function Dynamiccompo() {
  // const history = useHistory();
  const navi = useNavigate();
  const { id } = useParams();
  const [dyndata, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the authentication token from wherever it is stored (e.g., localStorage, state, etc.)
        const token = localStorage.getItem("token");
        console.log("line26 dyncompo session token ", token);
        if (!token) {
          // Redirect to login page if the token is missing

          navi("/register");
        }

        const response = await axios.get(
          `https://blog-backend-ldhh.onrender.com/details/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data;

        if (data.msg == "not registerd user") {
          navi("/register");
        } else {
          setData(data);
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id, history]);

  // const genId1 =
  //   Math.floor(id / 15.01) * 15 + Math.floor(Math.random() * 14) + 1;
  // const genId2 =
  //   Math.floor(id / 15.01) * 15 + Math.floor(Math.random() * 14) + 1;
  // const genId3 =
  //   Math.floor(id / 15.01) * 15 + Math.floor(Math.random() * 14) + 1;
  // console.table([genId1, genId2, genId3]);

  const ToHome = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        <div onClick={ToHome} className="dynamic-header">
          <button className="dynamic-btn" onClick={() => navigate(-1)}>
            ⬅ Back
          </button>
          <div className="dynamic-header-name">
            <div className="dynthe">The</div>
            <div className="dynsiren">Siren</div>
          </div>
        </div>
        <hr />
        <div className="dynamic-block">
          <div className="clap">
            <span className="clap-inner">
              <img id="cimg" src={clapimg} alt="img" />
              9.8k
            </span>
            <span className="clap-inner">
              <img id="cimg" src={shareimg} alt="img" />
              Share this article
            </span>
          </div>
          <div className="dynamic-middle">
            <div className="dynamic-heading">
              <h3>{dyndata.heading}</h3>
            </div>
            <div className="user">
              <div className="userdetails">
                <img id="userimg" src={img} alt="img" />
                <div>
                  <p>Arbab khan</p>
                  <p className="userimg-date">Sep 20, 2023 16 min read</p>
                </div>
              </div>
              <div className="user-social">
                <div className="fotterSocialMedia">
                  <Instagram /> <Facebook /> <LinkedIn /> <Twitter />
                </div>
              </div>
            </div>
            <div className="dynamic-img-block">
              <img className="dynamic-img" src={dyndata.images} alt="pic" />
              <p>{dyndata.description}</p>
            </div>

            <div className="middle-below-block">
              <div>
                <hr className="dyn-down-hr" />
              </div>
              <div className="middle-below-clap-block">
                <span className="clap-inner down-clap-inner">
                  <img id="cimg" src={clapimg} alt="img" />
                  9.8k
                </span>
              </div>
              <div className="middle-below-user-block">
                <div className="userdetails">
                  <img id="userimg1" src={img} alt="img" />
                  <div>
                    <p>Arbab khan</p>
                    <p className="userimg-date">Sep 20, 2023 16 min read</p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default Dynamiccompo;
