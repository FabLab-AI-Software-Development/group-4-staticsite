import React, { } from "react";


function Header() {
  return (
    // <!-- Navigation-->
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand" href="#page-top"><img src="assets/img/Tech.png" alt="ELP Concierge Logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars ms-1" />
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              <li className="nav-item"><a className="nav-link" href="#portfolio">Events</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Chatbot</a></li>
              <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Masthead*/}
      <header className="masthead">
        <div className="container">
              {/* Portfolio Grid*/}
    <section className="page-section bg-dark" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase" id="biz">ELP Concierge</h2>
          <h3 className="section-subheading text-muted">See what's going on this week!</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-6 mb-4">
            {/* Portfolio item 1*/}
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/cactus.webp" alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Outdoors</div>
                <div className="portfolio-caption-subheading text-muted">See the Franklins</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            {/* Portfolio item 2*/}
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/chicos.jpg" alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Food</div>
                <div className="portfolio-caption-subheading text-muted">Hungry?</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4">
            {/* Portfolio item 3*/}
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/folklorico.jpeg" alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Entertainment</div>
                <div className="portfolio-caption-subheading text-muted">Catch some shows</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            {/* Portfolio item 4*/}
            {/* <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/folklorico.jpeg" alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Dance</div>
                <div className="portfolio-caption-subheading text-muted">Let loose, footloose</div>
              </div>
            </div>
          </div> */}
          {/* <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0"> */}
            {/* Portfolio item 5*/}
            {/* <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/cactus.webp" alt="Downtown" />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Only in the 915</div>
                <div className="portfolio-caption-subheading text-muted">All the cultura</div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6"> */}
            {/* Portfolio item 6*/}
            {/* <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                </div>
                <img className="img-fluid" src="assets/img/portfolio/sjp.jpg" alt="..." />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Feeling Lucky?</div>
                <div className="portfolio-caption-subheading text-muted">Click here and find out more</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
          {/* <div className="masthead-subheading">ELP Concierge</div> */}
          {/* <div className="masthead-heading text-uppercase">Explore the Sun City</div> */}
          {/* <a className="btn btn-primary btn-xl text-uppercase" href="#services">Explore</a> */}
        </div>
      </header>
    </div>
    </>
  );
}

export default Header;
