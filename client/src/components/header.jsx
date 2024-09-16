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
              <li className="nav-item"><a className="nav-link" href="/events">Events</a></li>
              <li className="nav-item"><a className="nav-link" href="/services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="/search">Search Events</a></li>
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
          <h2 className="section-heading text-uppercase" id="biz">MI Concierge</h2>
          <h3>El Paso TX</h3>
          <h3 className="section-subheading text-muted">See what's going on this week!</h3>
        </div>
        <div className="portfolio row">
          <div className="col-lg-3 col-md-4 col-xs-6 mb-4">
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
          <div className="col-lg-3 col-md-4 col-xs-6 mb-4">
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
          <div className="col-lg-3 col-md-4 col-xs-6 mb-4">
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

              {/* <!-- Modal --> */}
<div id="portfolioModal3" className="modal fade" tabIndex="-1" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal Title</h5>
        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <p>Modal body text goes here.</p>
        {/* <!-- Events Section --> */}
{/* <section id="events"> */}
  <h2>Upcoming Events</h2>
  <ul className="event-list">
    <li>
      <h3>Event 1: Concert</h3>
      <p>Date: March 12, 2023</p>
      <p>Location: Downtown Theater</p>
    </li>
    <li>
      <h3>Event 2: Comedy Show</h3>
      <p>Date: April 15, 2023</p>
      <p>Location: Laugh Out Loud Comedy Club</p>
    </li>
    <li>
      <h3>Event 3: Music Festival</h3>
      <p>Date: May 20, 2023</p>
      <p>Location: City Park</p>
    </li>
    <li>
      <h3>Event 4: Theater Performance</h3>
      <p>Date: June 10, 2023</p>
      <p>Location: Community Theater</p>
    </li>
    <li>
      <h3>Event 5: Dance Recital</h3>
      <p>Date: July 17, 2023</p>
      <p>Location: Dance Studio</p>
    </li>
  </ul>
  <form className="search-form">
    <input type="text" placeholder="Search for more events..."/>
    <button type="submit">Search</button>
  </form>
{/* </section> */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>




            </div>
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
