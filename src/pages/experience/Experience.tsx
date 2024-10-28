import React from "react";
import "./experience.scss";
import { title } from "@/components/primitives";

const Experience: React.FC = () => {
  return (
    <div className="experience" id="experience">
      <h1 className={title({ class: "title-port p-8 block" })}>
        Education / Experience
      </h1>
      <div className="timeline">
        <div className="point left">
          <div className="date">
            SEP 2016 <br className="show-mobile" />-<br />
            SEP 2020
          </div>
          <div className="content">
            <h2>
              <b>BSc (HONS) COMPUTING</b> |
              <br />
              Hong Kong Polytechnic University
              <br />
            </h2>
            <h3 className="sm:hidden">Sep 2016 - Sep 2020</h3>
            <p>
              Courses and Dissertation:
              <br />• Programming
              <br />• Design Patterns
              <br />• Dissertation: “Beat the beats” – a rhythm recognition game
            </p>
          </div>
        </div>
        <div className="point right">
          <div className="date">
            MAY 2020 <br className="show-mobile" />-<br />
            Aug 2021
          </div>
          <div className="content">
            <h2>
              <b>Medmind Technology</b> |
              <br />
              Game Developer
            </h2>
            <h3 className="sm:hidden">May 2020 – Aug 2021</h3>
            <p>
              • Created and managed the Neurogym mobile application, a gamified
              cognitive training platform specifically designed for elderly
              users.
              <br />
              <br />• Collaborated on developing a dashboard app for B2B and B2C
              solutions to visualize real-time game scores, facilitating over
              500 live interactions daily.
            </p>
          </div>
        </div>
        <div className="point left">
          <div className="date">
            OCT 2021 <br className="show-mobile" />-<br />
            AUG 2022
          </div>
          <div className="content">
            <h2>
              <b>Autoinsight Limited </b> |
              <br />
              Front End Developer
            </h2>
            <h3 className="sm:hidden">Oct 2021 – Aug 2022</h3>
            <p>
              • Built Autoinsight, a digital transformation platform with
              seamless data visualization, enabling over 50 e-commerce users to
              generate personalized reports.
              <br />
              <br />• Supported ETL transformation for a banking institution,
              analyzing customer credit scores to determine new credit card
              eligibility.
            </p>
          </div>
        </div>
        <div className="point right">
          <div className="date">
            AUG 2022 <br className="show-mobile" />-<br />
            SEP 2024
          </div>
          <div className="content">
            <h2>
              <b>The Hong Kong Polytechnic University</b> |
              <br />
              Analyst
            </h2>
            <h3 className="sm:hidden">Aug 2022 – Sep 2024</h3>
            <p>
              • Implemented a new centralized online payment platform,
              processing over 3,000 university payments daily through various
              payment channels.
              <br />
              <br />• Coordinated directly with vendors to integrate Alipay and
              WeChat Pay, streamlining payments for students in Mainland China
              and reducing unresolved payment rates by 25%.
              <br />
              <br />• Developed an admin portal for the Finance Office, enabling
              users to manage and generate over 500 distinct payment events and
              journal postings monthly.
              <br />
              <br />• Revamped a part-time payment system to dynamically
              calculate employees' salaries. Reducing the time required for data
              entry by 70%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
