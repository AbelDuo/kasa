import React from "react";

import{BrowserRouter, Routes, Route} from "react-router-dom";
import Accueil from "../pages/Accueil";
import Apropos from "../pages/Apropos";
import Erreur from "../pages/Erreur";
import Logement from "../pages/Logement";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Accueil/>} />
                <Route path="/apropos" element={<Apropos/>} />
                <Route path="*" element={<Erreur/>} />
                <Route path="/logement/:id" element={<Logement/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;