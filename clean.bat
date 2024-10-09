@echo off
echo Cleaning up node_modules, package-lock.json, and build artifacts...

echo Removing node_modules, package-lock.json, and .next from Next.js frontend...
rmdir /s /q node_modules
rmdir /s /q .next
del package-lock.json

echo Cleaning complete!
pause
