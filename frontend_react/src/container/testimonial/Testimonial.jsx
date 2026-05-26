import React, { useState } from 'react';
import './Testimonial.scss';
import images from '../../constants/images';
import { IconChevronLeft, IconChevronRight, IconQuote } from '../../components/Icons';

// ✏️ EDIT ME — add real quotes from clients, managers, mentors, professors.
//  `imgUrl` is the person's photo — drop in src/assets/ and import from
//  constants/images.js if you want a new image.
const testimonials = [
  {
    name: 'Jane Doe',
    company: 'CTO, Acme Inc.',
    text: 'Working with [your name] was a turning point for our product. They shipped a redesign in three weeks that lifted activation by 22%.',
    imgUrl: images.profile,
  },
  {
    name: 'John Smith',
    company: 'Product Lead, Studio X',
    text: 'Rare combination of strong design sense and rock-solid engineering. The kind of teammate you want in the room when things get hard.',
    imgUrl: images.profile,
  },
];

// ✏️ EDIT ME — brands / companies you have worked with.
const brands = [images.adidas, images.amazon, images.asus, images.bolt, images.nb, images.skype, images.spotify];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const next = () => setCurrent((current + 1) % testimonials.length);
  const prev = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="app__testimonial app__flex">
      {testimonials.length > 0 && (
        <>
          <div className="app__testimonial-item app__flex" key={current}>
            <img src={t.imgUrl} alt={t.name} />
            <div className="app__testimonial-content">
              <IconQuote width={28} height={28} />
              <p className="p-text">{t.text}</p>
              <div>
                <h4 className="bold-text">{t.name}</h4>
                <h5 className="p-text">{t.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <button className="app__flex" onClick={prev} aria-label="Previous">
              <IconChevronLeft />
            </button>
            <button className="app__flex" onClick={next} aria-label="Next">
              <IconChevronRight />
            </button>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((b, i) => (
          <div key={`brand-${i}`} className="app__flex">
            <img src={b} alt={`brand-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
