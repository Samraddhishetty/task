import React from "react";
import "./Fourth.css";
import img16 from "../Assets/img16.png";
import img17 from "../Assets/img17.png";
import img8 from "../Assets/img8.png";
import img18 from "../Assets/img18.png";



const Fourth = () => {
  return (
    <div>
      <div className="container-fluid bg-secondary mt-5">
        <p className="text d-flex justify-content-center py-5">
          Сервис INDESIT предлагает лучшие цены
        </p>

        <div class="row row-cols-1 row-cols-md-4 p-3 g-4">
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Ремонт микроволновки</h5>
                <p class="card-text">
                  Замена слюды, магнетрона, восстановление кнопок и др
                </p>
                <p className="end-text">ОТ 2500 ₸.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Ремонт пылесоса</h5>
                <p class="card-text">
                  Замена или восстановление шланга, схемы управления, двигателя
                  и пр.
                </p>
                <p className="end-text">ОТ 4000 ₸.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Ремонт аудиотехники</h5>
                <p class="card-text">
                  Колонки, домашние кинотеатры, музыкальные центры и др. виды.
                </p>
                <p className="end-text">ОТ 4500 ₸.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Ремонт микроволновки</h5>
                <p class="card-text">
                  Замена слюды, магнетрона, восстановление кнопок и др
                </p>
                <p className="end-text">ОТ 2500 ₸.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4  p-3 g-4">
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">Ремонт микроволновки</h5>
                <p class="card-text">
                  Замена слюды, магнетрона, восстановление кнопок и др
                </p>
                <p className="end-text">ОТ 2500 ₸.</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 main">
              <div class="card-body human ">
                <img  className="imagin" src={img16}/>
                < div className="app">
                <h5 class="card-title texting">Выезд мастера</h5>
                <p class="card-text hi">
                  В удобное для Вас время. <br/> На дом или в офис!
                </p>
                <p className="end-text">ОТ 2500 ₸.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 black s ">
              <img className="monst img-fluid wx-5" src={img17}/>
              <div class="card-body mark">
                <div className="last-one">
                <h5 class="card-title ">Диагностика</h5>
                <p class="card-text">
                  С ипользованием современного оборудования
                </p>
                <p class="card-text">БЕСПЛАТНО</p>
                <img  className="wash" src={img8} />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title  ending">Расширенная гарантия</h5>
                <p class="card-text">На все запчасти и выполненные услуги</p>
                <p class="card-text">БЕСПЛАТНО</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
