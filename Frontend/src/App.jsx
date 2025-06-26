// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Test from "./pages/Test";
// import Live from "./pages/Live";
// import Company from "./pages/Company";
// import Newsletter from "./pages/Newslatter";
// import Message from "./pages/Message";
// import Event from "./pages/Event";
// import Group from "./pages/Group";
// import Login from "./pages/Login";
// import RegisterPage from "./pages/RegisterPage";
import Saveitem from "./pages/Saveitem";


const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/" element={<Test />} /> */}
        {/* <Route path="/" element={<Live />} /> */}
        {/* <Route path="/" element={<Company />} /> */}
        {/* <Route path="/" element={<Newsletter />} /> */}
        {/* <Route path="/" element={<Message/>} /> */}
        {/* <Route path="/" element={<Event/>} /> */}
        {/* <Route path="/" element={<Group/>} /> */}
        <Route path="/" element={<Saveitem/>} />

        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/register" element={<RegisterPage />} /> */}
      </Routes>
    </>
  );
};

export default App;
