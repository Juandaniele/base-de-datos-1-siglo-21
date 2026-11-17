@echo off
title STUDY OS - Sistema Interactivo Multi-Materia - Siglo 21
echo =========================================================================
echo   INICIANDO STUDY OS: PLATAFORMA INTEGRAL DE ESTUDIO (LOCAL)
echo   Materias: Base de Datos 1 - Ingenieria de Software - Inteligencia Artificial
echo =========================================================================
echo.
echo Servidor local corriendo en: http://localhost:8080
echo.
start http://localhost:8080
python "%~dp0servidor_local.py" 8080
pause
