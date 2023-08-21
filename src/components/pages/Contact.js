import React from "react";
import NavigationBar from "../fragments/NavigationBar";
import Footer from "../fragments/Footer";

function Contact() {
    return (<div>
        <NavigationBar />
        <div className="background">
        <div className="container">
        <section>
            <h2>Contact Me</h2>
            <div className="contact">
            <form>
                <label>Your Name Here: </label>
                <input required="true" type="text"></input>
                <br></br>
                <label>Email Address: </label>
                <input required="true" type="text"></input>
                <br></br>
                <label>Message: </label>
                <br></br>
                <input id="message" type="text"></input>
                <br></br>
                <button id="submit" type="submit">Submit</button>
            </form>
            </div>
        </section>
        <Footer/>
        </div>
        </div>
        </div>);
  }

export default Contact;