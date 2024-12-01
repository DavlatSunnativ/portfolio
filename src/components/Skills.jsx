import React, { useEffect, useState } from "react";
import html from "../img/html-5.png";
import css from "../img/css3.png";
import react from "../img/react.png";
import bootstrap from "../img/bootstrap.png";
import java from "../img/java.png";
import sql from "../img/postgresql.png";
import python from "../img/python.png";
import postman from "../img/postman.png";
import com from "../img/communication.png";
import adaptivity from "../img/adaptivity.png";
import creativity from "../img/creativity.png";
import empathy from "../img/honesty.png"; 


const Skills = () => {
  const [skillsContent, setSkillsContent] = useState(null);
  const [activeButton, setActiveButton] = useState("frontend");

  useEffect(() => {
    frontSkills();
  }, []);

  function frontSkills() {
    setSkillsContent(
      <div className="row">
        <div className="col-lg-3">
          <div className="card p-1" id="1-skill">
            <img className="card-img-top" src={html} alt="" />
            <div className="card-text text-center">HTML</div>
            <div>
              <p>
                Proficient in HTML, with the ability to structure web pages
                effectively and ensure semantic and accessible markup for better
                SEO and usability.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card p-1" id="2-skill">
            <img className="card-img-top" src={css} alt="" />
            <div className="card-text text-center">CSS</div>
            <div>
              <p>
                Skilled in CSS, creating visually appealing, responsive designs,
                and implementing animations and transitions to enhance user
                experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card p-1" id="3-skill">
            <img className="card-img-top" src={react} alt="" />
            <div className="card-text text-center">React</div>
            <div>
              <p>
                Experienced in React, developing dynamic, component-based web
                applications, leveraging state management, hooks, and reusable
                components.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card p-1" id="4-skill">
            <div className="box">
              <img className="card-img-top" src={bootstrap} alt="" />
              <div className="card-text text-center">Bootstrap</div>
              <div>
                <p>
                  Proficient in Bootstrap, designing responsive, mobile-first
                  websites with pre-built components, customizable themes, and
                  grid-based layouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function hardSkills() {
    setSkillsContent(
      <div className="row">
        <div className="col-lg-3">
          <div className="card p-1" id="1-skill">
            <img className="card-img-top" src={java} alt="" />
            <div className="card-text text-center">Java</div>
            <div>
              <p>
                Proficient in Java, with expertise in object-oriented
                programming, multithreading, and developing scalable
                applications for various platforms.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card p-1" id="2-skill">
            <img className="card-img-top" src={sql} alt="" />
            <div className="card-text text-center">PostgreSQL</div>
            <div>
              <p>
                Skilled in PostgreSQL, with experience in database design, query
                optimization, and ensuring data integrity.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card p-1" id="3-skill">
            <img className="card-img-top" src={python} alt="" />
            <div className="card-text text-center">Python</div>
            <div>
              <p>
                Proficient in Python, with a strong understanding of its syntax,
                data structures. Experienced in using Python for problem
                solving.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card p-1" id="4-skill">
            <div className="box">
              <img className="card-img-top" src={postman} alt="" />
              <div className="card-text text-center">Postman</div>
              <div>
                <p>
                  Proficient in Postman for testing and documenting APIs,
                  ensuring the reliability and functionality of web services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function softSkills() {
    setSkillsContent(
      <div className="row">
        <div className="col-lg-3">
          <div className="card p-1" id="1-skill">
            <img className="card-img-top" src={creativity} alt="" />
            <div className="card-text text-center">Creativity</div>
            <div>
              <p>
                Creative problem solver with a passion for designing innovative
                solutions and approaches to challenges.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card p-1" id="2-skill">
            <img className="card-img-top" src={adaptivity} alt="" />
            <div className="card-text text-center">Adaptivity</div>
            <div>
              <p>
                Highly adaptable, able to quickly adjust to new technologies,
                environments, and changing project requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card p-1" id="3-skill">
            <img className="card-img-top" src={empathy} alt="" />
            <div className="card-text text-center">Empathy</div>
            <div>
              <p>
                Strong ability to understand and share the feelings of others,
                fostering positive relationships and a collaborative work
                environment.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="card p-1" id="4-skill">
            <div className="box">
              <img className="card-img-top" src={com} alt="" />
              <div className="card-text text-center">Communication</div>
              <div>
                <p>
                  Effective communicator, skilled in articulating ideas clearly
                  and collaborating within diverse teams to achieve goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container align-items-center justify-content-center">
      <div className="row">
        <h1 className="section-header">Skills</h1>
        <div className="btn-group align-items-center mt-5">
          <button
            onClick={() => {
              frontSkills();
              setActiveButton("frontend");
            }}
            className={
              activeButton == "frontend"
                ? "btn btn-outline-light active text-dark "
                : "btn btn-outline-dark"
            }
            aria-current="page"
          >
            Front-End Skills
          </button>
          <button
            onClick={() => {
              hardSkills();
              setActiveButton("hard");
            }}
            className={
              activeButton == "hard"
                ? "btn btn-outline-light active text-dark"
                : "btn btn-outline-dark"
            }
            aria-current="page"
          >
            Other Hard Skills
          </button>
          <button
            onClick={() => {
              softSkills();
              setActiveButton("soft");
            }}
            className={
              activeButton == "soft"
                ? "btn btn-outline-light active text-dark"
                : "btn btn-outline-dark"
            }
          >
            Soft Skills
          </button>
        </div>
        <div className="mt-3">{skillsContent}</div>
      </div>
    </div>
  );
};

export default Skills;
