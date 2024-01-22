import React from "react";
import "./Second.css";
import img8 from "../Assets/img8.png";
import img9 from "../Assets/img9.png";
import img10 from "../Assets/img10.png";
import img11 from "../Assets/img11.png";
import img12 from "../Assets/img12.png";

const Secon = () => {
  return (

    <div class="container">
  <div class="row">
    <div class="col images position-relative text-center">
    <img className="img8" src={img8}></img>
    <p className="card-text">Ремонт стиральных машин</p>
    </div>
    <div class="col">
    <div class="row row-cols-xs-1 row-cols-sm-2 position-relative text-center">
    <div class="col col-xs-12"><img className="img9" src={img9}></img>
    <p className="card-text">Вытяжки</p></div>
    <div class="col col-xs-12"><img className="img10" src={img10}/><p className="card-text">Посудомойки</p></div>
    <div class="col col-xs-12"><img className="img11" src={img11}/><p className="card-text">Пылесосы</p></div>
    <div class="col col-xs-12"><img className="img12" src={img12}/><p className="card-text">Варочные панели</p></div>
  </div>
    </div>
    
  </div>
</div>
  );
};

export default Secon;
