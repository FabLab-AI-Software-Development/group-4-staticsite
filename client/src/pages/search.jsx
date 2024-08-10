import React from "react";
import Nav from "../components/nav/nav";

const Search = () => {
  return (
    <div>
      <Nav />
      <h1>Search</h1>;
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>User Login and Event Management</title>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="mystyle.css" />
      {/* Modern Html */}
      <section className="fluid" style={{ backgroundColor: "#3641b8" }}>
        <div className="container fluid">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="login_img.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      {/* login form */}
                      <form id="loginForm">
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          />
                          <span className="h1 fw-bold mb-0">
                            <img
                              src="login_logo.jpg"
                              alt="epstrong_logo"
                              style={{ borderRadius: "1.5rem", width: 50 }}
                            />
                          </span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Sign into your account
                        </h5>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="text"
                            id="username"
                            className="form-control form-control-lg"
                            required
                          />
                          <label className="form-label" htmlFor="username">
                            Username
                          </label>
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="password"
                            id="psswd"
                            className="form-control form-control-lg"
                            required
                          />
                          <label className="form-label" htmlFor="psswd">
                            Password
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          {/* <button data-mdb-button-init data-mdb-ripple-init class="btn btn-dark btn-lg btn-block" type="button">Login</button> */}
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick="checkUser()"
                          >
                            Sign on
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Don't have an account?{" "}
                          <a href="#!" style={{ color: "#393f81" }}>
                            Register here
                          </a>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                      {/* registration form */}
                      {/* Registration 8 - Bootstrap Brain Component */}
                      <div id="registrationSection" style={{ display: "none" }}>
                        <div className="row g-0">
                          {/* <div class="col-12 col-md-6">
                <img class="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy" src="./login_logo.jpg" alt="Welcome back you've been missed!">
                <div class="col-12 col-md-6 d-flex align-items-center justify-content-center"> */}
                          <div className="col-12 col-lg-11 col-xl-10">
                            <div className="card-body p-3 p-md-4 p-xl-5">
                              <div className="row">
                                <div className="col-12">
                                  <div className="mb-5">
                                    <div className="text-center mb-4">
                                      <a href="#!">
                                        {/* <img src="./assets/img/bsb-logo.svg" alt="BootstrapBrain Logo" width="175" height="57"> */}
                                        <img
                                          src="login_logo.jpg"
                                          alt="epstrong_logo"
                                          width={50}
                                        />
                                      </a>
                                    </div>
                                    <h2 className="h4 text-center">
                                      Registration
                                    </h2>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <div className="d-flex gap-3 flex-column">
                                    <a
                                      href="#!"
                                      className="btn btn-lg btn-outline-dark"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-google"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                      </svg>
                                      <span className="ms-2 fs-6">
                                        Log in with Google
                                      </span>
                                    </a>
                                  </div>
                                  <p className="text-center mt-4 mb-5">
                                    Or enter your details to register
                                  </p>
                                </div>
                              </div>
                              <form action="#!" autoComplete="off">
                                <div className="row gy-3 overflow-hidden">
                                  <div className="col-12">
                                    <div className="form-floating mb-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        name="username"
                                        id="regUsername"
                                        placeholder="User Name"
                                        required
                                      />
                                      <label
                                        htmlFor="regUsername"
                                        className="form-label"
                                      >
                                        Username
                                      </label>
                                    </div>
                                  </div>
                                  {/* <div class="col-12">
                          <div class="form-floating mb-3">
                            <input type="text" class="form-control" name="lastName" id="lastName" placeholder="First Name" required>
                            <label for="lastName" class="form-label">Last Name</label>
                          </div>
                        </div> */}
                                  <div className="col-12">
                                    <div className="form-floating mb-3">
                                      <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        id="regEmail"
                                        placeholder="name@example.com"
                                        required
                                      />
                                      <label
                                        htmlFor="regEmail"
                                        className="form-label"
                                      >
                                        Email
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-floating mb-3">
                                      <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        id="regPsswd"
                                        defaultValue
                                        placeholder="Password"
                                        required
                                      />
                                      <label
                                        htmlFor="regPsswd"
                                        className="form-label"
                                      >
                                        Password
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-floating mb-3">
                                      <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        id="confirmPsswd"
                                        defaultValue
                                        placeholder="Password"
                                        required
                                      />
                                      <label
                                        htmlFor="confirmPsswd"
                                        className="form-label"
                                      >
                                        Confirm Password
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="form-check">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue
                                        name="iAgree"
                                        id="iAgree"
                                        required
                                      />
                                      <label
                                        className="form-check-label text-secondary"
                                        htmlFor="iAgree"
                                      >
                                        I agree to the{" "}
                                        <a
                                          href="#!"
                                          className="link-primary text-decoration-none"
                                        >
                                          terms and conditions
                                        </a>
                                      </label>
                                    </div>
                                  </div>
                                  <div className="col-12">
                                    <div className="d-grid">
                                      <button
                                        className="btn btn-dark btn-lg"
                                        type="button"
                                        onClick="registerNewUser()"
                                      >
                                        Sign up
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                              <div className="row">
                                <div className="col-12">
                                  <p className="mb-0 mt-5 text-secondary text-center">
                                    Already have an account?{" "}
                                    <a
                                      href="#!"
                                      className="link-primary text-decoration-none"
                                    >
                                      Sign in
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* EVENT SECTION */}
                      <div id="eventSection" style={{ display: "none" }}>
                        <div className="mb-5">
                          <div className="text-center mb-4">
                            <a href="#!">
                              <img
                                src="login_logo.jpg"
                                alt="epstrong_logo"
                                width={50}
                                style={{ borderRadius: "1.5rem" }}
                              />
                            </a>
                          </div>
                          <h2 className="h2 text-center">Add New Event</h2>
                        </div>
                        <form id="eventForm" autoComplete="off">
                          <div className="row gy-3 overflow-hidden">
                            <div className="col-12">
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="eventname"
                                  id="eventname"
                                  placeholder="Event Name"
                                  required
                                />
                                <label
                                  htmlFor="eventname"
                                  className="form-label"
                                >
                                  Event Name
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="location"
                                  id="location"
                                  placeholder="Location"
                                  required
                                />
                                <label
                                  htmlFor="location"
                                  className="form-label"
                                >
                                  Location
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-floating mb-3">
                                <input
                                  type="date"
                                  className="form-control"
                                  name="date"
                                  id="date"
                                  placeholder="Date"
                                  required
                                />
                                <label htmlFor="date" className="form-label">
                                  Date
                                </label>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="d-grid">
                                <button
                                  className="btn btn-dark btn-lg"
                                  type="button"
                                  onClick="addEvent()"
                                >
                                  Add Event
                                </button>
                              </div>
                            </div>
                            {/* SEARCH EVENTS */}
                            <h3>Search Events</h3>
                            <form id="searchForm" autoComplete="off">
                              <label htmlFor="search">Search:</label>
                              <input
                                type="text"
                                id="search"
                                name="search"
                                placeholder="Search by name, location, or date"
                              />
                              <br />
                              <br />
                              <button type="button" onClick="searchEvents()">
                                Search
                              </button>
                            </form>
                            <div id="eventResults" />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
