import React from 'react';
import "./Eight.css";

function CardMapper({ eachObject,}) {
  return (
    <div className="cards">
      <div className="heading">{eachObject.heading}</div>
      <div className="content">{eachObject.content}</div>
      {/* <div className="img-container">
        <img src={eachObject.img} alt="image" />
      </div> */}
    </div>
  );
}

const Eight = ({childern, key, id}) => {
    const arrayOfObjects = [
      {
        id:1,
        heading: "Lorem Ipsum",
        content:
          "Reading practice to help you understand simple information, words and sentences about known topics. Texts include posters, messages, forms and timetables.",
      },
  
      {
        id:2,
        heading: "Lorem Ipsum",
        content:
          "Our online English classes feature lots of useful learning materials and activities to help you develop your reading skills with confidence in a safe and inclusive learning environment.",
      },

      {
        id:3,
        heading: "Lorem Ipsum",
        content:
          "Our online English classes feature lots of useful learning materials and activities to help you develop your reading skills with confidence in a safe and inclusive learning environment.",
      },
    ];
      

    return (
      <div className="container-fluid bg-primary my-5 mass">
        {arrayOfObjects.map((item) => {
          return (
            <>
            
              <CardMapper eachObject={item} key={item.id} />
              
            </>
          );
        })}
      </div>
    );
  };
        

export default Eight;
