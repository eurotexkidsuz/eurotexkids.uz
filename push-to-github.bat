@echo off
title Eurotexkids.uz GitHub Push
chcp 65001 >nul
echo ========================================================
echo   EUROTEXKIDS.UZ - GITHUB VA SAYTGA YUKLASH TIZIMI
echo ========================================================
echo.
cd /d "%~dp0"

echo [1/3] O'zgarishlar saqlanmoqda...
git add .
git commit -m "Update: Big top-center burgundy pill toast, dedicated full-page product details, and official contacts"

echo.
echo [2/3] GitHub serveriga yuklanmoqda (git push)...
git push -u origin main
if %ERRORLEVEL% EQU 0 (
    echo.
    echo ========================================================
    echo   MUOFFAQIYATLI YUKLANDI! ✅
    echo   Render.com 1 daqiqada eurotexkids.uz saytini yangilaydi!
    echo ========================================================
    goto :end
)

echo.
echo ========================================================
echo   DIQQAT: GitHub ruxsati talab qilinmoqda!
echo ========================================================
echo Agar brauzer oynasi ochilgan bo'lsa, 'eurotexkidsuz' 
echo akkauntingiz bilan "Sign In" yoki "Authorize" tugmasini bosing.
echo.
echo Yoki GitHub Personal Access Token (ghp_...) bormi?
set /p USER_TOKEN="GitHub Tokenni kiriting (yo'q bo'lsa Enter bosing): "
if not "%USER_TOKEN%"=="" (
    git remote set-url origin https://%USER_TOKEN%@github.com/eurotexkidsuz/eurotexkids.uz.git
    echo.
    echo Token orqali qayta yuklanmoqda...
    git push -u origin main
    if %ERRORLEVEL% EQU 0 (
        echo.
        echo ========================================================
        echo   MUOFFAQIYATLI YUKLANDI! ✅
        echo ========================================================
        goto :end
    )
)

:end
echo.
pause
