"use client";

import React from "react";
import { FaSun } from "react-icons/fa";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="fixed bottom-16 right-16 p-4 z-50 bg-primary rounded-xl"
      >
        {theme === "light" ? (
          <BsFillMoonStarsFill className="text-2xl bg-primary text-background dark:bg-darkprimary dark:text-darkbackground" />
        ) : (
          <FaSun className="text-2xl bg-primary text-background dark:bg-darkprimary dark:text-darkbackground" />
        )}
        {/* <BsFillMoonStarsFill className="text-2xl  text-background  dark:text-darkbackground" /> */}
      </button>
    </div>
  );
};

export default ThemeSwitch;
