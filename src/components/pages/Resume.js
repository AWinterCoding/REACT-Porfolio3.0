import React from "react";
import NavigationBar from "../fragments/NavigationBar";
import Footer from "../fragments/Footer";
import resume from "../pages/pageresources/Resume.pdf";

function Resume() {
    return (<div>
        <NavigationBar />
        <div className="background">
        <div className="container">
        <section>
            <h2>Resume</h2>
            <a href={resume} download={resume}>Download Resume</a>
            <h3>Proficiencies:</h3>
            <ul className="proficiencies">
                <li className="proficiency">MERN</li>
                <li className="proficiency">REACT</li>
                <li className="proficiency">Express</li>
                <li className="proficiency">Mongo</li>
                <li className="proficiency">Node</li>
                <li className="proficiency">HandleBars</li>
                <li className="proficiency">Javascript</li>
                <li className="proficiency">CSS</li>
                <li className="proficiency">mySQL</li>
                <li className="proficiency">Sequelize</li>
            </ul>
        </section>
        <Footer/>
        </div>
        </div>
        </div>);
  }

export default Resume;