import React from 'react';
import './About.scss';
import images from '../../constants/images';

// ✏️ EDIT ME — change the title, description and image for each "about" card.
//  Images live in src/assets/  (about01.png … about04.png). Drop in your own
//  artwork there and re-import from constants/images.js if you rename them.
const abouts = [
  {
    title: 'Java Backend',
    description: 'I design and build robust backend services with Java and Spring Boot — REST APIs, microservices and data layers built to scale.',
    imgUrl: images.about01,
  },
  {
    title: 'Full-Stack Web',
    description: 'I ship end-to-end web apps using React on the front and Java on the back — clean APIs, fast pages, smooth UX.',
    imgUrl: images.about02,
  },
  {
    title: 'AI Engineering',
    description: 'I integrate LLMs and ML models into real products — prompt design, RAG pipelines, evals and production-grade deployment.',
    imgUrl: images.about03,
  },
  {
    title: 'Cloud & DevOps',
    description: 'Containerised services on AWS / Azure with CI/CD, observability and infra-as-code so deploys are boring and reliable.',
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <div id="about" className="app__about app__flex">
      <h2 className="head-text">
        I Know That <span>Good Design</span>
        <br /> Means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <div className="app__profile-item" key={about.title + index} style={{ animationDelay: `${index * 0.1}s` }}>
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
