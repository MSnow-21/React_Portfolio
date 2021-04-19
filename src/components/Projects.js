import React from "react";

function Projects (props){
    return(
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <p><strong>{props.title}</strong></p>
                    <img src={props.image} className="img-circle person" alt="BitsNBytes" width="250" height="250"></img>
                    <br></br>
                    <p><strong>{props.detail}</strong></p>
                    <p>{props.paraone}</p>
                    <p>{props.paratwo}</p>
                    <p>{props.parathree}</p>
                    <p><a href={props.href}>{props.title}</a></p>
                </div>
            </div>
        </div>
    );
}

export default Projects;

