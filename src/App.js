import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";
function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <Main />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
