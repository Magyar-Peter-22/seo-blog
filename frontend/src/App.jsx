import React from "react";
import Router from "./router/Router";
import { HelmetProvider } from "react-helmet-async";
import RootHelmet from "./seo/RootHelmet";
import "./assets/css/body.css";

function App() {
    return (
        <HelmetProvider>
            <RootHelmet />
            <Router />
        </HelmetProvider>
    )
}

export default App