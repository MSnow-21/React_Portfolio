import React from "react";
import BitsNBytes from "../assets/imgs/BitsnBytes.PNG";
import TheWeatherDashboard from "../assets/imgs/WeatherDashboardMain.PNG";
import WorkDayPlanner from "../assets/imgs/workdayplanner.PNG";
import NoteTaker from "../assets/imgs/notetaker.PNG";
import CodeQuiz from "../assets/imgs/codequiz.PNG";
import TheWolf from "../assets/imgs/Wolf.PNG";

function Applications() {
    return (
        <div id="applications" className="container">
            <h1>My Application Portfolio</h1>
            <p>Different technologies are use to create functional applications for each user</p>
            <p>The applications..</p>
            <div className="row">
                <div className="col-sm-4">
                    <p><strong>Bits N Bytes</strong></p>
                        <img src={BitsNBytes} className="img-circle person" alt="BitsNBytes" width="250" height="250"></img>
                        <br></br>
                        <p><strong>Details</strong></p>
                        <p>Coverts US Dollars to other currencies</p>
                        <p>Allows user to pick items from menu</p>
                        <p>Features a joke API</p>
                        <p><a href="https://ambrosiomaxwell.github.io/Project1/">BitsnBytes</a></p>
                </div>
                <div className="col-sm-4">
                    <p><strong>The Weather Dashboard</strong></p>
                    <img src={TheWeatherDashboard} className="img-circle person" alt="TheWeatherDashboard" width="250" height="250"></img>
                    <p><strong>Details</strong></p>
                    <p>Uses a Weather API</p>
                    <p>Javascript and AJAX</p>
                    <p>Current Day and Five Day Forecast</p>
                </div>
                <div className="col-sm-4">
                    <p><strong>Work Day Scheduler</strong></p>
                    <img src={WorkDayPlanner} className="img-circle person" alt="WorkDayPlanner" width="250" height="250"></img>
                    <p><strong>Details</strong></p>
                    <p>Plan your day</p>
                    <p>Save notes with local storage</p>
                    <p>Refreshes each day</p>
                </div>
            </div>
            <div className="row">
            <div className="col-sm-4">
                    <p><strong>Note Taker</strong></p>
                    <img src={NoteTaker} className="img-circle person" alt="NoteTaker" width="250" height="250"></img>
                    <p><strong>Details</strong></p>
                    <p>Create a Note and a Task</p>
                    <p>Stores Notes</p>
                    <p>Deletes Notes</p>
                </div>
                <div className="col-sm-4">
                    <p><strong>Code Quiz</strong></p>
                    <img src={CodeQuiz} className="img-circle person" alt="CodeQuiz" width="250" height="250"></img>
                    <p><strong>Details</strong></p>
                    <p>Test your Javascript knowledge</p>
                    <p>Use Javascript to create HTML elements</p>
                    <p>A timed Event</p>
                </div>
                <div className="col-sm-4">
                    <p><strong>The Wolf</strong></p>
                    <img src={TheWolf} className="img-circle person" alt="TheWolf" width="250" height="250"></img>
                    <p><strong>Details</strong></p>
                    <p>A website about my favorite animal</p>
                    <p>Allows the user to learn about wolves</p>
                    <p>Click to learn more</p>
                </div>
            </div>
        </div>
    );
}

export default Applications;