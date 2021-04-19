import React from "react";
import Resume from "../assets/imgs/linkedin.png";
import GithubImage from "../assets/imgs/github.png";
import "../assets/styles/professionallinks.css";


function ProfessionalLinks() {
    return(
        <div className="bg-1">
            <div className="container" id="professional">
                <h3 className="text-center professionaltitle">Professional Links and Documents</h3>
                <p className="text-center professionalnames">Github, LinkedIn, Resume</p>
                <p className="text-center professionalpara">Please Review</p>
                

            </div>
            <div className="row text-center professionallinkarea">
                <div className="col-sm-4 containerlink">
                    <div className="thumbnail">
                        <img src={GithubImage} alt="Github" className="img-fluid profimage"></img>
                        <p className="paralinks"><strong>Github</strong></p>
                        <p className="paralinks">Projects and Activities</p>
                        <a href="https://github.com/MSnow-21" className="paralinks"><button class="btn btn-success">Visit Github</button></a>
                    </div>
                </div>
                <div className="col-sm-4 containerlink">
                    <div className="thumbnail">
                        <img src={Resume} alt="Resume" className="img-fluid profimage"></img>
                        <p className="paralinks"><strong>LinkedIn</strong></p>
                        <p className="paralinks">Professional Link</p>
                        <a href="https://www.linkedin.com/in/marksnowcode/" className="paralinks"><button class="btn btn-success">Visit LinkedIn</button></a>
                    </div>
                </div>
                <div className="col-sm-4 containerlink">
                    <div className="thumbnail">
                        <img src={Resume} alt="Resume" className="img-fluid profimage"></img>
                        <p className="paralinks"><strong>Resume</strong></p>
                        <p className="paralinks">Professional Details</p>
                        <a href="./assets/imgs/marksnowresume.pdf"><button class="btn btn-success">View Resume</button></a>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default ProfessionalLinks;