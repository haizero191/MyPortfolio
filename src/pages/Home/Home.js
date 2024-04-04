import React, { useRef } from "react";
import "./Home.scss";
import DINO from "../../assets/images/dino_game_1.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
gsap.registerPlugin(useGSAP);

const Home = () => {
  const container = useRef();
  const textContainerRef = useRef(null);

  const words = ["Hello worlds"];
  useGSAP(() => {}, { scope: container });

  return (
    <div className="Home" ref={container}>
      <div className="layout-container">
        <div className="title">
          <h1>HI. I'm developer. </h1>
          <p>Many challenges, many opportunities</p>
        </div>
        <div className="banner">
          <div className="banner-overlay"></div>
          <div className="funny-text">
            <div className="image">
              <img src={DINO} />
            </div>
            <h2 ref={textContainerRef}>No internet connection !</h2>
            <p>Try: </p>
            <ul>
              <li>Checking the network cables, modem and router.</li>
              <li>Restart your computer.</li>
              <li>Restart your computer again.</li>
            </ul>
          </div>
          <div className="sub-text">Nooooooo !</div>
        </div>

        {/* ABOUT SECTION */}
        <div className="about">
          <div className="about-title">
            <h2>About me</h2>
            <p>
              Hello. I'm <b>Hai Nguyen.</b>
            </p>
          </div>
          <div className="about-content">
            <div className="text-content">
              <p>
                I'm a freelancer website developer based in Ho Chi Minh City,
                Viet Nam.
              </p>
              <p>
                My job is to develop websites according to customer
                requirements. Help them convert their manual business model to
                business digital transformation.
              </p>
            </div>
            <img src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/432717297_1497570147841345_2412628688935618347_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEHnS-dpIsqLAEQPf_ttgwyLhPrH1fOJrEuE-sfV84msanQ6cIKN__Oc4es9YGIoLY7MXHa2wKuSnSZWg702pOL&_nc_ohc=qzHMnUQ_iXEAb4xQIKa&_nc_ht=scontent.fsgn2-11.fna&oh=00_AfDrGnn8gB4-oGyP74bCvv2Knk3fpUIl3eTB2_263WM-Og&oe=66144A45" />
          </div>
        </div>
        <div className="line"></div>
        {/* SKILLS SECTION */}
        <div className="skills">
          <div className="skills-title">
            <h2>My skills</h2>
            <p>My skills focus on tecnologies and persons.</p>
          </div>
          <div className="skills-grid">
            <div className="skill">
              <i class="fa-brands fa-html5"></i>
            </div>
            <div className="skill">
              <i class="fa-brands fa-css3-alt"></i>
            </div>
            <div className="skill">
              <i class="fa-brands fa-square-js"></i>
            </div>
            <div className="skill">
              <i class="fa-brands fa-sass"></i>
            </div>
            <div className="skill">
              <i class="fa-brands fa-bootstrap"></i>
            </div>
            <div className="skill">
              <img src="https://assets.awwwards.com/awards/avatar/2152182/652d1de29c2e9754617887.png" />
            </div>
          </div>

          <div className="skills-grid">
            <div className="skill">
              <i class="fa-brands fa-react"></i>
            </div>
            <div className="skill">
              <i class="fa-brands fa-node-js"></i>
            </div>
            <div className="skill">
              <i class="fa-brands fa-salesforce"></i>
            </div>

            <div className="skill">
              <i class="fa-brands fa-git-alt"></i>
            </div>
          </div>
        </div>
        {/* PROJECTS SECTION */}
        <div className="project">
          <div className="project-title">
            <h2>creativity</h2>
            <h2>Design</h2>
          </div>

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
                  src="https://i.pinimg.com/564x/e5/70/80/e57080cb10961df291da006680d7a398.jpg"
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

          <div className="blur"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
