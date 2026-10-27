@echo off
title Sistema Interactivo Base de Datos 1 - Siglo 21
echo ========================================================
echo   INICIANDO SISTEMA INTERACTIVO DE ESTUDIO (LOCAL)
echo ========================================================
echo.
echo Servidor corriendo en: http://localhost:3000
echo.
start http://localhost:3000
python -m http.server 3000 --directory "%~dp0Sistema_Estudio_Interactivo"
pause
