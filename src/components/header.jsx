import React from "react";
import GithubCorner from 'react-github-corner';

function Heading() {
  return (
    <div>
      <div className="navbar-fixed white blue-text text-lighten-1">
        <nav>
          <div className="white blue-text text-lighten-1 nav-wrapper">
            <a
              href="#!"
              className="white blue-text text-lighten-1 brand-logo logo"
            >
              <i className="material-icons">blur_on</i>
              <span className="hero-text">Tasker</span>
            </a>
            
          </div>
      <GithubCorner href="https://github.com/jitencodes" target="_blank" octoColor="skyBlue" bannerColor="white"/>
        </nav>
      </div>

    </div>
  );
}

export default Heading;
