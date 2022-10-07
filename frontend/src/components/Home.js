import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href>
            ASG Platform Talent Center
          </a>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
            />
            <button className="btn btn-outline-success me-2">Search</button>
            <button
              className="btn btn-outline-success me-2"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button
              className="btn btn-outline-success me-2"
              onClick={() => navigate("/")}
            >
              Logout
            </button>
          </form>
        </div>
      </nav>
      <nav id="sidebarMenu" class=" d-lg-block sidebar ">
        <div class="position-sticky">
          <div class="list-group list-group-flush mx-3 mt-4">
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
              aria-current="true"
            >
              <i class="fas fa-tachometer-alt fa-fw me-3"></i>
              <span>Main dashboard</span>
            </a>

            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-lock fa-fw me-3"></i>
              <span>Password</span>
            </a>
            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-line fa-fw me-3"></i>
              <span>Analytics</span>
            </a>

            <a
              href="#"
              class="list-group-item list-group-item-action py-2 ripple"
            >
              <i class="fas fa-chart-bar fa-fw me-3"></i>
              <span>Orders</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
