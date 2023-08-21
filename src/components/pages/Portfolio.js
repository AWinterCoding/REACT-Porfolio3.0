import React from "react";
import NavigationBar from "../fragments/NavigationBar";
import Footer from "../fragments/Footer";
import Cards from "../fragments/ProjectCard";
import projects from "../fragments/Projects";

function Portfolio() {
    return (<div>
        <NavigationBar />
        <div className="background">
        <div className="container">
        <h2>Portfolio</h2>
        <Cards projects={projects}/>
        <Footer/>
        </div>
        </div>
        </div>);
  }

export default Portfolio;