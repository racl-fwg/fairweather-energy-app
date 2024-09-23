@echo off
echo Cleaning up node_modules, package-lock.json, and build artifacts...

:: Navigate to the Next.js frontend project folder
cd next
echo Removing node_modules, package-lock.json, and .next from Next.js frontend...
rmdir /s /q node_modules
rmdir /s /q .next
del package-lock.json

:: Navigate back to the root and into the Sanity backend folder
cd ..
cd sanity
echo Removing node_modules, package-lock.json, and .sanity from Sanity backend...
rmdir /s /q node_modules
rmdir /s /q .sanity
del package-lock.json

echo Cleaning complete!
pause
