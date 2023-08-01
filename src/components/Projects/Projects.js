import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imagen_proyect3 from "../../Assets/Projects/Captura_Rick.jpeg";
import imagen_proyect1 from "../../Assets/Projects/Captura_Home.png";
import imagen_proyect2 from "../../Assets/Projects/Captura_Tasty.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagen_proyect1}
              isBlog={false}
              title="El Rincón del Sabiondo"
              description="E-commerce with design and development of the following features: CRUD of products, user registration and authentication, catalog, checkout, payment gateway (MercadoPago), sending of transactional emails and newsletters, shopping cart, management of stock and purchase orders, administration of users and roles, review and rating of purchased products."
              ghLink="https://github.com/Marifuhr/el_rincon_del_sabiondo"
              demoLink="https://el-rincon-del-sabiondo-eta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagen_proyect2}
              isBlog={false}
              title="Tasty Cooking"
              description="Tasty Cooking is a personal project I developed using the knowledge I acquired during my bootcamp at Henry. The goal of the project was to create a cooking app using modern and efficient technologies like React, Redux, Node and Sequelize. The project uses the Spoonacular API to consume recipe information, which has allowed me to enrich the app's database and offer users a more complete experience."
              ghLink="https://github.com/Alemar16/Tasty-Cooking"
              demoLink=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imagen_proyect3}
              isBlog={false}
              title="Proyecto Integrador"
              description="As an integrated project, to fulfill the requirements of module 2 of the bootcamp, it was necessary to create an application using the Rick and Morty API. This was applied utilizing all relevant topics"
              ghLink="https://github.com/Alemar16/Henry-M2_integration_APP"
              demoLink="https://henry-m2-integration-app.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
