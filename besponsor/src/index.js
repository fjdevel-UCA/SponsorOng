import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

//importando estilos globales
import './fonts/icomoon/style.css';
import './css/bootstrap.min.css';
import './css/jquery.fancybox.min.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './fonts/flaticon-1/font/flaticon.css';
import './css/aos.css';
import './css/style.css';

const container = document.getElementById("app");

ReactDOM.render(<App/>, container);
