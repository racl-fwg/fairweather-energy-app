@echo off
echo Reinstalling node_modules...

:: Navigate to the Next.js frontend project folder and install dependencies
cd next
echo Installing dependencies for Next.js frontend...
npm install

:: Navigate back to the root and into the Sanity backend folder
cd ..
cd sanity
echo Installing dependencies for Sanity backend...
npm install

echo All dependencies have been installed!
pause
