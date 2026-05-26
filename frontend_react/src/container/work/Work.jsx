import React, { useState } from 'react';
import './Work.scss';
import images from '../../constants/images';
import { IconExternal, IconCode } from '../../components/Icons';

// ✏️ EDIT ME — replace with your real projects.
//  `tags` are used by the filter buttons below. Add any tags you like.
//  `imgUrl` can be any asset under src/assets/  — drop screenshots in there
//  and re-import from constants/images.js if you want new ones.
const projects = [
  {
    title: 'Project One',
    description: 'A short, punchy one-liner about what this project does and why it matters.',
    projectLink: '#',
    codeLink: '#',
    imgUrl: images.about01,
    tags: ['React JS', 'Web App'],
  },
  {
    title: 'Project Two',
    description: 'Briefly describe the problem, your approach, and the outcome (numbers help).',
    projectLink: '#',
    codeLink: '#',
    imgUrl: images.about02,
    tags: ['UI/UX'],
  },
  {
    title: 'Project Three',
    description: 'What was the stack? What did you learn? One or two sentences is plenty.',
    projectLink: '#',
    codeLink: '#',
    imgUrl: images.about03,
    tags: ['Mobile App'],
  },
  {
    title: 'Project Four',
    description: 'Anchor on outcomes — e.g. "cut load time by 40%" or "shipped to 10k users".',
    projectLink: '#',
    codeLink: '#',
    imgUrl: images.about04,
    tags: ['React JS'],
  },
];

const filters = ['All', 'UI/UX', 'Web App', 'Mobile App', 'React JS'];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateClass, setAnimateClass] = useState('');

  const visible = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.tags.includes(activeFilter));

  const handleFilter = (item) => {
    setAnimateClass('hide');
    setTimeout(() => {
      setActiveFilter(item);
      setAnimateClass('show');
    }, 200);
  };

  return (
    <div id="work" className="app__works app__flex">
      <h2 className="head-text">
        My Creative <span>Portfolio</span> Section
      </h2>

      <div className="app__work-filter">
        {filters.map((item, index) => (
          <button
            key={index}
            onClick={() => handleFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className={`app__work-portfolio ${animateClass}`}>
        {visible.map((work, index) => (
          <div className="app__work-item app__flex" key={index} style={{ animationDelay: `${index * 0.08}s` }}>
            <div className="app__work-img app__flex">
              <img src={work.imgUrl} alt={work.title} />

              <div className="app__work-hover app__flex">
                <a href={work.projectLink} target="_blank" rel="noreferrer" aria-label="View project">
                  <div className="app__flex"><IconExternal /></div>
                </a>
                <a href={work.codeLink} target="_blank" rel="noreferrer" aria-label="View code">
                  <div className="app__flex"><IconCode /></div>
                </a>
              </div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
