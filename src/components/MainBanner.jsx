import React, { useEffect, useState } from "react";
import minion from "../img/minions.png";

const MainBanner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const toRotate = ["Web", "Front-End"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const period = 1500;
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    let interval = setInterval(() => {
      setIsVisible((prev) => !prev)();
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let currentText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(currentText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && currentText == fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && currentText == "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="main-banner">
      <div className="row">
        <div
          className="col-lg-7 md-7 sm-12 d-flex flex-column align-items-center justify-content-center "
          id="col1"
        >
          <h1 className="mt-5">
            Hi, I'm<span id="Davlat"> Davlat Sunnatov</span>
            <div
              className="txt-rotate"
              dataPeriod="1000"
              data-rotate='["Web", "Front-End"]'
            >
              <span className="wrap">
                {text}
                <span
                  className="symbol"
                  style={{ visibility: isVisible ? "visible" : "hidden" }}
                >
                  |
                </span>
                Developer
              </span>
            </div>
          </h1>
          <p className="ms-5">
            Welcome to my portfolio! This website is a showcase of my skills and
            abilities as a frontend developer. Designed and built entirely by
            me, it demonstrates my proficiency in modern web technologies,
            including HTML, CSS, JavaScript, React. Feel free to explore and
            discover how I can help bring your id eas to life with the latest web
            development tools and techniques!
          </p>

          <button className="btn btn-outline-dark ps-4 pe-4 pb-2 pt-2">
            Let's connect
          </button>
        </div>
        <div
          className="col-lg-5 md-5 sm-12 align-items-center justify-content-center  "
          id="col2"
        >
          <img src={minion} alt="" className="minion mt-5" />
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
