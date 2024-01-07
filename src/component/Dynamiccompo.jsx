import React, { useContext } from "react";
import { Store } from "./Store";
import { useNavigate, useParams } from "react-router-dom";
import img from "./image_processing20220801-17461-11ne70y.png";
import clapimg from "./rythm@2x.png";
import shareimg from "./share@2x.png";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

import Footer from "./Footer";

function Dynamiccompo() {
  const [dynamicdata] = useContext(Store);
  const id = useParams().id;

  const genId1 =
    Math.floor(id / 15.01) * 15 + Math.floor(Math.random() * 14) + 1;
  const genId2 =
    Math.floor(id / 15.01) * 15 + Math.floor(Math.random() * 14) + 1;
  const genId3 =
    Math.floor(id / 15.01) * 15 + Math.floor(Math.random() * 14) + 1;

  const navigate = useNavigate();
  const ToHome = () => {
    navigate("/");
  };

  return (
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
      {dynamicdata
        .filter((data) => data.id === id)
        .map((item, index) => {
          return (
            <>
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
                    <h3>{item.heading}</h3>
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
                    <img className="dynamic-img" src={item.images} alt="pic" />
                    <p>{item.description}</p>
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
                          <p className="userimg-date">
                            Sep 20, 2023 16 min read
                          </p>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>

              <div className="more-from">
                <h2 className="more-from-heading">More From Siren</h2>
                <hr />
                <div className="more-from-container">
                  <div className="div1">
                    <div
                      className="more-from-inner"
                      key={dynamicdata[genId1 - 1].id}
                    >
                      <img src={dynamicdata[genId1 - 1].images} alt="img" />
                      <div id="more-from-headtext">
                        <h3>{dynamicdata[genId1 - 1].heading}</h3>
                      </div>
                    </div>
                    <div className="userdetails divuserdetails">
                      <img id="userimg2" src={img} alt="img" />
                      <div>
                        <p>Arbab khan</p>
                        <p className="userimg-date divuserdetails-p">
                          Sep 20, 2023 16 min read
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="div2">
                    <div
                      className="more-from-inner"
                      key={dynamicdata[genId2 - 1].id}
                    >
                      <img src={dynamicdata[genId2 - 1].images} alt="img" />
                      <div id="more-from-headtext">
                        <h3>{dynamicdata[genId2 - 1].heading}</h3>
                      </div>
                    </div>
                    <div className="userdetails divuserdetails">
                      <img id="userimg2" src={img} alt="img" />
                      <div>
                        <p>Arbab khan</p>
                        <p className="userimg-date divuserdetails-p">
                          Sep 20, 2023 16 min read
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="div3">
                    <div
                      className="more-from-inner"
                      key={dynamicdata[genId3 - 1].id}
                    >
                      <img src={dynamicdata[genId3 - 1].images} alt="img" />
                      <div id="more-from-headtext">
                        <h3>{dynamicdata[genId3 - 1].heading}</h3>
                      </div>
                    </div>
                    <div className="userdetails divuserdetails">
                      <img id="userimg2" src={img} alt="img" />
                      <div>
                        <p>Arbab khan</p>
                        <p className="userimg-date divuserdetails-p">
                          Sep 20, 2023 16 min read
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Footer />
            </>
          );
        })}
    </div>
  );
}

export default Dynamiccompo;
