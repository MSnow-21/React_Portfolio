import React from "react";
import "../assets/styles/applications.css";

function Projects (props){
    return(
        <div className="col-xs-4 col-sm-4 col-md-4 projectcontainer">
            <div className="card">
                <div className="card-body projectcard">
                    <p className="projecttitle"><strong>{props.title}</strong></p>
                    <img src={props.image} className="img-fluid projectimage" alt="BitsNBytes" width="250" height="250"></img>
                    <br></br>
                    <p className="paraproject"><strong>{props.detail}</strong></p>
                    <p className="paraproject">{props.paraone}</p>
                    <p className="paraproject">{props.paratwo}</p>
                    <p className="paraproject">{props.parathree}</p>
                    <p className="paraproject"><a href={props.href}>{props.title}</a></p>
                </div>
            </div>
        </div>
    );
}

export default Projects;

