import React from "react";
import { BrowserRouter , Routes, Route} from 'react-router-dom';
import Historytunadmin from "./core/Historytunadmin";
import Home from "./core/Home";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/histunadmin" element={<Historytunadmin />}/>
                <Route path="/" element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers;