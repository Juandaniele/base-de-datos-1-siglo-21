@echo off
title STUDY OS - Sistema Interactivo Multi-Materia - Siglo 21
echo =========================================================================
echo   INICIANDO STUDY OS: PLATAFORMA INTEGRAL DE ESTUDIO (LOCAL)
echo   Materias: Base de Datos 1 - Ingenieria de Software - Inteligencia Artificial
echo =========================================================================
echo.
echo Servidor local corriendo en: http://localhost:3000
echo.
start http://localhost:3000
python -m http.server 3000 --directory "%~dp0Sistema_Estudio_Interactivo"
pause
