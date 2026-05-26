import React from 'react';
import './Skills.scss';
import images from '../../constants/images';

// ✏️ EDIT ME — your tech stack. `bgColor` is the round chip behind the icon.
//  Add/remove freely; add new icons to src/assets/ and constants/images.js.
// NOTE: icons live in src/assets/ — we reuse the closest match for things like
// Java/Spring (using the cpp icon as a stand-in). Drop in your own java.png /
// spring.png / aws.png and import in constants/images.js to replace them.
const skills = [
  { name: 'Java',        icon: images.cpp,        bgColor: '#fff3e0' },
  { name: 'Spring Boot', icon: images.node,       bgColor: '#e8f5e9' },
  { name: 'Python',      icon: images.python,     bgColor: '#fff8e1' },
  { name: 'React',       icon: images.react,      bgColor: '#edf2f8' },
  { name: 'JavaScript',  icon: images.javascript, bgColor: '#fff8e1' },
  { name: 'TypeScript',  icon: images.typescript, bgColor: '#e3f2fd' },
  { name: 'Node.js',     icon: images.node,       bgColor: '#e8f5e9' },
  { name: 'REST APIs',   icon: images.api,        bgColor: '#fce4ec' },
  { name: 'HTML5',       icon: images.html,       bgColor: '#fff0ea' },
  { name: 'CSS3',        icon: images.css,        bgColor: '#e1f5fe' },
  { name: 'Git',         icon: images.git,        bgColor: '#fff1ea' },
  { name: 'Figma',       icon: images.figma,      bgColor: '#f3e5f5' },
];

// ✏️ EDIT ME — your experience timeline.
const experiences = [
  {
    year: '2025',
    works: [
      {
        name: 'Senior Frontend Developer',
        company: 'Your Company Inc.',
        desc: 'One or two sentences about what you owned, shipped, or led.',
      },
    ],
  },
  {
    year: '2023',
    works: [
      {
        name: 'Frontend Developer',
        company: 'Previous Company',
        desc: 'Highlights — stack, scale, impact. Numbers > adjectives.',
      },
      {
        name: 'UI Engineer (contract)',
        company: 'Freelance',
        desc: 'Short, scannable. Save details for the conversation.',
      },
    ],
  },
  {
    year: '2021',
    works: [
      {
        name: 'Junior Developer',
        company: 'Where you started',
        desc: 'What you learned and what you built that you are proud of.',
      },
    ],
  },
];

const Skills = () => {
  return (
    <div id="skills" className="app__skills app__flex">
      <h2 className="head-text">Skills & Experience</h2>

      <div className="app__skills-container">
        <div className="app__skills-list">
          {skills.map((skill) => (
            <div className="app__skills-item app__flex" key={skill.name}>
              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </div>
          ))}
        </div>

        <div className="app__skills-exp">
          {experiences.map((exp) => (
            <div className="app__skills-exp-item" key={exp.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{exp.year}</p>
              </div>
              <div className="app__skills-exp-works">
                {exp.works.map((work) => (
                  <div className="app__skills-exp-work" key={work.name}>
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                    <p className="p-text" style={{ marginTop: 6 }}>{work.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
