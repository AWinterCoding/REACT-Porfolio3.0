import React from 'react';
import {Link} from 'react-router-dom';

function NavigationBar() {
    return (
        <div className='navigationBar'>
            <h2>Alexandra Winter</h2>
            <ul>
            <li>
                <Link to={"/aboutme"}>AboutMe</Link>
            </li>
            <li>
                <Link to={"/portfolio"}>Portfolio</Link>
            </li>
            <li>
                <Link to={"/resume"}>Resume</Link>
            </li>
            <li>
                <Link to={"/contact"}>Contact</Link>
            </li>
            </ul>
        </div>
    );
}

export default NavigationBar;