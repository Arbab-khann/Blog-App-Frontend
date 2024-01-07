import React, { useContext } from "react";
import { Store } from "./Store";
import YoutubeEmbed from "./YoutubeEmbed";
import Footer from "./Footer";
import Navbar from "./Header/Navbar";
function Home() {
  const [data] = useContext(Store);

  return (
    <>
      <Navbar />
      <div className="home-main">
        <div className="home-block1">
          <div className="big">
            {data
              .filter((data) => data.hometype === "home-first-big")
              .map((item, index) => {
                return (
                  <div key={index} className=" home-first-big-inner ">
                    <div className="home-first-big-img">
                      <img id="h-first-big" src={item.images} alt="img" />
                    </div>
                    <div className="home-first-big-text">
                      <h3>{item.heading}</h3>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="big-side">
            {data
              .filter((data) => data.type === "home-first-main-side")
              .map((item, index) => {
                return (
                  <div key={index} className=" home-first-big-side-inner ">
                    <div className="home-first-big-side-img">
                      <img id="home-big-side-img" src={item.images} alt="img" />
                    </div>
                    <div className="home-first-big-side-text">
                      <h3>{item.heading}</h3>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="home-block2-main data-main-block">
          <h2>The Latest</h2>
          <hr className="hr-top" />

          <div className="home-block2">
            {data
              .filter((data) => data.type === "thelatest")
              .map((item, index) => {
                return (
                  <div key={index} className="home-block2-inner">
                    <div className="h-block2-img">
                      <img src={item.images} alt="img" />
                    </div>
                    <div className="h-block2-img-text">
                      <h3>{item.heading}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="home-block3-main data-main-block">
          <div className="home-block3-right">
            <h2>Latest Articles</h2>
            <hr className="hr-top" />
            {/* <div className="h-block3-right-firstblock">
              {data
                .filter((data) => data.story === "hollytop")
                .map((item, index) => {
                  return (
                    <>
                      <div className="h-block3-right1" key={index}>
                        <div className="h3-block-img">
                          <img id="h-block3-img" src={item.images} alt="pic" />
                        </div>
                        <div className="h-block3-right1-text">
                          <div className="h-block3-right1-text-inner">
                            <h3>{item.heading}</h3>
                            <p>{item.description}</p>
                            <p>Bollywood {item.date}</p>
                          </div>
                        </div>
                      </div>

                      
                    </>
                  );
                })}
            </div> */}
            <div className="h-block3-right-2block">
              {data
                .filter((data) => data.story === "homestory")
                .map((item, index) => {
                  return (
                    <div key={index}>
                      <hr className="hr" />
                      <div className="h-block3-2block">
                        <div className="h-block3-2block-img">
                          <img
                            id="h-block3-down-img"
                            src={item.images}
                            alt="pic"
                            height={100}
                            width={150}
                          />
                        </div>
                        <div className="h-block3-2block-text">
                          <h3 id="h-text">{item.heading}</h3>
                          <p id="h-text1">{item.description}</p>
                          <p>Bollywood {item.date}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="h-block3-right-3block">
              <img
                src="https://im.indiatimes.in/content/2023/Jun/world-environment-day-20233_647ce51231b2c.jpg?w=1200&h=900&cc=1"
                alt="pic"
              />
            </div>
          </div>
          <div className="home-block3-left">
            <h2>Top Post</h2>
            <hr className="hr-top" />
            <div className="ad-video">
              {/* <h1>Youtube Embed</h1> */}
              <YoutubeEmbed embedId="vgI1DbH1gFc" />
            </div>
            <div className="story-block" id="h-b3-left-topstory">
              <div className="data-main-bock belowtop-main home-story-left">
                {data
                  .filter((data) => data.story === "techbelowtop")
                  .map((item, index) => {
                    return (
                      <div key={index}>
                        <hr className="hr" />
                        <div children="beloptop-main">
                          <div className="belowtop-block">
                            <div className="data-block belowtop">
                              <img
                                id="belowtop-img"
                                src={item.images}
                                alt="pic"
                                height={100}
                                width={150}
                              />
                              <div className="data-block-text belowtop-text">
                                <h3>{item.heading}</h3>

                                <p>
                                  {item.categories}
                                  {item.date}
                                </p>
                              </div>
                            </div>
                            <div className="div-num">{item.storynum}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="home-block4">
          <div className="Latest-Story-top">
            <h2>Latest Story</h2>
            <hr className="hr-top" />
          </div>

          <div className="story-container">
            <div className="latest-story1">
              {data
                .filter((data) => data.type === "latest-story1")
                .map((item, index) => {
                  return (
                    <div className="latest-story" key={index}>
                      <div className="latest-story-text">
                        <h3>{item.heading}</h3>
                        <p>{item.description}</p>
                      </div>

                      <p>Fitness {item.date}</p>
                    </div>
                  );
                })}
            </div>
            <hr className="hidden" />
            <div className="latest-story2">
              {data
                .filter((data) => data.type === "latest-story2")
                .map((item, index) => {
                  return (
                    <div className="latest-story" key={index}>
                      <div className="latest-story-text">
                        <h3>{item.heading}</h3>
                        <p>{item.description}</p>
                      </div>
                      <p>Fitness {item.date}</p>
                    </div>
                  );
                })}
            </div>
            <hr className="hidden" />
            <div className="latest-story3">
              {data
                .filter((data) => data.type === "latest-story3")
                .map((item, index) => {
                  return (
                    <div className="latest-story" key={index}>
                      <div className="latest-story-text">
                        <h3>{item.heading}</h3>
                        <p>{item.description}</p>{" "}
                      </div>
                      <p>Fitness {item.date}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
