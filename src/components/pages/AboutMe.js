import React from "react";
import NavigationBar from "../fragments/NavigationBar";
import Footer from "../fragments/Footer";
import Profile from "./pageresources/profile.jpg"

// each of the respective components render with the navigation bar because we are 
// calling the navigation bar component inside of the element
function AboutMe() {
    return (<div>
    <NavigationBar />
    <div className="background">
    <div className="container">
    <section>
    <h2>About Me</h2>
    <img src={Profile} alt="Alexandra's Face" id="profile"></img>
    <h3>Alexandra Winter</h3>
    <p>Hello! My name is Alexandra Winter, I am an aspiring web developer</p>
    <p>As of making this webpage I am currently the most versed in the MERN stack</p>
    <p>However there are a lot of things I enjoy doing outside of web development such as</p>
    <ul className="activites">
        <li className="activity">Camping</li>
        <li className="activity">Hiking</li>
        <li className="activity">Video Games</li>
        <li className="activity">Motorcycles</li>
    </ul>
    <p id="bottom">Please feel free to explore this website I made with REACT.</p>
    </section>
    <Footer/>
    </div>
    </div>
    </div>
    );
  }

export default AboutMe;