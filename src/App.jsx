import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const App = () => {
  return (
    <div className="pl-10">
      <h1 className="font-bold text-3xl">
        ________________________________________________________________________________
      </h1>
      <h1 className="text-5xl py-10">Confidence Mawuli Affang</h1>
      <h2 className="text-2xl text-green-600 mb-10">
        Aspiring Software Engineer
      </h2>
      <div className="mb-10 font-semibold">
        1111 main street Wayne, Ne
        <br />
        Wayne, Ne, 68787
        <br />
        (319) 409-0805
        <br />
        confidenceaffang@gmail.com
      </div>
      <div className="mb-10 font-semibold">
        <h2 className="text-green-600 text-2xl">Skills</h2>
        HTML, JavaScript, Kotlin, Figma, Resposnive Web Design, Technical
        Writing
      </div>
      <div className="mb-10">
        <h2 className="text-green-600 text-2xl mb-5">Education</h2>
        <h2 className="text-2xl text-blue-600">
          Wayne State College, Wayne, NE - Bachelor's Degree
        </h2>
        <div>
          <h3 className="font-semibold">August 2024 to May 2027</h3>I joined ACM
          club here
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-green-600 text-2xl mb-5">Experience</h2>
        <h2 className="text-2xl text-blue-600">
          Ckodon Foundation, Accra, Ghana - Software Engineering Intern
        </h2>
        <div className="font-semibold">
          <h3 className="font-semibold mb-5">December 2023 to March 2024</h3>
          <ul>
            <li>
              Built a Wellness feature for fitness, meditation, and music with
              Slack/Teams integration
            </li>
            <li>
              Collaborated in a team of 7 to build 2 full-stack applications
              from scratch, including an e-commerce platform, strengthening
              coding skills and version control proficiency in Git
            </li>
            <li>
              Wrote clean, scalable, and maintainable React and Nodejs code,
              ensuring long-term project stability and ease of future
              enhancements
            </li>
            <li>
              Actively received mentorship from senior engineers, addressing
              mistakes and refining problem-solving approaches, which enhanced
              technical skills and contributed to continuous professional growth
            </li>
          </ul>
        </div>
      </div>
      <div className="mb-20">
        <h2 className="text-2xl text-green-600 mb-10">Accross the Internet </h2>
        <div className="flex flex-row">
          <a href="https://github.com/confidenceaffang">
            <AiFillGithub className="text-3xl mr-10" />
          </a>
          <a href="https://www.linkedin.com/in/confidence-affang-22603b2b2/">
            <AiFillLinkedin className="text-3xl mr-10" />
          </a>
          <a href="https://x.com/CAffang41919">
            <AiFillTwitterCircle className="text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
