import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Armando Martínez </span>
            from <span className="purple"> Córdoba, Argentina</span>
            <br /> I consider myself a passionate full stack developer with a
            special focus on frontend and web design. I love creating
            interactive and appealing experiences for users, combining my
            ability to write efficient code with an eye for visual design.
            <br />
            Additionally, I am currently employed as a Teaching Assistant at
            Henry.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> I enjoy reading
            </li>
            <li className="about-activity">
              <ImPointRight /> I play baseball
            </li>
            <li className="about-activity">
              <ImPointRight /> I enjoy Traveling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Armando M</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
