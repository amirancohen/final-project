import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardUpdate, getCardById } from "../services/ApiService";
import { toast } from "react-toastify";

export interface EditCardProject {
  id?: string;
  nameprojectx: string;
  img: string;
  strategy: string;
  investors: string;
  lengthjob: string;
}
function EditProject() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [nameprojectx, setNameprojectx] = useState("");
  const [img, setImg] = useState("");
  const [strategy, setStrategy] = useState("");
  const [investors, setInvestors] = useState("");
  const [job, setJob] = useState("");

  const setCardValues = async (id: any) => {
    const cardResponse = await getCardById(id);    
    const { nameprojectx, img, strategy, investors, lengthjob } = cardResponse;
    setNameprojectx(nameprojectx);
    setImg(img);
    setStrategy(strategy);
    setInvestors(investors);
    setJob(lengthjob);
  };

  useEffect(() => {
    if(!!id)
      setCardValues(id);
  }, [id]);

  function validate(): boolean {
    if (!nameprojectx) {
      toast.error("nameprojectx is required.");
      return false;
    }
    if (!img) {
      toast.error("img is required.");
      return false;
    }
    if (!strategy) {
      toast.error("img is required");
      return false;
    }
    if (!investors) {
      toast.error("investors is required.");
      return false;
    }
    if (!job) {
      toast.error("job is required.");
      return false;
    }
    return true;
  }
  function handleClick() {
    if (!validate()) {
      return;
    }

    if (!id) return;

    CardUpdate(id, {
      nameprojectx,
      img,
      strategy,
      investors,
      lengthjob: job,
    }).then((data) => {
      navigate("/Projectx");
      // return to the projectx page...
    });
  }

  return (
    <>
      <h1 className="text-center mt-5 text-info">Edit Project X</h1>
      <div className="position-relative d-flex justify-content-center">
        <div className="mb3  w-50 position-relative py-2 px-5">
          <div className=" rounded-pill mt-4 w-5">
            <label className="form-label" htmlFor="_id">
              ID :{id}
            </label>
            <input
              className="form-control form-control-lg  border border-5 rounded-start-pill bg-primary-subtle"
              type="text"
              placeholder="Name Project"
              aria-label=".form-control-lg example"
              value={nameprojectx || ''}
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
              value={img || ''}
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
              value={strategy || ''}
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
              value={investors || ''}
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
              value={job || ''}
              name="job"
              onChange={(e) => setJob(e.target.value)}
            />
          </div>
          <div>
            <input
              className="btn btn-primary text-info bg-light p-2"
              type="submit"
              value="Edit Project X"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProject;
