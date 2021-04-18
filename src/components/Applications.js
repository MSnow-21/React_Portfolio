import React from "react";

function Applications() {
    return (
        <div id="applications" className="container">
            <h1>My Application Portfolio</h1>
            <p>Different technologies are use to create functional applications for each user</p>
            <p>The applications..</p>
            <div className="row">
                <div className="col-sm-4">
                    <p><strong>Bits N Bytes</strong></p>
                    <p>Coverts US Dollars to other currencies</p>
                    <p>Allows user to pick items from menu</p>
                    <p>Features a joke API</p>
                </div>
                <div className="col-sm-4">
                    <p><strong>The Weather Dashboard</strong></p>
                    <p>Uses a Weather API</p>
                    <p>Javascript and AJAX</p>
                    <p>Current Day and Five Day Forecast</p>
                </div>
                <div className="col-sm-4">
                    <p><strong>Work Day Scheduler</strong></p>
                    <p>Plan your day</p>
                    <p>Save notes with local storage</p>
                    <p>Refreshes each day</p>
                </div>
            </div>
            <div className="row">
            <div className="col-sm-4">
                    <p><strong>Note Taker</strong></p>
                    <p>Create a Note and a Task</p>
                    <p>Stores Notes</p>
                    <p>Deletes Notes</p>
                </div>
                <div className="col-sm-4">
                    <p><strong>Code Quiz</strong></p>
                    <p>Test your Javascript knowledge</p>
                    <p>Use Javascript to create HTML elements</p>
                    <p>A timed Event</p>
                </div>
                <div className="col-sm-4">
                    <p><strong>The Wolf</strong></p>
                    <p>A website about my favorite animal</p>
                    <p>Allows the user to learn about wolves</p>
                    <p>Click to learn more</p>
                </div>
            </div>
        </div>
    );
}

export default Applications;