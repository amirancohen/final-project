import React, { createContext,  useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Signup from "./auth/Signup";
import Signin from "./auth/Signin";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import ResetPassword from "./auth/ResetPassword";
import Addprojectx from "./pages/Addprojectx";
import Messagebox from "./pages/Messagebox";
import EditProject from "./pages/Editproject";
import Projectx from "./pages/Projectx";
import Sendemail from "./pages/Sendemail";
import Howdowork from "./components/howdowork";
import NewPassword from "./auth/NewPassword";

interface Context {
  admin: boolean;
  setAdmin: Function;
  username: string;
  setUsername: Function;
  isLogin: boolean,
  setIsLogin: Function

}

export const AppContext = createContext<Context | null>(null);

const App = () => {
  const isAdmin = !!localStorage.getItem("admin")
  const userConected = !!localStorage.getItem("login")
  const [admin, setAdmin] = useState(isAdmin);
  const [isLogin, setIsLogin] = useState(userConected);
  const [username, setUsername] = useState("");
  

  return (
      <AppContext.Provider
        value={{
          admin,
          setAdmin,
          username,
          setUsername,
          isLogin,
          setIsLogin
        }}
      >
      <Header />
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="forgot-password" element={<ResetPassword />} />
        <Route path="new-password/:id" element={<NewPassword />} />
        <Route path="/" element={<Homepage />} />
        <Route path="projectx" element={<Projectx />} />
        <Route path="projectx/create" element={<Addprojectx />} />
        <Route path="projectx/:id" element={<EditProject /> } />
        <Route path="messagebox" element={<Messagebox />} />
        <Route path="sendemail" element={<Sendemail />} />
        <Route path="howdowork" element={<Howdowork />} />
      </Routes>
      <Footer />
      </AppContext.Provider>
  );
}

export default App;
