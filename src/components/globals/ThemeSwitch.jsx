import React from 'react'
import { FaSun } from "react-icons/fa6"
import { BsFillMoonStarsFill } from "react-icons/bs"

const ThemeSwitch = () => {
  return (
    <div>
      <div className="fixed bottom-16 right-16 p-4 z-50 bg-primary rounded-xl">
            
      <BsFillMoonStarsFill className="text-2xl bg-primary text-background dark:bg-darkprimary dark:text-darkbackground" />
      {/* <FaSun className="text-2xl bg-primary text-background dark:bg-darkprimary dark:text-darkbackground" /> */}

          
    </div>
    </div>
  )
}

export default ThemeSwitch