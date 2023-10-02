
import "./profile.css";
import { Card } from "@mui/material";



function Profileuser() {
    

    
  return (
    <>
      
        <div className="borderpic centerpic">
          <img
            src={"https://cdn-icons-png.flaticon.com/512/21/21104.png"}
            className="picprofile rounded mx-auto d-block "
            alt=""
          />
        </div>
        <div className="profilename">
          <h1>image</h1>
          <h3>email: maor@email.com</h3>
          <h5>floeer</h5>
        </div>
      
    </>
  );
}

export default Profileuser;
