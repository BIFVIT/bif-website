<p align="center">
	<h2 align="center"> Official Website Codebase  </h2>
	<h4 align="center"> This website serves as a platform to showcase the impactful initiatives undertaken by our NGO and provide information about our events, blogs, and our latest activities.




<h4>
</p>

<p align="center">
	<a href="https://github.com/BIFVIT/bif-website/blob/main/README.md"><img src="https://img.shields.io/badge/Documentation-see%20docs-green?style=flat-square"/></a>
	<a href="https://bifvit.org"><img src="https://img.shields.io/badge/Live%20Site-Link%20to%20UI-orange?style=flat-square"/></a>
	<a href="https://github.com/BIFVIT/bif-website/releases/"><img src="https://img.shields.io/github/tag/BIFVIT/bif-website?include_prereleases=&sort=semver&color=blue" alt="GitHub"></a>
	<a href="#license"><img src="https://img.shields.io/badge/License-Apache-blue" alt="License"></a>
	<a href="https://github.com/BIFVIT/bif-website/issues"><img src="https://img.shields.io/github/issues/BIFVIT/bif-website" alt="issues - bif-website"></a>
	<a href="https://snyk.io/test/github/BIFVIT/bif-website?targetFile=package.json"><img src="https://snyk.io/test/github/BIFVIT/bif-website/badge.svg?targetFile=package.json"></a>
</p>

<a href="https://bifvit.org">
	<img src="https://raw.githubusercontent.com/BIFVIT/bif-website/main/public/bifsitepromobanner.png" />
</a>

<hr/>

<p align="center" style="padding-top: 10px;">
	<img src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next JS"/>
	<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React"/>
	<img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJS"/>
	<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
	<img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
	<img src="https://img.shields.io/badge/google_anaytics-%23ED8B00.svg?style=for-the-badge&logo=googleanalytics&logoColor=white" alt="Google Analytics"/>
	<img src="https://img.shields.io/badge/vercel_analytics-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel Analytics"/>
	<img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git Version Control"/>
	
</p>

## 📝 Description 📝


This is a Next.js application that uses Tailwind CSS for styling. It is deployed to Vercel and has a Snyk integration for scanning for vulnerabilities. The application is static and does not currently feature a database or backend, but it has been designed in a way that makes integrating a database later easier.

All text and data are included in a JSON format separately inside of each component (outside the return function) so that very little modification needs to be done while integrating a backend. Even changing the color theme is made easier because we used [Realtime Colors](https://www.realtimecolors.com/) to pick themes and then exported it as Tailwind export (both light and dark theme) and included it in the Tailwind config.

For developers, we have included a Makefile that makes using repetitive commands like `git add .`, `git commit -m "msg"`, and `git push origin main` easier. This is done through a BAT file, however, and only works on Windows development environments.

## 🚀 Features 🚀

-[] Dark Mode Support: Enhance accessibility with a dark mode feature, catering to users who find colors challenging and for improved contrast. Prioritizing inclusivity and usability.
-[] Accessibility Web Features: Incorporating accessibility web features to ensure an inclusive and user-friendly experience for individuals with diverse needs.
-[] **Multiple Language Support:** Facilitate communication with various schools by providing support for multiple languages, acknowledging the diverse linguistic landscape in our NGO's scope.
-[] **Tailwind Custom Colors:** Enable easy color theming with Tailwind custom colors, allowing seamless adaptation to changes in club colors over time.
-[] **Admin Dashboard:** Intuitive admin dashboard tailored for individuals in management who may not be tech-savvy, ensuring efficient oversight and control.
-[] **Visitor Analytics:** Empower decision-making with detailed visitor analytics, offering insights into the demographics and preferences of the target audience.
-[] **Bot Integrations:** Streamline management tasks with bot integrations for vulnerability scanning, page performance monitoring, and package updates, enhancing overall website maintenance.
-[] **Mobile-First Responsive Design:** Prioritize mobile users with a mobile-first responsive design, aligning with data that highlights the predominant use of mobile devices among our audience.
-[] **Calendar Scheduling Integrations:** Simplify event registrations through calendar scheduling integrations, providing a convenient and efficient way for users to participate in upcoming events.

## ⚙️ Makefile Commands ⚙️

The following commands are available in the Makefile:

* `make r`: Opens localhost 3000 and also runs `npm run dev`
* `make gt`: Pushes to GitHub without having to use multiple commands (requires commit message)

##  🛠️ Usage 🛠️

To install the web application to your system, clone the repository and run it by using the following commands:

```
    git clone https://github.com/NotSooShariff/bif-frontend.git
    cd bif-frontend
    npm install
    npm run dev
```

Once done successfully open your browser to http://localhost:3000.

## 🤝 Contributing 🤝

Contributions are welcome! Please open a pull request if you have any suggestions or improvements.

## 📜 License 📜

This project is licensed under the Apache license. See the LICENSE file for more details.

<p align="center">
	Made with :heart: by <a href="https://bifvit.org">BIF VIT</a>
</p>

