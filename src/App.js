import {Route, Routes} from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/book/Home";
import SaveForm from "./pages/book/SaveForm";
import Detail from "./pages/book/Detail";
import LoginForm from "./pages/user/LoginForm";
import JoinForm from "./pages/user/JoinForm";
import UpdateForm from "./pages/book/UpdateForm";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/save" element={<SaveForm />} />
                <Route path="/book/:id" element={<Detail />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/join" element={<JoinForm />} />
                <Route path="/update/:id" element={<UpdateForm />} />
            </Routes>
        </div>
    );
}

export default App;
