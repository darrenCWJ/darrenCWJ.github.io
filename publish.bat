@echo off
echo.
echo  Publishing to darrencwj.github.io ...
echo  ----------------------------------------

git add index.html content.js projects.js case-study-tribunal.html case-study-tribunal.js images
git diff --cached --quiet && (echo  No changes to publish. && pause && exit /b)

set /p MSG= Commit message (or press Enter for "update site"):
if "%MSG%"=="" set MSG=update site

git commit -m "%MSG%"
git push

echo.
echo  Done! Your site will be live in ~30 seconds at:
echo  https://darrencwj.github.io/
echo.
pause
