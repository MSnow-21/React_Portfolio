import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./components/Footer";
import Applications from "./components/Applications";
import ProfessionalLinks from "./components/ProfessionalLinks";
import About from "./components/About";
import Navbar from "./components/Navbar";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Switch>
          <Route exact path={["/","/about"]} >
            <About /> 
          </Route> 
          <Route exact path="/professionallinks" >
            <ProfessionalLinks />
          </Route>
          <Route exact path="/applications" >
           <Applications />
          </Route>
          </Switch>
        <Footer/>
      </div>
    </Router>
 
  );
}

export default App;
