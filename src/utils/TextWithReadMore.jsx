"use client"
import React, { useState } from "react";

const TextWithReadMore = ({ text, wordCount }) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const getShortenedText = () => {
    const words = text.split(" ");
    const shortenedText = words.slice(0, wordCount).join(" ");
    return shortenedText;
  };

  return (
    <div className="text-text dark:text-darktext font-normal">
      {showFullText ? text : getShortenedText()}
      {!showFullText && (
        <span
          className="font-medium text-primary dark:text-darkprimary hover:underline cursor-pointer"
          onClick={toggleText}
        >
          {' '} Read More...
        </span>
      )}
      {showFullText && (
        <span
          className="font-medium text-primary dark:text-darkprimary hover:underline cursor-pointer"
          onClick={toggleText}
        >
          {' '} Collapse text
        </span>
      )}
    </div>
  );
};

export default TextWithReadMore