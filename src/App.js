import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {

    return (
         // BrowserRouter로 모든 컴포넌트 감싸주기
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login/:id" element={<LoginPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
