import React from 'react';
import {
  IconLinkedin,
  IconGithub,
  IconTwitter,
  IconInstagram,
} from '../components/Icons';

// ✏️ EDIT ME — LinkedIn is set; replace # with your real GitHub / Twitter / Instagram URLs
const socials = [
  { Icon: IconLinkedin,  href: 'https://www.linkedin.com/in/jeevan-kumar-mitta-34b039394/', label: 'LinkedIn'  },
  { Icon: IconGithub,    href: '#', label: 'GitHub'    },
  { Icon: IconTwitter,   href: '#', label: 'Twitter'   },
  { Icon: IconInstagram, href: '#', label: 'Instagram' },
];

export const SocialRail = () => (
  <div className="app__social-rail" aria-label="Social links">
    {socials.map(({ Icon, href, label }) => (
      <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
        <Icon />
      </a>
    ))}
  </div>
);

export const NavigationDots = () => (
  <div className="app__nav-dots" aria-hidden="true">
    {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
      <a key={item} href={`#${item}`} aria-label={item} />
    ))}
  </div>
);
