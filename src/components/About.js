import React from "react";
import ProfessionalImage from "../assets/imgs/professionalimg.png";
import "../assets/styles/about.css";


function About(){
    return(
        <div>
            <div className="container aboutcontainer">
                <div className="row">
                    <div className="col-md-4">
                        <img src={ProfessionalImage} alt="ProfessionalImage" width="300" height="300"></img>
                    </div>
                    <div className="col-md-8">
                        <h1 className="aboutme">About Me</h1>
                        <p className="paraabout">My name is Mark Snow and I am making a career move into the world of coding. I live in Cleveland, Ohio with my wife and children. My career journey started in Sandusky, OH as a manufacturing engineer for the pulp and paper industry. In that role I learned how to use the latest 3D modeling software to create drawings for the various manufacturing processes. After building my manufacturing knowledge and skills, I made a move up to the Cleveland area where I began managing projects for the tunnel boring industry.</p>
                        <p className="paraabout">I have since decided to make a move into the world of coding where I can continue to be creative and work with all the amazing technology.</p>
                    </div>
                </div>
                <br></br>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="skillsandtech">Skills and Technologies Used</h1>
                    </div>
                </div>
            </div>
            <div className="container techcontainer">
                <div className="row">
                    <div className="col-md-4 techused">
                        <ul><strong>Languages</strong>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JQuery</li>
                        </ul>
                    </div>
                    <div className="col-md-4 techused">
                    <ul><strong>Applications</strong>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    </ul>
                    </div>
                    <div className="col-md-4 techused">
                     <ul><strong>Tools</strong>
                     <li>Github</li>
                     <li>Node JS</li>
                     <li>Express</li>
                     <li>Heroku</li>
                     </ul>
                     </div>
                </div>
            </div>
            
            <div className="container contactcontainer" id="contact">
                <h3 className="text-center contactheading">Contact</h3>
                <p className="text-center"><em>Please leave a message</em></p>
                <div class="row test">
                    <div className="col-md-4 location">
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
                            <div className="col-md-12 form-group contactbuttoncontainer">
                                <button className="btn btn-primary contactbutton" type="submit">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default About;