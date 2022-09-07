import ListPage from "./pages/ListPage";
import WritePage from "./pages/WritePage";
import Footer from "./components/common/Footer";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navigation from "./components/Navigation";


function App() {

    return (
         // BrowserRouter로 모든 컴포넌트 감싸주기
        <BrowserRouter>
            {/*<Header/>*/}
            {/*<Navigation />*/}
            <Routes>
                {/*<Route path="/" element={<HomePage />} />*/}
                {/*<Route path="/login/:id" element={<LoginPage />} />*/}

                <Route path="/" element={<ListPage />} />
                {/*<Route path="/write" element={<WritePage />} />*/}
            </Routes>
            {/*<Footer />*/}
        </BrowserRouter>
    );
}

export default App;
