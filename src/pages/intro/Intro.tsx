import React from "react";
import "./intro.css";
import arrowDown from "./arrow_down.svg";
import { title, subtitle } from "@/components/primitives";
import TextScroller from "@/components/TextScroller";

const Intro: React.FC = () => {
  const textScroller = TextScroller(
    ["React", "TypeScript", "Express", "NextJS", "Spring Boot", "Redux"],
    0,
    -28
  );

  return (
    <div className="intro flex flex-col items-center justify-center" id="intro">
      <div className="space m-4 text-center">
        <div className="inline-block text-left self-start">
          <h1 className={title()}>I'm&nbsp;</h1>
          <h1 className={title({ color: "yellow", size: "lg" })}>
            Henry LEE&nbsp;
          </h1>
          <br />
          <h1 className={title({ class: "block mt-4 mb-4" })}>
            A Full Stack Web Developer
          </h1>
          <h2 className={subtitle({ class: "mt-4" })}>
            Creating stunning applications
          </h2>

          <br className="md:hidden" />
          <span className="hidden md:inline">&nbsp;</span>
          <h2 className={subtitle()}>using&nbsp;</h2>
          {textScroller}
        </div>
      </div>
      <div></div>
      <a href="#experience" className="mt-8">
        <img src={arrowDown} alt="Arrow Down" />
      </a>
    </div>
  );
};

export default Intro;
