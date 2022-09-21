import {Route, Routes} from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Home from "./pages/book/Home";
import SaveForm from "./pages/book/SaveForm";
import Detail from "./pages/book/Detail";
import LoginForm from "./pages/user/LoginForm";
import JoinForm from "./pages/user/JoinForm";
import UpdateForm from "./pages/book/UpdateForm";
import Auth from "./hoc/auth";
import OauthRedirect from "./pages/oauth/OauthRedirect";


function App() {
    const AuthLoginPage = Auth(LoginForm, false)
    const AuthJoinPage = Auth(JoinForm, false)
    const AuthHomePage = Auth(Home, true)
    const AuthSaveForm = Auth(SaveForm, true)
    const AuthDetailForm = Auth(Detail, true)
    const AuthUpdateForm = Auth(UpdateForm, true)
    const AuthOauthRedirect = Auth(OauthRedirect, false)

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<AuthHomePage />} />
                <Route path="/save" element={<AuthSaveForm />} />
                <Route path="/book/:id" element={<AuthDetailForm />} />
                <Route path="/login" element={<AuthLoginPage />} />
                <Route path="/auth/kakao" element={<AuthOauthRedirect />} />
                <Route path="/join" element={<AuthJoinPage />} />
                <Route path="/update/:id" element={<AuthUpdateForm />} />
            </Routes>
        </div>
    );
}

export default App;
