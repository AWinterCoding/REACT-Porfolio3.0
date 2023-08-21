import React from "react";


export default function ReturnCards({projects}){
    return(
        <div className="cardHolder">
        {projects.map((project) => (
          <div className="card">
            <br></br>
            <h3>{`${project.ProjectName}`}</h3>
            <img src={project.picture} alt="project" className="cardpic"></img>
            <ul className="cardList">
            <li className="cardAnchor">
            <a href={project.GitHub}>GitHub</a>
            </li>
            <br></br>
            <li className="cardAnchor">
            <a href={project.VideoLink}>Video Link</a>
            </li>
            <br></br>
            <li className="cardAnchor">
            <a href={project.DeployedApplication}>Deployed Application</a>
            </li>
            </ul>
          </div>
        ))}
            </div>
        );
}

