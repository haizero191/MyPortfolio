import React, { useRef } from "react";
import "./Home.scss";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Home = () => {
  const container = useRef();

  useGSAP(
    () => {
      // gsap code here...
      gsap.from(
        ".title",
        {
          opacity: 0,
          y: 10,
          stagger: "1",
        },
        {
          opacity: 0,
          y: 0,
          stagger: "1",
        }
      );
    },
    { scope: container }
  );

  return (
    <div className="Home" ref={container}>
      <div className="layout-container">
        <div className="title">
          <h1>HI. I'm developer</h1>
          <p>Many challenges, many opportunities</p>
        </div>
        <div className="banner">
          <div className="banner-overlay"></div>
          <div className="funny-text">
            <p>Hello world !</p>
          </div>
          <div className="sub-text">Niceeeee !</div>
        </div>

        <div className="Project">
          <h2>Design and creativity</h2>
          <div className="board-grid">
            <div className="board-grid-item">
              <div className="image">
                <img
                  src="https://i.pinimg.com/564x/d2/1e/4b/d21e4bf7bf0a89fb2c9a3b9b41dba462.jpg"
                  alt="..."
                />
              </div>
            </div>

            <div className="board-grid-item">
              <div className="image">
                <img
                  src="https://i.pinimg.com/564x/a7/22/55/a72255774503d6568f2d4ea9d28046c5.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="board-grid-item">
              <div className="image">
                <img
                  src="https://i.pinimg.com/564x/2c/17/e3/2c17e3cfcc37c542225f09197ee0636a.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="board-grid-item">
              <div className="image">
                <img
                  src="https://i.pinimg.com/564x/92/14/36/921436e3c7aa22e9e14d3cae7d951c20.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="board-grid-item">
              <div className="image">
                <img
                  src="https://i.pinimg.com/564x/61/04/09/610409da581395a16b7e2b56032846b9.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="board-grid-item">
              <div className="image">
                <img
                  src="https://i.pinimg.com/564x/e5/70/80/e57080cb10961df291da006680d7a398.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="board-grid-item">
              <div className="image">
                <img
                  src="https://i.pinimg.com/736x/ea/51/fa/ea51fa32d74c68072d814ab061d1a0c4.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="board-grid-item">
              <div className="image">
                <img
                  src="https://i.pinimg.com/564x/25/e8/af/25e8af3b50281397cacd3d3811b56820.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="board-grid-item">
              <div className="image">
                <img
                  src="https://i.pinimg.com/564x/80/e6/6c/80e66c138131594b2a4c470062d7158e.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="board-grid-item">
              <div className="image">
                <img
                  src="https://i.pinimg.com/564x/ff/51/d6/ff51d6049a90b66c3887a080cf6c0535.jpg"
                  alt="..."
                />
              </div>
            </div>
            <div className="board-grid-item">
              <div className="image">
                <img
                  src="https://i.pinimg.com/564x/d9/85/5f/d9855f2948d7cf5a0b9ae253c52647e6.jpg"
                  alt="..."
                />
              </div>
            </div>
          </div>

          <div className="blur">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
