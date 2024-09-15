import React, { } from "react";

function Footer() {
  return (
    <>
    <footer className="footer py-4">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 text-lg-start">Mi Concierge made with &#9829; 2024</div>
          <div className="col-lg-4 my-3 my-lg-0">
            {/* <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Twitter"><i className="fab fa-twitter" /></a> */}
            {/* <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="Facebook"><i className="fab fa-facebook-f" /></a> */}
            {/* <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a> */}
          </div>
          <div className="col-lg-4 text-lg-end">
            <a className="link-light text-decoration-none me-3" href="#!">Privacy Policy</a>
            <a className="link-light text-decoration-none" href="#!">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>

    </>
  );
}

export default Footer;
