import React from "react";
import styles from "./CSS/Error.css"
export default class Error404 extends React.Component {
    render(){
        return(
             <div id="clouds">
            <div class="cloud x1"></div>
            <div class="cloud x1_5"></div>
            <div class="cloud x2"></div>
            <div class="cloud x3"></div>
            <div class="cloud x4"></div>
            <div class="cloud x5"></div>
            <div class='_404'>404</div>
            <div class='_1'>THE PAGE</div>
            <div class='_2'>WAS NOT FOUND</div>
            <a class='btn1' href='#'>BACK TO HOME</a>
        </div>
        )
    }
}