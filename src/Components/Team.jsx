import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import luca from "../../src/Images/Headshots/luca.png";
import edward from "../../src/Images/Headshots/edward.png";
import kyle from "../../src/Images/Headshots/kyle.png";
import monique from "../../src/Images/Headshots/monique.png";
import tom from "../../src/Images/Headshots/tom.png";
import mercy from "../../src/Images/Headshots/mercy.png";
import pablo from "../../src/Images/Headshots/pablo.png";
import anthony from "../../src/Images/Headshots/anthony.png";
import catherine from "../../src/Images/Headshots/catherine.png";
import jan from "../../src/Images/Headshots/jan.png";
import sean from "../../src/Images/Headshots/sean.png";
import mustafa from "../../src/Images/Headshots/mustafa.png";
import angela from "../../src/Images/Headshots/angela.png";
import cam from "../../src/Images/Headshots/cam.png";
import nic from "../../src/Images/Headshots/nic.png";
import owen from "../../src/Images/Headshots/owen.png";
import grady from "../../src/Images/Headshots/grady.png";
import "../sass/team.css";

//resource: https://mdbootstrap.com/docs/react/sections/team/

const TeamPage = () => {
  return (
    <>
    <div className="team-header">
            <h2 className="h1-responsive font-weight-bold my-5">
              Our amazing team
            </h2>
            <p>XX Members | 4 Faculties | 14 Teams | XX <p style={{wordSpacing: "0px"}}>Weeks of Education</p></p>
          </div>
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <MDBRow className="top-row">
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                //src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                src={luca}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Luca Trombetta"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Luca Trombetta</h5>
              <p className="text-uppercase blue-text">Head of Education</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={edward}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Edward Qi"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Edward Qi</h5>
              <p className="text-uppercase blue-text">Director</p>
              <ul className="list-unstyled mb-0">
                {/* <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a> */}
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={kyle}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Kyle Singer"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Kyle Singer</h5>
              <p className="text-uppercase blue-text">Head of Operations</p>
              <ul className="list-unstyled mb-0">
                <a href="https://www.linkedin.com/in/kyle-singer-engineering-physics/" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="https://github.com/ksinger12" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>

          <MDBRow className="top-row">
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={monique}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Monique Rivard"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Monique Rivard</h5>
              <p className="text-uppercase blue-text">Logistics Executive</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={tom}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Tomasz Stanula"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Tomasz Stanula</h5>
              <p className="text-uppercase blue-text">Logistics Executive</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={mercy}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Mercy Doan"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Mercy Doan</h5>
              <p className="text-uppercase blue-text">Marketing Executive</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={pablo}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Pablo Ortiz"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Pablo Ortiz</h5>
              <p className="text-uppercase blue-text">Marketing Executive</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>

          <MDBRow className="top-row">
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={anthony}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Anthony Reyes"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Anthony Reyes</h5>
              <p className="text-uppercase blue-text">Partnerships Executive</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={catherine}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Catherine Pham"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Catherine Pham</h5>
              <p className="text-uppercase blue-text">Partnerships Executive</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={jan}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Jan Karcz"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Jan Karcz</h5>
              <p className="text-uppercase blue-text">Education Executive</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={sean}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Sean Pollen</h5>
              <p className="text-uppercase blue-text">Education Executive</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>

          <MDBRow className="top-row">
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={mustafa}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Mustafa Tariq"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Mustafa Tariq</h5>
              <p className="text-uppercase blue-text">Portfolio Manager</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={angela}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Angle Chen"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Angela Chen</h5>
              <p className="text-uppercase blue-text">Portfolio Manager</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={cam}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Cam Howard"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Cam Howard</h5>
              <p className="text-uppercase blue-text">Portfolio Manager</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={nic}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Nic Macdonald"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Nic Macdonald</h5>
              <p className="text-uppercase blue-text">Portfolio Manager</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>

          <MDBRow className="top-row">
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={owen}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Owen Borthwick"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Owen Borthwick</h5>
              <p className="text-uppercase blue-text">Portfolio Manager</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src={grady}
                className="rounded-circle z-depth-1 img-fluid"
                alt="Grady Palfrey"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Grady Palfrey</h5>
              <p className="text-uppercase blue-text">Portfolio Manager</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="linkedin" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
      </>
  );
}

export default TeamPage;