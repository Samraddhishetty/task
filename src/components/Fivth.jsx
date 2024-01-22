import React from "react";
import "./Fivth.css";
import img19 from "../Assets/img19.png";
import img20 from "../Assets/img20.png";
import img21 from "../Assets/img21.png";

const Fivth = () => {
  return (
    <div>
      <div className="main-head d-flex justify-content-center gap-5 py-5">
        <p className="Cxe">Схема работы</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center ">
        <div class="card mx-3 rounded-0" style={{ maxWidth: "450px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              {/* <div className="box"></div> */}
              <img className="imges" src={img21} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Консультация</h5>
                <p class="card-text">
                  Персональный менеджер ответит на все ваши вопросы и будет
                  держать вас в курсе всех этапов работ
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mx-3 rounded-0" style={{ maxWidth: "450px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img className="imges" src={img19} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Согласование</h5>
                <p class="card-text">
                  Персональный менеджер согласует с вами сроки и стоимость
                  ремонта
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mx-3 rounded-0" style={{ maxWidth: "450px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img className="imges" src={img21} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Согласование</h5>
                <p class="card-text">
                  Персональный менеджер согласует с вами сроки и стоимость
                  ремонта
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mx-3 rounded-0" style={{ maxWidth: "450px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img className="imges" src={img21} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Диагностика</h5>
                <p class="card-text">
                  Осуществим диагностику за счет компании, даже если вы
                  откажетесь от ремонтае
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="card mx-3 rounded-0" style={{ maxWidth: "450px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img className="imges" src={img19} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Согласование</h5>
                <p class="card-text">
                  Персональный менеджер согласует с вами сроки и стоимость
                  ремонта
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="card mx-3 rounded-0" style={{ maxWidth: "450px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img className="imges" src={img21} />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Согласование</h5>
                <p class="card-text">
                  Персональный менеджер согласует с вами сроки и стоимость
                  ремонта
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fivth;
