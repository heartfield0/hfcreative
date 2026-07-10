@echo off
cd /d "%~dp0"
echo Publishing your changes to GitHub...
git add -A
git commit -m "Update portfolio images/content"
git push origin master
echo.
echo Done. Vercel will redeploy automatically in a minute or two.
pause
