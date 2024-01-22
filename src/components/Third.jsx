import React from "react";
import "./Third.css";
import img15 from "../Assets/img15.png";
import img14 from "../Assets/img14.png";
import img13 from "../Assets/img13.png";

const Third = () => {
  return (
    <div>
      <div className="Head d-flex justify-content-center gap-5 py-5">
        <p className="Pem">
          Не нашли свой продукт в списке, или остались вопросы?
          <br />
          Свяжитесь с менеджером по телефону +7 (778) 065-12-46 или{" "}
        </p>
        <button className="btn_1">Заказать звонок</button>
      </div>
      <div className="container bg-primary  d-flex max">
        <div className="col-6 my-5  p-5 content">
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
        <div className="image_man col-6 d-flex position-relative montage ">
            <img className="man-to" src={img15} style={{zIndex: "3",position: "absolute",
    zIndex: "3",
    right: "232px"}} />
            <img  className="position-absolute sevage"src={img14} style={{zIndex: "2", right:"-5px", bottom:"-45px"}}/>
            <img  className="position-absolute machine"src={img13} style={{zIndex: "3", right:"-158px" ,top:"-25px"}}/>
            
        </div>
      </div>
    </div>
  );
};

export default Third;
