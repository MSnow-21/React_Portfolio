import React from "react";
import ProfessionalImage from "../assets/imgs/professionalimg.png";

function About(){
    return(
        <div>
            <div className="container">
                <h1>About Me</h1>
                <img src={ProfessionalImage} alt="ProfessionalImage"></img>
                <br></br>
            </div>
            
            <div className="container" id="contact">
                <h3 className="text-center">Contact</h3>
                <p className="text-center"><em>Please leave a message</em></p>
                <div class="row test">
                    <div className="col-md-4">
                        <p>Contact Information</p>
                        <p><span className="glyphicon glyphicon-map-marker"></span>Cleveland, OH</p>
                        <p><span className="glyphicon glyphicon-map-marker"></span>Phone: 419-202-3091</p>
                        <p><span className="glyphicon glyphicon-map-marker"></span>Email: msnowcode@gmail.com</p>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-sm-6 form-group">
                                <input className="form-control" id="name" name="name" placeholder="Name" type="text" required></input>
                            </div>
                            <div className="col-sm-6 form-group">
                                <input className="form-control" id="email" name="email" placeholder="Email" type="email" required></input>
                            </div>
                        </div>
                        <textarea className="form-control" id="comments" name="comments" placeholder="Comments" row="5"></textarea>
                        <div className="Row">
                            <div className="col-md-12 form-group">
                                <button className="btn btn-primary" type="submit">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default About;