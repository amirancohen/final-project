import React from "react";

import { getMessage } from "../services/ApiService";
import "./messagebox.css";

export interface Allmessage {
  _id?: string;
  fullname?: string;
  imguser?:string
  phone?: string;
  email?: string;
  facebook?: string;
  fileup?: string;
  textarea?: string;
}

const Messagebox = ({
  _id,
  fullname,
  imguser,
  phone,
  email,
  facebook,
  fileup,
  textarea,
}: Allmessage) => {
  const [cards, setCards] = React.useState<Array<Allmessage>>([]);

  React.useEffect(() => {
    getMessage().then((json) => {
      setCards(json);
    });
  }, []);

  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      {cards.map((card) => (
        <div key={card._id} className="d-flex flex-row mb-3 cardw mt-5">
          <div>
            <div className="card mb-3 carduse">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={card.imguser}
                    className="img-fluid  rounded-circle mt-4"
                    alt="..."
                  />
                    <h3 className="card-title">{card.fullname}</h3>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">Email: {card.email}</p>
                    <p className="card-text"> Phone:{card.phone}</p>
                    <p className="card-text"> Facebook{card.facebook}</p>
                    <p className="card-text">
                     About {card.textarea}
                    </p>
                    <p className="card-text">
                      <small className="text-body-secondary">
                      CV: {card.fileup}
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Messagebox;
