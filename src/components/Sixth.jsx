import React from "react";
import "./Sixth.css";
import img15 from "../Assets/img15.png";
import img14 from "../Assets/img14.png";
import img13 from "../Assets/img13.png";

const Sixth = () => {
  return (
    <div>
      <div className=" Head container-fluid bg-primary  d-flex my-5">
        <div className="col-6 my-5  p-5 content major">
          <p className="text">
            Заказать бесплатный выезд
            <br />
            мастера за 30 мин!
          </p>
          <p className="text-2">
            Выезд мастера и диагностика бесплатно, при условии ремонта, Мы
            следим за качеством облуживания. К вам приедет мастер с опытом
            работы не менее пяти лет. У нас быстро, от 30 минут выезд мастера.
          </p>
          <button className="btn1">Заказать звонок</button>
        </div>
        <div className="image_man col-6 d-flex position-relative">
          <img className="first-one"
            src={img15}
            style={{
              zIndex: "3",
              position: "absolute",
              zIndex: "3",
              right: "232px",
            }}
          />
          <img
            className="position-absolute middle-form"
            src={img14}
            style={{ zIndex: "2", right: "-5px", bottom: "-45px" }}
          />
          <img
            className="position-absolute last-form"
            src={img13}
            style={{ zIndex: "3", right: "-158px", top: "-25px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Sixth;
