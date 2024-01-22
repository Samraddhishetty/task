import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./Heropage.css";
import img5 from "../Assets/img5.png";
import img6 from "../Assets/img6.png";
import img7 from "../Assets/img7.png";

const Heropage = () => {
  return (
    <div className="container-fluid m-0 d-flex whole">
      <div className="smallPage  background px-5 d-flex flex-row justify-content-between w-100">
        <div className="first">
          <p className="Ce">Сервисный центер</p>
          <p className="In">INDESIT в Алматы</p>
          <div className="gap-2">
            <div className="chi">
              <p>Обходитесь без лишних затрат</p>
            </div>
            <div>
              <button className="btn_1">Вызвать мастера</button>
            </div>
            <div className="content">
              <p className="Bbe p-3">
                * Выезд и диагностика бесплатно<br/> при условии ремонта
              </p>
            </div>
            <div className="main_cards d-flex justify-content-evenly">
              <div className="card1">
                <p className="zero">0 </p>
                <p className="text1">
                  ₸ <br />
                  диагностика
                </p>
              </div>
              <div className="card2">
                <p className="one">1 </p>
                <p className="text_2">
                  д
                  <br />
                  ень ремонта{" "}
                </p>
              </div>
              <div className="card3">
                <p className="three">3</p>
                <p className="text_3">
                  года
                  <br />
                  гарантии
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sec-2">
          <div className="back position-relative">
            <img src={img5} className="man" style={{ zIndex: "2" }}></img>
            <img
              src={img6}
              className="position-absolute bottom-0 next"
              style={{ zIndex: "1", left: "-113px" }}
            ></img>
            <img
              src={img7}
              className="position-absolute bottom-0 last"
              style={{ zIndex: "3", left: "-174px" }}
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
