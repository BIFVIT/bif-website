# BIF Official Website

> ⚠️ **Note:** This project is still under development


## Description

This is a Next.js application that uses Tailwind CSS for styling. It is deployed to Vercel and has a Snyk integration for scanning for vulnerabilities. The application is static and does not currently feature a database or backend, but it has been designed in a way that makes integrating a database later easier.

All text and data is included in a JSON format separately inside of each component (outside the return function) so that very little modification needs to be done while integrating a backend. Even changing the color theme is made easier because we used [Realtime Colors](https://www.realtimecolors.com/) to pick themes and then exported it as Tailwind export (both light and dark theme) and included it in the Tailwind config.

For developers, we have included a Makefile that makes using repetitive commands like `git add .`, `git commit -m "msg"`, and `git push origin main` easier. This is done through a BAT file, however, and only works on Windows development environments.

## Makefile Commands

The following commands are available in the Makefile:

* `make r`: Opens localhost 3000 and also runs `npm run dev`
* `make gt`: Pushes to GitHub without having to use multiple commands (requires commit message)

## Usage

To install the web application to your system, clone the repository and run it by using the following commands:

```
    git clone https://github.com/NotSooShariff/bif-frontend.git
    cd bif-frontend
    npm install
    npm run dev
```

Once done sucessfully open your browser to http://localhost:3000.

## Contributing

Contributions are welcome! Please open a pull request if you have any suggestions or improvements.

