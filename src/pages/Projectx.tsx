import "./projectcard.css";
import React, { useState, useEffect, useContext } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { getProjects, removecard } from "../services/ApiService";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";

export interface AllCards {
  _id?: string;
  nameprojectx?: string;
  img?: string;
  strategy?: string;
  investors?: string;
  lengthjob?: string;
}

const Projectx = ({
  _id,
  nameprojectx,
  img,
  strategy,
  investors,
  lengthjob,
}: AllCards) => {
  const [cards, setCards] = useState<Array<AllCards>>([]);
  const context = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    getProjects().then((json) => setCards(json));
  }, []);

  const [value, setValue] = React.useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  //remove project
  function handleRemove(_id: any) {
    const list = cards.filter((item) => item._id !== _id);

    setCards(list);
    console.log(_id);
    // remove item
    removecard(_id);
  }
  return (
    <>
      {cards.map((item) => (
        <div key={item._id} className="d-flex flex-row mb-3">
          <div className="w-50 p-2 ">
            <div className="card mb-3 wm-540 projectca rounded-start-pill border border-black mt-5 bg-success-subtle">
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src={item.img}
                    className="border border-5 img-fluid rounded-start rounded-start-pill"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      NAME PROJECT : {item.nameprojectx}
                    </h5>
                    <p className="card-text">ID PROJECT : {item._id}</p>
                    <p className="card-text">STRATEGY : {item.strategy}</p>
                    <p className="card-text">INVESTORS : {item.investors}</p>
                    <p className="card-text">LENGTHJOB : {item.lengthjob}</p>
                  </div>
                  <div>
                    <BottomNavigation
                      className="mt-4 .bg-black.bg-gradient"
                      sx={{ width: 500 }}
                      value={value}
                      onChange={handleChange}
                    >
                      {context?.admin && (
                        <>
                          <BottomNavigationAction
                            label="Edit Project"
                            value="editproject"
                            onClick={() => {
                              navigate(`/projectx/${item._id}`);
                            }}
                            icon={<EditNoteIcon />}
                          />

                          <BottomNavigationAction
                            label="Delete"
                            value="Delete"
                            onClick={() => handleRemove(item._id)}
                            icon={<DeleteIcon />}
                          />
                        </>
                      )}

                      <BottomNavigationAction
                        label="message"
                        value="message"
                        icon={<AlternateEmailIcon />}
                        href="Sendemail"
                      />
                    </BottomNavigation>
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

export default Projectx;
