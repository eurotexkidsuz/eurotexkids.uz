@echo off
title Eurotexkids.uz GitHub Push
echo ========================================================
echo Eurotexkids.uz - GitHub-ga barcha kodlarni yuklash
echo ========================================================
echo.
cd /d "%~dp0"
git add .
git commit -m "Add size guide admin management, fix dynamic rendering and styles"
git push -u origin main
echo.
echo ========================================================
echo Kodlar muvaffaqiyatli GitHub-ga yuklandi!
echo Render.com 1-2 daqiqada yangi versiyani jonli saytga chiqaradi.
echo ========================================================
pause
