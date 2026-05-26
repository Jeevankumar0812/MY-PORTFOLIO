import React from 'react';
import './Header.scss';
import images from '../../constants/images';

const scaleVariants = ['react', 'redux', 'sass'];

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <div className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span role="img" aria-label="hand">👋</span>
            <div style={{ marginLeft: 16 }}>
              <p className="p-text">Hello, I am</p>
              {/* ✏️ EDIT ME — Your full name */}
              <h1 className="head-text">Jeevan Kumar Mitta</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            {/* ✏️ EDIT ME — Your titles / what you do (1–3 lines) */}
            <p className="p-text">Java Full Stack Developer</p>
            <p className="p-text">AI Engineer</p>
            <p className="p-text">Problem Solver</p>
          </div>
        </div>
      </div>

      <div className="app__header-img">
        {/* ✏️ EDIT ME — replace src/assets/profile.jpg with your own photo (keep the filename) */}
        <img src={images.profile} alt="profile_bg" />
        <img src={images.circle} alt="profile_circle" className="overlay_circle" />
      </div>

      <div className="app__header-circles">
        {scaleVariants.map((circle, index) => (
          <div className="circle-cmp app__flex" key={`circle-${index}`}>
            <img src={images[circle]} alt={circle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
