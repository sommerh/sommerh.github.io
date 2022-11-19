import React from 'react';
// import creatureCoders from '../images/creature-coders.jpg';
import creatureCodersTwo from '../images/creature-coders-2.jpg';

/*
TODO:
add front and back views of projects
instead of repeating, map projects out to components and pass in props
add functionality for turning cards
*/

const Projects = () => {
  return (
    <div id="projects" className="segment yellow-bg-lt">
      <div id="projects-body">
        <h1 className="font-link">Projects</h1>
        <div id="project-icons">
          <div className="project">
            {/* <div className="project-top"> */}
            <img
              src={creatureCodersTwo}
              className="project-img"
              alt="creature-coders"
            />
            {/* </div> */}
            <div className="project-bottom">
              <p className="font-link">Creature Coders</p>
              <p>A mobile-first learn-to-code game</p>
            </div>
          </div>
          <div>project2</div>
          <div>project3</div>
          <div>project4</div>
          <div>project5</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
