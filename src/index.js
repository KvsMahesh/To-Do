import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Todo from "./todo";

var destination = document.querySelector("#root");

ReactDOM.render(
    <div>
        <Todo/>
    </div>,
    destination
);