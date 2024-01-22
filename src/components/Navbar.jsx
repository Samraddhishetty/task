import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Navbar.css";
import img1 from "../Assets/img1.png";
import img2 from "../Assets/img2.png";
import img3 from "../Assets/img3.png";
import img4 from "../Assets/img4.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light navigation navigation-bar">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="container flex justify-content-evenly">
          <div
            class="collapse navbar-collapse  flex justify-content-evenly"
            id="navbarNavDropdown nav"
          >
            <div class="nav-item d-flex align-items">
              <a class="nav-link active" aria-current="page" href="#">
                <img src={img1}></img>
              </a>
              <div class="nav-item">
                <a class="nav-link" href="#">
                  <img src={img2}></img>
                  Ваш город: Алматы 
                </a>
              </div>
            </div>

            <div class="nav-item d-flex align-items">
              <a class="nav-link" href="#">
                <img src={img3}></img>
              </a>
              <div className="bpe">
                <div className="col">
                  <div>
                    <p>Время работы:</p>
                  </div>
                  <div>
                    <p>с 9:30 до 18:00 Пн-Пт</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="nav-item dropdown d-flex align-items">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                aria-expanded="false"
              >
                <img src={img4}></img>
              </a>
              <div className="col">
                <p>+7(863) 203 60 48</p>
                <p>+7(863) 203 70 33</p>
              </div>
            </div>

            <div class="nav-item d-flex align-items">
              <a class="nav-link" href="#"></a>
              <button className="btn">Заказать звонок</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
