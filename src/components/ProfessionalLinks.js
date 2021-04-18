import React from "react";

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
                        <p><strong>Github</strong></p>
                        <p>Projects and Activities</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <p><strong>LinkedIn</strong></p>
                        <p>Professional Link</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <p><strong>Resume</strong></p>
                        <p>Professional Details</p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default ProfessionalLinks;