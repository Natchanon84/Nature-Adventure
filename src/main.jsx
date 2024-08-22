import React from "react";
import ReaceDOM from "react-dom/client"
import App from "./App"

const el = document.querySelector("#root")
const root = ReaceDOM.createRoot(el)

root.render(
    <App /> 
)