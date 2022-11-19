import React from 'react';
// import creatureCoders from '../images/creature-coders.jpg';
import creatureCoders from '../images/creature-coders-border.jpg';
import worx from '../images/bells-custom-worx.jpg';
import wawdt from '../images/wawdt.jpg';
import inhale from '../images/inhale.jpg';

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
            <div className="img-container">
              <img
                src={creatureCoders}
                className="project-img"
                alt="creature-coders"
              />
            </div>
            <div className="project-bottom">
              <p className="font-link">Creature Coders</p>
              <p>A mobile-first learn-to-code game</p>
            </div>
          </div>
          <div className="project">
            <div className="img-container">
              <img
                src={wawdt}
                className="project-img"
                alt="what-are-we-doing-today"
              />
            </div>
            <div className="project-bottom">
              <p className="font-link">What Are We Doing Today?</p>
              <p>
                A decision-making app to get users out of the house and into the
                community
              </p>
            </div>
          </div>
          <div className="project">
            <div className="img-container">
              <img src={worx} className="project-img" alt="bells-custom-worx" />
            </div>
            <div className="project-bottom">
              <p className="font-link">Bell's Custom Worx</p>
              <p>
                An e-commerce site for selling handcrafted decor and furnishings
              </p>
            </div>
          </div>
          <div className="project">
            <div className="img-container">
              <img src={inhale} className="project-img" alt="inhale" />
            </div>
            <div className="project-bottom">
              <p className="font-link">inhale</p>
              <p>
                An interactive wellness site focused on breathing/grounding
                strategies
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
