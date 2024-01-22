import React from "react";
import "./Seven.css";
import img22 from "../Assets/img22.png";
import img23 from "../Assets/img23.png";
import img24 from "../Assets/img24.png";

const Seven = () => {
  return (
    <div>
      <div className="main-head d-flex justify-content-center gap-5 py-5">
        <p className="Cxe">Отзывы</p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center py-5 mains ">
        <div class="card mx-3 rounded-0 border border-info main-section py-5" style={{ width: "25rem" }}>
            <img className="Boy-image"src={img22}/>
          <div class="card-body first">
            <h5 class="card-title">Константин </h5>
            <p class="card-text">
              С сайтом и сервисом этой компании всё просто отлично! Качество
              товара соответствует заявленному. Буду и впреть пользоваться
              товарами с этого сайта, и смело могу рекомендовать его людям.
            </p>
          </div>
        </div>
        <div class="card mx-3 rounded-0 border border-info py-5 second" style={{ width: "25rem" }}>
        <img className="Boy-image"src={img23}/>
          <div class="card-body">
            <h5 class="card-title ">Алина</h5>
            <p class="card-text">
              Хочу выразить благодарность компании за качественно выполненную
              работу по ремонту стиральной машины! Все было качественно и
              оперативно: от принятия заявки диспетчером до работы мастера!
            </p>
          </div>
        </div>
        <div class="card mx-3 rounded-0 border border-info py-5 Third" style={{ width: "25rem" }}>
        <img className="Boy-image"src={img24}/>
          <div class="card-body">
            <h5 class="card-title">Дмитрий</h5>
            <p class="card-text">
              Благодарны за качественное и профессиональное обслуживание, быстро
              откликнулись. Мастер Сергей приехал в назначенное время, сделал
              все хорошо
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seven;
