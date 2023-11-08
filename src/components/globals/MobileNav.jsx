// MobileNav.js

import React from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineCloseCircle } from "react-icons/ai"

const MobileNav = ({ isOpen, onClose }) => {
  const router = useRouter();

  return (
    <div
      className={`z-50 fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-background text-text dark:bg-darkbackground dark:text-darktext transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <a href="/" className="text-4xl mb-4">
        Home
      </a>
      <a
        href="/blog"
        className={`text-4xl mb-4 ${router.pathname === '/blog' ? 'text-blue-500' : ''}`}
      >
        Blog
      </a>
      <a
        href="/team"
        className={`text-4xl mb-4 ${router.pathname === '/team' ? 'text-blue-500' : ''}`}
      >
        Team
      </a>
      <a
        href="/events"
        className={`text-4xl ${router.pathname === '/events' ? 'text-blue-500' : ''}`}
      >
        Events
      </a>
      <button
        onClick={onClose}
        className="text-5xl mt-10 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
      >
        <AiOutlineCloseCircle />
      </button>
    </div>
  );
};

export default MobileNav;
