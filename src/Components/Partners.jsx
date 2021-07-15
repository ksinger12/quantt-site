import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import "../sass/partners.css";

//resource: https://mdbootstrap.com/docs/react/sections/team/

const Partners = () => {
  return (
    <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-5">
            Our Sponsors
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Our sponsors and partners have the opportunity to become active participants in constructing our education,
            speaking to our members, and new this year, will be receiving an invitation to our conference!<br />
            Interested in becoming a sponsor or partner? Contact us <a href = "mailto: partnerships@quantt.ca">here</a>.
          </p>
          <MDBRow>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src="https://media-exp3.licdn.com/dms/image/C560BAQFzQePG8MEcJw/company-logo_200_200/0/1519874641070?e=2159024400&v=beta&t=Rc1KL4laAvG-EsDOI2oOj0NBT-ulopIAdx_YXkdOiTA"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Polar Asset Management</h5>
              <p className="text-uppercase blue-text">Sponsor</p>
              <p className="grey-text">
                Polar is Canada’s premier multi-strategy hedge fund with $4 billion USD AUM.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="https://polaramp.com/" className="p-2 fa-lg">
                  <MDBIcon fab icon="sistrix" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src="https://renx.ca/wp-content/uploads/2018/01/NationalBank300.jpg"
                className="second-sponsor rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h5 className="font-weight-bold mt-4 mb-3">National Bank</h5>
              <p className="text-uppercase blue-text">Sponsor</p>
              <p className="grey-text">
                One of the largest in Canada, National Bank serves over 2 million personal clients.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="https://www.facebook.com/nationalbanknetworks/" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="https://www.nbc.ca/" className="p-2 fa-lg">
                  <MDBIcon fab icon="sistrix" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src="https://pbs.twimg.com/profile_images/1325857669467439104/M7alqLxx.png"
                className="third-sponsor rounded z-depth-1-half img-fluid"
                alt="QuantConnect"
              />
              
              <h5 className="font-weight-bold mt-4 mb-3">QuantConnect</h5>
              <p className="text-uppercase blue-text">Sponsor</p>
              <p className="grey-text">
                As the leading development platform for algorithmic trading, QuantConnect provides an extensive research environment.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="https://www.facebook.com/QuantConnect/" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="https://www.quantconnect.com/" className="p-2 fa-lg">
                  <MDBIcon fab icon="sistrix" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <img
                tag="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfAnYIfaRX2uGT-pzSS9m6-Xekx2JxxgNDqNQzmMWiZfUbmLo6I4oXK6oSzDyPM9FpEOg&usqp=CAU"
                className="fourth-sponsor rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
                style={{}}
              />
              <h5 className="font-weight-bold mt-4 mb-3">Viewpoint Investment Partners</h5>
              <p className="text-uppercase blue-text">Partner</p>
              <p className="grey-text">
                Viewpoint Investment Partners (VIP) is a boutique investment management firm offering systematic strategies to rivate and institutional investors.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="https://www.facebook.com/viewpointinvestment/" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="https://viewpointinvestment.ca/" className="p-2 fa-lg">
                  <MDBIcon fab icon="sistrix" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
  );
}

export default Partners;