import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import { HEIGHT } from './constants';

// document.body.style.overflowY = "hidden";
// document.body.style.overflowX = "hidden";

// document.body.style.width = WIDTH + "px";
// document.body.style.fontFamily = 'fantasy';
document.body.style.fontFamily = 'roboto';
document.body.style.height = HEIGHT + "px";
ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();


if(window.location.protocol == 'https:'){
    if (document.addEventListener) {
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        }, false);
    } 
}
  