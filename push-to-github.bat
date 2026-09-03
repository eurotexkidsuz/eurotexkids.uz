@echo off
title Eurotexkids.uz GitHub Push
cd /d "%~dp0"
echo ========================================================
echo   EUROTEXKIDS.UZ - GITHUB-GA YUKLASH
echo ========================================================
echo.

git add .
git commit -m "Update: Top luxury toast, full-page product details and tabs"
echo.
echo GitHub-ga yuklanmoqda (git push)...
echo.
git push -u origin main
echo.
echo ========================================================
pause
