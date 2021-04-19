import React from "react";
import Resume from "../assets/imgs/linkedin.png";
import GithubImage from "../assets/imgs/github.png"


function ProfessionalLinks() {
    return(
        <div className="bg-1">
            <div className="container" id="professional">
                <h3 className="text-center">Professional Links and Documents</h3>
                <p className="text-center">Github, LinkedIn, Resume</p>
                <p className="text-center">Please Review</p>
                

            </div>
            <div className="row text-center">
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={GithubImage} alt="Github"></img>
                        <p><strong>Github</strong></p>
                        <p>Projects and Activities</p>
                        <a href="https://github.com/MSnow-21"><button class="btn">Visit Github</button></a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={Resume} alt="Resume"></img>
                        <p><strong>LinkedIn</strong></p>
                        <p>Professional Link</p>
                        <a href="https://www.linkedin.com/in/marksnowcode/"><button class="btn">Visit LinkedIn</button></a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={Resume} alt="Resume" ></img>
                        <p><strong>Resume</strong></p>
                        <p>Professional Details</p>
                        <a href="./assets/imgs/marksnowresume.pdf"><button class="btn">View Resume</button></a>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default ProfessionalLinks;