import React, {Component} from 'react';

class ExperienceList extends Component {
  render() {
    return(
      <ul className="experiences">
        <li className="experience">
          <h2 className="role">Graduate Web Developer</h2>
          <h3 className="company"><a href="">BirdBrain</a>, Jan 2018 to Present</h3>
          <div className="details">
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia nisl.
              Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum ornare faucibus.
              Morbi sagittis non odio ac mollis. Suspendisse tristique ante a eleifend volutpat. Mauris ut sodales leo.
              Curabitur suscipit sit amet purus facilisis interdum.
            </p>
            <ul className="skills">
              <li className="skill">WordPress</li>
              <li className="skill">React</li>
              <li className="skill">Magento 2</li>
              <li className="skill">GraphQL</li>
              <li className="skill">Sass</li>
            </ul>
          </div>
        </li>
        {/* <li className="experience">
          <h2 className="role">Graduate Web Developer</h2>
          <h3 className="company">BirdBrain, Jan 2018 to Present</h3>
          <div className="details">
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia nisl.
              Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum ornare faucibus.
              Morbi sagittis non odio ac mollis. Suspendisse tristique ante a eleifend volutpat. Mauris ut sodales leo.
              Curabitur suscipit sit amet purus facilisis interdum.
            </p>
            <ul className="skills">
              <li className="skill">WordPress</li>
              <li className="skill">React</li>
              <li className="skill">Magento 2</li>
              <li className="skill">GraphQL</li>
              <li className="skill">Sass</li>
            </ul>
          </div>
        </li> */}
        {/* <li className="experience">
          <h2 className="role">Graduate Web Developer</h2>
          <h3 className="company">BirdBrain, Jan 2018 to Present</h3>
          <div className="details">
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac neque egestas, molestie felis id, lacinia nisl.
              Integer interdum lorem elit, eget dictum augue pharetra a. Vivamus feugiat diam eget ipsum ornare faucibus.
              Morbi sagittis non odio ac mollis. Suspendisse tristique ante a eleifend volutpat. Mauris ut sodales leo.
              Curabitur suscipit sit amet purus facilisis interdum.
            </p>
            <ul className="skills">
              <li className="skill">WordPress</li>
              <li className="skill">React</li>
              <li className="skill">Magento 2</li>
              <li className="skill">GraphQL</li>
              <li className="skill">Sass</li>
            </ul>
          </div>
        </li> */}
      </ul>
    );
  }
}

export default ExperienceList;
