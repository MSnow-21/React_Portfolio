import React from "react";
import Resume from "../assets/imgs/linkedin.png"
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
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={Resume} alt="Resume"></img>
                        <p><strong>LinkedIn</strong></p>
                        <p>Professional Link</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={Resume} alt="Resume" ></img>
                        <p><strong>Resume</strong></p>
                        <p>Professional Details</p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default ProfessionalLinks;