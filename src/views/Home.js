import React from "react";
import "views/CSS/home.css";
export default class Home extends React.Component {
   
    render(){
            return(
                <div className="lol">
                    <div className="content">
                        <img alt="logo_besponsor"></img>
                        <h1>Be Sponsor</h1>              
                        <p>Se parte del cambio</p> 
                    </div>
                    <div className="sliding-background"></div> 
                </div>
            )
    }
}