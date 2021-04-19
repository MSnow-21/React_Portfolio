import React from "react";
import portfolio from "../portfolio.json";
import BitsNBytes from "../assets/imgs/BitsnBytes.PNG";
import TheWeatherDashboard from "../assets/imgs/WeatherDashboardMain.PNG";
import WorkDayPlanner from "../assets/imgs/workdayplanner.PNG";
import NoteTaker from "../assets/imgs/notetaker.PNG";
import CodeQuiz from "../assets/imgs/codequiz.PNG";
import TheWolf from "../assets/imgs/Wolf.PNG";
import Projects from "./Projects";

function Applications() {
    return (
        <div id="applications" className="container container-main">
            <h1 className="applicationhead">My Application Portfolio</h1>
            <p>Different technologies are use to create functional applications for each user</p>
            <p>The applications..</p>
            <div className="row">
                <Projects
                   title={portfolio[0].title}
                   detail={portfolio[0].detail}
                   paraone={portfolio[0].paraone}
                   paratwo={portfolio[0].paratwo}
                   parathree={portfolio[0].parathree}
                   href={portfolio[0].href}
                   image={BitsNBytes}
                />
                <Projects
                   title={portfolio[1].title}
                   detail={portfolio[1].detail}
                   paraone={portfolio[1].paraone}
                   paratwo={portfolio[1].paratwo}
                   parathree={portfolio[1].parathree}
                   href={portfolio[1].href}
                   image={TheWeatherDashboard}
                />
                <Projects
                   title={portfolio[2].title}
                   detail={portfolio[2].detail}
                   paraone={portfolio[2].paraone}
                   paratwo={portfolio[2].paratwo}
                   parathree={portfolio[2].parathree}
                   href={portfolio[2].href}
                   image={WorkDayPlanner}
                />
            </div>
            <br></br>
            <div className="row">    
                <Projects
                   title={portfolio[3].title}
                   detail={portfolio[3].detail}
                   paraone={portfolio[3].paraone}
                   paratwo={portfolio[3].paratwo}
                   parathree={portfolio[3].parathree}
                   href={portfolio[3].href}
                   image={NoteTaker}
                />
                <Projects
                   title={portfolio[4].title}
                   detail={portfolio[4].detail}
                   paraone={portfolio[4].paraone}
                   paratwo={portfolio[4].paratwo}
                   parathree={portfolio[4].parathree}
                   href={portfolio[4].href}
                   image={CodeQuiz}
                />
                <Projects
                   title={portfolio[5].title}
                   detail={portfolio[5].detail}
                   paraone={portfolio[5].paraone}
                   paratwo={portfolio[5].paratwo}
                   parathree={portfolio[5].parathree}
                   href={portfolio[5].href}
                   image={TheWolf}
                />
            </div>
        </div>
    );
}

export default Applications;