import { Github, Instagram, Facebook } from 'lucide-react';
import React from 'react';

const SocialMediaComponent = () => {
  const socialMediaLinks = [
    { url: 'https://tiktok.com', icon: <Github width={30} height={30} /> },
    { url: 'https://facebook.com', icon: <Facebook width={30} height={30} /> },
    {
      url: 'https://www.instagram.com/equicync',
      icon: <Instagram width={30} height={30} />,
    },
  ];

  return (
    <div className='py-2'>
      <ul className='flex'>
        {socialMediaLinks.map((link, index) => (
          <li key={index} className='flex p-1 '>
            <a href={link.url} target='_blank' rel='noopener noreferrer'>
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaComponent;
