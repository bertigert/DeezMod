@echo off
setlocal

set "install_path="
if exist "%~dp0\app.asar" (
    if exist "%~dp0\Deezer.exe" (
        echo It seems you dropped the installer into the main folder, not the resources folder.
        choice /c yn /m "Use the directory at %~dp0resources? "
        if not errorlevel 2 set "install_path=%~dp0resources"
    ) else (
        echo Installation found in the current directory.
        choice /c yn /m "Use this directory? "
        if not errorlevel 2 set "install_path=%~dp0"
    )
)

:check_local_app
if "%install_path%"=="" (
    if exist "%localappdata%\Programs\deezer-desktop\resources\app.asar" (
        echo Installation found at %localappdata%\Programs\deezer-desktop\resources
        choice /c yn /m "Use this directory? "
        if errorlevel 1 if not errorlevel 2 set "install_path=%localappdata%\Programs\deezer-desktop\resources"
    )
)

:specify_install_path
if "%install_path%"=="" (
    set /p "install_path=No installation found, please enter the path to the 'resources' folder (no quotes): "
)

if not exist "%install_path%" (
    echo Path is invalid or does not exist.
    goto :end
)

:normal_mode
echo.
echo Downloading patched app.asar...
echo.

set "download_url=https://github.com/bertigert/DeezMod/releases/latest/download/app.asar"
curl -s -L -o "%install_path%\app.asar.new" "%download_url%"

if not exist "%install_path%\app.asar.new" (
    echo [ERROR] Failed to download app.asar. Check your internet connection or the URL: %download_url%
    goto :end
)

echo Replacing app.asar...
if exist "%install_path%\app.asar" (
    move /y "%install_path%\app.asar" "%install_path%\app.asar.bak" >nul
)
move /y "%install_path%\app.asar.new" "%install_path%\app.asar" >nul

if errorlevel 1 (
    echo [ERROR] Could not replace app.asar. Make sure Deezer is closed!
    goto :end
)
echo Patched. Also created a backup of the original app.asar at %install_path%\app.asar.bak.


:create_plugins_folder
echo.
if not exist "%localappdata%\DeezMod\Data\plugins" (
    echo Creating plugins folder at %localappdata%\DeezMod\Data\plugins...
    md "%localappdata%\DeezMod\Data\plugins"
)

:end
if exist "%install_path%\app.asar.new" del "%install_path%\app.asar.new"

echo.
echo Finished!
echo.
pause