import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectnew } from "../services/ApiService";


export interface AddProjex {
  _id?: string
  nameprojectx?: string;
  img?: string;
  strategy?: string;
  investors?: string;
  lengthjob?: string;
}

function Addprojectxnew() {
  const navigate = useNavigate();
  const [nameprojectx, setNameprojectx] = useState("");
  const [img, setImg] = useState("");
  const [strategy, setStrategy] = useState("");
  const [investors, setInvestors] = useState("");
  const [lengthjob, setLengthjob] = useState("");

  function handleClick() {
    projectnew({
      nameprojectx,
      img,
      strategy,
      investors,
      lengthjob,
    })
    .then((projectnew) => {
      console.log(projectnew);
      navigate("/Projectx");
    });
    setNameprojectx("");
    setImg("");
    setStrategy("");
    setInvestors("");
    setLengthjob("");
  }

  return (
    <>
      <h1 className="text-center mt-5 text-info">Add Project X</h1>
      <div className="position-relative d-flex justify-content-center">
        <div className="mb3  w-50 position-relative py-2 px-5">
          <div className=" rounded-pill mt-4 w-5">
            <input
              className="form-control form-control-lg  border border-5 rounded-start-pill bg-primary-subtle"
              type="text"
              placeholder="Name Project"
              aria-label=".form-control-lg example"
              value={nameprojectx}
              name="nameprojectx"
              onChange={(e) => setNameprojectx(e.target.value)}
            />
          </div>
          <div className="  rounded-pill mt-4 ">
            <input
              className="form-control  mt-4 border border-5 rounded-start-pill bg-primary-subtle"
              type="text"
              placeholder="Image Project "
              aria-label="default input example"
              value={img}
              name="img"
              onChange={(e) => setImg(e.target.value)}
            />
          </div>
          <div className="  rounded-pill mt-4 ">
            <input
              className="form-control  mt-4 border border-5 rounded-start-pill bg-primary-subtle"
              type="text"
              placeholder="Project strategy"
              aria-label="default input example"
              value={strategy}
              name="stretegy"
              onChange={(e) => setStrategy(e.target.value)}
            />
          </div>
          <div className="  rounded-pill mt-4 ">
            <input
              className="form-control mt-4 border border-5 rounded-start-pill bg-primary-subtle"
              type="text"
              placeholder="Investors"
              aria-label="default input example"
              value={investors}
              name="investors"
              onChange={(e) => setInvestors(e.target.value)}
            />
          </div>
          <div className="  rounded-pill mt-4 ">
            <input
              className="form-control form-control my-4 border border-5 rounded-start-pill bg-primary-subtle"
              type="text"
              placeholder="Length of job"
              aria-label="default input example"
              value={lengthjob}
              name="lengethjob"
              onChange={(e) => setLengthjob(e.target.value)}
            />
          </div>
          <div>
            <input
              className="btn btn-primary text-info bg-light p-2"
              type="submit"
              value="Add Project X"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Addprojectxnew;
